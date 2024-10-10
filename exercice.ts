/*
    EXERCICES 1 : 
*/

const Hello = () => {
    return 'Hello World!';
}

console.log(Hello());

const add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(1, 2));

const mult = (a: number, b: number): number => {
    return a * b;
}

console.log(mult(2, 3));

const max_nb = (a: number, b: number): number => {
    if (a > b) {
        return a;
    }
    return b;
}

console.log(max_nb(5, 2));

const min_nb = (a: number, b: number): number => {
    if (a < b) {
        return a;
    }
    return b;
}

console.log(min_nb(3, 8));

const is_even = (entire: number): boolean => {
    if (entire % 2 === 0) {
        return true
    }
    return false;
}

console.log(is_even(8));

const is_div = (a: number, b: number): boolean => {
    if (a % b === 0) {
        return true;
    }
    return false;
}

const is_leap = (year: number): boolean => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    return false;
}

const delta = (a: number, b: number, c: number): number => {
    const delta: number = (b * b) - (4 * a * c);

    return delta;
}

console.log(delta(5, 3, 2));

const root = (a: number, b: number, c: number): number[] => { 
    let result = delta(a, b, c);
    
    if (result < 0) {
        return [];
    } 

    else if (result === 0) {
        return [-b / 2 * a]
    }

    else {
        return [
                (-b - Math.sqrt(result) / (2 * a)),
                (-b + Math.sqrt(result) / (2 * a))
        ]
    }
}

/*
    EXERCICES 2 : 
*/

const print_int = (n: number) => {
    for (let i = 0; i < n; i++) {
        console.log(i + 1);
    }
}

console.log(print_int(5));

const sum_int = (n: number) => {
    let result: number = 0;
    
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
}

console.log(sum_int(2));

const mult_table = (n: number) => {
    for (let i = 1; i < 10; i++) {
        console.log(n * (i + 1));
    }
}

console.log(mult_table(2));

const factorial = (n: number): number => {
    let result: number = 1;

    for (let i = 2; i <= n; i++) {
        result *= i; 
    }
    return result;
}

console.log(factorial(5));