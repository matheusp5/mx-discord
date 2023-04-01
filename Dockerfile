FROM node:19

WORKDIR /

COPY package*.json .

RUN npm install

COPY . . 

ENV BOT_TOKEN=YOUR_BOT_TOKEN
ENV OPENAI_APIKEY=YOUR_OPENAI_APIKEY

CMD [ "npm", "start" ]