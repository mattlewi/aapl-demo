module.exports = {
  template: require('./grid.html'),
  controller: GridController
};


function GridController($scope, $log, priceService) {
	$scope.gridsterOptions = {
		margins: [10, 10],
		draggable: {
			handle: 'div'
		},
		resizable: false,
		floating: false,
		swapping: true
	};

	$scope.items = {
		widgets: [{
			col: 0,
			row: 0
		}, {
			col: 1,
			row: 0
		}]
	};
}