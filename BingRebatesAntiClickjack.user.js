// ==UserScript==
// @name         Bing Rebates Anti-Clickjack
// @namespace    http://github.com/planetarian
// @version      0.1
// @description  Removes Bing Rebates jdoqocy.com clickjacking
// @author       Chami
// @match        https://rewards.bing.com/*
// @match        https://www.bing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @updateURL    https://github.com/planetarian/TamperMonkey-Scripts/raw/main/BingRebatesAntiClickjack.user.js
// @downloadURL  https://github.com/planetarian/TamperMonkey-Scripts/raw/main/BingRebatesAntiClickjack.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const srcs = document.links;
    for (const src of srcs) {
        var url = src.href;
        var match = url.match("[?&]murl=(?<murl>[^&]+)");
        if (!match) continue;
        try {
            url = decodeURIComponent(match.groups.murl);
            match = url.match("[?&]url=(?<url>[^&]+)");
            if (!match) {
                console.error("Invalid jdoqocy link: " + url);
                continue;
            }
            src.href = decodeURIComponent(match.groups.url);
        }
        catch (err) {
            console.error(err);
        }
    }

    // Your code here...
})();
