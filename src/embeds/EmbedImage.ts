import { EmbedBuilder } from 'discord.js';

export default function EmbedImage(inst: string, url: string): EmbedBuilder {
    return new EmbedBuilder()
        .setTitle('Imagem gerada')
        .setDescription(`Instruções: ${inst}`)
        .setColor('#A020F0')
        .setAuthor({name: "Mxtz | Images Service"})
        .setImage(url)
        .setTimestamp()
}