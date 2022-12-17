FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build

FROM nginx:1.23-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/resume /usr/share/nginx/html
EXPOSE 8080
