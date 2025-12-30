const moment = require("moment-timezone");

module.exports = {
  command: ["help", "ayuda", "menu"],
  description: "Muestra los comandos",
  category: "general",
  run: async (conn, m, args) => {
    const cmds = [...global.comandos.values()];

    const jam = moment.tz("America/Argentina/Buenos_Aires").format("HH:mm:ss");
   /* const ucapan =
      jam < "05:00:00"
        ? "🄱uen 🄳ía 🌞"
        : jam < "11:00:00"
        ? "🄱uen 🄳ía 🌞"
        : jam < "15:00:00"
        ? "🄱uenas 🅃ardes 🌄"
        : jam < "19:00:00"
        ? "🄱uenas 🅃ardes 🌄"
        : "🄱uenas 🄽oches 🌛";*/

    const userId = m.sender;

    let txt = `> ✰ 𝖧𝗈𝗅𝖺 𝖲𝗈𝗒 *${namebot}*, 𝖤𝗌𝗍𝖺 𝖾𝗌 𝗆𝗂 𝗅𝗂𝗌𝗍𝖺 𝖽𝖾 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌...
  
˙.꒷🔥.𖦹˙ \`𝖢𝗋𝖾𝖺𝖽𝗈𝗋𝖺\` : *@its.chinitaaa_*
˙.꒷🔥.𖦹˙ \`𝖴𝗌𝗎𝖺𝗋𝗂𝗈\` : *${m.pushName || "ᥙsᥙᥲrі᥆"}*
˙.꒷🔥.𖦹˙ \`𝖵𝖾𝗋𝗌𝗂𝗈𝗇\` : ${version}
˙.꒷🔥.𖦹˙ \`𝖬𝗈𝗍𝗈𝗋\` : *𝖡ᥲіᥣᥱᥡs*

> 𝖫𝖺 𝗏𝖾𝗋𝗌𝗂𝗈́𝗇 𝗈𝗋𝗂𝗀𝗂𝗇𝖺𝗅 𝖽𝖾 𝖾𝗌𝗍a 𝖻𝗈𝗍 𝖾𝗌 𝗉𝗋𝗂𝗏𝖺𝖽𝖺, la 𝖻𝗈𝗍 𝗈𝗋𝗂𝗀𝗂𝗇𝖺𝗅 𝖿𝗎𝖾 𝖼𝗋𝖾𝖺𝖽𝗈 𝖾𝗑𝖼𝗅𝗎𝗌𝗂𝗏𝖺𝗆𝖾𝗇𝗍𝖾 𝗉𝖺𝗋𝖺 ${author}.

۪֔⏜꯭ᩧᰰ᮫̩̥̩̥︵ּ۪۪۪֘᷼𓇺꥓᮫ּ̥̩̥̩̥̊᷼︵᮫ֵֹ۪۪۪꤮ 「꯭ּ✿⃘꯭֟፝͝ ᮫ּ」 ֵ꤮ֹ֪̊︵᮫̥̩̥̩̥֔᷼𓇹᮫ֹ۪۪𝆬𝆬᷼︵꯭ᩙᰰ᮫̩̥̩̥⏜ֵֹ۪۪۪۪
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
