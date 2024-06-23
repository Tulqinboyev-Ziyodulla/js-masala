// {
//     // masala1 //
//     function mrMs(array){
//         if ([array.gender] == "male"){
//            console.log(`Janob ${array.name}`);
//            return ""
//         }else{
//             console.log(`Xonim ${array.name}`);
//             return ""
//         }
//     }

//     console.log( mrMs({name: "Akmal", gender: "male"}))  // Janob Akmal
//     console.log( mrMs({name: "Laylo", gender: "female"}))  // Xonim Laylo
//     console.log( mrMs({name: "Ozodbek", gender: "male"}))  // Janob Ozodbek
// }

// {
//     // masala2 //
//     function card(cards, number) {
//         if (number) {
//             return cards;
//         } else {
//             let index = cards.slice(0, 4) + " **** **** **" + cards.slice(-2);
//             return index;
//         }
//     }

//     console.log(card("8600 1234 5651 2589", true));  // 8600 1234 5651 2589
//     console.log(card("8600 5464 2332 4589", false));  // 8600 **** **** **89
//     console.log(card("8600 4545 1231 8989", false));  // 8600 **** **** **89
// }

// {
//     // masala3 //
//     function perimeterReact(i, a) {
//         let sum = 2;
//         let n = sum * (i + a);
//         console.log(n);
//         return ""
//     }
//     console.log(perimeterReact(5, 6));  //2 * (5 + 6) = 22
//     console.log(perimeterReact(12, 8)); //2 * (12 + 8) = 40
// }

// {
//     // masala4 //
//     // Ishlay olmadim
// }


// {
//     // masala5 //
//   function telNumber(phone) {
//     if (phone == "+") {
//       console.log(phone);
//     } else {
//       console.log(phone.padStart());
//     }
//     return ""
//   }
//   console.log(telNumber("+998 91 343 0668")); // +998 91 343 0668
//   console.log(telNumber("998 93 350 4566")); // 998 93 350 4566
// }

// {
//     // masala6 //
//     let greeting = () =>  "Hello world";

//     console.log( greeting() );
// }

// {
//     // masala7 //
//     function brightness(n) {
//         if (n === "dark") {
//             return "light";
//         } else if (n === "light") {
//             return "dark";
//         } else {
//             return "";
//         }
//     }

//     console.log(brightness("dark")); // light
//     console.log(brightness("light")); // dark  
// }