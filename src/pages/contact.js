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
            <div className='field-body'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input'
                    name='name'
                    type='text'
                    placeholder={'Nombre'}
                    value={form.name}
                    onChange={(e) => this.handleChangeForm(e)} />
                </div>
              </div>
            </div>
          </div>

          <div className='field is-horizontal'>
            <div className='field-body'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input'
                    name='email'
                    type='email'
                    placeholder={'Email'}
                    value={form.email}
                    onChange={(e) => this.handleChangeForm(e)} />
                </div>
              </div>
            </div>
          </div>

          <div className='field is-horizontal'>
            <div className='field-body'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input '
                    name='subject'
                    type='text'
                    placeholder='Asunto'
                    value={form.subject}
                    onChange={(e) => this.handleChangeForm(e)} />
                </div>
              </div>
            </div>
          </div>

          <div className='field is-horizontal'>
            <div className='field-body'>
              <div className='field'>
                <div className='control'>
                  <textarea
                    className='textarea'
                    placeholder='Mensaje'
                    value={form.message}
                    name='message'
                    onChange={(e) => this.handleChangeForm(e)} />
                </div>
              </div>
            </div>
          </div>

          <div className='control'>
            <button className='button is-fullwidth is-success'>
              <label>Enviar</label>
            </button>
          </div>
        </form>
    )
  }
}

export default Contact
