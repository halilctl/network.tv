// Translation System
const translations = {
  tr: {
    'header.tagline': 'Genç. Dinamik. Kesintisiz.',
    'nav.features': 'Özellikler',
    'nav.pricing': 'Fiyatlar',
    'hero.kicker': 'Sınırsız Eğlence',
    'hero.headline': 'Tüm favori kanallarınız <strong>tek</strong> yerde — <br>The Network TV ile izle, keşfet, takıl!',
    'hero.description': '30000+ fazla kanal, 10000+ dizi, 5000+ spor kanalı — genç ve dinamik bir yayın deneyimi. Reklamsız planlarımız ve yüksek hızlı akış altyapımız ile kesintisiz izleme keyfi.',
    'hero.badges.support': 'Canlı Destek',
    'hero.badges.quality': 'Yüksek Kalite',
    'hero.badges.devices': 'Cihaz Desteği',
    'hero.cta.trial': 'Ücretsiz Deneme Başlat',
    'hero.cta.how': 'Nasıl Çalışır?',
    'counters.channels': 'Kanallar',
    'counters.shows': 'Diziler',
    'counters.sports': 'Spor Kanalları',
    'marquee.text': '30000+ kanal • 10000+ dizi • 5000+ spor kanalı • Genç ve dinamik arayüz • Hızlı akış • 7/24 destek',
    'plan.popular': 'Popüler Plan',
    'plan.price': '12 Aylık + 3 Ay hediye',
    'plan.discount': 'İndirimli yıllık ödeme ile daha da ucuz',
    'plan.welcome': '%20 Hoşgeldin İndirimi',
    'plan.features.1': '• 30.000+ premium kanal',
    'plan.features.2': '• Gecikmesiz spor kanalları',
    'plan.features.3': '• Tüm cihazlarla uyumlu (Android, iOS)',
    'plan.features.4': '• Sürekli güncellenen içerikler',
    'plan.features.5': '• +18 kanallar',
    'plan.features.6': '• HD & FHD & 4K Ultra HD Yayın Kalitesi',
    'plan.features.7': '• Ücretsiz Kurulum ve Destek',
    'plan.features.8': '• 7/24 Destek',
    'pricing.monthly': '1 Aylık',
    'pricing.sixmonth': '6 Aylık',
    'pricing.yearly': '12 Aylık + 3 Ay hediye',
    'pricing.buy': 'Şimdi Satın Al',
    'features.watch.title': 'Heryerden İzle',
    'features.watch.subtitle': 'Mobil, Tablet, TV',
    'features.watch.desc': 'Uygulamalarımız Android, iOS ve Smart TV\'lerde çalışır. Cihazlar arasında kaldığınız yerden devam edin.',
    'features.sports.title': 'Spor Severlere',
    'features.sports.subtitle': 'Canlı Spor & Etkinlikler',
    'features.sports.desc': '5000+\'den fazla spor kanalı ile maçları ve özel etkinlikleri yüksek kalitede izleyin.',
    'features.shows.title': 'Dizi & Film',
    'features.shows.subtitle': '10.000+ Dizi',
    'features.shows.desc': 'Güncel ve klasik diziler; kategorilere göre keşfetme, listeler oluşturma ve favorilere ekleme.',
    'footer.copyright': '© 2025 The Network TV. Tüm hakları saklıdır.',
    'footer.links': 'Gizlilik • Kullanım Koşulları • Destek'
  },
  en: {
    'header.tagline': 'Young. Dynamic. Seamless.',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'hero.kicker': 'Unlimited Entertainment',
    'hero.headline': 'All your favorite channels in <strong>one</strong> place — <br>Watch, discover, enjoy with The Network TV!',
    'hero.description': '30000+ channels, 10000+ series, 5000+ sports channels — a young and dynamic streaming experience. Ad-free plans and high-speed streaming infrastructure for uninterrupted viewing pleasure.',
    'hero.badges.support': 'Live Support',
    'hero.badges.quality': 'High Quality',
    'hero.badges.devices': 'Multi-Device',
    'hero.cta.trial': 'Start Free Trial',
    'hero.cta.how': 'How It Works?',
    'counters.channels': 'Channels',
    'counters.shows': 'Series',
    'counters.sports': 'Sports Channels',
    'marquee.text': '30000+ channels • 10000+ series • 5000+ sports channels • Young and dynamic interface • Fast streaming • 24/7 support',
    'plan.popular': 'Popular Plan',
    'plan.price': '12 Months + 3 Months Free',
    'plan.discount': 'Cheaper with annual payment discount',
    'plan.welcome': '20% Welcome Discount',
    'plan.features.1': '• 30,000+ premium channels',
    'plan.features.2': '• Zero-delay sports channels',
    'plan.features.3': '• Compatible with all devices (Android, iOS)',
    'plan.features.4': '• Continuously updated content',
    'plan.features.5': '• +18 channels',
    'plan.features.6': '• HD & FHD & 4K Ultra HD Broadcast Quality',
    'plan.features.7': '• Free Installation and Support',
    'plan.features.8': '• 24/7 Support',
    'pricing.monthly': '1 Month',
    'pricing.sixmonth': '6 Months',
    'pricing.yearly': '12 Months + 3 Months Free',
    'pricing.buy': 'Buy Now',
    'features.watch.title': 'Watch Anywhere',
    'features.watch.subtitle': 'Mobile, Tablet, TV',
    'features.watch.desc': 'Our apps work on Android, iOS and Smart TVs. Continue from where you left off across devices.',
    'features.sports.title': 'For Sports Fans',
    'features.sports.subtitle': 'Live Sports & Events',
    'features.sports.desc': 'Watch matches and special events in high quality with 5000+ sports channels.',
    'features.shows.title': 'Series & Movies',
    'features.shows.subtitle': '10,000+ Series',
    'features.shows.desc': 'Current and classic series; discover by categories, create lists and add to favorites.',
    'footer.copyright': '© 2025 The Network TV. All rights reserved.',
    'footer.links': 'Privacy • Terms of Use • Support'
  },
  de: {
    'header.tagline': 'Jung. Dynamisch. Nahtlos.',
    'nav.features': 'Funktionen',
    'nav.pricing': 'Preise',
    'hero.kicker': 'Unbegrenzte Unterhaltung',
    'hero.headline': 'Alle Ihre Lieblingskanäle an <strong>einem</strong> Ort — <br>Schauen, entdecken, genießen mit The Network TV!',
    'hero.description': '30000+ Kanäle, 10000+ Serien, 5000+ Sportkanäle — ein junges und dynamisches Streaming-Erlebnis. Werbefreie Pläne und hochgeschwindigkeits-Streaming-Infrastruktur für ununterbrochenes Sehvergnügen.',
    'hero.badges.support': 'Live-Support',
    'hero.badges.quality': 'Hohe Qualität',
    'hero.badges.devices': 'Multi-Gerät',
    'hero.cta.trial': 'Kostenlose Testversion starten',
    'hero.cta.how': 'Wie funktioniert es?',
    'counters.channels': 'Kanäle',
    'counters.shows': 'Serien',
    'counters.sports': 'Sportkanäle',
    'marquee.text': '30000+ Kanäle • 10000+ Serien • 5000+ Sportkanäle • Junges und dynamisches Interface • Schnelles Streaming • 24/7 Support',
    'plan.popular': 'Beliebter Plan',
    'plan.price': '12 Monate + 3 Monate kostenlos',
    'plan.discount': 'Günstiger mit jährlicher Zahlung',
    'plan.welcome': '20% Willkommensrabatt',
    'plan.features.1': '• 30.000+ Premium-Kanäle',
    'plan.features.2': '• Verzögerungsfreie Sportkanäle',
    'plan.features.3': '• Kompatibel mit allen Geräten (Android, iOS)',
    'plan.features.4': '• Kontinuierlich aktualisierte Inhalte',
    'plan.features.5': '• +18 Kanäle',
    'plan.features.6': '• HD & FHD & 4K Ultra HD Übertragungsqualität',
    'plan.features.7': '• Kostenlose Installation und Support',
    'plan.features.8': '• 24/7 Support',
    'pricing.monthly': '1 Monat',
    'pricing.sixmonth': '6 Monate',
    'pricing.yearly': '12 Monate + 3 Monate kostenlos',
    'pricing.buy': 'Jetzt kaufen',
    'features.watch.title': 'Überall schauen',
    'features.watch.subtitle': 'Mobil, Tablet, TV',
    'features.watch.desc': 'Unsere Apps funktionieren auf Android, iOS und Smart TVs. Setzen Sie dort fort, wo Sie aufgehört haben, über Geräte hinweg.',
    'features.sports.title': 'Für Sportfans',
    'features.sports.subtitle': 'Live-Sport & Events',
    'features.sports.desc': 'Schauen Sie sich Spiele und besondere Events in hoher Qualität mit 5000+ Sportkanälen an.',
    'features.shows.title': 'Serien & Filme',
    'features.shows.subtitle': '10.000+ Serien',
    'features.shows.desc': 'Aktuelle und klassische Serien; nach Kategorien entdecken, Listen erstellen und zu Favoriten hinzufügen.',
    'footer.copyright': '© 2025 The Network TV. Alle Rechte vorbehalten.',
    'footer.links': 'Datenschutz • Nutzungsbedingungen • Support'
  }
};

