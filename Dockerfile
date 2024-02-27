# Use official Node.js image
FROM node:slim

# Set working directory
WORKDIR  /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 4500

# Command to run the server
CMD npm start
