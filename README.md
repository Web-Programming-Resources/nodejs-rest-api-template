# nodejs-rest-api-template
node.js 로 rest api 서버를 구성을 위한 기본 template

이 repo만 clone 하면 기본적인 기능을 갖춘 rest api 서버가 만들어짐

추가로 필요한 api 들은 구현되어있는 api 를 참고하여 구현하면됨

## 환경변수

- `NODE_ENV` (`'development' | 'production'`) `require`: `development` 세팅이면, dotev 를 사용하여 로컬 .env 파일을 참조
- `LOGGER_LEVEL` (`'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly'`), default: `info`
- `LOGGER_ENABLED` (`'true' | 'false'`), default: `true`, `require`
- `MONGODB_URI` `require`
- 'REDIS_URI' default: `redis://127.0.0.1:6379` `require`
- `PORT` `require`

### 환경 변수 설정 방법
```
$ export NODE_ENV = 'production'
$ export LOGGER_LEVEL = 'info'
```

## 참고 url

  * best practice
    ```
      https://www.codementor.io/mattgoldspink/tutorials/nodejs-best-practices-du1086jja
      https://blog.risingstack.com/node-js-best-practices-2017/
      https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/

      # config 설정 및 기본 구조 참조
      https://blog.risingstack.com/node-js-project-structure-tutorial-node-js-at-scale/
    ```

  * git repository
    ```
      https://github.com/RisingStack/multi-process-nodejs-example/
      https://github.com/developit/express-es6-rest-api
    ```

  * From velopert
    ```
      https://velopert.com/2448
      https://velopert.com/594
      https://github.com/velopert/nodejs-jwt-example/
      https://github.com/velopert/mongoose_tutorial
    ```

  * express router modular
    ```
    express.Router
    http://expressjs.com/en/guide/routing.html
    ```
