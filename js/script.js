const API_KEY = "1369f41d5e54404781fceb4bd0347c5c";
let boardNoticias = document.querySelector('#boardNoticias')
let btnCarregar = document.querySelector('#carregar')

let config = {
    method: "GET"
}

function mostrarNaTela(listaNoticias){
    listaNoticias.forEach(noticia => {
        let novaNoticia = ` <div class="card col-md-4" style="width: 18rem;">
        <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body text-justify">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">
            ${noticia.description}
            </p>
            <a href="${noticia.url}" target="_blank" class="btn btn-primary">Ver notícia completa</a>
        </div>
    </div> `

    boardNoticias.insertAdjacentHTML('beforeend', novaNoticia)
  })
}

btnCarregar.onclick = ()=>{
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + API_KEY, config)
.then((resposta)=>{
      return resposta.json()
})
.then((json)=>{
      console.log(json.articles[0])
      mostrarNaTela(json.articles)
})
}