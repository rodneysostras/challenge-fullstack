FROM python:3.10.4-alpine3.15

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apk --update --upgrade add --no-cache git postgresql-dev libpq-dev build-base && \
    rm -rf /var/cache/apk/* \
    && find / -type f -iname \*.apk-new -delete \
    && rm -rf /var/cache/apk/* \
    && mkdir -p /dev/app/backend

WORKDIR /dev/app/backend

COPY ../ /dev/app/backend/

EXPOSE 8000

ENTRYPOINT ["/bin/sh"]
