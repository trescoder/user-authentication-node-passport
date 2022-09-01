# user-authentication-node-passport

this was meant to show how to use passport-local strategy and passport-jwt strategy altogheter to authenticated 
users, and protect routes from un authorized ones.

# How to run  

just clone the repo, install the dependencies, and run 'npm run dev'

# .env file
you will need a .env file with the following properties

DB_NAME=yourDBName

DB_PORT=27017 (default for mongo)

DB_HOST=yourDBHost

PORT=3000

JWT_SECRET=yourJwtSecret

SESSION_SECRET=yourSessionSecret
