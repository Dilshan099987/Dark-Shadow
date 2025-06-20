const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
    // group Join Fake Quoted Create By Sulaksha
        const thumbBuffer = await axios.get('https://i.ibb.co/dHwhYTC/SulaMd.jpg', { responseType: 'arraybuffer' });

        // Fake quoted message
        const sulagclink = {
            key: {
                remoteJid: "120363390463673071@g.us", //ඔයාගේ Group එකේ Jid එක දාන්න
                fromMe: false,
                id: 'ABCDEF1234567890', // ඕක වෙනස් කරන්න එපා
                participant: '0@s.whatsapp.net' // ඕක වෙනස් කරන්න එපා
            },
            message: {
                groupInviteMessage: {
                    groupJid: "120363026460154728@g.us", //ඔයාගේ Group එකේ Jid එක දාන්න
                    inviteCode: "Sula123", 
                    groupName: "SULA-MD OFFICIAL",
                    caption: "Click to Join",
                    jpegThumbnail: Buffer.from(thumbBuffer.data)
                }
            }
        };

        await conn.sendMessage(
            from,
            {
                image: { url: 'https://i.ibb.co/dHwhYTC/SulaMd.jpg' },
                caption: envSettings,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 01,
                    isForwarded: true
                }
            },
            { quoted: sulagclink }
        );
        // Generate system status message
        const status = `👋ℍ𝔼𝕃𝕃𝕆𝕎 *${pushname}*

🌟𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝔻𝕀𝕃𝕊ℍ𝔸ℕ 𝕄𝔻 𝔹𝕆𝕋🌟 ...!  
   
┏━❮ 🩵𝐃𝐈𝐋𝐒𝐇𝐀𝐍 𝐌𝐃🩵 ❯━
┃◈┃🤖ʙᴏᴛ ɴᴀᴍᴇ :ᴅɪʟꜱʜᴀɴ ᴍᴅ
┃◈┃🔖ᴠᴇʀsɪᴏɴ : 2.0.0 ʙᴇᴛᴀ
┃◈┃📟ᴘʟᴀᴛғᴏʀᴍ: ʀᴇᴘʟɪᴛ
┃◈┃👨‍💻ᴏᴡɴᴇʀ    : ᴅɪʟꜱʜᴀɴ ᴀꜱʜɪɴꜱᴀ
┃◈┃📆ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())} 
┃◈┃📈ʀᴀᴍ ᴜsᴀɢᴇ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃◈┗━━━━━━━━━━━━━━𖣔𖣔
╰──────────────┈⊷

> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪʟꜱʜᴀɴ ᴍᴅ`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/uod3xi.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419308807922@newsletter',
                    newsletterName: '𝗗𝗜𝗟𝗦𝗛𝗔𝗡_ᴍᴅ',
                    serverMessageId: 143
                }
            }
        }, { quoted: sulagclink });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
