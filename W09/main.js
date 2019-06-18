function main()
{
    var volume = new KVS.LobsterData();
    //var volume = new KVS.TornadoData(50,20,30);
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth,
        height: window.innerHeight,
        //enableAutoResize: false
        targetDom: document.getElementById('display'),
        enableAutoResize: true
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );
    
    var cmap = 1;
    //var isovalue = 230;
    var isovalue = document.getElementById("isovalue").value;
    var surfaces = Isosurfaces( volume, isovalue, cmap);
    screen.scene.add( surfaces );
    
    
    document.getElementById('change-isovalue-button').addEventListener('click', function () {
        screen.scene.remove(surfaces);
        isovalue = document.getElementById("isovalue").value;
        surfaces = Isosurfaces( volume, isovalue, cmap);
        screen.scene.add(surfaces);
    });
    
    
    
    
    document.getElementById('map1-button').addEventListener('click', function () {
        cmap = 1;
        screen.scene.remove(surfaces);
        isovalue = document.getElementById("isovalue").value;
        surfaces = Isosurfaces( volume, isovalue, cmap);
        screen.scene.add(surfaces);
    });
    
    document.getElementById('map2-button').addEventListener('click', function () {
        cmap = 2;
        screen.scene.remove(surfaces);
        isovalue = document.getElementById("isovalue").value;
        surfaces = Isosurfaces( volume, isovalue, cmap);
        screen.scene.add(surfaces);
    });



    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });
    
    var material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('phong.vert').text,
        fragmentShader: document.getElementById('phong.frag').text,
    });

    screen.loop();
}
