function check_foreign(doc_list, form_response) {
    if (form_response == "Sim, estrangeiro refugiado" ) {
        doc_list.push("Relatório do banco o central relativo às operações de câmbio e extratos bancários de todas as contas dos últimos 6 meses.")
    
    } else if (form_response == "Sim, estrangeiro não-refugiado") {
        doc_list.push("Relatório do banco o central relativo às operações de câmbio e extratos bancários de todas as contas dos últimos 6 meses.")
        doc_list.push("Declaração da embaixada informando se há ou não recebimento de bolsas/auxílios financeiros.")
    }
    return doc_list
}

function check_deficient(doc_list, form_response) {
    if (form_response == "Pessoa com deficiência" ) {
        doc_list.push("Anexar documento oficial de pessoa com deficiência ou relatório/laudo médico com CID.")
    }
    return doc_list
}

function check_alimony(doc_list, form_response_alimony, form_response_separated_parents, form_response_deceased_parents, form_response_age_24) {
    if (form_response_alimony == "Não" && form_response_deceased_parents == "Não" ) {
        if (form_response_separated_parents == "Meus pais são formalmente separados" && form_response_age_24 == "Não" ) {
            doc_list.push("Anexar comprovante de justificativa do não recebimento de pensão alimentícia... [0] se o pedido de pensão estiver em tramitação, comprovante de existência do processo com identificação das partes; [2] se a pensão tiver sido interrompida por falta de pagamento, anexe o comprovante da decisão favorável a concessão da pensão e os extratos bancários que demonstrem claramente a interrupção do repasse do recurso.")
    
        } else if (form_response_separated_parents == "Meus pais são informalmente separados" && form_response_age_24 == "Não") {
            doc_list.push("Apresentar declaração de não recebimento de pensão, ver modelo nos anexos do edital.")
    
        } else if (form_response_separated_parents == "Meus pais nunca foram formalmente casados" && form_response_age_24 == "Não") {
            doc_list.push("Apresentar declaração de não recebimento de pensão, ver modelo nos anexos do edital.")
            doc_list.push("Incluir na questão número [18] do Cadastro Único (SIGAA) os motivos de não ter solicitado pensão formal.")
        }

    } else if (form_response_alimony == "Sim") {
        if (form_response_separated_parents == "Meus pais são formalmente separados" && form_response_age_24 == "Não" ) {
            doc_list.push("Anexar cópia da decisão judicial em favor da pensão e comprovantes que atestem o valor transferido.")
    
        } else if (form_response_separated_parents == "Meus pais são informalmente separados" && form_response_age_24 == "Não") {
            doc_list.push("Anexar <a href='https://drive.google.com/file/d/1e_MVjxtRXAKDdAcr82hXT9IzMK20oYXT/view?usp=sharing' target='_blank'>declaração de recebimento de pensão informal</a>, conforme o modelo do edital, com comprovantes que atestem o valor transferido.")
    
        } else if (form_response_separated_parents == "Meus pais nunca foram formalmente casados" && form_response_age_24 == "Não") {
            doc_list.push("Anexar <a href='https://drive.google.com/file/d/1e_MVjxtRXAKDdAcr82hXT9IzMK20oYXT/view?usp=sharing' target='_blank'>declaração de recebimento de pensão informal</a>, conforme o modelo do edital, com comprovantes que atestem o valor transferido.")
        }
    }
    return doc_list
}

function check_if_any_deceased_parent(doc_list, form_response) {
    if (form_response == "Sim" ) {
        doc_list.push("Anexar certidão de óbito do genitor falecido.")
    }
    return doc_list
}

export { check_foreign, check_deficient, check_alimony, check_if_any_deceased_parent }