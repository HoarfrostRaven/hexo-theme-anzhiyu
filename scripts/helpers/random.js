// Hexo 的扩展接口，注册了一个名为 "random" 的生成器
hexo.extend.generator.register("random", function (locals) {
  const config = hexo.config.random || {};
  const posts = [];

  for (const post of locals.posts.data) {
    if (post.random !== false) posts.push(post.path);
  }

  let result = `var posts=${JSON.stringify(
    posts
  )};function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};`;

  return {
    path: config.path || "anzhiyu/random.js",
    data: result,
  };
});
