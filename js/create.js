const form = document.querySelector('form');

const createPost = async (e) => {
  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0
  }  

  await fetch('http://localhost:3000/posts',{
    method: 'POST',
    body: JSON.stringify(doc),
    headers: {'Content-Type': 'application/json'}
  });

  window.location.replace('/html/index.html');
}

form.addEventListener('submit', createPost);