# Use Node 18 alpine as parent image
FROM node:18-alpine

# Change the working directory on the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY package* .

# Install all dependencies (including devDependencies for nodemon)
RUN npm i

# Copy the rest of the project files into this image
COPY . .

# Generate Prisma client
RUN npm run build

# Expose application port
EXPOSE 3001

# Start the application with nodemon for development
CMD [ "npm", "run", "preview" ]