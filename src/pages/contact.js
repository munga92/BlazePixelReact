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
      await axios.post('http://localhost:8000/api/contact', form)
      this.setState({form: {}})
    } catch (e) {
      console.log(e)
    }
  }

  render () {
    var {form} = this.state

    return (
        <form onSubmit={(e) => this.handleSubmit(e)}>

          <div className='field is-horizontal'>
            <div className='field-label'>
              <label className='label'>Nombre</label>
            </div>
            <div className='field-body'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input'
                    name='name'
                    type='text'
                    value={form.name}
                    placeholder=''
                    onChange={(e) => this.handleChangeForm(e)} />
                </div>
              </div>
            </div>
          </div>

          <div className='field is-horizontal'>
            <div className='field-label'>
              <label className='label'>Email</label>
            </div>
            <div className='field-body'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input '
                    name='email'
                    type='email'
                    value={form.email}
                    placeholder=''
                    onChange={(e) => this.handleChangeForm(e)} />
                </div>
              </div>
            </div>
          </div>

          <div className='field is-horizontal'>
            <div className='field-label'>
              <label className='label'>Asunto</label>
            </div>
            <div className='field-body'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input '
                    name='subject'
                    type='text'
                    placeholder=''
                    value={form.subject}
                    onChange={(e) => this.handleChangeForm(e)} />
                </div>
              </div>
            </div>
          </div>

          <div className='field is-horizontal'>
            <div className='field-label'>
              <label className='label'>Mensaje</label>
            </div>
            <div className='field-body'>
              <div className='field'>
                <div className='control'>
                  <textarea
                    className='textarea'
                    placeholder=''
                    value={form.message}
                    name='message'
                    onChange={(e) => this.handleChangeForm(e)} />
                </div>
              </div>
            </div>
          </div>

          <div className='field is-grouped'>
            <div className='control' align="center">
              <button className='button is-rounded is-large secondary'>Enviar</button>
            </div>
          </div>
        </form>
    )
  }
}

export default Contact
