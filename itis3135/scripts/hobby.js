function showSection(event) {
    let current = event.currentTarget;
    document.querySelector('.active').classList.remove('active');
    document.getElementsByClassName(current.className)[1].classList.add('active');
    document.querySelector('title').innerText = "Chess ♙ " + current.innerText;
}

let pages = document.querySelector('nav').getElementsByTagName('a');
for (let i = 0; i < pages.length; ++i) {
    pages[i].addEventListener('click', showSection);
}