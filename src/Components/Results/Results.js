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
            status: {
                image: lowRisk,
                title: "The risk of you having COVID-19 is low.",
                grade: "Low risk",
                description: ``
            },
            hasPromo: false,
            promoType: "",
            promoCode: ""
        }
    }

    componentDidMount() {
        const score = this.props.score
        let status = {}
        switch (true) {
            case score > 4:
                status = this.status.highRisk
                break
            case score > 2:
                status = this.status.mediumRisk
                break
            default:
                status = this.status.lowRisk
                break;
        }
        this.setState({
            status
        })        
    }

    status = {
        'lowRisk': {
            image: lowRisk,
            title: {
                'en': "The risk of you having COVID-19 is low.",
                'fr': "Le risque que vous ayez COVID-19 est faible."
            },
            grade: {
                'en': "Low risk",
                'fr': "Faible risque"
            },
            description: {
                'en': `
                    <p>
                        Stay safe and healthy. Please follow the advice on COVID-19 prevention. 
                    </p>
                    <p>
                        For further information: ask more questions on Wellvis or chat a doctor on Wellvis 
                        by clicking <a href="https://app.wellvis.org/#/chat/find" target="_blank" rel="noopener noreferrer"><b>here</b></a>
                    <p>
                   <p>
                        <b>Please note</b> that a sudden loss of your sense of smell or taste could be a sign that you are carrying the #COVIDー19 virus.
                   </p>
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/102/frequently-asked-questions-on-covid-19" class="my-2 btn btn-primary">Frequently Asked Questions</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/103/covid-19-prevention-advice" class="my-2 btn btn-primary">Prevention Tips</a>
                    </p>
                `,
                'fr': `
                    <p>
                        Restez en sécurité et en bonne santé. Veuillez suivre les conseils de prévention du COVID-19. 
                    </p>
                    <p>
                        Pour plus d'informations: poser plus de questions sur Wellvis ou discuter avec 
                        un médecin sur <a href="https://app.wellvis.org/#/chat/find" 
                        target="_blank" rel="noopener noreferrer"><b>Wellvis en cliquant ici</b></a>
                    <p>
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/102/frequently-asked-questions-on-covid-19" class="my-2 btn btn-primary">Frequently Asked Questions</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/105/conseils-de-prevention" class="my-2 btn btn-primary">Conseils de prevention</a>
                    </p>
                `
            },
        },
        'mediumRisk': {
            image: mediumRisk,
            title: {
                'en': "The risk of you having COVID-19 is medium.",
                'fr': "The risk of you having COVID-19 is medium."
            },
            grade: {
                'en': "Medium risk",
                'fr': "Medium risk"
            },
            description: {
                'en': `
                    <p>Kindly watch yourself carefully and if you have difficulty in breathing please call the appropriate number</p>
                    <p>
                        Nigeria: 0800 970000 10    
                    </p>
                    <p>
                        Lagos:  08023169485, 08033565529, 08052817243
                    </p>
                    <p>
                        Ghana: +233 55 843 9868 / +233 50 949 7700
                    </p>
                    <p>
                        Kenya: 0729 471414 and 0732 353535.
                    </p>
                    <p>
                        Gambia: 1025
                    </p>
                    <p>
                        Cameroon: 1510
                    </p>
                    <p>
                        Carbo Verde: +238 800 1112
                    </p>
                    <p>
                        Burkina Faso +226 160 8989 / +226 521 95394
                    </p>
                    <p>
                        Benin: +229 953 61102 / +229 953 61102
                    </p>
                    <p>
                        Cote d'ivoire: 114 / 143 / 101
                    </p>
                    <p>
                        Mali: 30601
                    </p>
                    <p>
                        Senegal: +221 800005050
                    </p>
                    <p>
                        Sierra Leone: 117
                    </p>
                    <p>
                        Togo: +228 22222073 / +228 91674242
                    </p>
                    <p>
                        Guinea: +224 629995656
                    </p>
                    <p>
                        Guine-Bissau: 1919 (MTN) / 2020 (orange) / +245 966050002 (COES)
                    </p>

                   <p>
                        <b>Please note</b> that a sudden loss of your sense of smell or taste could be a sign that you are carrying the #COVIDー19 virus.
                   </p>

                    <p>You can get in touch and chat with a doctor on <a href="https://app.wellvis.org/#/chat/find" target="_blank" rel="noopener noreferrer"><b>Wellvis</b></a></p>
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/102/frequently-asked-questions-on-covid-19" class="my-2 btn btn-primary">Frequently Asked Questions</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/103/covid-19-prevention-advice" class="my-2 btn btn-primary">Prevention Tips</a>
                    </p>
                `,
                'fr': `
                    <p>Veuillez vous surveiller attentivement et si vous avez des difficultés à respirer, veuillez appeler le numéro approprié</p>
                    <p> 
                        Pour le Nigeria : 08000CORONA, 08023169485, 08033565529, 08052817243
                    </p>
                    <p> 
                        Pour le Ghana : +233 55 843 9868/ + 233 50 949 7700
                    </p>
                    <p> 
                        Pour le Kenya : 0729 471414 et 0732 353535
                    </p>
                    <p> 
                        Pour la Gambie : 1025
                    </p>
                    <p> 
                        Pour le Cameroun : 1510
                    </p>
                    <p> 
                        Pour le Carbo Verde: +238 800 1112
                    </p>
                    <p> 
                        Pour le Burkina Faso +226 160 8989 / +226 521 95394
                    </p>
                    <p> 
                        Pour le Benin: +229 953 61102 / +229 953 61102
                    </p>
                    <p> 
                        Pour le Cote d'ivoire: 114 / 143 / 101
                    </p>
                    <p> 
                        Pour le Mali: 30601
                    </p>
                    <p> 
                        Pour le Senegal: +221 800005050
                    </p>
                    <p> 
                        Pour le Sierra Leone: 117
                    </p>
                    <p> 
                        Pour le Togo: +228 22222073 / +228 91674242
                    </p>
                    <p> 
                        Pour le Guinea: +224 629995656
                    </p>
                    <p> 
                        Pour le Guine-Bissau: 1919 (MTN) / 2020 (orange) / +245 966050002 (COES)
                    </p>

                    <p>Vous pouvez entrer en contact et discuter avec un médecin sur <a href="https://app.wellvis.org/#/chat/find" target="_blank" rel="noopener noreferrer"><b>Wellvis</b></a></p>
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/102/frequently-asked-questions-on-covid-19" class="my-2 btn btn-primary">Frequently Asked Questions</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/105/conseils-de-prevention" class="my-2 btn btn-primary">Conseils de prevention</a>
                    </p>
                `
            },
        },
        'highRisk': {
            image: highRisk,
            title: {
                'en': "The risk of you having COVID-19 is high.",
                'fr': "Le risque que vous ayez COVID-19 est élevé."
            },
            grade: {
                'en': "High risk",
                'fr': "Risque élevé"
            },
            description: {
                'en': `
                    <p>You are at high risk for COVID-19. Please do the following:</p>
                    <ul>
                        <li>Stay calm</li>
                        <li>Isolate yourself from family and friends</li>
                        <li>Call the following Numbers and you will be told what to do next:</li>
                    </ul>
                    <p>
                        Nigeria: 0800 970000 10    
                    </p>
                    <p>
                        Lagos:  08023169485, 08033565529, 08052817243
                    </p>
                    <p>
                        Ghana: +233 55 843 9868 / +233 50 949 7700
                    </p>
                    <p>
                        Kenya: 0729 471414 and 0732 353535.
                    </p>
                    <p>
                        Gambia: 1025
                    </p>
                    <p>
                        Cameroon: 1510
                    </p>
                    <p>
                        Carbo Verde: +238 800 1112
                    </p>
                    <p>
                        Burkina Faso +226 160 8989 / +226 521 95394
                    </p>
                    <p>
                        Benin: +229 953 61102 / +229 953 61102
                    </p>
                    <p>
                        Cote d'ivoire: 114 / 143 / 101
                    </p>
                    <p>
                        Mali: 30601
                    </p>
                    <p>
                        Senegal: +221 800005050
                    </p>
                    <p>
                        Sierra Leone: 117
                    </p>
                    <p>
                        Togo: +228 22222073 / +228 91674242
                    </p>
                    <p>
                        Guinea: +224 629995656
                    </p>
                    <p>
                        Guine-Bissau: 1919 (MTN) / 2020 (orange) / +245 966050002 (COES)
                    </p>
                    
                   <p>
                        <b>Please note</b> that a sudden loss of your sense of smell or taste could be a sign that you are carrying the #COVIDー19 virus.
                   </p>

                    <p>You can get in touch and chat with a doctor on Wellvis by clicking <a href="https://app.wellvis.org/#/chat/find" target="_blank" rel="noopener noreferrer">here</a></p>
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/102/frequently-asked-questions-on-covid-19" class="my-2 btn btn-primary">Frequently Asked Questions</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/103/covid-19-prevention-advice" class="my-2 btn btn-primary">Prevention Tips</a>
                    </p>
                `,
                'fr': `
                    <p>Vous courez un risque élevé de COVID-19. Veuillez procéder comme suit:</p>
                    <ul>
                        <li>Reste calme</li>
                        <li>Isolez-vous de la famille et des amis</li>
                        <li>Appelez les numéros de téléphone suivants et on vous dira quoi faire ensuite:</li>
                    </ul>
                    <p> 
                        Pour le Nigeria : 08000CORONA, 08023169485, 08033565529, 08052817243
                    </p>
                    <p> 
                        Pour le Ghana : +233 55 843 9868/ + 233 50 949 7700
                    </p>
                    <p> 
                        Pour le Kenya : 0729 471414 et 0732 353535
                    </p>
                    <p> 
                        Pour la Gambie : 1025
                    </p>
                    <p> 
                        Pour le Cameroun : 1510
                    </p>
                    <p> 
                        Pour le Carbo Verde: +238 800 1112
                    </p>
                    <p> 
                        Pour le Burkina Faso +226 160 8989 / +226 521 95394
                    </p>
                    <p> 
                        Pour le Benin: +229 953 61102 / +229 953 61102
                    </p>
                    <p> 
                        Pour le Cote d'ivoire: 114 / 143 / 101
                    </p>
                    <p> 
                        Pour le Mali: 30601
                    </p>
                    <p> 
                        Pour le Senegal: +221 800005050
                    </p>
                    <p> 
                        Pour le Sierra Leone: 117
                    </p>
                    <p> 
                        Pour le Togo: +228 22222073 / +228 91674242
                    </p>
                    <p> 
                        Pour le Guinea: +224 629995656
                    </p>
                    <p> 
                        Pour le Guine-Bissau: 1919 (MTN) / 2020 (orange) / +245 966050002 (COES)
                    </p>

                    <p>Vous pouvez entrer en contact et discuter avec un médecin sur <a href="https://app.wellvis.org/#/chat/find" target="_blank" rel="noopener noreferrer">Wellvis en cliquant ici</a></p>
                    <p>
                        <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/102/frequently-asked-questions-on-covid-19" class="my-2 btn btn-primary">Frequently Asked Questions</a>
                       <a target="_blank" rel="noopener noreferrer" href="https://app.wellvis.org/#/articles/view/105/conseils-de-prevention" class="my-2 btn btn-primary">Conseils de prevention</a>
                    </p>
                `
            },
        }
    }

    content = {
        shareText: {
            'en': "Take this simple test to find out your COVID-19 Risk factor",
            'fr': "Faites ce test simple pour découvrir votre facteur de risque COVID-19"
        },
        shareHeading: {
            'en': "Share this tool with your friends and family",
            'fr': "Partagez cet outil avec vos amis et votre famille"
        }
    }

    render() {

        return (
            <section id="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 mb-3 col-md-6">
                            <img
                                className="img-fluid"
                                src={this.state.status.image}
                                alt={this.state.status.title[this.props.lang]}
                                style={{
                                    maxHeight: "200px",
                                    margin: "0 auto",
                                    display: "block"
                                }}
                            />
                            <h2 className="primary-text text-center mt-3 bold">
                                { this.state.status.grade[this.props.lang] }
                            </h2>
                        </div>
                        <div className="col-sm-12 mb-3 col-md-6 share-instructions">
                            <h4 className="primary-text">
                                { this.state.status.title[this.props.lang] }
                            </h4>
                            <div 
                                style={{ fontWeight: "300" }} 
                                dangerouslySetInnerHTML={{ __html: this.state.status.description[this.props.lang] }} 
                            >
                            </div>
                            <h3>{this.content.shareHeading[this.props.lang]}</h3>
                            <SocialShare 
                                text={this.content.shareText[this.props.lang]}
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
