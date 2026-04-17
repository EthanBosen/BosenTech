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