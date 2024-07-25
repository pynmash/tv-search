const form = document.querySelector('#searchForm');
const shows = document.querySelector('#shows')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    shows.innerHTML = ""
    const searchTerm = form.elements.query.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    console.log(res.data[0].show.name)
    console.log(res.data[0])

    for (result of res.data) {
        const showContainer = document.createElement('DIV')
        const img = document.createElement('IMG')
        const name = document.createElement('H2')
        const desc = document.createElement('P')
        img.setAttribute('src', result.show.image.medium)
        name.textContent = `${result.show.name} (Rating: ${result.show.rating.average})`
        desc.textContent = result.show.summary
        showContainer.append(img)
        showContainer.append(name)
        // showContainer.append(desc)
        showContainer.innerHTML += result.show.summary
        shows.append(showContainer)
    }


})