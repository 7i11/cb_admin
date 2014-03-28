$(function () {
        $('#site_traffic').highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Site traffic'
            },
            xAxis: {
                labels: {
                    formatter: function() {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
    
            plotOptions: {
                area: {
                    pointStart: 2008,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Visits',
                data: [1005, 1436, 2063, 3057, 4618, 6444]
            }
            ]
        });
    });
    