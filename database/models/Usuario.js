module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        tableName: 'usuario',
        freezeTableName: true
    }
    const Usuario = sequelize.define(alias, cols, config);


    return Usuario
};