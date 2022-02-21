export class DateUtils {

  static timeCalculation(date1: Date, date2: Date) {
    let diff = Math.floor(date1.getTime() - date2.getTime());
    let secs = Math.floor(diff / 1000);
    let mins = Math.floor(secs / 60);
    let hours = Math.floor(mins / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 31);
    let years = Math.floor(months / 12);
    months = Math.floor(months % 12);
    days = Math.floor(days % 31);
    hours = Math.floor(hours % 24);
    mins = Math.floor(mins % 60);
    let message = "";
    if (days <= 0) {
      if (hours == 0) {
        message += "Hace " + mins + (mins > 1 || mins == 0 ? " minutos." : " minuto.");
      } else {
        message += "Hace " + hours + (hours > 1 ? " horas." : " hora.");
      }
    } else {
      if (months > 0 || years > 0) {
        message += "Hace " + months + (hours > 1 ? " meses." : " mes.");
      }
      if (years > 0) {
        message += "Hace " + years + (hours > 1 ? " años." : " año.");
      }
    }
    return message
  }

}
