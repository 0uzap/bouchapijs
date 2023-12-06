import { getType } from "./api/api_types.js";
//import { getProduit } from "./api/api_produits.js";

async function afficherTypes() {
    try{
        const types = await getType();
        console.log(types);
        var lesTypes = types["hydra:member"];
        var olTypes = document.getElementById('olTypes');
        for (let type of lesTypes) {
            var li = document.createElement("li");
            li.classList.add("list-group-item","d-flex","justify-content-between","align-items-start");

            var div = document.createElement("div");
            div.classList.add("ms-2","me-auto");

            var div2 = document.createElement("div");
            div2.innerHTML = type.description;
            // div2.innerHTML = attente()

            //var btn = document.createElement('button');
            //btn.classList.add("detail");
            
            li.appendChild(div);
            div.appendChild(div2);
            olTypes.appendChild(li);
        }
    }
    catch(erreur) {
        console.log('Erreur :',erreur);
    }
}

afficherTypes();

/*
function attente() {
    if (document.readyState == "complete") {
        div2.innerHTML = type.description;
    } else {
        div2.innerHTML = '<div class="spiner-grow" role="status"> <span class="sr-only"> Loading... </span>'
    }
}
*/
