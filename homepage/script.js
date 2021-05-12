"use strict";

// Highlight Active Nav Link
const highlightActiveNav = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    for (const link of navLinks) {
        link.addEventListener('click', e => {
           // Remove active class on current link
           document.querySelector('.active').classList.remove('active');
           
           // Add active class for clicked link
           this.classList.add('active');
        });
    } 
};


highlightActiveNav();







