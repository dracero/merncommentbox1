//CommentForm.js
import React, { Component } from 'react';
import style from './style';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { author: '', me:'', text: '' };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleMeChange = this.handleMeChange.bind(this); 
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleMeChange(e) {
    this.setState({ me: e.target.value });
  }    
  handleTextChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let me = this.state.me.trim();  
    let text = this.state.text.trim();
    if (!text || !author || !me) {
      return;
    }
    this.props.onCommentSubmit({ author: author, me: me, text: text });
    this.setState({ author: '', me:'', text: '' });
  }
  render() {
    return (
      <form style={ style.commentForm } onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder='Your name...'
          style={ style.commentFormAuthor}
          value={ this.state.author }
          onChange={ this.handleAuthorChange } />
        <input
          type='text'
          placeholder='Changed by me...'
          style={ style.commentFormAuthor}
          value={ this.state.me }
          onChange={ this.handleMeChange } />
        <input
          type='text'
          placeholder='Say something...'
          style={ style.commentFormText}
          value={ this.state.text }
          onChange={ this.handleTextChange } />
        <input
          type='submit'
          style={ style.commentFormPost }
          value='Post'/>
      </form>
    )
  }
}

export default CommentForm;