const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    alias: "allmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` 👋ℍ𝕖𝕝𝕝𝕠 *${pushname}*...!

🌟 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗗𝗜𝗟𝗦𝗛𝗔𝗡 𝗠𝗗 🌟

┃★╭──────────────
┃★│ Owner : *Dilshan Ashinsa*
┃★│ Baileys : *Multi Device*
┃★│ Type : *NodeJs*
┃★│ Platform : *Replit*
┃★│ Mode : *Public* 
┃★│ Prifix : *[.]*
┃★│ Version : v 2.0.0 𝗕𝗘𝗧𝗔
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
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
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-MENU 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *update*
*┋* *restart*
*┋* *shutdown*
*┋* *boom*
*┋* *groupvcf*
*┋* *vcf*
*┋* *gjid*
*┋* *hidetag*
*┋* *clearchats*
*┋* *unblock*
*┋* *block*
*┋* *setpp*
*┋* *broadcast*
*┋* *jid*
*┋* *count*
*┋* *setting*
*┋* *settings*
*╰───────────────────❒*
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
*╭────❒⁠⁠⁠⁠* *🔄 CONVERTER-MENU 🔄* *❒⁠⁠⁠⁠* 
*┋* *tts2*
*┋* *tourl*
*┋* *url*
*┋* *img2url*
*┋* *imgtourl*
*┋* *s*
*┋* *stickergif*
*┋* *sticker*
*┋* *stake*
*┋* *rename*
*┋* *take*
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
*╭────❒⁠⁠⁠⁠* *🏜️ MAIN-MENU 🏜️* *❒⁠⁠⁠⁠* 
*┋* *animegirl1*
*┋* *animegirl2*
*┋* *animegirl3*
*┋* *animegirl4*
*┋* *animegirl5*
*┋* *Coming Soon*
*┋* *couple*
*┋* *cpp*
*┋* *couplepp*
*┋* *searchpin*
*┋* *pinterest*
*┋* *image*
*┋* *img*
*┋* *wallpaper*
*┋* *randomwall*
*┋* *rw*
*╰───────────────────❒*
╭━━〔 *Anime Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• dog
┃◈┃• king
┃◈┃• animegirl
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Other Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• fact
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• yts
┃◈┃• ytv
┃◈└───────────┈⊷
╰──────────────┈⊷

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪʟꜱʜᴀɴ ᴍᴅ`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/zqu8s7.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363419308807922@newsletter',
                        newsletterName: '𝗗𝗜𝗟𝗦𝗛𝗔𝗡_ᴍᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Awais-star-a11y/TESTING-REPO/raw/refs/heads/main/VID-20250118-WA0022.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
