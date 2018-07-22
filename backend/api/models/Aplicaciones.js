/**
 * Aplicaciones.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{type:'string',required:true},
    version:{type:'number',required:true},
    date:{type:'string',required:true},
    weight:{type:'number',required:true},
    url:{type:'string',required:true},
    cart:{type:'boolean',required:true},
    img:{type:'string',required:true},
    price:{type:'number',required:true},
    so:{model:'api'}

  },

};

