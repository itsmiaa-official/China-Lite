
const os = require("os");

module.exports = {
  command: ["runtime", "uptime"],
  description: "Muestra el tiempo activo del bot",
  category: "general",

  run: async (client, m) => {
    const uptime = process.uptime();

    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const runtimeText = `
⏱️ *TIEMPO ACTIVO DEL BOT*

🗓️ \`Días\` : ${days}
🕒 \`Horas\` : ${hours}
⏰ \`Minutos\` : ${minutes}
⏱️ \`Segundos\` : ${seconds}

🤖 Estado: *Online*
`.trim();

    await client.sendMessage(
      m.chat,
      {
        text: runtimeText,
        contextInfo: {
          externalAdReply: {
            title: namebot,
            body: "Tiempo activo en ejecución",
            mediaType: 1,
            thumbnailUrl: catalogo, // puedes cambiarla
            sourceUrl: "https://github.com/miaoficial02",
            renderLargerThumbnail: false
          }
        }
      },
      { quoted: m }
    );
  }
};
