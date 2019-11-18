# Processo Simples

## Projeto

<b>Processo Simples</b> é uma plataforma que tem como objetivo de facilitar o acesso de informações de processos para clientes de escritórios de advocacia, assim como fornecer uma maneira de ajudar advogados e escritórios a terem uma visão mais completa sobre o cliente.

## Front

O objetivo desse repositório é fornecer um espaço de trabalho para a equipe de desenvolvimento de front da plataforma.

## Tutoriais e Documentações relevantes

### Conexão Banco de dados (PostgreSQL)

- A melhor forma para se conectar e editar o banco de dados do projeto, é utilizando a ferramenta pgAdmin para fácil manutenção de databases gerenciados pelo PostgreSQL.

1. Primeiramente, acesse a URL abaixo para fazer o download e instalação do postgreSQL:

```
https://www.postgresql.org/download/
```

2. Posteriormente, acesse a URL abaixo para fazer o download e instalação do pgAdmin:

```
https://www.pgadmin.org/download/
```

*Para ambas as instalações, escolha o Sistema Operacional utilizado e faça o download da versão desejada. Para instalação basta seguir o passo a passo padrão do instalador.*

3. Para conexão no banco de dados, acesse o pgAdmin clique com o *botão direito* em `servers` e `crie um novo server`.

4. Para fazer a conexão com o banco os seguintes campos devem ser preenchidos da seguinte forma:

```
Na aba *General*:
Name: Nome a sua escolha para ser exibido na área de trabalho do pgAdmin

Na aba *Connection*:
Hostname/address: ec2-54-163-255-1.compute-1.amazonaws.com
Maintenance database: ddfmapjn4907hq
Username: giapbpbxjqtyrj
Port: 5432
Password: f827769b81cde6a49779881bf06a122d95e5dddeb4c86ba39738d60e56520011

Na aba *SSL*, marque *SSL mode* como *require*

Na aba *Avançado*, preencha o campo *DB Restriction* com o *Maintenance database*

```

Feito isso, clique em `Save`.

A conexão com o banco será realizada.

Para mais detalhes de conexão entre o pgAdmin e o BD acesse a URL abaixo:

```
https://medium.com/@vapurrmaid/getting-started-with-heroku-postgres-and-pgadmin-run-on-part-2-90d9499ed8fb
```
