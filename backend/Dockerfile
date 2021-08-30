FROM node

WORKDIR /app/

COPY package*.json /app/
RUN npm install
RUN npm install pm2 -g

COPY . /app/

COPY wait-for-it.sh ./app/
RUN chmod +x wait-for-it.sh

EXPOSE 3000
