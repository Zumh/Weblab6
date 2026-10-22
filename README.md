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
| ☐ | GET         | `/api/tasks/:id` | Read one task |
| ☐ | POST        | `/api/tasks`     | Create a task |
| ☐ | PUT         | `/api/tasks/:id` | Update a task |
| ☐ | DELETE      | `/api/tasks/:id` | Delete a task |

## ORM vocabulary
| Term        | In this lab                                                             |
| ----------- | ----------------------------------------------------------------------- |
| Model       | Task JavaScript definition                                              |
| Table       | Tasks in SQLite                                                         |
| Instance    | One Task object / one row                                               |
| Migration   | Versioned schema change; recommended for shared or production databases |
| Association | A relationship such as User has many Tasks                              |