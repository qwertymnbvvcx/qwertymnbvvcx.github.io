_satellite.pushAsyncScript(function(e,t,r){var n=tracking.localStorage||window.localStorage;!function(){var e,t;function r(e){var t;if(!e)return null;var r=e.textContent&&e.textContent.substr(0,40)||null;return r&&r.match(/[₽$€]/)&&(r=r.replace(/\d[\d,\s]*/g,"[secured]")),{text:r,href:null===(t=e.closest("a"))||void 0===t?void 0:t.href,time:Date.now()}}window.addEventListener("mousedown",function(t){try{e=r(t.target)}catch(e){}},!0),window.addEventListener("keydown",function(e){try{13===e.keyCode&&(t=r(e.target))}catch(e){}},!0);var n=Date.now();window.addEventListener("beforeunload",function(){var r,o,i,a;try{var c=Date.now(),d=((r={})[0]=c,r[1]=document.referrer,r[2]=window.location.href,r[6]=c-(null!==(a=null===(i=null===(o=window.performance)||void 0===o?void 0:o.timing)||void 0===i?void 0:i.domComplete)&&void 0!==a?a:n),r);t&&(d[4]=t),e&&(d[3]=e);var l=window.tracking.state.utmMarkers.utm_source;l&&(d[5]=l),sessionStorage.setItem("779f8dfd",JSON.stringify(d))}catch(e){}}),function(e){var t,r;try{(null===(r=null===(t=window.tracking)||void 0===t?void 0:t.state)||void 0===r?void 0:r.utmMarkers)&&e();var n=0,o=setInterval(function(){var t,r;(null===(r=null===(t=window.tracking)||void 0===t?void 0:t.state)||void 0===r?void 0:r.utmMarkers)&&(clearInterval(o),e()),++n>15&&clearInterval(o)},500)}catch(e){}}(function(){var e,t,r,o,i,a;try{var c=window.tracking.state.utmMarkers.utm_source,d=sessionStorage.getItem("779f8dfd");if(!d)return;if(-1!==["cross_mvno","statement_c2c","email","emailma","emailsma","email_ins","crowd","pwaStandaloneApp"].indexOf(c))return;var l=JSON.parse(d),m=l[0],s=l[5],u=l[2],f=l[4],v=l[3],w=l[6],h=new URLSearchParams(window.location.search),p=c&&c!==s&&h.has("utm_source"),g=void 0,k=new URL(u);if(k.pathname.match(/^\/login\/?$/)&&k.searchParams.has("redirectTo")){var b=k.searchParams.get("redirectTo");-1!==b.indexOf("?")&&(g=new URLSearchParams(b.substr(b.indexOf("?")+1)).get("utm_source"))}g===c&&(p=!1);var I="presumably",_=!1;if(null==v?void 0:v.href){var y=new URL(v.href);document.referrer===u&&c===y.searchParams.get("utm_source")&&(_=!0),v.href!==window.location.href&&(I="hit")}var U="error",R="abnormalRedirect";_&&(U="warn",R="maybeAbnormalRedirect");var S=-1!==window.location.href.indexOf("/3dsecure/");if(m&&p&&!S){var C=Number(m),x=n-C;if(x<7550){var O={elapsedTime:Math.round(x/1e3),currentReferrer:document.referrer,prevHref:u,prevUtm:s,newUtm:c,level:U,timeOnPrevPage:w,accuracy:I},T=null===(t=null===(e=window.performance)||void 0===e?void 0:e.navigation)||void 0===t?void 0:t.redirectCount;"number"==typeof T&&(O.redirectCount=T);var L=null===(o=null===(r=window.tracking)||void 0===r?void 0:r.state)||void 0===o?void 0:o.hdRequestInfo.ismobile;if("boolean"==typeof L&&(O.ismobile=L),f){var P=f.href;O.enterText=f.text,O.enterHref=P,O.enterUntilUnload=m-f.time}v&&(O.clickText=v.text,O.clickHref=v.href,O.clickUntilUnload=m-v.time);var M=null===(a=null===(i=window.tracking)||void 0===i?void 0:i.state)||void 0===a?void 0:a.wuid;M&&(O.wuid=M),(new Image).src="https://dp.tinkoff.ru/for/img?source=web_data&version=2&current_link="+encodeURIComponent(window.location.href)+"&previous_link="+encodeURIComponent(u)+"&time_left="+O.elapsedTime+"&accuracy="+I+"&click_text="+((null==v?void 0:v.text)||"")+"&click_href="+((null==v?void 0:v.href)||"")+"&level="+U+"&click_until_unload="+((null==O?void 0:O.clickUntilUnload)||""),fetch("https://www.tinkoff.ru/api/front/log/collect?origin=web,ib5,platform&component="+R+"&version=2",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}),sessionStorage.removeItem("779f8dfd")}}}catch(e){window.fetch&&fetch("https://www.tinkoff.ru/api/front/log/collect?origin=web,ib5,platform&component=abnormalRedirectError",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({error_stack:e.stack,error_message:e.toString()})})}})}(),function(){window.addEventListener("beforeunload",function(e){try{var t=(new Date).getTime(),r=window.tracking.state.utmMarkers.utm_source;r&&n.setItem("deb1cee1",r),n.setItem("93291ed8",String(t)),n.setItem("e4548e0c",window.location.href)}catch(e){}}),window.addEventListener("blur",function(e){try{n.removeItem("93291ed8"),n.removeItem("deb1cee1"),n.removeItem("e4548e0c")}catch(e){}});try{var e=n.getItem("93291ed8"),t=n.getItem("deb1cee1"),r=window.tracking.state.utmMarkers.utm_source,o=new URLSearchParams(window.location.search),i=r&&r!==t&&o.has("utm_source"),a=-1!==window.location.href.indexOf("/3dsecure/"),c=n.getItem("e4548e0c");if(e&&i&&!a){var d=Number(e),l=((new Date).getTime()-d)/1e3;if(300>l){var m=encodeURIComponent(document.referrer),s=30>=l?30:60>=l?60:90,u="https://www.tinkoff.ru/api/front/log/collect?origin=web,ib5,platform&component=unauthorizedRedirect&level=error&documentReferrer="+m+"&oldUtm="+t+"&utmSource="+r+"&landedHref="+encodeURIComponent(c)+"&timeLeft="+encodeURIComponent(s);fetch(u,{method:"POST"}),(new Image).src="https://dp.tinkoff.ru/for/img?source=web_data&version=1&current_link="+encodeURIComponent(window.location.href)+"&previous_link="+encodeURIComponent(c)+"&time_left="+encodeURIComponent(s),n.removeItem("93291ed8"),n.removeItem("deb1cee1"),n.removeItem("e4548e0c")}}}catch(e){}}()});