define([
    'asset/js/moment',
    'asset/js/swiper'
], function(moment){
    return ['$scope', function($scope){
        var mySwiper = new Swiper ('.swiper-container', {
            autoplay: 3000,
            loop: true
        });
    }];
});