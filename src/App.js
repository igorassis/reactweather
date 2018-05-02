import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "5c7275cb97116b05960338ad888c86d2";

class App extends React.Component {
    state = {
        // Definindo states iniciais da nossa aplicação
        temperatura: undefined,
        cidade: undefined,
        pais: undefined,
        humidade: undefined,
        descricao: undefined,
        error: undefined
    }

    //Criando o metodo que consome a API de forma assincrona
    getWeather = async (e) => {
        e.preventDefault();
        //Pegando os valores do form.js
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        if (city && country) {
            // console.log(data);
            //alterando os states com os valores do JSON retonados pela API
            this.setState({
                temperatura: data.main.temp,
                cidade: data.name,
                pais: data.sys.country,
                humidade: data.main.humidity,
                descricao: data.weather[0].description,
                error: ""
            });
        } else {
            this.setState({
                temperatura: undefined,
                cidade: undefined,
                pais: undefined,
                humidade: undefined,
                descricao: undefined,
                error: "Preencha os campos com a cidade e pais que deseja consultar."
            });
        }
    }
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-5 title-container">
                                {/* Renderizando a div com os components */ }
                                    <Titles />
                                </div>
                                <div className="col-xs-7 form-container">
                                    <Form getWeather={this.getWeather} />
                                    <Weather
                                        temperatura={this.state.temperatura}
                                        cidade={this.state.cidade}
                                        pais={this.state.pais}
                                        humidade={this.state.humidade}
                                        descricao={this.state.descricao}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;