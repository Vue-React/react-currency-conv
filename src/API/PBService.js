import axios from 'axios'

export default class PBService {
    static async getRates() {
        // API "Готівковий курс ПриватБанку" 
        const response = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')

        return response.data
    }
}