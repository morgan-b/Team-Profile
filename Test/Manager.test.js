const Manager= require("../lib/Manager.js");


//Testing Manager
describe('Manager', () => {


    //Testing Manager Name
    it("outputs Manager name", () => {

        const name = "Morgan";

        const emp = new Manager(name);
        expect(emp.name).toEqual(name);


    });

    //Testing Manager ID
    it("outputs Manager id", () => {

        const id = 75;

        const emp = new Manager("value",id);
        expect(emp.id).toEqual(id);


    });

    //Testing Manager email
    it("outputs Manager email", () => {

        const email = "mabailey079@gmail.com";

        const emp = new Manager("value","value",email);
        expect(emp.email).toEqual(email);


    });

    //Testing Manager office number
    it("outputs Manager Office Number", () => {

        const officeNumber = "6107246633";

        const emp = new Manager("value","value","value",officeNumber);
        expect(emp.officeNumber).toEqual(officeNumber);


    });

    //Testing Manager role
    it("outputs Manager role", () => {

        const role = "Manager";

        const emp = new Manager("value1","value2","value3","value4");
        expect(emp.role).toEqual(role);


    });

});