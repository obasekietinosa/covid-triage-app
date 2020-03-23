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
      answers: [],
      score: 0,
      selected: [],
      lang:"fr",
      endQuiz: false,
      alreadyQuizzed: false,
      questionsLoaded: false,
      questions: [
        {
          text: "Dummy Question?",
          text_lang: {
              'en': "Dummy Question",
              'fr': "Dummy Question"
          },
          options: [
            {
              value: 1,
              text: "A Dummy Option",
              text_lang: {
                'en': "Dummy Question",
                'fr': "Dummy Question"
              }
            },
            {
              value: 0,
              text: "Another Dummy Option",
              text_lang: {
                'en': "Dummy Question",
                'fr': "Dummy Question"
              }
            },
            {
              value: 0,
              text: "Yet Another Dummy Option",
              text_lang: {
                'en': "Dummy Question",
                'fr': "Dummy Question"
              }
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

  isCurrentQuestion = (question) => {
    return question === this.state.currentQuestion
  }

  startQuiz = () => {
    this.setState({ currentQuestion: 0 })
  }

  isSelected = (question, option) => {
    return this.state.selected[question] === option ? true : false
  }

  endGame = () => {
    this.calculateScore()
    this.persistResults()
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

  persistResults = () => {
      fetch("https://covid19-triage.firebaseio.com/results.json", {
        method: 'POST'
      })
      fetch("https://covid19-triage.firebaseio.com/results.json", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                answers: this.state.answers
            })
      })
        .then(console.log("Saved"))
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

  content = {
      'preheader': {
          'en': "Before we begin...",
          'fr': "Avant de commencer..."
      },
      'intro': {
          'en': "This app will determine your COVID-19 risk factor and if you need to call the Disease Control Hotline or not.",
          'fr': "Cet outil évalue votre risque d'exposition à COVID 19 et si vous devez appeler la hotline de contrôle des maladies ou non"
      },
      'startBtn': {
          'en': "Get Started",
          'fr': "Commencer"
      }
  }

  render() {
    const quiz = <section id="hero" ref={this.myRef}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <Question show={this.isCurrentQuestion("intro")}>
              <div className="form-group text-center col-md-6 offset-md-3">
                <h3 className="col-sm-12">{ this.content.preheader[this.state.lang] }</h3>
                <p>
                    { this.content.intro[this.state.lang] }
                </p>
              </div>
              <div className="col-12 text-center">
                <button onClick={this.startQuiz} className="btn btn-secondary waves-effect waves-light">
                    { this.content.startBtn[this.state.lang] } <i className="fas fa-arrow-right"></i>
                </button>
                <p className="error mt-3">{this.state.error}</p>
              </div>
            </Question>

            {
              this.state.questions.map((question, questionKey) => {
                return (
                  <Question key={questionKey} show={this.isCurrentQuestion(questionKey)}>
                    <div className="col-md-8 offset-md-2 text-center">
                      <h3 
                         className="col-sm-12"
                        dangerouslySetInnerHTML={{ __html: question.text_lang[this.state.lang] }}
                      >
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
                              value={option.text_lang[this.state.lang]}
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
              <Results score={this.state.score} lang={this.state.lang} />
              :
              this.state.questionsLoaded ? quiz : <Loading lang={this.state.lang} />
        }
      </div>
    )
  }
}
