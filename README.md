Diretrizes do desafio
===========================

Por favor organize, design, teste, faça a documentação e deploy do seu código da forma como se ele fosse para produção, depois nos envie um link do repositório no Github.

Tarefa (funcional)
---------------

1. Desenvolva um sistema de autenticação JWT.
2. Você deve construir uma CRUD de um catálogo de filmes. Todos os endpoints dessa CRUD só devem ser consumidos por um usuário autenticado.

Ferramentas requeridas e experiências
---------------

1. TypeScript - 1 ano
2. Nest.js - Aprendi durante o desenvolvimento deste projeto
3. TypeORM - 1 ano
4. Swagger - Nenhuma
5. Docker - Conhecimentos nível usuário
6. Redis - Nenhuma
7. PostgreSQL - 1 ano

Aspectos técnicos
---------------

A arquitetura deve ser composta de uma aplicação provendo uma API RESTful em JSON, utilize do Redis como seu cache.

OBS: Lembre-se de validar a informação tratada em cada endpoint.

Back-end
---------------

Engenharia de qualidade é saber utilizar da ferramenta certa para o trabalho certo, e seguir aprendendo constantemente sobre ela. Sabendo disso, sinta-se livre para mencionar no `README` quanto tempo de experiência você possui com cada uma delas, fazendo isso levaremos em consideração ao avaliar seu desafio. 

Faça o deploy!
---------------

Ao finalizar, faça o deploy no lugar que te for mais confortável (exemplo: Amazon EC2, Heroku, Netlify, Google AppEngine, etc)

Modo de execução
---------------

Na raíz do projeto, execute o comando para iniciar o container do postgres:
```
docker-compose up -d
```

Em seguida, execute o comando a seguir para iniciar o projeto:
```
npm run start
```

A partir da url: http://localhost:3000, é possível acessar as rotas de usuarios e filmes.

Exemplo de teste da API
---------------

Utilizando o postman, realize um POST na rota http://localhost:3000/users, da seguinte forma:
```json
{
	"name": "Vinicius",
	"email": "vinicius@gmail.com",
	"password": "123mudar"
}
```

Em seguida, realize o login através de um POST na rota http://localhost:3000/auth/login, passando um corpo em JSON:

```json
{
	"email": "vinicius@gmail.com",
	"password": "123mudar"
}
```

Recebendo o token de acesso e nos headers da seguinte forma:

> header: Authorization <br>
> value: Bearer <access_token>

Agora é possível utilizar a rota de filmes http://localhost:3000/movies.

Exemplo de POST:
```json
{
	"name": "A espera de um milagre"
}
```
Exemplo de GET:
```json
[
    {
        "id": 1,
		"name": "A espera de um milagre",
		"createdAt": "2023-11-27T04:38:31.553Z",
		"updatedAt": "2023-11-27T04:38:31.553Z"
    }
]
```

