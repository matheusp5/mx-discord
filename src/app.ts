

import * as dotenv from "dotenv"
dotenv.config()

const BOT_TOKEN = process.env.BOT_TOKEN

import {GatewayIntentBits} from "discord-api-types/v9"
import {Client, Events} from "discord.js";

import * as commandsApp from "./commands/index"

import getBook from "./services/books";
import getCoins from "./services/coins";
import getQuestion from "./services/gpt";
import getImages from "./services/images";
import getIp from "./services/ipv4";

import EmbedAsk from "./embeds/EmbedAsk";
import EmbedBook from "./embeds/EmbedBook";
import EmbedImage from "./embeds/EmbedImage";
import EmbedCoins from "./embeds/EmbedCoins";
import EmbedIp from "./embeds/EmbedIp";

const commands = [
    commandsApp.book,
    commandsApp.gpt,
    commandsApp.ip,
    commandsApp.image,
    commandsApp.moedas
]
    .map(command => command.toJSON());

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Ótimo! O bot está inicializado: ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction: any) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    try { 
        if (commandName === 'ask') {
            await interaction.deferReply();
            const ask: string = interaction.options.getString('pergunta');
            const res = await getQuestion(ask)
            await interaction.editReply({ embeds: [EmbedAsk(ask, res)], ephemeral: true })
            
        } else if (commandName === 'book') {
            await interaction.deferReply();
            const book: string = interaction.options.getString('livro')
            const res = await getBook(book)
            await interaction.editReply({ embeds: [EmbedBook(book, res)] })
            
        } else if (commandName === 'image') {
            await interaction.deferReply();
            const ints: string = interaction.options.getString('instrucoes')
            const image = await getImages(ints)
            await interaction.editReply({ embeds: [EmbedImage(ints, image)], ephemeral: true})
            
        } else if (commandName === 'coins') {
            await interaction.deferReply();
            const res = await getCoins()
            await interaction.editReply({ embeds: [EmbedCoins(res)], ephemeral: true})
            
        } else if (commandName === 'ip') {
            await interaction.deferReply();
            const ip: string = interaction.options.getString('ip')
            const res = await getIp(ip)
            await interaction.editReply({ embeds: [await EmbedIp(res)], ephemeral: true})
            
        }
    } catch (e) {
        await interaction.editReply("Ocorreu um erro no sistema, tente novamente mais tarde! 😭")
    }
});

client.login(BOT_TOKEN);