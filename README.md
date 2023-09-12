
# WorkJS

An application created specifically for students and graduates who want to showcase their JavaScript programming skills in order to get a job as a JavaScript programmer. This platform allows users to expose their potential by creating a personal student profile.
## Used technologies

| Technology             | Version                                                                |
| ----------------- | ------------------------------------------------------------------ |
| React | 18.2 |
| Typescript | 4.9.5 |
| Sequelize | 6.31 |
| Passport | 0.6 |
| Express | 4.18 |
| Bootstrap | 5.2.3 |



## Features

- Login and registration for two types of account
- Managing projects on student account
- Viewing student profiles as recruiter
- Editing student profile


## Screenshots

#### > Login view <

![Login](https://i.ibb.co/jbGBCzK/login.jpg)

#### > Students list <

![Students](https://i.ibb.co/zN7mNGf/students.jpg)

#### > Student profile <

![Student](https://i.ibb.co/7vPtW1t/student.png)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`DB_HOST`
`DB_DATABASE`
`DB_USERNAME`
`DB_PASS`

## Database

Use the `database.sql` file to recreate the database

## Keys

Create folder keys in `src/server` and generate public and private keys:  
`id_rsa_priv.pem`  
`id_rsa_pub.pem`  

Algorithm: `RS256`

## Run Locally

Clone the project

```bash
  git clone https://github.com/bolo0010/workjs.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Change _origin_ property to localhost in `index.ts` file and change _API_URL_ variable to localhost in `api_url.ts`

```diff
app.use(cors({
-     origin: ['https://work.arturmaslowski.pl/'],
+     origin: ['http://localhost:8080/'],
      credentials: true
}));
```
```diff
- export const API_URL = "https://work.arturmaslowski.pl/"
+ export const API_URL = "http://localhost:5000/"
```
Start the server

```bash
  npm run dev
```


## Demo

https://work.arturmaslowski.pl/

Registration is open to everyone.

