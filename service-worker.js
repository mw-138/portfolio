"use strict";var precacheConfig=[["/portfolio/index.html","f288a7498bddc24ab17d22e103d4d091"],["/portfolio/static/css/main.0de12bac.css","17e4fd6dcaea46f69193572cc58b9a1b"],["/portfolio/static/js/0.142ac637.chunk.js","d282ad8f0ad414475068382ce2dbaa48"],["/portfolio/static/js/main.df589883.js","7458c9fd5a235aa9ea62d0ebc11adf91"],["/portfolio/static/media/cls.0a26c047.jpg","0a26c047050c1608f5eeea7726b6bbd7"],["/portfolio/static/media/college_android_game.efead506.jpg","efead5064a000ed6815578a4018cd15f"],["/portfolio/static/media/escape_room_game.4c0a7db5.jpeg","4c0a7db5eb7cc6ec5efb424cfd76a00e"],["/portfolio/static/media/logo_light.99a478cf.png","99a478cf48b87e397f4fb16892e97d74"],["/portfolio/static/media/money_catcher_1.b0f4f44e.png","b0f4f44ebd7537dd7c78b6509657ce8d"],["/portfolio/static/media/money_catcher_2.85905fbb.png","85905fbbe1b0bf4786c18113e7c0c648"],["/portfolio/static/media/money_catcher_3.cf52a864.png","cf52a864a9840f7b55e67ed0447e7cb2"],["/portfolio/static/media/monogame_project.2268b664.png","2268b664bdfbbc1515003e70cb47d341"],["/portfolio/static/media/procedural_tool.af6b3597.png","af6b35974a7bffdab04eb319ed2fb3ac"],["/portfolio/static/media/rpg_clicker_1.8996e36c.png","8996e36c582abf4ca4dbf12ef5fa6bc9"],["/portfolio/static/media/rpg_clicker_2.fcea52c5.png","fcea52c5e48b58651ecec15349a909ff"],["/portfolio/static/media/rpg_clicker_3.2026fbe0.png","2026fbe0945287e8e00750fa2e31e81a"],["/portfolio/static/media/rpg_clicker_4.a83762bb.png","a83762bb7fe2c67253a82380dca1d978"],["/portfolio/static/media/vr_shooter_game.fcb1e96f.jpeg","fcb1e96f1b5b94a76ebf55f9e93bde11"],["/portfolio/static/media/wave_survival.f9a26ac3.jpeg","f9a26ac3703437c0ee7091b83ef8a2e9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});