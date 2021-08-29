FROM node

WORKDIR /app

COPY package*.json /app
RUN npm install
RUN npm install pm2 -g

COPY . /app

COPY wait-for-it.sh ./app
RUN chmod +x wait-for-it.sh
#CMD ["sh", "-c", "wait-for-it.sh", "database:3306", "-t", "10"] 

#CMD ["npm", "start"]
EXPOSE 3000