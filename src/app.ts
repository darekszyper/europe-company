import { Company } from "./class/Company.js";
import { Frontend, Backend } from "./class/Roles.js";

//Frontend employees
let fEmployee1: Frontend = new Frontend('John', 'SpaceX');
let fEmployee2: Frontend = new Frontend('Jack', 'SpaceX');
let fEmployee3: Frontend = new Frontend('Derek', 'NASA');

let company1: Company = new Company();
company1.addEmployee(fEmployee1);
company1.addEmployee(fEmployee2);
company1.addEmployee(fEmployee3);

console.log(company1.getNameList());
console.log(company1.getProjectList());

//Backend employees
let bEmployee1: Backend = new Backend('Bob', 'API Development');
let bEmployee2: Backend = new Backend('Ola', 'SpaceX');
let bEmployee3: Backend = new Backend('Derek');

let company2: Company = new Company();
company2.addEmployee(bEmployee1);
company2.addEmployee(bEmployee2);
company2.addEmployee(bEmployee3);

console.log(company2.getNameList());
console.log(company2.getProjectList());