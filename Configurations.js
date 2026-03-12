require("dotenv").config();

// ==================== KONFIGURASI MODS & OWNER ====================
let gg = process.env.MODS;
if (!gg) {
  gg = "6288224020174,6285805675604";   // Tambahin nomor owner di sini, pisah pake koma
}

global.owner = gg.split(",");                    // Owner bot (bisa lebih dari satu)
global.mods = gg.split(",");                     // Moderator (sama dengan owner)

// ==================== KONFIGURASI DATABASE ====================
global.mongodb = process.env.MONGODB || "mongodb+srv://user:pass@cluster.mongodb.net/atlas-db";
// Ganti dengan URL MongoDB lo. Kalo ga punya, pake yang di atas (ga akan jalan)

// ==================== KONFIGURASI SESSION ====================
global.sessionId = process.env.SESSION_ID || "TheDarkness-" + Date.now();
// SESSION_ID bisa diisi bebas, contoh: "TheDarkness-123"

// ==================== KONFIGURASI BOT ====================
global.prefa = process.env.PREFIX || ".";        // Prefix bot (titik)
global.botname = process.env.BOTNAME || "Atlas-MD";  // Nama bot
global.ownername = process.env.OWNERNAME || "TheDarkness";  // Nama owner
global.packname = process.env.PACKNAME || `Atlas Bot`;  // Nama pack stiker
global.author = process.env.AUTHOR || "TheDarkness";  // Author stiker
global.port = process.env.PORT || "10000";       // Port untuk web

// ==================== KONFIGURASI API ====================
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.openAiAPI = process.env.OPENAI_API || "sk-xxxxxx";  // OpenAI API key (isi kalo punya)

// ==================== EXPORT ====================
module.exports = {
  mongodb: global.mongodb,
  owner: global.owner,
  prefa: global.prefa,
  botname: global.botname,
  ownername: global.ownername
};
