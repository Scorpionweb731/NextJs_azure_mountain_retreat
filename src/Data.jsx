
//***********Header****************
export const HeaderLinks = ['Home', 'Rooms','Restaurant', 'About','Contact']        
export const Logo = 'Azure Retreat ss'

//**************footer************
export const FooterLinks = {
   outro: [
    {heading: 'Azure Retreat'},
    {about: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'},
    {socialLinks: [
      { href: '#', icon: 'icon-twitter' },
      { href: '#', icon: 'icon-facebook' },
      { href: '#', icon: 'icon-instagram' },]}
  ],
    usefulLinks: [
      { label: 'Blog', href: '#' },
      { label: 'Rooms', href: '#' },
      { label: 'Amenities', href: '#' },
      { label: 'Gift Card', href: '#' },
    ],
    privacyLinks: [
      { label: 'Career', href: '#' },
      { label: 'About Us', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Services', href: '#' },
    ],
   contactDetails : [
      {
        icon: 'icon-map-marker',
        text: '203 Fake St. Mountain View, San Francisco, California, USA',
      },
      {
        icon: 'icon-phone',
        text: '+2 392 3929 210',
        link: '#',
      },
      {
        icon: 'icon-envelope',
        text: 'info@yourdomain.com',
        link: '#',
      },
    ]
    
};

// *************slider **************
export const SliderData = [
    {
      image: 'images/bg_1.jpg',
      title: 'Welcome To Azure Retreat',
      subtitle: 'Hotels & Resorts',
    },
    {
      image: 'images/bg_2.jpg',
      title: 'A Luxury Escape in the Heart of Manali',
      subtitle: 'Join With Us',
    },
  ];
//********** checkIn formfield **********

export const FormFields = [
    {
      label: "Check-in Date",
      type: "text",
      className: "checkin_date",
      placeholder: "Check-in date",
    },
    {
      label: "Check-out Date",
      type: "text",
      className: "checkout_date",
      placeholder: "Check-out date",
    },
    {
      label: "Room",
      type: "select",
      className: "room-select",
      options: [
        "Suite",
        "Family Room",
        "Deluxe Room",
        "Classic Room",
        "Superior Room",
        "Luxury Room",
      ],
    },
    {
      label: "Customer",
      type: "select",
      className: "customer-select",
      options: [
        "1 Adult",
        "2 Adults",
        "3 Adults",
        "4 Adults",
        "5 Adults",
        "6 Adults",
      ],
    },
  ];
  
  /*****services*******/
export const Services = {
  heading : 'Why Choose Azure Retreat ?',
  about: 'Azure Mountain Retreat isn’t just a place to stay—it’s an experience. Set away from the hustle and bustle of Manali’s crowded areas, the retreat offers a peaceful haven where you can unwind and soak in the breathtaking views. With world-class amenities, personalized services, and a prime location, Azure Mountain Retreat is designed to cater to the needs of discerning travelers seeking comfort, style, and serenity.',
  service: [
    {
      icon: "flaticon-reception-bell",
      title: "Super Cozy & Luxury Rooms",
      description: "Luxurious rooms with panoramic Himalayan views.",
    },
    {
      icon: "flaticon-spa",
      title: "Breathtaking Balcony Views",
      description: "Balconies with stunning mountain views for relaxation.",
    },
    {
      icon: "flaticon-car",
      title: "Peaceful Location Away from the Traffic",
      description: "Azure Mountain Retreat: Serene escape near Manali's attractions.",
    },
    {
      icon: "flaticon-serving-dish",
      title: "Family & Group-Friendly Accommodation",
      description: "Spacious rooms for families, friends, and couples.",
    },
    {
      icon: "flaticon-spa",
      title: "Perfect for Couples and Honeymooners",
      description: "Romantic ambiance with curated experiences for couples.",
    },
    {
      icon: "flaticon-reception-bell",
      title: "On-Site Dining",
      description: "In-house restaurant offers diverse cuisines with stunning views.",
    },

  ]
  };

  /*********rooms*********/
export const RoomsData = [
    {
      id: 1,
      name: "Suite Room",
      imageUrl: "images/room-1.jpg",
      price: "$120.00",
      link: "rooms.html",
      detailsLink: "room/1",
    },
    {
      id: 2,
      name: "Family Room",
      imageUrl: "images/room-2.jpg",
      price: "$20.00",
      link: "rooms.html",
      detailsLink: "room/2",
    },
    {
      id: 3,
      name: "Deluxe Room",
      imageUrl: "images/room-3.jpg",
      price: "$150.00",
      link: "rooms.html",
      detailsLink: "room/3",
    },
    {
      id: 4,
      name: "Classic Room",
      imageUrl: "images/room-4.jpg",
      price: "$130.00",
      link: "rooms.html",
      detailsLink: "room/4",
    },
    {
      id: 5,
      name: "Superior Room",
      imageUrl: "images/room-5.jpg",
      price: "$300.00",
      link: "rooms.html",
      detailsLink: "room/5",
    },
    {
      id: 6,
      name: "Luxury Room",
      imageUrl: "images/room-6.jpg",
      price: "$500.00",
      link: "rooms.html",
      detailsLink: "room/6",
    },
  ];

/********Facts***********/

export const FactData = [
  { id: 1, number: 50000, label: "Happy Guests" },
  { id: 2, number: 3000, label: "Rooms" },
  { id: 3, number: 1000, label: "Staff" },
  { id: 4, number: 100, label: "Destinations" },
];

/*****Testimonials*********/

export const TestimonialsData = [
  {
    id: 1,
    image: 'images/person_1.jpg',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Nathan Smith',
    position: 'Guests',
  },
  {
    id: 2,
    image: 'images/person_2.jpg',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Nathan Smith',
    position: 'Guests',
  },
  {
    id: 3,
    image: 'images/person_3.jpg',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Nathan Smith',
    position: 'Guests',
  },
  {
    id: 4,
    image: 'images/person_1.jpg',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Nathan Smith',
    position: 'Guests',
  },
];

/*******blog*******/

export const BlogData = [
  {
    id: 1,
    image: 'images/image_1.jpg',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'Dec 6, 2018',
    author: 'Admin',
    comments: 3,
    link: 'blog-single.html',
  },
  {
    id: 2,
    image: 'images/image_2.jpg',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'Dec 6, 2018',
    author: 'Admin',
    comments: 3,
    link: 'blog-single.html',
  },
  {
    id: 3,
    image: 'images/image_3.jpg',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'Dec 6, 2018',
    author: 'Admin',
    comments: 3,
    link: 'blog-single.html',
  },
  {
    id: 4,
    image: 'images/image_4.jpg',
    title: 'Even the all-powerful Pointing has no control about the blind texts',
    date: 'Dec 6, 2018',
    author: 'Admin',
    comments: 3,
    link: 'blog-single.html',
  },
];

/***********instagram**********/

export const InstagramImages = [
  { id: 1, url: 'images/insta-1.jpg' },
  { id: 2, url: 'images/insta-2.jpg' },
  { id: 3, url: 'images/insta-3.jpg' },
  { id: 4, url: 'images/insta-4.jpg' },
  { id: 5, url: 'images/insta-5.jpg' },
];


/*******about*********/

export const AboutData = {
  backgroundImage: '/images/bg_2.jpg',
  videoLink: 'https://vimeo.com/45830194',
  subheading: 'A Luxury Escape in the Heart of Manali',
  title: 'Welcome To Azure Retreat ',
  paragraphs: [
    `Nestled in the serene beauty of the Himalayas, just a 20-minute drive from Manali’s bustling Mall Road, Azure Mountain Retreat offers a perfect blend of luxury and tranquility. This newly established hotel is the epitome of elegance, boasting super cozy and opulent rooms with 180-degree panoramic views of snow-capped mountains and lush valleys from every balcony. Ideal for families, friends, and couples looking to escape the chaos of city life, Azure Mountain Retreat is the ultimate destination to rejuvenate and create unforgettable memories amidst nature's splendor.`,
    ``
  ],
  socialLinks: [
    { icon: 'icon-twitter', url: '#' },
    { icon: 'icon-facebook', url: '#' },
    { icon: 'icon-google-plus', url: '#' },
    { icon: 'icon-instagram', url: '#' },
  ],
};

/********menu items*******/

export const MenuItems = [
  {
    image: 'images/menu-1.jpg',
    title: 'Grilled Beef with potatoes',
    price: '$20.00',
    description: 'A small river named Duden flows by their place and supplies',
  },
  {
    image: 'images/menu-2.jpg',
    title: 'Grilled Beef with potatoes',
    price: '$29.00',
    description: 'A small river named Duden flows by their place and supplies',
  },
  {
    image: 'images/menu-3.jpg',
    title: 'Grilled Beef with potatoes',
    price: '$20.00',
    description: 'A small river named Duden flows by their place and supplies',
  },
  {
    image: 'images/menu-4.jpg',
    title: 'Grilled Beef with potatoes',
    price: '$20.00',
    description: 'A small river named Duden flows by their place and supplies',
  },
  {
    image: 'images/menu-5.jpg',
    title: 'Grilled Beef with potatoes',
    price: '$49.91',
    description: 'A small river named Duden flows by their place and supplies',
  },
  {
    image: 'images/menu-6.jpg',
    title: 'Ultimate Overload',
    price: '$20.00',
    description: 'A small river named Duden flows by their place and supplies',
  },
  {
    image: 'images/menu-7.jpg',
    title: 'Grilled Beef with potatoes',
    price: '$20.00',
    description: 'A small river named Duden flows by their place and supplies',
  },
  {
    image: 'images/menu-8.jpg',
    title: 'Ham & Pineapple',
    price: '$20.00',
    description: 'A small river named Duden flows by their place and supplies',
  },
];

/********restaurantaboutdata**********/

export const RestaurantAboutData = {
  subheading: "Our Restaurants",
  title: "We Are Food Lovers",
  paragraphs: [
    "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.",
    "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.",
    "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country."
  ]
};
