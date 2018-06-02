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

const Home = () => (
<div>
  <div className='home-full-img'>
    <div className='columns'>
      <div className='colum is-two-thirds is-flex' style={{alignItems: 'center'}}>
        <img className='mockup' src={mockup} />
      </div>
      <div className='column'>
        <p><b>Hacemos que las cosas<br/>sucedan.</b></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus tempus iaculis. Aliquam iaculis eleifend dolor, a aliquam augue semper eu. In ultricies ex ligula, ut placerat diam mattis ac.
        </p>
        <div className='columns'>
          <div className='column'>
            <a href="#" className='button is-link'>CONTÁCTANOS</a>
          </div>
          <div className='column'>
            <a href="#" className='button'>EMPEZAR</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className='wave'>
    <div className='container'>
      <div align="center" className='wave-text'>
        <h1 className="title">PODEMOS CREAR</h1>
        <img src={divider} />
        <p className='subtitle'>Nam liber tempor cum soluta nobis eleifend option congue <br/> nihil imperdiet doming id quod mazim.</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src={curve} className='curve' />
  </div>

  <div className='construction'>
    <div align="center">
      <h1><b>CONSTRUYAMOS</b> ALGO GENIAL JUNTOS</h1>
      <img src={divider} />
      <p>Nam liber tempor cum soluta nobis eleifend option congue <br /> nihil imperdiet doming id quod mazim.</p>
    </div>
    <div className='columns'>
      <div className='column'>
        <div align="right">
          <p><b>Creamos soluciones tecnológicas <br /> hechas a la medida de su empresa.</b></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh. Sed lacinia, dui non feugiat consequat, neque massa sodales nulla, sit amet tempus ligula nunc eget elit. Etiam efficitur non diam nec ultrices. Fusce luctus velit quis nulla ullamcorper</p>
        </div>
        <div align="right">
          <p><b>Creatividad e innovación, la <br /> mezcla perfecta.</b></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh. Sed lacinia, dui non feugiat consequat, neque massa sodales nulla, sit amet tempus ligula nunc eget elit.</p>
        </div>
      </div>
      <div className='column'>
        <img src={construction} />
      </div>
      <div className='column'>
        <div>
          <p><b>Calidad y funcionalidad son <br /> nuestros principios.</b></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh.</p>
        </div>
        <div>
          <p><b>Nos enfocamos en brindar el <br /> mejor servicio, al menor costo.</b></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar, enim ac tincidunt tempus, mi quam ornare leo, eget dignissim arcu mauris vel diam. Fusce non justo rutrum, aliquet quam eget, eleifend nibh. Sed lacinia, dui non feugiat consequat, neque massa sodales lectus.</p>
        </div>
      </div>
    </div>
  </div>

  <div className='technologies'>
    <div align='center'>
      <h1><b>TECNOLOGÍAS</b> QUE ENCAJAN PERFECTO</h1>
      <img src={divider} />
      <p>Nam liber tempor cum soluta nobis eleifend option congue <br /> nihil imperdiet doming id quod mazim.</p>
      <img src={technologies} />  
    </div>
  </div>

  <div className='contact'>
    <div className='columns'>
      <div className='column'>
        <h1><b>Nos encantaría saber</b></h1>
        <h1><b>¿Qué tienes en mente?</b></h1>
        <h3>Cuentanos, estamos listos para hacerlo realidad</h3>
      </div>
      <div className='column'>
        <div className="card">
          <div className="card-content">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default Home
