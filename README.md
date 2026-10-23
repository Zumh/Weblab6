# Weblab6
lab6 for Advanced web

- npm install
- npm start

## part 0 Prepare the workspace
Checkpoint 

- [x] npm install finishes without errors.
- [x] package.json contains a dev script.
- [x] .env is excluded by .gitignore. 

## Part 1  Express routing and middleware

| ✓ | HTTP method | Path             | Purpose       |
| - | ----------- | ---------------- | ------------- |
| [x] | GET         | `/api/tasks`     | List tasks    |
| [x] | GET         | `/api/tasks/:id` | Read one task |
| [x] | POST        | `/api/tasks`     | Create a task |
| [x] | PUT         | `/api/tasks/:id` | Update a task |
| [x] | DELETE      | `/api/tasks/:id` | Delete a task |

## Part2 Sequelize and object-relational mapping 
| Term        | In this lab                                                             |
| ----------- | ----------------------------------------------------------------------- |
| Model       | Task JavaScript definition                                              |
| Table       | Tasks in SQLite                                                         |
| Instance    | One Task object / one row                                               |
| Migration   | Versioned schema change; recommended for shared or production databases |
| Association | A relationship such as User has many Tasks                              |

## Part3 CRUD routes with Sequelize 
| [x] | Request               | Body or expected result                           |
| - | --------------------- | ------------------------------------------------- |
| [x] | `POST /api/tasks`     | `{ "title": "Finish Week 7 lab", "priority": 1 }` |
| [x] | `GET /api/tasks`      | `200 OK` and an array containing the new task     |
| [x] | `PUT /api/tasks/1`    | `{ "completed": true }`                           |
| [x] | `DELETE /api/tasks/1` | `204 No Content`                                  |

## Part 4  Validate input with express-validator
| Risk                       | Lab defense                                                                       |
| -------------------------- | --------------------------------------------------------------------------------- |
| SQL injection              | Sequelize parameterizes normal ORM queries; validation constrains accepted input. |
| Cross-site scripting (XSS) | Treat stored text as untrusted and escape it when rendering it in a browser.      |
| Code injection             | Never execute request values as code, shell commands, or dynamic module names.    |
| Bad application state      | Validate types, ranges, and required fields before persistence.                   |

## Part 5  Harden the Express application 

| Threat                            | Practical treatment in this lab or deployment                                                |
| --------------------------------- | -------------------------------------------------------------------------------------------- |
| Cross-site scripting (XSS)        | Validate input, encode output in the client, and use Helmet headers to add browser defenses. |
| SQL injection                     | Use Sequelize APIs and avoid concatenating user input into raw SQL queries.                  |
| Denial of service (DoS)           | Rate-limit requests and configure proxy/load-balancer limits in deployment.                  |
| Cross-site request forgery (CSRF) | Use `SameSite` cookies and CSRF protection for cookie-authenticated browser forms.           |
| Session theft                     | Set `Secure`, `HttpOnly`, and `SameSite` cookie attributes, and use HTTPS/TLS in production. |

## Part 6  Authenticate requests with Passport
- Passport is authentication middleware. 
- It identifies who is making a request; authorization is a separate decision about what that user may access. 
- This lab uses Passport Local, bcrypt password hashing, and 
- session cookies for a minimal demonstration.

## Performance checklist 
- [ ] Compression middleware is enabled for suitable HTTP responses. 
- [ ] Handlers use async database calls rather than synchronous blocking work. 
- [ ] The cache has a TTL and is invalidated after a task mutation. 
- [ ] Production deployment uses a reverse proxy and TLS termination. 
- [ ] Horizontal scaling uses multiple processes/containers behind a load balancer; do not rely on in-process memory for shared sessions or cache. 