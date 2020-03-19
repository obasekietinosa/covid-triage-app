import React, { Component } from 'react'
import Question from './Question'
import Option from './Option'
import Results from '../Results/Results';
import Loading from '../Loading/Loading';

export default class Quiz extends Component {

  constructor() {
    super();
    this.state = {
      currentQuestion: "intro",
      error: "",
      totalQuestions: 8,
      userName: "",
      email: "",
      termsAccepted: false,
      answers: [],
      score: 0,
      selected: [],
      endQuiz: false,
      alreadyQuizzed: false,
      button: <button onClick={this.startQuiz} className="btn btn-secondary waves-effect waves-light">Get Started <i className="fas fa-arrow-right"></i></button>,
      questionsLoaded: false,
      questions: [
        {
          text: "Dummy Question?",
          options: [
            {
              value: 1,
              text: "A Dummy Option"
            },
            {
              value: 0,
              text: "Another Dummy Option"
            },
            {
              value: 0,
              text: "Yet Another Dummy Option"
            }
          ]
        }
      ]
    };
    this.myRef = React.createRef()
  }

  componentDidMount() {
    console.log("Showing Questions")
      fetch("https://covid19-triage.firebaseio.com/questions.json", {
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          let questions = data
          questions = Object.values(questions)
          let questionsLoaded = true
          let totalQuestions = questions.length
          this.setState({ questions, questionsLoaded, totalQuestions, error: "" })
        })
        .catch(error => {
          error = "There was an error fetching questions. Please try again."
          this.setState({ error })
        })
      return
  }

  setUserName = (e) => {
    let userName = e.target.value
    if (userName.length) {
      this.setState({
        userName
      })
    }
  }

  setEmail = (e) => {
    let email = e.target.value
    if (email.length) {
      this.setState({
        email
      })
    }
  }

  acceptTerms = (e) => {
    let termsAccepted = !this.state.termsAccepted
    this.setState({ termsAccepted })
  }

  isCurrentQuestion = (question) => {
    return question === this.state.currentQuestion
  }

  startQuiz = () => {
    if (!this.state.termsAccepted) {
      this.setState({
        error: "Please accept the terms to continue"
      })
      return
    }
    this.setState({ currentQuestion: 0 })
  }

  isSelected = (question, option) => {
    return this.state.selected[question] === option ? true : false
  }

  endGame = () => {
    this.calculateScore()
    this.setState({ endQuiz: true })
  }

  checkQuestionsCompleted = () => {
    if (this.state.currentQuestion >= this.state.totalQuestions) {
      this.endGame()
    }
  }

  calculateScore = () => {
    let score = this.state.answers.reduce((sum, element) => {
      return sum + element;
    })
    
    console.log(score)
    this.setState({ score })
  }

  selectOption = (question, answer) => {
    let answers = this.state.answers
    answers[question] = answer

    this.setState({ answers })
    this.scrollToMyRef()
    let currentQuestion = this.state.currentQuestion + 1
    this.setState({ currentQuestion }, this.checkQuestionsCompleted)
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)

  render() {
    const quiz = <section id="hero" ref={this.myRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <Question show={this.isCurrentQuestion("intro")}>
              <div className="form-group text-center col-md-6 offset-md-3">
                <h3 className="col-sm-12">Before we begin...</h3>
                <p>
                    This app will determine your COVID-19 risk factor.
                </p>
              </div>

              <div className="form-group text-center col-md-6 offset-md-3 checkbox">
                <label htmlFor="acceptTerms">
                  <input
                    id="acceptTerms"
                    type="checkbox"
                    onClick={this.acceptTerms}
                    defaultChecked={this.state.termsAccepted}
                  />
                  &nbsp;Please accept the terms and conditions outlined.
                </label>
              </div>
              <div className="col-12 text-center">
                {this.state.button}
                <p className="error mt-3">{this.state.error}</p>
              </div>
            </Question>

            {
              this.state.questions.map((question, questionKey) => {
                return (
                  <Question key={questionKey} show={this.isCurrentQuestion(questionKey)}>
                    <div className="col-md-8 offset-md-2 text-center">
                      <h3 className="col-sm-12">
                        {question.text}
                      </h3>
                      {
                        question.options.map((option, optionKey) => {
                          return (
                            <Option
                              key={optionKey}
                              label={optionKey}
                              selected={this.isSelected}
                              onClick={this.selectOption}
                              question={questionKey}
                              answer={option.value}
                              value={option.text}
                            />
                          )
                        })
                      }
                    </div>

                  </Question>
                )
              })
            }

          </div>
        </div>
      </div>
    </section>

    return (
      <div>
        {
            this.state.endQuiz ?
              <Results score={this.state.score} name={this.state.userName} />
              :
              this.state.questionsLoaded ? quiz : <Loading />
        }
      </div>
    )
  }
}
