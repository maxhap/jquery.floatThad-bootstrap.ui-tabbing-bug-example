// Angular code

var app = angular.module('app', ['ui.bootstrap']);

app.controller('basicController', function($scope) {
	var tmpData = { "col1" : "Column 1",
					"col2" : "Column 2",
					"col3" : "Column 3",
					"col4" : "Column 4",
					"col5" : "Column 5" }
	
	$scope.firstTableData = [tmpData]
	
	function init() {
	    // Set fixed headers state to default off
	    $scope.state = "Off";

        // Build example data
		for(var i =0; i < 30; i++) {						
			$scope.firstTableData.push(angular.copy(tmpData));			
		}
	};

	$scope.toggleFixedHeaders = function () {
	    if ($scope.state == "Off") {
	        $scope.state = "On";

	        setupFixedHeaders("#first-table");
	        setupFixedHeaders("#second-table");
	        setupFixedHeaders("#third-table");
	    }
	    else {
	        $scope.state = "Off";

	        destroyFixedHeaders("#first-table");
	        destroyFixedHeaders("#second-table");
	        destroyFixedHeaders("#third-table");
	    }
	};
	
	init();
});

// JQuery  code

function setupFixedHeaders(tableId) {
    var $table = $(tableId);
    $table.floatThead({
        responsiveContainer: function ($table) {
            return $table.closest(".table-responsive");
        }
    });
};

function destroyFixedHeaders(tableId) {
    var $table = $(tableId);
    $table.floatThead('destroy');
};