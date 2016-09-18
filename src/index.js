var angular = require('angular');
require('angular-gridster');
require('highcharts-ng');
//require('highcharts');
//var jquery.resize = require('jquery.resize');

var grid = require('./app/grid/grid');
var table = require('./app/table/table');
var chart = require('./app/chart/chart');

require('./index.styl');

var app = angular.module('priceApp', ['gridster', 'highcharts-ng']);

 
app.controller('mainCtrl', function ($scope) {
	$scope.datum = 'here i am';
 });

app.service('priceService', function ($http, $log){
	//SETUP RESOURCE CACHE!!!!
	this.getPrices = function() {
		$log.info("in priceService");
        return $http({
 			method: 'GET',
  			url: 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222012-09-11%22%20and%20endDate%20=%20%222014-02-11%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback='
  			//url: 'https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?'
		});
	};
 });

 app.component('grid', grid);
 app.component('tableContent', table);
 app.component('chartContent', chart);



