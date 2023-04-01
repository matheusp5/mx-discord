
const OPENAI_APIKEY = process.env.OPENAI_APIKEY
import axios from "axios"

export default async function getBook(book: string) {
    const options = {
        method: 'post',
        url: 'https://api.openai.com/v1/completions',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_APIKEY}`
        },
        data: {
            "model": "text-davinci-001",
            "prompt": "Faça um resumo de 20 linhas do livro: " + book + ". Responda em português.",
            "temperature":1,
            "max_tokens": 1024
        }
    };

    const result = await axios(options)
    return result.data.choices[0].text;
}