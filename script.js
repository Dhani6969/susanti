/* ============================================================
   ⚙️ KONFIGURASI — GANTI BAGIAN INI SAJA
   ============================================================ */
const birthdayConfig = {
  namaPacar: "Sayang",
  namaPengirim: "Aku",
  tanggalUlangTahun: "2026-08-23T00:00:00", // format: YYYY-MM-DDTHH:MM:SS

  heroSubtitle: "Selamat bertambah usia untuk seseorang yang paling istimewa, yang selalu berhasil menghadirkan kehangatan & kebahagiaan di setiap hariku. ✨❤️",

  foto: [
    { src: "assets/foto1.jpg", caption: "Senyuman manis favoritku yang selalu bikin hariku makin cerah ❤️", rotate: -4 },
    { src: "assets/foto2.jpg", caption: "Momen kebersamaan manis yang takkan pernah pudar dari ingatan ✨", rotate: 3 },
    { src: "assets/foto3.jpg", caption: "Setiap sudut tawamu selalu jadi alasan bahagiaku 😊🌸", rotate: -2 },
    { src: "assets/foto4.jpg", caption: "Langkah bersama menuju cerita-cerita indah selanjutnya 💫", rotate: 4 },
    { src: "assets/foto5.jpg", caption: "Kamu, hadiah terindah yang selalu aku syukuri setiap hari 💖", rotate: -3 }
  ],

  video: "assets/video-ultah.mp4",
  music: "assets/music.mp3",

  suratUlangTahun:
`Selamat Ulang Tahun, Sayangku ❤️✨

Hari ini adalah hari yang sangat istimewa, karena di hari ini sosok terindah yang sangat aku sayangi dilahirkan ke dunia.

Aku ingin kamu tahu betapa bersyukurnya aku bisa mengenalmu, berjalan di sisimu, dan berbagi tawa serta suka duka bersamamu. Kamu bukan cuma sekadar pasangan, tapi juga tempatku berpulang, sahabat terbaikku, dan alasan di balik senyumku setiap hari.

Di usiamu yang baru ini, aku berdoa semoga kamu selalu diberikan kesehatan, kebahagiaan yang melimpah, kedamaian di setiap langkah, dan kemudahan dalam meraih semua impian serta cita-citamu. 

Terima kasih sudah menjadi sosok yang begitu luar biasa, hangat, dan selalu mengerti aku. Semoga kita terus bisa saling menggenggam tangan dan tumbuh bersama melewati hari demi hari.`,

  suratPenutup: "Happy Birthday, Sayang! ❤️\nSemoga hari-harimu selalu dipenuhi kehangatan, cinta, dan tawa yang tak pernah habis.",

  kenangan: [
    { icon: "✨", judul: "Awal Pertemuan", tanggal: "Awal Cerita", desc: "Momen pertama saat takdir mempertemukan kita dan memulai kisah manis ini." },
    { icon: "🌸", judul: "Tawa & Canda", tanggal: "Setiap Hari", desc: "Momen-momen sederhana namun begitu berharga yang selalu menghiasi hari-hari kita." },
    { icon: "💖", judul: "Saling Melengkapi", tanggal: "Setiap Saat", desc: "Saat kita belajar saling memahami, mendukung, dan menjadi tempat berpulang satu sama lain." },
    { icon: "🌟", judul: "Impian Bersama", tanggal: "Masa Depan", desc: "Semua doa dan harapan indah yang ingin kita wujudkan bersama langkah demi langkah." },
    { icon: "🎂", judul: "Hari Ulang Tahunmu", tanggal: "23 Agustus", desc: "Merayakan hari spesial sosok paling berharga yang selalu ada di hati ini." }
  ],

  randomMessages: [
    "Aku sayang banget sama kamu! ❤️",
    "Jangan lupa senyum hari ini ya, senyumanmu manis banget 😊",
    "Kamu adalah alasan terbesar aku merasa sangat beruntung setiap hari ✨",
    "Kalau kamu baca ini, artinya kamu harus peluk aku secepatnya! 🤗💖",
    "Terima kasih sudah selalu ada dan menyinari hari-hariku 🌸",
    "Semoga hari ini dan seterusnya penuh kebahagiaan buat kamu 🍰💛",
    "Kangen kamu terus setiap saat, gak ada selesainya! 💕"
  ],

  surpriseCards: {
    secret: { icon: "💌", title: "Pesan Rahasia", text: "Tahu gak? Kamu itu selalu punya cara ajaib buat bikin hariku yang berat jadi terasa jauh lebih ringan. Tatapan dan senyumanmu selalu jadi favoritku selamanya! ❤️✨" },
    gift: { icon: "🎁", title: "Hadiah Spesial", text: "Hadiah terbaik dariku adalah komitmen, kesetiaan, dan rasa sayang yang gak akan pernah berkurang sedikit pun untukmu. 🎀💕" },
    love: { icon: "❤️", title: "Alasan Aku Sayang Kamu", text: "Karena kebaikan hatimu, kesabaranmu, ketulusanmu, dan caramu memperlakukanku dengan begitu hangat. Kamu perfection buat aku! 💗" },
    memories: { icon: "📸", title: "Kenangan Indah", text: "Setiap detik yang kita lewati bersama adalah kenangan berharga yang tersimpan rapi di dalam hatiku. Terima kasih sudah mengukir cerita indah ini!" },
    wish: { icon: "🎂", title: "Harapan Spesial", text: "Semoga di tahun ini semua impianmu menjadi kenyataan, hatimu selalu tenang, dan kita bisa terus melangkah bersama selamanya. Selamat ulang tahun! 🎉✨" }
  }
};

