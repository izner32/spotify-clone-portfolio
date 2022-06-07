export function millisToMinutesAndSeconds(millis: number) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds;
}

export function msToTime(millis: number, type: string) {
  const seconds = Math.floor((millis / 1000) % 60);
  const minutes = Math.floor((millis / (1000 * 60)) % 60);
  const hours = Math.floor((millis / (1000 * 60 * 60)) % 24);

  switch (type) {
    case 'seconds':
      return seconds;
    case 'minutes':
      return minutes;
    case 'hours':
      return hours;
    default:
      return 0;
  }
}
