// Comando creado por China
// github: github.com/ittschinitaaa

module.exports = {
  command: ["letra"],
  description: "Transforma el texto en letras especiales",
  category: "tools",
  isGroup: false,
  isAdmin: false,
  botAdmin: false,
  use: "<texto o responder a un mensaje>",

  run: async (client, m, args) => {
    try {

      let text = args.join(" ") || (m.quoted && m.quoted.text) || "";
      if (!text) return client.reply(m.chat, `> ✰ Por favor, ingresa el texto que quieres transformar.`, m);

      const map = {
        'a': 'ᥲ', 'b': 'ᑲ', 'c': 'ᥴ', 'd': 'ძ', 'e': 'ᥱ', 'f': '𝖿',
        'g': 'g', 'h': 'һ', 'i': 'і', 'j': 'ȷ', 'k': 'k', 'l': 'ᥣ',
        'm': 'm', 'n': 'ᥒ', 'o': '᥆', 'p': '⍴', 'q': '𝗊', 'r': 'r',
        's': 's', 't': '𝗍', 'u': 'ᥙ', 'v': '᥎', 'w': 'ᥕ', 'x': '᥊',
        'y': 'ᥡ', 'z': 'z'
      };

      const transformed = text.replace(/[a-z]/gi, c => map[c.toLowerCase()] || c);

      await m.react("✨");
      await client.sendMessage(
        m.chat,
        { text: `> ✧ Texto transformado:\n\n${transformed}` },
        { quoted: m }
      );
    } catch (err) {
      console.error(err);
      await client.reply(m.chat, "> ✰ Ocurrió un error al transformar el texto.", m);
    }
  },
};
