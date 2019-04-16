var cacheName = 'demo-pwa-v1.1';
var filesToCache = [
    '/',
    '/index.html',
    '/css/bootstrap/bootstrap.min.css',
    '/css/font-awesome/css/font-awesome.min.css',
    '/css/style.css',    
    '/js/jquery/jquery.slim.min.js',
    '/js/popper.js/popper.min.js',
    '/js/bootstrap/bootstrap.min.js',
    '/img/verified.png'
  ];
  

// Ciclo de vida del SW
self.addEventListener( 'install', event => {

    //Descargar assets
    //Creamos un cache
    console.log( 'Instalando el Service Worker..!' );
    let instalaciones = caches.open( cacheName ).then( cache =>{
       // return cache.addAll(filesToCache);
       cache.addAll(filesToCache)
        .then( () => {
            console.log( "Descarga de recursos correctamente en el cache...!" );
        })
        .catch( error => {
            console.log( "Error de recursos...!", error);
        });
    });    
    event.waitUntil( instalaciones );
    self.skipWaiting();
    
    /*event.waitUntil(
        caches.open(cacheName).then(function(cache) {
          console.log('[ServiceWorker] Caching app shell');
          return cache.addAll(filesToCache);
        })
    );*/
    

   /* const instalaciones = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log( 'Instalando recursos...' );
        }, 1000);
        self.skipWaiting();
        resolve();
    });

    //Se utiliza para esperar la ejecución del algun proceso que demore algun tiempo.
    event.waitUntil( instalaciones );*/

    //Se utiliza para que el service worker tome el control inmediatamente de la aplicación. 
    //self.skipWaiting(); 
});


//Evento cuando el service worker toma el control de la aplicación. 

self.addEventListener( 'activate', event => {
    //Para borrar cache anterior
    console.log( 'SW activo y listo para controlar la aplicación...' );
});


//FETCH: manejo de peticiones HTTP
/*self.addEventListener( 'fetch', event => {
    console.log( 'SW', event.request.url );
});


//SYNC: recupera la conexión a internet 
//En este evento se debe leer la base de datos para enviar los registros. 
self.addEventListener( 'sync', event => {
    console.log( 'Tenemos conexión a internet...' );
    console.log( event );
    console.log( event.tag ); //Estos seran los posteos sin conexion, se revisan los tag para determinadar que se va a llevar.
});*/