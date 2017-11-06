import React from "react";


class ExperienciaItem extends React.Component{

    render(){
        const experiencia = this.props.data
        var style = {
            background: experiencia.background
        }
        return(
            <div className="experiencia_list__item" >
                <a href={experiencia.url} style={style} target="_blank">
                    <img src={process.env.PUBLIC_URL + experiencia.logo} width="200"/>
                </a>
                <div className="experiencia_list__contenido">
                    <h4>{experiencia.empresa}</h4>
                    <p>{experiencia.rubro}</p>
                    <p><span>Cargo:</span>{experiencia.cargo}</p>
                    <div dangerouslySetInnerHTML={{__html: experiencia.tareas}}></div>
                    <p><span>Tiempo:</span>{experiencia.tiempo}</p>
                </div>
            </div>
        )
    }
}
export default ExperienciaItem;