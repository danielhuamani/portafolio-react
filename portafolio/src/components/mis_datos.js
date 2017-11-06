import React from 'react';

class MisDatos extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
        return(
            <section id="perfil">
                <div className="cnt-general">
                  <h2 className="title">ACERCA DE MI</h2>
                  <div className="detalle-avatar">
                    <figure><img src={process.env.PUBLIC_URL + '/img/avatar.png'} width="250"/></figure>
                    <div className="detalle">
                      <div className="descripcion">

                        <p>Hola, Soy Daniel Huamani Atiquipa con 23 años de edad un joven egresado de la carrera Ing. Sistemas en la Universidad Nacional del Callao, desde el año 2014 ando metido en el mundo WEB empezando desde maquetación y por último desenvolviendome en programación</p>

                        <p>Para ello
                        manejo el lenguaje de programación Python con el framerwork Django, tambien cuento con conocimientos de Html, Css, Js, Jquery, Backbone, Vue js y Node(basico).</p>
                        <p>Actualmente ando enfocado en Javascript en especifico en Vue js </p>
                        <p>Email: danielhuamani15@gmail.com -  Celular: 959479450 </p>
                      </div>
                      <div className="descargar-cv"><a href={process.env.PUBLIC_URL + '/archive/curriculum-vitae.pdf'} target="_blank" className="btn btn-primary">Descargar CV</a></div>
                    </div>

                  </div>
                </div>
            </section>
        )
    }
}

export default MisDatos;