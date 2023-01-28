function rand(min = 1000, max = 3000) {
  return Math.floor(Math.random() * (max - min) + min);
}

async function f1() {
  await new Promise(resolve => setTimeout(() => {
    console.log('f1');
    resolve();
  }, rand()));
}

async function f2() {
  await new Promise(resolve => setTimeout(() => {
    console.log('f2');
    resolve();
  }, rand()));
}

async function f3() {
  await new Promise(resolve => setTimeout(() => {
    console.log('f3');
    resolve();
  }, rand()));
}

f1()
  .then(f2)
  .then(f3)
  .then(() => console.log('Olá mundo!'));