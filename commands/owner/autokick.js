module.exports = {
  command: ["kick2"],
  description: "El creador puede expulsar a un miembro sin ser admin",
  category: "owner",
  isGroup: true,
  botAdmin: true,
  isOwner: true,

  run: async (client, m, args) => {
    if (!m.mentionedJid?.[0] && !m.quoted) {
      return m.reply("> ✰ Etiqueta o responde al usuario que quieres expulsar.");
    }

    const user = m.mentionedJid?.[0] || m.quoted.sender;

    try {
      await client.groupParticipantsUpdate(m.chat, [user], "remove");
      m.reply("> ✰ Usuario expulsado con el poder de la creadora.");
    } catch (e) {
      console.error(e);
      m.reply("> ✰ No se pudo expulsar al usuario.");
    }
  }
};
