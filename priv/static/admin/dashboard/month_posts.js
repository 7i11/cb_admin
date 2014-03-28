$(function () {
        $('#month_posts').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Posts per month'
            },
            xAxis: {
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ]
            },
            series: [{
                name: 'Year 2013',
                data: [49, 71, 106, 129, 144, 176, 135, 148, 216, 194, 95, 54]
    
            }]
        });
    });