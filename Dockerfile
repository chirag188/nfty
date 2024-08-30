FROM node:14

WORKDIR /usr/src/app

COPY . /usr/src/app/
COPY ["package.json", "./"]
RUN npm install

RUN ls /usr/src/app
RUN npm install -g serve
RUN npm run build --prod

COPY Whitepaper.pdf  /usr/src/app/build/static/media/Whitepaper.pdf

EXPOSE 3000

CMD serve -s build
