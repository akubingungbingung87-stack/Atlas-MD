// ==================== KONFIGURASI TANPA DOTENV ====================
// LANGSUNG ISI MANUAL, SIAP JALAN

// ==================== KONFIGURASI MODS & OWNER ====================
// Daftar nomor owner (pisah pake koma)
global.owner = ['6288224020174', '6285805675604'];

// Daftar moderator (bisa sama dengan owner)
global.mods = ['6288224020174', '6285805675604'];

// Daftar premium user (isi nomor yang mau jadi premium)
global.prems = ['6281234567890', '6289876543210'];

// ==================== KONFIGURASI DATABASE ====================
// URL MongoDB (isi dengan punya lo, kalo gak punya bisa dikosongin dulu)
global.mongodb = 'mongodb+srv://user:pass@cluster.mongodb.net/atlas-db';

// ==================== KONFIGURASI SESSION ====================
// SESSION_ID bebas, bisa diisi apa aja
global.sessionId = 'TheDarkness-' + Math.floor(Math.random() * 1000000);

// ==================== KONFIGURASI BOT ====================
global.prefa = '.';                    // Prefix bot (titik)
global.botname = 'Atlas-MD';           // Nama bot
global.ownername = 'TheDarkness';      // Nama owner
global.packname = 'Atlas Bot';         // Nama pack stiker
global.author = 'TheDarkness';         // Author stiker
global.port = '10000';                 // Port untuk web

// ==================== KONFIGURASI API ====================
global.tenorApiKey = 'AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c';
global.openAiAPI = 'sk-xxxxxx';        // OpenAI API key (isi kalo punya)

// ==================== FUNGSI CEK PREMIUM ====================
global.isPremium = (user) => {
  return global.prems.includes(user) || global.owner.includes(user);
};

global.premiumOnly = (user, command) => {
  if (!global.isPremium(user)) {
    return `❌ Fitur *${command}* khusus untuk *PREMIUM USER*!`;
  }
  return null;
};

// ==================== EXPORT ====================
module.exports = {
  mongodb: global.mongodb,
  owner: global.owner,
  prems: global.prems,
  prefa: global.prefa,
  botname: global.botname,
  ownername: global.ownername,
  isPremium: global.isPremium,
  premiumOnly: global.premiumOnly
};
