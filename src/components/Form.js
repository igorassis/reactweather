import React from "react";

//Ciração de um React Component
// class Form extends React.Component{
//     render(){
//         return(
//             // chamando o metodo getWeather no form
//             <form onSubmit={this.props.getWeather}>
//                 <input type="text" name="city" placeholder="City..."/>
//                 <input type="text" name="country" placeholder="Country..."/>
//                 <button>Get Weather</button>
//             </form>
//         );
//     }
// };

//Se não houver states nesta classe pode ser feito dessa forma o react Component
const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Verificar</button>
    </form>
);
//Para essa classe poder ser vista no App.js ela precisa ser exportada.
export default Form;