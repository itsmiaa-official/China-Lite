module.exports = {
  event: "group-participants.update",

  run: async (client, m, { participants, action }) => {
    if (action !== "add") return;

    let chat = global.db.data.chats[m.chat];
    if (!chat || !chat.antifake) return;

    // Prefijos o números no permitidos
    const blocked = ["55", "51"]; // Brasil 🇧🇷, Perú 🇵🇪
    // cualquier número que empiece con estos será expulsado

    for (let user of participants) {
      let number = user.split("@")[0];
      let isBlocked = blocked.some(code => number.startsWith(code));

      if (isBlocked) {
        await client.sendMessage(m.chat, {
          text: `🚫 *ANTI-FAKE ACTIVADO*\n\n👤 @${number}\n📵 Número no permitido`,
          mentions: [user],
        });

        await client.groupParticipantsUpdate(m.chat, [user], "remove");
      }
    }
  },
};
