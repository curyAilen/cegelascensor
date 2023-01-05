module.exports = (sequelize, dataTypes) => {
    let alias = 'Noticias';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        subtitulo: {
            type: dataTypes.STRING,
            allowNull: true
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false
        }


    };
    let config = {
        timestamps: false,
        tableName: 'noticias',
        freezeTableName: true
    }
    const Noticias = sequelize.define(alias, cols, config);



    return Noticias
};