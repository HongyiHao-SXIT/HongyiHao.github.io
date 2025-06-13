var chartDom = document.getElementById('skillsChart');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: { trigger: 'item', triggerOn: 'mousemove' },
    series: [
        {
            type: 'tree',
            data: [
                {
                    name: 'Hongming Intelligent Tech Team',
                    children: [
                        {
                            name: 'Mechanical Design',
                            children: [
                                { name: 'CAD Modeling' },
                                { name: '3D Printing' },
                                { name: 'Structural Analysis' }
                            ]
                        },
                        {
                            name: 'Embedded Systems',
                            children: [
                                { name: 'MCU Programming' },
                                { name: 'Sensor Integration' },
                                { name: 'Motor Control' }
                            ]
                        },
                        {
                            name: 'Computer Vision',
                            children: [
                                { name: 'Image Processing' },
                                { name: 'Object Detection' }
                            ]
                        },
                        {
                            name: 'Software Development',
                            children: [
                                { name: 'Web Development' },
                                { name: 'Mobile Development' },
                                { name: 'AI Algorithms' }
                            ]
                        }
                    ]
                }
            ],
            top: '5%',
            left: '20%',
            bottom: '5%',
            right: '20%',
            symbolSize: 10,
            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 14
            },
            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },
            expandAndCollapse: true,
            initialTreeDepth: 2,
            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
};

myChart.setOption(option);