/* ============================================================
   STATE
   ============================================================ */
const state = { musicPlaying: false, gameRunning: false, gameScore: 0, gameTimer: null };

/* ============================================================
   HELPERS
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function spawnFloatingHeart(x, y){
  const emojis = ["❤️","💗","💕","✨","💖"];
  const el = document.createElement("span");
  el.className = "spawn-heart";
  el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
  el.style.left = x + "px";
  el.style.top = y + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

function heartsBurstFromButton(evt, count = 10){
  const rect = evt.target.getBoundingClientRect();
  for(let i=0;i<count;i++){
    setTimeout(() => {
      spawnFloatingHeart(
        rect.left + rect.width/2 + (Math.random()*80-40),
        rect.top + (Math.random()*20-10)
      );
    }, i*60);
  }
}

/* ============================================================
   AMBIENT BACKGROUND DECORATION
   ============================================================ */
function buildAmbientDeco(){
  const wrap = $("#ambientDeco");
  const icons = ["🎈","✨","💗","🌸","⭐","🎀"];
  for(let i=0;i<14;i++){
    const el = document.createElement("span");
    el.textContent = icons[Math.floor(Math.random()*icons.length)];
    el.style.position = "absolute";
    el.style.left = Math.random()*100 + "vw";
    el.style.top = Math.random()*100 + "vh";
    el.style.fontSize = (1 + Math.random()*1.4) + "rem";
    el.style.opacity = 0.15 + Math.random()*0.18;
    el.style.animation = `floatUpDown ${5+Math.random()*5}s ease-in-out infinite`;
    el.style.animationDelay = (Math.random()*4) + "s";
    wrap.appendChild(el);
  }
}

/* ============================================================
   CONFETTI CANVAS
   ============================================================ */
const canvas = $("#confettiCanvas");
const ctx = canvas.getContext("2d");
let confettiPieces = [];
let confettiRunning = false;

function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function launchConfetti(duration = 2600){
  const colors = ["#FF6FA0","#E94F87","#C79CF0","#FFD873","#FFFFFF"];
  const count = 140;
  confettiPieces = Array.from({length: count}, () => ({
    x: Math.random()*canvas.width,
    y: -20 - Math.random()*canvas.height*0.5,
    w: 6 + Math.random()*6,
    h: 8 + Math.random()*8,
    color: colors[Math.floor(Math.random()*colors.length)],
    speed: 2 + Math.random()*3,
    drift: (Math.random()-0.5)*2,
    rot: Math.random()*360,
    rotSpeed: (Math.random()-0.5)*10,
    shape: Math.random() > 0.5 ? "rect" : "circle"
  }));
  confettiRunning = true;
  const endAt = Date.now() + duration;

  function frame(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confettiPieces.forEach(p => {
      p.y += p.speed;
      p.x += p.drift;
      p.rot += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI/180);
      ctx.fillStyle = p.color;
      if(p.shape === "rect"){
        ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      } else {
        ctx.beginPath();
        ctx.arc(0,0,p.w/2,0,Math.PI*2);
        ctx.fill();
      }
      ctx.restore();
    });
    if(Date.now() < endAt){
      requestAnimationFrame(frame);
    } else {
      confettiRunning = false;
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }
  }
  requestAnimationFrame(frame);
}

