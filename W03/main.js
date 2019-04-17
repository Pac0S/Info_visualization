function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();
	
	//camera
    var fov = 10;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 5,1,5);
    
    scene.add( camera );
    
    
    //light
    var light = new THREE.PointLight(0xffffff);
    light.position.set(0.5,0.5,1);
    scene.add(light);
	
	//rendering
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
	
	//geometry
    var geometry = new THREE.BoxGeometry( 1, 3, 1 );
    
    //material
    //var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var material = new THREE.MeshLambertMaterial({color : 0x7ab33a});
    //var material = new THREE.MeshNormalMaterial({color : 0xffffff});
    //var material = new THREE.PointsMaterial({color:0xf3ffe2})
    //var material = new THREE.MeshStandardMaterial({color : 0x7ab33a});
    
    
    //cube
    var cube = new THREE.Mesh( geometry, material );
    cube.lookAt(-0.5,1,1);
    scene.add( cube );
    
    target = new THREE.Vector3();
	camera.lookAt(cube.getWorldPosition(target));

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.1;
        cube.position.z += 0.1;
        cam = camera.lookAt(cube.getWorldPosition(target));
        renderer.render( scene, camera );
    }
}
