FROM node:19

WORKDIR /

COPY package*.json .

RUN npm install

COPY . . 

<<<<<<< HEAD
ENV BOT_TOKEN=.
ENV OPENAI_APIKEY=.
=======
ENV BOT_TOKEN=
ENV OPENAI_APIKEY=
>>>>>>> 99db9c2885c8224663566ff0819f6492e8be4373

CMD [ "npm", "start" ]
