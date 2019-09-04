module.exports.config = { // Plugin informations
    name: "Demo #1",
    id: "demo-plugin",
    description: "A simple plugin containing demo commands for the bot.",
    version: "1.0.0",
    author: "Blatoy"
};

module.exports.commands = [{ // Commands list
    trigger: "hello",
    help: "Reply in the channel: Hello World!",
    args: [{
        name: "text",
        defaultValue: "Hello World!",
        help: "Text to echo.",
        allowsSpace: true
    }],
    action: (message) => {
        message.reply("Hello World!"); // Send message to Discord
    }
}, {
    trigger: "echo",
    help: "Echo what the user said",
    action: (message, args) => {
        message.channel.send(args.text);
    }
}, {
    trigger: "time",
    help: "Echo what the user said",
    action: (message) => {
        let now = new Date();
        message.channel.send("It is now " + now.getHours() + ":" + ("00" + now.getMinutes()).slice(-2) + " my dude.");
    }
}];