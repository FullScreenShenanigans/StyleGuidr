var bogusArray = [7, 14, 21, 28, 35, 42, 49],
    bogusObject = {},
    StyleGuider;

describe("constructor", function () {
    it("throws an error when not given a bogusArray", function () {
        chai.expect(function () {
            new StyleGuidr.StyleGuidr({});
        }).to.throw("No bogusArray given to StyleGuidr.");
    });

    it("doesn't throw an error", function () {
        StyleGuider = new StyleGuidr.StyleGuidr({
            "bogusArray": bogusArray,
            "bogusObject": bogusObject
        });
    });

    it("sets bogusArray", function () {
        chai.expect(StyleGuider.getBogusArray()).to.be.equal(bogusArray);
    });

    it("sets bogusObject", function () {
        chai.expect(StyleGuider.getBogusObject()).to.be.equal(bogusObject);
    });

    it("sets a default bogusObject", function () {
        StyleGuider = new StyleGuidr.StyleGuidr({
            "bogusArray": bogusArray
        });

        chai.expect(StyleGuider.getBogusObject()).to.be.deep.equal({
            "a": 7,
            "b": 14,
            "c": 21,
            "d": 28,
            "e": 35,
            "f": 42,
            "g": 49
        });
    });
});

describe("core functions", function () {
    it("gets bogusArray's total", function () {
        var total = 7 + 14 + 21 + 28 + 35 + 42 + 49;

        chai.expect(StyleGuider.getBogusArrayTotal()).to.be.equal(total);
    });

    it("gets bogusObject values as array", function () {
        chai.expect(StyleGuider.getBogusObjectValuesAsArray()).to.be.deep.equal(bogusArray);
    });
});