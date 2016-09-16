var angular = require('angular');
var gridster = require('angular-gridster');
//var jquery.resize = require('jquery.resize');

var price = require('./app/price/price');

require('./index.styl');

var app = 'app';
module.exports = app;

angular
  .module(app, ['gridster'])
  .component('app', price);
