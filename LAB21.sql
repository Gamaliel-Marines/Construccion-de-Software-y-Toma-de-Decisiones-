/*
Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

/*
La suma de las cantidades e importe total de todas las entregas realizadas durante el 97
*/

SELECT SUM(Cantidad) AS SumaCantidades, SUM(cantidad * materiales.precio * (1 + materiales.impuesto / 100)) AS Importetotal
FROM entregan
JOIN materiales ON entregan.clave = materiales.clave
WHERE YEAR(entregan.fecha) = 1997;

/*
 Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.
*/

SELECT P.RazonSocial, SUM(cantidad * materiales.precio * (1 + materiales.impuesto / 100)) AS Importetotal, COUNT(*) AS NumEntregas
From proveedores P
INNER JOIN materiales ON entregan.clave = materiales.clave
INNER JOIN entregan ON proveedores.rfc = materiales.rfc
GROUP BY p.RazonSocial;







