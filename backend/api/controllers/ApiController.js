/**
 * ApiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
// const request= require('request')
module.exports = {
  padres:( (req,res) => {
  let padres = [
    {
      "id": 1,
      "nameSO": "Windows 10",
      "ApiSO": "64 bits",
      "dateSO": "2012-04-23T18:25:43.511Z",
      "weightSO":4.25,
      "Installed":true,
      "img":"http://as01.epimg.net/betech/imagenes/2018/03/26/portada/1522085018_906415_1522103733_noticia_normal.jpg",
      // "apps":[
      //   {
      //     "_id":"1",
      //     "nameApp":"Microsoft Office 2016",
      //     "urlApp":"www.microsoft.com",
      //     "dateLaunchApp":"2016",
      //     "price":150,
      //     "cart":false
      //   }
      //
      // ]
    },
    // {
    //   "_id": "2",
    //   "name": "Auto Expo",
    //   "description": "lorem ipsum",
    //   "date": "2012-04-23T18:25:43.511Z"
    // },
    // {
    //   "_id": "3",
    //   "name": "Auto Expo",
    //   "description": "lorem ipsum",
    //   "date": "2012-04-23T18:25:43.511Z"
    // },
    // {
    //   "_id": "4",
    //   "name": "Auto Expo",
    //   "description": "lorem ipsum",
    //   "date": "2012-04-23T18:25:43.511Z"
    // },
    // {
    //   "_id": "5",
    //   "name": "Auto Expo",
    //   "description": "lorem ipsum",
    //   "date": "2012-04-23T18:25:43.511Z"
    // },
    // {
    //   "_id": "6",
    //   "name": "Auto Expo",
    //   "description": "lorem ipsum",
    //   "date": "2012-04-23T18:25:43.511Z"
    // }
  ]
  res.json(padres)
}),
  hijos:( (req,res) => {
    let hijos = [
      {
        "_id": "1",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z",
        "url": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/mac_apps/itunes/ios11-app-store-3nav-icon.png"
      },
      {
        "_id": "2",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo Special",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(hijos)
  })



};

