FROM node:14.18.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./
# COPY ./app/package-lock.json ./
RUN yarn install --silent

COPY ./ ./

CMD ["yarn", "start"]