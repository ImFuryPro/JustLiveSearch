/*
* Live Search without AJAX
* Author: Иван "ImFuryPro" Сапоненко
* Version: 1.1
* Description: Реализует живой поиск по содержимому блоков или таблиц
* */

$(document).ready(function() {
    jQuery.expr[":"].Contains = jQuery.expr.createPseudo(function(arg) {
        return function(elem) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

    liveSearch = function (idInput, searchClass) {
        $(idInput).bind("keyup", function () {
            var searchBlock = $(searchClass);
            searchBlock.hide().removeClass('visible');

            if ($(this).val() != '') {
                $(searchClass + ':Contains("' + $(idInput).val() + '")').show().addClass('visible');
            }
            else {
                searchBlock.show().addClass('visible');
            }
        });
    }
});