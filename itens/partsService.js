const express = require("express");
const Item = require('./parts');

module.exports = function (server) {

	const router = express.Router();

	router.route('/parts/:part_num')

		/* 1) Método: Criar Usuario (acessar em: POST http://localhost:8080/api/usuarios */
			.get(function(req, res) {
				console.log('req.params.part_num');
				//Função para Selecionar Por Id e verificar se há algum erro:
				Item.find({ 'part_num': req.params.part_num }, function(error, usuario) {
					if(error)
						res.send(error);
		 
					res.json(usuario);
				});
			});


	server.use('/api', router)

	//const itemService = require('../itens/itemService')
	//itemService.register(router, '/item')
}