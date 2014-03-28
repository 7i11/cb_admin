

$(function () {
        $('#site_traffic_browser').highcharts({
            title: {
                text: 'Site traffic per brwoser',
                x: -20 //center
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Visits'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ' Visits'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Firefox',
                data: [7, 6, 9, 14, 18, 21, 25, 26, 23, 18, 13, 9]
            }, {
                name: 'Chrome',
                data: [0, 0, 5, 11, 17, 22, 24, 24, 20, 14, 8, 2]
            }, {
                name: 'Opera',
                data: [0, 0, 3, 8, 13, 17, 18, 17, 14, 9, 3, 1]
            }, {
                name: 'Internet Explorer',
                data: [3, 4, 5, 8, 11, 15, 17, 16, 14, 10, 6, 4]
            }]
        });
    });



