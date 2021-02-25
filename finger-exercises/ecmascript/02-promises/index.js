// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return createPromise(time);
}

export function asyncDelay(time) {
    return createPromise(time);
}

function createPromise(time) {
  return new Promise((resolver, reject) => {
    resolver(time);
    let error = new Error('This time is too much !');
    reject(error);
  });
}