
function clear_radio_selection(class_name) {
    grupo_ops = document.getElementsByClassName(class_name)
    for ( index in grupo_ops ) {
        grupo_ops[index].checked = false;
    };
};


function check_if_checked(class_name) {
    grupo_ops = document.getElementsByClassName(class_name);
    for ( index in grupo_ops ) {
        if ( grupo_ops[index].checked == true ) {
            return 1;
        }
    };
}

export { clear_radio_selection, check_if_checked };