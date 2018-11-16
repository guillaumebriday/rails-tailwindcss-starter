[![build](https://gitlab.com/guillaumebriday/rails-tailwindcss-starter/badges/master/build.svg)](https://gitlab.com/guillaumebriday/rails-tailwindcss-starter/pipelines)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/guillaumebriday)

# Rails Tailwind CSS Starter

The purpose of this repository is to provide you a head start to build your next Rails Application with Tailwind CSS pre-installed.

## Introduction

This is a Rails 5.2 application with Webpacker, Tailwind CSS, Rubocop and Docker.

## Requirements

- Rails
- Ruby 2.5
- Node.js and Yarn
- Docker and Docker-Compose

## Installation

```bash
$ git clone git@github.com:guillaumebriday/rails-tailwindcss-starter.git
$ cd rails-tailwindcss-starter
$ bundle install
$ yarn install
$ ./bin/webpack
$ docker-compose up -d
$ bundle exec rails db:setup
$ bundle exec rails s
```

Useful commands :
```bash
$ bundle exec rails test
$ rubocop
```

Now you can access the application on http://localhost:3000.

## Deployment

I designed this application to setup and try Review Apps on Gitlab.

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
