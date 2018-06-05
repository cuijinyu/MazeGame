module.exports = function () {
    this.fc2 = function () {
        return 0;
    };
    this.promise_test = function () {
      return new Promise(resolve => {
          resolve(0);
      })
    }
}