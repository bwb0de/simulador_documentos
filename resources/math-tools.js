function resulting_vect(arr) {
    x = 0;
    y = 0;

    for ( idx in arr ) {
        x += arr[idx][0];
        y += arr[idx][1];
    }

    return [x,y]
};


function size_vect(vector) {
    return Math.sqrt((vector[0] * vector[0]) + (vector[1] * vector[1]));
};


function cos_vect(vector) {
    return vector[0] / size_vect(vector);
};



function sum(arr) {
    output = 0
    for ( index in arr ) {
        output += arr[index]
    };

    return output
};

function mean(arr) {
    denominador = arr.length
    soma = sum(arr)
    return soma / denominador

}


export { resulting_vect, size_vect, cos_vect, sum, mean };