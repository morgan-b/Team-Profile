const Intern = require("../lib/Intern.js");

describe('Intern', () => {

    it("outputs Intern name", () => {

        const name = "Morgan";

        const emp = new Intern(name);
        expect(emp.name).toEqual(name);


    });

    it("outputs employee id", () => {

        const id = 75;

        const emp = new Intern("value",id);
        expect(emp.id).toEqual(id);


    });
    it("outputs Intern email", () => {

        const email = "mabailey079@gmail.com";

        const emp = new Intern("value","value",email);
        expect(emp.email).toEqual(email);


    });
    it("outputs Intern School", () => {

        const school = "Foo University";

        const emp = new Intern("value","value","value",school);
        expect(emp.school).toEqual(school);


    });
    it("outputs Intern role", () => {

        const role = "Intern";

        const emp = new Intern("value1","value2","value3","value4");
        expect(emp.role).toEqual(role);


    });

});