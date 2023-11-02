import { FILL_ARRAY, SUM_OF_ARRAY } from './actionTypes.js'

export const initialValue = {
    data: [],
    sum: 0
};

export default function reducer(state = initialValue, { type, payload }) {
    switch (type) {
        case FILL_ARRAY: return fillArray(state, payload.quantity);
        case SUM_OF_ARRAY: return sumOfArray(state)

        default: return state
    }
}

function sumOfArray(state) {
    const sum = state.data.reduce((a, b) => a + b, 0)
    return {
        ...state,
        sum,
        lastAction: SUM_OF_ARRAY
    }
}

function fillArray(state, quantity) {
    const result = new Array(quantity).fill().map((_, index) => index + 1)
    return {
        ...state,
        lastAction: SUM_OF_ARRAY,
        data: result
    }
}

const workers = [
    { id: 1, name: 'Sebastian', salary: 1_200_000 },
    { id: 2, name: 'John', salary: 1_400_000 },
    { id: 3, name: 'Bob', salary: 1_250_000 },
    { id: 4, name: 'James', salary: 800_000 },
    { id: 5, name: 'Sunny', salary: 980_000 },
];

const debt = 600_000;

const employeesWithNewSalary = workers.map(worker => {
    let withholdingPercentage = worker.salary > 1_000_000 ? 0.25 : 0.15;
    let withholding = worker.salary * withholdingPercentage;

    withholding = Math.min(withholding, debt);

    const newSalary = worker.salary - withholding;
    return { ...worker, newSalary };
});

console.log("Employees with new salary after withholding:");
console.log(employeesWithNewSalary);
