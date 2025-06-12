const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'https://github.com/Navinofc44/Autovoice-data/raw/refs/heads/main/Converted%20By%20%C2%BBS%CA%9C%C9%9B%CA%9C%CA%8C%CA%80%CA%8C.mp3'
                    }
let des = `*👋 Hello ${pushname}*

╔╭────────────╮╕
╭│I'm Alive Now!!👋  │─◎◎▷
╘╰────────────╯╜
│DILSHAN MD BOT is a powerful WhatsApp Bot ⚙️
│Providing Real-Time Automated Conversations 🤖
│and Many Useful Features for Daily Use!💫
│
│Type *.menu* to get the full command list 💻
╰───────────────◎◎▷

➣ 𝐉𝐎𝐈𝐍 𝐓𝐎 𝐌𝐘 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐋𝐈𝐍𝐊👇
   
   https://whatsapp.com/channel/0029Vb5nAex2UPBGW79XCX1T

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪʟꜱʜᴀɴ ᴍᴅ`
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp3', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/uod3xi.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
