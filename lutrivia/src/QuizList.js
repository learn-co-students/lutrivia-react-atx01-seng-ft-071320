import React, { Component } from 'react';

class QuizList extends Component {
    state = {  }
    render() { 
        return ( this.props.questions.map(question => {<div><p>question.text</p><p>question.answer</p></div>}) );
    }
}
 
export default QuizList;