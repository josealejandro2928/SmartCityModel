$(function () {
   "use strict";
    var offset = 0;
    plotLine();
    plotPie();
    plotServicesBar();
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
    function plotLine() {
        let data = [[1, 50.0], [2, 50.0], [3, 50.0], [4, 50.0], [5, 50.0], [6, 50.0], [7, 50.0], [8, 50.0], [9, 0.0], [10, 62.0], [11, 63.2], [12, 64.4], [13, 65.6], [14, 66.8], [15, 68.0], [16, 69.2], [17, 70.4], [18, 0.0], [19, 72.8], [20, 74.0], ];
        let options = {
            series: {
                lines: {
                    show: true
                },
                points: {
                    show: true
                }
            },
            grid: {
                hoverable: true
            },
            yaxis: {
                min: 0,
                max: 100
            },
            colors: ["#009efb"],
            grid: {
                color: "#AFAFAF",
                hoverable: true,
                borderWidth: 0,
                backgroundColor: '#FFF'
            },
            tooltip: true,
            tooltipOpts: {
                content: "'%s' is %y.1 Mbps",
                shifts: {
                    x: -60,
                    y: 25
                }
            }
        };
        let plotObj = $.plot($("#flot-line-chart"), [{
            data: data,
            label: "bandWith",
        }], options);
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