export function TimeConvert(second: number) {
  const min = Math.floor(second / 60);
  const sec = second % 60;
  return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
}

export function secondToDate(second: number | undefined) {
  if (second) {
    const date = new Date(second * 1000); // convert second to miliseconds
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  }
}
