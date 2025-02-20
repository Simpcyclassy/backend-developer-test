[![Build Status](https://travis-ci.org/Simpcyclassy/backend-developer-test.svg?branch=master)](https://travis-ci.org/Simpcyclassy/backend-developer-test) 
![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/simpcyclassy/backend-developer-test) 
![Docker Cloud Build Status](https://img.shields.io/docker/cloud/build/simpcyclassy/backend-developer-test) 
[![Coverage Status](https://coveralls.io/repos/github/Simpcyclassy/backend-developer-test/badge.svg?branch=master)](https://coveralls.io/github/Simpcyclassy/backend-developer-test?branch=master) 

## How to start the server

```bash
# Run this line if it's the first time you try to build
npm i

npm run start:dev
```
## Link to heroku


[premierleaguez](https://premierleaguez.herokuapp.com/)



## Link to documentation


[backenddevelopertest](https://backenddevelopertest.docs.apiary.io/)


## Link to docker build


[backend-developer-test](https://hub.docker.com/r/simpcyclassy/backend-developer-test)


# Software Developer Application Test

Create a API that serves the latest scores of fixtures of matches in a “**Mock Premier League**”

## User Types

There should be:

- **Admin accounts** which are used to
  - signup/login
  - manage teams (add, remove, edit, view)
  - create fixtures (add, remove, edit, view)
  - Generate unique links for fixture
- **Users accounts** who can
  - signup/login
  - view teams
  - view completed fixtures
  - view pending fixtures
  - robustly search fixtures/teams
- Only the search API should be availble to the public.

## Authentication and Session Management
1. Use redis as your session store.
3. Authentication and Authorization for admin and user accounts should be done using `Bearer token` and `JWT`.

## Tools/Stack

- NodeJs (JavaScript or TypeScript)
- MongoDB
- Redis
- Docker
- POSTMAN
- Jest
- Express

## Tests

Unit tests are a must, submissions without tests will be ignored.

## Submission

1. Your API endpoints should be documented in POSTMAN.
2. Seed the db with lots of data before final submission.
3. Code should be hosted on a git repository, Github preferably.
4. The API should be hosted on a live server (e.g. https://heroku.com)

## Bonus

You'll get bonus points for:
1. `containerization` using `docker`.
2. Thorough documentation using POSTMAN.
3. e2e tests and use of `Jest` for tests.
4. `web caching` API endpoints using `Redis`.
5. Implementing `rate limiting` for user account API access.

## Time Duration

7 days

## NB:

Please send an email to acknowledge the receipt of this document.
