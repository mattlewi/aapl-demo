module.exports = {
  template: require('./grid.html'),
  controller: GridController
};


function GridController($scope, $log, priceService) {
/*
  priceService.getPrices().then(
    function(data){
      $scope.priceData = data;
      $log.info("got my priceData from grid.js");
    },
    function(error){
      $scope.priceData - "Error: " + error;
    }
  );
*/
	this.gridsterOptions = {
		margins: [20, 20],
		columns: 2,
		draggable: {
			handle: 'h3'
		}
	};

	this.items = {
		widgets: [{
			col: 0,
			row: 0
		}, {
			col: 1,
			row: 0
		}]
	};
}