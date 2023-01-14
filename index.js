const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "secSF26WtyBxxFXej5yr8w==TVpYUAWz2KVuU1MR";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey, 
    }
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){
    jokeEl.innerText = "updating.....";
    const response = await fetch(apiURL, options)
    const data = await response.json()

    jokeEl.innerText = data[0].joke;
}


btnEl.addEventListener("click", getjoke);



