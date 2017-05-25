var Servicios = function () {

    this.AgregarElemento = function (item, coleccionItems) {
        return coleccionItems.push(item);
    };
    this.BorrarElemento = function (item, coleccionItems) {
        return coleccionItems.remove(item);
    };

    this.ModificarElemento = function (item, coleccionItems) {
        // Buscar elemento en la coleccion, por ID o por Nombre
        return coleccionItems;
    };

    this.AgregarAlmacen = function () { };
    this.ModificarAlmacen = function () { };
    this.EliminarAlmacen = function () { };
    this.VerAlmacenes = function () { };
}