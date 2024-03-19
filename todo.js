addItem.onclick = createItem;
item.onkeyup = function (e) {
    if (e.key === "Enter") {
        createItem();
    }
}
function createItem() {
    const text = item.value.trim();
    if (text) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        const button = document.createElement('button');
        button.textContent = "Delete";
        button.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(button);
        todoList.appendChild(li);
    }
    item.value="";
}