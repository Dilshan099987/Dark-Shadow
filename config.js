const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "mUQHQZhR#CXzwIL1um8sRwH0rL1krUXc31RI-O6BTXCuP7w7gW9k",
    MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
    MODE: process.env.MODE || "private",

    AUTO_REPLY: convertToBool(process.env.AUTO_REPLY),
    AUTO_VOICE: convertToBool(process.env.AUTO_VOICE),
    AUTO_STICKER: convertToBool(process.env.AUTO_STICKER),
    AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS),
    AUTO_REACT_STATUS: convertToBool(process.env.AUTO_REACT_STATUS),
    ALWAYS_OFFLINE: convertToBool(process.env.ALWAYS_OFFLINE, 'false'),// default 'false' fix
    AUTO_TYPING: convertToBool(process.env.AUTO_TYPING),
    READ_MESSAGE: convertToBool(process.env.READ_MESSAGE),
    RECORDING: convertToBool(process.env.RECORDING),
    READ_COMMAND: convertToBool(process.env.READ_COMMAND),
    AUTO_REACT: convertToBool(process.env.AUTO_REACT),
    ANTI_LINK: convertToBool(process.env.ANTI_LINK, 'false'),
    ANTI_DELETE: convertToBool(process.env.ANTI_DELETE, 'false'),
    ANTI_CALL: convertToBool(process.env.ANTI_CALL, 'false'),
    ANTI_BAD: convertToBool(process.env.ANTI_BAD, 'false'),
    ANTI_BOT: convertToBool(process.env.ANTI_BOT, 'false'),
    AUTO_BLOCK: convertToBool(process.env.AUTO_BLOCK, 'false'),
    BAD_NO_BLOCK: convertToBool(process.env.BAD_NO_BLOCK, 'false'),
    AI_CHAT_BOT: convertToBool(process.env.AI_CHAT_BOT, 'false'),
    AUTO_NEWS_SENDER: convertToBool(process.env.AUTO_NEWS_SENDER, 'false'),
    AUTO_TIKTOK_SENDER: convertToBool(process.env.AUTO_TIKTOK_SENDER, 'false'),
    AI_REPLY: convertToBool(process.env.AI_REPLY, 'false'),
}
