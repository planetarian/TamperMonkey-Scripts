// ==UserScript==
// @name         Discord Custom CSS
// @namespace    http://piro.moe
// @updateURL    https://github.com/planetarian/TamperMonkey-Scripts/raw/main/Discord%20Custom%20CSS.user.js
// @downloadURL  https://github.com/planetarian/TamperMonkey-Scripts/raw/main/Discord%20Custom%20CSS.user.js
// @version      0.3
// @description  Lets you use BetterDiscord-style custom CSS in browser Discord
// @author       Chami
// @match        https://discord.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
[aria-label="Send a gift"] {display:none}
.app-launcher-entrypoint {display:none}
.expression-picker-chat-input-button [aria-label="Open GIF picker"] { display: none; }
.expression-picker-chat-input-button [aria-label="Open sticker picker"] { display: none; }
.expression-picker-chat-input-button button { padding-left: 4px;}

.expression-picker-chat-input-button button,
.expression-picker-chat-input-button button div[class^="contents__"] {
    margin: 1px;
    min-width: 18px;
    min-height: 18px;
}

.expression-picker-chat-input-button div[class^="buttonWrapper__"] svg {
    width: 18px;
    height: 18px;
}


section[class^="panels_"] {
    bottom: 0 !important;
    left: 0 !important;
    width: calc(100% - var(--space-xs)* 2 + 16px) !important;
    border-radius: 0 !important;
}

section[class^="panels_"] div[class^="container__"] {
    padding: 4px;
}

div[class^="typing_"] {
    bottom: unset;
    top: -20px;
}

/* chat input container */
form[class^="form_"] {
    padding: 0 !important;
    margin-top: 14px !important;
}

/* chat input box border */
div[class^="channelTextArea_"] {
    margin-bottom: 0;
    border-radius: 0;
}
/* chat input box */
.visual-refresh {
    --custom-member-list-width: 200px;
    --custom-guild-list-width: 52px;
    --textarea-padding: 24px;
    --custom-app-top-bar-height: 0px;
    /*--custom-app-top-bar-height: 24px;*/
    --custom-channel-header-height: 38px;
    --custom-channel-textarea-text-area-height: calc(var(--textarea-padding) + var(--space-xs));
}
div[class^="textArea__"],
div[class^="textArea__"] > div > div {
    margin-left: 0 !important;
}
button[class^="attachButton__"] {
    padding: 4px 8px 4px 6px !important;
}
/* spacing between textbox button containers */
div[class^="channelTextArea_"] div[class^="buttons__"] {
    column-gap: 0 !important;
}

/* member list */
div[class^="members_"] div[class*="membersGroup_"] {
    padding-left: 2px;
}
div[class^="members_"] div[class*="member_"] {
    margin-left: 0;
}
div[class^="members_"] div[class*="member_"] div[class^="childContainer_"] {
    padding-left: 6px;
    padding-right: 2px;
}
div[class^="members_"] div[class*="member_"] div[class^="memberInner_"] {
    padding-left: 0;
    padding-right: 0;
}

/* channel list */
#channels ul li a,
#channels ul li ul div[class^="link_"] {
    padding: 2px;
}

/* top bar */
div[class^="upperContainer_"] {
    margin-right: 26px;
}

div[class^="recentsIcon_"] {
    position: fixed;
    top: calc(var(--custom-app-top-bar-height) + 3px);
    right: 4px;
}

div[class^="bar_"] {
    z-index: 101;
}
div[class^="bar_"] div[class^="title_"],
div[class^="bar_"] div[class^="trailing_"] > a {
    display: none;
}
div[class^="toolbar_"] {
    column-gap: 0 !important;
}

div[class^="toolbar_"] div[class^="iconWrapper_"] {
    width: 18px;
    height: 18px;
    margin-left: 2px !important;
    margin-right: 2px !important;
}
`);
})();
