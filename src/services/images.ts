
const OPENAI_APIKEY = process.env.OPENAI_APIKEY
import axios from "axios"

export default async function getImages(ints: string) {
    const options =
        {
            method: 'post',
            url: 'https://api.openai.com/v1/images/generations',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_APIKEY}`
            },
            data: {
                "model": "image-alpha-001",
                "prompt": ints,
                "num_images":1,
                "size":"1024x1024"
            }
        };

    const result = await axios(options)
    return result.data.data[0].url
}