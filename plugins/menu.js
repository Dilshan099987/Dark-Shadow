const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    
//===========menu========
cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
ai: '',
tools: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `
👋 𝐇𝐄𝐋𝐋𝐎, ${pushname}! 

✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝗗𝗜𝗟𝗦𝗛𝗔𝗡 𝗠𝗗 𝗯𝗼𝘁 ✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ яυηтιмє * ${runtime(process.uptime())}
│◈ σωηєя ηαмє *Dilshan Ashinsa*
│◈ σωηєя ηυмвєя *94772194789*
╰──────────●●►
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-MENU 📥* *❒⁠⁠⁠⁠* 
*┋* *ytdl*
*┋* *mp4*
*┋* *video*
*┋* *ytdl3*
*┋* *play*
*┋* *audio*
*┋* *mp3*
*┋* *song*
*┋* *tiktok2*
*┋* *ttdl2*
*┋* *tiktokvid2*
*┋* *ttdown2*
*┋* *tt2*
*┋* *tiktokdl2*
*┋* *tweet*
*┋* *twdl*
*┋* *twitter*
*┋* *mfire*
*┋* *mediafire*
*┋* *igdl*
*┋* *reel*
*┋* *ig*
*┋* *instadl*
*┋* *insta*
*┋* *searchpin*
*┋* *image*
*┋* *img*
*┋* *facebook*
*┋* *fbdl*
*┋* *fb*
*┋* *apk*
*┋* *ringtones*
*┋* *ring*
*┋* *ringtone*
*┋* *instadl*
*┋* *ig*
*┋* *mediafire*
*┋* *reel*
*┋* *insta*
*┋* *gdrive*
*┋* *pin*
*┋* *pindownload*
*┋* *pins*
*┋* *pinterestdl*
*┋* *ytcommunity*
*┋* *pindl*
*┋* *ytpost*
*┋* *tt*
*┋* *tiktok*
*┋* *gdrtiktokdlive*
*┋* *ttdl*
*╰───────────────────❒*
*╭────❒⁠⁠⁠⁠* *🧠 AI-MENU 🧠* *❒⁠⁠⁠⁠* 
*┋* *ai*
*┋* *openai*
*┋* *chatgpt*
*┋* *open-gpt*
*┋* *deepseek*
*┋* *bing*
*┋* *gpt*
*┋* *dj*
*┋* *gpt3*
*┋* *gpt4*
*┋* *seekai*
*┋* *deep*
*╰───────────────────❒*
╭──────────●●►
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.main}
╰───────────●●►
*╭────❒⁠⁠⁠⁠* *⛱️ FUN-MENU ⛱️* *❒⁠⁠⁠⁠* 
*┋* *hack*
*┋* *nikal*
*┋* *hot*
*┋* *confused*
*┋* *moon*
*┋* *shy*
*┋* *sad*
*┋* *angry*
*┋* *heart*
*┋* *happy*
*╰───────────────────❒
╭──────────●●►
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.convert}
╰───────────●●►
╭──────────●●►
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.search}
╰───────────●●►
╭──────────●●►
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.group}
╰───────────●●►
╭──────────●●►
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.owner}
╰───────────●●►
╭──────────●●►
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.other}
╰───────────●●►
╭──────────●●►
 🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.tools}
╰───────────●●►

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ your bot name*`

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/de82e3.jpg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})
