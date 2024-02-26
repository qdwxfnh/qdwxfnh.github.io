function app() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {alert("app");resolve(1)}, 9000);  
  })
}

function page() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {alert("page");resolve(2)}, 4000);  
  })
}

// .then 的第一个参数是一个函数，该函数将在 promise resolved 且接收到结果后执行。
app().then(result=>page())