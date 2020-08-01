create database Tienda;

use Tienda;

create table Productos(
    ID_Producto int,
    Nombre_Producto varchar(100),
    Precio int,
    constraint PK_IDProducto primary key (ID_Producto)
);

create table Totales(
    Folio_T int,
    Total int,
    constraint PK_FolioT primary key (Folio_T)
);

create table Ventas(
    Folio int,
    N_Producto varchar(100),
    Cantidad int,
    Precio_U int,
    Precio_T int,
    constraint PK_Folio primary key (Folio)
);