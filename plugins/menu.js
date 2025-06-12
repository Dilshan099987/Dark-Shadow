const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",
    react: "📜",
    alias: ["panel","commands"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
const config = await readEnv();
let madeMenu = `*👋 Hello`${pushname}`,

╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ 」──●●►
│ *⏳ Uptime*:  15 hours, 20 minutes, 38 seconds 
│ *👤 User* :  *Dilshan Ashinsa*
│ *📂 Ram usage*: 30.04MB / 63243.48MB 
│ *⚙️ HostName*: Replit
│ *👨‍💻 Owner*: Dilshan Ashinsa 
╰───────────●●►

* *🔢 Reply Below This Number*
╭═════════════════○
*1┃• DOWNLOAD MENU*
*2┃• GROUP MENU*
*3┃• FUN MENU*
*4┃• OWNER MENU*
*5┃• AI MENU*
*6┃• ANIME MENU*
*7┃• CONVERT MENU*
*8┃• OTHER MENU*
*9┃• REACTIONS MENU*
*10┃• MAIN MENU*
╰═════════════════○
    
> © ᴘᴏᴡᴇʀᴅ ʙʏ ᴅɪʟꜱʜᴀɴ ᴍᴅ
`

await conn.sendMessage(from, { text: madeMenu ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "QUEEN-LITHU-MD",
      serverMessageId: 999
    },
externalAdReply: { 
title: '◀︎QUEEN-LITHU-MD MENU▶︎',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://whatsapp.com/channel/0029VasctJ90LKZDfJ4JZp2d" ,
thumbnailUrl: "https://unitedcamps.in/Images/file_5278.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
});
