FROM node:14.16-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN if [ "$NODE_ENV" = "development" ]; \
	then npm install;  \
	else npm install --only=production; \
	fi

EXPOSE 3000

CMD ["npm", "run", "dev"]