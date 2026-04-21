# first tell base image to docker file (runtime that you work)
FROM node:18.14.1
LABEL authors="ttknp"

# create folder on docker container
WORKDIR /usr/src/app

# Copy package*.json file to /usr/src/app , Why some projects as node.js need package-lock.json ???
COPY package.json ./
COPY package-lock.json ./

# Run install module
RUN npm install

# Copy all . than put to /usr/src/app
COPY . .

# Set port inside container
EXPOSE 8000

# Now I have to do is to tell Docker what command I want to run when our image is run inside of a container.
# It follows "scripts": { "test": "echo \"Error: no test specified\" && exit 1", "start": "node controller/control.api.js"  }
CMD [ "npm", "start" ]