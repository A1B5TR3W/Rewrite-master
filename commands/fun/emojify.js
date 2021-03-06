const { Command } = require("../../Nitro");

const emojis = { "a": "๐ฆ", "b": "๐ง", "c": "๐จ", "d": "๐ฉ", "e": "๐ช", "f": "๐ซ", "g": "๐ฌ", "h": "๐ญ", "i": "๐ฎ", "j": "๐ฏ", "k": "๐ฐ", "l": "๐ฑ", "m": "๐ฒ", "n": "๐ณ", "o": "๐ด", "p": "๐ต", "q": "๐ถ", "r": "๐ท", "s": "๐ธ", "t": "๐น", "u": "๐บ", "v": "๐ป", "w": "๐ผ", "x": "๐ฝ", "y": "๐พ", "z": "๐ฟ", "0": "0โฃ", "1": "1โฃ", "2": "2โฃ", "3": "3โฃ", "4": "4โฃ", "5": "5โฃ", "6": "6โฃ", "7": "7โฃ", "8": "8โฃ", "9": "9โฃ", "<": "โ", ">": "โถ", "!": "โ", "?": "โ", "^": "๐ผ", "+": "โ", "-": "โ", "รท": "โ", ".": "๐", "$": "๐ฒ", "#": "#๏ธโฃ", "*": "*๏ธโฃ" };

class EmojifyCommand extends Command {
    async run({ message, bot, reply, t }) {
        const [text] = message.args;
        const str = text.toLowerCase().split("");

        const emojied = str.map(ch => {
            if (/\s/g.test(ch)) {
                return "   ";
            } else if (emojis[ch]) {
                return ` ${emojis[ch]}`;
            } else return ` ${ch}`;
        })

        reply(emojied.join(""));
    }

    help = "Emojify a message";
    args = [{
        type: "string",
        info: "The message to emojify.",
        example: "1234"
    }]
}

module.exports = EmojifyCommand;