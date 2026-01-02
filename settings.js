const fs = require("fs");
const chalk = require("chalk");

//*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

global.owner = ['573243768166','5492644996684', '923297474483']; 
global.version = "v1.0.𝟢 | Lite";
global.sessionName = "China/Session";
global.namebot = "𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎 (𝕷𝖎𝖙𝖊) 💋";
global.author = "𝕮𝖍𝖎𝖓𝖆";
global.textbot = "𝖬𝖺𝖽𝖾 💗 𝗐𝗂𝗍𝗁 𝖻𝗒 𝕮𝖍𝖎𝖓𝖆";
global.dev = "© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝖢𝖧𝖨𝖭𝖨𝖳𝖠 | ᵒᶠᶦᶜᶦᵃˡ"

//*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

global.mess = {
  admin: "> \`✰ Esta función está reservada para los administradores del grupo\`",
  botAdmin: "> \`✰ Para ejecutar esta función debo ser administrador\`",
  owner: "> \`✰ Solo mi creador puede usar este comando\`",
  group: "> \`✰ Esta función solo funciona en grupos\`",
  private: "> \`✰ Esta función solo funciona en mensajes privados\`",
  wait: "> \`✰ Espera un momento...\`",
};

//*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

global.icono = "https://files.catbox.moe/4bz5vw.jpg";
global.catalogo = "https://files.catbox.moe/riclwm.jpg";

global.my = {
  ch: "120363345778623279@newsletter",
  name1: "𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎  (𝕷𝖎𝖙𝖊} | ¡𝗡𝗲𝘄𝘀 𝗨𝗽𝗱𝗮𝘁𝗲'𝘀!", 
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Actualización '${__filename}'`));
  delete require.cache[file];
  require(file);
});
