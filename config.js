const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝐃𝐈𝐋𝐒𝐇𝐀𝐍-𝐌𝐃=eBVUTabA#T9xro0bocV1IV1TO6Z51BNcuzSc8RdOUavRrmEYaAcc",
MONGODB: process.env.MONGODB || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
};
