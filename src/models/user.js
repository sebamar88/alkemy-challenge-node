const { model } = require('mongoose');
const { DataTypes } = require('sequelize');
const sequelize = require('../loaders/sequelize')

const User = sequelize.define('User', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true   
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false    
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: true    
  },
  enable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true    
  },
  role: {
      type: DataTypes.ENUM({
        values: ['USER_ROLE', 'ADMIN_ROLE']
      }),
      allowNull: false,
      defaultValue: 'USER_ROLE'
  }
}, {

});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;