import React, {Component} from 'react';
import {Redirect} from 'react-router';
import Spinner from '../components/Spinner/Spinner'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props){
          super(props)
          this.state ={
            error:null,
          }

          this.checkError()

        }

        checkError () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => {
                return res
              }
              ,

              error => {
                console.log(this.props)
                this.props.history.replace('/error')
                this.setState({error: error})
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error:null});
        }

        render () {
            return (
              <React.Fragment>
                <WrappedComponent {...this.props}/>
              </React.Fragment>
            )
        }
    }

}

export default withErrorHandler
