FROM ruby:2.6-slim

LABEL maintainer="guillaumebriday@gmail.com"
LABEL traefik.enable="true"
LABEL traefik.port="3000"

# Set our working directory.
WORKDIR /app

# Setting env up
ENV RAILS_ENV="production" \
    RACK_ENV="production" \
    RAILS_SERVE_STATIC_FILES="true"

ENV DB_HOST="db" \
    DB_PASSWORD="secret" \
    DB_USERNAME="postgres" \
    DB_DATABASE="app_production"

# Installing dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    apt-transport-https \
    postgresql-client \
    libpq-dev \
    curl \
    bash \
    nodejs

# Installing Yarn
RUN curl -sL https://deb.nodesource.com/setup_11.x | bash -
RUN apt-get update -yq
RUN apt-get install -y apt-transport-https nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy the config in the container
COPY . .
COPY .cloud/docker/docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

RUN gem install bundler
RUN bundle install --jobs 20 --without development test
RUN bundle exec rake assets:precompile

# Expose HTTP port
EXPOSE 3000

# Execute our entry script.
CMD ["docker-entrypoint.sh"]
