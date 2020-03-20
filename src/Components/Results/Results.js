import React, { Component } from 'react'
import lowRisk from '../assets/img/lowRisk.png'
import mediumRisk from '../assets/img/mediumRisk.png'
import highRisk from '../assets/img/highRisk.png'

import './Results.css'
import SocialShare from '../SocialShare/SocialShare';

export default class Results extends Component {
    constructor() {
        super();
        this.state = {
            image: lowRisk,
            title: "The risk of you having COVID-19 is low.",
            grade: "Low risk",
            description: `
                <p>
                    Stay safe and healthy. Please follow the advice on COVID19 prevention. 
                </p>
                <p>
                    For further information: ask more questions on Wellvis or chat a doctor on Wellvis 
                    by clicking <a href="https://app.wellvis.org/#/chat/find" target="_blank" rel="noopener noreferrer">here</a>
                <p>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/102/frequently-asked-questions-on-covid-19" class="btn btn-primary">Frequently Asked Questions</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/103/covid-19-prevention-advice" class="btn btn-primary">Prevention Tips</a>
                </p>
            `,
            hasPromo: false,
            promoType: "",
            promoCode: ""
        }
    }

    componentDidMount() {
        const score = this.props.score
        var { image, title, grade, description } = this.state
        switch (true) {
            case score > 4:
                image = highRisk
                title = "High Risk"
                grade = "High Risk"
                description = `
                    <p>You are at high risk for COVID-19. Please do the following:</p>
                    <ul>
                        <li>Stay calm</li>
                        <li>Isolate yourself from family and friends</li>
                        <li>Call the following Numbers and you will be told what to do next:</li>
                    </ul>
                    <p>
                        For Nigeria: 08000CORONA 08023169485, 08033565529, 08052817243
                    </p>
                    <p>
                        For Ghana: +233 55 843 9868 / +233 50 949 7700
                    </p>
                    <p>
                        For Kenya: 0729 471414 and 0732 353535
                    </p>
                    <p>
                        For Gambia: 1025
                    </p>
                    <p>
                        For Cameroon: 1510
                    </p>

                    <p>You can get in touch and chat with a doctor on Wellvis by clicking <a href="https://app.wellvis.org/#/chat/find" target="_blank" rel="noopener noreferrer">here</a></p>
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/102/frequently-asked-questions-on-covid-19" class="btn btn-primary">Frequently Asked Questions</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/103/covid-19-prevention-advice" class="btn btn-primary">Prevention Tips</a>
                    </p>
                `
                break;

            case score > 2:
                image = mediumRisk
                title = "Medium Risk"
                grade = "Medium Risk"
                description = `
                    <p>Kindly watch yourself carefully and if you have difficulty in breathing please call the appropriate number</p>
                    <p>
                        For Nigeria: 08000CORONA 08023169485, 08033565529, 08052817243
                    </p>
                    <p>
                        For Ghana: +233 55 843 9868 / +233 50 949 7700
                    </p>
                    <p>
                        For Kenya: 0729 471414 and 0732 353535
                    </p>
                    <p>
                        For Gambia: 1025
                    </p>
                    <p>
                        For Cameroon: 1510
                    </p>

                    <p>You can get in touch and chat with a doctor on <a href="https://app.wellvis.org/#/chat/find" target="_blank" rel="noopener noreferrer">Wellvis</p>
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/102/frequently-asked-questions-on-covid-19" class="btn btn-primary">Frequently Asked Questions</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/103/covid-19-prevention-advice" class="btn btn-primary">Prevention Tips</a>
                    </p>
                `
                break;

            default:
                break;
        }
        this.setState({
            image,
            title,
            grade,
            description,
        })        
    }

    render() {

        return (
            <section id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mb-3 col-md-6">
                            <img
                                className="img-fluid"
                                src={this.state.image}
                                alt={this.state.title}
                                style={{
                                    maxHeight: "350px",
                                    margin: "0 auto",
                                    display: "block"
                                }}
                            />
                            <h2 className="primary-text text-center mt-3 bold">{ this.state.grade }</h2>
                        </div>
                        <div className="col-sm-12 mb-3 col-md-6 share-instructions">
                            <h4 className="primary-text">
                                {this.state.title}
                            </h4>
                            <div 
                                style={{ fontWeight: "300" }} 
                                dangerouslySetInnerHTML={{ __html: this.state.description }} 
                            >
                            </div>
                            <SocialShare 
                                text="Take this simple test to find out your COVID-19 Risk factor"
                                url={ window.location.href }
                                tag="COVID19" 
                            />
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}
