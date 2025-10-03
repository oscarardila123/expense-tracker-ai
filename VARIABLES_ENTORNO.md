# Variables de entorno utilizadas en el proyecto

Este documento lista todas las variables que el proyecto toma del sistema (process.env) y sus valores por defecto, según el código fuente al 2 de octubre de 2025.

| Variable                        | Valor por defecto                                      |
|----------------------------------|-------------------------------------------------------|
| EMAIL_FROM                      | Finkargo Analiza <noreply@finkargo.com>               |
| GOOGLE_CLIENT_ID                | (Debe estar definida, sin valor por defecto)           |
| GOOGLE_CLIENT_SECRET            | (Debe estar definida, sin valor por defecto)           |
| WOMPI_ENVIRONMENT               | 'simulation', 'testing' (según contexto)              |
| WOMPI_PUBLIC_KEY                | '' (cadena vacía en wompi-config)                     |
| WOMPI_PRIVATE_KEY               | '' (cadena vacía en wompi-config)                     |
| WOMPI_EVENTS_SECRET             | '' (cadena vacía en wompi-config)                     |
| WOMPI_INTEGRITY_SECRET          | '' (cadena vacía en wompi-config)                     |
| WOMPI_SANDBOX_PUBLIC_KEY        | '' (cadena vacía)                                     |
| WOMPI_SANDBOX_PRIVATE_KEY       | '' (cadena vacía)                                     |
| WOMPI_SANDBOX_INTEGRITY_SECRET  | '' (cadena vacía)                                     |
| WOMPI_SANDBOX_EVENTS_SECRET     | '' (cadena vacía)                                     |
| NEXTAUTH_URL                    | (Debe estar definida, sin valor por defecto)           |

**Notas:**
- Las variables de autenticación y claves críticas no tienen valor por defecto, por lo que deben estar definidas en el entorno.
- Las variables de WOMPI suelen tener como valor por defecto 'simulation', 'testing' o cadena vacía, según el archivo y contexto.
- EMAIL_FROM tiene un valor por defecto específico.

Esta lista se generó buscando todas las referencias a `process.env` en los archivos fuente del proyecto y analizando los valores asignados por defecto en el código.
