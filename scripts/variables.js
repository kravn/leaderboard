
var isMobileDevice = {
    Android: function() { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function() { return navigator.userAgent.match(/IEMobile/i);  },
    any: function() {
        return (isMobileDevice.Android() || isMobileDevice.BlackBerry() || isMobileDevice.iOS() || isMobileDevice.Opera() || isMobileDevice.Windows());
    }
}

// ==================================================
// REGISTER APPLICATION SETTING VALUES/VARIABLES HERE
// ==================================================
var variables = function() {
    
    var data = {
    	
        app: {
            currentTime: '',
            operatorPrefix: 'LF123_',
            stringMask: '*',
            banner: true,
            termsAndConditions: false,
            deviceUsed: '',
            boardType: 'getBoardByBets', // getBoardByBets or getBoardByHandle
            leaderboardTableHeader: {
                getBoardByBets: [
                    { sortable: false, text: '',  value: 'player' },
                    { sortable: false, text: '',  value: 'total_wager' },
                    { sortable: false, text: '', value: 'prize' },
                ],
                getBoardByHandle: [
                    { sortable: false, text: '', value: 'player' },
                    { sortable: false, text: '', value: 'bet_count' },
                    { sortable: false, text: '', value: 'prize' },
                ]
            }
            
        },

        url: {
            host: 'http://ams-games.ttms.co/', //'http://dev01-games.toptrend.co/', //http://ams-games.ttms.co/', //'http://qa01-games.toptrend.co/',
            params: {
                fromDate: '1/1/2017',
                gameIds: '1063,1055,1051,1069,1061,1066,1099,1107,1043,1091',
                includeSubAff: false,
                lang: 'cn',
                lsdId: 'longfa123',
                toDate: '11/1/2018',
                topNum: 100, 
                topNumLimit: 50,
            },
            bases: {
                imagesUrl: 'player/assets/images/games/',
                leaderboard: 'player/TournamentLeaderBoard.action',
                menuUrl: 'player/Menu.action',
                translationUrl: 'casino/default/lobby/i18n/',
            },
            servlets: [
                { 
                    base: 'leaderboard', 
                    meta: 'getBoardByBets', 
                    tokens: ['fromDate','toDate','lsdId','gameIds','topNum','includeSubAff'], 
                    url_path: '?findByBets&fromDate=${fromDate}&toDate=${toDate}&lsdId=${lsdId}&gameIds=${gameIds}&topNum=${topNum}&includeSubAff=${includeSubAff}'
                },
                { 
                    base: 'leaderboard', 
                    meta: 'getBoardByHandle', 
                    tokens: ['fromDate','toDate','lsdId','gameIds','topNum','includeSubAff'], 
                    url_path: '?findByHandle&fromDate=${fromDate}&toDate=${toDate}&lsdId=${lsdId}&gameIds=${gameIds}&topNum=${topNum}&includeSubAff=${includeSubAff}'
                },
                { 
                    base: 'menuUrl', 
                    meta: 'getMenu', 
                    tokens: ['lang','deviceType','lsdId'], 
                    url_path: '?getMenu&playerHandle=999999&accName=FunAcct&lang=${lang}&deviceType=${deviceType}&lsdId=${lsdId}'
                },
                { 
                    base: 'translationUrl', 
                    meta: 'getTranslations', 
                    tokens: ['lang'], 
                    url_path: 'lobby_${lang}.xml'
                },
            ]
        },

        languages: [
            {
                language: 'English',
                code: 'en'
            },
            {
                language: 'Chinese',
                code: 'cn'
            },
        ],

        images: {
            banners: [
                { src: 'css/images/b1.png' },
                { src: 'css/images/b2.png' },
                { src: 'css/images/b3.png' },
                { src: 'css/images/b4.png' }
            ],
            generic: [
                { src: 'css/images/bg.png' },
                { src: 'css/images/leaderboard.png' },
                { src: 'css/images/terms-and-conditions.png' },
            ]
        },

        headTitle: [
            {
                id: 1,
                title: 'TTG重磅来袭',
                subtitle: '彩金+免费旋转 好运1+1',
                type: 'title',
                item: 1,

            },
        ],

        games: {
            en: [
                { id: 1043, name: 'Kung Fu Showdown'},
                { id: 1047, name: 'Dynasty Empire'},
                { id: 1051, name: 'Mad Monkey H5'},
                { id: 1052, name: "Frogs 'n Flies H5"},
                { id: 1053, name: 'Chilli Gold H5'},
                { id: 1054, name: 'Year of the Monkey H5'},
                { id: 1055, name: 'Dolphin Gold H5'},
                { id: 1056, name: 'Dragon King H5'},
                { id: 1057, name: 'Silver Lion H5'},
                { id: 1058, name: 'Lost Temple H5'},
                { id: 1060, name: 'Fortune Pays H5'},
                { id: 1061, name: 'Hot Volcano H5'},
                { id: 1063, name: 'Fu Star H5'},
                { id: 1064, name: 'Fire Goddess H5'},
                { id: 1066, name: "Aladdin's Legacy H5"},
                { id: 1067, name: 'Five Pirates H5'},
                { id: 1068, name: 'Thundering Zeus H5'},
                { id: 1091, name: 'Battle Heroes'},
                { id: 1100, name: 'Tiny Door Gods'},
                { id: 1101, name: 'Gem Riches'},
                { id: 1102, name: 'Wild Triads'},
                { id: 1104, name: 'Diamond Tower H5'},
                { id: 1107, name: 'King Dinosour'},
                { id: 1069, name: 'More Monkeys H5'},
                { id: 1072, name: 'Super Kids'},
                { id: 1073, name: 'Gong Xi Fa Cai'},
                { id: 1075, name: 'Detective Black Cat'},
                { id: 1077, name: 'Golden Amazon'},
                { id: 1078, name: 'Huluwa'},
                { id: 1079, name: 'Reels of Fortune'},
                { id: 1080, name: 'Golden Dragon'},
                { id: 1086, name: 'League Of Champions'},
                { id: 1087, name: 'Ying Cai Shen'},
                { id: 1089, name: 'Monkey Luck'},
                { id: 1091, name: 'Battle Heroes'},
                { id: 1092, name: 'Cherry Fortune'},
                { id: 1099, name: 'Neptunes Gold H5'},
                { id: 14281, name: 'Romeo'},
                { id: 14282, name: 'Paris Nights'},
                { id: 14283, name: 'Asia Wins'},
                { id: 14284, name: 'Dublin Gold'},
                { id: 14616, name: 'Luck Reels'},
                { id: 14646, name: 'Legend of Cleopatra'},
                { id: 14647, name: 'Kingdom of the Sun: Golden Age'},
                { id: 14648, name: 'Claws vs Paws'},
                { id: 14716, name: 'Lucky Reels'},
                { id: 14746, name: 'Legend of Cleopatra'},
                { id: 14747, name: 'Kingdom of the Sun: Golden Age'},
                { id: 14748, name: 'Claws vs Paws'},
            ],
            cn: [
                { id: 1043, name: '功夫传奇对决'},
                { id: 1047, name: '帝国王朝'},
                { id: 1051, name: '疯狂的猴子H5'},
                { id: 1052, name: "捕蝇大赛H5"},
                { id: 1053, name: '火辣金砖H5'},
                { id: 1054, name: '猴年大吉H5'},
                { id: 1055, name: '金海豚H5'},
                { id: 1056, name: '海龙王H5'},
                { id: 1057, name: '银狮奖H5'},
                { id: 1058, name: '失落的神庙H5'},
                { id: 1060, name: '招财进宝H5'},
                { id: 1061, name: '炽热火山H5'},
                { id: 1063, name: '福星高照H5'},
                { id: 1064, name: '美女火神H5'},
                { id: 1066, name: "阿拉丁神迹H5"},
                { id: 1067, name: '五个海盗H5'},
                { id: 1068, name: '神奇的宙斯H5'},
                { id: 1069, name: '更多猴子H5'},
                { id: 1072, name: '超级宝贝'},
                { id: 1073, name: '恭喜发财'},
                { id: 1075, name: '黑猫警长'},
                { id: 1077, name: '金色亚马逊'},
                { id: 1078, name: '财富转转转'},
                { id: 1079, name: '财富转转转'},
                { id: 1080, name: '金龙'},
                { id: 1086, name: '英雄联盟'},
                { id: 1087, name: '迎财神'},
                { id: 1089, name: '吉祥猴子'},
                { id: 1091, name: '英雄之战'},
                { id: 1092, name: '财富小樱桃'},
                { id: 1099, name: '海神秘宝H5'},
                { id: 1100, name: '小门神'},
                { id: 1101, name: '宝石财富'},
                { id: 1102, name: '古惑仔'},
                { id: 1104, name: '钻石塔H5'},
                { id: 1107, name: '恐龙之王'},
                { id: 14281, name: '浪漫故事'},
                { id: 14282, name: '巴黎之夜'},
                { id: 14283, name: '亚洲风情'},
                { id: 14284, name: '都柏林之宝'},
                { id: 14616, name: '幸运卷轴'},
                { id: 14646, name: '女王的传奇'},
                { id: 14647, name: '图坦卡门-黄金帝国'},
                { id: 14648, name: '猫爪大战狗爪'},
                { id: 14716, name: '幸运卷轴'},
                { id: 14746, name: '女王的传奇'},
                { id: 14747, name: '图坦卡门-黄金帝国'},
                { id: 14748, name: '猫爪大战狗爪'},
            ]
        },

        textContents: {
            cn: [
                {
                    id: 1,
                    title: '活动时间 :',
                    content: '北京时间2018年11月12日 至 2018年11月15日(共4天)',
                    type: 'sentence',
                },
                {
                    id: 2,
                    title: '活动总奖金 :',
                    content: '3,888 人民币+720次免费旋转',
                    type: 'sentence',
                },
                {
                    id: 3,
                    title: '活动总奖金+免费旋转列表 :',
                    content: '',
                    type: 'table',
                    children: {
                        items: [
                            ['排名', '赢家人数', '奖金与免费旋转奖励次数'],
                            ['1', '1', 'RMB 1,388 + 38次免费旋转'],
                            ['2', '1', 'RMB 888 + 38次免费旋转'],
                            ['3', '1', 'RMB 588 + 38次免费旋转'],
                            ['4', '1', 'RMB 288 + 38次免费旋转'],
                            ['5', '1', 'RMB 188 + 38次免费旋转'],
                            ['6 to 10', '5', 'RMB 108 + 38次免费旋转'],
                            ['11 to 20', '10', '38次免费旋转'],
                            ['合计', '20', ''],
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
                            ['可领取时间', '00:00 11/17 -24:00 11/18(周六到周日)'],
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
                            ['1', '福星高照 H5', 'Fu Star H5', '1063'],
                            ['2', '金海豚 H5', 'Dolphin Gold H5', '1055'],
                            ['3', '疯狂的猴子 H5', 'Mad Monkey H5', '1051'],
                            ['4', '更多猴子 H5', 'More Monkeys H5', '1069'],
                            ['5', '炽热火山 H5', 'Hot Volcano H5', '1061'],
                            ['6', '阿拉丁神迹 H5', 'Aladdins Legacy H5', '1066'],
                            ['7', '海神秘宝', 'Neptune\'s Gold H5', '1099'],
                            ['8', '恐龙之王', 'King Dinosaur', '1107'],
                            ['9', '功夫传奇对决', 'Kung Fu Showdown', '1043'],
                            ['10', '英雄之战', 'Battle Heroes', '1091'],
                        ]   
                    },
                },
                {
                    id: 6,
                    title: '活动规则与条款 :',
                    content: '',
                    type: 'bullets',
                    children: [
                        '在参赛期间指定游戏中有效总投注额（有效流水）最多的前20名玩家赢得本次比赛。',
                        '最低有效总投注额（有效流水）为RMB 3,000,才符合活动资格。',
                        '前20名在排行榜中的玩家为赢家,但前50名玩家都将显示在排行榜中。',
                        '获胜者将在各周锦标赛结束后的1个工作日宣布 (11/16) 。',
                        '排行榜每小时更新一次。',
                        '平台保留随时修改，暂停或取消促销的权利。',
                    ]
                },
                {
                    id: 7,
                    title: '排行榜 :',
                    content: '',
                    type: 'sentence',
                },
            ],
        },

        prizes: [
            'RMB 1,388',
            'RMB 888',
            'RMB 588',
            'RMB 288',
            'RMB 188',
            'RMB 108',
            'RMB 108',
            'RMB 108',
            'RMB 108',
            'RMB 108',
            'RMB 38',
            'RMB 38',
            'RMB 38',
            'RMB 38',
            'RMB 38',
            'RMB 38',
            'RMB 38',
            'RMB 38',
            'RMB 38',
            'RMB 38',
        ],

        labels: {
            en: [
                {
                    key: 'bet_count',
                    label: 'Bet Count',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'end_date',
                    label: 'End Date: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'last_refresh',
                    label: 'Last Refresh: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'no_record_found',
                    label: 'No Record Found',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'participating_games',
                    label: 'Participating Games',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'player',    
                    label: 'Player', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'players',    
                    label: 'Players', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'points',    
                    label: 'Points', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'prize',    
                    label: 'Prize', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'rank',    
                    label: 'Rank', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_less',    
                    label: 'Show Less', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_more',    
                    label: 'Show More', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'start_date',    
                    label: 'Start Date: ', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'title',    
                    label: 'TTG LEADERBOARD', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top',    
                    label: 'Top', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top_players',    
                    label: 'Top ? Players', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'total_wager',    
                    label: 'Total Wager', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'tournament_leaders',    
                    label: 'Tournament Leaders', 
                    value: '',
                    type: 'label',
                },
            ],
            cn: [
                {
                    key: 'bet_count',
                    label: '下注总数',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'end_date',
                    label: '结束时间',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'last_refresh',
                    label: '上次刷新',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'no_record_found',
                    label: '无相关记录',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'participating_games',
                    label: '参与的游戏',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'player',    
                    label: '玩家', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'players',    
                    label: '位玩家', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'points',    
                    label: 'Points', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'prize',    
                    label: '奖金', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'rank',    
                    label: '排名', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_less',    
                    label: '显示更少', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_more',    
                    label: '显示更多', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'start_date',    
                    label: '开始时间', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'title',    
                    label: 'TTG排行榜', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top',    
                    label: '前', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top_players',    
                    label: '前?名会员', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'total_wager',    
                    label: '总投注', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'tournament_leaders',    
                    label: '竞标赛首领', 
                    value: '',
                    type: 'label',
                },
            ],
            id: [
                {
                    key: 'bet_count',
                    label: 'Jumlah Bet',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'end_date',
                    label: 'Tanggal Berakhir: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'last_refresh',
                    label: 'Terakhir Diupdate: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'no_record_found',
                    label: 'Tidak ada rekor',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'participating_games',
                    label: 'Permainan Wajib',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'player',    
                    label: 'Pemain', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'players',    
                    label: 'Players', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'points',    
                    label: 'Poin', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'prize',    
                    label: 'Hadiah', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'rank',    
                    label: 'Peringkat', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_less',    
                    label: 'Kurang', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_more',    
                    label: 'Lebih', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'start_date',    
                    label: 'Tanggal Dimulai: ', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'title',    
                    label: 'TTG LEADERBOARD', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top',    
                    label: 'Top', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top_players',    
                    label: '? Pemain Teratas', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'total_wager',    
                    label: 'Total Wager', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'tournament_leaders',    
                    label: 'Tournament Leaders', 
                    value: '',
                    type: 'label',
                },
            ],
            ja: [
                {
                    key: 'bet_count',
                    label: 'ベット数',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'end_date',
                    label: '終了日: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'last_refresh',
                    label: '最終更新: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'no_record_found',
                    label: '履歴が見つかりません',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'participating_games',
                    label: '対象ゲーム',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'player',    
                    label: 'プレイヤー', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'players',    
                    label: 'プレイヤー', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'points',    
                    label: 'ポイント', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'prize',    
                    label: '賞金', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'rank',    
                    label: 'ランキング', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_less',    
                    label: 'もっと少なく', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_more',    
                    label: 'もっと', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'start_date',    
                    label: '開始日: ', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'title',    
                    label: 'TTGリーダーボード', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top',    
                    label: 'Top', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top_players',    
                    label: 'トップ?位 プレイヤー', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'total_wager',    
                    label: 'Total Wager', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'tournament_leaders',    
                    label: 'Tournament Leaders', 
                    value: '',
                    type: 'label',
                },
            ],
            ko: [
                {
                    key: 'bet_count',
                    label: '베팅 계정',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'end_date',
                    label: '종료 날짜: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'last_refresh',
                    label: '마지막 재생: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'no_record_found',
                    label: '기록을 찾을 수 없습니다',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'participating_games',
                    label: '게임 참여',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'player',    
                    label: '플레이어', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'players',    
                    label: 'Players', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'points',    
                    label: '포인트', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'prize',    
                    label: '상금', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'rank',    
                    label: '순위', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_less',    
                    label: '적은 것을 보여준다', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_more',    
                    label: '자세히보기', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'start_date',    
                    label: '시작 날짜: ', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'title',    
                    label: 'TTG 리더보드', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top',    
                    label: 'Top', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top_players',    
                    label: '상위 ? 플레이어', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'total_wager',    
                    label: 'Total Wager', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'tournament_leaders',    
                    label: 'Tournament Leaders', 
                    value: '',
                    type: 'label',
                },
            ],
            th: [
                {
                    key: 'bet_count',
                    label: 'จำนวนนับการเดิมพันt',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'end_date',
                    label: 'ถึงวันที่: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'last_refresh',
                    label: 'รีเฟรซครั้งล่าสุด: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'no_record_found',
                    label: 'ไม่พบประวัติ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'participating_games',
                    label: 'เกมส์ที่เข้าร่วม',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'player',    
                    label: 'ผู้เล่น', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'players',    
                    label: 'Players', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'points',    
                    label: 'แต้ม', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'prize',    
                    label: 'รางวัล', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'rank',    
                    label: 'ลำดับคะแนน', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_less',    
                    label: 'น้อยกว่า', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_more',    
                    label: 'มากกว่า', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'start_date',    
                    label: 'เริ่มวันที่', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'title',    
                    label: 'TTG ตารางผู้นำ', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top',    
                    label: 'Top', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top_players',    
                    label: 'ผู้เล่น?อันดับแรก', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'total_wager',    
                    label: 'Total Wager', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'tournament_leaders',    
                    label: 'Tournament Leaders', 
                    value: '',
                    type: 'label',
                },
            ],
            vi: [
                {
                    key: 'bet_count',
                    label: 'Thống Kê Cược',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'end_date',
                    label: 'Ngày Kết Thúc: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'last_refresh',
                    label: 'Làm Mới Gần Nhất: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'no_record_found',
                    label: 'Không tìm thấy kết quả ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'participating_games',
                    label: 'Trò Chơi Tham Gia',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'player',    
                    label: 'Người Chơi', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'players',    
                    label: 'Điểm', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'points',    
                    label: 'Points', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'prize',    
                    label: 'Giải Thưởng', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'rank',    
                    label: 'Xếp Hạng', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_less',    
                    label: 'It hơn', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_more',    
                    label: 'Hơn', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'start_date',    
                    label: 'Ngày Bắt Đầu: ', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'title',    
                    label: 'Bảng Xếp Hạng Ttg', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top',    
                    label: 'Top', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top_players',    
                    label: 'Top ? Người Chơi Dẫn Đầu', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'total_wager',    
                    label: 'Total Wager', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'tournament_leaders',    
                    label: 'Tournament Leaders', 
                    value: '',
                    type: 'label',
                },
            ],
            km: [
                {
                    key: 'bet_count',
                    label: 'ចំនួនភ្នាល់',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'end_date',
                    label: 'ថ្ងៃបញ្ចប់: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'last_refresh',
                    label: 'ថ្មីបំផុត: ',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'no_record_found',
                    label: 'គ្មានការកត់ត្រា',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'participating_games',
                    label: 'ហ្គេមរួមមាន',
                    value: '',
                    type: 'label',
                },
                {
                    key: 'player',    
                    label: 'អ្នកលេង', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'players',    
                    label: 'Players', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'points',    
                    label: 'ពិន្ទុ', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'prize',    
                    label: 'រង្វាន់', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'rank',    
                    label: 'ចំណាត់ថ្នាក់', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_less',    
                    label: 'តិច', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'show_more',    
                    label: 'ច្រើនទៀត', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'start_date',    
                    label: 'ថ្ងៃចាប់ផ្តើម: ', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'title',    
                    label: 'តារាងចំណាត់ថ្នាក់ TTG', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top',    
                    label: 'Top', 
                    value: '',
                    type: 'label',
                },
                {
                    key: 'top_players',    
                    label: 'អ្នកលេងកំពូលទាំង ?នាក់់', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'total_wager',    
                    label: 'Total Wager', 
                    value: '',
                    type: 'label',
                },
                 {
                    key: 'tournament_leaders',    
                    label: 'Tournament Leaders', 
                    value: '',
                    type: 'label',
                },
            ]
        },

        terms_and_conditions: {
            promotion_details: {
                en: [
                    {
                        key: 'free_spins_promotion_details',    //STATIC -- CANNOT BE CHANGED/USED FOR VARS
                        label: 'Free Spins Promotion Details',  //LABEL TRANSLATIONS
                        value: '',                              //VALUE TRANSLATIONS
                        type: 'title',                          //LABEL TYPE
                    },
                    {
                        key: 'promotion_name',
                        label: 'Promotion Name:',
                        value: 'Name',
                        type: 'subtitle',
                    },
                    {
                        key: 'start_date',
                        label: 'Start Date:',
                        value: new Date().toDateString(),
                        type: 'normal',
                    },
                    {
                        key: 'expiry_date',
                        label: 'Expiry Date:',
                        value: new Date().toDateString(),
                        type: 'normal',
                    },
                    {
                        key: 'promotion_end_date',
                        label: 'Promotion End Date:',
                        value: new Date().toDateString(),
                        type: 'normal',
                    },
                    {
                        key: 'credit_value_for_the_promotion',
                        label: 'Credit Value for the Promotion:',
                        value: '1.00',
                        type: 'normal',
                    },
                    {
                        key: 'maximum_win_value',
                        label: 'Maximum Promotion Win Value:',
                        value: '$500.00',
                        type: 'normal',
                    },
                    {
                        key: 'participating_games',
                        label: 'Participating Games:',
                        children: {
                            values: ['Game1', 'Game2', 'Game3'],
                            type: 'normal',
                        },
                        type: 'normal',
                    },
                    {
                        key: 'terms_for_claiming_win',
                        label: 'Terms for Claiming your Promotional Win',
                        value: '',
                        type: 'subtitle',
                        children: {
                            values: [
                                'The proceeds of your free spin promotion have a wager requirement of 10x value of your total won during the free spin promotion.',
                                'Your free spin bonus cannot be withdrawn until the wager requirement has been met. The wager requirement is a multiple of the total amount won in your free spin bonus. For example, if your free spin winnings total 100, and the wager requirement is 10K, then the total you must wager is 1,000.',
                            ],
                            type: 'normal'
                        },
                    },

                ],
            },
            extended_details: {
                en: [
                    {
                        label: 'Playing the following games will contribute to the wagering requirement: ',
                        type: 'white',
                    },
                    {
                        label: 'Game 1, Game 2, Game 3',
                        type: 'red',
                    },
                    {
                        label: 'Once the wager requirement has been met your free spin bonus have no restrictions and can be played or withdrawn at any time.',
                        type: 'white',
                    },
                    {
                        label: 'Start Date Definition',
                        type: 'red',
                    },
                    {
                        label: 'The start date is the date that the free spin round is first available.',
                        type: 'white',
                    },
                    {
                        label: 'Expiry Date Definition',
                        type: 'red',
                    },
                    {
                        label: 'The expiry date is the date the free spin round is no longer available to be started. If the free spins have been started before the expiry date, the free spins can be completed before the promotion end date.',
                        type: 'white',
                    },
                    {
                        label: 'Promotion End Date Definition',
                        type: 'red',
                    },
                    {
                        label: 'The promotion end date is the date that all free spins must be completed, and all wagering requirements must be met by, to receive winnings from free spins.',
                        type: 'white',
                    },
                    {
                        label: 'Credit Value Definition',
                        type: 'red',
                    },
                    {
                        label: 'Credit value is the amount each credit is worth in the applicable currency,',
                        type: 'white',
                    },
                    {
                        label: 'Maximum Promotional Win Value Definition',
                        type: 'red',
                    },
                    {
                        label: 'The maximum promotional win value is the highest amount you can win during free spins.',
                        type: 'white',
                    },
                    {
                        label: 'Terms and Conditions',
                        type: 'red',
                    },
                    {
                        label: 'Free spins are only available to players playing for real money. To trigger your free spins, simply load the game that the free spins have been awarded for. Awarded free spins must be played at least 1 game before the expiry date, otherwise all the un-played free spins will be forfeit. Free spins may be played on either the PC version or the mobile version of the game. To receive winnings from played free spins, you must meet the wagering requirements [if any] before the promotion end date. Winnings will be forfeit if wagering requirements are not met. Wagering requirements must be met playing TTG [TOP TREND GAMING] games. If the max promotional win value [if applicable] is hit during free spins, the free spin round will end. Malfunction voids all pays and plays.',
                        type: 'white',
                    },
                ],
                cn: [
                    {
                        label: 'Playing the following games will contribute to the wagering requirement: ',
                        type: 'white',
                    },
                    {
                        label: 'Game 1, Game 2, Game 3',
                        type: 'red',
                    },
                    {
                        label: 'Once the wager requirement has been met your free spin bonus have no restrictions and can be played or withdrawn at any time.',
                        type: 'white',
                    },
                    {
                        label: 'Start Date Definition',
                        type: 'red',
                    },
                    {
                        label: 'The start date is the date that the free spin round is first available.',
                        type: 'white',
                    },
                    {
                        label: 'Expiry Date Definition',
                        type: 'red',
                    },
                    {
                        label: 'The expiry date is the date the free spin round is no longer available to be started. If the free spins have been started before the expiry date, the free spins can be completed before the promotion end date.',
                        type: 'white',
                    },
                    {
                        label: 'Promotion End Date Definition',
                        type: 'red',
                    },
                    {
                        label: 'The promotion end date is the date that all free spins must be completed, and all wagering requirements must be met by, to receive winnings from free spins.',
                        type: 'white',
                    },
                    {
                        label: 'Credit Value Definition',
                        type: 'red',
                    },
                    {
                        label: 'Credit value is the amount each credit is worth in the applicable currency,',
                        type: 'white',
                    },
                    {
                        label: 'Maximum Promotional Win Value Definition',
                        type: 'red',
                    },
                    {
                        label: 'The maximum promotional win value is the highest amount you can win during free spins.',
                        type: 'white',
                    },
                    {
                        label: 'Terms and Conditions',
                        type: 'red',
                    },
                    {
                        label: 'Free spins are only available to players playing for real money. To trigger your free spins, simply load the game that the free spins have been awarded for. Awarded free spins must be played at least 1 game before the expiry date, otherwise all the un-played free spins will be forfeit. Free spins may be played on either the PC version or the mobile version of the game. To receive winnings from played free spins, you must meet the wagering requirements [if any] before the promotion end date. Winnings will be forfeit if wagering requirements are not met. Wagering requirements must be met playing TTG [TOP TREND GAMING] games. If the max promotional win value [if applicable] is hit during free spins, the free spin round will end. Malfunction voids all pays and plays.',
                        type: 'white',
                    },
                ]
            },

        },

        prizes: [
            'IDR 13,000,000',
            'IDR 6,000,000',
            'IDR 4,000,000',
            'IDR 3,000,000',
            'IDR 2,000,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 270,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
            'IDR 210,000',
        ],

    };
    return data;
}();