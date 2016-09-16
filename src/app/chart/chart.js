module.exports = {
  templateUrl: 'app/chart/chart.html',
  controller: ChartController
};

function ChartController($scope, $http) {

	$scope.myStuff = 'STUFF';

	$http({
 	method: 'GET',
  	url: 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222012-09-11%22%20and%20endDate%20=%20%222014-02-11%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback='
	}).then(function successCallback(response) {
		$scope.ticker = response.data;
  	}, function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
  	});


}
/*
angular.module('priceApp').component('chartContent', {
  templateUrl: 'app/chart/chart.html.html',
  controller: ChartController
});
*/






