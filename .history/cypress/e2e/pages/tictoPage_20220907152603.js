const msgInvalidas = require("../../fixtures/msgInvalidas.json");
const msgSucesso = require("../../fixtures/msgSucesso.json");
const nome = require("../../fixtures/nome.json");
const email = require("../../fixtures/email.json");
const el = {
	url: "",
	body: "body",
	formulario: () => cy.get('h1:contains("Formulário")', { timeout: 10000 }),
	name: "#name",
	email: "#email",
	senha: "#password",
	btnCadastrar: "form > .btn",
	msgErro: ".form-text",
	msgSucesso: "alert alert-success",
	nomeJson: "",
	emailJson: "",
	GRID: "tr .text-truncate",
	btnGRID: ".btn-group > .btn",
	linhaGRID: '[scope="row"]',
	emailEdit: "#e_email",
	nomeEdit: "#e_name",
};
class tictoPage {
	validandoPaginaCarregada() {
		cy.visit("");
		Cypress.env(el.url);
		cy.log(msgInvalidas.teste);
		cy.get(el.body, { timeout: 10000 })
			.should("be.visible")
			.log("Corpo da página carregado");
		// el.formulario.should("be.visible").log("Formulário da página carregado");
	}

	preencherNome(nome) {
		cy.get(el.name).type(nome);
		el.nomeJson = nome;
		cy.nome(nome);
	}
	preencherEmail(email) {
		cy.get(el.email).type(email);
		el.emailJson = email;
		cy.email(email);
	}
	preencherSenha(senha) {
		if (senha == "senha com mais de 255 caracteres") {
			senha =
				"Maecenas ipsum velit, consectetuer eu, lobortis ut, dictum at, dui. In rutrum. Sed ac dolor sit amet purus malesuada congue. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Suspendisse sagittis ultrices augue. Mauris metus. Nunc dapibus tortor vel mi dapibus sollicitudin. Etiam posuere lacus quis dolor. Praesent id justo in neque elementum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Fusce suscipit libero eget elit. Praesent vitae arcu tempor neque lacinia pretium. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisque luctus velit. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Proin mattis lacinia justo. Vestibulum facilisis auctor urna. Aliquam in lorem sit amet leo accumsan lacinia. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Phasellus et lorem id felis nonummy placerat. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Aenean vel massa quis mauris vehicula lacinia. Quisque tincidunt scelerisque libero. Maecenas libero. Etiam dictum tincidunt diam. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Suspendisse nisl. Sed convallis magna eu sem. Cras pede libero, dapibus nec, pretium sit amet, tempor quis, urna.";

			senha +=
				" Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa.";
		}
		cy.get(el.senha).type(senha, { timeout: 50000 });
	}
	btnCadastrar() {
		cy.get(el.btnCadastrar).click();
	}
	btnExcluir() {
		cy.get(el.GRID).contains(nome.nome).parent().find(el.btnGRID).click();
		cy.get(el.GRID)
			.contains(nome.nome)
			.parent()
			.find(el.linhaGRID)
			.invoke("text")
			.then(($id) => {
				cy.get(`[href="#modalDelete${$id}"]`).click();
				cy.get(`#modalDelete${$id} .btn-danger`).click();
			});
	}
	validarMensagensErro(nome, email, senha) {
		switch (nome) {
			case "nome invalido":
				cy.get(el.msgErro)
					.contains(msgInvalidas.nomeInvalido)
					.should("be.visible");
				break;
			case "nome obrigatorio":
				cy.get(el.msgErro)
					.contains(msgInvalidas.nomeCampoObrigatorio)
					.should("be.visible");
				break;
			default:
				break;
		}
		switch (email) {
			case "email obrigatorio":
				cy.get(el.msgErro)
					.contains(msgInvalidas.emailCampoObrigatorio)
					.should("be.visible");
				break;
			default:
				break;
		}
		switch (senha) {
			case "senha obrigatoria":
				cy.get(el.msgErro)
					.contains(msgInvalidas.senhaCampoObrigatorio)
					.should("be.visible");
				cy.log(
					"Os valores a digitados não estão disponíveis no banco de dados"
				);

				break;
			case "senha com mais de 255 caracteres":
				cy.get(el.msgErro)
					.contains(msgInvalidas.senhaComMaisDe255Caracteres)
					.should("be.visible");
				cy.log(
					"Os valores a digitados não estão disponíveis no banco de dados"
				);

				break;
			case "senha com menos de 8 caracteres":
				cy.get(el.msgErro)
					.contains(msgInvalidas.senhaComMenosDe8Caracteres)
					.should("be.visible");
				cy.log(
					"Os valores a digitados não estão disponíveis no banco de dados"
				);

				break;
			default:
				cy.log(
					"Os valores a digitados não estão disponíveis no banco de dados"
				);
				break;
		}
	}
	nomeAlterado(nomeAlterado) {
		this.alterados(el.nomeEdit, nomeAlterado);
		cy.nome(nomeAlterado);
		cy.nome(nomeAlterado)
	}
	alterados(seletor, nomeAlterado) {
		cy.get(el.GRID)
			.contains(nome.nome)
			.parent()
			.find(el.linhaGRID)
			.invoke("text")
			.then(($id) => {
				cy.get(`${seletor}${$id}`).clear().type(nomeAlterado);
			});
	}
	emailAlterado(emailAlterado) {
		this.alterados(el.emailEdit, emailAlterado);
		cy.email(emailAlterado)
	}
	btnSalvar() {
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false
		})
		cy.get(el.GRID)
			.contains(nome.nome)
			.parent()
			.find(el.linhaGRID)
			.invoke("text")
			.then(($id) => {
					cy.get(`button[form="edit${$id}"]`).click();
			});
		cy.wait(2000);
	}
	validarMensagem(msg) {
		switch (msg) {
			case "Usuário cadastrado com sucesso.":
				cy.contains(msgSucesso.cadastroSucesso).should("be.visible");

				break;
			case "Usuário removido com sucesso.":
				cy.contains(msgSucesso.excluidoSucesso).should("be.visible");
				break;
			case "Usuário salvo com sucesso.":
				cy.contains(msgSucesso.alteradoSucesso).should("be.visible");
			default:
				break;
		}
	}
	adicionarUsuarioAoJson() {}
	validarUsuarioCadastrado() {
		cy.get(el.GRID)
			.contains(nome.nome)
			.parent()
			.find(el.linhaGRID)
			.invoke("text")
			.then(($id) => {
				cy.log(`Usuário cadastrado com o ID: ${$id}`);
			});

		// cy.get(el.GRID).contains(usuario.nome).parent().find(el.btnGRID).click();
	}
	validarValoresInseridosJSONalterados(){
		var texto ;
		cy.fixture('nomeNovo').then((logo) => {
			cy.get(el.GRID)
			.contains(logo.nome)
			.parent()
			.find(el.linhaGRID)
			
		  })
		  
		
	}
	validarValoresInseridosJSON() {
		cy.wait(2000);
		cy.get(el.GRID)
			.contains(el.nomeJson)
			.parent()
			.find(el.linhaGRID)
			.invoke("text")
			.then(($id) => {
				cy.log(`Estamos trabalhando com esse Id ${$id}`);
				cy.contains($id).parent().contains(el.nomeJson).should("be.visible");
				cy.contains($id).parent().contains(el.emailJson).should("be.visible");
				cy.log("Dados cadastrados e validados com sucesso.");
			});
	}
	validarUsuarioExcluido() {
		cy.fixture("nome").then((nome) => {
			cy.contains(nome.nome).should("not.exist");
		});
	}
	btnAlterar() {
		cy.get(el.GRID).contains(nome.nome).parent().find(el.btnGRID).click();
		cy.get(el.GRID)
			.contains(nome.nome)
			.parent()
			.find(el.linhaGRID)
			.invoke("text")
			.then(($id) => {
				cy.get(`[href="#modalEdit${$id}"]`).click();
			});
	}
}
export default new tictoPage();
