// Deve ser importada diretamente na página após importação de moment.min.js
//   · Moment JS alternativamente pode ser importado via: <script src="https://unpkg.com/moment" />


function br_date_string_to_ISO(br_date) {
    dia = br_date.split('/')[0]; 
    mes = br_date.split('/')[1]; 
    ano = br_date.split('/')[2];

    ISO_date = `${ano}-${mes}-${dia}`;

    return ISO_date
}

function years_since(br_date) {
    ISO_date = br_date_string_to_ISO(br_date)
    const now = moment(new Date());
    const past = moment(ISO_date);
    if ( now < past ) {
        throw new Error("A data fornecida deve ser no passado...")
    } else {
        const duration = moment.duration(now.diff(past));
        return parseInt(duration.asYears());
    }

};

function days_to(br_date) {
    ISO_date = br_date_string_to_ISO(br_date)
    const now = moment(new Date());
    const future = moment(ISO_date);
    if ( now > future ) {
        throw new Error("A data fornecida deve ser no futuro...")
    } else {
        const duration = moment.duration(future.diff(now));
        return parseInt(duration.asDays());
    }
}

function validate_date(br_date) {
    ISO_date = br_date_string_to_ISO(br_date)
    return moment(ISO_date).isValid()
};

export { br_date_string_to_ISO, years_since, days_to, validate_date };
