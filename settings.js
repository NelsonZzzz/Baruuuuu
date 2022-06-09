
  const fs = require('fs')
  const chalk = require('chalk')

  // Free Apikey
  global.APIs = {
  riy: 'https://api-riy.herokuapp.com',
  }

  global.APIKeys = {
  'https://api-riy.herokuapp.com': 'RiyGanz',
  }

  // Edit Sesuai Kemauanmu
  global.autoReadGc = true // Ubah Ke false Jika Chat Di Grup Tidak Ingin Di Baca Oleh Bot
  global.autoReadAll = false // Ubah Ke true Jika Ingin Seluruh Chat Di Baca Oleh Bot
  global.anticall = true // Ubah Ke false Jika Tidak Ingin Bot Blockir Yang Telepon
  global.available = false // Ubah Ke false Jika Bot Mu Tidak Ingin Terlihat Online
  global.autoTyping = false // Ubah Ke true Jika Ingin Saat Ada Yang Chat Bot Auto Mengetik
  global.autoRecord = true // Ubah Ke false Jika Tidak Ingin Saat Ada Yang Chat Bot Auto Merekam
  global.multiplier = 69 // Semakin Besar Angkanya Semakin Sulit Untuk Naik Level
  global.limitCount = 20 // 70 Dah Pas Banh
  global.prefa = ['','.','/','#']

  // Other
  global.ownername = '𝐍𝐞𝐥𝐬𝐨𝐧' // Ganti Jadi Namamu
  global.owner = ['6281241100804','6281241100804','6281241100804'] // Kalo Mau Lebih Tambahin Aja
  global.ownernomer = '6281241100804' // Owner Utama Istilahnya
  global.botname = '𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃' // Ganti Jadi Nama Botmu
  global.packname = '𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃' // Sticker Weem
  global.author = 'By Nelson' // Sticker Weem
  global.webme = 'https://vt.tiktok.com/ZSdPqwKTg/' // Ganti Sama Web Mu
  global.linkgroup = 'https://chat.whatsapp.com/BFFKYGNsvrk9iOLyjrkIib' // Ganti Sama Link Gc Mu
  global.sessionName = 'session'
  global.youtube = 'https://youtube.com/channel/UCurk9oz-JJ7P5Ya-WZmChJg' // Ganti Sama Link Yt Mu
  global.github = 'https://github.com/NelsonZz' // Ganti Sama Link Github Mu
  global.instagram = 'https://instagram.com/nelson_randanan' // Ganti Sama Link Ig mu

  // Background Setiap Menu
  global.bg1 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg2 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=monarch-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg3 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=yolo-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
  global.bg4 = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fun-run-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

  // Tips Menu
  global.tips1 = 'Gunakan Jeda 3 Detik Agar Bot Tidak Mati Akibat Spam 🚀'
  global.tips2 = 'Jika Kamu Ingin Bermain RPG Hubungi Admin Untuk Mengaktifkan Fitur RPG ⚔️'
  global.tips3 = 'Jika Kamu Ingin Request/Repport Fitur, Cukup Ketik *.repport Laporannya* 👮'
  global.tips4 = 'Jika Kamu Sedang Gabut, Kamu Bisa Memainkan Fitur Game Yang Tersedia 🕹️'
  global.tips5 = 'Jika Kamu Ingin Mendownload Video Youtube, Cukup Ketik *.ytmp4 <link>* 📥'

  // Edit Sesuai Kemauan Mu
  global.rpg = {
  limitEnd: '𝗟𝗶𝗺𝗶𝘁 𝗔𝗻𝗱𝗮 𝗛𝗮𝗯𝗶𝘀 \n\n📝 Note : Limit Akan Di Reset Setiap Jam 21:00',
  }

  // Edit Sesuai Kemauanmu
  global.mess = {
  admin: '_𝗞𝗮𝗺𝘂 𝗕𝘂𝗸𝗮𝗻 𝗔𝗱𝗺𝗶𝗻 ´･ᴗ･`_',
  botAdmin: '_𝗕𝗼𝘁 𝗕𝘂𝗸𝗮𝗻 𝗔𝗱𝗺𝗶𝗻 〒.〒 _',
  owner: '_𝗞𝗮𝗺𝘂 𝗕𝘂𝗸𝗮𝗻 𝗢𝘄𝗻𝗲𝗿 𝗞𝘂 ´･ᴗ･`_',
  group: '_𝗙𝗶𝘁𝘂𝗿 𝗛𝗮𝗻𝘆𝗮 𝗗𝗶𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗨𝗻𝘁𝘂𝗸 𝗚𝗿𝘂𝗽_',
  private: '_𝗙𝗶𝘁𝘂𝗿 𝗛𝗮𝗻𝘆𝗮 𝗗𝗶𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗨𝗻𝘁𝘂𝗸 𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗖𝗵𝗮𝘁_',
  bot: '_𝗙𝗶𝘁𝘂𝗿 𝗞𝗵𝘂𝘀𝘂𝘀 𝗣𝗲𝗻𝗴𝘂𝗻𝗮 𝗡𝗼𝗺𝗼𝗿 𝗕𝗼𝘁_',
  wait: '```「▰▰▰▱▱▱▱▱▱▱」𝗟𝗼𝗮𝗱𝗶𝗻𝗴...```',
  done: '_𝗝𝗮𝗻𝗴𝗮𝗻 𝗟𝘂𝗽𝗮 𝗠𝗮𝗸𝘀𝗶𝗵 (≧▽≦)_',
  }

  // Kalo Mau Menyesuaikan Nama File Foto Nya
  global.thumb = fs.readFileSync('./media/hinata.jpg')
    
  // Ini Gausah Diubah
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update'${__filename}'`))
  delete require.cache[file]
  require(file)
  })
