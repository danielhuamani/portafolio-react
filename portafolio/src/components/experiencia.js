import React from "react";
import ExperienciaItem from "./experiencia_item";
import data_experiencia from "../requests/experiencia";

class ExperienciaList extends React.Component{

    experiencia_item(){

        return data_experiencia.map(exp=>{
                return(
                    <ExperienciaItem data={exp} key={exp.id} />
                )
            }
        );

    }

    render(){
        return(
            <section id="experiencia">
                <div className="cnt-general">
                    <h2 className="title">EXPERIENCIA</h2>
                    <div className="experiencia_list">
                        {this.experiencia_item()}
                    </div>
                </div>
            </section>
        )
    }
}

export default ExperienciaList;