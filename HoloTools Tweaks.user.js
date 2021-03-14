// ==UserScript==
// @name         HoloTools Tweaks
// @namespace    http://piro.moe
// @updateURL    https://github.com/planetarian/TamperMonkey-Scripts/raw/main/HoloTools%20Tweaks.user.js
// @version      0.2
// @description  Tweaks to HoloTools' stream player, etc.
// @author       Chami
// @match        https://hololive.jetri.co/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Increase the height of the player+chat container to fill the vertical height
    GM_addStyle(".player-yt-box, .player-yt-frame > iframe { height: 100% !important; }");
})();
