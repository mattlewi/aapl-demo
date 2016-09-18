module.exports = {
  template: require('./table.html'),
  controller: TableController
};

function TableController($scope, priceService, $log) {
  var priceData;
  $scope.message = "Loading Table Data";

  priceService.getPrices().then(
    function(data){
    	priceData = data.data.query.results.quote;//.query.results;
    	$scope.tableData = priceData;
    	$scope.message = ""; //replace with hideable spinner
   		//$log.info(priceData);
    },
    function(error){
      $scope.tableData - "Error: " + error;
    }
  );


}