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

* 환경 변수 test.env (프로젝트 root 위치) 파일 생성

```
NODE_ENV=production
PROCESS_TYPE=web
LOGGER_LEVER=debug
MONGO_URI=mongodb://${id}:${pass}@${domain}:${port}/barogo
REDIS_URI=redis://127.0.0.1:6379
PORT=3000
LANG_TYPE=ko
MAIL_ID=${id}
MAIL_PASS=${pass}
```

## 시작 / 종료 / 재시작

### web

pm2 를 사용 하여 node process 관리

```
cd ${home}/barogoapi
pm2 start ./test.json
pm2 stop bapi
pm2 restart bapi
pm2 logs bapi
pm2 logs bapi --lines 1000
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
