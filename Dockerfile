FROM node:8

WORKDIR /src

ADD . /src

RUN npm install --production

EXPOSE 5000

CMD ["node","/src/index.js"]