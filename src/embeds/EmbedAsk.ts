import { EmbedBuilder } from 'discord.js';

export default function EmbedAsk(ask: string, res: string): EmbedBuilder {
    return new EmbedBuilder()
        .setTitle('Resposta a sua pergunta')
        .setDescription(`"${ask}"`)
        .setColor('#A020F0')
        .setAuthor({name: "Mxtz | Ask Service"})
        .addFields(
            { name: ".", value: res },
        )
        .setTimestamp()
}