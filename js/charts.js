google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawVisualization);
google.setOnLoadCallback(drawVisualization2);

function drawVisualization() {

  var data = google.visualization.arrayToDataTable([
    ['Bonus',	'Weight 0.01',	'Weight 0.1',	'Weight 1',	'Weight 2',	'Weight 5',	'Weight 10'],
    ['0',		0.1,			0.6,			5.5,		11.0,		27.6,		55.2],
    ['10',		1.5,			1.9,        	6.6,        11.8,       26.0,      	52.1],
    ['50', 		4.6,      		5.0,        	9.1,		13.6,		22.6,      	45.2],
    ['100',		6.3,			6.7,			10.4,		14.5,		20.7,		41.4],
    ['100,000',	10.0,			10.3,			13.3,		16.6,		16.6,		33.1]
  ]);
  
  var options = {
    title : 'Default Selection Probability by Weight at Various Bonus Values',
    vAxis: {title: "Selection Probability (%)"},
    hAxis: {title: "Bonus Value"},
    seriesType: "bars",
  };
  
  var chart = new google.visualization.ComboChart(document.getElementById('chart1_div'));
  chart.draw(data, options);
  
}

function drawVisualization2() {

  var data = google.visualization.arrayToDataTable([
    ['Options',								'Weight 0.01',	'Weight 0.1',	'Weight 1',	'Weight 2',	'Weight 5',	'Weight 10'],
    ['Pivot: Mean\n Range: All',			4.6,			5.0,			9.1,		13.6,		22.6,		45.2],
    ['Pivot: Median\n Range: All',			3.4,			3.8,        	8.3,        9.9,        24.9,      	49.7],
    ['Pivot: Mean\n Range: Below Pivot', 	5.0,      		5.5,        	10.0,		14.9,		19.8,      	44.7],
    ['Pivot: Median\n Range: Below Pivot',	3.7,			4.2,			9.2,		7.4,		23.9,		51.5],
    ['Pivot: Mean\n Range: Above Pivot',		0.1,			0.6,			6.2,		12.4,		24.8,		55.9],
    ['Pivot: Median\n Range: Above Pivot',	0.1,			0.6,			6.0,		11.9,		25.8,		55.6]
  ]);
  
  var options = {
    title : 'Selection Probability by Option at Bonus = 50',
    vAxis: {title: "Selection Probability (%)"},
    hAxis: {title: "Selector Options"},
    seriesType: "bars",
  };
  
  var chart = new google.visualization.ComboChart(document.getElementById('chart2_div'));
  chart.draw(data, options);
  
}