
const Employee = require("../lib/Employee.js");

describe('Employee', () => {

    it("outputs employee name", () => {

        const name = "Morgan";

        const emp = new Employee(name);
        expect(emp.name).toEqual(name);


    });

    it("outputs employee id", () => {

        const id = 75;

        const emp = new Employee("value1",id);
        expect(emp.id).toEqual(id);


    });
    it("outputs employee email", () => {

        const email = "mabailey079@gmail.com";

        const emp = new Employee("value1","value2",email);
        expect(emp.email).toEqual(email);


    });
    it("outputs employee role", () => {

        const role = "Employee";

        const emp = new Employee("value1","value2","value3",role);
        expect(emp.role).toEqual(role);


    });

});