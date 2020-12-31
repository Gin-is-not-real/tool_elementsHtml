/*
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

class Commutator {
    body = {
        elt: "input", 
        type: "button",
        className: "commutator", 
        value: "0",
        values: ["0", "1"],
        target: "",

        func1: function() {
            console.log("commutator func1");
        },
        func2: function() {
            console.log("commutator func2");
        },

        // func1: function(){},
        // func2: function(){},

        onclick: function() {
            if(this.value === this.values[0]) {
                this.func1();
                // console.log(this);
                this.value = this.values[1];
            }
            else {
                this.func2();
                this.value = this.values[0];
            }
        },
    }

    constructor(target, f1, f2) {
        this.body.target = target;
        this.body.func1 = f1;
        this.body.func2 = f2;

        console.log(this);
        this.create();
    }


    create() {
        createDTElement(root, this.body);
    }

}

