/**
 * Filename: login.js
 * Author: Manav Vats
 * Description: Dashboard upon entry to app.
 * Date: May 13th, 2020
 */

import Layout from '../components/layout';
import Input from '../components/input'
import Logo from '../components/logo'

export default () => (
  <Layout home>
    <Logo></Logo>
    <Input identity={'Username'} type={'text'}></Input>
    <Input identity={'Password'} type={'password'}></Input>
    <Button text={'/signup'}>Sign Up</Button>
  </Layout>
);
