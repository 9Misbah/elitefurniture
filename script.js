/**
 * =========================================
 * ELITE MATTRESS - CORE JAVASCRIPT
 * =========================================
 * This script handles:
 * 1. Mobile Navigation Toggle
 * 2. Active Page Highlighting
 * 3. Fade-in on Scroll Animation
 * 4. Dynamic Collection Generation & Filtering
 * =========================================
 */

/* 
   ===== HOW TO MODIFY THE COLLECTION =====
   
   TO ADD A NEW MATTRESS:
   Add a new object to the 'mattresses' array below.
   {
       id: 13,
       name: "New Mattress Name",
       category: "memory-foam", // Options: "memory-foam", "orthopedic", "hybrid"
       price: 1299,
       image: "images/new-mattress.jpg",
       description: "Short description of the mattress."
   }

   TO EDIT A PRICE:
   Find the mattress object by name or ID and update the 'price' field.

   TO REMOVE A MATTRESS:
   Delete the corresponding object from the array.

   TO CHANGE AN IMAGE:
   Update the 'image' path in the object.
*/

const mattresses = [
    {
        id: 1,
        name: "Elite Comfort Memory Foam",
        category: "memory-foam",
        price: 18999,
        image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1000&auto=format&fit=crop",
        description: "Experience weightless sleep with our premium high-density memory foam designed for the Indian climate."
    },
    {
        id: 2,
        name: "Kerala Orthopedic BackCare",
        category: "orthopedic",
        price: 14500,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop",
        description: "Doctor-recommended support for chronic back pain and perfect posture alignment."
    },
    {
        id: 3,
        name: "Elite Hybrid Plus",
        category: "hybrid",
        price: 24500,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1000&auto=format&fit=crop",
        description: "A luxurious blend of responsive pocket springs and cooling gel-infused foam."
    },
    {
        id: 4,
        name: "Premium Coir Comfort",
        category: "orthopedic",
        price: 12999,
        image: "https://images.unsplash.com/photo-1621293954908-9c716143d28f?q=80&w=1000&auto=format&fit=crop",
        description: "Natural rubberized coir for firm support and enhanced air circulation."
    },
    {
        id: 5,
        name: "SpineGuard Pro",
        category: "orthopedic",
        price: 11500,
        image: "https://images.unsplash.com/photo-1626078332302-39fe6f7d9a1c?q=80&w=1000&auto=format&fit=crop",
        description: "Extra-firm support designed specifically for spinal health and alignment."
    },
    {
        id: 6,
        name: "Cloud-Rest Memory",
        category: "memory-foam",
        price: 15999,
        image: "https://images.unsplash.com/photo-1595514535311-66504547990c?q=80&w=1000&auto=format&fit=crop",
        description: "Plush top layer with deep pressure relief for a soft, cloudy feel."
    },
    {
        id: 7,
        name: "Eco-Logic Hybrid",
        category: "hybrid",
        price: 19500,
        image: "https://images.unsplash.com/photo-1616627561839-074385244ff7?q=80&w=1000&auto=format&fit=crop",
        description: "Eco-friendly materials combined with robust spring technology."
    },
    {
        id: 8,
        name: "Ortho-Flex Advance",
        category: "orthopedic",
        price: 13999,
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1000&auto=format&fit=crop",
        description: "Advanced 7-zone support system tailored to the Indian body type."
    },
    {
        id: 9,
        name: "Breeze-Tech Foam",
        category: "memory-foam",
        price: 11999,
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000&auto=format&fit=crop",
        description: "Highly breathable foam technology that keeps the mattress cool."
    },
    {
        id: 10,
        name: "Titanium Spring King",
        category: "hybrid",
        price: 32999,
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1000&auto=format&fit=crop",
        description: "Ultimate durability with titanium-reinforced pocket springs."
    },
    {
        id: 11,
        name: "Royal Coir Luxe",
        category: "orthopedic",
        price: 17999,
        image: "https://images.unsplash.com/photo-1616627547024-472458937178?q=80&w=1000&auto=format&fit=crop",
        description: "Hand-finished premium coir mattress with a silk-touch quilted cover."
    },
    {
        id: 12,
        name: "Elite Presidential",
        category: "hybrid",
        price: 45000,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop",
        description: "Our flagship hybrid mattress. The peak of luxury and engineering."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    // 2. Active Page Highlight
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 3. Fade-in on Scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 4. Dynamic Collection (Only runs on collection.html)
    const productGrid = document.getElementById('product-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (productGrid) {
        displayProducts(mattresses);

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state of buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const category = btn.getAttribute('data-category');
                const filtered = category === 'all'
                    ? mattresses
                    : mattresses.filter(m => m.category === category);

                displayProducts(filtered);
            });
        });
    }

    // 5. Featured Products (Only runs on index.html)
    const featuredGrid = document.getElementById('featured-grid');
    if (featuredGrid) {
        const featured = mattresses.slice(0, 4);
        displayProducts(featured, featuredGrid);
    }
});

/**
 * Renders product cards into the specified container
 * @param {Array} products - Array of product objects
 * @param {HTMLElement} container - The container to render into
 */
function displayProducts(products, container = document.getElementById('product-grid')) {
    if (!container) return;

    container.innerHTML = products.length > 0
        ? products.map(product => `
            <div class="product-card fade-in">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-badge">${formatCategory(product.category)}</div>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-bottom">
                        <span class="price">₹${product.price.toLocaleString('en-IN')}</span>
                        <a href="collection.html" class="btn btn-outline btn-sm">View Details</a>
                    </div>
                </div>
            </div>
        `).join('')
        : `<p class="no-results">No mattresses found in this category.</p>`;

    // Re-observe new elements for fade-in
    const newFaders = container.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });

    newFaders.forEach(f => observer.observe(f));
}

function formatCategory(category) {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
