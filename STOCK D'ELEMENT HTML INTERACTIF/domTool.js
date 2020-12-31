/*
outil pour faciliter la creation du dom

la fonction createDTElement(parentNode, obj) prend en parametres:
    - le noeud parent,
    - une variable objet contenant les attributs dom de l'element a creer;
        - EX: maVariable = {elt: -l'element à creer-, className: --, id: --, value:-- ETC...}
        
    -->ATTRIBUT CHILDS: l'objet element à creer peut contenir un attribut "childs" contenant un ou plusieurs elements qui seront directement ajoutée a l'élement en cours de creation
        - EX: maVariable = {elt: "div", childs = [
            sub = {elt...}
        ]}

    -->UTILISER CETTE SYNTAXE POUR ASSIGNER LES FONCTIONS ET GARDER LE THIS 
    element4 = {elt: "input", type: "button", className: "btnTestFunc2", value: "func2", onclick: function() {testLog2(this, text)} },
*/

function createDTElement(parentNode, obj) {
    let elt = document.createElement(obj.elt);
    elt.type = obj.type;

    for(var i in obj) {
        if(obj.hasOwnProperty(i)) {
            // console.log(i, ":", obj[i]);
            elt[i] = obj[i];
        }
    }

    if(obj.childs != undefined) {
        obj.childs.forEach(element => {
            createDTElement2(elt, element);
        });
    }

    parentNode.appendChild(elt);
    return elt;
}