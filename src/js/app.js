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

//Projects
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
//Running
google.charts.setOnLoadCallback(drawChartRunning);
	function drawChartRunning() {
    var data = google.visualization.arrayToDataTable([
        ['Airports', 'Start Date', 'Days Completed', 'Days Remaining', { role: 'annotation' }],
        ['Airport Rail', 5, 5, 5, ''],
        ['Roy Hill', 5, 5, 5, ''],
        ['Moolarben', 5, 5, 5, '']
      ]);

      var options = {
        width: 278,
        height: 278,
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
        colors: ['#57b0eb', '#fc8f3e', '#293541']
      };

      var chart = new google.visualization.BarChart(document.getElementById('drawChartRunning'));
        chart.draw(data, options);
    }
//Invoice status
google.charts.setOnLoadCallback(drawChartInvoice);
  function drawChartInvoice() {
    var data = google.visualization.arrayToDataTable([
          ['Mês', 'Days Completed', 'Days Remaining'],
          ['Junho',  1000,      400],
          ['Julho',  1170,      460],
          ['Agosto',  660,      1120]
        ]);

      var options = {
          curveType: 'function',
          legend: { position: 'top' },
          width: 278,
          height: 278,
           colors: ['#57b0eb', '#fc8f3e']
        };

      var chart = new google.visualization.LineChart(document.getElementById('drawChartInvoice'));
        chart.draw(data, options);
    }


//Animated Number    
var a = 0;
$(window).scroll(function() {

  var oTop = $('.item').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 5000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }
});