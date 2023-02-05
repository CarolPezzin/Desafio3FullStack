# Desafio3FullStack

## BackEnd

1.  Visão geral do projeto:
    . NodeJS
    . Express
    . TypeScript
    . PostgreSQL
    . TypeORM
    . Yup
    A URL base da aplicação: http://suaapi.com/v1

2.  Diagrama ER
    Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.
    Table user {
    id int [pk]
    name varchar
    email email
    password integer
    fone varchar
    is_Active boolean
    is_adm boolean
    created_at timestamp
    }

        Table contatos {
            id int [pk]
            name varchar
            email varchar
            fone varchar
            created_at timestamp
            user_id int [ref: > user.id]
        }

3.  Instalando dependências
    yarn
    cp .env.example .env (variáveis de ambiente)
    yarn typeorm migration:run -d src/data-source.ts (comando das migrations)

4.  EndPoints
    Users
    POST - /users
    GET - /users
    GET - /users/:user_id
    PATCH - /users/:user_id
    DELETE - /users/:user_id
    Contacts
    POST - /users/contacts
    GET - /users/contacts
    GET - /users/contacts/:contacts_id
    PATCH - /users/contacts/:contacts_id
    DELETE - /users/contacts/:contacts_id
