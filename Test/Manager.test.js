const Manager= require("../lib/Manager.js");

describe('Manager', () => {

    it("outputs Manager name", () => {

        const name = "Morgan";

        const emp = new Manager(name);
        expect(emp.name).toEqual(name);


    });

    it("outputs employee id", () => {

        const id = 75;

        const emp = new Manager("value",id);
        expect(emp.id).toEqual(id);


    });
    it("outputs Manager email", () => {

        const email = "mabailey079@gmail.com";

        const emp = new Manager("value","value",email);
        expect(emp.email).toEqual(email);


    });
    it("outputs Manager Office Number", () => {

        const officeNumber = "6107246633";

        const emp = new Manager("value","value","value",officeNumber);
        expect(emp.officeNumber).toEqual(officeNumber);


    });
    it("outputs Manager role", () => {

        const role = "Manager";

        const emp = new Manager("value1","value2","value3","value4");
        expect(emp.role).toEqual(role);


    });

});