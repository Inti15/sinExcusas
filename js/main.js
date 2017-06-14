  //API FOURSQUARE ---- search venues(lugares de busqueda)
  //objeto con los parametros que se le pasaran en la url cuando llamemos a la api
  var busqueda = {
      /* el client_id y client _secret los obtuve al registrar una aplicacion en la pagina de la api*/
      client_id: "GPXU1NKKDD5VW4G2FLB3QFMOAW3WS2YZSCWIWZB5N0YSVBAW",
      client_secret: "WQ3BRM2NLVG0KVDB2QT3X1SBVPTBWBOPTYKMODVO4PMCJ5UK",
      ll: "19.4160585,-99.1636161", //coordenadas de laboratoria 
      radius: 800, // Limite de busqueda en metros de la ubicación especificada.
      query: "restaurant", //que se esta buscando ejemplo: donuts, sushi,etc
      v: 20170613,
      m: "foursquare"
      //limit:  numero de resultados que queremos que nos regrese,por default regresa 30
  };
  /* Link para saber más de la api que estamos usando, tambien nos dice que otros parametros podemos usar
     https://developer.foursquare.com/docs/venues/search    */
  //url que se usa para solicitar una respuesta a la API
  var url = "https://api.foursquare.com/v2/venues/search?ll=_coordenadas_&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&v=YYYYMMDD&radius=_meters_&query=_to_serch_"
  //se remplaza los valores asignados en el objeto busqueda en el url
  url = url.replace("CLIENT_ID", busqueda.client_id)
      .replace("CLIENT_SECRET", busqueda.client_secret)
      .replace("YYYYMMDD", busqueda.v)
      .replace("_coordenadas_", busqueda.ll)
      .replace("_meters_", busqueda.radius)
      .replace("_to_serch_", busqueda.query);
  var cargarPagina = function () {
      //    console.log(url);
      prueba(url);
  }
  var prueba = function (url) {
      $.getJSON(url,
          function (response) {
              console.log(response);
              console.log(response.response);
          });
  };
  /* La respuesta de la api nos da un objeto, en response.response te da un arreglo con 30 objetos
   que son los restaurantes encontrados en response.response.name te da el nombre del restaurante
   en response.response.location obtines la latitud,longitud,direccion  y más*/
  $(document).ready(cargarPagina);


  ///facebook

//
 (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.9&appId=677059692484007";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
  
   // This is called with the results from from FB.getLoginStatus().
            function statusChangeCallback(response) {
                console.log('statusChangeCallback');
                console.log(response);
                // The response object is returned with a status field that lets the
                // app know the current login status of the person.
                // Full docs on the response object can be found in the documentation
                // for FB.getLoginStatus().
                if (response.status === 'connected') {
                    // Logged into your app and Facebook.
                    testAPI();
                } else {
                    // The person is not logged into your app or we are unable to tell.
                    document.getElementById('status').innerHTML = 'Please log ' +
                        'into this app.';
                }
            }

            // This function is called when someone finishes with the Login
            // Button.  See the onlogin handler attached to it in the sample
            // code below.
            function checkLoginState() {
                FB.getLoginStatus(function(response) {
                    statusChangeCallback(response);
                });
            }

            window.fbAsyncInit = function() {
                FB.init({
                    appId: '{your-app-id}',
                    cookie: true, // enable cookies to allow the server to access 
                    // the session
                    xfbml: true, // parse social plugins on this page
                    version: 'v2.8' // use graph api version 2.8
                });

                // Now that we've initialized the JavaScript SDK, we call 
                // FB.getLoginStatus().  This function gets the state of the
                // person visiting this page and can return one of three states to
                // the callback you provide.  They can be:
                //
                // 1. Logged into your app ('connected')
                // 2. Logged into Facebook, but not your app ('not_authorized')
                // 3. Not logged into Facebook and can't tell if they are logged into
                //    your app or not.
                //
                // These three cases are handled in the callback function.

                FB.getLoginStatus(function(response) {
                    statusChangeCallback(response);
                });

            };

            // Load the SDK asynchronously
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            // Here we run a very simple test of the Graph API after login is
            // successful.  See statusChangeCallback() for when this call is made.
            function testAPI() {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Successful login for: ' + response.name);
                    document.getElementById('status').innerHTML =
                        'Gracias, ' + response.name + '!';
                });
            }
      