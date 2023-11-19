const postContainer = document.querySelector(".post__container");
const commentArray = [];

async function getData() {
  const f = await fetch("https://jsonplaceholder.typicode.com/comments"),
    data = await f.json(),
    commentsQuantity = 100,
    commentsToAdd = data.slice(0, commentsQuantity);

  commentArray.push(...commentsToAdd);
}

function generateColor() {
  const a = Math.random() * 256,
    b = Math.random() * 256,
    c = Math.random() * 256,
    color = `rgb(${a}, ${b}, ${c})`;
  return color;
}

console.log(commentArray);

async function showData() {
  await getData();
  let html = ``;
  commentArray.forEach((el) => {
    const avatarColor = generateColor();
    html += `<div class="post__item">
    <div class="post__item">
          <div class="post__avatar_img-wrapper" style="background-color: ${avatarColor}">
            <p class="post__avatar_logo"><strong>${el.email[0]}${el.email[1]}</strong></p>
          </div>
          <div class="post__user">
            <span class="post__user_name">${el.email}</span>
            <h1 class="post__user_title">${el.name}</h1>
            <p class="post__user_text">
              ${el.body}
            </p>
          </div>
        </div>
    </div>`;
    postContainer.innerHTML = html;
  });
}

showData();
