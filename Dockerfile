FROM node:14.15.4
WORKDIR /user/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install
EXPOSE 3000

COPY . ./

VOLUME ["/usr/src/app/store"]
RUN ls -a

CMD [ "yarn", "start" ]