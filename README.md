<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Instrucciones (DEV)

1. Clonar el proyecto.
2. Copiar el archivo `.env.template` y renombrarlo a `.env`.
3. Instalar las dependencias.
```
pnpm install
```
4. Levantar la imagen de la base de datos.
```
docker-compose up -d
```
5. Levantar el backend.
```
pnpm start
```
6. Acceder a la API.
```
http://localhost:3000/graphql
```

7. Ejecutar la __"mutation"__ executeSeed, para llenar la base de datos con información