const list = document.querySelector('ul')
list.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI') {
        console.log(event.target.innerText)
    }
})


