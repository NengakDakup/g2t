import react from 'react';

export default function GeoChart(){
    function drawMap(){
        const {google} = window;
        google.charts.load('current', {
            'packages':['geochart'],
          });
          google.charts.setOnLoadCallback(drawRegionsMap);
    
          function drawRegionsMap() {
            var data = google.visualization.arrayToDataTable([
              ['Country', 'Popularity'],
              ['Germany', 200],
              ['United States', 300],
              ['Brazil', 400],
              ['Canada', 500],
              ['France', 600],
              ['RU', 200],
              ['NG', 1000]
            ]);
    
            var options = {};
    
            var chart = new google.visualization.GeoChart(document.getElementById('canvas'));
    
            chart.draw(data, options);
          }
    
    }
    return (
        
        <div id="canvas" style={{width: '100%', height: 500}}>chart{drawMap()}</div>
    )
}