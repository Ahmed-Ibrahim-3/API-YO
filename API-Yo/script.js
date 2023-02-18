let quote = "";

fetch("https://api.kanye.rest/")
    .then( (resposne) => resposne.json())
    .then((data) => {
        //data is a js "dict"
        quote = data["quote"];
    quote=quote.replace(/ /g,"%20")
        fetch(`https://api.funtranslations.com/translate/shakespeare.json?text=${quote}`)
            .then( (response) => response.json())
            .then( (d) => {
                let p = document.createElement("p");
                p.innerText= d["contents"]["translated"];
                console.log(p);
                document.body.appendChild(p);
            })
    })

