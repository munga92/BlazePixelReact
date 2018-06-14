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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus tempus iaculis. Aliquam iaculis eleifend dolor, a aliquam augue semper eu. In ultricies ex ligula, ut placerat diam mattis ac.
          </p>
          <div className='columns '>
            <div className='column'>
              <a href="#" className='button is-rounded is-primary is-outlined'>CONTÁCTANOS</a>
            </div>
            <div className='column'>
              <a href="#" className='button is-rounded is-danger is-outlined'>EMPEZAR</a>
            </div>
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
        <p className='subtitle_two'>Nam liber tempor cum soluta nobis eleifend option congue <br/> nihil imperdiet doming id quod mazim.</p>
      </div>
      <div className='columns'>
        <div className='column is-two-fifths'>
          <img src={devices} />
        </div>
        <div className='column'>
          <div class="card">
            <div class="card-content">
              <div align="center">
                <img src={web_desing} />
              </div>
              <br />
              <p className="subtitle">
                Diseño Web y Gráfico.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh. Sed lacinia, dui non feugiat consequat, neque massa sodales nulla, sit amet tempus ligula nunc eget elit. Etiam efficitur non diam nec ultrices. Fusce luctus velit quis nulla ullamcorper ullamcorper. Maecenas et
              </p>
              <a href="#" className='button is-rounded primary'>Estoy interesado</a>
            </div>
          </div>
        </div>
        <div className='column'>
          <div class="card">
            <div class="card-content">
              <div align="center">
                <img src={apps} />
              </div>
              <br />
              <p className="subtitle">
                Desarrollo de Apps Móviles.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh. Sed lacinia, dui non feugiat consequat, neque massa sodales nulla, sit amet tempus ligula nunc eget elit. Etiam efficitur non diam nec ultrices. Fusce luctus velit quis nulla ullamcorper ullamcorper. Maecenas et
              </p>
              <a href="#" className='button is-rounded primary'>Estoy interesado</a>
            </div>
          </div>
        </div>
        <div className='column'>
          <div class="card">
            <div class="card-content">
              <div align="center">
                <img src={sw} />
              </div>
              <br />
              <p className="subtitle">
                Software a la medida.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh. Sed lacinia, dui non feugiat consequat, neque massa sodales nulla, sit amet tempus ligula nunc eget elit. Etiam efficitur non diam nec ultrices. Fusce luctus velit quis nulla ullamcorper ullamcorper. Maecenas et
              </p>
              <a href="#" className='button is-rounded primary'>Estoy interesado</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src={curve} className='curve' />
  </div>

  <div className='construction section' id='about'>
    <div align="center">
      <h1 className='title_three'><b>CONSTRUYAMOS</b> ALGO GENIAL JUNTOS</h1>
      <img src={divider} />
      <p className='subtitle'>Nam liber tempor cum soluta nobis eleifend option congue <br /> nihil imperdiet doming id quod mazim.</p>
    </div>
    <div className='section'>
      <div className='columns'>
        <div className='column'>
          <div align="right" className='construction_top'>
            <p><b>Creamos soluciones tecnológicas <br /> hechas a la medida de su empresa.</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh. Sed lacinia, dui non feugiat consequat, neque massa sodales nulla, sit amet tempus ligula nunc eget elit. Etiam efficitur non diam nec ultrices. Fusce luctus velit quis nulla ullamcorper</p>
          </div>
          <div align="right" className='construction_bottom'>
            <p><b>Creatividad e innovación, la <br /> mezcla perfecta.</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh. Sed lacinia, dui non feugiat consequat, neque massa sodales nulla, sit amet tempus ligula nunc eget elit.</p>
          </div>
        </div>
        <div className='column'>
          <img src={construction} />
        </div>
        <div className='column'>
          <div className='construction_top'>
            <p><b>Calidad y funcionalidad son <br /> nuestros principios.</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh.</p>
          </div>
          <div className='construction_bottom'>
            <p><b>Nos enfocamos en brindar el <br /> mejor servicio, al menor costo.</b></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh. Sed lacinia, dui non feugiat consequat, neque massa sodales lectus.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='technologies section'>
    <div align='center'>
      <h1 className='title_two'><b>TECNOLOGÍAS</b> QUE ENCAJAN PERFECTO</h1>
      <img src={divider} />
      <p className='subtitle_two'>Nam liber tempor cum soluta nobis eleifend option congue <br /> nihil imperdiet doming id quod mazim.</p>
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
