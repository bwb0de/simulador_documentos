
class PerfilSaude {
    constructor() {}

    print_info_card(doc_list){
        doc_list.forEach(element => { console.log("<li>"+element)});
    }
}

class Saudavel extends PerfilSaude {
    constructor(){       
        super();
        this.perfil = "Saudável";
        this.doc = []
    }

    print_info() {
        this.print_info_card(this.doc)
    }
}

class DoenteCronico extends PerfilSaude {
    constructor(){       
        super();
        this.perfil = "Doente Crônico";
        this.doc = ["Relatório ou laudo médico com CID ou carteirinha do posto de saúde"]
    }
    print_info() {
        this.print_info_card(this.doc)
    }

}

class DoenteGrave extends PerfilSaude {
    constructor(){       
        super();
        this.perfil = "Portador de doença grave";
        this.doc = ["Relatório ou laudo médico com CID"]
    }
    print_info() {
        this.print_info_card(this.doc)
    }

}
