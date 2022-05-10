let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
conn.sendHydrated(m.chat, 
`*––––––『 DONATE 』––––––*`, 
`*Allo kak bantu miaw donasi yuk supaya miaw aktif selalu👋*
╔═══════════════════
║ _*DONASI UNTUK*_  Serv4n ×͜×
╠═══════════════════
║╭──❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉──────
║│➸ *DANA* : 08565337357
║│➸ *PULSA*: 08565337357
║│➸ *GOPAY*: 08565337357
║│➸ *WA*: 08565337357
║╰──────────────────
╰═══════════════════
`, './media/donate.jpg', 'https://instagram.com/alwiiyy__', 'instagram', null, null, [[`ᴍᴇɴᴜ`, `${usedPrefix}menu`]], m, {asLocation: true})
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler