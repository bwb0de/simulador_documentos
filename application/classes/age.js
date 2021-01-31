import { make_generator } from '../../resources/programing-tools.js';

class AgeStatus {
    constructor(dn) { 
        
        this.doc = []
    
    }
    return_docs() {
        return make_generator(this.doc)
    }
    
}

class Pessoa {
    constructor(nome, dn, perfil_renda, perfil_saude) {
        this.nome = nome;
        this.dn = dn
        this.saude = new perfil_saude();
        this.renda = new perfil_renda();
    }

    print_info() {
        console.log("<p>" + this.nome + " (" + this.renda.perfil + ", " + this.saude.perfil + ") " + "</p>")
        console.log("<ul>")
        this.renda.print_info()
        this.saude.print_info()
        console.log("</ul>")
    }
}
