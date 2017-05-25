var coleccionAlamacenes = [
    {
        nombre: "Hamburguesas",
        lugar: "Trujillo",
        items: [{ Id: '1', Nombre: 'Pan', Precio: 10, Cantidad: 1 }, { Id: '2', Nombre: 'Lechuga', Precio: 5, Cantidad: 10} ]
    },
    {
        nombre: "Pizzas",
        lugar: "Lima",
        items: []
    },
    {
        nombre: "Rols",
        lugar: "Tokio",
        items: []
    },
    {
        nombre: "Cebiche",
        lugar: "Buenos Aires",
        items: []
    },
    {
        nombre: "Pop-corns",
        lugar: "Miami",
        items: []
    }
];

function ShowItems(posicion) {
    var almacen = coleccionAlamacenes[posicion];
    var nombre = almacen.nombre;
    var listaItems = almacen.items;
    // Ctrl + F5;
    $('#titulo').text("Items de Almacen " + nombre);
    $('#itemsTable > tbody > tr > td').remove();
    for (var i = 0; i < listaItems.length; i++) {
        var tr = document.createElement('tr');

        // TODO: Revisar forma clasica de agregar
        var tdId = document.createElement('td');
        tdId.textContent = listaItems[i].Id;
        tr.appendChild(tdId);

        var tdNombre = document.createElement('td');
        tdNombre.textContent = listaItems[i].Nombre;
        tr.appendChild(tdNombre);

        var tdPrecio = document.createElement('td');
        tdPrecio.textContent = listaItems[i].Precio;
        tr.appendChild(tdPrecio);

        var tdCantidad = document.createElement('td');
        tdCantidad.textContent = listaItems[i].Cantidad;
        tr.appendChild(tdCantidad);
        
        $('#itemsTable').append(tr);
    }
}

$(document).ready(function () {

    for (var i = 0; i < coleccionAlamacenes.length; i++) {
        var tr = document.createElement('tr');
        // TODO: Revisar forma clasica de agregar
        var tdNombre = document.createElement('td');

        var link = document.createElement('a');
        //link.setAttribute('href', );
        link.href = 'javascript:ShowItems('+i+');';
        link.text = coleccionAlamacenes[i].nombre;
        tdNombre.append(link);
        tr.appendChild(tdNombre);

        var tdLugar = document.createElement('td');
        tdLugar.textContent = coleccionAlamacenes[i].lugar;
        tr.appendChild(tdLugar);

        var tdItems = document.createElement('td');
        var numeroElementos = coleccionAlamacenes[i].items.length;
        tdItems.textContent = numeroElementos;
        tr.appendChild(tdItems);
        $('#almacenesTable').append(tr);
    }

});

