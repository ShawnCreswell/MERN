import { faker } from '@faker-js/faker';
import express from 'express';
// const express = require("express");
const app = express();




// const createUser = () => {
//   const newFake = {
//     id: faker.id(),
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     password: faker.info.userName(),
//     email: faker.info.email(),
//     phoneNumber: faker.phone.number()
//   };
//     return newFake;
// }

// const newFakeUser = createUser();
// console.log(newFakeUser);

// middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor(){
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.password = faker.internet.password();
        this.email = faker.internet.email(this.firstName, this.lastName);
        this.phoneNumber = faker.phone.number();
        this.id = faker.database.mongodbObjectId();
    }

}

class Company {
    constructor(){
        this.name = faker.company.name();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            state: faker.address.state()
        }
    }
}





// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
  res.json(new Company());
});

app.get("/api/users/company", (req, res) => {
  res.json([new User(), new Company()]);
});

const server = app.listen(8000, () =>
  console.log(`Server is A GO! ${server.address().port}!`)
);
