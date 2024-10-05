// Lưu trữ video trong localStorage
let videoList = JSON.parse(localStorage.getItem('videoList')) || [];

// Hàm hiển thị danh sách video
function displayVideos() {
    const videoListElement = document.getElementById('videoList');
    videoListElement.innerHTML = '';
    videoList.forEach((video, index) => {
        const li = document.createElement('li');
        li.textContent = video;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.onclick = () => deleteVideo(index);
        li.appendChild(deleteButton);
        videoListElement.appendChild(li);
    });
}

// Hàm thêm video
document.getElementById('addVideoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const videoUrl = document.getElementById('videoUrl').value;
    videoList.push(videoUrl);
    localStorage.setItem('videoList', JSON.stringify(videoList));
    displayVideos();
    document.getElementById('addVideoForm').reset();
});

// Hàm xóa video
function deleteVideo(index) {
    videoList.splice(index, 1);
    localStorage.setItem('videoList', JSON.stringify(videoList));
    displayVideos();
}

// Hiển thị video khi trang được tải
displayVideos();
