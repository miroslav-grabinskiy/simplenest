
## Installation

```bash
$ npm install
```

## Running the app


### Run the db:

```$ docker-compose -f docker-compose-test.yml up```
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```
$ docker-compose -f docker-compose-test.yml up 

# unit tests
$ npm run test

# e2e tests
(its temporary before using mock in next version)
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).



npm cache clear --force


what in next version:?

1. add mock db to e2e tests
2. add docker compose for service (fix docker-compose.yml.old)