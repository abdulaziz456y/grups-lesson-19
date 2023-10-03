const input = document.getElementById('inp');
const box = document.querySelector('.ser');

input.addEventListener('keyup', () => {

  const e = input.value
  let url = `https://api.github.com/users?q=${e}&per_page=200`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const productList = data.map(user => {
        return {
          name: user.login,
          img: user.avatar_url,
          url: user.html_url
        };
      });
      const searchTerm = input.value.toLowerCase();
      const filteredList = productList.filter(user => {
        return user.name.toLowerCase().includes(searchTerm);
      });
      const renderedList = filteredList.map(user => {
        return `
          <div class="user">
            <img src="${user.img}" alt="">
            <h2>${user.name}</h2>
            <p>batafsil></p>
            <a href="${user.url}">
             <button>
              <span>link</span>
             </button>
            </a>
          </div>
        `;
      });
      box.innerHTML = renderedList.join('');
    });
});