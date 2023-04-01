import { EmbedBuilder } from 'discord.js';

export default function EmbedIp(infs: any): EmbedBuilder {
    return new EmbedBuilder()
        .setTitle('Informações geográficas')
        .setDescription(`${infs.ip}`)
        .setColor('#A020F0')
        .setAuthor({name: "Mxtz | IPv4 Service"})
        .addFields(
            { name: 'País', value: infs.country_name },
            { name: 'Região', value: infs.region },
            { name: 'Cidade', value: infs.city },
            { name: 'Coordenadas', value: `${infs.latitude}, ${infs.longitude}` },
            { name: 'Timezone', value: infs.timezone }
        )
        .setTimestamp()
}