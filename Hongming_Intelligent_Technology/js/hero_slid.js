let currentIndex = 0;
const heroSections = document.querySelectorAll('.hero');

function switchHero() {
    heroSections[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % heroSections.length;
    heroSections[currentIndex].classList.add('active');
}

// 定时切换主视觉区
setInterval(switchHero, 5000);

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});