let currentLanguage = 'tr';

function translatePage(lang) {
  currentLanguage = lang;
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' && element.type === 'email') {
        element.placeholder = translations[lang][key];
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });
  
  // Update language button
  const langFlags = {
    'tr': '🇹🇷 TR',
    'en': '🇬🇧 EN', 
    'de': '🇩🇪 DE'
  };
  document.getElementById('currentLang').textContent = langFlags[lang];
  
  // Save language preference
  localStorage.setItem('selectedLanguage', lang);
}

function initLanguage() {
  // Load saved language or default to Turkish
  const savedLang = localStorage.getItem('selectedLanguage') || 'tr';
  translatePage(savedLang);
  
  // Add click handlers for language options
  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = option.getAttribute('data-lang');
      translatePage(lang);
    });
  });
}

// Loading Screen Management
window.addEventListener('load', function() {
  setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 2000);
  
  // Initialize language system
  initLanguage();
});

// Particle System
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    particlesContainer.appendChild(particle);
  }
}

// Scroll-triggered animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.feature, .price-card, .hero-left, .card');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animate-in');
    }
  });
}

// Smooth scroll helper
function scrollToAnchor(id){
  document.querySelector(id).scrollIntoView({behavior:'smooth'})
}

// Enhanced counter animation with easing
function animateCounter(id, to, duration){
  const el = document.getElementById(id);
  let start = 0;
  const startTime = performance.now();
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * to);
    
    el.innerText = current.toLocaleString('tr-TR');
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Enhanced button click effects
function addButtonEffects() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      // Ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255,255,255,0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.pointerEvents = 'none';
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Parallax scrolling effect
function handleParallax() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.floaters, .blob');
  
  parallaxElements.forEach(element => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
}

