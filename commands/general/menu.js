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
  
˙.꒷🔥.𖦹˙ \`𝖢𝗋𝖾𝖺𝖽𝗈𝗋𝖺\` : *@its.chinitaaa_*
˙.꒷🔥.𖦹˙ \`𝖴𝗌𝗎𝖺𝗋𝗂𝗈\` : *${username}*
˙.꒷🔥.𖦹˙ \`𝖵𝖾𝗋𝗌𝗂𝗈𝗇\` : *${version}*
˙.꒷🔥.𖦹˙ \`𝖬𝗈𝗍𝗈𝗋\` : *𝖡ᥲіᥣᥱᥡs*

> La versión original de 𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎 es totalmente privada, debido a que es un bot personalizado y creado exclusivamente para 𝕮𝖍𝖎𝖓𝖆.

\`.  . ︵ Anime.  ◌Ⳋ𝅄\`
౨ৎ • #angry
౨ৎ • #dance
౨ৎ • #happy
౨ৎ • #hello
౨ৎ • #hug
౨ৎ • #kiss
౨ৎ • #love
౨ৎ • #sad

\`.  . ︵ Downloader.  ◌Ⳋ𝅄\`
౨ৎ • #drive
౨ৎ • #dropbox
౨ৎ • #fb
౨ৎ • #mediafire
౨ৎ • #playaudio
౨ৎ • #playvideo
౨ৎ • #spotify
౨ৎ • #tiktok
౨ৎ • #twitter

\`.  . ︵ Fun.  ◌Ⳋ𝅄\`
౨ৎ • #gay
౨ৎ • #jalame
౨ৎ • #formarpareja5
౨ৎ • #frase
౨ৎ • #piropo

\`.  . ︵ General.  ◌Ⳋ𝅄\`
౨ৎ • #info
౨ৎ • #help
౨ৎ • #ping
౨ৎ • #runtime
౨ৎ • #lid

\`.  . ︵ Groups.  ◌Ⳋ𝅄\`
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

\`.  . ︵ Owner.  ◌Ⳋ𝅄\`
౨ৎ • #autoadmin
౨ৎ • #kick2
౨ৎ • #update

\`.  . ︵ Stickers.  ◌Ⳋ𝅄\`
౨ৎ • #sticker

\`.  . ︵ Tools.  ◌Ⳋ𝅄\`
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

