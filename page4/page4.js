(function(b){b.fn.particleText=function(a){var u="";if(this[0].className){u="."+this[0].className}if(this[0].id){u="#"+this[0].id}var z=document.querySelector(u);var q=z.getContext("2d");var w=z.width=z.clientWidth;var C=z.height=z.clientHeight;var s="";var t=0.09;if(a.speed){if(a.speed=="middle"){t=0.07}else{if(a.speed=="slow"){t=0.04}else{if(a.speed=="high"){t=0.09}}}}if(a.text){s=a.text}else{s=a}var D=["#F54064","#F5D940","#18EBF2"];if(a.colors){D=a.colors}var A=false;if(s.indexOf("<br>")!=-1){A=true}var r=[],v=0;function y(c,d){this.x=Math.random()*w;this.y=Math.random()*C;this.goal={x:c,y:d};this.r=z.clientWidth/2.5*0.003;this.color=D[Math.floor(Math.random()*D.length)]}y.prototype.render=function(){this.x+=(this.goal.x-this.x)*t;this.y+=(this.goal.y-this.y)*t;q.fillStyle=this.color;q.beginPath();q.arc(this.x,this.y,this.r,Math.PI*2,false);q.fill()};function x(){var c=z.width=z.clientWidth;var i=z.height=z.clientHeight;q.clearRect(0,0,z.width,z.height);var d=6;q.font="bold "+(c/d)+"px sans-serif";q.textAlign="center";if(!A){e()}else{j()}function e(){var k=2;if(z.height<=300&&z.width>768){k=1.5}q.fillText(s,c/2,i/k)}function j(){var n=s;var p="<br>";var k=n.split("<br>");var H=i/k.length;var o=k.length;var l=768;if(o==2){if(z.width<=l){var m=0.6;for(var G=0;G<k.length;G++){q.fillText(k[G],c/2,H*m);m+=0.3}}else{var m=0.7;for(var G=0;G<k.length;G++){q.fillText(k[G],c/2,H*m);m+=0.5}}}if(o==3){if(z.width<=l){var m=0.8;for(var G=0;G<k.length;G++){q.fillText(k[G],c/2,H*m);m+=0.4}}else{var m=0.9;for(var G=0;G<k.length;G++){q.fillText(k[G],c/2,H*m);m+=0.7}}}if(o==4){if(z.width<=l){var m=1;for(var G=0;G<k.length;G++){q.fillText(k[G],c/2,H*m);m+=0.5}}else{var m=1;for(var G=0;G<k.length;G++){q.fillText(k[G],c/2,H*m);m+=0.8}}}if(o>=5){var m=1;for(var G=0;G<k.length;G++){q.fillText(k[G],c/2,H*m);m+=0.8}}}var f=q.getImageData(0,0,c,i).data;q.clearRect(0,0,z.width,z.height);q.globalCompositeOperation="source-over";r=[];for(var g=0;g<c;g+=Math.round(c/250)){for(var h=0;h<i;h+=Math.round(c/250)){if(f[((g+h*c)*4)+3]>150){r.push(new y(g,h))}}}v=r.length}function B(d){requestAnimationFrame(B);q.clearRect(0,0,z.width,z.height);for(var c=0;c<v;c++){r[c].render()}}window.addEventListener("resize",x);x();requestAnimationFrame(B)}})(jQuery);$("#particle").particleText({text:"⍨⃞<br>PEPEPE!<br>PASS 3 = 4",colors:["#FFF450","#FFD700","#FFE8AF"],speed:"slow"});