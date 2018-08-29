const express = require("express");
const Item = require('./sets');

module.exports = function (server) {

	const router = express.Router();

	router.route('/sets/:set_num')

		/* 1) Método: Criar Usuario (acessar em: POST http://localhost:8080/api/usuarios */
			.get(function(req, res) {
				console.log(req.params.set_num);
				//Função para Selecionar Por Id e verificar se há algum erro:
				Item.find({ 'set_num': req.params.set_num }, function(error, usuario) {
					if(error)
						res.send(error);
		 
					res.json(usuario);
				});
			});


	server.use('/api', router)

	//const itemService = require('../itens/itemService')
	//itemService.register(router, '/item')
}