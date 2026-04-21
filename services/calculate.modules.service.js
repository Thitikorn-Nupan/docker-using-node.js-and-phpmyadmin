class CalculateModulesService {
    static plus(a, b) {
        return a + b
    }
    static divide(a, b) {
        return a / b
    }
    static multiply(a, b) {
        return a * b
    }
    static minus(a, b) {
        return a - b
    }
}

const plus = CalculateModulesService.plus
const divide = CalculateModulesService.divide
const minus = CalculateModulesService.minus
const multiply = CalculateModulesService.multiply

export { // way to export many modules
    plus,
    divide,
    minus,
    multiply
}
