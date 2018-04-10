FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Build static files for front-end
RUN npm build

# Bundle app source
COPY . .

# RUN cd ./db && node seed.js

RUN cd ..

EXPOSE 3000

CMD ["node", "."]
