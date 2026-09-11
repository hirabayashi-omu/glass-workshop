/**
 * 熱と物質のデザイン工房 ― ガラス細工 Web展示ギャラリー
 * Motif: 扇屋 (https://www.nasu-ougiya.com/)
 * JavaScript Controller
 */

// Artwork Data (Embedded for seamless offline and file:// execution)
const ARTWORK_DATA = [
  {
    id: 1,
    brand: "MELTICA",
    title: "ちいさき球体",
    subtitle: "なんかちいさくて丸いやつ",
    theme: "平和",
    category: "abstract",
    categoryLabel: "抽象・造形",
    comment: "360度どの角度からも均整のとれた美しい球形を目指し、丹念に成形しました。青と白の色彩境界をじっくりと加熱して滑らかに融和させ、ガラスならではの柔らかな透明感と調和を際立たせています。",
    chars: 92,
    image: "assets/images/artworks/artwork_1.jpg",
    featured: true
  },
  {
    id: 2,
    brand: "Glasushi（ガラスシ）",
    title: "特上握りコース",
    subtitle: "日本の伝統食文化",
    theme: "和食",
    category: "figurative",
    categoryLabel: "具象・食文化",
    comment: "錐を用いた細やかな凹凸加工でシャリの粒感を表現しました。重力と引き延ばしの技法でネギトロの立体感を出し、繊細な色調配合でイカやガリの質感を再現。日本の伝統食文化を硝子に宿した意欲作です。",
    chars: 95,
    image: "assets/images/artworks/artwork_2.jpg",
    featured: true
  },
  {
    id: 3,
    brand: "喫茶なかもず",
    title: "ふわふわたまごのオムライス",
    subtitle: "洋食プレートの情緒",
    theme: "洋食",
    category: "figurative",
    categoryLabel: "具象・食文化",
    comment: "煤や黒ずみを徹底して抑える火炎調整により、ふんわりとした卵の質感を表現しました。鮮やかな朱赤のガラスで流麗なケチャップを描き、葉を象った器の上に盛り付けることで喫茶の情緒を演出しています。",
    chars: 95,
    image: "assets/images/artworks/artwork_3.jpg",
    featured: true
  },
  {
    id: 4,
    brand: "繩文珠寶",
    title: "逗號形珠子（勾玉）",
    subtitle: "古代の連環美",
    theme: "項鍊・歴史",
    category: "accessory",
    categoryLabel: "身飾・装飾",
    comment: "古代の装飾美である勾玉をテーマに、長時間の試行錯誤を重ねて連ねました。一粒ごとに異なる表情や色彩の揺らぎを持たせつつ、全体として調和する連環の美を追求し、悠久の歴史情緒を表現しています。",
    chars: 94,
    image: "assets/images/artworks/artwork_4.jpg",
    featured: false
  },
  {
    id: 5,
    brand: "Solid",
    title: "lustrous",
    subtitle: "光を透かす星河の輝き",
    theme: "星河・光学",
    category: "abstract",
    categoryLabel: "抽象・造形",
    comment: "色相環上で絶妙な距離にある色彩を融和させ、奥深い星河のきらめきを封じ込めました。背後から光が透過した瞬間に真の美しさが立ち現れるよう計算された構造で、幻想的な輝きを放ちます。",
    chars: 88,
    image: "assets/images/artworks/artwork_5.jpg",
    featured: false
  },
  {
    id: 6,
    brand: "silica",
    title: "海影（うみかげ）",
    subtitle: "水深に揺らめく光彩",
    theme: "海の光",
    category: "abstract",
    categoryLabel: "抽象・造形",
    comment: "深みのある藍色と透き通る無色ガラス、そこに差す一条の黄色を重ね合わせ、揺らめく海中の情景を表現しました。ガラス特有の重層的な屈折と陰影が、神秘的な水中の奥行きを鮮やかに演出します。",
    chars: 92,
    image: "assets/images/artworks/artwork_6.jpg",
    featured: true
  },
  {
    id: 7,
    brand: "ジュエルフィッシュ",
    title: "金魚",
    subtitle: "泳ぐ生命のたおやかさ",
    theme: "海の生物",
    category: "figurative",
    categoryLabel: "具象・生物",
    comment: "水中をたおやかに泳ぐ金魚の生命感を、繊細なガラスの曲線美で表現しました。特に尾びれや胸びれの柔らかな広がりと薄さにこだわり、光を孕んで生き生きと泳ぎ出すような立体造形に仕上げています。",
    chars: 93,
    image: "assets/images/artworks/artwork_7.jpg",
    featured: false
  },
  {
    id: 8,
    brand: "MelGlass",
    title: "空の雫",
    subtitle: "蒼天を閉じ込めた耳飾り",
    theme: "夏・天空",
    category: "accessory",
    categoryLabel: "身飾・装飾",
    comment: "澄み渡る天空を凝縮したような青の透明感に、華やかなゴールド金具を組み合わせた耳飾りです。無駄を削ぎ落とした洗練のフォルムが光を捉え、日常から特別な装いまで涼やかに寄り添います。",
    chars: 90,
    image: "assets/images/artworks/artwork_8.jpg",
    featured: true
  },
  {
    id: 9,
    brand: "crystasea",
    title: "砂浜の青",
    subtitle: "渚の記憶と螺旋の造形",
    theme: "砂浜・波",
    category: "figurative",
    categoryLabel: "具象・自然",
    comment: "渚に佇む巻貝の優美な螺旋構造に沿って、白と青の繊細なグラデーションを展開しました。波打ち際の記憶を呼び起こすような滑らかな色彩の移ろいと、自然の造形美を硝子の中に結晶化させています。",
    chars: 92,
    image: "assets/images/artworks/artwork_9.jpg",
    featured: false
  },
  {
    id: 10,
    brand: "Diglass",
    title: "土から飛び出したディグダ",
    subtitle: "大地と遊ぶ愛らしき造形",
    theme: "大地の造形",
    category: "figurative",
    categoryLabel: "具象・キャラクター",
    comment: "大地からひょっこりと顔を覗かせる愛らしい佇まいを、温かみのある丸みと緻密な配置で表現しました。ミニマルな造形の中に的確なバランスで表情を宿し、思わず笑みがこぼれる温もりを放ちます。",
    chars: 92,
    image: "assets/images/artworks/artwork_10.jpg",
    featured: false
  },
  {
    id: 11,
    brand: "TerraGlass",
    title: "地球の息吹",
    subtitle: "微細な気泡が語る惑星の詩",
    theme: "海と惑星",
    category: "abstract",
    categoryLabel: "抽象・造形",
    comment: "碧き地球を想わせる深い青と緑の層の中に、偶然生まれた微細な気泡を内包させました。光を受けて水底のようにきらめくその気泡が、生命の息吹と悠久の惑星の物語を静かに語りかけています。",
    chars: 91,
    image: "assets/images/artworks/artwork_11.jpg",
    featured: true
  }
];

