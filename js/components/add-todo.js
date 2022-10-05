class AddTodo {

    constructor() {
        this.btnAdd = document.getElementById('add');
        this.title = document.getElementById('title');
        this.description = document.getElementById('description');
    }

    onClick(callback) {

this.btnAdd.onclick = () => {
        if ('' === this.title.value || '' === this.description.value) {
            // alert.classList.remove('d-none');
            // alert.innerText = 'Title or description are required.';
            // return;
            console.error('incorrect');
        } else {
            callback(this.title.value, this.description.value);
        }
    }}

}

export default AddTodo;