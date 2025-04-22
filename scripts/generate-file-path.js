
fetch('/files.json')
  .then(res => {
    if (!res.ok) throw new Error('无法加载 files.json');
    return res.json();
  })
  .then(items => {
    console.log(4444444, items);
    const ul = document.getElementById('file-list');
    ul.innerHTML = '';  // 清空 loading 文本
    items.forEach(({ name, url }) => {
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href = url;
      a.textContent = name;
      a.target = '_blank';
      li.appendChild(a);
      ul.appendChild(li);
    });
  })
  .catch(err => {
    document.getElementById('file-list').textContent = '加载失败：' + err.message;
  });
