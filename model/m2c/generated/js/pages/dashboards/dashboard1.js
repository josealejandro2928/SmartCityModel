$(function () {
   "use strict";
    var offset = 0;
    plotLine();
    plotPie();
    plotServicesBar();
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
    function plotLine() {
       let labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ];
       let series = [[50.0, 50.0, 50.0, 50.0, 50.0, 50.0, 50.0, 50.0, 0.0, 62.0, 63.2, 64.4, 65.6, 66.8, 68.0, 69.2, 70.4, 0.0, 72.8, 74.0, ]];

        let options = {
            axisX: {
                showLabel: true,
                showGrid: true,
            },
            // Options for Y-Axis
            axisY: {
                showLabel: true,
                showGrid: true,
                type: undefined,
                scaleMinSpace: 20,
                onlyInteger: true
            },
            showLine: true,
            showPoint: true,
            showArea: true,
            lineSmooth: true,
            showGridBackground: false,
            low: 0,
            high: 100,
            fullWidth: false
        };
        let data = { labels, series };
        new Chartist.Line('.bandwith-line', data, options);
    }
    
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
                         
    
    function plotPie() {
        let classes = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', ];
        let frecCounting = {};
        classes.map(e => {
            if (e in frecCounting) {
                frecCounting[e]++;
            } else {
                frecCounting[e] = 1;
            }
        })

        let series = [];
        let labels = [];
        Object.keys(frecCounting).map((key) => {
            series.push(frecCounting[key]);
            labels.push(key);
        })
        var data = {
            series,
            labels
        };

        var options = {
            labelInterpolationFnc: function (value) {
                return value + " = " + Math.round((frecCounting[value] / data.series.reduce(sum)) * 100) + "%";
            }
        };
        var sum = function (a, b) { return a + b };
        new Chartist.Pie('.energy-class-pie', data, options);
    }
    
     
     function plotServicesBar() {
        let series = [50.0, 70.0, 40.0 ];
        
        let labels = ["web or mobile app", "public WiFi", "available E-payments"];

        let data = { series, labels }
        let options = {
            distributeSeries: true,
            low: 0,
            high: 100,
            axisY: {
                scaleMinSpace: 25,
            }
        };
        new Chartist.Bar('.services-bar-char', data, options);

    }
});