document.addEventListener('DOMContentLoaded', () => {
    const featuresSection = document.getElementById('features');

    const scrollAnimation = () => {
        const sectionPosition = featuresSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (sectionPosition < screenPosition) {
            featuresSection.style.opacity = '1';
            featuresSection.style.transform = 'translateY(0)';
        }
    };

    window.addEventListener('scroll', scrollAnimation);

    const featureImages = document.querySelectorAll('.feature img');

    featureImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1) rotate(5deg)';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});
