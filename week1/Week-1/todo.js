//1. Lấy các phân tử Html
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('danh-sach-cong-viec');

//2. Gắn sự kiện cho nut thêm
addButton.addEventListener('click', addTask);

// Cho phép thêm công việc khi nhân enter
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Hàm thêm mới công việc
function addTask() {
    // Lấy giá trị từ ô input và xóa khoảng ở đầu và cuối câu
    const taskText = taskInput.value.trim();
    
    // Kiểm tra nếu ô input không rỗng
    if (taskText !=='') {
        //Tạo thẻ <li> mới
        const listItem=document.createElement('li');

        // Tạo một span để chưa nội dung công việc
        const taskContent = document.createElement('span');
        taskContent.textContent  =taskText;

        // Tạo nut xóa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xoa';
        deleteButton.classList.add('delete-btn');

        // Găn sự kiên click cho nut "Xoa"
        deleteButton.addEventListener('click', function(){
            // Xoa thẻ <li> cha của nut xóa
            taskList.removeChild(listItem);
        });

        // Găn sự kiện click cho chính thẻ <li> để đánh dấu hoàn thành
        listItem.addEventListener('click', function(event) {
            // Kiểm tra có phải click trên nút xóa không
            if (event.target !== deleteButton) {
                listItem.classList.toggle('completed');
            }
        });

        // Thêm nội dung công việc và nút "Xoa" vào thẻ <li></li>
        listItem.appendChild(taskContent);
        listItem.appendChild(deleteButton);

        // Thêm thẻ <li> vào danh sách <ul>
        taskList.appendChild(listItem);

        // Reset giá trị của ô input
        taskInput.value ='';
        taskInput.focus(); // Tự động focus lại ô Input
    }else{
        alert('Vui lòng nhập công việc!...')
    }
}