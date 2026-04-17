        document.getElementById('year').textContent = new Date().getFullYear();

        const accordionHeaders = document.querySelectorAll('.accordion-header');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const isActive = content.classList.contains('active');
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.classList.remove('active');
                    item.previousElementSibling.classList.remove('active');
                });
                if (!isActive) {
                    content.classList.add('active');
                    header.classList.add('active');
                }
            });
        });

        // Click event for hamburger menu
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('show');
        });

        // Touchstart event for hamburger menu (improves mobile touch responsiveness)
        document.querySelector('.hamburger').addEventListener('touchstart', function(event) {
            event.preventDefault(); // Optional: Prevent default touch behavior
            document.querySelector('.nav-links').classList.toggle('show');
        });

        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM loaded - script is running');
            
            const modal = document.getElementById('pricingModal');
            const btn = document.getElementById('pricingInquiryBtn');
            const close = document.getElementById('closeModal');
            const form = document.getElementById('pricingForm');

            if (!btn) console.error('Button with ID "pricingInquiryBtn" not found');
            if (!modal) console.error('Modal with ID "pricingModal" not found');

            btn.addEventListener('click', function() {
                modal.style.display = 'flex';
            });

            close.addEventListener('click', function() {
                modal.style.display = 'none';
            });

            form.addEventListener('submit', async function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            try {
                const response = await fetch('/pricing-inquiry', {
                method: 'POST',
                body: formData,
                });
                const text = await response.text();
                alert(text);  // "Success!" or error
                modal.style.display = 'none';
            } catch (err) {
                alert('Error sending inquiry.');
            }
            const text = `Quote Request - ${service}\n\nHello,\n\nI am interested in your ${service} service. Please provide a quote.\n\nThank you.`;
            if (navigator.share) {
                navigator.share({
                title: 'Pricing Inquiry - Bosen Technologies',
                text: text,
                url: 'mailto:info@bosentechnologies.com'  // fallback hint
                }).then(() => {
                modal.style.display = 'none';
                }).catch(() => {
                // fallback if share fails/canceled
                const mailtoLink = `mailto:info@bosentechnologies.com?subject=${encodeURIComponent(`Quote Request - ${service}`)}&body=${encodeURIComponent(text)}`;
                window.location.href = mailtoLink;
                modal.style.display = 'none';
                });
            } else {
                // old fallback
                const mailtoLink = `mailto:info@bosentechnologies.com?subject=${encodeURIComponent(`Quote Request - ${service}`)}&body=${encodeURIComponent(text)}`;
                window.location.href = mailtoLink;
                modal.style.display = 'none';
            }
            });
        });