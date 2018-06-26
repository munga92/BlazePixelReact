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
            Desarrollamos soluciones y herramientas tecnológicas a la medida de tu empresa.
          </p>
          <p>
            ¿Tienes una gran idea? nosotros te ayudamos a transformarla en una herramienta.
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
        Herramientas tecnológicas que necesita tu empresa.<br/>
        ¿Quieres mejorar un proceso dentro de tu organización? Nosotros podemos ayudarte.
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
                Combinamos las tecnologías web escalables y flexibles con enfoque en experiencia de usuario (UX/UI), usabilidad, interactividad, distribución, contenido y gráficos a la medida que cumplan con las necesidades de su empresa.
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
                Desarrollamos aplicaciones móviles a la medida, enfocándonos en la innovación constante, funcionalidad y estética visual generando apps integrales que funcionan a la perfección y se ven increíbles.
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
                Buscamos la mejor solución que se adapte a tu empresa, analizamos el requerimiento y definimos un plan de acción que mejor se adecue con sus necesidades para resolverlas en el menor tiempo posible.
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
      <p className='subtitle'>Compartenos tus proyectos y construyamos algo increible juntos.</p>
    </div>
    <div className='section'>
      <div className='columns'>
        <div className='column'>
          <div align="right" className='construction_top' style={{minHeight: '200px'}}>
            <p><b>Creamos soluciones tecnológicas <br /> hechas a la medida de su empresa.</b></p>
            <p>
              Nos enfocamos en la solución de
              problemas, desarrollamos herramientas
              desde cero y 100% personalizadas que le
              permitan a su empresa automatizar
              procesos, optimizar sus sistemas o
              rediseñar su imagen.
             </p>
          </div>

            <div align="right" className='construction_bottom' style={{minHeight: '200px'}}>
              <p><b>Creatividad e innovación, la <br /> mezcla perfecta.</b></p>
              <p>
                Creemos firmemente que la creatividad es
                parte fundamental en el desarrollo
                tecnológico y visual de nuevas
                herramientas, apps o sistemas. Por eso
                estamos enfocados 100% en ofrecerle a
                nuestros clientes un servicio personalizado
                que nos permite involucrarnos en sus
                proyectos para que el resultado sea único y
                cumpla con todos sus requerimientos.
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
              Durante el proceso de desarrollo nos
              encargamos de que se apliquen las mejores
              prácticas para lograr productos increíbles y que
              tanto funcionalidad tecnológica como calidad
              visual formen en conjunto un producto de alta
              calidad que cumpla con todos los objetivos.
             </p>
          </div>

          <div className='construction_bottom' style={{minHeight: '200px'}}>
            <p><b>Nos enfocamos en brindar el <br /> mejor servicio, al menor costo.</b></p>
            <p>
              Nuestros clíentes son lo más importante
              para nosotros, por tal motivo ofrecemos el
              mejor de los servicios básados en la
              comunicación, confianza y seguridad.
              Involucramos a nuestros clientes durante
              todo su proceso de desarrollo para
              asegurarnos que obtengan el producto o
              servicio que buscaban.
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
      <p className='subtitle_two'>Usamos las tecnologias actuales con las mejores practicas de desarrollo de software.</p>
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
