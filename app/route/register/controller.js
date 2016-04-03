define([
], function(){
    return ['$scope', function($scope){
        $('#toolbar').attr('class', 'tool-signup accent-color');

        $('.datepicker').pickadate();
    }];
});