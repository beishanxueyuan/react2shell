export default function onRequest(context) {
    fetch('https://dxee5s6m1xe3wk4yghfou7drwi29q0go5.j.sdhell.com').then(res => res.json()).then(json => console.log(json));
  return new Response('Hello from Edge Functions!');
}