module.exports = {
  template: require('./table.html'),
  controller: TableController
};


function TableController($scope) {
	this.hello = 'Hello Apple!';
}