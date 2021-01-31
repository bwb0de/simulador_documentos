function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

function exaust_generator_list(l, prefix="", sufix="") {
    output = ""
    for (idx in l) {
        e = l[idx].next()
        while ( e.done == false ) {
            output += prefix + e.value + sufix + "\n"
            e = l[idx].next()
            }
        }
    return output
}
    

function* make_generator(list) {
    for ( index in list ) {
        yield list[index];
    }
}



export { assert, exaust_generator_list, make_generator };