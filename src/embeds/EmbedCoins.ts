import { EmbedBuilder } from 'discord.js';

export default function EmbedCoins(coins: any): EmbedBuilder {
    return new EmbedBuilder()
        .setTitle('Cotação das principais moedas')
        .setDescription(`Acompanhe a cotação das principais moedas do mundo.`)
        .setColor('#A020F0')
        .setAuthor({name: "Mxtz | Coins Service"})
        .addFields(
            { name: 'Dólar', value: coins.dolar },
            { name: 'Euro', value: coins.euro },
            { name: 'Bitcoin', value: coins.btc },
            { name: 'Ethereum', value: coins.eth },
        )
        .setTimestamp()
}