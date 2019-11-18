# loja-rca
 Webshop system using React and node technology for testing at Rca

# Project!

The project follows the following idea:
- A aplicação deverá conter um login, onde os usuários se logam, os dados dos usuários poderão estar ﬁxos no servidor.
- Na seção de produtos existe uma lista de produtos, onde é possível adicionar ou remover produtos no carrinho.
- A aplicação deve conter também a funcionalidade de carrinho de compras, onde cada usuário deverá ter seu carrinho de compras salvo ao realizar qualquer interação com produto (adicionar ou remover).

### Install and Run

Run the codes below:
```console
npm install nodemon -g
npm install concurrently -g
cd client && npm install
cd server && npm install
```

To start project:
```console
npm run dev
```

You can acess client at:
http://localhost:3000/

You can acess server at:
http://localhost:5000/

To test login use:
- E-mail: t@t.com
- Password: 123

### To-do

- [x] [ server ] Listagem de produtos
- [x] [ server ] Adicionar e remover produtos do carrinho
- [x] [ server ] Login e Logout
- [x] [ app ] Implementação de layout
- [x] [ app ] Login e Logout
- [x] [ app ] Listagem de produtos
- [x] [ app ] Remover/Adicionar ao carrinho
