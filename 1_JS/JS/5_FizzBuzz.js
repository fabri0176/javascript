
for (let i = 0; i < 100; i++) {
    letModule3 = i % 3;
    letModule5 = i % 5;
    if (letModule3 === 0 && letModule5 === 0) {
        console.log(`${i} FizzBuzz`)
        continue;
    }
    if (letModule3 === 0) {
        console.log(`${i} fizz`)
    } else if (letModule5 === 0) {
        console.log(`${i} buzz`)
    }

}