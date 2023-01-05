const db = require("../../database/models/");
const Op = db.Sequelize.Op;
const path = require("path");
const Usuario = db.Usuario;
const Noticias = db.Noticias;

let mainController = {
    main: (req, res) => {
                res.render('index', {
                   
                  
                });


    },

}

module.exports = mainController;