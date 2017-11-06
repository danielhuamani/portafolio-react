import React from "react";


class ExperienciaItem extends React.Component{

    render(){
        const experiencia = this.props.data
        return(
            <a className="experiencia_list__item" href={experiencia.url} target="_blank">
                <h4 className="title">{experiencia.empresa}</h4>
                <div className="experiencia_list__contenido">
                    <p>{experiencia.rubro}</p>
                    <p><span>Cargo:</span>{experiencia.cargo}</p>
                    <div dangerouslySetInnerHTML={{__html: experiencia.tareas}}></div>
                    <p><span>Tiempo:</span>{experiencia.tiempo}</p>
                </div>
            </a>
        )
    }
}
export default ExperienciaItem;