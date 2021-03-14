// ==UserScript==
// @name         YouTube Emoji Streamliner
// @namespace    http://piro.moe
// @version      0.1
// @description  Hopefully make the emoji panel less annoying?
// @author       Chami
// @match        https://*.youtube.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    // Increase the minimum height of the chat panel
    GM_addStyle("ytd-watch-flexy[flexy] #chat.ytd-watch-flexy:not([collapsed]).ytd-watch-flexy, ytd-watch-flexy[flexy] #chat-container.ytd-watch-flexy:not([chat-collapsed]).ytd-watch-flexy { min-height: 80vh; }");
    // Remove all categories except the first one (this channel's emoji)
    GM_addStyle("#categories yt-emoji-picker-category-renderer:nth-child(n+2) { display: none; }");
    // Remove the category title, since we're only showing one anyway
    GM_addStyle("#title.yt-emoji-picker-category-renderer { display: none; }");
    // Remove the 'category' buttons, since we've removed the categories
    GM_addStyle("#category-buttons.yt-emoji-picker-renderer { display: none; }");
    // Reduce the padding of the panel
    GM_addStyle("yt-live-chat-message-input-renderer { padding: 8px; }");
    // Make the emoji/SC/send buttons a bit smaller
    GM_addStyle("yt-button-renderer #button.yt-button-renderer { height: 32px; }");
    // Remove the emote search box
    GM_addStyle("#search-panel.yt-emoji-picker-renderer { display: none; }");
})();