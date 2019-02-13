# FROM node:10.15-jessie AS node_base

# FROM node_base as deps
# WORKDIR /home/node/app
# COPY package.json /home/node/app/package.json
# RUN npm install && npm cache clean --force

# FROM node_base as dev
# WORKDIR /home/node/app
# COPY --from=deps /home/node/app/node_modules /home/node/app/node_modules
# COPY . /home/node/app

# RUN npm run prebuild
# ENTRYPOINT ["npm", "run"]

FROM node:10.15-jessie

# Override in docker-compose
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

ARG PORT=8080
ENV PORT $PORT
EXPOSE $PORT

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json .

RUN npm install && npm cache clean --force

# ENV PATH ./node_modules/.bin:$PATH

# copy in our source code last, as it changes the most
COPY . .

RUN npm run prebuild

COPY --chown=node:node . .

# the official node image provides an unprivileged user as a security best practice
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
USER node

ENTRYPOINT ["/usr/local/bin/npm", "run"]