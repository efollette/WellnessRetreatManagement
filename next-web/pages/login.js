/**
 * Filename: login.js
 * Author: Manav Vats
 * Description: Login page
 * Date: May 13th, 2020
 */

import Layout from '../components/layout';
import Input from '../components/input'
import Logo from '../components/logo'
import Button from '../components/button'

export default () => (
  <Layout home>
    <Logo></Logo>
    <Input identity={'Username'} type={'text'}></Input>
    <Input identity={'Password'} type={'password'}></Input>
    <Button text={'/dashboard'} onclick={checkUser("","")}>Log in</Button>
    <Button text={'/signup'}>Sign Up</Button>
  </Layout>
);

export function checkUser(username, password){
  console.log("Checking User");
  user = {u: username, p: password};
  pckgUser = JSON.stringify(user);
  const res = await fetch('http://localhost:5000');
  const json = await res.json();
  console.log(json);
}
