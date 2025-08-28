const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

// 统一：都用 resources/ 开头（不要 ../）
const gifs = [
  "resources/cat-heart.gif",
  "resources/rusure.gif",
  "resources/3.shocked-1.gif",
  "resources/4.crying.gif",
  "resources/5.crying.gif",
  "resources/idc.gif"
];

// 预加载，加速显示
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// NO 按钮逻辑
no.addEventListener("click", () => {
  if (count == 2) {
    gif.src = "resources/rusure.gif"; // credit: Mr Fresh Side Eye Cat
    text.innerHTML = "确定吗?最爱你的人就在你眼前🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    gif.src = "resources/3.shocked-1.gif"; // credit: Peach & Goma
    text.innerHTML = "难道你是真忘完我的好了吗?🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    gif.src = "resources/4.crying.gif"; // crying cat
    text.innerHTML = "看我们一定很幸福的😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    gif.src = "resources/5.crying.gif";
    text.innerHTML = "追你的机会也不错嘛🥺😘我们这个组合也蛮配的嘛，而且那么优秀的来的追你😏";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// YES 按钮逻辑
yes.addEventListener("click", () => {
  vid.style.display = "block";
  gif.src = "resources/idc.gif"; // kiss gif
  text.innerHTML = "yayy 太美好了 果然争取到女神的机会 😘";
  yes.innerHTML = '<a href="https://www.instagram.com/danielyen_16/?hl=en">来帮你主动一下</a>';
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";

  // 9 秒后把视频隐藏
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});