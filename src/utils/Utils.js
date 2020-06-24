import FunctionList from '../data/FunctionList.json';

class Utils {
    static functionList() {
        return FunctionList.function_list;
    }

    static generateAPIFilter(filters) {
        let sentence = '';
        for (const filter in filters) {
            sentence += `${filter}=${filters[filter]}&`;
        }
        sentence = sentence.substring(0, sentence.length - 1);
        return sentence;
    }
}

export default Utils;
