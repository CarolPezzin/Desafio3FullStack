# Documentação da API

## BackEnd

1.  Visão geral do projeto:
    . NodeJS
    . Express
    . TypeScript
    . PostgreSQL
    . TypeORM
    . Yup
    A URL base da aplicação: http://localhost:3000/users

2.  Diagrama ER
    Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.
    ![Diagrama utilizado na API](/diagrama.png "Diagrama")

3.  Instalando dependências
    yarn
    cp .env.example .env (variáveis de ambiente)
    yarn typeorm migration:run -d src/data-source.ts (comando das migrations)

4.  EndPoints
    - Users
        . POST - /users
        . GET - /users
        . GET - /users/:user_id
        . PATCH - /users/:user_id
        . DELETE - /users/:user_id
    - Contacts
        . POST - /users/contacts
        . GET - /users/contacts
        . GET - /users/contacts/:contacts_id
        . PATCH - /users/contacts/:contacts_id
        . DELETE - /users/contacts/:contacts_id

    4.1 Criação de usuários:
        Request:
            POST /users
            Host: http:localhost:3000
            Authorization: None

        Corpo da Requisição:

            {
                "name": "",
                "email": "",
                "password": "",
                "fone": "",
                "isAdm": true/false
            }
        
        Resposta da Requisição:
        200 Created
            {
                "isActive": true,
                "name": "",
                "email": "",
                "fone": "",
                "isAdm": false,
                "id": "18ed1f85-ed3e-4642-a658-fa766afd30f2",
                "createdAt": "2023-02-08T14:31:05.516Z",
                "updatedAt": "2023-02-08T14:31:05.516Z"
            }
        
    4.2 Listando Usuários
        /users
        Request:
            GET /users
            Host: http:localhost:3000
            Authorization: None
        Response:
        200 OK
        [
            {
                "isActive": false,
                "id": "4add46c7-0330-4e7a-b07c-61a61777512e",
                "name": "",
                "email": "",
                "fone": "",
                "isAdm": true,
                "createdAt": "2023-02-01T15:26:05.231Z",
                "updatedAt": "2023-02-01T16:56:58.002Z"
            },
            {
                "isActive": true,
                "id": "6a5fc513-7186-406b-b112-dbfeb7bbf7d1",
                "name": "",
                "email": "",
                "fone": "",
                "isAdm": false,
                "createdAt": "2023-02-02T14:53:05.416Z",
                "updatedAt": "2023-02-02T14:53:05.416Z"
            }
        ]
    4.3 Atualização de usuarios por ID apenas ADM
        /users/:user_id
        PATCH /users/user_id
        Host: http:localhost:3000
        Authorization: Sim
        Request:
            {
                "name": "",
                "email": "",
                "password": "",
                "fone": ""
            }
        Response:
        200 OK
            {
                "isActive": true,
                "id": "1f348479-d674-41a2-ad82-bab5795ea36c",
                "name": "NomeAlterado",
                "email": "",
                "password": "Password Alterado",
                "fone": "",
                "isAdm": false,
                "createdAt": "2023-02-01T15:27:03.212Z",
                "updatedAt": "2023-02-07T14:26:59.242Z"
            }   
    4.4 Delete de usuarios por ID apenas ADM - usuário irá sofrer um soft delete permanecendo no bd não mais ativo.
        /users/:user_id
        DELETE /users/user_id
        Host: http:localhost:3000
        Authorization: Sim
        Request:
        Response:
        204 No Content


