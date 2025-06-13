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
        let dec = `👋𝗛𝗘𝗟𝗟𝗢𝗪 *${pushname}* 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝙳𝙸𝙻𝚂𝙷𝙰𝙽 𝙼𝙳✨🌟

┃★╭──────────────
┃🧑‍💻│ Owner : Dilshan Ashinsa
┃🧾│ Baileys : Multi Device
┃📌│ Type : NodeJs
┃🔖│ Platform : Replit
┃🔰│ Mode : Public 
┃☣️│ Prifix : [.]
┃🛡️│ Version : v 2.0.0 𝗕𝗘𝗧𝗔
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *Download Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• fb - [urL]
┃◈┃• mediafire - [urL]
┃◈┃• tiktok - [urL]
┃◈┃• gitclone - [Repo urL]
┃◈┃• likee - [urL]
┃◈┃• pindl (pinterest) - [urL]
┃◈┃• apk
┃◈┃• img
┃◈┃• mp3
┃◈┃• video
┃◈┃• video4
┃◈┃• ytmp4
┃◈┃• song
┃◈┃• song9
┃◈┃• play2
┃◈┃• ytaudio
┃◈┃• ytvideo4
┃◈┃• mp4
┃◈┃• xvdl
┃◈┃• urL (ඕනම පොටෝ එහෙක)
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Group Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• mute
┃◈┃• unmute
┃◈┃• lockgs
┃◈┃• unlockgs
┃◈┃• leave
┃◈┃• updategname
┃◈┃• updategdesc
┃◈┃• join
┃◈┃• invite
┃◈┃• revoke
┃◈┃• kick
┃◈┃• promote
┃◈┃• demote
┃◈┃• tagall
┃◈┃• hidetag
┃◈┃• taggp
┃◈┃• ginfo
┃◈┃• kickall
┃◈┃• approve
┃◈┃• requests
┃◈┃• accept
┃◈┃• reject
┃◈┃• del
┃◈┃• block
┃◈┃• add
┃◈┃• end
┃◈┃• tagadmin
┃◈┃• boom
┃◈┃• shutdown
┃◈┃• broadcast
┃◈┃• clearchats
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Owner Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• owner
┃◈┃• menu
┃◈┃• repo
┃◈┃• block
┃◈┃• unblock
┃◈┃• fullpp
┃◈┃• setpp
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• alive
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid
┃◈┃• msgall
┃◈┃• system
┃◈┃• pair
┃◈┃• about
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Fun Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• define
┃◈┃• dog
┃◈┃• fancy
┃◈┃• fact
┃◈┃• joke
┃◈┃• quote
┃◈┃• happy
┃◈┃• heart
┃◈┃• angry
┃◈┃• sad
┃◈┃• shy
┃◈┃• hack
┃◈┃• moon
┃◈┃• confuzed
┃◈┃• hot
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Convert Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• sticker
┃◈┃• fancy
┃◈┃• trt
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Ai Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ai
┃◈┃• gpt
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
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Anime Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• dog
┃◈┃  niro
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
┃◈┃• weather
┃◈┃• srepo
┃◈┃• save
┃◈┃• gpass
┃◈┃• githubstalk
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
