/* ============================================
   Awan Laptop Centre — site interactions
   Edit contact details and products in CONFIG
   ============================================ */

(function () {
  "use strict";

  /* --------------------------------------------
     CONFIG — replace placeholders before going live
     -------------------------------------------- */
  const CONFIG = {
    // REPLACE WITH ACTUAL AWAN LAPTOP CENTRE PHONE NUMBER (digits only, e.g. 92XXXXXXXXXX)
    phoneNumber: "YOUR_PHONE_NUMBER",
    phoneDisplay: "YOUR PHONE NUMBER",

    // REPLACE WITH ACTUAL AWAN LAPTOP CENTRE WHATSAPP NUMBER (country code, no + or spaces)
    whatsappNumber: "923XXXXXXXXX",
    whatsappDisplay: "YOUR WHATSAPP NUMBER",

    // Replace with the exact Google Maps link for Shop # G-3, Alam Plaza
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Awan+Laptop+Centre+Shop+G-3+Alam+Plaza+DAV+College+Road+Rawalpindi",

    // Optional social URLs — leave empty until real accounts exist
    social: {
      facebook: "",
      instagram: "",
      youtube: "",
    },
  };

  /* Demo product catalog.
     Replace image URLs with files in assets/images/ when you have shop photos.
     Do not add prices or stock claims unless they are real. */
  const products = [
    {
      id: "dell-latitude-5490",
      name: "Dell Latitude 5490",
      brand: "Dell",
      category: "used-laptops",
      badge: "USED",
      condition: "Used",
      specs: ["Intel Core i5", "8GB RAM", "256GB SSD", "14-inch Display"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=80",
      description:
        "A compact business laptop suited to office work, study and everyday computing. Contact us to confirm the current configuration and availability.",
    },
    {
      id: "hp-elitebook-840-g5",
      name: "HP EliteBook 840 G5",
      brand: "HP",
      category: "used-laptops",
      badge: "USED",
      condition: "Used",
      specs: ["Intel Core i5", "8GB RAM", "256GB SSD", "14-inch Display"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
      description:
        "A professional 14-inch notebook for productivity. Ask in store or on WhatsApp to check the latest available units.",
    },
    {
      id: "lenovo-thinkpad-t480",
      name: "Lenovo ThinkPad T480",
      brand: "Lenovo",
      category: "used-laptops",
      badge: "USED",
      condition: "Used",
      specs: ["Intel Core i5", "8GB RAM", "256GB SSD", "14-inch Display"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80",
      description:
        "ThinkPad-series laptop often chosen for durability and keyboard comfort. Availability changes — please confirm with the shop.",
    },
    {
      id: "dell-latitude-7400",
      name: "Dell Latitude 7400",
      brand: "Dell",
      category: "used-laptops",
      badge: "USED",
      condition: "Used",
      specs: ["Intel Core i5", "8GB RAM", "256GB SSD", "14-inch Display"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
      description:
        "Slim business ultrabook-style laptop. Contact Awan Laptop Centre to check whether this model is currently available.",
    },
    {
      id: "hp-probook-450-g8",
      name: "HP ProBook 450 G8",
      brand: "HP",
      category: "new-laptops",
      badge: "CHECK AVAILABILITY",
      condition: "Check Availability",
      specs: ["Intel Core i5", "8GB RAM", "512GB SSD", "15.6-inch Display"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=900&q=80",
      description:
        "A 15.6-inch productivity laptop. This listing is for demonstration — confirm current availability before visiting.",
    },
    {
      id: "lenovo-ideapad-3",
      name: "Lenovo IdeaPad 3",
      brand: "Lenovo",
      category: "new-laptops",
      badge: "NEW / USED",
      condition: "New / Used",
      specs: ["Intel Core", "8GB RAM", "256GB SSD", "15.6-inch Display"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=900&q=80",
      description:
        "Everyday laptop for study and home use. New and used options may be available — please ask the shop.",
    },
    {
      id: "laptop-battery-generic",
      name: "Laptop Battery",
      brand: "Compatible",
      category: "laptop-batteries",
      badge: "BATTERY",
      condition: "Replacement",
      specs: [
        "Compatible replacement battery",
        "Model matching required",
        "Ask with laptop model",
        "Installation available",
      ],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80",
      description:
        "Replacement batteries for compatible laptop models. Bring your laptop or model number so we can check a suitable battery.",
    },
    {
      id: "laptop-charger-generic",
      name: "Laptop Charger",
      brand: "Compatible",
      category: "new-accessories",
      badge: "ACCESSORY",
      condition: "Accessory",
      specs: [
        "Compatible laptop charger",
        "Voltage matching required",
        "Ask with laptop model",
        "New accessory",
      ],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=900&q=80",
      description:
        "Compatible chargers for a range of laptop models. Confirm pin type and wattage with our team before purchase.",
    },
    {
      id: "dell-inspiron-15",
      name: "Dell Inspiron 15",
      brand: "Dell",
      category: "new-laptops",
      badge: "CHECK AVAILABILITY",
      condition: "Check Availability",
      specs: ["Intel Core", "8GB RAM", "256GB SSD", "15.6-inch Display"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?auto=format&fit=crop&w=900&q=80",
      description:
        "Demo listing for a 15-inch Dell notebook. Contact us to see what Dell models are currently in the shop.",
    },
    {
      id: "hp-15s",
      name: "HP 15s",
      brand: "HP",
      category: "new-laptops",
      badge: "CHECK AVAILABILITY",
      condition: "Check Availability",
      specs: ["Intel Core", "8GB RAM", "512GB SSD", "15.6-inch Display"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80",
      description:
        "Everyday HP notebook example. Ask Awan Laptop Centre for current HP options in Rawalpindi.",
    },
    {
      id: "used-usb-mouse",
      name: "USB Optical Mouse",
      brand: "Various",
      category: "used-accessories",
      badge: "USED",
      condition: "Used",
      specs: ["USB connection", "Optical sensor", "Budget option", "Check in store"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=80",
      description:
        "Used computer mouse example. Selection varies — visit the shop or message us for what is on hand.",
    },
    {
      id: "wireless-mouse",
      name: "Wireless Mouse",
      brand: "Various",
      category: "new-accessories",
      badge: "ACCESSORY",
      condition: "New",
      specs: ["Wireless", "USB receiver / Bluetooth varies", "New accessory", "Ask for models"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1615663245857-ac38673c0e68?auto=format&fit=crop&w=900&q=80",
      description:
        "New wireless mice to complete a laptop setup. Confirm current brands in store.",
    },
    {
      id: "laptop-bag",
      name: "Laptop Bag",
      brand: "Various",
      category: "new-accessories",
      badge: "ACCESSORY",
      condition: "New",
      specs: ["Protective carry bag", "Multiple sizes", "Ask for 14 / 15.6 inch", "New accessory"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
      description:
        "Laptop bags and sleeves. Bring your laptop size so we can suggest a suitable bag.",
    },
    {
      id: "used-keyboard",
      name: "USB Keyboard",
      brand: "Various",
      category: "used-accessories",
      badge: "USED",
      condition: "Used",
      specs: ["USB keyboard", "Desktop / laptop use", "Budget option", "Check in store"],
      price: "Ask for Price",
      availability: "Check Availability",
      featured: false,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
      description:
        "Used keyboards for desktop or external laptop use. Stock changes regularly.",
    },
  ];

  const categoryLabels = {
    "used-laptops": "Used Laptops",
    "new-laptops": "New Laptops",
    "laptop-batteries": "Laptop Batteries",
    "used-accessories": "Used Accessories",
    "new-accessories": "New Accessories",
  };

  /* --------------------------------------------
     WhatsApp helpers
     -------------------------------------------- */
  function getWhatsAppUrl(message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
  }

  function openWhatsApp(productName) {
    const message = `Hello Awan Laptop Centre, I am interested in ${productName}. Is it available?`;
    window.open(getWhatsAppUrl(message), "_blank", "noopener");
  }

  function openWhatsAppRepair() {
    const message =
      "Hello Awan Laptop Centre, I need help with laptop repair. Please contact me.";
    window.open(getWhatsAppUrl(message), "_blank", "noopener");
  }

  function openWhatsAppGeneral() {
    const message =
      "Hello Awan Laptop Centre, I would like to know more about your laptops and services.";
    window.open(getWhatsAppUrl(message), "_blank", "noopener");
  }

  window.ALC = {
    products,
    CONFIG,
    openWhatsApp,
    openWhatsAppRepair,
    openWhatsAppGeneral,
    getWhatsAppUrl,
  };

  /* --------------------------------------------
     Navbar: solid on scroll
     -------------------------------------------- */
  function initNavbar() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* --------------------------------------------
     Mobile navigation
     -------------------------------------------- */
  function initMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const panel = document.querySelector(".mobile-nav");
    const backdrop = document.querySelector(".nav-backdrop");
    if (!toggle || !panel) return;

    const close = () => {
      toggle.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      if (backdrop) backdrop.classList.remove("is-open");
    };

    const open = () => {
      toggle.setAttribute("aria-expanded", "true");
      panel.classList.add("is-open");
      document.body.classList.add("nav-open");
      if (backdrop) backdrop.classList.add("is-open");
    };

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      expanded ? close() : open();
    });

    if (backdrop) backdrop.addEventListener("click", close);

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  /* --------------------------------------------
     Scroll reveal
     -------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* --------------------------------------------
     Product cards & modal
     -------------------------------------------- */
  function productCardHTML(product) {
    const specs = product.specs
      .map((spec) => `<li>${escapeHTML(spec)}</li>`)
      .join("");

    return `
      <article class="product-card" data-product-id="${product.id}">
        <div class="product-card__media">
          <!-- Replace this demo image with actual Awan Laptop Centre product photo -->
          <img src="${product.image}" alt="${escapeHTML(product.name)}" loading="lazy" width="640" height="400">
          <span class="product-badge">${escapeHTML(product.badge)}</span>
        </div>
        <div class="product-card__body">
          <p class="product-card__brand">${escapeHTML(product.brand)}</p>
          <h3 class="product-card__title">${escapeHTML(product.name)}</h3>
          <ul class="product-card__specs">${specs}</ul>
          <div class="product-card__meta">
            <span class="availability">${escapeHTML(product.availability)}</span>
            <span class="price-tag">${escapeHTML(product.price)}</span>
          </div>
          <div class="product-card__actions">
            <button type="button" class="btn btn--whatsapp btn--block" data-whatsapp-product="${escapeHTML(product.name)}">
              Ask on WhatsApp
            </button>
            <button type="button" class="btn btn--ghost btn--block" data-open-product="${product.id}">
              View Details
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderProductGrid(target, list) {
    if (!target) return;
    if (!list.length) {
      target.innerHTML = `
        <div class="empty-state">
          <p>No products found. Try another search or contact us for current availability.</p>
        </div>`;
      return;
    }
    target.innerHTML = list.map(productCardHTML).join("");
  }

  function initFeaturedProducts() {
    const grid = document.querySelector("[data-featured-grid]");
    if (!grid) return;
    renderProductGrid(
      grid,
      products.filter((item) => item.featured)
    );
  }

  function initCatalog() {
    const grid = document.querySelector("[data-product-grid]");
    if (!grid) return;

    const search = document.querySelector("[data-product-search]");
    const filters = document.querySelectorAll("[data-filter]");
    const count = document.querySelector("[data-result-count]");

    const params = new URLSearchParams(window.location.search);
    let activeCategory = params.get("category") || "all";
    let query = "";

    const apply = () => {
      const filtered = products.filter((item) => {
        const matchesCategory =
          activeCategory === "all" || item.category === activeCategory;
        const haystack = [
          item.name,
          item.brand,
          item.badge,
          item.condition,
          categoryLabels[item.category],
          ...item.specs,
        ]
          .join(" ")
          .toLowerCase();
        const matchesQuery = !query || haystack.includes(query);
        return matchesCategory && matchesQuery;
      });

      renderProductGrid(grid, filtered);
      if (count) {
        count.textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;
      }
    };

    filters.forEach((btn) => {
      if (btn.dataset.filter === activeCategory) {
        btn.classList.add("is-active");
        btn.setAttribute("aria-pressed", "true");
      } else {
        btn.classList.remove("is-active");
        btn.setAttribute("aria-pressed", "false");
      }

      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.filter;
        filters.forEach((other) => {
          const on = other === btn;
          other.classList.toggle("is-active", on);
          other.setAttribute("aria-pressed", on ? "true" : "false");
        });
        apply();
      });
    });

    if (search) {
      search.addEventListener("input", () => {
        query = search.value.trim().toLowerCase();
        apply();
      });
    }

    apply();
  }

  function initModal() {
    const modal = document.querySelector(".product-modal");
    if (!modal) return;
    const dialog = modal.querySelector(".product-modal__dialog");
    const closeEls = modal.querySelectorAll("[data-close-modal]");

    const close = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    };

    const open = (product) => {
      modal.querySelector("[data-modal-image]").src = product.image;
      modal.querySelector("[data-modal-image]").alt = product.name;
      modal.querySelector("[data-modal-name]").textContent = product.name;
      modal.querySelector("[data-modal-category]").textContent =
        categoryLabels[product.category] || product.category;
      modal.querySelector("[data-modal-availability]").textContent =
        product.availability;
      modal.querySelector("[data-modal-price]").textContent = product.price;
      modal.querySelector("[data-modal-description]").textContent =
        product.description;
      modal.querySelector("[data-modal-specs]").innerHTML = product.specs
        .map((spec) => `<li>${escapeHTML(spec)}</li>`)
        .join("");
      const wa = modal.querySelector("[data-modal-whatsapp]");
      wa.onclick = () => openWhatsApp(product.name);

      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      const closeBtn = modal.querySelector(".product-modal__close");
      if (closeBtn) closeBtn.focus();
    };

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-open-product]");
      if (!trigger) return;
      const product = products.find((item) => item.id === trigger.dataset.openProduct);
      if (product) open(product);
    });

    closeEls.forEach((el) => el.addEventListener("click", close));

    modal.addEventListener("click", (event) => {
      if (event.target === modal) close();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) close();
    });

    if (dialog) {
      dialog.addEventListener("click", (event) => event.stopPropagation());
    }
  }

  /* --------------------------------------------
     Bind WhatsApp / phone / maps
     -------------------------------------------- */
  function initContactBindings() {
    document.querySelectorAll("[data-whatsapp]").forEach((el) => {
      el.addEventListener("click", (event) => {
        event.preventDefault();
        const intent = el.dataset.whatsapp;
        if (intent === "repair") openWhatsAppRepair();
        else if (intent === "product" && el.dataset.productName) {
          openWhatsApp(el.dataset.productName);
        } else {
          openWhatsAppGeneral();
        }
      });
    });

    document.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-whatsapp-product]");
      if (!btn) return;
      openWhatsApp(btn.dataset.whatsappProduct);
    });

    document.querySelectorAll("[data-phone-href]").forEach((el) => {
      if (CONFIG.phoneNumber !== "YOUR_PHONE_NUMBER") {
        el.href = `tel:${CONFIG.phoneNumber}`;
      }
    });

    document.querySelectorAll("[data-phone-text]").forEach((el) => {
      el.textContent = CONFIG.phoneDisplay;
    });

    document.querySelectorAll("[data-whatsapp-text]").forEach((el) => {
      el.textContent = CONFIG.whatsappDisplay;
    });

    document.querySelectorAll("[data-maps-href]").forEach((el) => {
      el.href = CONFIG.mapsUrl;
    });

    document.querySelectorAll("[data-social]").forEach((el) => {
      const key = el.dataset.social;
      const url = CONFIG.social[key];
      if (!url) {
        el.setAttribute("aria-disabled", "true");
        el.href = "#";
        el.addEventListener("click", (event) => event.preventDefault());
      } else {
        el.href = url;
      }
    });
  }

  /* --------------------------------------------
     Contact form (client-side only)
     -------------------------------------------- */
  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    const success = document.querySelector("[data-form-success]");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.querySelector("#fullName");
      const phone = form.querySelector("#phone");
      const topic = form.querySelector("#topic");
      const message = form.querySelector("#message");

      clearErrors(form);

      let valid = true;
      if (!name.value.trim()) {
        showError(name, "Please enter your name.");
        valid = false;
      }
      if (!isValidPhone(phone.value)) {
        showError(phone, "Please enter a valid phone number.");
        valid = false;
      }
      if (!message.value.trim()) {
        showError(message, "Please enter your message.");
        valid = false;
      }

      if (!valid) return;

      form.hidden = true;
      if (success) {
        success.hidden = false;
        success.focus();
      }

      const composed = `Hello Awan Laptop Centre, my name is ${name.value.trim()}. Phone: ${phone.value.trim()}. Topic: ${topic.value}. Message: ${message.value.trim()}`;
      const waBtn = document.querySelector("[data-form-whatsapp]");
      if (waBtn) {
        waBtn.onclick = () => window.open(getWhatsAppUrl(composed), "_blank", "noopener");
      }
    });
  }

  function isValidPhone(value) {
    const digits = value.replace(/[^\d]/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }

  function showError(input, text) {
    const wrap = input.closest(".form-field");
    if (!wrap) return;
    wrap.classList.add("has-error");
    const err = wrap.querySelector(".field-error");
    if (err) err.textContent = text;
    input.setAttribute("aria-invalid", "true");
  }

  function clearErrors(form) {
    form.querySelectorAll(".form-field").forEach((wrap) => {
      wrap.classList.remove("has-error");
      const err = wrap.querySelector(".field-error");
      if (err) err.textContent = "";
    });
    form.querySelectorAll("[aria-invalid]").forEach((el) => {
      el.removeAttribute("aria-invalid");
    });
  }

  /* --------------------------------------------
     Back to top
     -------------------------------------------- */
  function initBackToTop() {
    const btn = document.querySelector(".back-to-top");
    if (!btn) return;

    const onScroll = () => {
      btn.classList.toggle("is-visible", window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* --------------------------------------------
     Accessories carousel drag (optional)
     -------------------------------------------- */
  function initCarousel() {
    const scroller = document.querySelector("[data-h-scroll]");
    if (!scroller) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    scroller.addEventListener("pointerdown", (event) => {
      isDown = true;
      startX = event.pageX - scroller.offsetLeft;
      scrollLeft = scroller.scrollLeft;
      scroller.classList.add("is-dragging");
    });
    window.addEventListener("pointerup", () => {
      isDown = false;
      scroller.classList.remove("is-dragging");
    });
    scroller.addEventListener("pointermove", (event) => {
      if (!isDown) return;
      event.preventDefault();
      const x = event.pageX - scroller.offsetLeft;
      scroller.scrollLeft = scrollLeft - (x - startX);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initMobileNav();
    initReveal();
    initFeaturedProducts();
    initCatalog();
    initModal();
    initContactBindings();
    initContactForm();
    initBackToTop();
    initCarousel();
  });
})();
