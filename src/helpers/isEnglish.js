export function isNotEnglish(str) {
  const englishAlphabetRegExp = /^[A-Za-z\s]*$/;
  const containsNonEnglish = (str) => !englishAlphabetRegExp.test(str);
  return containsNonEnglish(str);
}