var lang = {
    "wordpress": "70%",
    "shopify": "30%",
    "html": "80%",
    "css": "70%",
    "boostrap": "80%",
    "javascript": "20%",
    "php": "5%",
    "server": "55%",
    "photoshop": "40%",
    "figma": "40%"
};

var multiply = 10;

$.each(lang, function (language, pourcent) {

    var delay = 700;

    setTimeout(function () {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});