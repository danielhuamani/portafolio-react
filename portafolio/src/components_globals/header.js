import React from 'react';

export default class Header extends React.Component {
    render(){
        return(
            <header>
                <div className="cnt-general">
                    <h1 className="logo">
                      Daniel Huamani
                    </h1>
                    <div class="icon-menu menu"></div>
                    <nav className="menu-principal">
                      <ul>
                        <li><a href="">Perfil</a></li>
                        <li><a href="">Experiencia</a></li>
                        <li><a href="">Portafolio</a></li>
                        <li><a href="">Contacto</a></li>
                        <li><a href="">Blog</a></li>
                      </ul>
                    </nav>
                </div>
            </header>
        )
    }
}