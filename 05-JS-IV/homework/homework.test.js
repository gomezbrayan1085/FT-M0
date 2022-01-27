const homework = require("./homework")
// @ponicode
describe("homework.crearGato", () => {
    test("0", () => {
        let result = homework.crearGato("Extensions", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = homework.crearGato("Lights", "1.0.0")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = homework.crearGato("Port", "4.0.0-beta1\t")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = homework.crearGato("Harbors", "v4.0.0-rc.4")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = homework.crearGato("Port", "v4.0.0-rc.4")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = homework.crearGato("", "")
        expect(result).toMatchSnapshot()
    })
})
