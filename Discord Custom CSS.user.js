// ==UserScript==
// @name         Discord Custom CSS
// @namespace    http://piro.moe
// @version      0.1
// @description  Lets you use BetterDiscord-style custom CSS in browser Discord
// @author       Chami
// @match        https://discord.com/*
// @grant        GM_addStyle
// ==/UserScript==

// NOTE: This CSS is old, and a few parts of it no longer work as intended due to discord changes (e.g. background image).
// Overall, it's pretty much intact, though.

(function() {
    'use strict';
    GM_addStyle(`

/* https://gist.github.com/TheAMM/147be5001e43b7d8c60151716bbef703
.container-1ov-mD { display: inline-block; }
.container-1ov-mD>* { display: inline-block; vertical-align: top; }
.reactions-12N0jA { display:  flex; }
/*/

/* root container background image */


#app-mount {
    background: url("https://raw.githubusercontent.com/planetarian/DiscordThemes/master/Assets/bg_6desdiv01.png");
    background-position: center;
    background-size: cover;
}

.titleBar-AC4pGV {
    margin-top: 0;
    padding-top: 4px;
    background: rgba(5,0,15,.95);
}

.app-2rEoOp,
.theme-dark .layer-3QrUeG,
.theme-dark .layers-3iHuyZ {
    background: transparent;
}

.container-2lgZY8 {
    background: rgba(3,0,15,.87);
}

.theme-dark .markup-2BOw-j pre {
    background: transparent;
}

/* make edit boxes bigger */
.textArea-2Spzkt {
    max-height: 999px;
}

.theme-dark .markup-2BOw-j code, .theme-dark .markup-2BOw-j code.inline {
    background: rgba(10, 0, 20, 0.25);
}

/* side panels (channels/users) */
.container-3w7J-x,
.channels-Ie2l6A,
.theme-dark .members-1998pB,
#channels {
    background: rgba(0, 0, 0, 0);
    /*background: rgba(0, 49, 54, 0.25);*/
}

/* chat pane & users panel */
.theme-dark .title-3qD0b-,
.theme-dark .messagesWrapper-3lZDfY,
.theme-dark .chat-3bRxxu,
.theme-dark .chat-3bRxxu > .content-yTz4x3,
.theme-dark .chat-3bRxxu form,
.theme-dark .headerBar-UHpsPw,
.theme-dark .friends-table,
.theme-dark .systemPad-3UxEGl,
.theme-dark .messages-3amgkR,
.theme-dark #friends,
.theme-dark .da-privateChannels,
.theme-dark .da-panels,
.theme-dark .da-content > .da-container {
    background-color: transparent;
    /*background: rgba(0, 57, 62, 0.25);*/
}

.theme-dark .da-userPopout .da-systemPad {
    background-color: rgba(40, 37, 44, 0.95);
}

.da-base, .base-3dtUhz {
    left: 40px;
}

/* servers bar (left) */


/* narrow servers bar */
/*.theme-dark .guildsWrapper-5TJh6A,
.guildsWrapper-5TJh6A*/
.theme-dark .wrapper-1Rf91z
 {
    width: 40px;
    background: rgba(0,0,0,0.5);
    /*background-color: transparent;/**/
    /*background: rgba(0, 34, 37, 0.75);*/
}

.da-sidebar, .da-channels, .da-chat,
.sidebar-2K8pFh, .chat-3bRxxu {
    background: rgba(0,0,0,0.5);
    background: linear-gradient(180deg,
        rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 15%, rgba(0,0,0,0.5) 100%);
}

.wrapper-1Rf91z .scroller-2wx7Hm {
    padding-top: 5px;
    padding-left: 0px;
}

/* guild icon */

.listItem-2P_4kh,
.wrapper-25eVIn,
.blobContainer-239gwq {
    width: 40px;
    height: 44px;
    margin: 0;
}

.listItem-2P_4kh {
    padding: 0;
}

.listItem-2P_4kh .blobContainer-239gwq {
    padding-top: 2px;
    padding-left: 4px;
}

.listItem-2P_4kh .circleButtonMask-2VNJsN {
    margin-top: 2px;
    margin-left: 4px;
}

/* compacts the server icons */
.listItem-2P_4kh svg {
    height: 36px;
    width: 36px;
    padding: 0px;
    border-radius: 19px;
}

/* guild highlight */

svg mask {
    display:none;
}

.pill-31IEus,
.pill-31IEus .item-2hkk8m {
    width: 40px;
    height: 40px;
}

.pill-31IEus .item-2hkk8m {
    border-radius: 0;
    margin: 0;
    padding: 0;
    top: 0;
    background: rgba(255,255,255,0.6);
}

/* unread guild highlight */
/*.wrapper-1Rf91z .scroller-2FKFPG .container-2td-dC.unread-2OHH1w:before {
    top: 2px;
    background: #a5c;
}*/

/* selected guild highlight */
/*.wrapper-1Rf91z .scroller-2FKFPG .container-2td-dC.selected-nT-gM3:before {
    top: 16px;
    background: #545;
}*/


/* down servers */
.wrapper-1Rf91z .scroller-2wx7Hm .container-2td-dC .guildsError-3cFMtY {
    line-height: 36px;
}

/* fixes friends icon size/pos */
.container-1ETFDs,
.homeButton-2Cw51C {
    margin-bottom: 3px;
}

/* "n online" text */
.friendsOnline-2JkivW {
    width: 60px;
    font-size: 7pt;
}

/* top separator (below friends online) */
.guildSeparator-3s64Iy {
    left: -5px;
}

/* server separators plugin */
/* reduces space usage */
.container-2td-dC[separator] {
    margin-bottom: 19px;
}

.container-2td-dC[separator]::after {
    bottom: -10px;
}



/* channels list panel (left) */

/* server name header bar */
.header-2o-2hj {
    height: 32px;
    padding: 0 6px 0 10px;
}

/* reduce server name header font size */
/*.name-3gtcmp {
    font-size: 75%;
}*/

/* narrow channels list panel */
 .da-sidebar, .sidebar-2K8pFh {
    width: 131px;
}

/* boosted server banner */
/* spacer */
/* invalid /*.da-scrollerWrap .scroller-2wx7Hm div[style*="width: 100%; height: 84px; visibility: hidden;"]{
    width: 131px !important;
    height: 16pt !important;
}*/

.da-animatedContainer, .animatedContainer-1NSq4T {
    background: none;
}

.da-bannerImage, .bannerImage-3KhIJ6 {
    width: 131px;
    height: 74px;
    /*width: 300px;
    height: 168px;*/
}

/* channels list */
/* channels group font */
.containerDefault-3tr_sE .da-name,
.containerDefault-3tr_sE .name-23GUGE {
    font-size: 60%;
}
/* channels font */
.containerDefault--pIXnN .da-name,
.containerDefault--pIXnN .name-23GUGE {
    font-size: 80%;
}
/* channels list item spacing */
.da-containerDefault, .containerDefault-3tr_sE, .containerDefault--pIXnN {
    height: 24px;
    margin: 1px 0 1px 0px;
    padding: 0 0px;
}
/* channel group header spacing */
.containerDefault-3tr_sE {
    padding-top: 4pt;
}
.da-containerDefault .da-wrapper {
    height: 28px;
}
.da-containerDefault .da-wrapper .da-unread {
    top: 44%;
}
.da-containerDefault .da-wrapper .da-content {
    margin-left: 1pt;
}
.da-containerDefault .da-wrapper .da-content,
.da-containerDefault .da-wrapper .da-content .da-mainContent {
    height: 24px;
}

/* channels list icons */
.da-mainContent > svg {
    width: 12pt !important;
    height: 12pt !important;
    margin-right: 1pt;
}

/* channels/voice text */

/* voice channels/items padding removal */
.containerDefault-1ZnADq .wrapper-1ucjTd,
.listDefault-36Sktb,
.content-3at_AU {
    padding: 0px;
    height: 24px;
}
.content-3at_AU svg {
    width: 12pt;
    height: 12pt;
}

/* voice channel members */
.nameDefault-2s3kbY {
    font-size: 70%;
    color: #bbb;
}

/* user actions footer */
/* footer size */
.container-2Thooq {
    height: 44px;
}

/* user mic/phones/gear icons (bottom-left) */
.button-2b6hmh {
    width: 26px;
    height: 26px;
}



/* channel/chat pane (mid) */

/* channel header bar */
.title-3qD0b-,
.headerBar-UHpsPw,
.search-bar {
    height: 32px !important;
}

/* adds a bit of space below chat */
.messages {
    padding-bottom: 20px;
}

/* replies */
.cozy-3raOZG .repliedMessage-VokQwo {
    /* move the replied-to message as far left as possible */
    margin-left: -71px;
}
.compact-T3H92H .repliedMessage-VokQwo {
    /* move the replied-to message as far left as possible */
    margin-left: -71px;
}

.cozy-3raOZG .repliedMessage-VokQwo::before,
.compact-T3H92H .repliedMessage-VokQwo::before
 {
    /* change the "left and down" line to "down and right" */
    border-bottom: var(--spine-width) solid var(--background-accent);
    border-bottom-left-radius: 6px;
    border-top-left-radius: 0;
    border-top: 0;
    /* move the line below replied-to and resize it to meet the reply */
    left: 7px;
    top: 18px;
    width: 9px;
}
.cozy-3raOZG .repliedMessage-VokQwo::before {
    margin-bottom: -27px;
}
.compact-T3H92H .repliedMessage-VokQwo::before {
    margin-bottom: -13px;
}

/* space between messages */
/*.container-1YxwTf {
    padding: 3px 0;
    margin-bottom: 0;
    font-size: smaller !important;
}*/

/*.da-scroller > .da-containerCozy {
    margin-top: 3px;
}*/

/*.da-headerCozy {
    margin: 4px 0;
}*/

/* enhance visibility of links, mentions, reactions */
.theme-dark .container-1YxwTf a,
.mention,
.reaction-me div {
    color: #bf96df !important;
}

/* chat input box */
/* compact attach button */
.attachButton-1UjEWA {
    margin: 5px 0 5px 5px;
    padding: 0;
}

/* add a bit of space around the divider */
.attachButtonDivider-3Glu60 {
    margin: 0 5px;
}

/* translate plugin button */
.translate-button {
    top: 8px;
}

/* textbox left/right space */
.chat-3bRxxu form {
    margin: 0 5px;
}

/* textbox top/bottom space */
.channelTextArea-rNsIhG {
    margin: 5px 0 5px;
}

.channelTextArea-rNsIhG .textArea-12jD-V {
    /*margin-top: 15px;*/
}

/* textbox padding */
.textArea-2Spzkt {
    padding: 5px 38px 5px 0;
}


/* user(s) typing tip */
.theme-dark .typing-2GQL18 {
    background-color: #252535;
    opacity: 0.8;
    height: 16px;
    position: absolute;
    top: -12px;
    padding-left: 43px;
    right: 64px;
    margin-left: 18px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}


/* user(s) typing tip ellipsis */
.text-1y-e8-, .ellipsis-19qdx6 {
    font-size: 90%;
    height: 20px;
    padding-right: 4px;
    opacity: 0.75;
}

.da-dots {
    position: relative;
    top: 6pt;
}

.da-typing {
    background: rgba(200,180,225,0.1) !important;
}



/* channel users panel (right) */

/* narrow panel */
.membersWrap-2h-GB4 {
    min-width: 130px;
}

/* users inner container */
.members-1998pB {
    max-width: 130px;
}

/* users list group headers */
.membersGroup-v9BXpm {
}

/* users list item spacing */
.da-member {
    /*padding: 5px 16px 5px 0px;*/
    padding: 1pt 0;
    height: 32px;
}
.da-member .da-layout {
    padding: 0;
}

/* remove users list item padding */
.content-OzHfo4 {
    padding: 0px;
}

/* users list item avatars */
.avatar-small {
    background-size: 28px 28px;
    width: 28px;
    height: 28px;
}

/* users list item font size */
.username-1cB_5E {
    font-size: 80%;
}



/* friends list (left) */

/* friends search bar */
.search-bar input {
    height: 20px;
    font-size: 10px;
    padding: 0px;
}

/* reduces empty space above friends */
.scroller-2FKFPG {
    padding-top: 7px !important;
}

/* compacts friends list items */
.channel {
    height: 34px !important;
    padding: 0px;
}

/* inner friends list item container */
.channel a {
    height: 32px !important;
}

.channel-name {
    font-size: 85% !important;
}



/* online friends (mid) */

/* connects the online friends panel
with header */
.friends-table {
    margin-top: 0px !important;
    padding-top: 8px;
}

/* reduces online friends item height */
.friends-row {
    height: 40px !important;
}



/* user details flyout */

/* user details avatar */
.avatarWrapper-3H_478 .wrapper-2F3Zv8,
.avatarWrapper-3H_478 .avatar-16XVId,
.avatarWrapper-3H_478 .avatar-16XVId .image-33JSyf,
.avatar-3EQepX, /* profile details avatar */
.maskProfile-1ObLFT {
	height: 128px;
    width: 128px;
    -webkit-mask-size: 128px;
}

/* user details avatar status icon */
.avatarWrapper-3H_478 .wrapper-2F3Zv8 .status-oxiHuE,
.avatar-3EQepX .status-oxiHuE {
    width: 32px;
    height: 32px;
}


/* image viewer */

.imageWrapper-2p5ogY {
    display: block;
}

.downloadLink-1ywL9o {
    display: inline-block;
    margin: 0px 8px;
}

.bip-container .inner-1JeGVc .scrollerWrap-2lJEkd {
    display: inline;
}
`);
    // Your code here...
})();
