FROM nginx
COPY config/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY css ./css/
COPY js ./js/
COPY fonts ./fonts/
COPY favicon.ico .
COPY portalVersion.html .
COPY fault.html .
COPY bricked.html .
COPY ghost.html .