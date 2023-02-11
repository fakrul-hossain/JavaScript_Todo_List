
// Todo list 
let count = 0;
document.getElementById('input-btn').addEventListener('click', function(){
    count++
    const inputValue = document.getElementById('input-value').value;
    const parent = document.getElementById('content-container');
    // add task
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
    <td scope="row">${count}</td>
    <td>${inputValue}</td>
    <td>
    <button id="delete-btn" class="btn btn-danger">Delete</button>
    <button id="clear-btn" class="btn btn-primary">Done</button>
    </td>

  </tr>
    `
    parent.appendChild(tr)
    
document.getElementById('input-value').value = '';
// delete add task
const elements = document.querySelectorAll('#delete-btn');
for (const value of elements){
value.addEventListener('click', function(event){
    event.target.parentNode.parentNode.style.display = 'none'
});
}
});
// clear all
document.getElementById('clear-btn').addEventListener('click', function(event){
    event.target.parentNode.style.display = 'none';
});