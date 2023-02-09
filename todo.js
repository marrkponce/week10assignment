let id = 0;

document.getElementById('add').addEventListener('click', () => {
    event.preventDefault();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id' , `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value;
    
    let actions = row.insertCell(1);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}