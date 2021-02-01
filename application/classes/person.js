import { make_generator, assert, isinstance } from '../../resources/programing-tools.js';
import { check_foreign, check_deficient, check_alimony, check_if_any_deceased_parent } from '../rules/student-only-doc.js'
import { years_since } from "../../resources/time-tools.js";

class PersonBlueprint {
    constructor() { 
        this.type = ['Person'];
        this.doc = [];
        this.income = [];
        this.health = [];
        this.age = "";
        this.birthday = "";
        this.name = ""

    }

    return_docs(){
        output = [make_generator(this.doc)]
        for ( index in this.income ) {
            output.push(this.income.return_docs())
        }
        for ( index in this.health ) {
            output.push(this.health.return_docs())
        }
        return output
    }

    calc_age(birthday) {
        this.age = years_since(birthday);
        this.birthday = birthday
        return this.age
    }

    set_name(name) {
        this.name = name;
    }
}

class Student extends PersonBlueprint {
    constructor (q1, q2, q3, q4, q5, q6 ) {
        this.type = ['Person', 'Student']

        //
        // Respostas das questões do formulário dirigido ao estudante
        //  q1 => Você é estrangeiro?
        //  q2 => Você é pessoa com deficiência?
        //  q3 => Seus pais são separados?
        //  q4 => Você tem idade superior a 24 anos?
        //  q5 => Você recebe pensão alimentícia?
        //  q6 => Algum dos seus pais é falecido?
        //

        this.doc = check_foreign([], q1);
        this.doc = check_deficient(this.doc, q2);
        this.doc = check_alimony(this.doc, q5, q3, q6, q4);
        this.doc = check_if_any_deceased_parent(this.doc, q6);
    }
}

class StudentFamily extends PersonBlueprint {
    constructor(name, birthday, income_list, health_list, irpf) {
        this.include_docs_by_age_execution = false;
        this.include_docs_by_irpf_execution = false;

        this.type = ['Person', 'StudentFamily'];
        this.name = name;
        this.irpf = irpf;
        this.calc_age(birthday);
        this.include_docs_by_age();
        this.include_docs_by_irpf();
        income_list.forEach(element => { this.income.push(element) });
        health_list.forEach(element => { this.health.push(element) });

    }

    include_docs_by_age() {
        if ( this.include_docs_by_age_execution == false ) {
            if ( this.age < 14 ) {
                this.doc.push("Apresentar RG (frente e verso) ou certidão de nascimento. O número de CPF é necessário para incluir o integrante familiar no sistema.");
            } 
            
            if ( this.age >= 14 ) {
                this.doc.push("Apresentar RG (frente e verso) e CPF.");
            }
    
            if ( this.age >= 18 ) {
                this.doc.push("Apresentar carteira de trabalho: página da foto, qualificação civil e páginas dos 'contratos de trabalho' (último registro de trabalho e a próxima página em branco) se não possuí, apresentar declaração de não possuí-la (modelo no edital).");
            }
            this.include_docs_by_age_execution = true
        }
    }

    include_docs_by_irpf() {
       if ( this.include_docs_by_irpf_execution == false ) {
            if ( this.irpf == "Sim" ) {
                this.doc.push("Anexar o recibo e a declaração de imposto de renda completa (todas as páginas)");
            } else if ( this.irpf == "Não" && this.age >= 18 ) {
                this.doc.push("Acessar a página de <a href='https://servicos.receita.fazenda.gov.br/Servicos/ConsRest/Atual.app/paginas/index.asp' target='_blank'>Consulta de Restituição de IRPF, no site da Receita Federal</a> e preencher os dados solicitados referente ao último ano/ exercício vigente. Anexar o print da tela com a mensagem “<i>sua declaração não consta da base de dados da receita federal</i>")
            }
            this.include_docs_by_irpf_execution = true
        }
    }
}

export { Student, StudentFamily }