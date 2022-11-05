// nav side-bar open and close

const menu = window.document.querySelector(".logo");
const menuClose = window.document.querySelector(".side-bar-close");
const sideBar = window.document.querySelector(".side-bar");
console.log(menu);
menu.addEventListener("click", function () {
  console.log("click");
  sideBar.style.transform = "translateX(0%)";
});

menuClose.addEventListener("click", function () {
  sideBar.style.transform = "translateX(-100%)";
});

// gsap 動畫
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const mousemoveTimeline = gsap.timeline({ repeat: -1 });
const scrollCover = gsap.timeline({
  scrollTrigger: {
    trigger: ".cover", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    pin: true,
    scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
});

const scrollFace = gsap.timeline({
  scrollTrigger: {
    trigger: ".home", // 決定scrolltrigger要以哪一個元素作為觸發基準點
    markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
    pin: true,
    scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
  },
});

mousemoveTimeline
  .to(".mousemove", { y: 15, duration: 1 })
  .to(".mousemove", { y: 0, duration: 1 });

scrollCover
  .to(".cover-top", { yPercent: -30 })
  .to(".pic-face", { yPercent: -70 })
  .to(".cover-mouse", { autoAlpha: 0, ease: "expo" }, "<")
  .to(".cover-right", { yPercent: 100 }, "<")
  .to(".cover-left", { yPercent: 10 }, "<")
  .to(".cover-top", { yPercent: -100 }, "<")
  .to(".cover-left", { yPercent: 100 })
  .to(".pic-face", { yPercent: -110 }, "<")
  .to(".pic-task", { opacity: 1, ease: "expo" })
  .to(".mouse", { opacity: 1, ease: "expo" }, "<");

/****json animation */

const animation = lottie.loadAnimation({
  container: document.querySelector(".animation-container"),
  path: "loading.json",
  render: "svg",
  loop: true,
  autoplay: true,
  name: "loading",
});

/*******Vue************/

const vm = new Vue({
  el: "#app",
  data() {
    return {
      showLiveSection: false,
      beans: [
        { id: 0, Checked: false },
        { id: 1, Checked: false },
        { id: 2, Checked: false },
        { id: 3, Checked: false },
        { id: 4, Checked: false },
      ],
      //countBean == 5 ||　close ==true　會把discount訊息關掉
      countBean: 0,
      close: false,
    };
  },
  methods: {
    collectBeanHandler(id) {
      this.beans.forEach((bean) => {
        if (bean.id === id) {
          bean.Checked = true;
          this.countBean += 1;
        }
      });
    },
    closeDiscount() {
      this.close = true;
    },
  },
});
