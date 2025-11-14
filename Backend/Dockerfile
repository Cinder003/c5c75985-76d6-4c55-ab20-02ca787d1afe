# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

RUN npm run prisma:generate
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=builder /usr/src/app/package.json ./package.json
RUN npm install --omit=dev

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /usr/src/app/prisma/schema.prisma ./prisma/schema.prisma

EXPOSE 3001

CMD ["node", "dist/server.js"]