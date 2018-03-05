FROM node:carbon
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm install
COPY . ./ 
ENV REDIS redis://redis:6379
EXPOSE 3000
