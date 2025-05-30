import { initialise } from "conductor/dist/conductor/runner/util/";
import { RostEvaluator } from "./RostEvaluator";
import { evaluate } from "./LocalEvaluator";

const test = (t, expected) => {
    let result
    try{
        result = evaluate(t)
    }catch(x){
        result = x + ""
    }
    if(result === expected){
        console.log("PASS")
    }else{
        console.log("FAIL")
        console.log("Test:")
        console.log(t)
        console.log("Output: " + result)
        console.log("Expected output: " + expected)
    }
}


test(`
fn abc(a: i32) -> i32 {
    returnera a + 1;
}

abc(3);
`, 4)

test(`
medan (falskt){
   1;
}`, undefined)

test(`låt räknare: i32 = 0;

fn inc(a: i32) -> i32 {
    om (a > 10){
        returnera a;
    }annars{
        returnera inc(a + 1);
    }
    
}

inc(räknare);
`, 11)

// Change
test(`låt a: i32 = 4;
låt b: i32 = a;
a;`, 4)

// Test arithmetic operations
test(`låt x: i32 = 5 + 3 * 2;
    x;`, 11)
    
test(`låt x: i32 = (5 + 3) * 2;
x;`, 16)

// Test boolean logic
test(`
låt x: bool = sant && falskt;
x;
`, false)

test(`låt x: bool = sant || falskt;
x;`, true)

// Test comparison operators
test(`låt x: bool = 5 > 3;
x;`, true)

test(`låt x: bool = 5 <= 3;
x;`, false)

// Test nested if statements
test(`
fn check(a: i32) -> i32 {
    om (a > 10) {
        returnera 1;
    } annars {
        om (a > 5) {
            returnera 2;
        } annars {
            returnera 3;
        }
    }
}

check(12);
`, 1)

test(`
fn check(a: i32) -> i32 {
    om (a > 10) {
        returnera 1;
    } annars {
        om (a > 5) {
            returnera 2;
        } annars {
            returnera 3;
        }
    }
}

check(7);
`, 2)

test(`
fn check(a: i32) -> i32 {
    om (a > 10) {
        returnera 1;
    } annars {
        om (a > 5) {
            returnera 2;
        } annars {
            returnera 3;
        }
    }
}

check(3);
`, 3)

// Test recursive function
test(`
fn factorial(n: i32) -> i32 {
    om (n == 0) {
        returnera 1;
    } annars {
        returnera n * factorial(n - 1);
    }
}

factorial(5);
`, 120)

// Test function with multiple parameters
test(`
fn add(a: i32, b: i32) -> i32 {
    returnera a + b;
}

add(3, 4);
`, 7)

// Test variable shadowing
test(`
låt x: i32 = 10;
{
    låt x: i32 = 20;
    x;
}
`, 20)

test(`3 == 4;`, false)

test(`
    låt a: i32 = 5;
    låt b: &i32 = &a;
    a + b;
        `, 10)


test(`
   låt a:i32 = 5;
   låt b:&i32 = &a;
   b+1;
   `,6)

test(`
   låt a:i32 = 5;
   låt b:i32 = a + 1;
   låt c:i32 = a + 2;

   b;
   `,"Error: Owner doesn't exist")

test(`
   
   låt a:i32 = 5;

   {
   låt a:i32 = 6;
   }

   {
   låt a:i32 = 7;
   }
   
   a;
`, 5)

test(`
   
   fn knasbana() -> i32 {
       låt a:i32 = 5;
       låt b:i32 = 10;
       låt c:i32 = a + b;
       returnera c;
   }

   låt a:i32 = knasbana();
   a;
       
`, 15)

test(`
   fn plus(x: &i32, y: &i32) -> i32 {
       returnera x + y;
   }   
   
   låt a: i32 = 5;
   låt b: i32 = 10;
   låt c: i32 = plus(&a, &b);
   a;
`, 5)

test(`
   låt a:i32 = 5;
   låt b:i32 = a + 1;
   låt c:i32 = b + 2;
   låt d:i32 = c + 3;
   låt e:i32 = d + 4;
   låt f:i32 = e + 5;
   f;
`,20)

test(`
   låt a:i32 = 5;
   låt b:i32 = 10;
   låt c:i32 = &a + &b;

   c;
`,15)

test(`
   låt a:i32 = 5;
   låt b:i32 = 10;
   låt c:i32 = a + &b;

   c;
`,15)

test(`
    låt a:i32 = 5;
    låt b:i32 = 10;
    låt c:i32 = &a + b;

    c;
`,15)


