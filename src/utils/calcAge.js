export const calcAge = birth => {
  const birthArr = birth.split('/');
  const age = Math.floor((new Date() - new Date(Number(birthArr[2]), Number(birthArr[1]) - 1, Number(birthArr[0]))) / 1000 / 3600 / 24 / 30 / 12);
  return age;
}