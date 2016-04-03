// application specific
alt.application = 'raporimunisasi';
alt.title = 'Imunisasi';
alt.description = 'Rapor Imunisasi';
alt.version = '1.0.0';

// environment
alt.environment = 'production';
alt.urlArgs = alt.environment == 'production' ? '_v=' + alt.version : '_t=' + (+new Date());

// additional script
// left sidebar
$('#sidebar-left').sideNav({
    menuWidth: 240,
    edge: 'left',
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});

$('#sidebar-right').sideNav({
    menuWidth: 240,
    edge: 'right',
    closeOnClick: false
});

// advanced configuration
alt.run(['$log', '$q', '$rootScope', '$auth', '$api', '$route', '$window', '$timeout',
    function($log, $q, $rootScope, $auth, $api, $route, $window, $timeout){
        $rootScope.back = function(num){
            if(navigator && navigator.app){
                navigator.app.backHistory(typeof num === 'undefined' ? -1 : num);
            }else{
                $window.history.go(-1);
            }
        };

        $rootScope.redirect = function(url, timeout){
            url = url || '';
            timeout = timeout || 0;

            if(timeout > 0){
                $timeout(function(){
                    $window.location.href = alt.baseUrl + url;
                }, timeout);
            }else{
                $window.location.href = alt.baseUrl + url;
            }
        };

        $rootScope.select = function(){
            $timeout(function(){
                $('select').material_select();
            });
        };

        $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
            if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard)
                window.cordova.plugins.Keyboard.close();
        });
    }
]);