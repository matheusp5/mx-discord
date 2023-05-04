FROM node:19

WORKDIR /

COPY package*.json .

RUN npm install

COPY . . 

ENV BOT_TOKEN=
ENV OPENAI_APIKEY=

CMD [ "npm", "start" ]
