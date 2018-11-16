
var isMobileDevice = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobileDevice.Android() || isMobileDevice.BlackBerry() || isMobileDevice.iOS() || isMobileDevice.Opera() || isMobileDevice.Windows());
    }
}

// ============================================================================ //
// Defining general app configurations                                          //
// ============================================================================ //
var app = function() {
    var ap = {
        prefixStr:          ['', ''],
        icon: {
            img:            '.png',
            height:         150,
            width:          150,
        },
        titleText:          'Toptrend',
        translationObject:  '',
        termsAndConditions: false,
    };
    return ap;
}();

// ============================================================================ //
// Defining url properties, attributes and params                               //
// ============================================================================ //
var url = function() {
    var url = {
        currentTime:        timeToHMS(new Date()),
        deviceType:         isMobileDevice.any() ? 'mobile' : 'web',
        findByBets:         '',
        fromDate:           '12/10/2018',
        gameIds:            '1067,1055,1051,1068,1053,1099,1107,1043,1091,1098',
        host:               '/', //'http://ams-games.ttms.co/', //'http://dev01-games.toptrend.co/', //http://ams-games.ttms.co/', //'http://qa01-games.toptrend.co/',
        includeSubAff:		false,
        lang:               'cn',
        lsdId:              'TCG', //'igamble247',
        toDate:             '12/13/2018',
        topNum:             50,
        topNumLimit:        20,
        week:               3
    };
    
    function dateToYMD(date) {
        var d = date.getDate();
        var m = date.getMonth() + 1; //Month from 0 to 11
        var y = date.getFullYear();
        return '' + (m<=9 ? '0' + m : m) + '/' + (d <= 9 ? '0f' + d : d) + '/' + y;
    }

    function timeToHMS(time) {
        return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    }

    return url;
}();

// ============================================================================ //
// Defining lobby properties and attributes                                     //
// ============================================================================ //
var urlPages = function() {
    var urlPages = {
        imagesUrl:          url.host + 'player/assets/images/games/',
        leaderBoard:        url.host + 'player/TournamentLeaderBoard.action',
        menuUrl:            url.host + 'player/Menu.action',
        translationUrl:     url.host + 'casino/default/lobby/i18n/'
    };
    return urlPages;
}();

// ============================================================================ //
// Defining lobby properties and attributes                                     //
// ============================================================================ //
var board = function() {
    var temp = url;
    url = replaceFromHash(temp);

    var lobby = {
        leaderBoard:        {
	        findByBets:		replaceTokens(['fromDate','toDate','lsdId','gameIds','topNum','includeSubAff'], urlPages.leaderBoard + '?findByBets&fromDate=${fromDate}&toDate=${toDate}&lsdId=${lsdId}&gameIds=${gameIds}&topNum=${topNum}&includeSubAff=${includeSubAff}'),
	        findByHandle:	replaceTokens(['fromDate','toDate','lsdId','gameIds','topNum','includeSubAff'], urlPages.leaderBoard + '?findByHandle&fromDate=${fromDate}&toDate=${toDate}&lsdId=${lsdId}&gameIds=${gameIds}&topNum=${topNum}&includeSubAff=${includeSubAff}'),
        },
        menuUrl:            replaceTokens(['lang','deviceType','lsdId'], urlPages.menuUrl + '?getMenu&playerHandle=999999&accName=FunAcct&lang=${lang}&deviceType=${deviceType}&lsdId=${lsdId}'),
        translationUrl:     replaceTokens(['lang'], urlPages.translationUrl + 'lobby_${lang}.' + app.translationObject),
        clearCache: function() {
            localStorage.removeItem('firstUrlVisited');
            localStorage.removeItem('firstVisit');
            localStorage.removeItem('gamesCollection');
            localStorage.removeItem('lastPageRefresh');
            localStorage.removeItem('leaderboard');
        },
    };

    function replaceFromHash_1(vars)
    {
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'), hash;
        for (var i = 0; i < hashes.length; i++){
            hash = hashes[i].split('=');
            //vars.push(hash[0]);
            vars[hash[0]] = hash[1].replace('#', '');
        }
        return vars;
    }

    function replaceTokens(token_list, url_path)
    {
        for(var i = 0; i < token_list.length; i++)
            if (url[token_list[i]] == 'cn')
                url_path = url_path.replace('\${'+token_list[i]+'}', 'zh-cn');
            else
                url_path = url_path.replace('\${'+token_list[i]+'}', url[token_list[i]]);
        return url_path;
    }

    function replaceFromHash(vars)
    {
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'), hash;
        for (var i = 0; i < hashes.length; i++){
            hash = hashes[i].split('=');
            //vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    return lobby;
}();

// ============================================================================ //
// Translations                                                                 //
// ============================================================================ //
var translate = function()
{
    //the translation data (must be loaded via XML
    var vars = []; vars.xml = null;

    //create a function that returns the translated text for a specific token id
    vars.now = function() { return $(vars.xml).find('token[name="' +$(this).attr('data-token')+ '"]').attr('value'); };

    //the function to execute on a list of elements
    vars.all = function(i, el){
        if($(el).is('input')) $(el).val(vars.now);
        else $(el).html(vars.now);
    };
    return vars;
}();

var removeExtraChars = function(str) {
    str = str.split('#');
    return str[0];
}

function excludeCountry(country) {
    return country != 'th' ? country : '';
}
