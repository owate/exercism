/*
 *
 * This is only a SKELETON file for the "Leap" exercise. It's been provided as a
 * convenience to get you started writing code faster.
 * no-undef
 */

var Year = function (input) {
  this.value = input;
};

Year.prototype.isLeap = function () {
  const four = 4,
    fourHundred = 400,
    hundred = 100,
    remainder = 0;

return (this.value % fourHundred === remainder) ||
        (this.value % four === remainder && this.value % hundred !== remainder);


};

module.exports = Year;
