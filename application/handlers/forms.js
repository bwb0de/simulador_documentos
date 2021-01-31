import { clear_radio_selection, check_if_checked } from "../../resources/form-tools.js";


function check_form() {
    //Verifica se todas questões do formulário integrante do grupo familiar foram preechidas
    if ( document.getElementById("dn").value == "" ) {
        return 0;
    
    } else if ( document.getElementById("nome").value == "" ) {
        return 0;
    } 
    
    if ( check_if_checked("renda") == 0 ) {
        return 0;
    }
    
    if ( check_if_checked("irpf") == 0 ) {
        return 0;
    }

    if ( check_if_checked("saude") == 0 ) {
        return 0;
    }
    
    return 1
}


function clear_fields() {
    document.getElementById('nome').value = "";
    document.getElementById('dn').value = "";
    clear_radio_selection('irpf');
    clear_radio_selection('renda');
    clear_radio_selection('saude');

};

function clear_init_fields() {
    clear_radio_selection('entrangeiro');
    clear_radio_selection('com_deficiencia');
    clear_radio_selection('pais_separados');
    clear_radio_selection('mais_de_24');
    clear_radio_selection('pa');
    clear_radio_selection('pais_falecidos');
};


function clear_moradia_fields() {
    document.getElementById('moradia_id').value = "";
    clear_radio_selection('tipo_imovel');
};


export { clear_fields, clear_init_fields, clear_moradia_fields, check_form }; // from "./"