# Stage 1: Build static site
FROM node:22-alpine AS builder

ARG NEXT_PUBLIC_TELEGRAM_CHAT_LINK
ARG NEXT_PUBLIC_GOOGLE_SCRIPT_URL
ENV NEXT_PUBLIC_TELEGRAM_CHAT_LINK=$NEXT_PUBLIC_TELEGRAM_CHAT_LINK
ENV NEXT_PUBLIC_GOOGLE_SCRIPT_URL=$NEXT_PUBLIC_GOOGLE_SCRIPT_URL

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
