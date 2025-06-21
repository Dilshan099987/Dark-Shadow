const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://files.catbox.moe/b7hkxj.jpg';

cmd({
    pattern: "menu",
    react: "📜",
    alias: ["panel", "commands"],
    desc: "Get Bot Menu",
    category: "main",
    use: '.menu',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `
╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
 *Hi 👋*  *${pushname}*
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *👨‍💻 Owner*:Chethiya 
┃◈┃• *🧬 Version*: 0.0.1 BETA
┃◈┃• *⚙️ Platform:-* ${os.hostname()}     
  *Chethiya_MD Command List*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> *╭────────────●●►*
  *│1. DOWNLOAD MENU*📥
  *│2. SEARCH MENU*📚
  *│3. AI MENU*🤖
  *│4. OWNER MENU*🤴
  *│5. GROUP MENU*🃏
  *│6. INFO MENU*🪂
  *│7. CONVERTER MENU*🔮
  *│8. FAN MENU*🪀
  *│9. WALLPAPERS MENU*🖼
  *│10. OTHER MENU*
> *╰────────────●●►*

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯* 
`;

(
     
        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
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

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯*
`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-MENU 🔍* *❒⁠⁠⁠⁠* 
*┋* *tiktokstalk*
*┋* *tiktoksearch*
*┋* *movie*
*┋* *weather*
*┋* *hirucheck*
*┋* *news*
*┋* *hirunews*
*┋* *newshiru*
*┋* *hirulk*
*┋* *tiktoks*
*┋* *tiks*
*┋* *ttstalk*
*┋* *tstalk*
*╰───────────────────❒*

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯*
`;
                        break;
                    case '3': // AI MENU
                        responseText = `
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

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯*
`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
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

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯*
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 GROUP-MENU 👥* *❒⁠⁠⁠⁠* 
*┋* *kickall*
*┋* *add*
*┋* *shutdown*
*┋* *hidetag*
*┋* *gjid*
*┋* *jid*
*┋* *clearchats*
*┋* *unblock*
*┋* *block*
*┋* *setpp*
*┋* *broadcast*
*┋* *Owner*
*┋* *tagall*
*┋* *groupvcf*
*┋* *vcf*
*╰───────────────────❒*

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯*
`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *💾 INFO-MENU 💾* *❒⁠⁠⁠⁠* 
*┋* *alive*
*┋* *menu*
*┋* *ping*
*┋* *update*
*┋* *Owner*
*┋* *date*
*┋* *king*
*┋* *status*
*┋* *botinfo*
*┋* *system*
*╰───────────────────❒*

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯*
`;
                        break;
                    case '7': // CONVERTER MENU
                        responseText = `
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

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯*
`;
                        break;
                    case '8': // WALLPAPERS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *⛱️ FAN-MENU ⛱️* *❒⁠⁠⁠⁠* 
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
*╰───────────────────❒*

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯*
`;
                        break;
                    case '9': // WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-MENU 🏜️* *❒⁠⁠⁠⁠* 
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

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯*
`;
                        break;
                    case '10': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-MENU 🌐* *❒⁠⁠⁠⁠* 
*┋* *pair*
*┋* *getpair*
*┋* *clonebot*
*┋* *logo*
*┋* *calculate*
*┋* *count*
*┋* *countx*
*┋* *shapar*
*┋* *date*
*┋* *calculate*
*┋* *timenow*
*┋* *rate*
*╰───────────────────❒*

> *🄿🄾🅆🄴🅁🄳 🅱🆈  😈 𝕮𝖍𝖊𝖙𝖍𝖎𝖞𝖆_𝕸𝕯*
`;
                        break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-10)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠ An error occurred: ${e.message}*`);
    }
});
