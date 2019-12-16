### archiC - Management
Gerenciamento de projetos arquitetônicos. 

### Sobre o projeto final

#### Dicas
- estruturar os requisitos obrigatórios (o minimo) e desejáveis (opcionais, aquele "a mais");
- desenhar a API que você quer criar:
	- definir o formato da(s) collection(s) que terão no seu MongoDB;
	- definir as rotas de acordo com seus requisitos;
	- definir qual metodo HTTP usado pra acessar cada rota;
	- definir qual a resposta de cada rota, incluindo casos de erro (not found, erro de validação, login, etc);
	- definir qual o formato do request de cada rota (params? body?).

### Roteiro para iniciar a API
- Criar server.js, que nao muda muito;
- Criar o app.js, que vai conectar ao banco e ter as rotas;
- Criar a estrutura de pastas: routes, model, controller;
- Criar o database.js com o metodo de conectar no MongoDB;
- Criar os Schemas que voce definiu;
- Criar uma rota, criar o metodo do controller.
