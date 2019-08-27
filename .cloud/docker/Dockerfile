FROM guillaumebriday/ruby-node:2.6.3-slim

LABEL maintainer="guillaumebriday@gmail.com"
LABEL traefik.enable="true"
LABEL traefik.port="3000"

# Set our working directory.
WORKDIR /var/www

# Setting env up
ENV RAILS_ENV="production" \
    RACK_ENV="production" \
    RAILS_SERVE_STATIC_FILES="true"

ENV DB_HOST="db" \
    DB_PASSWORD="secret" \
    DB_USERNAME="postgres" \
    DB_DATABASE="app_production"

# Installing dependencies
RUN apt-get update && \
    mkdir -p /usr/share/man/man1 && \
    mkdir -p /usr/share/man/man7 && \
    apt-get install -yf \
    build-essential \
    apt-transport-https \
    postgresql-client \
    libpq-dev \
    curl \
    bash

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy the config in the container
COPY . .
COPY .cloud/docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

RUN gem install bundler --no-document
RUN bundle install -j $(nproc) --without development test
RUN bundle exec rake assets:precompile

# Expose HTTP port
EXPOSE 3000

# Execute our entry script.
CMD ["docker-entrypoint.sh"]
