# Use an official Node.js runtime as a parent image (for example, Express app)
FROM node:18

# Set the working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 8080

# Run the app
CMD ["npm", "start"]
