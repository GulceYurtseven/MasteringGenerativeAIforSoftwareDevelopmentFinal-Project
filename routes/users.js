const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adım 3'te oluşturduğumuz modeli çağırıyoruz

// 1. Yeni Kullanıcı Oluşturma (POST /api/users/register)
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, techStack } = req.body;

    // E-posta adresi kullanımda mı kontrol edelim
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Bu e-posta adresi zaten kullanımda.' });
    }

    // Yeni kullanıcıyı oluştur ve kaydet
    const newUser = new User({
      username,
      email,
      password, // Not: Gerçek projelerde şifreler her zaman bcrypt gibi kütüphanelerle hash'lenerek kaydedilmelidir!
      techStack
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);

  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
});

// 2. Tüm Kullanıcıları Getirme (GET /api/users)
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası', error: error.message });
  }
});

module.exports = router;