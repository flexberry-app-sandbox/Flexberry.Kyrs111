FROM node:12 as ember_app

COPY /src/ember-app /src/ember-app

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  cd /src/ember-app/; \
  ember build --environment=docker

FROM mono:latest as backend

COPY /src/Kyrs11 /src/Kyrs11

RUN \
 cd /src/Kyrs11 ;\
 nuget restore Kyrs11.sln; \
 msbuild /p:Configuration=Release Kyrs11.sln

FROM flexberry/mono-xsp:latest

MAINTAINER mail@flexberry.net

COPY --from=backend /src/Kyrs11/ODataBackend /app
COPY --from=ember_app /src/ember-app/dist /app
WORKDIR /app
