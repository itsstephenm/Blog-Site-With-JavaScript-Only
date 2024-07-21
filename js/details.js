const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete')

const renderDetails = async () => {
  const res = await fetch('http://localhost:3000/posts/' + id);
  const posts = await res.json();

  console.log(posts)
  template = `
  <h1>${posts.title}</h1>
  <p>${posts.body}</p>
  <a href="/html/index.html">Home</a>
  `
  container.innerHTML = template;
}
deleteBtn.addEventListener('click',async (e)=>{
  const res = await fetch(' http://localhost:3000/posts/'+ id,{
    method: 'DELETE'
  })
  window.location.replace('/html/index.html');
})

window.addEventListener('DOMContentLoaded', () => renderDetails());