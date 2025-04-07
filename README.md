[![WheelHub](https://wheelhub.es/logo/Logotipo-Vertical-Negro-Alta.png)](https://wheelhub.es/)

# Wizard backend

### User Creation
 POST "/api/create-user" payload data expected:

| CAMPO | FORMATO |
| ------ | ------ |
| username | string |
| password | string |
| clue? | string |

---

| Tabla USER|  |
| ------ | ------ |
| id | string |
| username | string |
| password | string |
| clue? | string |

*Password encriptado con SHA256.

---

> incluye rest.http con algunas pruebas con Rest-Client.

---


### Requisitos
- [Node.js]
- [Express]
- Typescript
- [Swagger]
- [Rest-Client]
- [TypeORM]
- [Sqlite]



   [swagger]: <https://swagger.io/>
   [axios]: <https://axios-http.com/>
   [eslint]: <https://eslint.org/>
   [rest-client]: <https://marketplace.visualstudio.com/items?itemName=humao.rest-client>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [typeorm]: <https://typeorm.io>
   [sqlite]: <https://www.sqlite.org>
