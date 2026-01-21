// EmailJS Configuration
// IMPORTANTE: Configura estas constantes con tus credenciales de EmailJS
// 1. Ve a https://www.emailjs.com y crea una cuenta
// 2. Crea un servicio de email (Gmail, Outlook, etc.)
// 3. Crea un template de email
// 4. Obtén tu Public Key, Service ID y Template ID
// 5. Reemplaza los valores placeholder abajo

const EMAILJS_PUBLIC_KEY = "BuEpkH_ayXtaYidRX";
const EMAILJS_SERVICE_ID = "service_knndvyg";
const EMAILJS_TEMPLATE_ID = "template_5y89io7";
const ORDER_RECEIVER_EMAIL = "visionalterna76@gmail.com"; // Cambia este email si es necesario

// Initialize EmailJS when the page loads
document.addEventListener('DOMContentLoaded', function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
});

// Open Order Modal
function openOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset form
    const form = document.getElementById('orderForm');
    form.reset();
    clearFormErrors();
    hideFormError();
}

// Close Order Modal
function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form
    const form = document.getElementById('orderForm');
    form.reset();
    clearFormErrors();
    hideFormError();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        closeOrderModal();
    }
}

// Toggle FAQ
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Form Validation
function validateForm() {
    let isValid = true;
    const form = document.getElementById('orderForm');
    
    // Clear previous errors
    clearFormErrors();
    
    // Validate required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        const errorSpan = field.parentElement.querySelector('.error-message');
        
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            errorSpan.textContent = 'Este campo es obligatorio';
        } else {
            field.classList.remove('error');
        }
    });
    
    // Validate email
    const emailField = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value && !emailPattern.test(emailField.value)) {
        isValid = false;
        emailField.classList.add('error');
        emailField.parentElement.querySelector('.error-message').textContent = 'Por favor ingresa un email válido';
    }
    
    // Validate phone
    const phoneField = document.getElementById('telefono');
    const phonePattern = /^[0-9]{10}$/;
    if (phoneField.value && !phonePattern.test(phoneField.value.replace(/\s+/g, ''))) {
        isValid = false;
        phoneField.classList.add('error');
        phoneField.parentElement.querySelector('.error-message').textContent = 'Por favor ingresa un teléfono válido (10 dígitos)';
    }
    
    return isValid;
}

// Clear form errors
function clearFormErrors() {
    const form = document.getElementById('orderForm');
    const errorFields = form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
    
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(span => span.textContent = '');
}

// Show form error
function showFormError(message) {
    const errorDiv = document.getElementById('formError');
    errorDiv.textContent = message;
    errorDiv.classList.add('active');
}

// Hide form error
function hideFormError() {
    const errorDiv = document.getElementById('formError');
    errorDiv.classList.remove('active');
    errorDiv.textContent = '';
}

// Handle Form Submit
async function handleFormSubmit(event) {
    event.preventDefault();
    
    // Validate form
    if (!validateForm()) {
        showFormError('Por favor completa todos los campos obligatorios correctamente.');
        return;
    }
    
    hideFormError();
    
    // Get form data
    const form = document.getElementById('orderForm');
    const formData = new FormData(form);
    
    // Prepare email template parameters
    const templateParams = {
        order_receiver_email: ORDER_RECEIVER_EMAIL,
        from_name: formData.get('nombre'),
        from_email: formData.get('email'),
        phone: formData.get('telefono'),
        departamento: formData.get('departamento'),
        ciudad: formData.get('ciudad'),
        direccion: formData.get('direccion'),
        barrio: formData.get('barrio'),
        cantidad: formData.get('cantidad'),
        contacto_preferido: formData.get('contacto'),
        observaciones: formData.get('observaciones') || 'Ninguna',
        fecha_hora: new Date().toLocaleString('es-CO', {
            timeZone: 'America/Bogota',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }),
        subject: 'Nuevo pedido contraentrega - Menopause Vital'
    };
    
    // Update submit button state
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitLoading = document.getElementById('submitLoading');
    
    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitLoading.style.display = 'inline-block';
    
    try {
        // Send email using EmailJS
        if (typeof emailjs === 'undefined') {
            throw new Error('EmailJS no está cargado. Por favor verifica la configuración.');
        }
        
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );
        
        console.log('Email enviado exitosamente:', response);
        
        // Close modal
        closeOrderModal();
        
        // Show success message
        showSuccessMessage();
        
    } catch (error) {
        console.error('Error al enviar el email:', error);
        
        // Restore submit button
        submitBtn.disabled = false;
        submitText.style.display = 'inline-block';
        submitLoading.style.display = 'none';
        
        // Show error message
        showFormError('Hubo un error al enviar tu pedido. Por favor intenta nuevamente o contáctanos directamente a ' + ORDER_RECEIVER_EMAIL);
    }
}

// Show Success Message
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Auto close after 10 seconds
    setTimeout(() => {
        hideSuccessMessage();
    }, 10000);
}

// Hide Success Message
function hideSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close success message when clicking outside
document.addEventListener('click', function(event) {
    const successMessage = document.getElementById('successMessage');
    if (event.target === successMessage) {
        hideSuccessMessage();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to floating button
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const floatingBtn = document.querySelector('.floating-btn');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        floatingBtn.style.transform = 'translateY(100px)';
    } else {
        // Scrolling up
        floatingBtn.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

// Initialize carousel dots
document.addEventListener('DOMContentLoaded', function() {
    const carouselDots = document.getElementById('carouselDots');
    if (carouselDots && totalTestimonials > 0) {
        for (let i = 0; i < totalTestimonials; i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if (i === 0) dot.classList.add('active');
            dot.onclick = () => moveToTestimonial(i);
            carouselDots.appendChild(dot);
        }
    }
});

function moveCarousel(direction) {
    currentTestimonial += direction;
    
    if (currentTestimonial < 0) {
        currentTestimonial = totalTestimonials - 1;
    } else if (currentTestimonial >= totalTestimonials) {
        currentTestimonial = 0;
    }
    
    moveToTestimonial(currentTestimonial);
}

function moveToTestimonial(index) {
    currentTestimonial = index;
    const slides = document.getElementById('testimonialSlides');
    if (slides) {
        slides.scrollTo({
            left: testimonials[index].offsetLeft,
            behavior: 'smooth'
        });
    }
    
    // Update active dot
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Auto-advance carousel (every 3 seconds)
let carouselInterval;
function startCarousel() {
    carouselInterval = setInterval(() => {
        moveCarousel(1);
    }, 3000);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

// Start auto-advance when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (totalTestimonials > 1) {
        startCarousel();
        
        // Pause on hover
        const carousel = document.querySelector('.testimonials-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', stopCarousel);
            carousel.addEventListener('mouseleave', startCarousel);
        }
    }
});

