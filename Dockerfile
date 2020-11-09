FROM cypress/base:10

ENV PATH /node_modules/.bin:$PATH
RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

RUN $(npm bin)/cypress verify

RUN ["npm", "run", "cypress:run"]