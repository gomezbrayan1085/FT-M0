const rewire = require("rewire")
const index = rewire("./index")
const getGitEmail = index.__get__("getGitEmail")
// @ponicode
describe("getGitEmail", () => {
    test("0", () => {
        let result = getGitEmail()
        expect(result).toMatchSnapshot()
    })
})
