define(['jquery'], function ($) {
    return {
        init: function (wrapper, util, params, callback) {
            $.ajax({
                dataType: "script",
                cache: true,
                url: "modules/Connect.Demo/scripts/bundles/demo-bundle.js",
                success: function () {
                    window.connect.demo.init(util, params);
                },
            });
        },
        load: function (params, callback) {
            window.connect.demo.load(params);
        }
    };
});
