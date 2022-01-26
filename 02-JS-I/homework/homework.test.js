const homework = require("./homework")
// @ponicode
describe("homework.suma", () => {
    test("0", () => {
        let result = homework.suma(100, 410)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = homework.suma(30, 50)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = homework.suma(320, 1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = homework.suma(320, 30)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = homework.suma(90, 50)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = homework.suma(NaN, NaN)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("homework.resta", () => {
    test("0", () => {
        let result = homework.resta(100, 100)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = homework.resta(320, 90)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = homework.resta(550, 520)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = homework.resta(350, 4)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = homework.resta(350, 90)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = homework.resta(-Infinity, -Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("homework.multiplica", () => {
    test("0", () => {
        let result = homework.multiplica(400, 1)
        expect(result).toBe(undefined)
    })

    test("1", () => {
        homework.multiplica(100, 4)
    })

    test("2", () => {
        homework.multiplica(1, 380)
    })
})
