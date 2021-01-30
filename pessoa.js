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
