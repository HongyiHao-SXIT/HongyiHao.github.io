function initECharts(myChart) {
    var option = {
        graphic: {
            elements: [
                {
                    type: 'text',
                    left: 'center',
                    top: 'center',
                    style: {
                        text: 'HongMing Fur_Technology',
                        fontSize: 60,
                        fontWeight: 'bold',
                        lineDash: [0, 200],
                        lineDashOffset: 0,
                        fill: 'transparent',
                        stroke: '#000',
                        lineWidth: 1
                    },
                    keyframeAnimation: {
                        duration: 3000,
                        loop: false,
                        keyframes: [
                            {
                                percent: 0.7,
                                style: {
                                    fill: 'transparent',
                                    lineDashOffset: 200,
                                    lineDash: [200, 0]
                                }
                            },
                            {
                                percent: 0.8,
                                style: {
                                    fill: 'transparent'
                                }
                            },
                            {
                                percent: 1,
                                style: {
                                    fill: 'black'
                                }
                            }
                        ]
                    }
                }
            ]
        }
    };

    myChart.setOption(option);

    myChart.on('finished', function () {
        const mainContainer = document.getElementById('charts');
        mainContainer.classList.add('fade-out');
        setTimeout(() => {
            mainContainer.style.display = 'none';
        }, 1500);
    });
}

window.onload = function() {
    var myChart = echarts.init(document.getElementById('charts'));
    initECharts(myChart);
};