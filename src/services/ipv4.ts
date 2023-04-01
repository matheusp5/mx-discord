
import impx from "impx"

export default async function getIp(ipv4: string) {
    return await impx.getIPLocation(ipv4)
}