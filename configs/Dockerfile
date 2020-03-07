FROM node

RUN mkdir /oauth

WORKDIR /oauth

COPY ./ ./

RUN npm install

RUN npm install db-migrate db-migrate-mysql -g

CMD db-migrate --config ./configs/migrate.js up && npm run start