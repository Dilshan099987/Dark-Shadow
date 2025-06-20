
const config = require('../config')
const {cmd , commands} = require('../lib/command')
const axios = require('axios')
const cheerio = require('cheerio')

cmd({
    pattern: "cineinfo",
    desc: "cinesubz.co info",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{


if(!q) return reply("*Please give me a movie name.‼*")

let response = await axios.get(`https://cinesubz.co/?s=${q}`);
let $ = cheerio.load(response.data);
let url = $('#contenedor > div.module > div.content.rigth.csearch > div > div:nth-child(2) > article > div.details > div.title > a').attr('href');
    if(!url) {
        let errr = $('#contenedor > div.module > div.content.rigth.csearch > div > div.no-result.animation-2 > h2 > span').text()
        return reply(`No results to show with *${errr}*`)
    }
let result = await axios.get(`${url}`);
$ = cheerio.load(result.data)

const title = $('#single > div.content.right > div.sheader > div.data > h1').text()
const date = $('#single > div.content.right > div.sheader > div.data > div.extra > span.date').text()
const country = $('#single > div.content.right > div.sheader > div.data > div.extra > span.country').text()
const time = $('#single > div.content.right > div.sheader > div.data > div.extra > span.runtime').text()
const rate = $('#repimdb > strong').text()
const director = $('#cast > div:nth-child(2) > div > div.data > div.name > a').text()
const img = $('#single > div.content.right > div.sheader > div.poster > img').attr('src')

let msg = `*🎬  ${title}*

*📆 Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ:* ${date}

*🌍 Cᴏᴜɴᴛʀʏ:* ${country}

*🕘 Dᴜʀᴀᴛɪᴏɴ:* ${time}

*⚡ Iᴍᴅʙ Rᴀᴛᴇ:* ${rate}

*👨‍💻 Dɪʀᴇᴄᴛᴏʀ:* ${director}

*🖇️ Lɪɴᴋ:* ${url}

${config.FOOTER}`

await conn.sendMessage(from, {image:{url: img},caption:msg},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
