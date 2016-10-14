FROM node:6.3

RUN mkdir -p /src/app
WORKDIR /src/app

RUN npm install -g node-inspector

COPY package.json /src/app/
RUN npm install

COPY . /src/app

CMD ["npm", "start"]
