FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package files terlebih dahulu
COPY package*.json ./
COPY prisma/schema.prisma ./prisma/

# Install dependencies dengan output verbose
RUN npm install 

# Copy semua file
COPY . .

# Build dengan output lebih detail
RUN npm run build 

CMD ["node", "dist/src/main.js"]