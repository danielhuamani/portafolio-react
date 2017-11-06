import React from "react";


class ExperienciaItem extends React.Component{

    render(){
        const experiencia = this.props.data
        return(
            <a className="experiencia_list__item">
                <h4 className="title">{experiencia.empresa}</h4>
                <div className="experiencia_list__contenido">
                    <p>Empresa dedicada al merketin digital</p>
                    <p><span>Cargo:</span>Desarrollador Backend</p>
                    <p>Desempeñe como maquetador y programador</p>
                    <p><span>Tiempo:</span>Agosto 2014 - Octubre 2015</p>
                </div>
            </a>
        )
    }
}
export default ExperienciaItem;