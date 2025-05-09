// 导航栏滚动效果
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 页面元素进入视口时的动画效果
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .section-title, .team-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animate-fade-in');
        }
    });
};

// 初始化动画
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .animate-fade-in {
        animation: fadeIn 0.8s ease forwards;
    }
    
    .product-card, .section-title, .team-card {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// 表单提交处理
const form = document.getElementById('join-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 这里可以添加表单验证和提交逻辑
        alert('感谢您的申请！我们将尽快与您联系。');
        form.reset();
    });
}

// 创建高科技背景元素
const createTechElements = () => {
    const container = document.querySelector('body');
    const count = 15;
    
    for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.classList.add('tech-element');
        
        // 随机位置和大小
        const size = Math.random() * 100 + 50;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${x}vw`;
        element.style.top = `${y}vh`;
        
        // 随机动画
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 10;
        
        element.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        container.appendChild(element);
    }
};

// 页面加载完成后创建背景元素
window.addEventListener('load', createTechElements);