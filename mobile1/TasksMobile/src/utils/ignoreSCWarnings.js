import {YellowBox} from 'react-native';

const ignoredWarnings = ['Expected style', 'Node of type'];

function isWarnIgnored(...args) {
  return args.some((arg) => {
    if (typeof arg !== 'string') {
      return false;
    }

    return ignoredWarnings.some((ignoredWarning) => {
      return arg.includes(ignoredWarning);
    });
  });
}

if (__DEV__) {
  const _warn = console.warn;
  console.warn = function (...args) {
    if (isWarnIgnored(...args)) {
      return;
    }
    _warn(...args);
  };

  YellowBox.ignoreWarnings(ignoredWarnings);
}
