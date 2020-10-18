const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

const prefix = '?';

client.on('ready', () => {
  console.log(`Ok!`);
});

client.on('message', message => {
  if (message.content.startsWith(`${prefix}av`)) {
    const embed = new MessageEmbed()
      .setTitle('Your Avatar')
      .setColor("RANDOM")
      .setImage(message.author.displayAvatarURL());
    message.channel.send(embed);
  }
});

client.on('message', async message => {
  if (!message.guild) return 
  if(message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLocaleLowerCase();

if (command == 'status') {
  const fullArgs = args.join(" ")
    if(message.author.id !=='742972160158728283' && message.author.id != '582018951903707136') return message.channel.send('You don\'t own this bot, only the owner can change my status! ')
    if(!fullArgs) return message.channel.send('Please provide the status after the command!')
    const text = args.slice(1).join(' ')
    const typeFirst = args[0]
    const typeSecond = typeFirst.toUpperCase()

    await client.user.setActivity(text, {type: typeSecond});
    await message.channel.send(`Success! I have set the status type to **${typeSecond}** and the status message to **${text}**! ✅`)
  } else if (!message.guild) return;

  if (message.content.startsWith(`${prefix}kick`)) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (message.member.hasPermission(["KICK_MEMBERS" || "BAN_MEMBERS" || "ADMINISTRATOR"])) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.reply(`${user.tag} has been kicked`);
          })
          .catch(err => {
            message.reply('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});

client.login('NzYzMzkzMTE1NTkxMTQ3NTYw.X33DPQ.EbZJLTQipTBShJ2TthOuRd7Rxj4');