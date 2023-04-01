
import axios from "axios"

export default async function getCoins() {
    const result = await axios("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL")
    return {dolar: result.data.USDBRL.high, euro: result.data.EURBRL.high, btc: result.data.BTCBRL.high, eth: result.data.ETHBRL.high }
}