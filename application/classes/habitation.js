import { make_generator } from '../../resources/programing-tools.js';

class HabitationBlueprint {
    constructor() { 
        this.doc = [];
        this.city = "";
        this.gps_ref = [0.0, 0.0]
    }

    return_docs(){
        return make_generator(this.doc);
    }
}

class Quitado extends HabitationBlueprint {
    constructor(address){
        this.doc = ["Anexar IPTU e comprovantes de gastos da residência: agua, luz, telefone."];
        this.address = address;
        this.situation = "Quitado";
    }

}


class CEU extends HabitationBlueprint {
    constructor() {
        this.doc = ["Informar situação de moradia na questão [18] do Cadastro Único do SIGAA."]
        this.address = address;
        this.situation = "Casa do Estudante Universitário";

    }
}


class Financiamento extends HabitationBlueprint {
    constructor(){
        this.doc = ["Apresentar boleto de pagamento do financiamento."]
        this.address = address;
        this.situation = "Em aquisição (financiado)";

    }
}


class Cedido extends HabitationBlueprint {
    constructor() {
        this.doc = ["Apresentar <a href='https://drive.google.com/file/d/17NKJRJh2pogTpn65cD5I4YqYbiTVeanW/view?usp=sharing' target='_blank'>declaração de residência em Imóvel Cedido</a>, conforme o edital, com a cópia do RG do cedente ou com reconhecimento da assinatura em cartório."]
        this.address = address;
        this.situation = "Cedido";
    }
}


class Alugado extends HabitationBlueprint {
    constructor() {
        this.doc = ["Apresentar contrato de aluguel vigente em que conste o valor da locação."]
        this.address = address;
        this.situation = "Alugado/república/pensionato";
    }
}


class AlugadoInformalmente extends HabitationBlueprint {
    constructor() {
        this.doc = ["Apresentar <a href='https://drive.google.com/file/d/1ThKt4pauvj9XAm5NJSHtEF-Nl2TDzgo3/view?usp=sharing' target='_blank'>declaração de aluguel informal</a>, conforme orientações do edital. No caso do aluguel ser compartilhado com outros, indicar o valor da parcela paga na questão [18] do Cadastro Único."]
        this.address = address;
        this.situation = "Alugado informalmente";

    }
}


class MorandoDeFavor extends HabitationBlueprint {
    constructor() {
        this.doc = ["Apresentar <a href='https://drive.google.com/file/d/1xhXYmt7RO_5_6JDO4h7VCQd-PDTpXE57/view?usp=sharing' target='_blank'>declaração de residência de Moradia com Outros</a> (“de favor”), conforme o edital, com a cópia do documento de identificação do declarante ou com firma reconhecida em cartório."]
        this.address = address;
        this.situation = "Morando de favor (com terceiros)";
    }
}


class Assentamento extends HabitationBlueprint {
    constructor() {
        this.doc = ["Para assentados, apresentar comprovante/declaração da situação informada ou Contrato de Concessão de Uso (CCU) ou Título de Domínio (TD) ou Declaração de Aptidão ao Programa Nacional de Fortalecimento da Agricultura Familiar (DAP/PRONAF)."]
        this.address = address;
        this.situation = "Assentamento";
    }
}


class Quilombo extends HabitationBlueprint {
    constructor() {
        this.doc = ["Apresentar declaração de pertencimento à comunidade declarada."]
        this.address = address;
        this.situation = "Comunidade quilombola";
    }
}


class Aldeia extends HabitationBlueprint {
    constructor() {
        this.doc = ["Declaração de liderança indígena ou órgão oficial (FUNAI) sobre residência do estudante e grupo familiar ou Declaração de Aptidão ao Programa Nacional de Fortalecimento da Agricultura Familiar (DAP)."]
        this.address = address;
        this.situation = "Aldeia indígena";
    }
}


class Irregular extends HabitationBlueprint {
    constructor() {
        this.doc = ["Apresentar termo de cessão de direitos da propriedade ou comprovante/declaração da situação informada."]
        this.address = address;
        this.situation = "Ocupação irregular";
    }
}


class SubJudice extends HabitationBlueprint {
    constructor() {
        this.doc = ["Apresentar decisão judicial ou notificação de órgão público responsável sobre a determinação da desocupação da área (moradia com risco de remoção)."]
        this.address = address;
        this.situation = "Moradia com risco de remoção sub judice";
    }
}


class SemMoradia extends HabitationBlueprint {
    constructor() {
        this.doc = ["Declaração de atendimento emitida pelo Centro de Referência para População em Situação de Rua (Centro Pop) ou autodeclaração do estudante."]
        this.address = address;
        this.situation = "Sem moradia, em situação de rua";
    }
}


class OutraSituacaoMoradia extends HabitationBlueprint {
    constructor() {
        this.doc = ["Solicitar entrevista com profissional pelo email sps@unb.br."]
        this.address = address;
        this.situation = "Outra situação de moradia";
    }
}


export { Quitado, CEU, Financiamento, Cedido, Alugado, AlugadoInformalmente, MorandoDeFavor, Assentamento, Quilombo, Aldeia, Irregular, SubJudice, SemMoradia, OutraSituacaoMoradia };