fetch('content/blog/sample-post.md')
  .then(res => res.text())
  .then(md => {
    const html = marked.parse(md);
    document.getElementById('blog-post').innerHTML = html;
  })
  .catch(err => console.error('Markdown load error:', err));
