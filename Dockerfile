# 1. Hafif ve güvenli bir Node.js sürümü kullanıyoruz
FROM node:20-alpine

# 2. Konteyner içindeki çalışma dizinini belirliyoruz
WORKDIR /usr/src/app

# 3. Önce sadece package.json dosyalarını kopyalıyoruz (Docker önbelleğini verimli kullanmak için)
COPY package*.json ./

# 4. Gerekli kütüphaneleri kuruyoruz
# 4. Gerekli kütüphaneleri ve eksik olabilecekleri kuruyoruz
RUN npm install && npm install dotenv bcrypt jsonwebtoken body-parser mongoose express cors winston

# 5. Tüm kodları konteynere kopyalıyoruz
COPY . .

# 6. Uygulamanın dışarıya açılacağı portu belirtiyoruz
EXPOSE 5000

# 7. Konteyner ayağa kalktığında çalıştırılacak komut (app.js'i başlatıyoruz)
CMD ["npm", "start"]