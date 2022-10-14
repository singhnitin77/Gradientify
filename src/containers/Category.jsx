// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Gradient } from ".";
// import { generateCategory } from "../utility/helper";
// import { useGlobalContext } from "../context/Context";
// // import { gradients } from "../utility/gradients";

// const Category = ({ savedGradients, setSavedGradients }) => {
//   let params = useParams();
//   const { align, rotate } = useGlobalContext();

//   const categoryName = params.id;
//   //   console.log(useParams());
//   console.log(categoryName); //green,red,yellow,blue

//   const yellowGradients = gradients.filter((gradient) => {
//     return (
//       generateCategory(gradient.colors[0]) === "yellow" ||
//       generateCategory(gradient.colors[1]) === "yellow"
//     );
//   });

//   const redGradients = gradients.filter((gradient) => {
//     return (
//       generateCategory(gradient.colors[0]) === "red" ||
//       generateCategory(gradient.colors[1]) === "red"
//     );
//   });

//   const greenGradients = gradients.filter((gradient) => {
//     return (
//       generateCategory(gradient.colors[0]) === "green" ||
//       generateCategory(gradient.colors[1]) === "green"
//     );
//   });

//   const blueGradients = gradients.filter((gradient) => {
//     return (
//       generateCategory(gradient.colors[0]) === "blue" ||
//       generateCategory(gradient.colors[1]) === "blue"
//     );
//   });

//   return (
//     <div className="w-full h-full flex justify-center flex-wrap">
//       {categoryName === "red"
//         ? redGradients.map((gradient) => (
//             <Gradient
//               gradient={gradient}
//               key={gradient.id}
//               align={align}
//               //   savedGradients={savedGradients}
//               //   setSavedGradients={setSavedGradients}
//             />
//           ))
//         : categoryName === "green"
//         ? greenGradients.map((gradient) => (
//             <Gradient
//               gradient={gradient}
//               key={gradient.id}
//               align={align}
//               //   savedGradients={savedGradients}
//               //   setSavedGradients={setSavedGradients}
//             />
//           ))
//         : categoryName === "blue"
//         ? blueGradients.map((gradient) => (
//             <Gradient
//               gradient={gradient}
//               key={gradient.id}
//               align={align}
//               //   savedGradients={savedGradients}
//               //   setSavedGradients={setSavedGradients}
//             />
//           ))
//         : yellowGradients.map((gradient) => (
//             <Gradient
//               gradient={gradient}
//               key={gradient.id}
//               align={align}
//               //   savedGradients={savedGradients}
//               //   setSavedGradients={setSavedGradients}
//             />
//           ))}
//     </div>
//   );
// };

// export default Category;
