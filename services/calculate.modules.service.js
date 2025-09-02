class CalculateModulesService {
    plus(a, b) {
        return a + b
    }
    divide(a, b) {
        return a / b
    }
    multiply(a, b) {
        return a * b
    }
    minus(a, b) {
        return a - b
    }
}

const serviceModules = new CalculateModulesService();

const plus = serviceModules.plus
const divide = serviceModules.divide
const minus = serviceModules.minus
const multiply = serviceModules.multiply

export { // way to export many modules
    plus,
    divide,
    minus,
    multiply
}
