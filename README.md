# pycatastrov
Proyecto del Ciclo 4 de la formación Misión TIC 2021 con la Universidad del Norte de Barranquilla.

# DESARROLLO_DE_APLICACIONES_WEB_8888001240_IST1047_10
# EQUIPO # 10

1.	Fernely Torres Mora
2.	Francisco Pallares De La Hoz
3.	Libia Benitez Ramos
4.	Nicolás Guzmán Arenas
5.	Sergio Tapia Consuegra

# Plataforma Gestión Catastral

Actualmente la Gobernación del Cesar realiza de forma manual el cobro catastral de los predios de la ciudad de Valledupar. Por este motivo la Gobernación del Cesar lo contacta a usted y su equipo con el fin de crear una plataforma que les permita gestionar el cobro catastral de los predios de la ciudad correspondiente.

Los tipos de usuarios que debe manejar el sistema son administrador, usuario externo y usuario interno.
Un usuario interno deberá estar en la capacidad de:

- Crear predio indicando el código, nombre del propietario, cédula del propietario, área total del predio, área construida del predio, dirección y barrio.
- Ejecutar un algoritmo que genere los cobros anuales de todos los predios registrados.
- Gestionar predio (cambiar dueño del predio).
- Definir la fecha de pago máxima en un año.
-	Definir la fecha de pago máxima para tener un descuento y definir el descuento.
-	Ejecutar un algoritmo que genere multas sobre los predios que no realizaron el pago en un tiempo determinado.
-	Aprobar/reprobar convenio de pago.

Un usuario externo debe estar en la capacidad de:

-	Registrarse en la plataforma.
-	Asociar predios a la cuenta dado el código (será posible si el predio está a nombre del usuario).
-	Realizar pago del valor predial. (Simular)
-	Solicitar convenio de pago dado un cobro generado (pago por fuera de la fecha máxima).

Un administrador se encarga de gestionar los usuarios internos y además ejerce control total de la plataforma.

Notas:

-	Los datos suministrados por los usuarios deben cumplir la política de privacidad de datos vigente, es decir las contraseñas de los usuarios deben almacenarse de forma cifrada y la conexión al servidor debe realizarse de forma segura.
-	La base de datos debe ser no relacional.
-	Se debe utilizar una arquitectura desacoplada, es decir, una API back end y un front end que consuma dicha API.
-	La API back end debe estar desarrollada en Express.js
-	El front end debe estar desarrollado en React.js
-	Se debe utilizar Bootstrap como librería CSS para manejar los estilos de su aplicación.
