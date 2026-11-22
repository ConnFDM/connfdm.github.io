window.onload = async function addComponents() {
    const header = await fetch("./components/header.html");
    const headerTxt = await header.text();
    const footer = await fetch("./components/footer.html");
    const footerTxt = await footer.text();
    document.body.insertAdjacentHTML("afterbegin", headerTxt);
    document.body.insertAdjacentHTML("beforeend", footerTxt);
};