# tool_elementsHtml
stock de composants html interactifs

/*
EXEMPLE: Commutator
comment creer l'objet: 
    - creer une target:
        ex: 
            let myTargetTest = document.createTextNode("test");
            root.appendChild(myTargetTest);
    - instancier avec: target, une fonction, une seconde fonction:
        ex :
            let controller = new Commutator(
                myTargetTest, 
                function() {myTargetTest.textContent = "hello";}, 
                function() {myTargetTest.textContent = "bye";}
            );
    - fonctionnement de l'objet:
        la fonction onclick de l'objet switchera entre la function1 et la fonction2 et actuallisera sa valeur (0 ou 1);
*/
