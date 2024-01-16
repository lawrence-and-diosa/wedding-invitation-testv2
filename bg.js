
BG=function(scenev,leavesCountV){



//table
gm=new THREE.PlaneGeometry(3*2,2*2);
if(isPortrait){gm.rotateZ(-Math.PI/2);}
gm.translate(0,0,-.5);
txd=new THREE.ImageUtils.loadTexture(mainPath+'table.png');
txd.wrapS=txd.wrapT=THREE.RepeatTexture;
txd.repeat.set(1,1);
mt=new mainMaterial2({map:txd,side:2});
msh=new THREE.Mesh(gm,mt);
scenev.add(msh);
msh.receiveShadow=true;












//leave
lvs=[];
for(var i=0;i<leavesCountV;i++){
gm=new THREE.PlaneGeometry(.5,.5);
txd=new THREE.ImageUtils.loadTexture(mainPath+'l'+(Math.floor(Math.random()*10)+1)+'.png');
mt=new mainMaterial2({map:txd,alphaTest:.5});
lvs[i]=new THREE.Mesh(gm,mt);
scenev.add(lvs[i]);
xv=(Math.random()-.5)*5
yv=(Math.random()-.5)*10
zv=(Math.random()-.5)*1-.5
lvs[i].position.set(xv,yv,zv);
lvs[i].vang=Math.random()*.01;
}
setInterval(function(){
for(var i=0;i<lvs.length;i++){
lvs[i].position.y-=.005;
lvs[i].rotation.z-=lvs[i].vang;
if(lvs[i].position.y<-5){lvs[i].position.y=5;}
}
})



//icon
gm=new THREE.SphereGeometry(.125,8,8);
txd=new THREE.ImageUtils.loadTexture(mainPath+'fb.png');
mt=new mainMaterial2({map:txd});
ball=new THREE.Mesh(gm,mt);
scenev.add(ball);
ball.position.set(0,0,-2);
if(!isPortrait){
ball.position.set(.9*1.25,-.5,.1);
}
ball.F=function(){window.location.href='https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://m.youtube.com/watch%3Fv%3DdQw4w9WgXcQ&ved=2ahUKEwiNjcvIrdaDAxXI9jgGHaWiA64QwqsBegQIDhAG&usg=AOvVaw2KTqEs1wN8sVojiOfVta96';}
ball.rx=0,ball.ry=0,ball.rz=0;
setInterval(function(){
if(Math.random()<.05){
ball.rx=Math.random()-.5,
ball.ry=Math.random()-.5,
ball.rz=Math.random()-.5;
}
ball.rotation.x+=(ball.rotation.x-ball.rx)*-.25;
ball.rotation.y+=(ball.rotation.y-ball.ry)*-.25;
ball.rotation.z+=(ball.rotation.z-ball.rz)*-.25;
});
//bubble
txd=new THREE.ImageUtils.loadTexture(mainPath+'bubble.png');
mt=new THREE.SpriteMaterial({map:txd});
spr=new THREE.Sprite(mt);
scenev.add(spr);
spr.position.copy(ball.position);
spr.sz=0;
setInterval(function(){
spr.sz+=(spr.sz-0)*-.0025;
if(spr.sz<.25){spr.sz=.5;}
spr.scale.set(spr.sz,spr.sz,spr.sz);});

zz=-1;
setInterval(function(){
if(num>5){if(zz<.125){zz+=.005;}}
if(num<=5){if(zz>-1){zz-=.1;}}
ball.position.set(0,0,zz);
spr.position.set(spr.sz/2,spr.sz/2,zz);
});



}