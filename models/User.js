const mongoose = require('mongoose');

// Kullanıcı Veri Yapısını Tanımlama
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true, // Aynı e-posta ile birden fazla kayıt olmasını engeller
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['student', 'instructor', 'admin'],
    default: 'student'
  },
  techStack: {
    type: [String], // Geliştiricinin bildiği diller/teknolojiler
    default: []
  }
}, {
  timestamps: true // createAt ve updatedAt tarihlerini otomatik ekler
});

// Şemayı Modele Çevirip Dışa Aktarma
module.exports = mongoose.model('User', userSchema);