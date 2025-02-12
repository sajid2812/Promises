/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(ms) {
  const startDate = new Date();
  while (true) {
    if (new Date().getTime() - startDate.getTime() > ms) {
      return new Promise((resolve, reject) => {
        resolve(`${ms / 1000} seconds have been passed.`);
      });
    }
  }
}

sleep(100).then((data) => {
  console.log(data);
});
