
let camera,scene,renderer,container,controls;
camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.001,800);
//camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
scene=new THREE.Scene();
renderer=new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
container=document.createElement('div'); 
document.body.appendChild(container);
container.appendChild(renderer.domElement);
controls=new THREE.OrbitControls(camera,renderer.domElement);
render=function(){
controls.update();
renderer.render(scene,camera);
}
RENDER=function(){
requestAnimationFrame(RENDER);
render();}
RENDER();







setTimeout(function(){
v=document.createElement('div');
document.body.appendChild(v);
v.innerHTML='<font color=gray>'+
'<h3><b>Wedding Invitation Compatibility Test</b>'+
'<br><h6>powered by three.js'+
'<br>@lowrangeedit'+
'</font>';
v.zIndex=1;
v.style='position:absolute;';
v.style.left=(window.innerWidth*.1)+'px',
v.style.top=(window.innerHeight*.1)+'px',

//dev
v=document.createElement('div');
document.body.appendChild(v);
v.innerHTML='<h3/><br><h6/><br><br><font color=gray><b><h6>tap to override material</b></h6></font>';
v.zIndex=9999;
v.style='position:absolute;';
v.style.left=(window.innerWidth*.1)+'px',
v.style.top=(window.innerHeight*.1)+'px',
v.onclick=function(){
scene.overrideMaterial=
new THREE.MeshNormalMaterial({side:THREE.DoubleSide,wireframe:true});
renderer.setClearColor(0x000000);
setTimeout(function(){
scene.overrideMaterial=false;
renderer.setClearColor(0x000000);
},1000*5);
}
});


mainPath='';



isPortrait=parseInt(window.innerWidth)<parseInt(window.innerHeight);

setTimeout(function(){
renderer.setClearColor(0x000000);

//portraitLandscpe
if(isPortrait){
controls.enablePan=false;
controls.target.set(0,0,0);
camera.position.set(0,0,9999);
controls.maxDistance=3;
camera.updateProjectionMatrix();
controls.update();
controls.maxDistance=3.5;
}
else{
controls.enablePan=false;
controls.target.set(0,0,0);
camera.position.set(0,0,9999);
controls.maxDistance=1.75;
camera.updateProjectionMatrix();
controls.update();
controls.maxDistance=2;
}

},1000);

LGT=function(scenev,doShadowV){
//light
pt=new THREE.AmbientLight(0xffffff,.25);
scenev.add(pt);
pt=new THREE.PointLight(0xffffff,4,10);
scenev.add(pt);
pt.position.set(0,5,5);
pt.castShadow=true;
pt.shadowBias=-.001;
renderer.shadowMapEnabled=doShadowV;
}

setTimeout(function(){

mainMaterial=THREE.MeshBasicMaterial;
mainMaterial2=THREE.MeshBasicMaterial;
var pgs=[];
FLIP(scene,pgs);
BG(scene,10);
LGT(scene,false);
render=function(){
controls.update();
renderer.render(scene,camera);
}

/*
mainMaterial=THREE.MeshPhongMaterial;
mainMaterial2=THREE.MeshLambertMaterial;
scene2=new THREE.Scene();
FLIP(scene2);
BG(scene2,40);
LGT(scene2,true);
render=function(){
controls.update();
renderer.render(scene2,camera);
}
*/

},1000);