$(function(){
	
	$('html, body').on('click', function(e){
		if(e.target == document.documentElement){	
			$('html, body').removeClass('open-sidebar');
		}
	});

	$('.js-open-sidebar').on('click',  function(){
		$('html').addClass('open-sidebar');
	});
});

//Google Charts

//Charts
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartProjects);
	function drawChartProjects() {
    	var data = google.visualization.arrayToDataTable([
          ['Task', 'Projects'],
          ['Uncompited', 40],
          ['Compited', 40],
          ['Hold', 40]
        ]);

        var options = {
          title: 'Projects Status',
          pieHole: 0.4,
          width: 278,
          height: 278,
          slices:{
          	0: {color: '#57b0eb'},
          	1: {color: '#fc8f3e'},
          	2: {color: '#293541'}
          },
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('drawChartProjects'));
        chart.draw(data, options);
    }

google.charts.setOnLoadCallback(drawChartRunning);
	function drawChartRunning() {
    var data = google.visualization.arrayToDataTable([
        ['Dates', 'Start Date', 'Days Completed', 'Days Remaining', { role: 'annotation' }],
        ['Airport Rail', 5, 5, 5, ''],
        ['Roy Hill', 5, 5, 5, ''],
        ['Moolarben', 5, 5, 5, '']
      ]);

      var options = {
        width: 278,
        height: 278,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true
      };

      var chart = new google.visualization.BarChart(document.getElementById('drawChartRunning'));
        chart.draw(data, options);
    }
