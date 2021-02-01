import { make_generator } from '../../resources/programing-tools.js';

class HealthBlueprint {
    constructor(){ this.doc = []}
    return_docs(){
        return make_generator(this.doc);
    }
}

class Saudavel extends HealthBlueprint {
    constructor(){       
        super();
        this.perfil = "Saudável";
        this.doc = []
    }
}

class DoenteCronico extends HealthBlueprint {
    constructor(){       
        super();
        this.perfil = "Doente Crônico";
        this.doc = ["Relatório ou laudo médico com CID ou carteirinha do posto de saúde"]
    }
}

class DoenteGrave extends HealthBlueprint {
    constructor(){       
        super();
        this.perfil = "Portador de doença grave";
        this.doc = ["Relatório ou laudo médico com CID"]
    }
}

class Deficiente extends HealthBlueprint {
    constructor(){       
        super();
        this.perfil = "Deficiente";
        this.doc = ["Relatório ou laudo médico com CID ou documento oficial de identificação para pessoa com deficiência"]
    }
}

export { Saudavel, DoenteCronico, DoenteGrave, Deficiente };