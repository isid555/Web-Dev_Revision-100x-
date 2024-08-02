//Create a counter in JS tht counts from 30 to 0

//
// var temp  = 5;
// function countDowwn(){
//
//     var intervalID =    setInterval(print,1000);
//
//     function print(){
//         if(temp<=0){
//             console.log("Time Out")
//             clearInterval(intervalID);
//             return;
//         }
//         console.log(temp)
//         temp--;
//     }
// }
//
//
// countDowwn();


// HH:MM::SS
// 00:00:00


var temp = 30 * 60; // 1800 seconds // Convert 30 minutes to seconds

function countDown() {
    var intervalId = setInterval(print, 1000);

    function print() {
        if (temp < 0) {
            console.log("Time Out");
            clearInterval(intervalId); // Stop the interval
            return;
        }

        let hours = Math.floor(temp / 3600);
        let minutes = Math.floor((temp % 3600) / 60);
        let seconds = temp % 60;

        // Format hours, minutes, and seconds to be two digits
        hours = String(hours).padStart(2, '0');
        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');

        console.log(`${hours}:${minutes}:${seconds}`);
        temp--;
    }
}

countDown();
