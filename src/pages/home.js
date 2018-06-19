import React from 'react'

import mockup from '../assets/img/mockup.png'
import devices from '../assets/img/grafico-blaze.png'
import web_desing from '../assets/img/Diseño_Web.png'
import apps from '../assets/img/apps.png'
import sw from '../assets/img/software.png'
import curve from '../assets/img/curva.png'
import divider from '../assets/img/divisor-titulos.png'
import technologies from '../assets/img/tecnologias.png'
import construction from '../assets/img/construccion.png'
import Contact from './contact'
const Home = () => (
<div>
  <div className='home-full-img'>
    <div className='section' id='main'>
      <div className='columns'>
        <div className='colum is-flex is-three-fifths' style={{alignItems: 'center'}}>
          <img className='mockup' src={mockup} />
        </div>
        <div className='column'>
          <p className='title_one'><b>Hacemos que las cosas sucedan.</b></p>
          <p>
            Desarrollamos soluciones y herramientas tecnologicas a la medida de tu empresa.
          </p>
          <p>
            Tienes una gran idea nosotros te ayudamos a transformarla en una herramienta.
          </p>
          <div className='columns '>
            <div className='column'>
              <a href="#contact" className='button is-rounded is-primary is-outlined'>CONTÁCTANOS</a>
            </div>
            {
              // <div className='column'>
              //   <a href="#" className='button is-rounded is-danger is-outlined'>EMPEZAR</a>
              // </div>
            }

          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='wave' id='services'>
    <div className='section'>
      <div align="center" className='wave-text'>
        <h1 className="title_two">PODEMOS CREAR</h1>
        <img src={divider} />
        <p className='subtitle_two'>
          Las herramientas tecnologicas que necesita tu empresa, <br /> quieres mejorar un proceso dentro de tu organizacion nosotros podemos ayudarte.
        </p>
      </div>
      <div className='columns'>
        <div className='column is-two-fifths is-flex' style={{maxHeight: '600px', justifyContent: 'center'}}>
          <img src={devices} style={{maxHeight: '600px'}}/>
        </div>
        <div className='column'>
          <div class="card">
            <div class="card-content" style={{minHeight: '370px'}}>
              <div align="center">
                <img src={web_desing} />
              </div>
              <br />
              <p className="subtitle">
                Diseño Web y Gráfico.
              </p>
              <p>
                Combinamos las tecnologias web escalables y flexibles con enfoque en experiencia de usuario, usabilidad, interactividad y distribución, contenido y graficos a la medida
              </p>
            </div>
            <div className='card-content'>
              <a href="#contact" className='button is-rounded primary'>Estoy interesado</a>
            </div>
          </div>
        </div>
        <div className='column'>
          <div class="card">
            <div class="card-content" style={{minHeight: '370px'}}>
              <div align="center">
                <img src={apps} />
              </div>
              <br />
              <p className="subtitle">
                Desarrollo de Apps Móviles.
              </p>
              <p>
                Desarrollamos la aplicacion movil que tienes en mente, tecnologias escalables y multiplataforma, interacción entre tu sistema y tu aplicación
              </p>
            </div>
            <div className='card-content'>
              <a href="#contact" className='button is-rounded primary'>Estoy interesado</a>
            </div>
          </div>
        </div>
        <div className='column'>
          <div class="card">
            <div class="card-content" style={{minHeight: '370px'}}>
              <div align="center">
                <img src={sw} />
              </div>
              <br />
              <p className="subtitle">
                Software a la medida.
              </p>
              <p>
                Buscamos la mejor solución que se adapte a tu empresa, analisis y definicion de requiriemiento, interaccion con sistemas existentes, dispositivos moviles y bases de datos.
              </p>
            </div>
            <div className='card-content'>
              <a href="#contact" className='button is-rounded primary'>Estoy interesado</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='construction section' id='about'>
    <div align="center">
      <h1 className='title_three'><b>CONSTRUYAMOS</b> ALGO GENIAL JUNTOS</h1>
      <img src={divider} />
      <p className='subtitle'>Compartenos tus proyectos <br /> y construyamos algo increible juntos.</p>
    </div>
    <div className='section'>
      <div className='columns'>
        <div className='column'>
          <div align="right" className='construction_top' style={{minHeight: '200px'}}>
            <p><b>Creamos soluciones tecnológicas <br /> hechas a la medida de su empresa.</b></p>
            <p>
              Nos enfocamos en la solución a tu problema, desarrollamos la herramienta desde cero
              y personalizada, llevamos acabo un analisis abordamos la problematica y obtenemos soluciones
              metodologicas.
             </p>
          </div>

            <div align="right" className='construction_bottom' style={{minHeight: '200px'}}>
              <p><b>Creatividad e innovación, la <br /> mezcla perfecta.</b></p>
              <p>
                Nuestro equipo de trabajo contribuye con sus ideas y conocimientos para generar soluciones creativas e innovadoras, y así llevar nuestros productos a la mayor satisfacción de nuestros clientes.
              </p>
            </div>

        </div>
        <div className='column'>
          <img src={construction} />
        </div>
        <div className='column'>
          <div className='construction_top' style={{minHeight: '200px'}}>
            <p><b>Calidad y funcionalidad son <br /> nuestros principios.</b></p>
            <p>
              Durante el proceso de desarrollo nos encargamos de que se apliquen
              las mejores practicas para lograr productos escalables, flexibles y
              de alta calidad, que cubran los requerimientos de la industria tecnologica.
             </p>
          </div>

          <div className='construction_bottom' style={{minHeight: '200px'}}>
            <p><b>Nos enfocamos en brindar el <br /> mejor servicio, al menor costo.</b></p>
            <p>
              Nuestros clíentes son lo más importante para nosotros, por tal motivo
              ofrecemos el mejor de los servicios básados en la comunicación,
              la confianza y seguridad, brindado productos de la más alta calidad al costo más bajo.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div className='technologies section'>
    <div align='center'>
      <h1 className='title_two'><b>TECNOLOGÍAS</b> QUE ENCAJAN PERFECTO</h1>
      <img src={divider} />
      <p className='subtitle_two'>Usamos las tecnologias actuales <br /> con las mejores practicas de desarrollo de software.</p>
      <img className='modules' src={technologies} />
    </div>
  </div>

  <div className='contact' id='contact'>
    <div className='section container-contact'>
      <div className='columns'>
        <div className='column' style={{textAlign: 'center'}}>
          <h1 className='contact-main-text'><b>Nos encantaría saber</b></h1>
          <span className='contact-main-text'><b>¿Qué tienes en mente?</b></span>
          <h3 className='contact-text '>Cuéntanos, estamos listos para hacerlo realidad.</h3>
        </div>
        <div className='column'>
          <div className="card">
            <div className="card-content">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
)

export default Home
