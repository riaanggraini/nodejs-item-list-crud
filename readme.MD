# Hapi Js Item list

## step to run
before the steps, make sure you have installed node in your local.

- make sure you are in the directory, by ``cd project name``.
- install the dependencies by``npm intall``.
- make a mySQL table, for example``item_list``.
- copy``.env.example`` and rename it into ``.env``, change value as needed.
- copy ``db/config/config.json.example`` and rename it into ``db/config/config.json``, and fill your db credentials based on environment.
- run db migration by following syntax ``npx sequelize-cli db:migrate ``
- run db seed by following syntax ``npx sequelize-cli db:seed:all``
- start the service by following syntax ``npm run dev``

## API list

```sh
GET {host}:{port}/api/items  #to get all item list
GET {host}:{port}/api/item/{id}  #to get all detail
POST {host}:{port}/api/item  #to instert new item
PUT {host}:{port}/api/item/{id}  #to update certain item
DELETE {host}:{port}/api/item/{id}  #to delete certain item
```

## Authentication

for add, update, and delete need bearer token for authentication, this step gonna explain how to get access-token:

- login by email and password using basic auth authentication, put your email as username and password as password, you can login by following api.
``POST {host}:{port}/api/auth``

- you will get the token on rhe response payload, which is you can use it as bearer token authorizarion for other endpoint authentication 


## Username and password

as we run the seeder in the step earlier, we can use:

```
username: admin@mail.com
password: password01
```

```
username: admin01@mail.com
password: password02
```

# testing

for the testing can be run by following syntax ``npm run test``,
note: make sure fill database credential for test environment
