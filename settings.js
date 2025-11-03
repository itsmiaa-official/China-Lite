const fs = require("fs");
const chalk = require("chalk");

//*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

global.owner = ["573243768166"]; //Cambia este número por el tuyo
global.owner2 = ["https://wa.me/573243768166"] //cambialo por tu enlace
global.sessionName = "Sessions/Principal";
global.version = "v1.0.0 | Mini";
global.namebot = "𝐃𝐫𝐚𝐜𝐮𝐥𝐚𝐮𝐫𝐚-𝐖𝐚 🦇";
global.author = "𝕮𝖍𝖎𝖓𝖆 🔥";
global.dev = "© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝖢𝖧𝖨𝖭𝖨𝖳𝖠 | ᵒᶠᶦᶜᶦᵃˡ"

//*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*
//Modifica los mensajes a tu preferencia
global.mess = {
  admin: "> ☆ Esta función está reservada para los administradores del grupo",
  botAdmin: "> ☆ Para ejecutar esta función debo ser administrador",
  owner: "> ☆ Solo mi creador puede usar este comando",
  group: "> ☆ Esta función solo funciona en grupos",
  private: "> ☆ Esta función solo funciona en mensajes privados",
  wait: "> ☆ Espera un momento...",
};

//*─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ⭒─ׄ─ׅ─ׄ*

global.thumbnailUrl = "https://files.catbox.moe/1zzaug.jpg"; //Cambia esta imagen

global.my = {
  ch: "120363345778623279@newsletter", //Cambia este id por el de tu canal
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Actualización '${__filename}'`));
  delete require.cache[file];
  require(file);
});
