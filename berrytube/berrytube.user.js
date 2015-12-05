// ==UserScript==
// @name         Pocket's BerryTube
// @namespace    https://pocketgrok.github.io/userscripts/
// @version      0.1.1
// @author       PocketGrok
// @description  Script to make BerryTube how Pocket likes it.
// @homepage     http://pocketdeer.com/
// @updateURL    https://pocketgrok.github.io/userscripts/berrytube/berrytube.user.js
// @match        http://berrytube.tv/
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @resource     style_css https://pocketgrok.github.io/userscripts/berrytube/resources/style.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

GM_addStyle( GM_getResourceText( 'style_css' ) );
