# 1. Use an official Node.js runtime as a parent image
FROM node:16-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the package.json and package-lock.json files
COPY package*.json ./

# 4. Install project dependencies`
RUN npm install @angular-devkit/build-angular --force

RUN npm install

# 5. Install Ionic CLI globally
RUN npm install -g @ionic/cli

# 6. Copy the entire project to the working directory
COPY . .

# 7. Expose the port on which the app will run
EXPOSE 8100

# 8. Define environment variable for the host
ENV HOST=0.0.0.0

# 9. Command to run the Ionic development server
CMD ["ionic", "serve", "--host", "0.0.0.0", "--port", "8100"]
