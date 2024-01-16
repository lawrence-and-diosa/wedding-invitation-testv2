
//audio
mp=new Audio();
mp.src=mainPath+'page.mp3';
mp.play2=function(){
this.currentTime=0;
this.play();
}
var num=-1;
FLIP=function(scenev){
//page
var pgs=[];
PAGE=function(str,str2){
I=pgs.length;
gm=new THREE.PlaneGeometry(1,1*1.25,2,1);
gm.translate(.5,0,0);
gmm=new THREE.PlaneGeometry(1,1*1.25,2,1);
gmm.translate(.5,0,0);
gm.merge(gmm);
gm.verticesNeedUpdate=true;
gm.computeVertexNormals();
for(var ii=0;ii<3;ii++){gm.faces[ii].materialIndex=0;}
for(var ii=4;ii<8;ii++){gm.faces[ii].materialIndex=1;}
txd=new THREE.ImageUtils.loadTexture(str);
txd2=new THREE.ImageUtils.loadTexture(str2);
txd2.wrapS = THREE.RepeatWrapping;
txd2.repeat.x = - 1;
mt=new mainMaterial({map:txd,side:0});
mtt=new mainMaterial({map:txd2,side:THREE.BackSide });
mt.normalMap=new THREE.ImageUtils.loadTexture('res/norm.png');
mtt.normalMap=new THREE.ImageUtils.loadTexture('res/norm2.png');

pgs[I]=new THREE.Mesh(gm,[mt,mtt]);

pgs[I].receiveShadow=true;
pgs[I].castShadow=true;
pgs[I].sw=-1,pgs[I].ang=0,pgs[I].ang2=0;
pgs[I].F=function(){
if(this.sw==-1){num=pgs.indexOf(this);}
if(this.sw==1){num=pgs.indexOf(this)-1;}
mp.play2();
}
return pgs[I]
}
//pagetick
setInterval(function(){
for(var i=0;i<pgs.length;i++){
if(pgs[i].sw==1){pgs[i].ang+=(pgs[i].ang-(-Math.PI))*-.0125;}
if(pgs[i].sw==-1){pgs[i].ang+=(pgs[i].ang-0)*-.0125;}
pgs[i].ang2+=(pgs[i].ang2-pgs[i].ang)*-.025;
pgs[i].rotation.y=pgs[i].ang;

pgs[i].sw=-1;
pgs[i].position.z+=
((pgs[i].position.z-(-i*.01))*-.05)
+(num*.001)
;
if(i<=num){
pgs[i].sw=1;
pgs[i].position.z+=
((pgs[i].position.z-(i*.01))*-.05)
-(num*.001)
;

}


pgs[i].geometry.vertices[1].z=pgs[i].geometry.vertices[4].z=(pgs[i].ang2-pgs[i].ang)*.25
pgs[i].geometry.vertices[2].x=pgs[i].geometry.vertices[5].x=1+(((pgs[i].ang2-pgs[i].ang)*-pgs[i].sw)*.1)
pgs[i].geometry.vertices[7].z=pgs[i].geometry.vertices[10].z=(pgs[i].ang2-pgs[i].ang)*.25
pgs[i].geometry.vertices[8].x=pgs[i].geometry.vertices[11].x=1+(((pgs[i].ang2-pgs[i].ang)*-pgs[i].sw)*.1)

pgs[i].geometry.verticesNeedUpdate=true;
pgs[i].geometry.computeVertexNormals();

}
});





//page init
grp=new THREE.Group();scenev.add(grp);grp.translateX(-.5);
arr=[1,2,3,4,5,6];
arr2=[0,0,0,0,0,0];
if(!isPortrait){
arr=[1,3,5,0];
arr2=[2,4,6,0];
}
for(var i=0;i<arr.length;i++){
v=PAGE(mainPath+(arr[i])+'.png',mainPath+arr2[i]+'.png');
grp.add(v);
}
setInterval(function(){
v=0;
if(isPortrait){v=-.4}
if(num<=-1){
grp.position.x+=(-.5-grp.position.x)*.05;
}
if(num>-1&&num<pgs.length-1){
grp.position.x+=(v-grp.position.x)*.05;
}
if(num>=pgs.length-1){
grp.position.x+=(.5-grp.position.x)*.05;
}
});

}


var num=-1;
setTimeout(function(){

map=document.createElement('IFRAME');
map.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123504.20202208657!2d121.06219010000001!3d14.68393575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ba0942ef7375%3A0x4a9a32d9fe083d40!2sQuezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1705334885476!5m2!1sen!2sph";
document.body.appendChild(map);
map.style.zIndex=9999;
sz=0;
map.width=map.height=sz;
map.style.top=((window.innerHeight/2)-(sz/2))+'px';
map.style.left=((window.innerWidth/2)-(sz/2))+'px';
map.style='position:absolute;scrolling:no;border:0;allowfullscreen:;loading:"lazy";referrerpolicy:no-referrer-when-downgrade;';

numMap=4;if(!isPortrait){numMap=2;}
setInterval(function(){
if(num==numMap&&sz<350){sz+=100;}
else if(num!=numMap&&sz>=0){sz-=100;};
if(sz>=0&&sz<350){
map.width=map.height=sz;
map.style.top=((window.innerHeight/2)-(sz/2)+((sz/2)*.65))+'px';
map.style.left=((window.innerWidth/2)-(sz/2))+'px';
}

},120);


},1);