// Scenery Data
const SCENERY_DATA = [
  { id: 1, title: "火炎加工とガラス管の基本操作", image: "assets/images/scenery/scenery_1.jpg" },
  { id: 2, title: "ガラス管の均等加熱と引き伸ばし技法", image: "assets/images/scenery/scenery_2.jpg" },
  { id: 3, title: "熱と重力が織りなす直角成形工程", image: "assets/images/scenery/scenery_3.jpg" },
  { id: 4, title: "トンボ玉の成形と徐冷工程", image: "assets/images/scenery/scenery_4.jpg" },
  { id: 5, title: "微細な気泡と色彩の調合実験", image: "assets/images/scenery/scenery_5.jpg" },
  { id: 6, title: "安全ガイダンス風景（安全事項の徹底）", image: "assets/images/scenery/scenery_6.jpeg" }
];

/* ==========================================================================
   Like / Heart System (LocalStorage Persistence & Sparkle Animation)
   ========================================================================== */
const LikeManager = {
  STORAGE_KEY_LIKES: "glass_workshop_likes_v5",
  STORAGE_KEY_USER: "glass_workshop_user_liked_v5",

  // Counter Reset: All items initialized to 0
  defaultLikes: {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0
  },

  getLikesData() {
    try {
      // Clear legacy storage keys if present
      ["glass_workshop_likes", "glass_workshop_likes_v2", "glass_workshop_likes_v3", "glass_workshop_likes_v4"].forEach(k => {
        localStorage.removeItem(k);
      });
      ["glass_workshop_user_liked", "glass_workshop_user_liked_v2", "glass_workshop_user_liked_v3", "glass_workshop_user_liked_v4"].forEach(k => {
        localStorage.removeItem(k);
      });

      const saved = localStorage.getItem(this.STORAGE_KEY_LIKES);
      return saved ? JSON.parse(saved) : { ...this.defaultLikes };
    } catch (e) {
      return { ...this.defaultLikes };
    }
  },

  getUserLikes() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY_USER);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  },

  getLikes(id) {
    const data = this.getLikesData();
    return data[id] !== undefined ? data[id] : (this.defaultLikes[id] || 0);
  },

  getTotalLikes() {
    const data = this.getLikesData();
    return Object.values(data).reduce((acc, curr) => acc + Number(curr || 0), 0);
  },

  isLiked(id) {
    const userLikes = this.getUserLikes();
    return userLikes.includes(id);
  },

  toggleLike(id, triggerElement = null) {
    const likesData = this.getLikesData();
    let userLikes = this.getUserLikes();
    let isNowLiked = false;

    if (userLikes.includes(id)) {
      userLikes = userLikes.filter(itemId => itemId !== id);
      likesData[id] = Math.max(0, (likesData[id] || 1) - 1);
      isNowLiked = false;
    } else {
      userLikes.push(id);
      likesData[id] = (likesData[id] || 0) + 1;
      isNowLiked = true;
      if (triggerElement) {
        this.createParticles(triggerElement);
      }
    }

    try {
      localStorage.setItem(this.STORAGE_KEY_LIKES, JSON.stringify(likesData));
      localStorage.setItem(this.STORAGE_KEY_USER, JSON.stringify(userLikes));
    } catch (e) {
      console.warn("localStorage not accessible", e);
    }

    this.updateAllUI(id);
    return isNowLiked;
  },

  createParticles(element) {
    const rect = element.getBoundingClientRect();
    const count = 9;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "like-particle";
      const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5);
      const distance = 30 + Math.random() * 35;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      p.style.setProperty("--dx", `${dx}px`);
      p.style.setProperty("--dy", `${dy}px`);
      p.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
      p.style.top = `${rect.top + rect.height / 2 + window.scrollY}px`;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 800);
    }
  },

  updateAllUI(id = null) {
    // If id provided, update specific artwork UI
    if (id !== null) {
      const count = this.getLikes(id);
      const isLiked = this.isLiked(id);

      // Update gallery and carousel like buttons across ALL slides (including cloned ones)
      document.querySelectorAll(`.card-like-btn[data-id="${id}"]`).forEach(btn => {
        btn.classList.toggle("liked", isLiked);
        const countSpan = btn.querySelector(".card-like-count");
        if (countSpan) countSpan.textContent = count;
        const labelSpan = btn.querySelector(".card-like-label");
        if (labelSpan) labelSpan.textContent = isLiked ? "感銘済" : "感銘";
      });

      // Update modal if currently opened
      if (typeof currentModalId !== "undefined" && currentModalId === id) {
        const modalBtn = document.querySelector(".modal-like-btn");
        if (modalBtn) {
          modalBtn.classList.toggle("liked", isLiked);
          const modalCount = modalBtn.querySelector(".modal-like-count");
          if (modalCount) modalCount.textContent = count;
          const modalLabel = modalBtn.querySelector(".modal-like-label");
          if (modalLabel) modalLabel.textContent = isLiked ? "感銘を贈りました" : "作品に感銘を贈る";
        }
      }
    }

    // Always update total counters across the page
    const totalCount = this.getTotalLikes();
    document.querySelectorAll(".total-likes-counter").forEach(counterEl => {
      counterEl.textContent = totalCount;
      counterEl.classList.remove("bump");
      void counterEl.offsetWidth; // Trigger reflow for re-animating
      counterEl.classList.add("bump");
      setTimeout(() => counterEl.classList.remove("bump"), 350);
    });
  },

  initGlobalListeners() {
    // 1. Capture and stop pointer/touch events on like buttons to prevent Swiper from intercepting as slide swipe
    const stopSwiperInterception = (e) => {
      if (e.target.closest(".card-like-btn") || e.target.closest(".modal-like-btn")) {
        e.stopPropagation();
      }
    };

    ["pointerdown", "mousedown", "touchstart"].forEach(evt => {
      document.addEventListener(evt, stopSwiperInterception, { capture: true, passive: true });
    });

    // 2. Global Event Delegation for Clicks (Works seamlessly on cloned slides & dynamic grids)
    document.addEventListener("click", (e) => {
      // Check if clicked inside card-like-btn
      const cardBtn = e.target.closest(".card-like-btn");
      if (cardBtn) {
        e.preventDefault();
        e.stopPropagation();
        const id = parseInt(cardBtn.getAttribute("data-id"), 10);
        if (!isNaN(id)) {
          this.toggleLike(id, cardBtn);
        }
        return;
      }

      // Check if clicked inside modal-like-btn
      const modalBtn = e.target.closest(".modal-like-btn");
      if (modalBtn) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof currentModalId !== "undefined" && currentModalId) {
          this.toggleLike(currentModalId, modalBtn);
        }
        return;
      }

      // Check if clicked on featured card to open modal
      const featuredCard = e.target.closest(".featured-card");
      if (featuredCard && !e.target.closest(".card-like-btn")) {
        const id = parseInt(featuredCard.getAttribute("data-id"), 10);
        if (!isNaN(id)) openModal(id);
        return;
      }

      // Check if clicked on gallery item to open modal
      const galleryItem = e.target.closest(".gallery-item");
      if (galleryItem && !e.target.closest(".card-like-btn")) {
        const id = parseInt(galleryItem.getAttribute("data-id"), 10);
        if (!isNaN(id)) openModal(id);
        return;
      }
    });

    // Initial total count render
    this.updateAllUI();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  initMobileNav();
  initHeroSwiper();
  renderFeaturedSwiper();
  initFeaturedSwiper();
  renderGalleryGrid();
  renderScenerySwiper();
  initScenerySwiper();
  initModal();
  initGsapAnimations();
  
  // Initialize Global Like & Counter System
  LikeManager.initGlobalListeners();
});

