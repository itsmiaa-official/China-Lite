const fs = require("fs");

module.exports = {
  command: ["menu", "menú", "help", "comandos", "commands"],
  description: "Muestra todos los comandos del bot en estilo tarjeta",
  category: "general",
  run: async (client, m, args, { prefix: _p }) => {
    try {
      await m.react("⏳");

      const username = m.pushName || (await client.getName(m.sender)) || m.sender.split("@")[0];

      // Imagen normal aleatoria
      const menuImages = ["menu.jpg", "menu2.jpg"];
      const existingImages = menuImages.filter(img => fs.existsSync(`./src/${img}`));
      const menuImage = fs.readFileSync(`./src/${existingImages[Math.floor(Math.random() * existingImages.length)]}`);

      // Icono arriba
      const icono = global.icono || null;

      const totalUsers = Object.keys(global.db.data.users).length;
      const totalCommands = Object.keys(global.plugins || {}).length;

      const txt = `
「💙」 ¡Hola! *${username}*, soy *${global.namebot || "Mi Bot"}*

> Aquí tienes la lista de comandos

❀ Prefijo: 
❀ Usuarios: ${totalUsers.toLocaleString()}
❀ Comandos: ${totalCommands}
❀ Versión: ${global.vs || "1.0.0"}
❀ Creador: ${global.etiqueta || "Chinita"}

> ✐ Powered by Arlette Xz
      `.trim();

      await client.sendMessage(
        m.chat,
        {
          image: menuImage,
          caption: txt,
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              title: global.namebot || "Mi Bot",
              body: global.textbot || "Bot personalizado",
              mediaType: 1,
              mediaUrl: "https://instagram.com/its.chinitaaa_",
              sourceUrl: "https://instagram.com/its.chinitaaa_",
              thumbnailUrl: icono,
              showAdAttribution: false,
              containsAutoReply: true,
              renderLargerThumbnail: false,
            },
            forwardingScore: 1,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: global.my?.ch || "120363403176894973@newsletter",
              serverMessageId: "1",
              newsletterName: global.my?.name1 || "【 ✰ 】Canal Oficial",
            },
          },
        },
        { quoted: m }
      );

      await m.react("✅");
    } catch (e) {
      await client.sendMessage(m.chat, { text: `✰ Error en el menú:\n${e}` }, { quoted: m });
    }
  },
};


/*const fs = require('fs');

module.exports = {
  command: ['menu', 'menú', 'help', 'comandos', 'commands'],
  description: 'Muestra todos los comandos del bot en un solo menú',
  category: 'main',
  run: async (client, m, args, { prefix }) => {
    try {
      const username = m.pushName || m.sender.split('@')[0];

      // Cargar imágenes del menú
      const menuImages = ['menu.jpg', 'menu2.jpg'];
      let existingImages = [];
      for (let imgName of menuImages) {
        const imgPath = `./src/${imgName}`;
        if (fs.existsSync(imgPath)) existingImages.push(imgPath);
      }

      // Elegir imagen aleatoria o usar icono global
      let menuImage = global.icono;
      if (existingImages.length > 0) {
        const randomIndex = Math.floor(Math.random() * existingImages.length);
        menuImage = fs.readFileSync(existingImages[randomIndex]);
      }

      // Información general del bot
      const totalUsers = Object.keys(global.db.data.users).length;
      const totalCommands = Object.keys(global.plugins || {}).length;

      // Texto completo del menú
      const menuText = `
「💙」 ¡Hola! *${username}*, Soy *${namebot}*
> Aquí tienes la lista de comandos.

╭┈ ↷
│❀ 𝗠𝗼𝗱𝗼 » Público
│ᰔ 𝗧𝗶𝗽𝗼 » principal
╰─────────────────

*COMANDOS DISPONIBLES:*

• #ping
• #help
      `.trim();

      // Enviar el menú
      await client.sendMessage(
        m.chat,
        {
          image: menuImage,
          caption: menuText,
          contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: my.ch,
              serverMessageId: '',
              newsletterName: my.name1
            }
          }
        },
        { quoted: m }
      );

    } catch (e) {
      await client.sendMessage(
        m.chat,
        { text: `✰ Error en el menú:\n${e}` },
        { quoted: m }
      );
    }
  }
};*/


/*const moment = require("moment-timezone");

module.exports = {
  command: ["help", "ayuda", "menu"],
  description: "Muestra los comandos",
  category: "general",
  run: async (conn, m, args) => {
    const cmds = [...global.comandos.values()];

    const userId = m.sender;

    let txt = `> ✰ 𝖧𝗈𝗅𝖺 𝖲𝗈𝗒 *${namebot}*, 𝖤𝗌𝗍𝖺 𝖾𝗌 𝗆𝗂 𝗅𝗂𝗌𝗍𝖺 𝖽𝖾 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌...
  
˙.꒷🔥.𖦹˙ \`𝖢𝗋𝖾𝖺𝖽𝗈𝗋𝖺\` : *@its.chinitaaa_*
˙.꒷🔥.𖦹˙ \`𝖴𝗌𝗎𝖺𝗋𝗂𝗈\` : *${m.pushName || "ᥙsᥙᥲrі᥆"}*
˙.꒷🔥.𖦹˙ \`𝖵𝖾𝗋𝗌𝗂𝗈𝗇\` : ${version}
˙.꒷🔥.𖦹˙ \`𝖬𝗈𝗍𝗈𝗋\` : *𝖡ᥲіᥣᥱᥡs*

> La versión original de 𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎 es totalmente privada, debido a que es un bot personalizado y creado exclusivamente para ${author}.
\n`;

    const categories = {};
    cmds.forEach((cmd) => {
      if (!cmd.command) return;
      const cat = (cmd.category || "sіᥒ ᥴᥲ𝗍ᥱg᥆rі́ᥲ").toLowerCase();
      if (!categories[cat]) categories[cat] = [];
      if (!categories[cat].some((c) => c.command[0] === cmd.command[0])) {
        categories[cat].push(cmd);
      }
    });

    for (const [cat, commands] of Object.entries(categories)) {
      const catName = cat.charAt(0).toUpperCase() + cat.slice(1);
      txt += `\`.  . ︵ ${catName}.  ◌Ⳋ𝅄\`\n`;
      commands.forEach((cmd) => {
        txt += `౨ৎ • #${cmd.command[0]}\n`;
      });
      txt += `\n`;
    }

    txt += `\`${namebot} | ${author}\``;

    await conn.sendMessage(
      m.chat,
      {
        text: txt,
        contextInfo: {
          mentionedJid: [userId],
          externalAdReply: {
            title: namebot,
            body: textbot,
            mediaType: 1,
            mediaUrl: "https://instagram.com/its.chinitaaa_",
            sourceUrl: "https://instagram.com/its.chinitaaa_",
            thumbnailUrl: banner,
            showAdAttribution: false,
            containsAutoReply: true,
            renderLargerThumbnail: false,
          },
          forwardingScore: 1,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: my.ch,
            serverMessageId: "1",
            newsletterName: my.name1,
          },
        },
      },
      { quoted: m }
    );
  },
};
*/
