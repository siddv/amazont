function init() {
  const titleElement = document.getElementById('title');
  const title = titleElement.innerText
  const shoppingUrl = `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(title)}`
  titleElement.insertAdjacentHTML('afterend', `<a class="amazont_link" href="${shoppingUrl}" target="_blank" rel="noopener noreferrer">See non-Amazon buying options 🛒</a>`)
}

window.addEventListener ("load", init, false);