/* ==========================================================================
   Header Scroll Behavior
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* ==========================================================================
   Mobile Nav Toggle
   ========================================================================== */
function initMobileNav() {
  const toggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-item a");

  if (!toggle || !navMenu) return;

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    toggle.classList.toggle("open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      toggle.classList.remove("open");
    });
  });
}

/* ==========================================================================
   Hero Swiper
   ========================================================================== */
function initHeroSwiper() {
  new Swiper(".hero-swiper", {
    loop: true,
    speed: 1600,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    }
  });
}

/* ==========================================================================
   Featured Swiper (Ougiya "お薦め" Carousel)
   ========================================================================== */
function renderFeaturedSwiper() {
  const wrapper = document.querySelector(".featured-swiper .swiper-wrapper");
  if (!wrapper) return;

  const featuredItems = ARTWORK_DATA.filter(item => item.featured);

  wrapper.innerHTML = featuredItems.map(item => `
    <div class="swiper-slide featured-card" data-id="${item.id}">
      <div class="featured-card-img-wrap">
        <button class="card-like-btn ${LikeManager.isLiked(item.id) ? 'liked' : ''}" data-id="${item.id}" aria-label="感銘を贈る">
          <svg class="like-fan-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 21L3.5 9.5C5.8 7 8.8 5.5 12 5.5C15.2 5.5 18.2 7 20.5 9.5L12 21Z" />
            <path d="M12 21L7.5 7.5" />
            <path d="M12 21L12 5.5" />
            <path d="M12 21L16.5 7.5" />
          </svg>
          <span class="card-like-label">${LikeManager.isLiked(item.id) ? '感銘済' : '感銘'}</span>
          <span class="card-like-count">${LikeManager.getLikes(item.id)}</span>
          <span class="card-like-unit">讃</span>
        </button>
        <img src="${item.image}" alt="${item.title}" class="featured-card-img" loading="lazy">
      </div>
      <div class="featured-card-body">
        <span class="featured-brand-name">${item.brand}</span>
        <h3 class="featured-card-title">${item.title}</h3>
        <p class="featured-card-comment">${item.comment}</p>
        <div class="featured-card-footer">
          <span class="theme-pill">主題: ${item.theme}</span>
          <span class="view-detail-link">
            作品詳細
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  `).join("");
}

