// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickButton = () => console.log('btn click')

  onclickEmoji = () => this.setState({isFeedbackSelected: true})

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-questions-card">
        <h1 className="feedback-heading">
          How satisfied are you with our <br /> customer support performance?{' '}
        </h1>
        <ul className="feedback-question-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                className="button-emoji"
                type="button"
                onClick={this.onclickEmoji}
              >
                <img className="emoji" src={emoji.imageUrl} alt={emoji.name} />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />

        <h1 className="thank-you">Thank You!</h1>
        <p className="thank-you-description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderThankyouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
