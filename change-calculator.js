(function() {
    window.Money = function(cents) {
        if (!(this instanceof window.Money)) {
            throw new Error("Called `Money` as function.");
        } else {
            this._cents = cents;
        }
    };

    window.Money.prototype.getAmount = function () {
        return this._cents;
    };

    // Coin denominations which are available for use
    var coinTypes = [
        { name: "halfs",    val: 50 },
        { name: "quarters", val: 25 },
        { name: "dimes",    val: 10 },
        { name: "nickels",  val:  5 },
        { name: "pennies",  val:  1 }
    ];

    var calcMaxXinY = function (x, y) {
        return Math.floor(y / x);
    };

    window.Money.prototype.getMinCoins = function() {
        var curType, numOfType;
        var total = this.getAmount();
        var remainder = total;
        var response = {};

        for (var i = 0; i < coinTypes.length; i++) {
            curType = coinTypes[i];
            numOfType = calcMaxXinY(curType.val, remainder);

            if (numOfType > 0) {
                response[curType.name] = numOfType;
            }

            remainder = remainder - (numOfType * curType.val);
        }

        return response;
    };

})();