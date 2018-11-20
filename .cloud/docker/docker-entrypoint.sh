#!/usr/bin/env bash

until bundle exec rake db:version; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

# Provision Database.
db_version=$(bundle exec rake db:version)

if [ "$db_version" = "Current version: 0" ]; then
  bundle exec rake db:schema:load
  bundle exec rake db:migrate
else
  bundle exec rake db:migrate
fi

bundle exec rake db:seed

bundle exec puma -C config/puma.rb
