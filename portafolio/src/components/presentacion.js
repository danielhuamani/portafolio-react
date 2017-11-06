import React from 'react';

export default class Presentacion extends React.Component {
    render(){
        return(
            <section id="presentacion">
                <div className="cnt-general">
                  <div className="descripcion-web">
                      <div className="page">
                        <h2>
                          Daniel Huamani
                        </h2>
                        <h3>
                          Backend + Frontend
                        </h3>
                      </div>
                      <div className="links">
                        <ul>
                          <li>
                            <a href="https://bitbucket.org/kevin-daniel/" className="bitbucket" target="_blank">
                              <i className="icon-bitbucket"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/daniel.huamani.56" className="facebook" target="_blank">
                              <i className="icon-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/danielhuamani" className="github" target="_blank">
                              <i className="icon-github"></i>
                            </a>
                          </li>
                          <li>
                            <a href="" className="youtube" target="_blank">
                              <i className="icon-youtube"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/in/kevin-daniel-huamani-atiquipa-4808b3b7/" className="linkedin" target="_blank">
                              <i className="icon-linkedin2"></i>
                            </a>
                          </li>
                        </ul>

                      </div>
                  </div>
                </div>
            </section>
        )
    }
}