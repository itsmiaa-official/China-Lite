module.exports = {
  command: ["autoadmin"],
  description: "El creador se hace admin automáticamente",
  category: "owner",
  isGroup: true,
  botAdmin: true,
  isOwner: true, 

  run: async (client, m) => {
    if (!global.isOwner(m.sender)) {
      return m.reply("> ✰ Este comando solo puede usarlo mi creadora.");
    }

    try {
      await client.groupParticipantsUpdate(m.chat, [m.sender], "promote");
      m.reply("> ✰ Ahora la creadora tiene poderes de *admin*.");
    } catch (e) {
      console.error(e);
      m.reply("> ✰ No se pudo dar admin automáticamente.");
    }
  }
};
