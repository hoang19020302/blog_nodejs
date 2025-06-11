FROM node:20-alpine

# Thư mục làm việc trong container
WORKDIR /app

# Copy package.json và cài thư viện
COPY package*.json ./
RUN npm install

# Copy toàn bộ mã nguồn
COPY . .

# Chạy ứng dụng
EXPOSE 3000
CMD ["node", "src/index.js"]
