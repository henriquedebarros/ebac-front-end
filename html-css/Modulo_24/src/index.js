function titleComponent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello world 6'
    elemH1.classList.add('title')
    return elemH1
}

document.getElementById('root').appendChild(titleComponent())