const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImg = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

// generate between 1 - 4 width, and 1 - 4 height
function generateHTML([h, v]) {
  return `
    <div class="itm h-${h} v-${v}">
        <img src="images/${randNum(12)}.jpg" />
        <div class="itm__overlay">
            <button>View →</button>
        </div>
    </div>
    `;
}

function randNum(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  const src = e.currentTarget.querySelector("img").src;
  overlayImg.src = src;
  overlay.classList.add("open");
}

function close() {
  overlay.classList.remove("open");
}

const digits = Array.from({ length: 50 }, () => {
  return [randNum(4), randNum(4)].concat([
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
  ]);
});

const html = digits.map(generateHTML).join("");

gallery.innerHTML = html;

const items = document.querySelectorAll(".itm");
items.forEach((item) => item.addEventListener("click", handleClick));

overlayClose.addEventListener("click", close);
