import React from 'react'

import home from '../assets/img/grafico-head.png'
import web_desing from '../assets/img/Diseño_Web.png'
import apps from '../assets/img/apps.png'
import sw from '../assets/img/software.png'
import mkt from '../assets/img/mkt.png'
import divider from '../assets/img/divisor-titulos–2.png'
import dividerw from '../assets/img/divisor-titulos.png'
import phone from '../assets/img/phone.png'
import technologies from '../assets/img/tecnologias.png'
import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import instagram from '../assets/img/instagram.png'
import linkedin from '../assets/img/linkedin.png'
import construction from '../assets/img/fabrica.png'
import Contact from './contact'
import ScrollAnimation from 'react-animate-on-scroll';
import FontAwesome from 'react-fontawesome'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faRocket } from '@fortawesome/free-solid-svg-icons'


const Home = () => (
<div>
  <div className='home-full-img'>
      <div className='section container' id='main'>
        <div className='columns is-reverse-mobile'>
          <div className='column column-image-header' style={{alignItems: 'center'}}>
             <img className='mockup' src={home} alt='Blaze Pixel' />
          </div>
          <div className='column'>
            <ScrollAnimation animateIn='bounceInRight'>
              <p className='title_one'><b>Hacemos que las cosas sucedan.</b></p>
            </ScrollAnimation>
            <p>
              Desarrollamos soluciones y herramientas tecnológicas a la medida de tu empresa.
            </p>
            <p>
              ¿Tienes una gran idea? nosotros te ayudamos a transformarla en una herramienta.
            </p>
            <br />
            <div>
              <a href="#contact" className='button is-rounded btn-contact'>
                Contáctanos
                &nbsp;
                <FontAwesomeIcon icon={faMobileAlt} />

              </a>
              &nbsp;
              <a href="#services" className='button is-rounded btn-contact'>
                Empezar
                &nbsp;
                <FontAwesomeIcon icon={faRocket} />
              </a>
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
      <div className="container">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <div align="center">
                <img src={web_desing} />
              </div>
              <br />
              <p className="title">
                Diseño Web y Gráfico.
              </p>
              <p className="subtitle">
                Combinamos las tecnologías web escalables y flexibles con enfoque en experiencia de usuario (UX/UI), usabilidad, interactividad, distribución, contenido y gráficos a la medida que cumplan con las necesidades de su empresa.
              </p>
              <div align="center">
                <a href="#contact" className='button is-rounded primary'>Estoy interesado</a>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <div align="center">
                <img src={apps} />
              </div>
              <br />
              <p className="title">
                Desarrollo de Apps Móviles.
              </p>
              <p className="subtitle">
                Desarrollamos aplicaciones móviles a la medida, enfocándonos en la innovación constante, funcionalidad y estética visual generando apps integrales que funcionan a la perfección y se ven increíbles.
              </p>
              <div align="center">
                <a href="#contact" className='button is-rounded primary'>Estoy interesado</a>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
            <div align="center">
                <img src={sw} />
              </div>
              <br />
              <p className="title">
                Software a la medida.
              </p>
              <p className="subtitle">
                Buscamos la mejor solución que se adapte a tu empresa, analizamos el requerimiento y definimos un plan de acción que mejor se adecue con sus necesidades para resolverlas en el menor tiempo posible.
              </p>
              <div align="center">
                <a href="#contact" className='button is-rounded primary'>Estoy interesado</a>
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <div align='center'>
                <img src={mkt} />
              </div>
              <br />
              <p className="title">Campañas SEM y SEO</p>
              <div className="subtitle">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
              <div align="center">
                <a href="#contact" className='button is-rounded primary'>Estoy interesado</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='section img-phone is-paddingless'>
    <img src={phone} />
  </div>

  <div className='construction section' id='about'>
    <div align="center">
      <h1 className='title_three'><b>CONSTRUYAMOS</b> ALGO GENIAL JUNTOS</h1>
      <img src={divider} />
      <p className='subtitle'>Compartenos tus proyectos y construyamos algo increible juntos.</p>
    </div>
    <div className='section'>
      <div className="container">
        <div className='columns'>
          <div className='column'>
            <div style={{minHeight: '200px'}}>
              <p><b>Calidad y funcionalidad son nuestros principios.</b></p>
              <p>
                Durante el proceso de desarrollo nos
                encargamos de que se apliquen las mejores
                prácticas para lograr productos increíbles y que
                tanto funcionalidad tecnológica como calidad
                visual formen en conjunto un producto de alta
                calidad que cumpla con todos los objetivos.
              </p>
            </div>
            <div style={{minHeight: '200px'}}>
              <p><b>Nos enfocamos en brindar el mejor servicio, al menor costo.</b></p>
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
          <div className='column is-flex factory-mobile' style={{justifyContent: 'center'}}>
            <img src={construction} style={{height: '350px', width: '460px'}} />
          </div>
          <div className='column'>
            <div style={{minHeight: '200px'}}>
              <p><b>Creamos soluciones tecnológicas hechas a la medida de su empresa.</b></p>
              <p>
                Nos enfocamos en la solución de
                problemas, desarrollamos herramientas
                desde cero y 100% personalizadas que le
                permitan a su empresa automatizar
                procesos, optimizar sus sistemas o
                rediseñar su imagen.
              </p>
            </div>
            <div style={{minHeight: '200px'}}>
              <p><b>Creatividad e innovación, la mezcla perfecta.</b></p>
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
          <div className='column is-flex factory-desktop' style={{justifyContent: 'center'}}>
            <img src={construction} style={{height: '350px', width: '460px'}} />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='technologies section'>
    <div align='center'>
      <h1 className='title_two'>TECNOLOGÍAS QUE <b>ENCAJAN PERFECTO</b></h1>
      <img src={dividerw} />
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
          <div className='columns is-mobile'>
            <div className='column is-half-desktop is-offset-one-quarter-desktop'>
              <div className='columns is-mobile'>
                <div className='column' align='center'>
                  <a href="https://www.facebook.com/blazepxel/" target='_blank' rel="noopener noreferrer">
                    <img src={facebook} style={{width: '3rem', marginTop: '15px'}}/>
                  </a>
                </div>
                <div className='column' align='center'>
                  <a href="https://twitter.com/blaze_pixel" target='_blank' rel="noopener noreferrer">
                    <img src={twitter} style={{width: '3rem', marginTop: '15px'}}/>
                  </a>
                </div>
                <div className='column' align='center'>
                  <a href="https://www.instagram.com/blazepixel/" target='_blank' rel="noopener noreferrer">
                    <img src={instagram} style={{width: '3rem', marginTop: '15px'}}/>
                  </a>
                </div>
                <div className='column' align='center'>
                  <a href="https://www.linkedin.com/company/blaze-pixel/" target='_blank' rel="noopener noreferrer">
                    <img src={linkedin} style={{width: '3rem', marginTop: '15px'}}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='column is-flex' style={{justifyContent: 'center'}} >
          <div className="card" style={{width: '25rem'}}>
            <div className="card-content" >
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
