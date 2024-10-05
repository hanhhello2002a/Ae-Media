function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const tabLinks = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    tabLinks.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function addContent() {
    const contentList = document.getElementById('content-list');
    const newContent = document.createElement('div');
    newContent.textContent = 'Nội dung mới được thêm!';
    contentList.appendChild(newContent);
}
