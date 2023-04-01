import { EmbedBuilder } from 'discord.js';

export default function EmbedBook(book: string, res: string): EmbedBuilder {
    return new EmbedBuilder()
        .setTitle('Resumo gerado')
        .setDescription(`Resumo do livro: ${book}`)
        .setColor('#A020F0')
        .setAuthor({name: "Mxtz | Books Service"})
        .addFields(
            { name: ".", value: res },
        )
        .setTimestamp()
}