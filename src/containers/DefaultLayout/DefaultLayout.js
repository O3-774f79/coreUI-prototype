import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import {_findIndexOf,_findIndex } from 'lodash'
import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
import navigation from '../../_nav';
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import axios from 'axios'
const styles = {
   appBar: {
    // backgroundColor:"red"
   },
}
class DefaultLayout extends Component {
  state = {
     dataMenu: {items:[]}
  }
  async componentDidMount(){
    try{
      const dataMenuRes = await axios.get("http://localhost:5000/api/menu")
      console.log("dataRes ->>",dataMenuRes)
      await this.setState({dataMenu:{items:dataMenuRes.data}})
    }
    catch(e) {
       console.log("e ->>>",e)
    }
  }
  render() {
    const {dataMenu} = this.state
    return (
      <div className="app">
        <AppHeader fixed style={styles.appBar}>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={dataMenu} {...this.props}/>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          {/* <AppAside fixed >
            <DefaultAside />
          </AppAside> */}
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
