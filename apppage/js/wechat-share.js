!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.wechatshare=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = function (options) {
    function onBridgeReady() {
        if (!options.imgUrl) {
            var img = document.querySelector('img');
            if (img) {
                options.imgUrl = img.src;
            } else {
                options.imgUrl = "";
            }
        }

        if (!options.title) {
            var titleTemp = document.querySelector('title');
            if (titleTemp) {
                options.title = titleTemp.innerHTML;
            } else {
                options.title = " ";
            }
        }

        options.desc = options.desc || "";
        options.link = options.link || window.location.href;

        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "img_url": options.imgUrl,
                "link": options.link,
                "desc": options.desc,
                "title": options.title
            }, function(res) {});
        });

        WeixinJSBridge.on('menu:share:timeline', function(argv) {
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": options.imgUrl,
                "link": options.link,
                "desc": options.desc,
                "title": options.title
            }, function(res) {});
        });
    }

    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
};

},{}]},{},[1])
(1)
});