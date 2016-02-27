// ==UserScript==
// @name         Pocket's BerryTube
// @namespace    https://pocketgrok.github.io/userscripts/
// @version      0.2
// @author       PocketGrok
// @description  Script to make BerryTube how Pocket likes it.
// @homepage     http://pocketdeer.com/
// @updateURL    https://pocketgrok.github.io/userscripts/berrytube/berrytube.user.js
// @match        http://berrytube.tv/
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @resource     style_css https://pocketgrok.github.io/userscripts/berrytube/resources/style.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

// Add Styles
GM_addStyle( GM_getResourceText( 'berrytube_css' ) );

// "Adjust" HTML structure
var dashboard = $( '<div id="dashboard" class="dashboard"></div>' );
var player = $( '<div id="player" class="player panel"></div>' );
var videoBG   = $( '#videobg' );
var videoWrap = $( '#videowrap' );
var chatPane  = $( '#chatpane' );
var drinkWrap = $( '#drinkWrap' );

var chatTop = $( '<div id="chat-top" class="chat-top"></div>' );
var chatMid = $( '<div id="chat-mid" class="chat-mid"></div>' );
var chatLow = $( '<div id="chat-low" class="chat-low"></div>' );
var chatTabs     = $( '#chattabs' );
var overlay      = $( '#rcvOverlay' );
var chatBuffer   = $( '#chatbuffer' );
var adminBuffer  = $( '#adminbuffer' );
var countWrap    = $( '#connectedCountWrapper' );
var chatList     = $( '#chatlist' );
var chatInput    = $( '#chatinput' );
var setNick      = $( '.setNick' );
var clear        = $( '#clear' );
var chatControls = $( '#chatControls' );

dashboard.prependTo( 'body' )
  .append( player )
  .append( chatPane );
player.append( videoBG )
  .append( drinkWrap );

videoBG.addClass( 'video video-bg player-container' );
videoWrap.addClass('video-wrap wrap' );
chatPane.addClass( 'chat panel' );
drinkWrap.addClass( 'drink-wrap wrap' );

chatTop.appendTo( chatPane )
  .append( chatControls )
  .append( countWrap );
chatMid.appendTo( chatPane )
  .append( chatBuffer )
  .append( adminBuffer )
  .append( chatList );
chatLow.appendTo( chatPane )
  .append( setNick )
  .append( chatInput );

chatTabs.addClass('chat-tabs');
overlay.addclass('overlay');
chatBuffer.addClass('chat-buffer');
adminBuffer.addClass('admin-buffer');
countWrap.addClass('count-wrap');
chatList.addClass('chat-list');
chatInput.addClass('chat-input');
setNick.attr( 'id', 'set-nick' )
  .addClass('set-nick');
//clear.addClass('clear');
chatControls.addClass('chat-controls');
