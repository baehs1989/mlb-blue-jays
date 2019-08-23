import React, {Component} from 'react'
import Navigation from '../../components/Navigation/Navigation'
import styles from './Layout.module.css'

class Layout extends Component {
    render (){
        return (
          <React.Fragment>
            <Navigation/>
            <div className={styles.Main + " container-fluid"}>
              <div className="row justify-content-center">
                <main role="main" className="col-10">
                  {this.props.children}
                </main>
              </div>
            </div>
          </React.Fragment>
        )
    }

}

export default Layout;
