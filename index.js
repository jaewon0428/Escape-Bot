const Discord = require('discord.js')
const client = new Discord.Client()

client.on('Ready',()=>{
    console.log("봇이 준비되었습니다.")
})
client.on('message',msg=>{
    if(msg.content=== '니얼굴'){
msg.reply('윤겔라!')
    }
})

client.login('ODAzMjM4MDU0OTczODAwNDY5.YA63uw.BX9FSwH5qbRdpVJ8llU_Zbh9aGM')