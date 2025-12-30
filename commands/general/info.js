const os = require("os");
const pkg = require("../../package.json");

module.exports = {
  command: ["info"],
  category: "general",
  run: async (client, m, args) => {
    const up = process.uptime(),
      h = Math.floor(up / 3600),
      min = Math.floor((up % 3600) / 60),
      s = Math.floor(up % 60);

    const cpu = os.cpus()[0]?.model.trim() || "Desconocido",
      cores = os.cpus().length;

    const mem = [
      (os.freemem() / 1024 / 1024).toFixed(0),
      (os.totalmem() / 1024 / 1024).toFixed(0),
    ];

    const platform = `${os.platform()} ${os.release()} (${os.arch()})`;
    const nodeV = process.version;
    const host = os.hostname();
    const shell = process.env.SHELL || process.env.COMSPEC || "desconocido";
    const now = new Date().toLocaleString("en-US", {
      timeZone: "America/Argentina/Buenos_Aires",
      hour12: false,
    });

    const infoText = `${namebot} - ${author}

*Versión:* ${pkg.version}
*Autor:* ${namebot}
*Uptime:* ${h}h ${min}m ${s}s
*Plataforma:* ${platform}
*Node.js:* ${nodeV}
*Host:* ${host}
*Shell:* ${shell}

*CPU:* ${cpu} (${cores} núcleos)
*Memoria:* ${mem[0]} MiB libre / ${mem[1]} MiB total

*Fecha & Hora:* ${now}`;

    // Enviar mensaje estilo tarjeta
    await client.sendMessage(
      m.chat,
      {
        text: infoText,
        contextInfo: {
          externalAdReply: {
            title: namebot,  // Título de la tarjeta
            body: textbot,       // Subtítulo o descripción
            mediaType: 1,                    // Imagen o video
            mediaUrl: icono,              // URL de la imagen que quieras mostrar
            sourceUrl: icono,             // Link que se abre al tocar la tarjeta
            thumbnailUrl: icono,          // Miniatura
            showAdAttribution: false,
            containsAutoReply: true,
            renderLargerThumbnail: false,
          },
        },
      },
      { quoted: m }
    );
  },
};
