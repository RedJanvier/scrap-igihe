# Igihe scrapper

[![Build Status](https://travis-ci.org/RedJanvier/scrap-igihe.svg?branch=develop)](https://travis-ci.org/RedJanvier/scrap-igihe)
[![Coverage Status](https://coveralls.io/repos/github/RedJanvier/scrap-igihe/badge.svg?branch=ft-project-setup)](https://coveralls.io/github/RedJanvier/scrap-igihe?branch=ft-project-setup)
[![Maintainability](https://api.codeclimate.com/v1/badges/c74c048c9917791736ab/maintainability)](https://codeclimate.com/github/RedJanvier/scrap-igihe/maintainability)

A REST-API that provides all frontpage informations (news) on the [igihe website](http://igihe.com) `for free`

## PREREQUISITES

- NodeJs installed. [find it](https://nodejs.org/en/)
- PostgreSQL installed. [find it](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- Text Editor of your choice. [find it](https://code.visualstudio.com/)

## Getting Started

Run the following commands

```
createdb igihe2
npm run seed
```

Make a `.env file` based on `.example.env file` then

Run `npm run dev` to start the server in development or

Run `npm start` for production

## Features to implement

- ✔ User should be able to see all news
- ✔ User should be able to see single news detailed

## Routes

#### See all news

```
[GET] /api/v2/posts/

:body: none
```

#### See a single news detailed

```
[GET] /api/v2/members/:postId

:body: none
```

## Tech stack

- Knex
- Node JS
- Express JS
- PostgreSQL
- mocha, chai & chai-http
- cheerio JS (scrap library)

## Author

### **RedJanvier**

## Contacts

[Github](https://github.com/RedJanvier)
[Twitter](https://twitter.com/red_janvier)
[YouTube](https://www.youtube.com/channel/UCrQBNajZa-ibHBerJQ0kAiQ)
[Facebook](https://facebook.com/jan.h.red)
