This is the backend for Hello Darling take home assignment. Make sure you have `src/config.ts` as it is excluded in this repository for security reasons. 

In `config.ts` make sure you declare the following variables: 

```
export const DB_URL = "postgresql://postgres:xxxxx";
```

On startup, the postgres DB is automatically seeded from `src/seed.ts`

To run this project
```
npm install
npm start
```

The base URL is `http://localhost:3000`. Look at the routes folder for all available endpoints. 

The model folder contains all database tables that will be created, for development purposes, tables are **DROPPED** and recreated on each run. 


To run test
```
npx jest
```