/* ============================================================
   OPENING → MAIN EXPERIENCE
   ============================================================ */
$("#btnOpenGift").addEventListener("click", () => {
  $("#screen-opening").style.opacity = "0";
  $("#screen-opening").style.pointerEvents = "none";
  setTimeout(() => {
    $("#screen-opening").classList.add("hidden");
    $("#mainExperience").classList.add("show");
    launchConfetti(3000);
    startMusic();
    typeHeroText();
  }, 500);
});
$("#screen-opening").style.transition = "opacity .5s ease";

/* ============================================================
   HERO TYPING ANIMATION
   ============================================================ */
function typeHeroText(){
  const eyebrow = "To my beloved on their birthday ✨";
  const title = `Happy Birthday, ${birthdayConfig.namaPacar}! 🎂❤️`;
  const sub = birthdayConfig.heroSubtitle;

  $("#heroEyebrow").textContent = eyebrow;
  $("#heroSubtitle").textContent = "";

  const titleEl = $("#heroTitle");
  titleEl.textContent = "";
  let i = 0;
  function typeChar(){
    if(i <= title.length){
      titleEl.textContent = title.slice(0, i);
      i++;
      setTimeout(typeChar, 45);
    } else {
      fadeInSubtitle(sub);
    }
  }
  typeChar();
}
function fadeInSubtitle(text){
  const el = $("#heroSubtitle");
  el.textContent = text;
  el.style.opacity = 0;
  el.style.transition = "opacity 1.2s ease";
  requestAnimationFrame(() => { el.style.opacity = 1; });
}

$("#btnScrollNext").addEventListener("click", () => {
  $("#section-countdown").scrollIntoView({ behavior: "smooth" });
});

/* ============================================================
   MUSIC
   ============================================================ */
const bgMusic = $("#bgMusic");
bgMusic.volume = 0.5;

function startMusic(){
  bgMusic.play().then(() => {
    state.musicPlaying = true;
    $("#btnMusic").classList.remove("muted");
  }).catch(() => {
    // autoplay blocked — wait for explicit toggle or user gesture
    state.musicPlaying = false;
    $("#btnMusic").classList.add("muted");
  });
}

// Enable music playback on any user gesture if autoplay was blocked
function setupAutoPlayOnInteraction() {
  const playHandler = () => {
    if (!state.musicPlaying && bgMusic.paused) {
      bgMusic.play().then(() => {
        state.musicPlaying = true;
        $("#btnMusic").classList.remove("muted");
      }).catch(() => {});
    }
  };
  document.addEventListener("click", playHandler, { once: false });
  document.addEventListener("touchstart", playHandler, { once: false });
}

$("#btnMusic").addEventListener("click", (e) => {
  e.stopPropagation(); // prevent document click from re-toggling
  if(state.musicPlaying){
    bgMusic.pause();
    state.musicPlaying = false;
    $("#btnMusic").classList.add("muted");
  } else {
    bgMusic.play().then(() => {
      state.musicPlaying = true;
      $("#btnMusic").classList.remove("muted");
    }).catch(()=>{});
  }
});

/* ============================================================
   COUNTDOWN
   ============================================================ */
