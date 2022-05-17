let btnAndtaskEl = document.querySelector('button')
let taskNameEl = document.querySelector('#content')

let tasks = getTaskFromlocaltorage()
    renderTasks(tasks)


    btnAndtaskEl.addEventListener('click',function() {
    //Nếu không có giá trị sẽ trả về alert    
    if (!taskNameEl.value) {
        alert('Vui Lòng nhập tên công việc')
        return false  
    }
    let taskId = this.getAttribute('id') 
    //Kiem tra id vi value co bang 0 nen 
    let tasks = getTaskFromlocaltorage()
    let task = {name:taskNameEl.value}
    //
    if (taskId == 0 ||taskId) {
        tasks[taskId]   = task
        this.removeAttributeNode('id')
    }else{
        tasks.push(task)
    } 
    //overight key cua [] => khai báo và gán giá trị của mảng đó và set giá trị đó
    taskNameEl.value = ''
    renderTasks(tasks)


    //local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
})  
function editTask(id){
    let tasks = getTaskFromlocaltorage()
    if (tasks.length > 0) {
        console.log(tasks[id])
        taskNameEl.value = tasks[id].name
        btnAndtaskEl.SetAttribute('id', id)
    }
}
function deleteTask(id){
 if (confirm('Bạn có muốn xóa không ?')) {
     let tasks = getTaskFromlocaltorage()
        tasks.splice(id,1)
        //delete key = ? | id ==
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTasks(tasks)
    }

}
function renderTasks(tasks= []) {
    let content = '<ul>'
    tasks.forEach((task,index) => {
       content+=
       ` <li>
             <div class="task-name">${task.name}</div>
                <a href="#" onclick= editTask(${index})> sửa</a>
                <a href="#" onclick= deleteTask(${index}) > xóa</a>
        </li>`
    })
    content += '</ul>'
    document.querySelector('#result').innerHTML = content
}
function getTaskFromlocaltorage(){
    return localStorage.getItem('tasks')
    ? JSON.parse (localStorage.getItem('tasks')) : [];
}