const categories = document.querySelectorAll('#categories .item')
console.log(`Number of categories : ${categories.length}`);

categories.forEach(categories => {
    const title = categories.querySelector('h2').textContent;
    const item = categories.querySelectorAll('ul li').length;

    console.log(`Categories : ${title}`);
    console.log(`Elements : ${item}`);
})