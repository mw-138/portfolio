"use strict";var precacheConfig=[["/portfolio/index.html","af6e0f98dcbf1434e4dcf0b66e377cca"],["/portfolio/static/css/main.0de12bac.css","17e4fd6dcaea46f69193572cc58b9a1b"],["/portfolio/static/js/0.6c920c2d.chunk.js","9fd7e555596e1878d4712a03ff893da3"],["/portfolio/static/js/main.7a6b1e0d.js","5a2ca78592104e0cb48500a415c60853"],["/portfolio/static/media/cls.0a26c047.jpg","0a26c047050c1608f5eeea7726b6bbd7"],["/portfolio/static/media/college_android_game_1.efead506.jpg","efead5064a000ed6815578a4018cd15f"],["/portfolio/static/media/college_android_game_2.775fad20.png","775fad20f2fba593ec161d13c78c3bd0"],["/portfolio/static/media/escape_room_game_1.4c0a7db5.jpeg","4c0a7db5eb7cc6ec5efb424cfd76a00e"],["/portfolio/static/media/escape_room_game_2.85d77fd5.jpeg","85d77fd5f9fec1b00284cfae73ac3820"],["/portfolio/static/media/escape_room_game_3.8eb5372b.jpeg","8eb5372b79065da9095205395dc435f9"],["/portfolio/static/media/escape_room_game_4.33c6db2f.jpeg","33c6db2fb9ab397fdce8cbdeb9858982"],["/portfolio/static/media/escape_room_game_5.bc8f56c8.jpeg","bc8f56c802b7a59ff4221e60cbb1d9de"],["/portfolio/static/media/fp_platformer_1.ca66c3f3.jpeg","ca66c3f30db2edd136fe9614584e92d4"],["/portfolio/static/media/fp_platformer_2.2b5069cc.jpeg","2b5069cc5097e26fd50e5f6264d460a6"],["/portfolio/static/media/fp_shooter_1.9d63895e.jpeg","9d63895e206a77a7b311241121fd6717"],["/portfolio/static/media/fp_shooter_2.09faebd2.png","09faebd26e35098a2fe76df0a780f845"],["/portfolio/static/media/itchio_textless_black.77280c55.png","77280c55964c338b53305ec9e4ddb22a"],["/portfolio/static/media/logo_light.99a478cf.png","99a478cf48b87e397f4fb16892e97d74"],["/portfolio/static/media/money_catcher_1.b0f4f44e.png","b0f4f44ebd7537dd7c78b6509657ce8d"],["/portfolio/static/media/money_catcher_2.85905fbb.png","85905fbbe1b0bf4786c18113e7c0c648"],["/portfolio/static/media/money_catcher_3.cf52a864.png","cf52a864a9840f7b55e67ed0447e7cb2"],["/portfolio/static/media/monogame_project_1.9510b7bc.png","9510b7bc550440078c4174cdeaf46119"],["/portfolio/static/media/monogame_project_2.2268b664.png","2268b664bdfbbc1515003e70cb47d341"],["/portfolio/static/media/ping_pong_football_1.d8e0a0de.png","d8e0a0de31ef3c30edc4d8bb11574e1e"],["/portfolio/static/media/ping_pong_football_2.b775570c.png","b775570c5813b1a4442da700e82472bd"],["/portfolio/static/media/ping_pong_football_3.2e13dd49.png","2e13dd49a0d9b5acc70cb21882c83803"],["/portfolio/static/media/procedural_tool.af6b3597.png","af6b35974a7bffdab04eb319ed2fb3ac"],["/portfolio/static/media/rpg_clicker_1.8996e36c.png","8996e36c582abf4ca4dbf12ef5fa6bc9"],["/portfolio/static/media/rpg_clicker_2.fcea52c5.png","fcea52c5e48b58651ecec15349a909ff"],["/portfolio/static/media/rpg_clicker_3.2026fbe0.png","2026fbe0945287e8e00750fa2e31e81a"],["/portfolio/static/media/rpg_clicker_4.a83762bb.png","a83762bb7fe2c67253a82380dca1d978"],["/portfolio/static/media/vr_shooter_game.fcb1e96f.jpeg","fcb1e96f1b5b94a76ebf55f9e93bde11"],["/portfolio/static/media/warblade_1.2b21fc9b.png","2b21fc9ba357d6bce4d2f5bd69c35762"],["/portfolio/static/media/warblade_2.eed6e6e2.png","eed6e6e26c56ec2197ebc9dff229cff2"],["/portfolio/static/media/warblade_3.5f594be5.jpeg","5f594be587f71b17faf72337064cc08d"],["/portfolio/static/media/warblade_4.d8ac15b1.jpeg","d8ac15b1bb215074fc9dbca9ce391a1f"],["/portfolio/static/media/warblade_5.4bb2f886.jpeg","4bb2f88670c19f5e6c6e69b4ef2d553a"],["/portfolio/static/media/wave_survival_1.f9a26ac3.jpeg","f9a26ac3703437c0ee7091b83ef8a2e9"],["/portfolio/static/media/wave_survival_2.aef8e220.jpeg","aef8e220b667bae1654b5e3adb74746f"],["/portfolio/static/media/wave_survival_3.8a7cd814.png","8a7cd8141de5d3aa59d205d42785a12f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var o=new URL(e);return c&&o.pathname.match(c)||(o.search+=(o.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),o=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var o="/portfolio/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});