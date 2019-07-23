FROM node:12.2.0-alpine

WORKDIR /atomV

ENV PATH /atomV/node_modules/.bin:$PATH

COPY package.json /atomV/package.json

RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

CMD ["npm", "start"]
