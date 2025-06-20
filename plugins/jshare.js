const { SinhalaSub } = require('@sl-code-lords/movie-api');
const { cmd, commands } = require('../command');
const { PixaldrainDL } = require("pixaldrain-sinhalasub");
const path = require('path');
const fs = require('fs');
const config = require('../config')

cmd({
    pattern: "si1",
    desc: "Get movie download links.",
    category: "movie",
    react: "🎥",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const input = q.trim();
        const parts = input.split("&"); // Split input by '&'

        if (parts.length < 2) {
            return reply("Please provide both the download location (JID) and the movie link in the format: `.moviedl jid&movie_link`.");
        }

        const downloadLocation = parts[0].trim(); // First part as the download location (JID)
        const movieLink = parts[1].trim(); // Second part as the movie link
        
        const result = await SinhalaSub.movie(movieLink);
        if (!result.status) return reply("Movie details not found.");

        const movie = result.result;
        let message = `*${movie.title}*\n\n`;
        message += `📅 Release Date: ${movie.release_date}\n`;
        message += `✨ IMDb Rating: ${movie.IMDb_Rating}\n`;
        message += `🧛‍♂️ Director: ${movie.director.name}\n\n`;
        message += `${config.FOOTER}`;

        const imageUrl = movie.images && movie.images.length > 0 ? movie.images[0] : null;

        await conn.sendMessage(from, { image: { url: imageUrl }, caption: message }, { quoted: mek });

        const quality = "HD 720p";
        
        const directLink = await PixaldrainDL(movieLink, quality, "direct");
        
        if (directLink) {
            // Send the download link to the specified JID (downloadLocation)
            await conn.sendMessage(downloadLocation, { 
                document: { url: directLink },
                mimetype: 'video/mp4',
                fileName: `*${movie.title}.mp4`,
                caption: `${movie.title} - ${quality}\n\n${config.FOOTER}`
             });
            
            reply("The download has been sent to the specified location.\nබාගත කිරීම නිශ්චිත ස්ථානයට යවා ඇත.");
        } else {
            reply("Could not find the 720p download link. Please check the URL or try a different movie.");
        }
    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        return reply(`Error: ${e.message}`);
    }
});
