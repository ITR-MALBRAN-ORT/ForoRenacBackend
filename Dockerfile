# Stage 1: Compile Ts code
FROM node:16-alpine3.12 as builder

# Sets ARGS default values
ARG CONTAINER_PORT = 3000

# Create app directory
WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# Where available (npm@5+)
COPY package*.json ./

# Install TS compiler globally
RUN npm install -g typescript

# Install app dependencies
RUN npm install 
# If you are building your code for production use:
# RUN npm ci --only=production
# Install modules from a package’s lockfile and it's faster than using npm i

# Bundle app source
COPY --chown=node:node . .
# --chown is used to change the ownership of the file in the container filesystem

# Change system user, to ensure that all application files are owned by the node user, but not root
USER node
# Compile TS source
RUN npm run-script build

#Stage 2: Execute node process
FROM node:16-alpine3.12

WORKDIR /usr/src/app
RUN chown -R node:node /usr/src/app

COPY package*.json ./

USER node

RUN npm ci --only=production

COPY --from=builder /usr/src/app/dist ./dist

# Your app binds by default to port 8080, so you'll use the EXPOSE instruction to have it mapped by the docker daemon to:
EXPOSE $CONTAINER_PORT

# Define the command to run your app using CMD which defines your runtime. 
# Usually we will use node server.js, but now we use index.js to start demo server:
CMD [ "node", "dist/index.js" ]
