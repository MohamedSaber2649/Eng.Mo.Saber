/**
 * ملف JavaScript الرئيسي للمشروع
 * يعمل على جميع الصفحات (Home - Ronaldo - Messi)
 */

// ============ تهيئة الصفحة عند التحميل ============
document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل الصفحة بنجاح');
    
    // تهيئة نظام تسجيل الدخول
    initLoginSystem();
    
    // تهيئة تأثيرات التمرير
    initScrollAnimations();
    
    // تهيئة مميزات خاصة بكل صفحة
    initPageSpecificFeatures();
});

// ============ نظام تسجيل الدخول ============
function initLoginSystem() {
    const modal = document.getElementById('login-modal');
    const loginBtn = document.querySelector('.login-btn a');
    const closeBtn = document.querySelector('.close');
    
    if (!modal || !loginBtn || !closeBtn) return;
    
    // فتح النافذة
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });
    
    // إغلاق النافذة
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // إغلاق عند النقر خارج النافذة
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // معالجة إرسال النموذج
    const loginForm = document.querySelector('.login-content form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username && password) {
                alert(`مرحباً ${username}! تسجيل الدخول نجح (وهمي)`);
                modal.style.display = 'none';
                loginBtn.textContent = username;
                loginBtn.style.backgroundColor = '#4CAF50';
            } else {
                alert('الرجاء إدخال اسم مستخدم وكلمة مرور');
            }
        });
    }
}

// ============ تأثيرات التمرير ============
function initScrollAnimations() {
    // تأثيرات تظهر عند التمرير
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.slide-in, .fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };
    
    // تشغيل عند التحميل وعند التمرير
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
}

// ============ مميزات خاصة بكل صفحة ============
function initPageSpecificFeatures() {
    // مميزات خاصة بصفحة ميسي
    if (document.querySelector('body.messi-page')) {
        console.log('تهيئة مميزات صفحة ميسي');
        
        // تأثير خاص عند النقر على صورة ميسي
        const messiImage = document.querySelector('.player-image img');
        if (messiImage) {
            messiImage.addEventListener('click', function() {
                this.style.border = '5px solid #1e3c72';
                this.style.transition = 'all 0.3s';
            });
        }
        
        // تغيير لون العنوان عند التمرير
        window.addEventListener('scroll', function() {
            const title = document.querySelector('.player-info h1');
            if (window.scrollY > 100) {
                title.style.color = '#1e3c72';
            } else {
                title.style.color = '';
            }
        });
    }
    
    // مميزات خاصة بصفحة رونالدو
    if (document.querySelector('body.ronaldo-page')) {
        console.log('تهيئة مميزات صفحة رونالدو');
        
        // تأثير خاص عند النقر على صورة رونالدو
        const ronaldoImage = document.querySelector('.player-image img');
        if (ronaldoImage) {
            ronaldoImage.addEventListener('click', function() {
                this.style.border = '5px solid #c90808';
                this.style.transition = 'all 0.3s';
            });
        }
        
        // تغيير خلفية القسم عند التمرير
        window.addEventListener('scroll', function() {
            const achievements = document.querySelector('.achievements');
            if (achievements && window.scrollY > achievements.offsetTop - 300) {
                achievements.style.backgroundColor = 'rgba(201, 8, 8, 0.1)';
            }
        });
    }
}

// ============ تأثيرات عامة ============
// تأثيرات الصور عند التحويم
document.querySelectorAll('.zoom').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = '';
    });
});

// تأثيرات الروابط
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px)';
    });
    link.addEventListener('mouseout', function() {
        this.style.transform = '';
    });
});