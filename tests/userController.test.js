const { registerUser } = require('../src/controllers/userController');
const User = require('../src/models/userModel');
const bcrypt = require('bcrypt');

// Bağımlılıkları taklit ediyoruz
jest.mock('../src/models/userModel');
jest.mock('bcrypt');

describe('User Controller Testleri', () => {
    it('Yeni bir kullanıcıyı başarıyla kaydetmeli ve 201 dönmeli', async () => {
        // Hazırlık: Sahte bir gelen istek (req) ve sahte bir yanıt (res) objesi oluşturuyoruz
        const req = {
            body: { username: 'yeni_kullanici', email: 'yeni@test.com', password: 'sifre123' }
        };
        const res = {
            status: jest.fn().mockReturnThis(), // zincirleme kullanım (res.status.json) için
            json: jest.fn()
        };

        // Bcrypt ve Mongoose kaydetme işlemlerinin başarılı olduğunu varsayıyoruz
        bcrypt.hash.mockResolvedValue('sifrelenmisSifre');
        User.prototype.save = jest.fn().mockResolvedValue(true);

        // Eylem: Controller fonksiyonunu çalıştırıyoruz
        await registerUser(req, res);

        // Doğrulama: Doğru HTTP kodu ve mesaj gönderildi mi?
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({ message: 'User registered successfully.' });
    });
});