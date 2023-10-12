FROM node:current-alpine as build-step
ARG API_BASE_URL
ENV REACT_APP_BASE_URL $API_BASE_URL
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
#COPY default.conf.template /etc/nginx/templates/
COPY --from=build-step /app/build /usr/share/nginx/html
