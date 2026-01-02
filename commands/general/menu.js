const fs = require("fs");

module.exports = {
  command: ["menu", "menú", "help", "comandos", "commands"],
  description: "Muestra todos los comandos del bot en estilo tarjeta",
  category: "general",
  run: async (client, m, args, { prefix: _p }) => {
    try {

      const username = m.pushName || (await client.getName(m.sender)) || m.sender.split("@")[0];

      const menuImages = ["menu.jpg", "menu2.jpg"];
      const existingImages = menuImages.filter(img => fs.existsSync(`./src/${img}`));
      const menuImage = fs.readFileSync(`./src/${existingImages[Math.floor(Math.random() * existingImages.length)]}`);

      const txt = `
> ✰ 𝖧𝗈𝗅𝖺 𝖲𝗈𝗒 *${namebot}*, 𝖤𝗌𝗍𝖺 𝖾𝗌 𝗆𝗂 𝗅𝗂𝗌𝗍𝖺 𝖽𝖾 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌...
  
⌯ ᤳ݄፞🔥 \`𝖢𝗋𝖾𝖺𝖽𝗈𝗋𝖺\` : *@its.chinitaaa_*
⌯ ᤳ݄፞🔥 \`𝖴𝗌𝗎𝖺𝗋𝗂𝗈\` : *${username}*
⌯ ᤳ݄፞🔥 \`𝖵𝖾𝗋𝗌𝗂𝗈𝗇\` : *${version}*
⌯ ᤳ݄፞🔥 \`𝖬𝗈𝗍𝗈𝗋\` : *𝖡ᥲіᥣᥱᥡs*

> ★ 𝖲𝗈𝗅𝗂𝖼𝗂𝗍𝖺 𝖵𝖾𝗋 𝗅𝖺𝗌 𝗋𝖾𝗀𝗅𝖺𝗌 𝖽𝖾𝗅 𝖻𝗈𝗍 𝖼𝗈𝗇 𝖾𝗅 𝖼𝗈𝗆𝖺𝗇𝖽𝗈 *#reglas*.

˚ ₊ ‧ ୨🌸୧  — \`『 𝐀𝐍𝐈𝐌𝐄 』\` 
౨ৎ • #angry
౨ৎ • #dance
౨ৎ • #happy
౨ৎ • #hello
౨ৎ • #hug
౨ৎ • #kiss
౨ৎ • #love
౨ৎ • #sad

˚ ₊ ‧ ୨🌸୧  — \`『 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 』\` 
౨ৎ • #drive
౨ৎ • #dropbox
౨ৎ • #fb
౨ৎ • #mediafire
౨ৎ • #playaudio
౨ৎ • #playvideo
౨ৎ • #spotify
౨ৎ • #tiktok
౨ৎ • #twitter

˚ ₊ ‧ ୨🌸୧ — \`『 𝐅𝐔𝐍 』\` 
౨ৎ • #gay
౨ৎ • #jalame
౨ৎ • #formarpareja5
౨ৎ • #frase
౨ৎ • #piropo

˚ ₊ ‧ ୨🌸୧  — \`『 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 』\` 
౨ৎ • #info
౨ৎ • #creadora
౨ৎ • #reglas
౨ৎ • #help
౨ৎ • #ping
౨ৎ • #runtime
౨ৎ • #lid

˚ ₊ ‧ ୨🌸୧  — \`『 𝐆𝐑𝐎𝐔𝐏𝐒 』\` 
౨ৎ • #close
౨ৎ • #del
౨ৎ • #demote
౨ৎ • #hidetag
౨ৎ • #infogrupo
౨ৎ • #kick
౨ৎ • #kickall
౨ৎ • #link
౨ৎ • #on
౨ৎ • #open
౨ৎ • #promote
౨ৎ • #revoke
౨ৎ • #setdesc
౨ৎ • #setname
౨ৎ • #todos

˚ ₊ ‧ ୨🌸୧  — \`『 𝐎𝐖𝐍𝐄𝐑 』\` 
౨ৎ • #autoadmin
౨ৎ • #kick2
౨ৎ • #update

˚ ₊ ‧ ୨🌸୧  — \`『 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 』\` 
౨ৎ • #sticker

˚ ₊ ‧ ୨🌸୧  — \`『 𝐓𝐎𝐎𝐋𝐒 』\` 
౨ৎ • #cal
౨ৎ • #clima
౨ৎ • #horario
౨ৎ • #letra

> ${namebot} | ${author}

      `.trim();

      await client.sendMessage(
        m.chat,
        {
          image: menuImage,
          caption: txt,
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              title: namebot, 
              body: textbot, 
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
    } catch (e) {
      await client.sendMessage(m.chat, { text: `✰ Error en el menú:\n${e}` }, { quoted: m });
    }
  },
};

