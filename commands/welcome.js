module.exports = {
  event: "group-participants.update",

  run: async (client, m, { participants, action }) => {
    const chatData = global.db.data.chats[m.chat];
    if (!chatData || !chatData.welcome) return;

    for (let user of participants) {
      const number = user.split("@")[0];

      // Texto de bienvenida/despedida
      let text = "";
      if (action === "add") {
        text = `✨ ¡Bienvenido/a al grupo!\n\n👤 @${number}\n📌 Lee las reglas y disfruta del grupo`;
      } else if (action === "remove") {
        text = `👋 ¡Hasta luego!\n\n@${number} salió del grupo`;
      } else continue;

      // Enviar mensaje estilo tarjeta
      await client.sendMessage(m.chat, {
        text,
        mentions: [user],
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: "🌸 Starlights Bot",
            body: "Tu bot siempre activo",
            mediaType: 2,
            thumbnail: Buffer.from(await (await fetch("https://i.imgur.com/6LQ9i1R.png")).arrayBuffer()), // Mini imagen de la tarjeta
            sourceUrl: "https://github.com/miaoficial02/Starlights"
          }
        }
      });
    }
  },
};
