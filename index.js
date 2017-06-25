'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var msUntilHour = function msUntilHour(inputDate, targetHour) {
  if (!isValidDate(inputDate)) {
    throw Error('You must provide an instance of Date() as the first argument');
  }

  if (!isValidTargetHour(targetHour)) {
    throw Error('You must provide a target hour between 0 and 24 as the second argument');
  }

  var targetDate = new Date();

  if (inputDate.getHours() >= targetHour) {
    targetDate.setDate(targetDate.getDate() + 1);
  }

  targetDate.setHours(targetHour);
  targetDate.setMinutes(0);
  targetDate.setSeconds(0);
  targetDate.setMilliseconds(0);

  return targetDate - inputDate;
};

var isValidDate = function isValidDate(date) {
  return date && date instanceof Date;
};

var isValidTargetHour = function isValidTargetHour(targetHour) {
  return targetHour !== undefined && Number.isInteger(targetHour) && targetHour >= 0 && targetHour <= 23;
};

exports.default = msUntilHour;
module.exports = exports['default'];
