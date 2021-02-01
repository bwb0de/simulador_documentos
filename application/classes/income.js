import { make_generator } from '../../resources/programing-tools.js';

class IncomeBlueprint {
    constructor(){ this.doc = []}
    return_docs(){
        return make_generator(this.doc);
    }
}

class ServidorEfetivo extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Servidor efetivo";
        this.doc = ["Apresentar cópia dos três contracheques mais recentes."]
    }
}

class Aposentado extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Aposentado";
        this.doc = ["Apresentar comprovante mais recente de recebimento da aposentadoria."]
    }
}

class Rentista extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Rendimentos";
        this.doc = ["Apresentar contrato(s) de locação dos imóveis com o valor expresso ou comprovante de rendimentos ou recibo de pagamento dos inquilinos."]
    }
}

class ServidorTemporario extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Servidor temporário/comissão";
        this.doc = ["Apresentar cópia dos três contracheques mais recentes."]
    }
}

class Microempreendedor extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Microempreendedor";
        this.doc = ["Declaração de rendimento conforme modelo do edital ou pró labore + extratos bancários dos últimos três meses"]
    }
}

class ProdutorRural extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Atividade produção agrícola";
        this.doc = ["Declaração do Imposto Territorial Rural - ITR + declaração de rendimento ou Declaração do Sindicato Rural da região sobre atividade exercida e renda mensal"]
    }
}

class AgricultorFamiliar extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Atividade produção agrícola/familiar/subsistência - indígenas, quilombolas e assentados";
        this.doc = ["<a href='https://drive.google.com/file/d/1k0GBLwWeoMD6fqBYGZWGsGzwcywgSuim/view?usp=sharing' target='_blank'>Declaração de atividade informal ou autônoma</a> conforme modelo do edital + três últimos extratos bancários ou, na ausência de extrato por não possuir conta bancária, apresentar <a href='https://www3.bcb.gov.br/nadaconsta/emitirCertidaoCCS' target='_blank'>certidão negativa do banco central</a>."]
    }
}

class TrabalhadorFormal extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Trabalho formal";
        this.doc = ["Apresentar cópia dos três contracheques mais recentes."]
    }
}

class PensaoAlimenticiaFormal extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "PA formal";
        this.doc = ["Anexar cópia da decisão judicial em favor da pensão e comprovantes que atestem o valor transferido."]
    }
}

class Estagio extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Estágio";
        this.doc = ["Apresentar comprovante de recebimento da bolsa de estágio ou contrato de estágio vigente, desde que o valor esteja descrito no documento."]
    }
}

class BolsaAcademica extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Bolsa Acadêmica";
        this.doc = ["Declaração de recebimento da bolsa acadêmica com o respectivo valor emitida pelo órgão competente"]
    }
}

class BolsaAcademicaPOS extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Bolsa pós-graduação";
        this.doc = ["Declaração de recebimento da bolsa acadêmica com o respectivo valor emitida pelo órgão competente"]
    }
}

class BolsaAssistenciaEstudantil extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Bolsa PNAES";
        this.doc = ["Informar, na questão 18 do formulário do Cadastro Único, as bolsas recebidas. Considerar, no ato do preenchimento dos valores das rendas dos integrantes da familia os valores dos programas: Auxílio Socioeconômico, Auxílio Creche e Bolsa Permanência."]
    }
}

class PensaoAlimenticiaInformal extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "PA informal";
        this.doc = ["Anexar <a href='https://drive.google.com/file/d/1e_MVjxtRXAKDdAcr82hXT9IzMK20oYXT/view?usp=sharing' target='_blank'>declaração de recebimento de pensão informal</a>, conforme o modelo do edital, com comprovantes que atestem o valor transferido."]
    }
}

class AuxilioAssistenciaSocial extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Assistência Social";
        this.doc = ["Apresentar comprovante mais recente, com o respectivo valor, referente ao recebimento de Benefício de Assistência Social (Bolsa Familia, BPC ou outros benefícios semelhantes...)"]
    }
}

class TrabalhadorInformal extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Autônomo";
        this.doc = ["<a href='https://drive.google.com/file/d/1k0GBLwWeoMD6fqBYGZWGsGzwcywgSuim/view?usp=sharing' target='_blank'>Declaração de atividade informal ou autônoma</a> conforme modelo do edital + três últimos extratos bancários ou, na ausência de extrato por não possuir conta bancária, apresentar <a href='https://www3.bcb.gov.br/nadaconsta/emitirCertidaoCCS' target='_blank'>certidão negativa do banco central</a>."]
    }
}

class Poupanca extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Poupança";
        this.doc = ["Extrato bancário da poupança referente aos três últimos meses."]
    }
}

class INSS extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "INSS";
        this.doc = ["Apresentar extrato do benefício do INSS."]
    }
}

class AjudaDeTerceiros extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Ajuda de terceiros";
        this.doc = ["<a href='https://drive.google.com/file/d/1OJJKkGYUwz6s-2FJQdfgfyADD5grJPdT/view?usp=sharing' target='_blank'>Declaração de renda referente ao recebimento de ajuda de terceiros</a> (ver modelo no edital), redigida por quem repassa o recurso informando o valor + cópia do RG do declarante ou reconhecimento de firma do declarante em cartório"]
    }
}

class SeguroDesemprego extends IncomeBlueprint {
    constructor(){       
        super();
        this.perfil = "Seguro-desemprego";
        this.doc = ["Espelho do recebimento do benefício com o valor e a quantidade de parcelas a serem pagas"]
    }
}

class SemRendaLaboral extends IncomeBlueprint {
    constructor(idade){       
        super();
        this.perfil = "Sem renda";
        if ( member.idade > 18) {
            this.doc = ["Extratos bancários dos 3 últimos meses + <a href='https://drive.google.com/file/d/1Rlit43OMdjdx2-s-zVRU63kxqrCzN-1R/view?usp=sharing' target='_blank'>declaração de não possuir renda</a> conforme modelo do edital. Na ausência de extrato por não possuir conta bancária, apresentar <a href='https://www3.bcb.gov.br/nadaconsta/emitirCertidaoCCS' target='_blank'>certidão negativa do banco central</a>."]
        } else {
            this.doc = []
        }
    
        
    }
}

export { ServidorEfetivo, Aposentado, Rentista, ServidorTemporario, Microempreendedor, ProdutorRural, AgricultorFamiliar, TrabalhadorFormal, PensaoAlimenticiaFormal, Estagio, BolsaAcademica, BolsaAcademicaPOS, BolsaAssistenciaEstudantil, PensaoAlimenticiaInformal, AuxilioAssistenciaSocial, TrabalhadorInformal, Poupanca, INSS, AjudaDeTerceiros, SeguroDesemprego, SemRendaLaboral }