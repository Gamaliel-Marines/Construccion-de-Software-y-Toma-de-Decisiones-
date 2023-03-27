/*
Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

/*
1. La suma de las cantidades e importe total de todas las entregas realizadas durante el 97
*/

SELECT SUM(Cantidad) AS SumaCantidades, SUM(cantidad * materiales.precio * (1 + materiales.impuesto / 100)) AS Importetotal
FROM entregan
JOIN materiales ON entregan.clave = materiales.clave
WHERE YEAR(entregan.fecha) = 1997;

/*
2. Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.
*/

SELECT P.RazonSocial, SUM(cantidad * materiales.precio * (1 + materiales.impuesto / 100)) AS Importetotal, COUNT(*) AS NumEntregas
From proveedores P
INNER JOIN materiales ON entregan.clave = materiales.clave
INNER JOIN entregan ON proveedores.rfc = entregan.rfc
GROUP BY p.RazonSocial;

/*
3. Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
*/



/*
4. Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
*/


/*
5. Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450
*/

/*
6. Clave y descripción de los materiales que nunca han sido entregados.
*/

/*
7. Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.
*/


/*
8. Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.
*/


/*
9. Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
*/


/*
10. RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
*/








