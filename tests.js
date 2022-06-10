
var assert = require('assert');
const personBuzz = require("./personBuzz");

describe("personBuzz Tests", () => {

    it("should return name of David Dow as name when David Dow is passed in",  () => {

        let result = personBuzz.buzz('David', 'Dow', '05/05/1990');

        assert.equal(result.name, "David Dow", "Did not find David Dow");

    });


});

