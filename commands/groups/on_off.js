module.exports = {
  command: ["on", "off"],
  description: "Activa o desactiva funciones del grupo",
  category: "groups",
  use: "antilink | antifake | welcome",
  isGroup: true,
  isAdmin: true,
  isBotAdmin: true,

  run: async (client, m, args) => {
    const cmd = m.text.trim().split(" ")[0].slice(1).toLowerCase();
    const setting = args[0]?.toLowerCase();
    if (!setting) {
      return m.reply(
        "Debes especificar la *función*\n\n`Ejemplo`\n!on antilink\n!off antifake\n!on welcome",
      );
    }

    if (!global.db.data.chats[m.chat]) global.db.data.chats[m.chat] = {};
    const chatData = global.db.data.chats[m.chat];

    switch (setting) {
      case "antilink":
        chatData.antilink = cmd === "on";
        m.reply(
          `La función *Antilink* ha sido *${cmd === "on" ? "activada" : "desactivada"}*`,
        );
        break;

      case "antifake":
        chatData.antifake = cmd === "on";
        m.reply(
          `La función *Anti-Fake* ha sido *${cmd === "on" ? "activada" : "desactivada"}*`,
        );
        break;

      case "welcome":
        chatData.welcome = cmd === "on";
        m.reply(
          `La función *Bienvenida/Despedida* ha sido *${cmd === "on" ? "activada" : "desactivada"}*`,
        );
        break;

      default:
        m.reply(
          "Opción no *válida*\n\n- Opciones:\n`antilink`\n`antifake`\n`welcome`\n\n> Ejemplo: !on antifake",
        );
        break;
    }
  },
};

/*module.exports = {
  command: ["on", "off"],
  description: "Activa o desactiva funciones del grupo",
  category: "groups",
  use: "antilink",
  isGroup: true,
  isAdmin: true,
  isBotAdmin: true,
  run: async (client, m, args) => {
    const cmd = m.text.trim().split(" ")[0].slice(1).toLowerCase();
    const setting = args[0]?.toLowerCase();
    if (!setting) {
      return m.reply(
        "Debes especificar la *función*\n\n`Ejemplo`\n!on antilink\n!off antilink",
      );
    }
    const chatData = global.db.data.chats[m.chat];

    switch (setting) {
      case "antilink":
        chatData.antilink = cmd === "on";
        m.reply(
          `La función *Antilink* ha sido *${cmd === "on" ? "activada" : "desactivada"}*`,
        );
        break;

      default:
        m.reply(
          "Opción no *válida*\n\n- Opciones:\n`antilink`\n\n\n> Ejemplo: .on antilink",
        );
        break;
    }
  },
};
*/
