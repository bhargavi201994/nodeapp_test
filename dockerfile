FROM ubuntu:22.04
RUN apt update
RUN apt install openjdk-17-jdk wget -y

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "index.js" ]
