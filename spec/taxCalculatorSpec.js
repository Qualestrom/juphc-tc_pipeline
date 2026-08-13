const { calculateTax } = require('../server');

describe("Tax Calculator functionality", function() {
    it("should calculate a 20% tax for positive income", function() {
        expect(calculateTax(10000)).toEqual(2000);
    });

    it("should return 0 for zero or negative income", function() {
        expect(calculateTax(0)).toEqual(0);
        expect(calculateTax(-500)).toEqual(0);
    });
});