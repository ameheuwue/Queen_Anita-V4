require('dotenv').config(); 

global.owner = process.env.OWNER_NUMBER.split(','); 
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "David Cyril";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";
global.autoTyping = process.env.AUTO_TYPING === 'true'; 
global.autoRecord = process.env.AUTO_RECORD === 'true';
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === 'true';
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";

global.LEVELUP = process.env.LEVELUP === 'true';

global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === 'true';

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};

global.sudoUsers = process.env.SUDO_USERS.split(',').map(user => `${user}@s.whatsapp.net`); 
2349139401428
global.public = process.env.PUBLIC === 'true';

global.ANTIDELETE = process.env.ANTIDELETE === 'true';
global.unavailable = process.env.UNAVAILABLE === 'true';
global.available = process.env.AVAILABLE === 'true';
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === 'true';
global.chatbot = process.env.CHATBOT === 'true';
global.autoreact = process.env.AUTO_REACT === 'true';

global.WELCOME = process.env.WELCOME === 'true';

global.prefix = process.env.PREFIX || '.';
{"noiseKey":{"private":{"type":"Buffer","data":"0NwN20Fd6U4e50RBFhqy8IXg3ujZnIGugqubj6KAjF0="},"public":{"type":"Buffer","data":"fSlA74pOL7emHkD3IL20XAC43YuS4INpOXWu+ouNomw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"6GETzB9W3qoW1Bg+5yqHSMEPB+5loc0eTH4uAI9coFo="},"public":{"type":"Buffer","data":"OKuDNFle65bXFjmN7A7WXfmiySKdISzBa+wRi/hZ3EM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"eJO3/hFmjseqsVKMOYfSGK3S+yWpIjjyqSk42dyXrGk="},"public":{"type":"Buffer","data":"NV4kzKLvvHgLitYQp6K6w77AzFof6BtymyB8rVoh1DQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"EIji8nN6WyF83OXTmeaEooa/ZX2fe7bDt3WWousABm0="},"public":{"type":"Buffer","data":"cynR4vKO1kPM+oCxODUCFt+7Qg3+F44RWtLJm84IPlU="}},"signature":{"type":"Buffer","data":"86n83UbfnbvPz37mwP+IfWgpfFYGLpfuSq+OhJwOjWk6SM8PZh08Kbvo7fc5fWOYlIjXg1j1yTf/Uldhqo99Bg=="},"keyId":1},"registrationId":183,"advSecretKey":"BfuZlZ7Vr+BFkVpJSWkDD32Ht3Da4uwM/Kayp9+yf0s=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"wImkTln0RFaP2-aNicV4XQ","phoneId":"d01d07b6-74ea-4ede-b12d-826ca1866bdf","identityId":{"type":"Buffer","data":"bJuutZVYvWAXB80AMbFCOloyyAA="},"registered":true,"backupToken":{"type":"Buffer","data":"VaromV2VqtOOXmqYR0MMOHl1MbM="},"registration":{},"pairingCode":"ZMYCKX5W","me":{"id":"2349139401428:5@s.whatsapp.net"},"account":{"details":"CLGj170GENushbwGGAEgACgA","accountSignatureKey":"YnoLZGAGFQtfi4Da8PVVRweFPrT/79ehEcatSIGmoHk=","accountSignature":"8WgsAaWbAoKAvOEHRglGqtovUtECx4/vVRbAM2+kkZIfSSacSvtqvHtR3OsfvI1M7T22VubO/YGJAPLbE3uVBQ==","deviceSignature":"X7Ke/sT/usBFjITvbs2zOtOuij2B9G+rYzBXHSe7gFzwFpBwtEECJiGVDF0qTwd20DMtXUtnoZogl3thDPGqBA=="},"signalIdentities":[{"identifier":{"name":"2349139401428:5@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BWJ6C2RgBhULX4uA2vD1VUcHhT60/+/XoRHGrUiBpqB5"}}],"platform":"android","lastAccountSyncTimestamp":1736529511,"myAppStateKeyId":"AAAAAOSK"}
global.autobio = process.env.AUTO_BIO === 'true';

global.ANTICALL = process.env.ANTICALL === 'true';

global.antilink = process.env.ANTILINK === 'true';
global.antilinkkick = process.env.ANTILINK_KICK === 'true';
global.antilinkwarn = process.env.ANTILINK_WARN === 'true';

global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
