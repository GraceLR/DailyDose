
const talkingCalendar = function(date) {
    let month = date.slice(5,7);
    let day = date.slice(8);
    let year = date.slice(0,4);

    switch (day[1]) {
        case '1':
            day +='st';
            break;
        case '2':
            day += 'nd';
            break;
        case '3':
            day += 'rd';
            break;
        default:
            day += 'th';
            break;
    }

    switch (day[0]) {
        case '0':
            day = day.substring(1);
            break;
        case '1':
            day = day.substring(0,2) + 'th';
            break;
    }

    day[0] === '0' ? day = day.substring(1): day = day;

    switch (month) {
        case '01':
            month = 'January';
            break;
        case '02':
            month = 'February';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'August';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'October';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'December';
            break; 
    }

    return month + ' ' + day + ', ' + year;

  };
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));