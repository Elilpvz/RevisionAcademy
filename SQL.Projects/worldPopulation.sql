--3. Consultas:

SELECT DISTINCT year FROM population_years;

--4. Población de Gabon:

SELECT * FROM population_years
WHERE country = 'Gabon';

--5. Países con menor población en el año 2005:

SELECT country FROM population_years
WHERE year = 2005
ORDER BY population ASC
LIMIT 10;

--6. Países con mas de 100 millones en el 2010:

SELECT DISTINCT country FROM population_years
WHERE year = 2010
AND population > 100;

--7. Países que contienen en su nombre la palabra "islas":

SELECT DISTINCT country FROM population_years
WHERE country like "%islands%";

--8. Diferencia de población entre 2000 y 2010:

SELECT year, population FROM population_years
WHERE country = 'Indonesia'
AND year = 2000
OR country = 'Indonesia'
AND year = 2010;
