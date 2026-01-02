const ownerNumber = ["923297474483"];

module.exports = {
  command: ["owner", "creadora", "dueña"],
  description: "Muestra la información de la creadora del bot",
  category: "general",

  run: async (client, m) => {
    await m.react("👑");

    const text = `
👑 *CREADORA DEL BOT*
━━━━━━━━━━━━━━━
💖 Nombre: ${author}
👩‍💻 Rol: *Owner / Desarrolladora*
🤖 Bot: ${namebot}
🌸 Estado: *Bot privado y personalizado*
━━━━━━━━━━━━━━━
📌 Para soporte o consultas:
_Toca el contacto de abajo_
`;

    // Enviar contacto
    await client.sendMessage(
      m.key.remoteJid,
      {
        contacts: {
          displayName: "𝕮𝖍𝖎𝖓𝖆 💋",
          contacts: ownerNumber.map(num => ({
            vcard: `BEGIN:VCARD
VERSION:3.0
FN:Chinita
ORG:𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎 (𝕷𝖎𝖙𝖊);
TEL;type=CELL;type=VOICE;waid=${num}:${num}
END:VCARD`
          }))
        }
      },
      { quoted: m }
    );
    await client.sendMessage(
      m.key.remoteJid,
      {
        text: text,
        contextInfo: {
          externalAdReply: {
            title: "𝕮𝖍𝖎𝖓𝖆 💋 | ¡𝖮𝗐𝗇𝖾𝗋! 👑",
            body: "𝗕𝗼𝘁 𝗣𝗲𝗿𝘀𝗼𝗻𝗮𝗹𝗶𝘇𝗮𝗱𝗼 • 𝗣𝗿𝗶𝘃𝗮𝗱𝗼 ",
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: false,
            thumbnailUrl: catalogo, // podés cambiarla
            sourceUrl: "https://instagram.com/its.chinitaaa_"
          }
        }
      },
      { quoted: m }
    );
  }
};
