let url = 'https://siaweb-nodejs.carlos-reneren7.repl.co/productos'

function postProductos(url, data) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("La solicitud no se pudo procesar...");
      }
    });
  }
  
  function obtenerValores(){
  const nombre = document.getElementById('nomProduct').value;
    const precio = document.getElementById('precioProduct').value;
    const descripcion = document.getElementById('descProduct').value;

    console.log("El valor del nombre es:" + nombre);
    console.log("El valor del precio es:" + precio);
    console.log("El valor de la descicion es:" + descripcion);

    const todo = {
      nombre,
      precio,
      descripcion
    };
    const buttonS = document.getElementById('buttonSave').addEventListener('click', ()=>
    {
      postProductos(url, todo)
      .then(response => {
        // Hacer algo con la respuesta si es necesario
        console.log("Respuesta de postProductos:", response);
      })
      .catch(error => {
        // Manejar el error si la solicitud falla
        console.error("Error al enviar los datos:", error);
      })
    })
  }