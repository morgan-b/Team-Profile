
const Engineer = require("../lib/Engineer.js");

//Testing Engineer
describe('Engineer', () => {

    //Testing Engineer Name
    it("outputs Engineer name", () => {

        const name = "Morgan";

        const emp = new Engineer(name);
        expect(emp.name).toEqual(name);


    });

    //Testing Engineer ID
    it("outputs Engineer id", () => {

        const id = 75;

        const emp = new Engineer("value", id);
        expect(emp.id).toEqual(id);


    });

    //Testing Engineer Email
    it("outputs Engineer email", () => {

        const email = "mabailey079@gmail.com";

        const emp = new Engineer("value", "value", email);
        expect(emp.email).toEqual(email);


    });

    //Testing Engineer Github
    it("outputs Engineer Github", () => {

        const github = "Engineer_1";

        const emp = new Engineer("value", "value", "value", github);
        expect(emp.github).toEqual(github);


    });
    it("outputs Engineer role", () => {

        const role = "Engineer";

        const emp = new Engineer("value1", "value2", "value3", "value4");
        expect(emp.role).toEqual(role);


    });

});