function initFeaturedSwiper() {
  new Swiper(".featured-swiper", {
    slidesPerView: 1.15,
    spaceBetween: 24,
    speed: 800,
    loop: true,
    preventClicks: false,
    preventClicksPropagation: false,
    touchStartPreventDefault: false,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".featured-next",
      prevEl: ".featured-prev"
    },
    pagination: {
      el: ".featured-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 28
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });
}

/* ==========================================================================
   Gallery Exhibition Grid (All 11 Artworks)
   ========================================================================== */
function renderGalleryGrid() {
  const grid = document.querySelector(".gallery-grid");
  if (!grid) return;

  grid.innerHTML = ARTWORK_DATA.map(item => `
    <article class="gallery-item" data-id="${item.id}">
      <div class="gallery-img-container">
        <button class="card-like-btn ${LikeManager.isLiked(item.id) ? 'liked' : ''}" data-id="${item.id}" aria-label="感銘を贈る">
          <svg class="like-fan-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 21L3.5 9.5C5.8 7 8.8 5.5 12 5.5C15.2 5.5 18.2 7 20.5 9.5L12 21Z" />
            <path d="M12 21L7.5 7.5" />
            <path d="M12 21L12 5.5" />
            <path d="M12 21L16.5 7.5" />
          </svg>
          <span class="card-like-label">${LikeManager.isLiked(item.id) ? '感銘済' : '感銘'}</span>
          <span class="card-like-count">${LikeManager.getLikes(item.id)}</span>
          <span class="card-like-unit">讃</span>
        </button>
        <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy">
        <div class="gallery-img-overlay">
          <span class="overlay-view-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            鑑賞する
          </span>
        </div>
      </div>
      <div class="gallery-card-content">
        <div class="gallery-card-header">
          <span class="gallery-card-brand">${item.brand}</span>
          <span class="gallery-card-id">#${item.id.toString().padStart(2, "0")}</span>
        </div>
        <h3 class="gallery-card-title">${item.title}</h3>
        <p class="gallery-card-theme">${item.theme}</p>
        <p class="gallery-card-desc">${item.comment}</p>
        <div class="gallery-card-meta">
          <span class="char-count-badge">${item.chars}文字</span>
        </div>
      </div>
    </article>
  `).join("");

  // Re-trigger GSAP stagger on filter and refresh ScrollTrigger
  if (window.gsap) {
    gsap.fromTo(
      grid.querySelectorAll(".gallery-item"),
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        stagger: 0.06, 
        ease: "power2.out",
        onComplete: () => {
          if (typeof ScrollTrigger !== "undefined") {
            ScrollTrigger.refresh();
          }
        }
      }
    );
  }

  // Immediately refresh ScrollTrigger layout
  if (typeof ScrollTrigger !== "undefined") {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  }
}

