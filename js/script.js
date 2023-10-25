const url = 'https://api.kanye.rest'

async function GetKanye(){
    try{
        const response = await fetch(url)

        if(response.ok){
            const data = await response.json();
            return data.quote;
        }else{
            console.error("Ocorreu um erro na resposta da API")
        }
    }catch(error){
        console.error("Erro ao se conectar com a API", error)
    }
}

var botao = document.getElementById('botao1');
botao.addEventListener('click', async function(){
    const kanyeQuote = await GetKanye();
    console.log("%cFala do Kanye West: " + kanyeQuote, "color: #ff00ff; font-weight: bold;");
});