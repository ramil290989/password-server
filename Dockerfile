# Specifies the base image we're extending
FROM node:carbon

# Create app directory in the Docker image
WORKDIR /usr/src/app

# Install app dependencies by copying package.json and package-lock.json
COPY package*.json ./

# Install the app dependencies using NPM
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Set the command to start your app using CMD. Here "node server.js" is an example of what you might use to start your Node.js app.
CMD [ "node", "server.js"

# Expose the port your app runs on
EXPOSE 8080