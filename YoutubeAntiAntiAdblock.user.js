// ==UserScript==
// @name         Youtube Embedder
// @namespace    http://github.com/planetarian/TamperMonkey-Scripts
// @version      0.2
// @description  Replaces the youtube video player with a youtube embed iframe to subvert the anti-adblock measures.
// @author       Chami
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @updateUrl    https://github.com/planetarian/TamperMonkey-Scripts/raw/main/YoutubeAntiAntiAdblock.user.js
// @downloadUrl  https://github.com/planetarian/TamperMonkey-Scripts/raw/main/YoutubeAntiAntiAdblock.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    const pageManager = document.getElementById('page-manager');
    const pageObserver = new MutationObserver(pageMutated);
    pageObserver.observe(pageManager, { childList: true });

    var modified = false;

    function pageMutated(mutationList, observer) {
        if (modified) return;
        console.log("Mutation observed.")
        for (const mutation of mutationList) {
            if (mutation.type === "childList") {
                const playerContainer = document.getElementById('player');
                if (!playerContainer) continue;

                // remove the notice
                const errorOverlay = document.getElementById('error-screen');
                errorOverlay.parentElement.removeChild(errorOverlay);

                // replace the player
                const player = document.getElementById('ytd-player');
                const videoId = youtube_parser(document.location.href);
                player.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}"></iframe>`;
                modified = true;
                pageObserver.disconnect();
            }
        }
    }
})();
