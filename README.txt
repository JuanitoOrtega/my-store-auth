# Para iniciar un proyecto con Express es mejor iniciar un package.json con:
npm init -y

# Inicializamos nuestro repositorio
git init

# -D para modo de desarrollo
npm install nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

# Ejecutamos nuestro servidor en modo desarrollo
npm run dev

# Servidor en modo producción
npm run start

# Instalamos express
npm install express

# Instalamos datos faker
npm install faker -D

# Instalamos el paquete
npm install @hapi/boom

# Instalo librería para validar datos que me está enviando el cliente
npm install joi

# Para solucionar el problema de CORS instalamos la siguiente librería
npm install cors

# Heroku
heroku login
heroku create

# Ejecutamos nuestro proyecto localmente
heroku local web

# Push al repositorio de heroku
git push heroku master

/////////// Git
# Ver remoto
git remote -v

# Eliminar la referencia remota actual con
git remote rm Origin

# Agrega el nuevo control remoto
git remote add Origin <URL to new heroku app>

////////// docker //////////
# Levantamos nuestro contenedor
docker-compose up -d postgres

# Dar de baja un contenedor
docker-compose down

# Conectarnos al shell del contenedor
docker-compose exec postgres bash

# Para conectarnos a la base de datos
psql -h localhost -d my-store -U jortega

# Ver logs de un servicio
docker-compose logs -f postgres

# Salir de la base de datos
\q

# Levantamos el servicio de pgadmin
docker-compose up -d pgadmin

# Crear tabla
CREATE TABLE tasks (
	id serial PRIMARY KEY,
	title VARCHAR (255) NOT NULL,
	completed boolean DEFAULT false
);

# Instalamos pg
npm install pg

# Instalamos paquete dotenv
npm install dotenv

# Instalamos sequelize
npm install --save sequelize
npm install --save pg-hstore

//////////// DOCKER COMPOSE ////////////
# Levantamos un nuevo servicio
docker-compose up -d mysql

# Instalamos paquete para conectarse a mysql
npm install --save mysql2

# Para poder hacer migraciones instalamos el siguiente paquete en modo desarrollo
npm install sequelize-cli --save-dev

# Ejecutamos una migración
npm run migrations:generate create-user

npm run migrations:run

# Para generar una nueva migración
npm run migrations:generate add-role

# Volvemos a ejecutar la migración
npm run migrations:run

# Creamos el archivo de migración
npm run migrations:generate create-customers

# Levantamos los contenedores, modo silencioso
docker-compose up -d

# Ejecutamos la migración
npm run migrations:run

# Creamos un nuevo archivo de migración para corregir relación uno a uno
npm run migrations:generate change-user-id

# Volvemos a inyectar la migración
npm run migrations:run

# Si hay problemas al hacer la migración, este comando brinda más información:
sequelize-cli db:migrate --debug

# Creamos un archivo de migración para productos
npm run migrations:generate products

# Volvemos a inyectar la migración
npm run migrations:run

////////// RELACIONES /////////////
Customer 1:1 User
Product N:1 Category
Products N:N Orders

///////////////////////////////////

# Creamos una nueva migración
npm run migrations:generate order

# Volvemos a inyectar la migración
npm run migrations:run

# Creamos una nueva migración
npm run migrations:generate order-product

# Volvemos a inyectar la migración
npm run migrations:run

:::::::::::::::::::::::::::::::::::::
|				HEROKU				|
:::::::::::::::::::::::::::::::::::::

# Ver repositorios remotos conectados a nuestro repo local
git remote -v

# Eliminamos repositorio remoto
git remote rm <name>

# Añadir repositorio remoto
heroku git:remote -a nodejs-pg

# Añadimos un servicio adicional de heroku
heroku addons:create heroku-postgresql:hobby-dev

# Ver documentación
heroku addons:docs heroku-postgresql

# Ver estado de pg
heroku pg:info

# Creamos un nueva rama
git checkout -b production

# Deploy a heroku
git push heroku production:master

# Corremos la migración en el servidor de heroku
heroku run npm run migrations:run

# Eliminamos migraciones existentes
heroku run npm run migrations:delete

:::::::::::::::::::::::::::::::::::::
|			NUEVO PROYECTO			|
:::::::::::::::::::::::::::::::::::::
# Instalamos dependencias
npm install

# Instalamos librería para encriptado
npm install bcrypt

# Instalamos el paquete passport para el login
npm install passport passport-local

# Instalamos librería JWT
npm install jsonwebtoken