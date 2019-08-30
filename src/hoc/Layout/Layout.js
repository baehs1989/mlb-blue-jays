import React, {Component} from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ScrollUpButton from '../../components/ScrollUpButton/ScrollUpButton'

class Layout extends Component {
    render (){
        return (
          <React.Fragment>
            <Navigation/>
            <div className={"container-fluid"}>
              <div className="row justify-content-center">
                <main role="main" className="col-12 col-md-9">
                  <div className="row justify-content-center">
                    {this.props.children}
                  </div>
                </main>
              </div>
            </div>
            <ScrollUpButton/>
          </React.Fragment>
        )
    }

}

export default Layout;
