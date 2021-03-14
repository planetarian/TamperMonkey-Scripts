// ==UserScript==
// @name         HoloTools Tweaks
// @namespace    http://piro.moe
// @version      0.1
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