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
    };
  },
  computed: {},
});
