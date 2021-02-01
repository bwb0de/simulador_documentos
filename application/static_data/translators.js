import { MAX_SAUDE, MID_SAUDE, MIN_SAUDE } from "./basic_values.js";
import { ServidorEfetivo, Aposentado, Rentista, ServidorTemporario, Microempreendedor, ProdutorRural, AgricultorFamiliar, TrabalhadorFormal, PensaoAlimenticiaFormal, Estagio, BolsaAcademica, BolsaAcademicaPOS, BolsaAssistenciaEstudantil, PensaoAlimenticiaInformal, AuxilioAssistenciaSocial, TrabalhadorInformal, Poupanca, INSS, AjudaDeTerceiros, SeguroDesemprego, SemRendaLaboral } from "../classes/income.js";
import { Saudavel, DoenteCronico, DoenteGrave, Deficiente } from "../classes/health.js"
import { Quitado, CEU, Financiamento, Cedido, Alugado, AlugadoInformalmente, MorandoDeFavor, Assentamento, Quilombo, Aldeia, Irregular, SubJudice, SemMoradia, OutraSituacaoMoradia } from "../classes/habitation.js";

const translator_tipo_renda = {
    tipo_vinculo_00: [22, ServidorEfetivo],
    tipo_vinculo_01: [22, Aposentado],
    tipo_vinculo_02: [22, Rentista],
    tipo_vinculo_03: [14.08, ServidorTemporario],
    tipo_vinculo_04: [14.08, Microempreendedor],
    tipo_vinculo_21: [14.08, ProdutorRural],
    tipo_vinculo_22: [4.4, AgricultorFamiliar],
    tipo_vinculo_05: [14.08, TrabalhadorFormal],
    tipo_vinculo_06: [14.08, PensaoAlimenticiaFormal],
    tipo_vinculo_07: [14.08, "Pensão por morte"],
    tipo_vinculo_08: [14.08, "Pensão por morte"],
    tipo_vinculo_09: [9.68, INSS],
    tipo_vinculo_10: [9.68, Estagio],
    tipo_vinculo_11: [9.68, BolsaAcademica],
    tipo_vinculo_12: [9.68, BolsaAcademicaPOS],
    tipo_vinculo_13: [9.68, BolsaAssistenciaEstudantil],
    tipo_vinculo_14: [2.64, PensaoAlimenticiaInformal],
    tipo_vinculo_15: [4.4, AuxilioAssistenciaSocial],
    tipo_vinculo_16: [4.4, TrabalhadorInformal],
    tipo_vinculo_17: [2.64, Poupanca],
    tipo_vinculo_18: [2.64, SeguroDesemprego],
    tipo_vinculo_20: [2.64, AjudaDeTerceiros],
    tipo_vinculo_19: [0, SemRendaLaboral]
}

const translator_saude = {
    saude_00: [MAX_SAUDE, Saudavel],
    saude_01: [MID_SAUDE, DoenteCronico],
    saude_02: [MIN_SAUDE, DoenteGrave],
    saude_03: [MIN_SAUDE, Deficiente]
}

const translator_estrangeiro = {
    estrangeiro_00: [0, "Não"],
    estrangeiro_01: [0, "Sim, estrangeiro refugiado"],
    estrangeiro_02: [0, "Sim, estrangeiro não-refugiado"]
}

const translator_pessoa_com_deficiencia = {
    com_deficiencia_00: [0, "Sem deficiência"],
    com_deficiencia_01: [0, "Pessoa com deficiência"]
}

const translator_irpf = {
    irpf_00: [0, "Não"],
    irpf_01: [0, "Sim"]
}

const translator_pais_separados = {
    pais_separados_00: [0, "Meus pais não são separados"],
    pais_separados_01: [0, "Meus pais são formalmente separados"],
    pais_separados_02: [0, "Meus pais são informalmente separados"],
    pais_separados_03: [0, "Meus pais nunca foram formalmente casados"]
}

const translator_mais_de_24 = {
    mais_de_24_00: [0, "Não"],
    mais_de_24_01: [0, "Sim"]
}

const translator_pa = {
    pa_00: [0, "Não"],
    pa_01: [0, "Sim"]
}

const translator_pais_falecidos = {
    pais_falecidos_00: [0, "Não"],
    pais_falecidos_01: [0, "Sim"]
}

const translator_tipo_moradia = {
    tipo_imovel_00: [0, Quitado],
    tipo_imovel_01: [0, CEU],
    tipo_imovel_02: [0, Financiamento],
    tipo_imovel_03: [0, Cedido],
    tipo_imovel_04: [0, Alugado],
    tipo_imovel_13: [0, AlugadoInformalmente],
    tipo_imovel_05: [0, MorandoDeFavor],
    tipo_imovel_06: [0, Assentamento],
    tipo_imovel_07: [0, Quilombo],
    tipo_imovel_12: [0, Aldeia],
    tipo_imovel_08: [0, Irregular],
    tipo_imovel_09: [0, SubJudice],
    tipo_imovel_10: [0, SemMoradia],
    tipo_imovel_11: [0, OutraSituacaoMoradia]
}

const translator_docs = {
    doc00: "Se estrangeiro, anexe relatório do banco o central relativo às operações de câmbio e extratos bancários de todas as contas dos últimos 6 meses.",
    doc01: "Se estrangeiro e não-refugiado, anexe a declaração da embaixada informando se há ou não recebimento de bolsas/auxílios financeiros.",
    doc02: "CPF",
    doc03: "RG, frente e verso, ou certidão de nascimento, no caso de crianças/adolescentes ",
    doc04: "Carteira de trabalho ou declaração de não possuí-la, conforme orientações do edital (obrigatório para pessoas com mais de 18 anos)",
    doc05: "Documento de comprovação de existência de renda (ver o tipo exigido no edital, conforme a natureza do vinculo empregatício) ou declaração de ausência de renda, conforme modelo do edital.",
    doc06: "Declaração completa de imposto de renda, com recibo de entrega, ou declaração emitira pelo site da Receita Federal indicando a inesistência deste documento (obrigatório para maiores de 18 anos)",
    doc07: "Comprovação de existência ou inexistência de pensão alimentícia, caso existam crianças/adolescentes no grupo familiar em que os pais sejam separados",
    doc08: "Certificado de conclusão de curso de graduação ou tecnólogo",
    doc09: "Histórico de conclusão do ensino médio (apenas para o estudante e somente se estiver concorrendo ao Programa de Moradia Estudantil) ◦ Observação: para avaliação de proveniência do estudante...",
    doc10: "Comprovantes de residência (água ou luz) e situção do imóvel (contrato de aluguel, IPTU ou demais documentos que comprovem a situação de moradia declarada no questionário",
    doc11: "Relatório médico ou laudo com CID, necessário àquelas pessoas que possuam agravos de saúde ou deficiência",
    doc12: "Certidão de nascimento do(a) filho(a)",
    doc13: "Certidão de óbito no caso de pai/mãe/mantenedor do grupo familiar falecido;",
    doc14: "Documentos complementares solicitados pelo/a assistente social"
}

export { translator_tipo_renda, translator_saude, translator_estrangeiro, translator_pessoa_com_deficiencia, translator_irpf, translator_pais_separados, translator_mais_de_24, translator_pa, translator_pais_falecidos, translator_tipo_moradia, translator_docs };