module.exports = async (client, m) => {
  if (!global.db.data.chats[m.chat]?.antilink) return;

  let linksProhibidos = {
    telegram: /telegram\.me|t\.me/gi,
    facebook: /facebook\.com/gi,
    whatsapp: /chat\.whatsapp\.com/gi,
    youtube: /youtu\.be|youtube\.com/gi,
  };

  function validarLink(mensaje, tipos) {
    for (let tipo of tipos) {
      if (mensaje.match(linksProhibidos[tipo])) {
        return true;
      }
    }
    return false;
  }

  let enlacesDetectados = ["whatsapp", "telegram"];

  if (validarLink(m.text, enlacesDetectados)) {
    try {
      let gclink =
        "https://chat.whatsapp.com/" + (await client.groupInviteCode(m.chat));
      let isLinkThisGc = new RegExp(gclink, "i");
      let isGcLink = isLinkThisGc.test(m.text);

      if (isGcLink) {
        return client.sendMessage(
          m.chat,
          { text: `El enlace *pertenece* a este grupo...` },
          { quoted: m },
        );
      }

      await client.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: m.key.id,
          participant: m.key.participant,
        },
      });

      client.sendMessage(
        m.chat,
        {
          text: `Anti Enlaces\n\n@${m.sender.split("@")[0]} mandaste un enlace *prohibido*`,
          contextInfo: { mentionedJid: [m.sender] },
        },
        { quoted: m },
      );

      client.groupParticipantsUpdate(m.chat, [m.sender], "remove");
    } catch {
      console.debug = () => {};
    }
  }
};
