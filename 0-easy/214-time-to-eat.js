/**
 * TIME TO EAT
 *
 * Your task is to sort timestamps in the schedule in a reverse chronological order.
 *
 * IN: The first argument is a path to a file. Each line includes a test case: a schedule containing unsorted timestamps in HH:MM:SS format.
 *  ex.
 *    02:26:31 14:44:45 09:53:27
 *    05:33:44 21:25:41
 *
 * OUT: Sort timestamps in each schedule from the biggest to the smallest one.
 *  ex.
 *    14:44:45 09:53:27 02:26:31
 *    21:25:41 05:33:44
 */
const filesystem = require('fs'),
      readline = require('readline');

class TimeToEat {
  constructor() {

      const readlineInstance = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      readlineInstance.question("Enter path of file containing Kitty's schedule: ", (response) => {
        filesystem.readFile(response, 'utf-8', (err, file) => {
          if (err) {
            if (err.code === "ENOENT") {
              console.error(`File "${response}" does not exist.`);
              return;
            } else {
              throw err;
            }
          }
          this.sortAndPrintSchedule(file);
        });
        readlineInstance.close();
      });
  }

  sortAndPrintSchedule(file) {
    // Trim whitespace from ends of file & split the file into an array of lines
    // Trim whitespace from lines & split each line into a space-delimited array
    let linesArray = file.trim().split("\n").map(line => {
      return line.trim().split(" ");
      /*
      return line.trim().split(" ").map(time => {
        let timeArray = time.split(':');
        return timeArray[0]*60*60 + timeArray[1]*60 + timeArray[2];
      });
      */
    });
    console.log(linesArray);
    // Sort lines
  }
}

let TimeToEatInstance = new TimeToEat();
