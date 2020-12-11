# base image
FROM node:10.0.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

# add app (this is separate from prev commands to avoid caching)
COPY . /app

# Run the build step. You can disable the command below
# RUN npm run build

# start app
CMD npm start
