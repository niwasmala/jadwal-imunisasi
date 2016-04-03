define([

], function(){
    return [ '$scope', function($scope){
        $scope.developer = {
            name: 'Nicky Irawan',
            email: 'nicky@akhdani.co.id',
            whatsapp: '+6288803069410',
            github: 'niwasmala'
        };

        $('#toolbar').attr('class', 'halo-nav box-shad-none');
        $('#title').attr('style', 'display: none;').html($scope.developer.name);

        // title banner
        var hBanner = $('.h-banner').height();
        var cbHeight = hBanner - 56;
        var hHeight = hBanner - 86; // for Title
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= cbHeight) {
                $(".halo-nav").addClass('accent-color');
            }
            if (scroll <= cbHeight) {
                $(".halo-nav").removeClass('accent-color');
            }
            // For heading Title
            if (scroll >= hHeight) {
                $(".banner-title").hide();
                $(".halo-nav .title").show();
            }
            if (scroll <= hHeight) {
                $(".banner-title").show();
                $(".halo-nav .title").hide();
            }
        });

        // opacity Plush button
        var fadeStart = 50, // 100px scroll or less will equiv to 1 opacity
            fadeUntil = 150, // 150px scroll or more will equiv to 0 opacity
            fading = $('.resize');

        $(window).on('scroll', function () {
            var offset = $(document).scrollTop(),
                opacity = 0;
            if (offset <= fadeStart) {
                opacity = 1;
            } else if (offset <= fadeUntil) {
                opacity = 1 - offset / fadeUntil;
            }
            fading.css({
                'transform': 'scale(' + opacity + ')'
            });
        });
    }];
});