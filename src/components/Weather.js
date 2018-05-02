import React from "react";

//Ciração de um React Component
// class Weather extends React.Component{
//     render(){
//         return(
//             <div>
//                 {/* if statement => se props.cidade = true && props.pais = true então faça o paragrafo */}
//                 {this.props.cidade && this.props.pais && <p>Local: {this.props.cidade}, {this.props.pais}</p>}
//                 {this.props.temperatura && <p>Temperatura: {this.props.temperatura} C°</p>}
//                 {this.props.humidade && <p>Humidade: {this.props.humidade}</p>}
//                 {this.props.descricao && <p>Condição: {this.props.descricao}</p> }
//                 {this.props.error && <p>{this.props.error}</p>}
//             </div>
//         );
//     }
// };

//Se não houver states nesta classe pode ser feito dessa forma o react Component
const Weather = props => (
    <div className="weather__info">
        {
            props.cidade && props.pais && <p className="weather__key">Local:&nbsp;
            <span className="weather__value">{props.cidade}, {props.pais}</span>
            </p>
        }
        {
            props.temperatura && <p className="weather__key">Temperatura:&nbsp; 
            <span className="weather__value">{props.temperatura} C°</span>
            </p>
        }
        {
            props.humidade && <p className="weather__key">Humidade:&nbsp;
            <span className="weather__value">{props.humidade}</span>
            </p>
        }
        {
            props.descricao && <p className="weather__key">Condição:&nbsp;
            <span className="weather__value">{props.descricao}</span>
            </p>
        }
        {props.error && <p className="weather__key">{props.error}</p>}
    </div>
);

//Para essa classe poder ser vista no App.js ela precisa ser exportada.
export default Weather;