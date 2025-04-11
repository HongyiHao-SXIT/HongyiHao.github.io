export const orgData = {
    categories: [
        { name: '管理层' },
        { name: '技术部' },
        { name: '市场部' },
        { name: '产品部' },
        { name: '人力资源' }
    ],
    nodes: [
        { id: 0, name: 'CEO', category: 0, symbolSize: 50 },
        { id: 1, name: 'CTO', category: 0, symbolSize: 40 },
        { id: 2, name: 'CMO', category: 0, symbolSize: 40 },
        { id: 3, name: '技术主管', category: 1, symbolSize: 30 },
        { id: 4, name: '开发组长', category: 1, symbolSize: 25 },
        { id: 5, name: '前端团队', category: 1, symbolSize: 20 },
        { id: 6, name: '后端团队', category: 1, symbolSize: 20 },
        { id: 7, name: '市场经理', category: 2, symbolSize: 30 },
        { id: 8, name: '产品经理', category: 3, symbolSize: 30 },
        { id: 9, name: 'HR主管', category: 4, symbolSize: 30 }
    ],
    links: [
        { source: 0, target: 1, label: '汇报' },
        { source: 0, target: 2, label: '汇报' },
        { source: 1, target: 3, label: '管理' },
        { source: 3, target: 4, label: '管理' },
        { source: 4, target: 5, label: '管理' },
        { source: 4, target: 6, label: '管理' },
        { source: 2, target: 7, label: '管理' },
        { source: 0, target: 8, label: '管理' },
        { source: 0, target: 9, label: '管理' }
    ]
};

export const getChartOption = (data) => ({
    title: {
        text: '组织成员关系图',
        subtext: '公司组织架构关系展示',
        top: 'top',
        left: 'center'
    },
    tooltip: {
        formatter: params => {
            if (params.dataType === 'node') {
                return `${params.data.name} (${data.categories[params.data.category].name})`;
            } else {
                return `${data.nodes[params.data.source].name} → ${data.nodes[params.data.target].name}<br>关系: ${params.data.label}`;
            }
        }
    },
    legend: {
        data: data.categories.map(category => category.name),
        top: 50
    },
    series: [{
        type: 'graph',
        layout: 'force',
        data: data.nodes,
        links: data.links,
        categories: data.categories,
        roam: true,
        draggable: true,
        focusNodeAdjacency: true,
        label: {
            show: true,
            position: 'right',
            formatter: '{b}'
        },
        edgeLabel: {
            show: true,
            formatter: '{@label}'
        },
        lineStyle: {
            width: 2,
            curveness: 0.2
        },
        force: {
            repulsion: 200,
            edgeLength: 100,
            gravity: 0.1
        },
        emphasis: {
            label: {
                show: true
            },
            lineStyle: {
                width: 3
            }
        }
    }],
    color: ['#5470C6', '#91CC75', '#FAC858', '#EE6666', '#73C0DE']
});

// 图表渲染函数
export const renderOrgChart = (containerId = 'org-chart') => {
    // 动态加载echarts
    return import('echarts').then(echarts => {
        const chartDom = document.getElementById(containerId);
        if (!chartDom) return null;
        
        const