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