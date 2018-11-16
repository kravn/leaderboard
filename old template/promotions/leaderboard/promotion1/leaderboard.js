var header = new Vue({
    el: '#header',
    data: {
        title: 'Toptrend - Tournament'
    }
})

/**
 * Created by administrator on 14/03/2018.
 */
var leaderboard = new Vue({
    el: '#app',

    mounted: function(){
        //localStorage.setItem('firstVisit', true);
        //$('.collapsible').click(function(){$('.more-players>.row').toggle()});
        console.log(this)
    },

    created: function() {
        this.selectedLanguage = this.lang;
        //localStorage.setItem("leaderboard", '');
        //localStorage.setItem("lastPageRefresh", '');
        var gamesCollection = [];
        //$('.collapsible').click(function(){$('.more-players>.row').toggle()});
        if (!localStorage.firstVisit || (localStorage.firstUrlVisited != window.location.href)) {
            console.log('Data displayed for the first time.');
            localStorage.firstUrlVisited = window.location.href;
            localStorage.firstVisit = 1;
            localStorage.leaderboard = '';
            getLeaderboard(board.leaderBoard.findByHandle);
        }
        else {
            // If the data is not available get the data from the API
            if ( localStorage.leaderboard.length < 1 || TimeExceedsCutoff(new Date(), new Date(localStorage.lastPageRefresh), this.refreshRate) ) {
                console.log('Data displayed from XML return call.');
                getLeaderboard(board.leaderBoard.findByHandle);
            }
            // If data is already stored, loads it and skip the API request
            else {
                console.log('Data displayed from the cache.');
                this.leaderboard = JSON.parse(window.localStorage.leaderboard);
                //sthis.gamesCollection = JSON.parse(window.localStorage.gamesCollection);
            }
            localStorage.firstUrlVisited = window.location.href;
        }

        function isNewUrl() {

        }

        function getLeaderboard(leaderboardAPI) {
            $.get(leaderboardAPI, function(xml) {
                var tournamentLeaders = new PlayerBuilder( $(xml).find('Leaderboard'), false );
                //leaderboard.url.topNum = tournamentLeaders.players.length;
                leaderboard.leaderboard = tournamentLeaders; //getTopPlayers(tournamentLeaders);
                localStorage.setItem("leaderboard", JSON.stringify(leaderboard.leaderboard));
            });
            $.get(board.menuUrl, function(xml) {
                var xRoot = $(xml).find('xRoot');
                var g = new GameBuilder(xRoot.children('menu'));
                leaderboard.gamesCollection = gamesCollection;
                localStorage.setItem("gamesCollection", JSON.stringify(leaderboard.gamesCollection));
                leaderboard.lastRefresh = new Date();
            });
            localStorage.setItem('lastPageRefresh', new Date());
        }


        function TimeExceedsCutoff(currentTime, lastRefresh, cutoff) {
            var res = currentTime-lastRefresh;
            var minDiff = Math.floor((res/1000/60) << 0)
            console.log('Time in minutes: ' + minDiff);
            if (minDiff >= cutoff )
                return true;
            else //console.log('Checking time interval: ' + res);
                return false;
        }

        function GameBuilder(xml) {
            var isGame = xml.attr('gameName') ? true : false;
            var getGames = function(nodeName) {
                return xml.children(nodeName).map(function () {
                    return new GameBuilder($(this), true);
                });
            }
            var getMenu = function(nodeName) {
                return xml.children(nodeName).map(function () {
                    return new GameBuilder($(this))
                });
            }
            if (isGame) {
                this.id = xml.attr('id');
                this.display = xml.attr('display');
                gamesCollection.push({id: this.id, name: this.display});
                //console.log(xml.attr('display'));
            }
            else {
                this.items = getMenu('submenu');
                this.games = getGames('game');
            }
        }

        function PlayerBuilder(xml, isPlayer) {
            var hasSubItems = $(xml).children('Leader').length > 0 ? true : false;
            if (isPlayer) {
                //this.name = removePrefix(xml.find('clientAccount').text()); //.slice(0); //removePrefix(xml.find('clientAccount').text()); //xml.find('userName').text().replace(app.prefixStr, '');
                this.name = xml.find('clientAccount').text(); //.slice(0); //removePrefix(xml.find('clientAccount').text()); //xml.find('userName').text().replace(app.prefixStr, '');
                this.noOfBets = xml.find('numberOfBets').text();
                this.totalHandle = xml.find('totalHandle').text();
            }
            var getPlayers = function(nodeName) {
                return xml.children(nodeName).map(function () {
                    return new PlayerBuilder($(this), true);
                });
            };
            if (hasSubItems) this.players = getPlayers('Leader');
        }

        function removePrefix(str) {
            var temp = '';
            if (splitCtr = str.split('lt118_LT').length == 1) return str;
            else {
	            $(str.split('lt118_LT')).each(function(a, b){
					if(a!=0) temp += b;
				});
	            return temp;
			}
        }
    },
    
    methods: {

        loadLanguage: function(language, code) {
            return this.currentUrl.split('?')[0] + '?lang=' + code
        },

        getTranslations: function(lang, labels, word, num) {
            return num ? labels[lang][word].replace('?', num) : labels[lang][word];
        },

        getTranslations2: function(label, word, num) {
            var label = label.find(item => item.key === word);
            return num ? label.label.replace('?', num) : label.label;
        },

        splitGameIds: function(games) {
            return games.split(',');
        },

        getParticipatingGames: function(gameId, lang) {
            var temp, tempLang = this.langSupported.indexOf(lang) >= 0 ? lang : this.langDefault;
            $(this.gamesCollection).each( function(x) {
                //if (this.id == id) { temp = this.name; console.log('ID: ' + id + ' GAME: ' + this.name); return false; }
                if (this.id == gameId) { temp = games[tempLang][gameId].name; console.log('ID: ' + gameId + ' GAME: ' + this.name); return false; }
            });
            return temp;
        },
        
        getParticipatingGames2: function(gameId, lang) {
	        game_list = this.url.gameIds.split(',')
	        game = translations.games[lang].find(item => item.id === parseInt(gameId))
	        console.log('--- ' + game.name + gameId)
            return game.name
        },

        getTopPlayers: function(feed) {
            var ctr = 1;
            var sortable = [];
            if (!feed) return false;
            else {
                for (var player in feed) {
                    if (feed[player].totalHandle != undefined) {
                        sortable.push([player, feed[player]]);
                    }
                }
                sortable.sort(function(a, b) {
                    return  b[1].totalHandle - a[1].totalHandle;
                });
                return sortable;
            }
        },

        dateToYMD: function(date) {
            var d = date.getDate();
            var m = date.getMonth() + 1; //Month from 0 to 11
            var y = date.getFullYear();
            return '' + (m<=9 ? '0' + m : m) + '/' + (d <= 9 ? '0f' + d : d) + '/' + y;
        },
        commarize: function(newValue) {
	        var amount = newValue.split('.')[0]
            const result = amount.replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return result + '.' + newValue.split('.')[1];
        },

        maskedString: function(str, ctr) {
            //this.playerCount = ctr;
            var temString = '';
            for(var a = 0; a < str.length; a++) {
                if (a % 2 == 0) temString += str[a].toUpperCase();
                else temString += '*';
            }
            return temString;
        },
        timeToHMS: function() {
            var time = new Date();
            return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        },

        togglePlayers: function() {
            $('.more-players>.row').toggle()
            $('html, body').animate({
                scrollTop: $(".break-line").offset().top
            }, 500);
            if (this.toggleMorePlayers) { this.toggleMorePlayers = false; this.toggleLessPlayers = true; }
            else { this.toggleMorePlayers = true; this.toggleLessPlayers = false; }
        },

        toggleList: function() {
            $('.nominees').toggle()
            if (this.toggleMorePlayers) { this.toggleMorePlayers = false; this.toggleLessPlayers = true; }
            else { this.toggleMorePlayers = true; this.toggleLessPlayers = false; }
        }

    },

    data: {
        app: app,
        currentUrl: window.location.href,
        games: [],
        gamesCollection: '',
        isSelectorHidden: false,
        labels: translations,
        labels2: translations.labels,
        lang: url.lang,
        languages: translations.languages,
        langSupported: ['en', 'cn'],
        langDefault: 'en',
        langSelector: false,
        lastRefresh: '',
        leaderboard: '',
        leaderboardUrl: 'js/mock_data/leaderboard.xml',
        leaderboardListLimit: 1,
        players: {},
        prizes: translations.prizes,
        refreshRate: 60, //in minutes
        selectedLanguage: 'English',
        subtitle: 'Top 10 Players',
        title: 'TTG',
        toggleMorePlayers: true,
        toggleLessPlayers: false,
        translations: translations,
        playerCount: url.topNum,
        url: url,
        headTitle: [
            {
                id: 1,
                title: 'TTG好运周周赢',
                subtitle: '万元彩金+免费旋转 好运1+1',
                type: 'title',
                item: 1

            }
        ],

        texts: {
            cn: [
                {
                    id: 1,
                    title: '活动时间:',
                    content: '北京时间2018年12月3日 00:00:00 至 2018年12月6日 23:59:59 (共4天)',
                    type: 'sentence'
                },
                {
                    id: 2,
                    title: '活动总奖金:',
                    content: '7,580 人民币+760次免费旋转 (最高达奖金11,580人民币)',
                    type: 'sentence'
                },
                {
                    id: 3,
                    title: '活动总奖金+免费旋转列表:',
                    content: '',
                    type: 'table',
                    children: {
                        items: [
                            ['排名', '赢家人数', '奖金与免费旋转奖励次数'],
                            ['1', '1', 'RMB 3,288 + 38次免费旋转'],
                            ['2', '1', 'RMB 1,688 + 38次免费旋转'],
                            ['3', '1', 'RMB 1,088 + 38次免费旋转'],
                            ['4', '1', 'RMB 688 + 38次免费旋转'],
                            ['5', '1', 'RMB 388 + 38次免费旋转'],
                            ['6 to 10', '5', 'RMB 88 + 38次免费旋转'],
                            ['11 to 20', '10', '38次免费旋转'],
                            ['合计', '20', '']
                        ]
                    }
                },
                {
                    id: 4,
                    title: '免费旋转赠奖细项 :',
                    content: '',
                    type: 'table',
                    children: {
                        items: [
                            ['赠奖游戏', '恐龙之王'],
                            ['免费旋转次数', '38'],
                            ['每次旋转金额', 'RMB : 1'],
                            ['最大支付额', '200'],
                            ['可领取时间', '12/8 00:00:00 - 12/9 23:59:59, 2018 (周六到周日)']
                        ]
                    }
                },
                {


                    id: 5,
                    title: '活动游戏列表 :',
                    content: '',
                    type: 'table',
                    children: {
                        items: [
                            ['序号', '中文游戏名称', '英文游戏名称', '游戏代码'],
                            ['1', '五个海盗 H5', 'Five Pirates H5', '1067'],
                            ['2', '金海豚 H5', 'Dolphin Gold H5', '1055'],
                            ['3', '疯狂的猴子 H5', 'Mad Monkey H5', '1051'],
                            ['4', '天神宙斯 H5', 'ThunderingZeus H5', '1068'],
                            ['5', '火辣金砖 H5', "Chilli Gold H5", '1053'],
                            ['6', '海神秘宝 H5', "Neptune's Gold H5", '1099'],
                            ['7', '恐龙之王', 'King Dinosaur', '1107'],
                            ['8', '功夫传奇对决', 'Kung Fu Showdown', '1043'],
                            ['9', '英雄之战', 'Battle Heroes', '1091'],
                            ['10', '死亡日', 'Dia De Muertos', '1098']
                        ]   
                    }
                },
                {
                    id: 6,
                    title: '活动规则与条款 :',
                    content: '',
                    type: 'bullets',
                    children: [
                        '在参赛期间指定游戏中有效总投注额（有效流水）最多的前20名玩家赢得本次比赛。',
                        '最低有效总投注额（有效流水）为RMB 10,000,才符合活动资格。',
                        '前20名在排行榜中的玩家为赢家,但前50名玩家都将显示在排行榜中。',
                        '获胜者将在锦标赛结束后的1个工作日宣布 (12/7)。',
                        '若同名次有一个以上的赢家将同时配有奖金配至第20名次为止。',
                        '排行榜每小时更新一次。',
                        '平台保留随时修改，暂停或取消促销的权利。'
                    ]
                },
                {
                    id: 7,
                    title: '排行榜 :',
                    content: '',
                    type: 'sentence'
                }
            ]
        },

        prizes: [
            'RMB 3,288 + 38次免费旋转',
            'RMB 1,688 + 38次免费旋转',
            'RMB 1,088 + 38次免费旋转',
            'RMB 688 + 38次免费旋转',
            'RMB 388 + 38次免费旋转',
            'RMB 88 + 38次免费旋转',
            'RMB 88 + 38次免费旋转',
            'RMB 88 + 38次免费旋转',
            'RMB 88 + 38次免费旋转',
            'RMB 88 + 38次免费旋转',
            '38 次免费旋转',
            '38 次免费旋转',
            '38 次免费旋转',
            '38 次免费旋转',
            '38 次免费旋转',
            '38 次免费旋转',
            '38 次免费旋转',
            '38 次免费旋转',
            '38 次免费旋转',
            '38 次免费旋转'
        ]
    }
});

