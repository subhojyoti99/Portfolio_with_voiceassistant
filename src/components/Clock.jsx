// import { useEffect } from "react";

// function Clock() {
//   useEffect(() => {
//     const realtimeClock = () => {
//       const rtClock = new Date();
//       let hours = rtClock.getHours();
//       let minutes = rtClock.getMinutes();
//       let seconds = rtClock.getSeconds();

//       const amPm = hours < 12 ? "AM" : "PM";
//       hours = hours > 12 ? hours - 12 : hours;
//       hours = ("0" + hours).slice(-2);
//       minutes = ("0" + minutes).slice(-2);
//       seconds = ("0" + seconds).slice(-2);

//       document.getElementById(
//         "clock"
//       ).innerHTML = `${hours} : ${minutes} : ${seconds} ${amPm} <br> IST`;

//       let greeting;
//       const currentHour = rtClock.getHours();

//       if (currentHour >= 4 && currentHour < 12) {
//         greeting = "Hey, Good Morning";
//       } else if (currentHour >= 12 && currentHour < 16) {
//         greeting = "Hey, Good Afternoon";
//       } else {
//         greeting = "Hey, Good Evening";
//       }
//       document.getElementById("greeting").innerHTML = greeting;

//       setTimeout(realtimeClock, 500);
//     };

//     realtimeClock();

//     return () => clearTimeout(realtimeClock);
//   }, []);

//   return (
//     <div>
//       <div id="clock"></div>
//       <div id="greeting"></div>
//     </div>
//   );
// }

// export default Clock;

import React, { useEffect } from "react";

function Clock() {
  useEffect(() => {
    const updateGreeting = () => {
      const rtClock = new Date();
      const currentHour = rtClock.getHours();
      let greeting;

      if (currentHour >= 4 && currentHour < 12) {
        greeting = "Hey, Good Morning";
      } else if (currentHour >= 12 && currentHour < 16) {
        greeting = "Hey, Good Afternoon";
      } else {
        greeting = "Hey, Good Evening";
      }

      document.getElementById("greeting").innerHTML = greeting;

      setTimeout(updateGreeting, 60000); // Update greeting every minute
    };

    updateGreeting();

    return () => clearTimeout(updateGreeting);
  }, []);

  return (
    <div>
      <div id="greeting"></div>
    </div>
  );
}

export default Clock;
