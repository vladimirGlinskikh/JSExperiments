var spa = (function () {
    var initModule = function ($container) {
        $container.html(
            '<h1 style="display:inline-block; margin: 25px;">'
            + 'hello spa!'
            + '</h1>'
        );
    };
    return {initModule: initModule};
}());