const moment = require("moment-timezone");

module.exports = {
  command: ["menu", "help", "ayuda"],
  description: "Muestra el menú principal con video o gif",
  category: "general",
  run: async (client, m, args) => {
    const jam = moment.tz("America/Argentina/Buenos_Aires").format("HH:mm:ss");
    const saludo =
      jam < "05:00:00"
        ? "🌙 Buen día"
        : jam < "11:00:00"
        ? "☀️ Buen día"
        : jam < "15:00:00"
        ? "🌤️ Buenas tardes"
        : jam < "19:00:00"
        ? "🌆 Buenas tardes"
        : "🌙 Buenas noches";

    // contacto citado (para que aparezca como reenviado)
    const fkontak = {
      key: {
        participant: "0@s.whatsapp.net",
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        contactMessage: {
          displayName: `${m.pushName || "Usuario"}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || "Usuario"};;;\nFN:${m.pushName || "Usuario"}\nitem1.TEL;waid=${
            m.sender.split("@")[0]
          }:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        },
      },
    };

    // 🌟 acá podés escribir el texto del menú como quieras:
    const textoMenu = `
${saludo}, *${m.pushName || "Usuario"}* 💫

✦ Bienvenid@ a *Starlights Bot*  
Creadora: 𝕮𝖍𝖎𝖓𝖆 💋  
Versión: 1.0.0  
Librería: 𝖡𝖺𝗂𝗅𝖾𝗒𝗌 𝗠𝗗  

📜 *Menú principal:*  
• #info  
• #grupos  
• #herramientas  
• #descargas  
• #owner  

> © 2025 Starlights ✦
`.trim();

    // 🌌 URL de tu video o gif (MP4 recomendado)
    const videoUrl = "https://files.catbox.moe/wacw2i.mp4"; // <-- Cambialo por tu link

    await client.sendMessage(
      m.chat,
      {
        video: { url: videoUrl },
        caption: textoMenu,
        gifPlayback: true, // hace que se repita como gif si es corto
        contextInfo: {
          forwardingScore: 1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363345778623279@newsletter", // tu canal
            serverMessageId: "1",
            newsletterName: "🌟 Starlights Channel",
          },
          externalAdReply: {
            title: "⭑ 𝗦𝘁𝗮𝗿𝗹𝗶𝗴𝗵𝘁𝘀 - 𝗕𝗼𝘁 🌟",
            body: "Creado con amor por 𝕮𝖍𝖎𝖓𝖆 💫",
            thumbnailUrl: "https://files.catbox.moe/e1lirs.jpg", // imagen de vista previa
            sourceUrl: "https://starlights.vercel.app", // link de tu canal o página
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        },
      },
      { quoted: fkontak }
    );
  },
};
