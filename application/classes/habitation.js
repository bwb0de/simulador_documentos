import { make_generator } from '../../resources/programing-tools.js';

class HabitationBlueprint {
    constructor(){ this.doc = []}
    return_docs(){
        return make_generator(this.doc);
    }
}

