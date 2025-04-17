document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('join-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const position = document.getElementById('position').value;
        const message = document.getElementById('message').value;
        const resume = document.getElementById('resume').files[0];

        // 这里可以添加实际的表单数据提交逻辑，例如使用 fetch API 发送到后端
        console.log('姓名:', name);
        console.log('邮箱:', email);
        console.log('电话:', phone);
        console.log('应聘职位:', position);
        console.log('留言:', message);
        console.log('简历:', resume);

        // 清空表单
        form.reset();

        // 可以添加提示信息，告知用户表单提交成功
        alert('申请已提交，感谢您的参与！');
    });
});