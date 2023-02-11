# Cogip_repo

## Welcome to this repository

We are a team of four Junior Web Developper in training working on this project. The team consists of the following members :

- **Front-end team**
- - [Nour Evereart](https://github.com/NourEve)
- - [Laura Wilhelmi](https://github.com/LauraWlm)

- **Back-end team**
- - [Céline V.](https://github.com/CV136)
- - [Nathalie Vanden Abeele](https://github.com/nathvda)

---

## What it is

This project is the last group project of our formation at BeCode and we used a provided template to start working on it. We have to provide a fully functionning website which will allow its users to log in and log out, create an account as well as manage the data that have been added by the administrator itself. The dashboard will allow all these operations (CRUD) and the different lists and contents will be rendered with React. For more informations on the way you can use the project, please look at the section below.

Assets and mockup as well as the very base of the project were provided to us by the BeCode training center.

---

## Technologies

### Front end

- ReactJS (& JSX) (components & some libraries)
- Axios (http requests)
- React Router (routes)
- SASS (styling)

### Back end

- PHP
- MYSQL
- Bramus Router (routes)
- Whoops (error handling)
- PhpDotEnv (.env)

---

## Installation

#### Front end

Inside the Frontend folder, run the command line `npm install` to install all required depencies. Then, run `npm run dev` to be start the server and be able to launch the project.

#### Backend

This project will require you to use a database. You will find its template in the `database` folder of this repository. You can download it and use it, but you will need to introduce your own data inside of it if you want to make. Please make sure that the name of the database in your `.env` is the same as the name of the database you upload it in your SQL manager. See below for more information.

This project also uses environment variables to allow you to access the database. You will have to run `composer install`to install the required dependencies. Then, you can create the necessary `.env` file using the `.env.example` provided in the project. The required fields are the following.

> - The database name
> - The host name
> - The username
> - The password

To launch the server, you will need to to go the back end and run the following command : `php -S localhost:8080 -t public`

We used several libraries such as AXIOS for the HTTP requests, and React Router for the routing. For the Backend, we used Bramus Router, as was proposed in the base project we built everything on. We also used PHPunit to implement some basic testing.

---

## API Endpoints

You can use the following endpoints to interact with the database. The data structure of the body is givin in the column.

| Method | Endpoints              | Body                                                                           | Response                           |
| :----- | :--------------------- | :----------------------------------------------------------------------------- | :--------------------------------- |
| GET    | /companies             | -                                                                              | All companies                      |
| GET    | /invoices              | -                                                                              | All invoices                       |
| GET    | /contacts              | -                                                                              | All contacts                       |
| GET    | /companies/{id}        | -                                                                              | Return one company with given id   |
| GET    | /invoices/{id}         | -                                                                              | Return one invoice with given id   |
| GET    | /contacts/{id}         | -                                                                              | Return one contacts with given id  |
| POST   | /companies/add         | -                                                                              | Add company                        |
| POST   | /invoices/add          | -                                                                              | Add invoice                        |
| POST   | /contacts/add          | -                                                                              | Add contacts                       |
| PUT    | /companies/{id}/edit   | `{ name: <string>, type: <int>, country : <string>, tva: <string> }`           | Updates one company with given id  |
| PUT    | /invoices/{id}/edit    | `{ ref: reference <string>,date_due: date <string>,company: company id<int> }` | Updates one invoices with given id |
| PUT    | /contacts/{id}/edit    | `{ name:<string>,company_id: <int>,email: <string>,phone:<string> }`           | Updates one contacts with given id |
| DELETE | /companies/{id}/delete | -                                                                              | Deletes one company with given id  |
| DELETE | /invoices/{id}/delete  | -                                                                              | Deletes one invoices with given id |
| DELETE | /contacts/{id}/delete  | -                                                                              | Deletes one contacts with given id |

## Versions

As of today, February 10th 2023 , there is no completed version of this application yet.
