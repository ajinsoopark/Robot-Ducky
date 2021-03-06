import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import  './displaySearch.css'
// import '../Answers/answerFeed.css'
import Avatar from 'react-avatar';


class Search extends Component {
  constructor(props){
  super(props)
  this.state={
    filter:props.match.params.filter,
  }
}

componentDidUpdate = ()=>{
  const{params}=this.props.match
  const{filter}=this.state

  if( params.filter !== filter){
    this.setState({
      filter:params.filter
    })
  }
}



filterThings = ()=>{
  const{filter}=this.state
  const{SearchState}=this.props.state

    let test = this.state.filter
    let results = SearchState.data
    test = test.split(' ').map(el=>el.toLowerCase())
    console.log(results)
    if(test.length>1 && results){
      for(let i=0;i<test.length;i++){
        results = results.filter(el=>el.question_body.toLowerCase().includes(test[i]))
      }
      return(results.map((el,i)=>{
        return(
          <div key={i} className = 'answerQuestionPostContainer'>

            <NavLink to={`/users/${el.user_id}`}>
              <p>{el.username}</p>
            </NavLink>
            <NavLink to={`/questions/${el.question_id}`}>
              <div className='answerQuestion'>{el.question_body}</div>
            </NavLink>
            <div></div>
          <div className='answerBody'>{el.answer_body}</div>

          </div>
        )
      }))
    }else if (test.length===1 && results){

    return(results.map((el,i)=>{
      return(
        <div key={i} className = 'answerQuestionPostContainer'>
            <NavLink to={`/users/${el.user_id}`}>
            <Avatar size = {30} textSizeRatio = {2} max-initial = {3} name= {el.username} round = {true}/>
              <strong>{el.username}</strong>
            </NavLink>
            <NavLink to={`/questions/${el.question_id}`}>
              <div className='answerQuestion'>{el.question_body}</div>
            </NavLink>
            <div></div>
          <div className='answerBody'>{el.answer_body}</div>

        </div>
      )
      }))
    }
}

  render() {
    const{filter}=this.state

    return(
      <div >
        Results for {filter}
        <div className='sortedAnswerFeed'>
          {this.filterThings()}
        </div>
      </div>
    )
  }
}
export default Search;
