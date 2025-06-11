FROM node:20-alpine

# Thiết lập biến môi trường
ENV NODE_ENV=production

WORKDIR /app

# Chỉ copy file cần thiết để cài thư viện
COPY package*.json ./

RUN npm install --omit=dev

# Copy phần còn lại của app
COPY . .

# Expose cổng ứng dụng
EXPOSE 3000

# Start app (có thể thay bằng npm start nếu bạn dùng scripts)
CMD ["node", "src/index.js"]

