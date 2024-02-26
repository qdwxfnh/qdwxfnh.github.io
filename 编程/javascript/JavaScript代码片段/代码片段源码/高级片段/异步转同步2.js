function asyncFunction() {
  return new Promise((resolve, reject) => {
    // 模拟异步操作
    setTimeout(() => {
      const result = 'Hello, world!';
      console.log(result)
      resolve(result);
    }, 1000);
  });
}

// 调用测试
(async function() {
  console.log('Start');

  const result = await asyncFunction();

  console.log('End');
})();