function updateCountdown(){
  const target = new Date(birthdayConfig.tanggalUlangTahun).getTime();
  const now = Date.now();
  const diff = target - now;

  if(diff <= 0){
    $("#countdownWrap").classList.add("hidden");
    $("#countdownDone").classList.remove("hidden");
    launchConfetti(2000);
    clearInterval(countdownInterval);
    return;
  }
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  $("#cdDays").textContent = String(d).padStart(2,"0");
  $("#cdHours").textContent = String(h).padStart(2,"0");
  $("#cdMinutes").textContent = String(m).padStart(2,"0");
  $("#cdSeconds").textContent = String(s).padStart(2,"0");
}
let countdownInterval;
function startCountdown(){
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

/* ============================================================
   GALLERY
   ============================================================ */
function buildGallery(){
  const grid = $("#galleryGrid");
  grid.innerHTML = "";
  birthdayConfig.foto.forEach((f, idx) => {
    const card = document.createElement("div");
    card.className = "polaroid reveal";
    card.style.setProperty("--rot", (f.rotate || (idx%2===0?-3:3)) + "deg");
    card.innerHTML = `
      <div class="tape"></div>
      <div class="photo-box">
        <img src="${f.src}" alt="${f.caption || 'foto kenangan'}"
             onerror="this.parentElement.innerHTML='📷'">
      </div>
      <p class="caption">${f.caption || ""}</p>
    `;
    card.addEventListener("click", () => openLightbox(f.src));
    grid.appendChild(card);
  });
}
function openLightbox(src){
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `<span class="lightbox-close">✕</span><img src="${src}" alt="foto">`;
  overlay.addEventListener("click", () => overlay.remove());
  document.body.appendChild(overlay);
}

/* ============================================================
   TIMELINE
   ============================================================ */
function buildTimeline(){
  const wrap = $("#timelineWrap");
  wrap.innerHTML = "";
  birthdayConfig.kenangan.forEach(item => {
    const el = document.createElement("div");
    el.className = "timeline-item reveal";
    el.setAttribute("data-icon", item.icon);
    el.innerHTML = `
      <h3>${item.judul}</h3>
      <div class="tl-date">${item.tanggal}</div>
      <p>${item.desc}</p>
    `;
    wrap.appendChild(el);
  });
}

/* ============================================================
   VIDEO SOURCE FROM CONFIG
   ============================================================ */
function setVideoSource(){
  const video = $("#birthdayVideo");
  const source = $("#birthdayVideo source");
  source.src = birthdayConfig.video;
  video.load();

  let wasPlayingBeforeVideo = false;
  video.addEventListener("play", () => {
    if (state.musicPlaying) {
      wasPlayingBeforeVideo = true;
      bgMusic.pause();
      state.musicPlaying = false;
      $("#btnMusic").classList.add("muted");
    }
  });

  video.addEventListener("pause", () => {
    if (wasPlayingBeforeVideo) {
      bgMusic.play().then(() => {
        state.musicPlaying = true;
        $("#btnMusic").classList.remove("muted");
      }).catch(()=>{});
      wasPlayingBeforeVideo = false;
    }
  });

  video.addEventListener("ended", () => {
    if (wasPlayingBeforeVideo) {
      bgMusic.play().then(() => {
        state.musicPlaying = true;
        $("#btnMusic").classList.remove("muted");
      }).catch(()=>{});
      wasPlayingBeforeVideo = false;
    }
  });
}

/* ============================================================
   LOVE LETTER
   ============================================================ */
function setupLetter(){
  $("#letterText").textContent = birthdayConfig.suratUlangTahun;
  $("#letterSignoff").textContent = birthdayConfig.suratPenutup;

  $("#letterEnvelope").addEventListener("click", function(){
    this.classList.add("opened");
    setTimeout(() => {
      $("#letterPaper").classList.remove("hidden");
      $("#letterPaper").scrollIntoView({ behavior:"smooth", block:"center" });
      revealLetterParagraphs();
    }, 550);
  });
}
function revealLetterParagraphs(){
  const el = $("#letterText");
  el.style.opacity = 0;
  el.style.transition = "opacity 1s ease";
  requestAnimationFrame(() => { el.style.opacity = 1; });
}

/* ============================================================
   SURPRISE CARDS → MODAL
   ============================================================ */
function setupSurpriseCards(){
  $$(".surprise-card").forEach(card => {
    card.addEventListener("click", (e) => {
      const key = card.dataset.surprise;
      const data = birthdayConfig.surpriseCards[key];
      if(!data) return;
      openModal(`
        <span class="modal-icon">${data.icon}</span>
        <h3>${data.title}</h3>
        <p>${data.text}</p>
      `);
      heartsBurstFromButton(e, 8);
    });
  });
}
function openModal(html){
  $("#modalContent").innerHTML = html;
  $("#modalOverlay").classList.remove("hidden");
}
$("#modalClose").addEventListener("click", () => $("#modalOverlay").classList.add("hidden"));
$("#modalOverlay").addEventListener("click", (e) => {
  if(e.target.id === "modalOverlay") $("#modalOverlay").classList.add("hidden");
});

/* ============================================================
   RANDOM LOVE MESSAGE
   ============================================================ */
$("#btnRandomLove").addEventListener("click", (e) => {
  const msgs = birthdayConfig.randomMessages;
  const msg = msgs[Math.floor(Math.random()*msgs.length)];
  $("#randomLoveText").textContent = msg;
  heartsBurstFromButton(e, 6);
});

/* ============================================================
   MINI GAME — CATCH THE HEARTS
   ============================================================ */
const GAME_GOAL = 10;
const GAME_DURATION = 15;

$("#btnStartGame").addEventListener("click", startGame);

function startGame(){
  if(state.gameRunning) return;
  state.gameRunning = true;
  state.gameScore = 0;
  $("#gameScore").textContent = `Skor: 0 / ${GAME_GOAL}`;
  $("#gameResult").classList.add("hidden");
  $("#gameArena").innerHTML = "";
  $("#btnStartGame").textContent = "Sedang bermain...";
  $("#btnStartGame").disabled = true;

  let timeLeft = GAME_DURATION;
  $("#gameTimer").textContent = `Waktu: ${timeLeft}s`;

  const spawnInterval = setInterval(spawnGameHeart, 550);

  state.gameTimer = setInterval(() => {
    timeLeft--;
    $("#gameTimer").textContent = `Waktu: ${timeLeft}s`;
    if(timeLeft <= 0){
      clearInterval(state.gameTimer);
      clearInterval(spawnInterval);
      endGame();
    }
  }, 1000);
}

function spawnGameHeart(){
  const arena = $("#gameArena");
  if(!arena || !state.gameRunning) return;
  const heart = document.createElement("span");
  heart.className = "game-heart";
  heart.textContent = "❤️";
  const maxX = arena.clientWidth - 36;
  const maxY = arena.clientHeight - 36;
  heart.style.left = Math.max(0, Math.random()*maxX) + "px";
  heart.style.top = Math.max(0, Math.random()*maxY) + "px";
  heart.addEventListener("click", () => {
    state.gameScore++;
    $("#gameScore").textContent = `Skor: ${state.gameScore} / ${GAME_GOAL}`;
    heart.remove();
    if(state.gameScore >= GAME_GOAL){
      clearInterval(state.gameTimer);
      endGame(true);
    }
  });
  arena.appendChild(heart);
  setTimeout(() => heart.remove(), 2600);
}

function endGame(won){
  state.gameRunning = false;
  $("#btnStartGame").textContent = "Main Lagi 🎮";
  $("#btnStartGame").disabled = false;
  $("#gameArena").innerHTML = "";
  const resultEl = $("#gameResult");
  resultEl.classList.remove("hidden");
  if(won || state.gameScore >= GAME_GOAL){
    resultEl.textContent = "Yeay! Kamu berhasil menang ❤️ Tapi sebenarnya yang menang tetap aku, karena aku punya kamu. 😆❤️";
    launchConfetti(1800);
  } else {
    resultEl.textContent = `Waktunya habis! Kamu dapat ${state.gameScore} hati. Coba lagi yuk 💗`;
  }
}

/* ============================================================
   FINAL SURPRISE
   ============================================================ */
$("#btnFinalSurprise").addEventListener("click", (e) => {
  $("#section-final").classList.add("exploded");
  $("#finalReveal").classList.remove("hidden");
  $("#btnFinalSurprise").classList.add("hidden");
  launchConfetti(3200);
  for(let i=0;i<20;i++){
    setTimeout(() => {
      spawnFloatingHeart(Math.random()*window.innerWidth, window.innerHeight - 40);
    }, i*90);
  }
});
$("#btnReplay").addEventListener("click", () => {
  $("#mainExperience").classList.remove("show");
  $("#section-final").classList.remove("exploded");
  $("#finalReveal").classList.add("hidden");
  $("#btnFinalSurprise").classList.remove("hidden");
  $("#letterEnvelope").classList.remove("opened");
  $("#letterPaper").classList.add("hidden");
  $("#screen-opening").classList.remove("hidden");
  requestAnimationFrame(() => { $("#screen-opening").style.opacity = "1"; $("#screen-opening").style.pointerEvents="auto"; });
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================================
   SCROLL REVEAL OBSERVER
   ============================================================ */
function setupScrollReveal(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.15 });
  $$(".reveal").forEach(el => observer.observe(el));
}

/* ============================================================
   INIT
   ============================================================ */
function init(){
  buildAmbientDeco();
  buildGallery();
  buildTimeline();
  setVideoSource();
  setupLetter();
  setupSurpriseCards();
  startCountdown();
  setupScrollReveal();
  setupAutoPlayOnInteraction();

  const bgMusicEl = $("#bgMusic");
  if (bgMusicEl) {
    bgMusicEl.src = birthdayConfig.music;
    bgMusicEl.load();
  }
}

document.addEventListener("DOMContentLoaded", init);
