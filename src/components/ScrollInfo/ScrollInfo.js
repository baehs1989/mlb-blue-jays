import React, {Component} from 'react';
import styles from './ScrollInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight,  } from '@fortawesome/free-solid-svg-icons';




class ScrollInfo extends Component{


  render(){
    return (
        <div className={styles.Wrapper}>
          <FontAwesomeIcon className={styles.SInfo} icon={faAngleDoubleLeft}/>
          <FontAwesomeIcon className={styles.SInfo} icon={faAngleDoubleRight}/>
        </div>
    )
  }
}

export default ScrollInfo
