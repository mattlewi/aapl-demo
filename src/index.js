var angular = require('angular');
var gridster = require('angular-gridster');
//var jquery.resize = require('jquery.resize');

var grid = require('./app/grid/grid');
var table = require('./app/table/table');
var chart = require('./app/chart/chart');

require('./index.styl');

var app = angular.module('priceApp', ['gridster']);

app.controller('mainCtrl', function($scope) {
	$scope.datum = 'here i am';
});;

 app.component('grid', grid);
 app.component('tableContent', table);
 app.component('chartContent', chart);
