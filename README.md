Prezados,

Conforme solicitado, nesse git está o projeto de automação do site: https://qa-test.ticto.io/, cujo foram cobertas todas as instruções, da n°1 até a n°7, como também solicitado, o  relatório em vídeo(.mp4) e em HTML(optei por esse formato, pois ele descreve todas as funcionalidades com o timing de cada uma), segue uma imagem do relatório:  ![image](https://user-images.githubusercontent.com/79025625/188962256-f2a44cfb-2908-42f0-8728-683398e16952.png)

Foi utilizada a versão 10.7 do Cypress com cucumber, que gerou bugs que comentarei durante a próxima etapa, mas esses bugs são do próprio sistema, já reportei para os criados da biblioteca do cypress-cucumber-preprocessor e para o cypress.io.

Segue abaixo um tutorial para execução e instalaçã do Cypress:

Necessário ter o node.js instalado e com as variáveis de ambiente previamente configuradas.

Caso Necessário Instalar o cypress -> npm install cypress -D

Caso já possua o Cypress -> npm install

Execução -> npx cypress open


Para Rodar o Relatório de testes:
-> npx cypress run 

Para Rodar o Relatório de Testes Personalizado:
Primeiro executar: -> npx cypress run
após sua execução: -> npm run cypress:run
