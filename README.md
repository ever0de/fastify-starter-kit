# fastify-starter-kit

Prisma + Fastify + Mocha + Chai is a fastify-starter-kit that lets you get started quickly

## File Structure

```shell
.
├── prisma # related DB(prisma) Schema files
├── schema-gen.sh # A shell script that collects *.primsa files and makes them into one file
├── src
    ├── dao # Defines modules to be reused in services
    ├── dto # Responsible for request and response object in routes
    ├── plugins # Directory for DI using `fastify-plugins` with `fastify-autoload`
    ├── routes # Directory for routes using `fastify-autoload`
    └── services # As a concept higher than `dao`, it is responsible for the final business logic used in routes
├── tests
    ├── routes
    ├── services 
    └── helper.ts
└─── tsconfig.json
```

## TODO List

1. Apply error handling library e.g) `neverthrow`
2. Apply mock library e.g) `ts-mockito`
