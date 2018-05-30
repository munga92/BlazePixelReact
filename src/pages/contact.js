import React, {Component} from 'react'
import axios from 'axios'
class Contact extends Component {
  constructor () {
    super()
    this.state = {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }

  handleChangeForm (e) {
    var {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form})
  }

  async handleSubmit (e) {
    var {form} = this.state
    e.preventDefault()
    try {
      await axios.post('http://blazepxel.com/api/contact', form)
      this.setState({form: {}})
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    var {form} = this.state

    return (<div className='container'>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className='field'>
          <label className='label'>Nombre</label>
          <div className='control'>
            <input
              className='input is-success'
              name='name'
              type='text'
              value={form.name}
              placeholder='Manuel Rosales'
              onChange={(e) => this.handleChangeForm(e)} />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Email</label>
          <div className='controL'>
            <input
              className='input is-success'
              name='email'
              type='email'
              value={form.email}
              placeholder='manuelrosales@ejemplo.com'
              onChange={(e) => this.handleChangeForm(e)} />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Asunto</label>
          <div className='control'>
            <input
              className='input is-success'
              name='subject'
              type='text'
              placeholder='Cotización'
              value={form.subject}
              onChange={(e) => this.handleChangeForm(e)} />
          </div>
        </div>

        <div className='field'>
          <label className='label'>Mensaje</label>
          <div className='control'>
            <textarea
              className='textarea'
              placeholder=''
              value={form.message}
              name='message'
              onChange={(e) => this.handleChangeForm(e)} />
          </div>
        </div>

        <div className='field is-grouped'>
          <div className='control'>
            <button className='button is-link'>Enviar</button>
          </div>
        </div>
      </form>
    </div>
    )
  }
}

export default Contact
