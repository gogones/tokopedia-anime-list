export default function checkSpecialCharInString(str) {
  const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return regex.test(str);
}
