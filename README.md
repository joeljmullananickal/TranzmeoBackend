Clone the repository:

git clone <repo-url>
cd <repo-folder>


Install dependencies:

npm install


Create environment variables:

cp .env.example .env
# Edit .env to add your PostgreSQL DATABASE_URL


Run database migrations:

npm run migrate


Start development server:

npm run dev


The server will run on http://localhost:3030 (or the port defined in your code).

Deployment
1. Start production server
npm start


Ensure NODE_ENV=production and DATABASE_URL is set in your environment.

The server will connect to your production PostgreSQL database.

2. Deployment on hosting platforms
Heroku
heroku create <app-name>
git push heroku main
heroku config:set NODE_ENV=production
heroku config:set DATABASE_URL=<your-database-url>
heroku run npm run migrate

Render / Railway / Other Node Hosts

Connect your Git repository or upload project.

Set environment variables in the platform dashboard:

DATABASE_URL = your database URL

NODE_ENV = production

Start command: npm start

Run migrations after deployment: npm run migrate if needed.

Environment Variables

Example .env.example:

DATABASE_URL=postgres://user:password@host:port/dbname


Notes

Ensure the PostgreSQL database is accessible from your host.

Run migrations before starting the server in a new environment.