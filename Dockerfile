# Use the official lightweight Node.js image.
# https://hub.docker.com/_/node
FROM node:14-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
# If you add a package-lock.json speed your build by switching to 'npm ci'.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Run the web service on container startup.
CMD [ "npm", "start" ]