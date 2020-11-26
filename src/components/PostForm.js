import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'
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
    if (!title.trim()) return
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

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm)