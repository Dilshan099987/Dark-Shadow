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
        let dec = `╭━━━〔 Hello *${pushname}* gshjsjsjwjwkwkw━━━┈⊷

*👋𝗛𝗲𝗹𝗹𝗼 𝘄𝗲𝗹𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 DILSHAN MD 🎊*
    
╭──────────────
┃👨‍💻│ Owner : DILSHAN MD
┃🧾│ Baileys : Multi Device
┃📌│ Type : NodeJs
┃🔖│ Platform : Replit
┃🔰│ Mode : [public]
┃☣️│ Prifix : [.]
┃🛡️│ Version : *3.0.0 Bᴇᴛᴀ*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *Download Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• facebook
┃◈┃• mediafire
┃◈┃• tiktok
┃◈┃• twitter
┃◈┃• Insta
┃◈┃• apk
┃◈┃• img
┃◈┃• play
┃◈┃• play2
┃◈┃• audio
┃◈┃• video
┃◈┃• video2
┃◈┃• ytmp3
┃◈┃• ytmp4
┃◈┃• song
┃◈┃• darama
┃◈┃• gdrive
┃◈┃• smovie
┃◈┃• baiscope 
┃◈┃• ginisilia 
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Group Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• grouplink
┃◈┃• add
┃◈┃• remove
┃◈┃• kick
┃◈┃• promote 
┃◈┃• demote
┃◈┃• dismiss 
┃◈┃• revoke
┃◈┃• setgoodbye
┃◈┃• setwelcome
┃◈┃• delete 
┃◈┃• getpic
┃◈┃• ginfo
┃◈┃• delete 
┃◈┃• disappear on
┃◈┃• disappear off
┃◈┃• disappear 7D,24H
┃◈┃• allreq
┃◈┃• updategname
┃◈┃• updategdesc
┃◈┃• joinrequests
┃◈┃• senddm
┃◈┃• nikal
┃◈┃• mute
┃◈┃• unmute
┃◈┃• lockgc
┃◈┃• unlockgc
┃◈┃• invite
┃◈┃• tag
┃◈┃• hidetag
┃◈┃• tagall
┃◈┃• tagadmins
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Owner Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• listcmd
┃◈┃• allmenu
┃◈┃• repo
┃◈┃• block
┃◈┃• unblock
┃◈┃• fullpp
┃◈┃• setpp
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• updatecmd
┃◈┃• alive
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Fun Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• insult
┃◈┃• hack
┃◈┃• joke
┃◈┃• heart 
┃◈┃• happy 
┃◈┃• sad
┃◈┃• angry 
┃◈┃• shy
┃◈┃• kiss
┃◈┃• moon
┃◈┃• cunfuzed
┃◈┃• hand
┃◈┃• nikal
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Convert Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• sticker
┃◈┃• sticker2
┃◈┃• fancy
┃◈┃• take
┃◈┃• tomp3
┃◈┃• tts
┃◈┃• trt
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Ai Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ai
┃◈┃• gpt
┃◈┃• meta
┃◈┃• blackbox
┃◈┃• gpt4
┃◈┃• bing
┃◈┃• copilot
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Main Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• ping2
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
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
> ©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙳𝙸𝙻𝚂𝙷𝙰𝙽 𝙼𝙳
> ©ᴘᴏᴡᴇʀᴅ ʙʏ ᴅɪʟꜱʜᴀɴ ᴍᴅ`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/Kx3sxSfr/dinuzzmd.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363369260614615@newsletter',
                        newsletterName: 'AWAIS MD',
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
