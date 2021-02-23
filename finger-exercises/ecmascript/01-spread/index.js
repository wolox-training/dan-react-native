import isArray from './utils';

export function min(value) {
  if (value && isArray(value)){
    return Math.min(...value);
  }
  return value;
}

export function copy(cop) {
  if (isArray(cop)){
    return [...cop];
  }
  return { ...cop};
}

export function reverseMerge(element1, element2) {
  return [...element2, ...element1]
}

export function filterAttribs() {}
