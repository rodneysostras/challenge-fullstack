FROM python:3.10.4-alpine3.15

ENV CHOKIDAR_USEPOLLING=true

RUN apk --update --upgrade add --no-cache git nodejs=16.14.2-r0 npm yarn && \
    rm -rf /var/cache/apk/* \
    && find / -type f -iname \*.apk-new -delete \
    && rm -rf /var/cache/apk/*

RUN yarn global add vercel vite

WORKDIR /dev/app

COPY ../ /dev/app

ENTRYPOINT ["/bin/sh"]