const nombres = JSON.parse('[{"#":1,"Nombre":"Daniel","Apellido":"Barriga Alonso"},{"#":2,"Nombre":"Luna","Apellido":"Benitez"},{"#":3,"Nombre":"Jhon Jeremias","Apellido":"Cabreras Puig"},{"#":4,"Nombre":"Nicolas","Apellido":"Castro"},{"#":5,"Nombre":"Melanie","Apellido":"Di Pardo"},{"#":6,"Nombre":"Romina","Apellido":"Diaz"},{"#":7,"Nombre":"Jesus","Apellido":"Farias"},{"#":8,"Nombre":"Ezequiel Ariel Mathias","Apellido":"Gonzalez"},{"#":9,"Nombre":"Gianfranco Thomas","Apellido":"Herrera"},{"#":10,"Nombre":"Juan David","Apellido":"López"},{"#":11,"Nombre":"Facundo","Apellido":"Maggi"},{"#":12,"Nombre":"Alejandro","Apellido":"Maza"},{"#":13,"Nombre":"Gerardo Agustin","Apellido":"Mereles"},{"#":14,"Nombre":"Abigail Jazmín","Apellido":"Noriega"},{"#":15,"Nombre":"Brisa del Cielo","Apellido":"Papaleo"},{"#":16,"Nombre":"David Agustin","Apellido":"Pedreira"},{"#":17,"Nombre":"Sofia","Apellido":"Puerta"},{"#":18,"Nombre":"Jose","Apellido":"Quiros"},{"#":19,"Nombre":"Pablo","Apellido":"Robledo"},{"#":20,"Nombre":"Celeste","Apellido":"Seriga"},{"#":21,"Nombre":"Lourdes","Apellido":"Soria"},{"#":22,"Nombre":"Damaris","Apellido":"Telerman"},{"#":23,"Nombre":"Milagros","Apellido":"Vaca"},{"#":24,"Nombre":"Gonzalo Ariel","Apellido":"Vignolles Santacruz"},{"#":25,"Nombre":"Ariadna","Apellido":"Villagra"}]');

console.log(nombres);


function mostrarNombres() {
    for (let index = 0; index < nombres.length; index++) {
      console.log(`Nombre: ${nombres[index].Nombre} Apellido: ${nombres[index].Apellido} `);
    }
}

mostrarNombres();