module.exports = {
  template: require('./price.html'),
  controller: PriceHistoryController
};


function PriceHistoryController() {
	this.hello = 'Hello Apple!';

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
			row: 0,
			sizeY: 1,
			sizeX: 1,
			name: "Table Data"
		}, {
			col: 1,
			row: 0,
			sizeY: 1,
			sizeX: 1,
			name: "Chart Data"
		}]
	};
}