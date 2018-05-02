import React from "react";

//Ciração de um React Component
// class Titles extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>React Weather App</h1>
//                 <p>Consulte a temperatura, o clima e mais...</p>
//             </div>
//         );
//     }
// };

//Se não houver states nesta classe pode ser feito dessa forma o react Component
const Titles = () => (
    <div>
        <h1  className="title-container__title" >React Weather App</h1>
        <p  className="title-container__subtitle">Consulte a temperatura, o clima e mais...</p>
    </div>
);

//Para essa classe poder ser vista no App.js ela precisa ser exportada.
export default Titles;