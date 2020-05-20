/**
 * Filename: app.js
 * Author: Erik Follette
 * Description: Main page of the app, for now this will be login/signup
 * Date: May 3rd, 2020
 */
import Layout from '../components/layout';
import Button from '../components/button'
import Logo from '../components/logo'

export default () => (
  <Layout home>
    <Logo></Logo>
    <Button text={'/login'}></Button>
    <Button text={'/signup'}></Button>
  </Layout>
);

