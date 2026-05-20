const userService = require('../src/services/userService');
const User = require('../src/models/userModel');

// 1. Gerçek veritabanına dokunmamak için User modelini taklit ediyoruz (Mock)
jest.mock('../src/models/userModel');

describe('User Service Testleri', () => {
    it('Verilen ID ile kullanıcıyı bulmalı', async () => {
        // Hazırlık: Veritabanı "findById" çağrıldığında dönecek sahte veriyi ayarlıyoruz
        const mockUser = { _id: '12345', username: 'test_ogrencisi', email: 'test@codecrafthub.com' };
        User.findById.mockResolvedValue(mockUser);

        // Eylem: Servis fonksiyonumuzu çağırıyoruz
        const sonuc = await userService.findUserById('12345');

        // Doğrulama: Fonksiyon doğru değerlerle çağrıldı mı ve beklenen sonucu verdi mi?
        expect(User.findById).toHaveBeenCalledWith('12345');
        expect(sonuc.username).toBe('test_ogrencisi');
    });
});