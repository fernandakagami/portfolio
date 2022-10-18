const form = document.getElementById('newItem');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.elements['name'].value);
});

function elementCreate() {
    
}