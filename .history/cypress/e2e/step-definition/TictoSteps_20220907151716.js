import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import tictoPage from "../pages/tictoPage"
Given(/^eu estou logado e com a pagina carregada$/, () => {
    tictoPage.validandoPaginaCarregada();
});  

 



Given(/^que eu preencha os dados de nome "([^"]*)", email "([^"]*)",senha "([^"]*)"$/, (nome,email,senha) => {
	tictoPage.preencherNome(nome)
    tictoPage.preencherEmail(email)
    tictoPage.preencherSenha(senha)
});



When(/^acionar o botao de cadastrar$/, () => {
	tictoPage.btnCadastrar()
});


When(/^acionar o botao de excluir$/, () => {
	tictoPage.btnExcluir()
});




Then(/^valido as mensagens de erro "([^"]*)", "([^"]*)", "([^"]*)"$/, (nome,email,senha) => {
	tictoPage.validarMensagensErro(nome,email,senha)
});


When(/^preencher os campos alterados com "([^"]*)" e "([^"]*)"$/, (nome,email) => {
	tictoPage.nomeAlterado(nome)
	tictoPage.emailAlterado(email)
	tictoPage.btnSalvar()

});

Then(/^valido a mensagem "([^"]*)"$/, (msg) => {
	tictoPage.validarMensagem(msg)
});


Given(/^que eu tenha um usuario cadastrado$/, () => {
	tictoPage.validarUsuarioCadastrado()
	
});

Then(/^valido os valores inseridos na GRID$/, () => {
	tictoPage.validarValoresInseridosJSON()
});
Then(/^valido os valores inseridos na GRID alterada$/, () => {
});


Then(/^valido se o usuario foi removido$/, () => {
	tictoPage.validarUsuarioExcluido()
});

Given(/^que eu acione o botao de Alterar$/, () => {
	tictoPage.btnAlterar()
});
