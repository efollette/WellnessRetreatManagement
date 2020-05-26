/**
 * Filename: signup.js
 * Author: Manav Vats
 * Description: Signup page
 * Date: May 13th, 2020
 */

import Layout from '../components/layout';
import Logo from '../components/logo'

export default () => (
  <Layout home>
    <Logo></Logo>
    <Input identity={'Username'} type={'text'}></Input>
    <Input identity={'Password'} type={'password'}></Input>
    
  </Layout>
);
