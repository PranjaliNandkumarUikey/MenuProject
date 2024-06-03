const menu = [
    {
      id: 1,
      title: "Milkshake",
      category: "Beverages",
      price: 15.99,
      img: "./menuimg/milkshake.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },

    {
      id: 2,
      title: "Noodles",
      category: "Junk Food", 
      price: 13.99,
      img: "./menuimg/noodles.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },

    {
      id: 3,
      title: "Brownies",
      category: "Desserts", 
      price: 6.99,
      img: "./menuimg/brownies.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },

    {
      id: 4,
      title: "Lime Soda",
      category: "Beverages", 
      price: 20.99,
      img: "./menuimg/Nimbu-Paani-676x1024.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },

    {
      id: 5,
      title: "Burger",
      category: "Junk Food", 
      price: 22.99,
      img: "./menuimg/burger.png",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },

    {
      id: 6,
      title: "Cookies",
      category: "Desserts", 
      price: 18.99,
      img: "./menuimg/cookie.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },

    {
      id: 7,
      title: "Cola",
      category: "Beverages", 
      price: 8.99,
      img: "./menuimg/Cola.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },

    {
      id: 8,
      title: "French Fries",
      category: "Junk Food", 
      price: 12.99,
      img: "./menuimg/frenchfries.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },

    {
      id: 9,
      title: "Cupcakes",
      category: "Desserts", 
      price: 16.99,
      img: "./menuimg/cupcake.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Coffee",
      category: "Beverages", 
      price: 22.99,
      img: "./menuimg/coffee.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  function displayMenuItems(menuItems) {
    sectionCenter.innerHTML = menuItems.map(item => `
      <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`).join("");
  }
  
  function displayMenuButtons() {
    const categories = ["all", ...new Set(menu.map(item => item.category))];
    
    btnContainer.innerHTML = categories.map(category => `
      <button type="button" class="filter-btn" data-id=${category}>${category}</button>`).join("");
  
    btnContainer.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        const category = e.currentTarget.dataset.id;
        displayMenuItems(category === "all" ? menu : menu.filter(item => item.category === category));
      });
    });
  }
  