// Mobile Menu Management
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileLangBtn = document.getElementById('mobileLangBtn');
  const mobileLangDropdown = document.getElementById('mobileLangDropdown');
  
  // Toggle mobile menu
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close mobile menu when clicking overlay
  mobileOverlay.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileNav.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Close mobile menu when clicking nav links
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileNav.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Mobile language dropdown
  mobileLangBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileLangDropdown.classList.toggle('active');
  });
  
  // Close mobile language dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileLangBtn.contains(e.target) && !mobileLangDropdown.contains(e.target)) {
      mobileLangDropdown.classList.remove('active');
    }
  });
  
  // Handle mobile language selection
  mobileLangDropdown.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = option.getAttribute('data-lang');
      translatePage(lang);
      
      // Update mobile language button
      const langFlags = {
        'tr': '🇹🇷 TR',
        'en': '🇬🇧 EN', 
        'de': '🇩🇪 DE'
      };
      document.getElementById('mobileCurrentLang').textContent = langFlags[lang];
      
      mobileLangDropdown.classList.remove('active');
    });
  });
}

// Logo animation enhancements
function initLogoAnimations() {
  const logoItems = document.querySelectorAll('.logo-item');
  const logosTrack = document.querySelector('.logos-track');
  const logosContainer = document.querySelector('.logos-container');
  
  // Add staggered entrance animation
  logoItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      item.style.transition = 'all 0.6s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 50);
  });
  
  // True infinite scroll animation
  if (logosTrack && logosContainer) {
    let position = 0;
    const speed = 1; // pixels per frame
    const logoWidth = 150 + 24; // logo width + gap
    const totalWidth = logoWidth * logoItems.length;
    
    // Force hardware acceleration
    logosTrack.style.transform = 'translateZ(0)';
    logosTrack.style.backfaceVisibility = 'hidden';
    
    function animate() {
      position -= speed;
      
      // Reset position when first logo is completely out of view
      if (position <= -totalWidth) {
        position = 0;
      }
      
      logosTrack.style.transform = `translateX(${position}px) translateZ(0)`;
      requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Pause on hover
    logosContainer.addEventListener('mouseenter', () => {
      logosTrack.style.animationPlayState = 'paused';
    });
    
    logosContainer.addEventListener('mouseleave', () => {
      logosTrack.style.animationPlayState = 'running';
    });
  }
  
  // Add click effects to logos
  logoItems.forEach(item => {
    item.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('div');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(212,175,55,0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.animation = 'ripple 0.6s linear';
      ripple.style.pointerEvents = 'none';
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Initialize everything
window.addEventListener('load', function() {
  createParticles();
  addButtonEffects();
  initMobileMenu();
  initLogoAnimations();
  
  // Start counters with delay
  setTimeout(() => {
    animateCounter('count-ch', 30000, 2000);
    animateCounter('count-show', 10000, 1800);
    animateCounter('count-sport', 5000, 1600);
  }, 2500);
});

// Event listeners
window.addEventListener('scroll', () => {
  handleScrollAnimations();
  handleParallax();
});

// Initial call
handleScrollAnimations();

// WhatsApp integration for mobile and desktop

// WhatsApp yönlendirme: Tüm .whatsapp-btn butonları için tek event
function setupWhatsAppButtons() {
  const phoneNumber = '447355613108';
  document.querySelectorAll('.whatsapp-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const message = btn.getAttribute('data-message') || '';
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.location.href = waUrl;
    });
  });
}

window.addEventListener('load', function() {
  createParticles();
  addButtonEffects();
  initMobileMenu();
  initLogoAnimations();
  setupWhatsAppButtons();
  // Start counters with delay
  setTimeout(() => {
    animateCounter('count-ch', 30000, 2000);
    animateCounter('count-show', 10000, 1800);
    animateCounter('count-sport', 5000, 1600);
  }, 2500);
});

// Fake subscribe flow with enhanced feedback
function subscribe(){
  const e = document.getElementById('email');
  const n = document.getElementById('name');
  const email = e ? e.value : document.getElementById('email').value;
  const name = n ? n.value : '';
  
  // Create success notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(90deg, var(--gold), var(--gold-dark));
    color: #0b0b0b;
    padding: 15px 20px;
    border-radius: 10px;
    font-weight: 600;
    z-index: 10000;
    animation: slideInRight 0.5s ease-out;
    box-shadow: 0 8px 25px rgba(212,175,55,0.4);
  `;
  notification.textContent = (name ? name + ", " : "") + "Kayıt başarılı! E-posta: " + email;
  document.body.appendChild(notification);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.5s ease-out';
    setTimeout(() => notification.remove(), 500);
  }, 3000);
  
  // Reset forms
  if(e) e.value = ''; 
  if(n) n.value = '';
}
