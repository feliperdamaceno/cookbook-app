export default function generateTimeString(hours, minutes, endString = '') {
  let timeString = ''
  if (hours) timeString += hours + 'h '
  if (minutes) timeString += minutes + 'min '
  return timeString + endString
}
