FROM node:14-alpine3.15

ENV CHOKIDAR_USEPOLLING=true

RUN apk --update --upgrade add --no-cache git && \
    rm -rf /var/cache/apk/* \
    && find / -type f -iname \*.apk-new -delete \
    && rm -rf /var/cache/apk/* \
    && mkdir -p /dev/app/frontend

WORKDIR /dev/app/frontend

COPY package.json .

RUN yarn global add vite && yarn install

COPY ../ /dev/app/frontend/

EXPOSE 3000

CMD ["yarn", "dev"]
