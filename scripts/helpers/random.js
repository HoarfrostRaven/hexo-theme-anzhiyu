// Hexo 的扩展接口，注册了一个名为 "random" 的生成器
hexo.extend.generator.register("random", function (locals) {
  const config = hexo.config.random || {};
  const posts = [];

  for (const post of locals.posts.data) {
    if (post.random !== false) posts.push(post.path);
  }

  // 定义 toRandomPost() 方法，调用时会随机跳转到某一篇文章
  let result = `var posts=${JSON.stringify(posts)};
  function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };`;

  return {
    path: config.path || "anzhiyu/random.js",
    data: result,
  };
});
