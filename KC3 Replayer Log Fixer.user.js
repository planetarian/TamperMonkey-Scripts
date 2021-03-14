// ==UserScript==
// @name         KC3 Replayer Log Fixer
// @namespace    http://piro.moe
// @updateURL    https://github.com/planetarian/TamperMonkey-Scripts/raw/main/KC3%20Replayer%20Log%20Fixer.user.js
// @version      0.2
// @description  makes the battle log actually readable.
// @author       Chami
// @match        https://kc3kai.github.io/kancolle-replay/battleText.html
// @grant        GM_addStyle
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    var allItems = $('td');
    var leftItems = $('td').filter(function(){ return $(this).css('text-align') == 'start'; });
    var centerItems = $('td').filter(function(){ return $(this).css('text-align') == 'center'; });
    var rightItems = $('td').filter(function(){ return $(this).css('text-align') == 'end'; });
    var titles = $('th.phase_title');


    $('body').css("background", "#ffffff");

    titles.css("text-align", "left");
    allItems.css("text-align", "left").css("border-color", "rgba(0,0,0,0.1)");
    leftItems.css("color", "#009900");
    rightItems.css("color", "#aa0000");
})();