/* ==========================================================================
   Scenery Swiper
   ========================================================================== */
function renderScenerySwiper() {
  const wrapper = document.querySelector(".scenery-swiper .swiper-wrapper");
  if (!wrapper) return;

  wrapper.innerHTML = SCENERY_DATA.map(item => `
    <div class="swiper-slide scenery-card">
      <img src="${item.image}" alt="${item.title}" class="scenery-card-img" loading="lazy">
      <div class="scenery-card-caption">
        <span class="scenery-num">SCENE 0${item.id}</span>
        <h3 class="scenery-card-title">${item.title}</h3>
      </div>
    </div>
  `).join("");
}

function initScenerySwiper() {
  new Swiper(".scenery-swiper", {
    slidesPerView: 1.15,
    spaceBetween: 24,
    speed: 900,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".scenery-pagination",
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        spaceBetween: 28
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });
}

/* ==========================================================================
   Artwork Detail Modal
   ========================================================================== */
let currentModalId = 1;

function initModal() {
  const modal = document.querySelector(".artwork-modal");
  const backdrop = document.querySelector(".modal-backdrop");
  const closeBtn = document.querySelector(".modal-close-btn");
  const prevBtn = document.querySelector(".modal-prev-btn");
  const nextBtn = document.querySelector(".modal-next-btn");

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  backdrop.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") navigateModal(-1);
    if (e.key === "ArrowRight") navigateModal(1);
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => navigateModal(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => navigateModal(1));
  }

  const modalLikeBtn = modal.querySelector(".modal-like-btn");
  if (modalLikeBtn) {
    modalLikeBtn.addEventListener("click", () => {
      LikeManager.toggleLike(currentModalId, modalLikeBtn);
    });
  }
}

