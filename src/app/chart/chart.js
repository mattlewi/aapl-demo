module.exports = {
  templateUrl: 'app/chart/chart.html',
  controller: ChartController
};

function ChartController($scope, priceService, $log) {
  //$scope.chartData = "Loading Chart Data";

 $scope.chartConfig = {
        options: {
            chart: {
                zoomType: 'x'
            },
            rangeSelector: {
                enabled: true
            },
            navigator: {
                enabled: true
            }
        },
        series: [],
        title: {
            text: 'AAPL Stock Price (Adjusted Close)'
        },
        useHighStocks: true,
        loading: false
    }

    getPrices();


  function getPrices() {
    $scope.chartConfig.loading = "Retrieving Data...";

    var priceArray = [];
    priceService.getPrices().then(
      function(data){
        var quotes = data.data.query.results.quote;
        for (var p=quotes.length-1; p>=0; p--) {
          priceArray.push([new Date(quotes[p].Date).valueOf(),Math.round(new Number(quotes[p].Adj_Close)*100)/100]); 
        }
        $scope.chartData = priceArray;
        renderChart(priceArray);
    },
    function(error){
      $scope.chartData - "Error: " + error;
    }
  );
  }

  function renderChart(priceData) {
    $scope.chartConfig.series.push({
      id: 'Adj Close',
      data: priceData
    });
    $scope.chartConfig.loading = false
  }
/*
  priceService.getPrices().then(
    function(data){
      $scope.chartData = data;
    },
    function(error){
      $scope.chartData - "Error: " + error;
    }
  );
*/
}