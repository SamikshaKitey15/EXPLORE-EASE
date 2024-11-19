const sampleListings = [
  {
      title: "Santorini Island Escape",
      description: "Experience iconic white-washed buildings and stunning sunsets on the beautiful island of Santorini.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1672661164594-9c1287c79904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 2000,
      location: "Santorini, Cyclades",
      country: "Greece",
  },
  {
      title: "Serengeti Safari Adventure",
      description: "Go on an unforgettable safari and witness the Great Migration in Tanzania’s Serengeti National Park.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1602410125631-7e736e36797c?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 3500,
      location: "Serengeti, Mara Region",
      country: "Tanzania",
  },
  {
      title: "Paris City Tour",
      description: "Discover the romance of Paris with visits to the Eiffel Tower, Louvre, and charming cafes.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1635960385737-c9e254405c19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 2500,
      location: "Paris, Île-de-France",
      country: "France",
  },
  {
      title: "Tokyo Cherry Blossom Festival",
      description: "Experience Japan’s cherry blossom season in Tokyo with its stunning parks and cultural landmarks.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1494884020746-bd961a27fdc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 1800,
      location: "Tokyo, Kanto",
      country: "Japan",
  },
  {
      title: "Maldives Beach Paradise",
      description: "Enjoy pristine beaches, crystal-clear waters, and luxurious resorts in the Maldives.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1472938714740-c788a1dbfa12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 4000,
      location: "Malé Atoll",
      country: "Maldives",
  },
  {
      title: "Grand Canyon Adventure",
      description: "Explore one of the world’s natural wonders with hiking trails, viewpoints, and stunning landscapes.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1535515505622-7621ebc4fc58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 1500,
      location: "Grand Canyon, Arizona",
      country: "USA",
  },
  {
      title: "Cultural Journey in Cairo",
      description: "Discover the ancient wonders of Egypt, including the Pyramids of Giza and the Sphinx.",
      image: {
        filename : "listingimage",
        url : "https://plus.unsplash.com/premium_photo-1697729777503-5a6ff8d6d877?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 2000,
      location: "Cairo, Giza",
      country: "Egypt",
  },
  {
      title: "Great Barrier Reef Diving",
      description: "Dive into the world’s largest coral reef with abundant marine life and vibrant coral formations.",
      image: {
        filename : "listingimage",
        url : "https://plus.unsplash.com/premium_photo-1661814303621-c6fa0772fe6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 3000,
      location: "Great Barrier Reef, Queensland",
      country: "Australia",
  },
  {
      title: "Iceland’s Golden Circle Tour",
      description: "Explore Iceland’s natural wonders with visits to geysers, waterfalls, and the famous Blue Lagoon.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1498866363999-1afe374cb87f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 2200,
      location: "Reykjavik, Capital Region",
      country: "Iceland",
  },
  {
      title: "Patagonia Hiking Adventure",
      description: "Embark on a hiking journey through Patagonia’s breathtaking mountains, glaciers, and lakes.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1694514923769-96797527d181?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 3200,
      location: "Patagonia, Santa Cruz",
      country: "Argentina",
  },
  {
      title: "Dubai Desert Safari",
      description: "Experience thrilling dune bashing, camel rides, and a taste of Bedouin culture in Dubai's vast deserts.",
      image: {
        filename : "listingimage",
        url : "https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 1200,
      location: "Dubai, UAE",
      country: "United Arab Emirates",
  },
  {
      title: "Swiss Alps Ski Resort",
      description: "Ski down the stunning slopes of the Swiss Alps, surrounded by picturesque snow-covered mountains.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1709506531620-6195c890ef10?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 2700,
      location: "Zermatt, Valais",
      country: "Switzerland",
  },
  {
      title: "Machu Picchu Exploration",
      description: "Visit the ancient Incan city of Machu Picchu, a UNESCO World Heritage site nestled in the Andes.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1519761112046-3abcd5a21728?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 2100,
      location: "Machu Picchu, Cusco",
      country: "Peru",
  },
  {
      title: "Barcelona Art and Architecture Tour",
      description: "Discover Gaudí’s architecture and vibrant culture in the colorful city of Barcelona.",
      image: {
        filename : "listingimage",
        url : "https://plus.unsplash.com/premium_photo-1694475008606-9f98b1e914a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 1700,
      location: "Barcelona, Catalonia",
      country: "Spain",
  },
  {
      title: "Banff National Park Adventure",
      description: "Explore Canada’s scenic national park with stunning mountain views, lakes, and wildlife.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1590053404184-ce4ee04f3d58?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 1600,
      location: "Banff, Alberta",
      country: "Canada",
  },
  {
      title: "Venice Gondola Ride",
      description: "Sail through the enchanting canals of Venice on a traditional gondola ride.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/flagged/photo-1573193785660-27ef0859be16?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 1300,
      location: "Venice, Veneto",
      country: "Italy",
  },
  {
      title: "Sydney Opera House Experience",
      description: "Visit Australia’s iconic Opera House, and explore Sydney’s beaches and harbor views.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1530276371031-2511efff9d5a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 2500,
      location: "Sydney, New South Wales",
      country: "Australia"
  },
  {
      title: "Petra Ancient City Tour",
      description: "Walk through the ancient city of Petra and witness the breathtaking rock-carved structures.",
      image: {
        filename : "listingimage",
        url : "https://plus.unsplash.com/premium_photo-1697730230978-37f6cc8499c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 2200,
      location: "Petra, Ma'an",
      country: "Jordan"
  },
  {
    title: "The Northern Lights in Tromsø",
      description: "Experience the mesmerizing Northern Lights in the Arctic Circle in Tromsø, Norway.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 2300,
      location: "Tromsø, Troms",
      country: "Norway"
  },
  {
    title: "Bali Cultural Retreat",
      description: "Immerse yourself in Balinese culture with temple visits, beach relaxation, and traditional cuisine.",
      image: {
        filename : "listingimage",
        url : "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      price: 1500,
      location: "Ubud, Bali",
      country: "Indonesia"
  }
];
  
  module.exports = { data: sampleListings };

