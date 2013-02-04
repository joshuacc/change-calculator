describe("Money class", function() {
    it("should construct new money objects", function() {
        var moneyObject = new Money(200);
        expect(moneyObject instanceof Money).toBe(true);
    });

    it("should provide access to amount in cents", function() {
        var moneyObject = new Money(200);
        expect(moneyObject.getAmount()).toBe(200);
    });

    describe("minimum coins calculator", function() {
        it("should be a function", function() {
            expect(typeof Money.prototype.getMinCoins).toBe("function");
        });

        it("should return two halfs for one dollar", function() {
            var moneyObject = new Money(100);
            expect(moneyObject.getMinCoins()).toEqual({halfs: 2});
        });

        it("should return one quarter, one dime, and two pennies for 37 cents", function () {
            var moneyObject = new Money(37);
            expect(moneyObject.getMinCoins()).toEqual({
                quarters: 1,
                dimes: 1,
                pennies: 2
            });
        });
    });
});