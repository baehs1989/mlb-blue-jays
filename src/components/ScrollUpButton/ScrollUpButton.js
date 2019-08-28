import React, {Component} from 'react';
import styles from './ScrollUpButton.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';




class ScrollUpButton extends Component{

  componentDidMount(){
    window.addEventListener("scroll", this.onScrollHandler);
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.onScrollHandler);
  }

  goTopFunction(){
    document.body.scrollTop=0
    document.documentElement.scrollTop = 0
  }

  onScrollHandler(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      // console.log("show")
      // this.button.style.display="block"
      document.querySelector(".ScrollUpButton").style.display="block"
    } else {
      document.querySelector(".ScrollUpButton").style.display="none"
    }
  }


  render(){
    return (
      <FontAwesomeIcon  icon={faArrowUp} className={styles.Icon + " ScrollUpButton"} onClick={this.goTopFunction}/>
    )
  }
}

export default ScrollUpButton
