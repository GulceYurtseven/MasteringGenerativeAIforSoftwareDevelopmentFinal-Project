const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotaları İçe Aktarma
const userRoutes = require('./routes/users'); // Yeni eklenen satır

// MongoDB Bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🚀 MongoDB veritabanı bağlantısı başarıyla sağlandı!'))
  .catch((err) => console.error('❌ MongoDB bağlantı hatası:', err));

// Rotaları Kullanma
app.use('/api/users', userRoutes); // Yeni eklenen satır

app.get('/', (req, res) => {
  res.send('CodeCraftHub Kullanıcı Yönetimi Servisi Ayakta!');
});

app.listen(PORT, () => {
  console.log(`🌐 Sunucu ${PORT} portunda çalışıyor.`);
});