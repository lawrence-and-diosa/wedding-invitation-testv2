/*
gm=new THREE.BoxGeometry(.1,.1,.1);
mt=new THREE.MeshNormalMaterial({});
ptr=new THREE.Mesh(gm,mt);
scene.add(ptr);*/

raycaster=new THREE.Raycaster();
pointer=new THREE.Vector2();
document.addEventListener('pointerdown',function(e){
pointer.x=(e.clientX/window.innerWidth)*2-1;
pointer.y=-(e.clientY/window.innerHeight)*2+1;
raycaster.setFromCamera( pointer, camera );
const intersects = raycaster.intersectObjects( scene.children,true );
if(intersects.length>0&&intersects[0].object&&intersects[0].object.F){
intersects[0].object.F();
}
/*
if(intersects.length>0&&intersects[0].point&&intersects[0].object!=ptr){
ptr.position.copy(intersects[0].point);
}*/
});
/*
pointer2=new THREE.Vector2();
document.addEventListener('pointermove',function(e){
pointer.x=(e.clientX/window.innerWidth)*2-1;
pointer.y=-(e.clientY/window.innerHeight)*2+1;
raycaster.setFromCamera( pointer, camera );
const intersects = raycaster.intersectObjects( scene.children );
if(intersects.length>0&&intersects[0].point&&intersects[0].object!=ptr){
ptr.position.copy(intersects[0].point);
}
});
*/
