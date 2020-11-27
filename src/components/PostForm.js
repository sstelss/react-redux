import React from 'react'
import { connect } from 'react-redux'
import { createPost, showAlert } from '../redux/actions'
import Alert from './Alert'
import Posts from './Post'

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault()

    const { title } = this.state
    if (!title.trim()) return this.props.showAlert('Fill post name!')

    const newPost = {
      id: Date.now().toString(),
      title
    }
    this.props.createPost(newPost)
    this.setState({ title: '' })
  }

  changeInputHendler = event => {
    event.persist()
    this.setState(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  render() {
    return(
      <form onSubmit={this.submitHandler}>
        
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHendler}
          />
        </div>
        <button className="btn btn-success" type="submit">Добавить</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    alert: state.app.alert
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)