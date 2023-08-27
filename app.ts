//const name = process.env.NAME
if (!process.env.NODE_ENV) process.env.NODE_ENV = "development";
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
console.log(`Service is running on->${process.env.NODE_ENV}`);
const sayHi = (name: any) => {
    console.log(`hi ${name}`)
}
sayHi(process.env.NAME);