function main()
{
    var volume = new KVS.LobsterData();
    //KVS.CreateTornadoData(100,100,100)
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

    //var isovalue = 230;
    var isovalue = document.getElementById("isovalue").value;
    var surfaces = Isosurfaces( volume, isovalue);
    screen.scene.add( surfaces );
    
    
    document.getElementById('isovalue').addEventListener('mousemove', function () {
        screen.scene.remove(surfaces);
        isovalue = document.getElementById("isovalue").value;
        surfaces = Isosurfaces( volume, isovalue);
        screen.scene.add(surfaces);
    });

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    screen.loop();
}
