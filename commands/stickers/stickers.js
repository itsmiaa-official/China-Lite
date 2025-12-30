const fs = require("fs");

module.exports = {
  command: ["sticker", "s"],
  description: "Crea una imagen a sticker",
  category: "stickers",
  run: async (client, m) => {
    const quoted = m.quoted || m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const d = new Date(new Date() + 3600000);
    const locale = "es-ES";
    const dias = d.toLocaleDateString(locale, { weekday: "long" });
    const fecha = d.toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    let stickerTxT2 = ``;
    let stickerTxT = `${dev}`;
    
    if (/image/.test(mime)) {
      media = await quoted.download();
      let encmedia = await client.sendImageAsSticker(m.chat, media, m, {
        packname: stickerTxT2,
        author: stickerTxT,
      });
      await fs.unlinkSync(encmedia);
    } else if (/video/.test(mime)) {
      if ((quoted.msg || quoted).seconds > 20) {
        return m.reply("El video no puede ser muy largo.");
      }
      media = await quoted.download();

      let encmedia = await client.sendVideoAsSticker(m.chat, media, m, {
        packname: "",
        author: stickerTxT,
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await fs.unlinkSync(encmedia);
    } else {
      m.reply("Envía una *imagen* o *video* junto con el comando !s");
    }
  },
};
