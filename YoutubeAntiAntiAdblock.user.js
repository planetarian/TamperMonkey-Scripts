// ==UserScript==
// @name         Youtube Anti-anti-adblock
// @namespace    http://github.com/planetarian/TamperMonkey-Scripts
// @version      0.8
// @description  Replaces the youtube video player with a youtube embed iframe to subvert the anti-adblock measures.
// @author       Chami
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateURL    https://github.com/planetarian/TamperMonkey-Scripts/raw/main/YoutubeAntiAntiAdblock.user.js
// @downloadURL  https://github.com/planetarian/TamperMonkey-Scripts/raw/main/YoutubeAntiAntiAdblock.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    function log(message) {
        console.log("AAB: " + message);
    }

    // get the video ID of the video currently being watched
    function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    // replace the youtube player with the embed
    function replacePlayer(videoId) {
        // movie_player contains all the player controls, get rid of them and replace with the embed
        const existingPlayer = document.getElementsByClassName('html5-video-player');
        const existingEmbed = document.getElementById('aab-embed');
        if (existingPlayer.length == 0 && !existingEmbed) {
            // We're still loading the initial page; do nothing
            return false;
        }

        const player = document.getElementById('ytd-player');
        if (!player) {
            log("no player container found.");
            return false;
        }

        log("checking for video player.");
        const videoEls = player.getElementsByClassName('html5-main-video');
        // if we have an html5 player (no anti-adblock)
        if (videoEls.length == 1 && !!videoEls[0].src) {
            log("html5 player present. using that instead.");
            if (embed) {
                log("removing embed.");
                embed.remove();
            }
        }
        // if there's no html5 player (anti-adblock present)
        else {
            log("no html5 player present. adding embed.");
            if (embed) {
                player.innerHtml = '';
                player.appendChild(embed);
            }
            else {
                // replace the player
                player.innerHTML = `<iframe id="aab-embed" width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}"></iframe>`;
                embed = document.getElementById('aab-embed');
            }
            console.log("YouTube player replaced with embed iframe.");
            return true;
        }
    }

    // stop player when the user navigates away from a video
    document.addEventListener("yt-navigate-start", function(event) {
        const embed = document.getElementById('aab-embed');
        if (!embed) return;
        embed.remove();
    });

    // replace player again after the user navigates to a new video
    document.addEventListener("yt-navigate-finish", function(event) {
        const videoId = youtube_parser(document.location.href);
        if (!videoId) return;
        replacePlayer(videoId);
    });

    // unhide the player container stuff in case anti-adblock hid it
    GM_addStyle('ytd-watch-flexy[player-unavailable] #player-container-outer.ytd-watch-flexy { visibility: visible !important; }');

    // hold onto the embed for later reference
    var embed = null;

    // set up the mutation observer to monitor for when the player is added
    const pageManager = document.getElementById('page-manager');
    const pageObserver = new MutationObserver(pageMutated);
    try {
        log("observing page manager.");
        pageObserver.observe(pageManager, { childList: true });
    }
    catch (error) {
        console.error("couldn't observe page manager.");
    }

    var stage = 0;

    function pageMutated(mutationList, observer) {
        if (stage >= 2) return;
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                log(`anti-anti-adblock reacting to element mutation. Stage ${stage}`);
                if (stage === 0) {
                    // looking for the main player container
                    const playerContainer = document.getElementById('player');
                    if (!playerContainer) {
                        log("no player container found.");
                        continue;
                    }

                    // remove the notice
                    const errorOverlay = document.getElementById('error-screen');
                    if (errorOverlay) {
                        errorOverlay.remove();
                        log("error overlay removed.");
                    }

                    // the actual player itself hasn't been added yet
                    // so we need to monitor the element it'll be added to
                    const ytdPlayer = document.getElementById('ytd-player');
                    const ytdContainer = ytdPlayer.getElementsByClassName('ytd-player');
                    if (ytdContainer.length == 1) {
                        pageObserver.disconnect();
                        stage = 1;
                        log("observing containers.");
                        pageObserver.observe(ytdContainer[0], { childList: true });
                    }
                }
                else if (stage === 1) {
                    // should have the player ready to replace now
                    const videoId = youtube_parser(document.location.href);
                    if (!videoId) {
                        log("not a video page.");
                        continue;
                    }
                    if (!replacePlayer(videoId)) {
                        continue;
                    }

                    pageObserver.disconnect();
                    stage = 2;
                }
            }
        }
    }
})();