function openModal(id) {
  currentModalId = id;
  const item = ARTWORK_DATA.find(a => a.id === id);
  if (!item) return;

  const modal = document.querySelector(".artwork-modal");
  const img = modal.querySelector(".modal-artwork-img");
  const brand = modal.querySelector(".modal-brand");
  const title = modal.querySelector(".modal-title");
  const subtitle = modal.querySelector(".modal-subtitle");
  const theme = modal.querySelector(".modal-theme-val");
  const comment = modal.querySelector(".modal-comment-text");
  const count = modal.querySelector(".modal-char-count");

  img.src = item.image;
  img.alt = item.title;
  brand.textContent = item.brand;
  title.textContent = item.title;
  subtitle.textContent = item.subtitle;
  theme.textContent = item.theme;
  comment.textContent = item.comment;
  if (count) count.textContent = `${item.chars}文字`;

  // Update modal like button state
  const isLiked = LikeManager.isLiked(id);
  const likesCount = LikeManager.getLikes(id);
  const modalLikeBtn = modal.querySelector(".modal-like-btn");
  if (modalLikeBtn) {
    modalLikeBtn.classList.toggle("liked", isLiked);
    const countSpan = modalLikeBtn.querySelector(".modal-like-count");
    if (countSpan) countSpan.textContent = likesCount;
    const labelSpan = modalLikeBtn.querySelector(".modal-like-label");
    if (labelSpan) labelSpan.textContent = isLiked ? "感銘を贈りました" : "作品に感銘を贈る";
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function navigateModal(direction) {
  const currentIndex = ARTWORK_DATA.findIndex(a => a.id === currentModalId);
  if (currentIndex === -1) return;

  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = ARTWORK_DATA.length - 1;
  if (newIndex >= ARTWORK_DATA.length) newIndex = 0;

  openModal(ARTWORK_DATA[newIndex].id);
}

/* ==========================================================================
   GSAP & ScrollTrigger Animations
   ========================================================================== */
function initGsapAnimations() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger not loaded");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Section Headers Reveal
  gsap.utils.toArray(".section-header").forEach(header => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: "top 85%",
        once: true,
        invalidateOnRefresh: true
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out"
    });
  });

  // Concept Section Parallax & Reveal
  const conceptImg = document.querySelector(".concept-main-img-wrap");
  const conceptText = document.querySelector(".concept-text-box");
  if (conceptImg && conceptText) {
    gsap.from(conceptImg, {
      scrollTrigger: {
        trigger: ".concept-section",
        start: "top 75%",
        once: true,
        invalidateOnRefresh: true
      },
      opacity: 0,
      x: -50,
      duration: 1.2,
      ease: "power3.out"
    });

    gsap.from(conceptText, {
      scrollTrigger: {
        trigger: ".concept-section",
        start: "top 75%",
        once: true,
        invalidateOnRefresh: true
      },
      opacity: 0,
      x: 50,
      duration: 1.2,
      delay: 0.2,
      ease: "power3.out"
    });
  }

  // Schedule Timeline Nodes Reveal
  gsap.utils.toArray(".timeline-step").forEach((step, i) => {
    gsap.from(step, {
      scrollTrigger: {
        trigger: step,
        start: "top 85%",
        once: true,
        invalidateOnRefresh: true
      },
      opacity: 0,
      y: 40,
      duration: 0.9,
      delay: (i % 2) * 0.15,
      ease: "power2.out"
    });
  });

  // Staff Cards Reveal
  gsap.utils.toArray(".staff-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: ".staff-grid",
        start: "top 85%",
        once: true,
        invalidateOnRefresh: true
      },
      opacity: 0,
      y: 40,
      duration: 0.9,
      delay: i * 0.18,
      ease: "power2.out"
    });
  });
}
