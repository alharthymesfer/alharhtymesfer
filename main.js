// Translation Data
const translations = {
  ar: {
    // Navbar
    home: 'الرئيسية',
    about: 'من أنا',
    skills: 'المهارات',
    certificates: 'الشهادات',
    projects: 'المشاريع',
    achievements: 'الإنجازات',
    contact: 'التواصل',
    cv: 'السيرة الذاتية',
    
    // Home Page
    heroTitle: 'مسفر محمد مسفر الحارثي',
    heroSubtitle: 'طالب تقنية معلومات | مهتم بالأمن السيبراني وتطوير الويب',
    heroDescription: 'طالب تقنية معلومات مهتم بالأمن السيبراني وتطوير الويب، أعمل على مشاريع تقنية وأطور مهاراتي باستمرار.',
    viewProjects: 'مشاهدة المشاريع',
    downloadCV: 'تحميل السيرة الذاتية',
    
    // Skills
    skillsTitle: 'المهارات',
    technicalSkills: 'المهارات التقنية',
    otherSkills: 'مهارات أخرى',
    
    // Projects
    projectsTitle: 'المشاريع',
    allProjects: 'الكل',
    webProjects: 'تطوير الويب',
    databaseProjects: 'قواعد البيانات',
    cybersecurityProjects: 'الأمن السيبراني',
    academicProjects: 'مشاريع أكاديمية',
    viewGithub: 'GitHub',
    viewDemo: 'معاينة',
    
    // Certificates
    certificatesTitle: 'الشهادات والدورات',
    viewCertificate: 'عرض الشهادة',
    
    // Achievements
    achievementsTitle: 'الإنجازات',
    
    // Contact
    contactTitle: 'التواصل',
    contactDescription: 'يسعدني التواصل معك! يمكنك إرسال رسالة أو التواصل عبر وسائل التواصل الاجتماعي',
    sendMessage: 'أرسل رسالة',
    contactInfo: 'معلومات التواصل',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    send: 'إرسال',
    whatsapp: 'تواصل عبر واتساب',
    
    // CV
    cvTitle: 'السيرة الذاتية',
    personalInfo: 'المعلومات الشخصية',
    education: 'التعليم',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة',
    builtWith: 'مبني بـ',
  },
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    certificates: 'Certificates',
    projects: 'Projects',
    achievements: 'Achievements',
    contact: 'Contact',
    cv: 'CV',
    
    // Home Page
    heroTitle: 'Mesfer Mohammed Mesfer Al-Harthi',
    heroSubtitle: 'IT Student | Cybersecurity & Web Development Enthusiast',
    heroDescription: 'IT student passionate about cybersecurity and web development, working on technical projects and continuously developing my skills.',
    viewProjects: 'View Projects',
    downloadCV: 'Download CV',
    
    // Skills
    skillsTitle: 'Skills',
    technicalSkills: 'Technical Skills',
    otherSkills: 'Other Skills',
    
    // Projects
    projectsTitle: 'Projects',
    allProjects: 'All',
    webProjects: 'Web Development',
    databaseProjects: 'Database',
    cybersecurityProjects: 'Cybersecurity',
    academicProjects: 'Academic',
    viewGithub: 'GitHub',
    viewDemo: 'Demo',
    
    // Certificates
    certificatesTitle: 'Certificates & Courses',
    viewCertificate: 'View Certificate',
    
    // Achievements
    achievementsTitle: 'Achievements',
    
    // Contact
    contactTitle: 'Contact',
    contactDescription: "I'd love to hear from you! You can send a message or reach out via social media",
    sendMessage: 'Send Message',
    contactInfo: 'Contact Information',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    whatsapp: 'Contact via WhatsApp',
    
    // CV
    cvTitle: 'Curriculum Vitae',
    personalInfo: 'Personal Information',
    education: 'Education',
    
    // Footer
    allRightsReserved: 'All Rights Reserved',
    builtWith: 'Built with',
  }
};

// Current Language
let currentLang = 'ar';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initLanguage();
  initMobileMenu();
  initSmoothScroll();
  initAnimations();
  initForms();
});

// Language Functions
function initLanguage() {
  const savedLang = localStorage.getItem('language') || 'ar';
  setLanguage(savedLang);
  
  // Language toggle button
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem('language', lang);
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      element.setAttribute('placeholder', translations[lang][key]);
    }
  });
  
  // Update language toggle button
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.textContent = lang === 'ar' ? 'English' : 'العربية';
  }
}

function toggleLanguage() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  setLanguage(newLang);
}

// Mobile Menu
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  
  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navbarMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navbarMenu.classList.remove('active');
      });
    });
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Animations on Scroll
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        
        // Animate skill bars
        if (entry.target.classList.contains('skill-progress')) {
          const width = entry.target.getAttribute('data-width');
          entry.target.style.width = width + '%';
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards and sections
  document.querySelectorAll('.card, .section-header, .timeline-item').forEach(el => {
    observer.observe(el);
  });
  
  // Observe skill bars
  document.querySelectorAll('.skill-progress').forEach(el => {
    observer.observe(el);
  });
}

// Form Handling
function initForms() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };
  
  // Show success message
  showNotification(
    currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!',
    'success'
  );
  
  // Reset form
  e.target.reset();
}

// Notification System
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 0.75rem;
    color: var(--foreground);
    z-index: 9999;
    animation: slideInRight 0.3s ease-out;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Project Filtering
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter projects
  projects.forEach(project => {
    const categories = project.getAttribute('data-category').split(',');
    if (category === 'all' || categories.includes(category)) {
      project.style.display = 'block';
      project.classList.add('fade-in-up');
    } else {
      project.style.display = 'none';
    }
  });
}

// Utility Functions
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'flex';
    } else {
      scrollBtn.style.display = 'none';
    }
  }
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
