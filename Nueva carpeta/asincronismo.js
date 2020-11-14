console.log("a");
/*setTimeout(function () {
  console.log("b");
}, 1500);*/
console.log("c");
console.log("d");

const API = "https://swapi.dev/api/";
const people_URL = "people/#/";
const opts = { crossDomain: true };

/*function obtenerPersonaje(id, fn) {
  const people = `${API}${people_URL.replace("#", id)}`;
  $
  .get(people, opts, fn)
  .fail(function(){ //atributo de error
	console.log(`Hola ocurrió un error con el personaje ${id}`)
  })
}*/

function obtenerPersonaje(id) {
  return new Promise(function (resolve, rejected) {
    const people = `${API}${people_URL.replace("#", id)}`;
	$
	.get(people, opts, function (data) {
      resolve(data);
	})
	.fail(function () {
      rejected(id);
    });
  });
}

const onError = (id) => console.log(`Hola ocurrió un error con el personaje ${id}`)


/*var promesas = ids.map( function(id){
	return obtenerPersonaje(id)		-------------MÉTODO LARGO---------------
})*/

async function obtenerPersonajes(){
  var ids = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  var promesas = ids.map( id => obtenerPersonaje(id))
  try{
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch(id){
    onError(id)
  }
}

obtenerPersonajes()




/*
obtenerPersonaje(1)
  .then (persona => {
	console.log(`Hola soy ${persona.name}`);
	return obtenerPersonaje(2)
  })
  .then (persona => {
	console.log(`Hola soy ${persona.name}`);
	return obtenerPersonaje(3)
  })
  .then (persona => {
	console.log(`Hola soy ${persona.name}`);
	return obtenerPersonaje(4)
  })
  .then (persona => {
	console.log(`Hola soy ${persona.name}`);
	return obtenerPersonaje(5)
  })
  .then (persona => {
	console.log(`Hola soy ${persona.name}`);
	return obtenerPersonaje(6)
  })
  .then (persona => {
	console.log(`Hola soy ${persona.name}`);
	return obtenerPersonaje(7)
  })
  .then (persona => {
	console.log(`Hola soy ${persona.name}`);
	return obtenerPersonaje(8)
  })
  .then (persona => {
	console.log(`Hola soy ${persona.name}`);
	return obtenerPersonaje(9)
  })
  .then (persona => {
	console.log(`Hola soy ${persona.name}`);
	return obtenerPersonaje(10)
  })
  .then (persona => {
	console.log(`Hola soy ${persona.name}`);
  })
  .catch(function (id) {
    console.log(`Hola ocurrió un error con el personaje ${id}`);
  });
*/
/*obtenerPersonaje(1, function (persona) {
  console.log(`Hola soy ${persona.name}`);

  obtenerPersonaje(2, function (persona) {
    console.log(`Hola soy ${persona.name}`);

    obtenerPersonaje(3, function (persona) {
      console.log(`Hola soy ${persona.name}`);

      obtenerPersonaje(4, function (persona) {
        console.log(`Hola soy ${persona.name}`);

        obtenerPersonaje(5, function (persona) {
          console.log(`Hola soy ${persona.name}`);

          obtenerPersonaje(6, function (persona) {
            console.log(`Hola soy ${persona.name}`);

            obtenerPersonaje(7, function (persona) {
              console.log(`Hola soy ${persona.name}`);

              obtenerPersonaje(8, function (persona) {
                console.log(`Hola soy ${persona.name}`);

                obtenerPersonaje(9, function (persona) {
                  console.log(`Hola soy ${persona.name}`);

                  obtenerPersonaje(10, function (persona) {
                    console.log(`Hola soy ${persona.name}`);
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
*/

/*for (i = 1; i <= 15; i++) {
obtenerPersonaje(i, function(){  ----------------PARA LLAMAR UNA SECUENCIA DE PERSONAJES----------------------
	obtenerPersonaje(i)
})
}*/

/*
obtenerPersonaje(1, function(){
	obtenerPersonaje(2, function(){
		obtenerPersonaje(3, function(){
			obtenerPersonaje(4, function(){
				obtenerPersonaje(5, function(){
					obtenerPersonaje(6, function(){
						obtenerPersonaje(7, function(){
							obtenerPersonaje(8, function(){
								obtenerPersonaje(9, function(){
									obtenerPersonaje(10, function(){
										obtenerPersonaje(11, function(){
											obtenerPersonaje(12, function(){
												obtenerPersonaje(13, function(){
													obtenerPersonaje(14, function(){
														obtenerPersonaje(15)		----------HELL CALLBACKS----------
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	})
})*/
