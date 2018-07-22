/**
 * Api.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string', required: true },
    api: { type: 'string', required: true },
    date: { type: 'string', required:true },
    weight: { type: 'number',required:true },
    installed:{type:'boolean',required:true},
    img:{type:'string',required:true},

    apps:{collection:'aplicaciones',via:'so'}

  },

};

