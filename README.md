# bankABC

### Install Process (Docker)
Pre - local setup

1. Make sure Docker is installed.
2. Port 3300 (app) and 33306 (DB) must be available locally. Otherwise you can modify `docker-compose.yml`file.

Local setup 
1. Clone the repository
2. Create the .env file. - `cp .env.example .env`
3. Run `Docker-compose up` (add a `-d` for hide logs)
4. While the container build, you can add entry in `hosts` file to update domain path.
5. Once the containers up bash in to app containers `docker-compose exec app bash`
6. Run `composer install`
7. Run `php artisan key:generate`
8. Run `php artisan migrate:seed`
9. Hit 127.0.0.1:3300 host url to view application. make sure APP_URL is defined in `.env` file.

If you want to connect external DB, change the DB credentials in `docker-compose.yml`.
(*note- this is not tested)

### Install without Docker

1. Clone the repository
2. Install WAMP or XAMPP any other web server and make vertual hosts to the clone repo directory. (Dont need if you are using `www` or `htdocs` defalut directories).
3. Run `npm install` to install node modules.
4. After starting the server you can check on published URL. (127.0.0.1 or 127.0.0.1:8000)

If you are using artisan server Run `php artisan serve` to start the laravel development server.

# Run Vuejs App

1. Run `npm install` .
2. "dev":  "npm run development" - to run dev server
3. "prod": "npm run production", - to run prod server
4. Node will build the frontend app and push it to the public directory.

# Publishing only Vuejs app

If you want, you can publish seperately too. (If you are using a CDN like aws cloudfront, copy public directory there).

# For Swagger API Documentations

You can visit `URL/api/documentation` for the API documentation and testing.

# For PHP Unit testing 

Find the test cases on test folder.

for run test cases please use any of below commands.

- vendor/bin/phpunit or
- ./vendor/bin/phpunit or (for mac)
- phpunit
- or `php artisan test`



