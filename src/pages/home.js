import React from 'react'

const Home = () => (<div className=''>
  <div className='home-full-img' />
  <section className='hero is-primary'>
    <div className='hero-body'>
      <div className='container'>
        <h1 className='title'>
          World Talent Consulting
        </h1>
        <h2 className='subtitle'>
          Leading people ...
        </h2>
      </div>
    </div>
  </section>
  <div className='section'>
    <div className='container'>
      <div className='tile is-ancestor'>
        <div className='tile is-vertical is-8'>
          <div className='tile'>
            <div className='tile is-parent is-vertical'>
              <article className='tile is-child notification'>
                <p className='title'>Coaching</p>
                <p>Hemos podido acompañar a cientos de líderes de negocios en los últimos años, dando como resultado un extraordinario Desarrollo de su POTENCIAL y sus TALENTOS.</p>
              </article>
              <article className='tile is-child notification is-warning'>
                <p className='title'>Outplacement</p>
                <p>La perdida del trabajo es solo la conclusión de un ciclo profesional y el inicio de un nuevo reto</p>
              </article>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child notification is-info'>
                <p className='title'>Desarrollo Organizacional</p>
                <p>Conscientes de las necesidades de desarrollo y fortalecimiento de las Organizaciones, hemos desarrollado un programa encaminado a implementar los sistemas, procesos y estrategias.</p>
              </article>
            </div>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child notification is-primary'>
              <p className='title'>Desarrolla tu talento</p>
              <div className='content'>
                <p>Te invita a formar parte de la cantera de World Talent Consulting, lo cual te permitirá ser considerado en los futuros procesos de búsqueda. Si quieres ser entrevistado, evaluado y guiado para una entrevista exitosa contactanos, nuestro Director de la División de Búsqueda de Talento, te atenderá y apoyara en los siguientes programas confidenciales. Si vives una situación relacionada a mejorar tu vida profesional laboral y personal no descrita en los puntos anteriores, escribenos y podremos ayudarte.</p>
              </div>
            </article>
          </div>
        </div>
        <div className='tile is-parent'>
          <article className='tile is-child notification is-success'>
            <div className='content'>
              <p className='title'>Wolrd Talent Consulting</p>
              <div className='content'>
                <p>World Talent Consulting: nace como una empresa dedicada a ofrecer soluciones especializadas en Consultoría, Headhunting, Coaching y Outplacement. Hoy en día se he convertido en una empresa de consultoría global para el mercado Latinoamericano y Norteamericano.</p>
              </div>
              <div className='content'>
                <p>Nuestra principal función es asesorar (contribuir con nuestra experiencia desarrollando el talento y en su caso encontrar la persona con el Talento necesario para tu organización en las cuestiones sobre las cuales poseemos con mayor experiencia, para desarrollar el mejor talento para las empresas.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>)

export default Home
