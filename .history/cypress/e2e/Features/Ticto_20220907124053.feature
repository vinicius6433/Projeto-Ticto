#language: pt
Funcionalidade: Desafio Ticto

Contexto:
  Dado eu estou logado e com a pagina carregada

Cenario: Realizar teste de mensagens de erro: nome invalido, email e senha obrigatorios
  Dado que eu preencha os dados de nome "t", email " ",senha " "
  Quando acionar o botao de "Cadastrar"
  Entao valido as mensagens de erro "nome invalido", "email obrigatorio", "senha obrigatoria"

Cenario: Realizar teste de mensagens de erro: nome e email obrigatorios, senha com mais de 255 caracteres
  Dado que eu preencha os dados de nome " ", email " ",senha "senha com mais de 255 caracteres"
  Quando acionar o botao de "Cadastrar"
  Entao valido as mensagens de erro "nome obrigatorio", "email obrigatorio", "senha com mais de 255 caracteres"

Cenario: Realizar teste de mensagens de erro: nome e email obrigatorios, senha com menos de 8 caracteres
  Dado que eu preencha os dados de nome " ", email " ",senha "haha"
  Quando acionar o botao de "Cadastrar"
  Entao valido as mensagens de erro "nome obrigatorio", "email obrigatorio", "senha com menos de 8 caracteres"


Cenario: Realizar cadastro 
  Dado que eu preencha os dados de nome "Vinícius Moreira", email "vmoliveira2@ticto.io",senha "me-contrata"
  Quando acionar o botao de "Cadastrar"
  E valido a mensagem "Usuário cadastrado com sucesso."
  Entao valido os valores inseridos na GRID

@focus
Cenario: Excluir usuario cadastrado
  Dado que eu tenha um usuario cadastrado
  E acionar o botao de "Excluir"