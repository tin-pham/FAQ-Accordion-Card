
window.addEventListener('DOMContentLoaded', () => {
    const containerDropdown = document.querySelectorAll('.container_item_question');
    console.log(containerDropdown);
    containerDropdown.forEach(item => {
        item.innerHTML += '<img src="./images/icon-arrow-down.svg" alt="" class="icon">'
    })
    
    var buttons = Array.from(document.getElementsByClassName('icon'));

    buttons.forEach(button => {
        button.addEventListener('click', e => {
            const list = e.currentTarget.closest('.container_item_dropdown');
            console.log(list);
            list.classList.toggle('show-text');
        })
})
    
})




