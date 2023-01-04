FROM nginx
LABEL maintainer="Michael Korta <michael.korta@deutschebahn.com>"
COPY nginx/default.conf /etc/nginx/conf.d
COPY dist/docker /usr/share/nginx/html