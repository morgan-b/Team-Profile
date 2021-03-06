const Intern = require("../lib/Intern.js");

   //Testing Intern
describe('Intern', () => {

    //Testing Intern Name
    it("outputs Intern name", () => {

        const name = "Morgan";

        const emp = new Intern(name);
        expect(emp.name).toEqual(name);


    });

    //Testing Intern ID
    it("outputs Intern id", () => {

        const id = 75;

        const emp = new Intern("value",id);
        expect(emp.id).toEqual(id);


    });

    //Testing Intern Email
    it("outputs Intern email", () => {

        const email = "mabailey079@gmail.com";

        const emp = new Intern("value","value",email);
        expect(emp.email).toEqual(email);


    });

    //Testing Intern School
    it("outputs Intern School", () => {

        const school = "Foo University";

        const emp = new Intern("value","value","value",school);
        expect(emp.school).toEqual(school);


    });

    //Testing Intern Role
    it("outputs Intern role", () => {

        const role = "Intern";

        const emp = new Intern("value1","value2","value3","value4");
        expect(emp.role).toEqual(role);


    });

});