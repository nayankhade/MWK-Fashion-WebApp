// import React, { useEffect, useState } from 'react';
// import { Card, Container, Row, Col, Button } from 'react-bootstrap';
// import axios from 'axios';
// import style from "../../style/Home.css";
// import { Navbar } from './Navbar';

// export function Home() {
//   const [offers, setOffers] = useState([]);

//   useEffect(() => {
//     fetchOffers();
//   }, []);

//   const fetchOffers = async () => {
//     try {
//       const response = await axios.get('http://localhost:9191/dashboard');
//       if (response.status === 200) {
//         setOffers(response.data);
//       } else {
//         console.error('Failed to fetch offers');
//       }
//     } catch (error) {
//       console.error('Error fetching offers:', error);
//     }
//   };

//   const dressCards = [
//     {
//       img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg',
//       title: 'Harpa',
//       description: 'Womans printed clothing',
//       price: 'Rs.839',
//       crossedPrice: 'Rs.2099',
//       discount: '60% OFF',
//     },
//     {
//       img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6625378/2018/6/5/fcec8d8e-4253-4fa4-ae6e-c6805b3b8fd31528183265021-na-2331528183264786-1.jpg',
//       title: 'Harpa',
//       description: 'Womans printed clothing',
//       price: 'Rs.839',
//       crossedPrice: 'Rs.2099',
//       discount: '60% OFF',
//     },
//     {
//       img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578929/2018/10/23/86988cdc-cbe3-4b13-93f9-b37ad571b4761540274855321-Harpa-Women-Dresses-9171540274855158-1.jpg',
//       title: 'Harpa',
//       description: 'Womans printed clothing',
//       price: 'Rs.839',
//       crossedPrice: 'Rs.2099',
//       discount: '60% OFF',
//     },
//     {
//       img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578940/2018/10/23/fe701151-69e6-4e20-9e2a-ace63081a8e11540282217137-Harpa-Women-Dresses-191540282216937-5.jpg',
//       title: 'Harpa',
//       description: 'Womans printed clothing',
//       price: 'Rs.839',
//       crossedPrice: 'Rs.2099',
//       discount: '60% OFF',
//     },
//   ];

//   const items = [
//     { id: 1, href: "/tags/women-basics", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_copy_ciPPqSQ.jpg?format=webp&w=768&dpr=2.0", alt: "All Solids Collection" },
//     { id: 2, href: "/tags/women-footwear", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile_1_kL3Faku.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
//     { id: 3, href: "/women/joggers", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-banner_3_Xt9tQnv.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
//     { id: 4, href: "/women/tshirts", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile_banner_copy_3.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
//     { id: 5, href: "/women/women-jeans", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mob_banner.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
//     { id: 6, href: "/women/womens-shirts", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_copy_1_cWXJDwQ.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
//     { id: 7, href: "/women/women-pants", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_dR40w99.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
//     { id: 8, href: "/tags/women-bottomwear", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_banner_copy_IeE1vaE.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" }
// ];

//   return (
//     <>
//       <Navbar />

      
//       <div className='dashboard'>
//         <Container fluid className='offer-container'>
//           <Row>
//             {offers.map((offer, index) => {
//               const imageUrl = `http://localhost:9191/dashboard/images/${offer.offers}`;
//               return (
//                 <Col key={index} xs={12} sm={6} md={4} lg={3}>
//                   <Card className="cards my-3">
//                     <Card.Img className='offer-img' variant="top" src={imageUrl} alt={`Offer ${index}`} />
//                     <Card.Body>
//                       <Button variant="primary">View Offer</Button>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               );
//             })}
//           </Row>
//         </Container>
//         <div className="container-cards">
//           <h1>Clothing Cards made with pure bootstrap and jquery</h1>
//           <div id="filterButtons">
//         <div class="json-search-container">
//             <input type="text" id="searchInput" placeholder="Search..."/>
//             <button id="searchButton">Search</button>
//             <button id="resetButton">Reset</button>
//         </div>
//         <div class="json-button-group">
//             <button id="dropdownButton">Menu ▼</button>
//             <ul id="json-button-group">
//                 <li class="filter-btn" data-category="all">Item One</li>
//                 <li class="filter-btn" data-category="rainbow">Item Two</li>
//                 <li class="filter-btn" data-category="ocean">Item Three</li>
//                      <li class="filter-btn" data-category="all">Item Four</li>
//                 <li class="filter-btn" data-category="rainbow">Item Five</li>
//                 <li class="filter-btn" data-category="ocean">Item Six</li>
                
              
//             </ul>
//         </div>
//     </div>
  
//           <br />
//           <br />
//           <div className="card-row">
//             {dressCards.map((card, index) => (
//               <div className="dress-card" key={index}>
//                 <div className="dress-card-head">
//                   <img className="dress-card-img-top" src={card.img} alt={card.title} />
//                   <div className="surprise-bubble">
//                     <span className="dress-card-heart">
//                       <i className="fas fa-heart"></i>
//                     </span>
//                     <a href="#"> <span>More</span></a>
//                   </div>
//                 </div>
//                 <div className="dress-card-body">
//                   <h4 className="dress-card-title">{card.title}</h4>
//                   <p className="dress-card-para">{card.description}</p>
//                   <p className="dress-card-para">
//                     <span className="dress-card-price">{card.price} &ensp;</span>
//                     <span className="dress-card-crossed">{card.crossedPrice}</span>
//                     <span className="dress-card-off">&ensp;({card.discount})</span>
//                   </p>
//                   <div className="row">
//                     <div className="col-md-6 card-button">
//                       <a href=""><div className="card-button-inner bag-button">Add to Bag</div></a>
//                     </div>
//                     <div className="col-md-6 card-button">
//                       <a href=""><div className="card-button-inner wish-button">Wishlist</div></a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//                                           </div>

//                                         </div>

//                                       </>
//                                       );
// }


import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import style from "../../style/Home.css";
import { Navbar } from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

export function Home() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get('http://localhost:9191/dashboard');
      if (response.status === 200) {
        setOffers(response.data);
      } else {
        console.error('Failed to fetch offers');
      }
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };

  const dressCards = [
    {
      img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578935/2018/10/23/d7b740bc-e00e-4bec-97aa-65016f8ff2e71540289479612-Harpa-Women-Dresses-2331540289479465-1.jpg',
      title: 'Harpa',
      description: 'Womans printed clothing',
      price: 'Rs.839',
      crossedPrice: 'Rs.2099',
      discount: '60% OFF',
    },
    {
      img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6625378/2018/6/5/fcec8d8e-4253-4fa4-ae6e-c6805b3b8fd31528183265021-na-2331528183264786-1.jpg',
      title: 'Harpa',
      description: 'Womans printed clothing',
      price: 'Rs.839',
      crossedPrice: 'Rs.2099',
      discount: '60% OFF',
    },
    {
      img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578929/2018/10/23/86988cdc-cbe3-4b13-93f9-b37ad571b4761540274855321-Harpa-Women-Dresses-9171540274855158-1.jpg',
      title: 'Harpa',
      description: 'Womans printed clothing',
      price: 'Rs.839',
      crossedPrice: 'Rs.2099',
      discount: '60% OFF',
    },
    {
      img: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7578940/2018/10/23/fe701151-69e6-4e20-9e2a-ace63081a8e11540282217137-Harpa-Women-Dresses-191540282216937-5.jpg',
      title: 'Harpa',
      description: 'Womans printed clothing',
      price: 'Rs.839',
      crossedPrice: 'Rs.2099',
      discount: '60% OFF',
    },
  ];

  const items = [
    { id: 1, href: "/tags/women-basics", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_copy_ciPPqSQ.jpg?format=webp&w=768&dpr=2.0", alt: "All Solids Collection" },
    { id: 2, href: "/tags/women-footwear", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile_1_kL3Faku.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
    { id: 3, href: "/women/joggers", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile-banner_3_Xt9tQnv.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
    { id: 4, href: "/women/tshirts", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Mobile_banner_copy_3.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
    { id: 5, href: "/women/women-jeans", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mob_banner.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
    { id: 6, href: "/women/womens-shirts", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_copy_1_cWXJDwQ.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
    { id: 7, href: "/women/women-pants", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_dR40w99.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" },
    { id: 8, href: "/tags/women-bottomwear", src: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_banner_copy_IeE1vaE.jpg?format=webp&w=768&dpr=2.0", alt: "Home Banner" }
  ];

  return (
    <>

      <div className='dashboard'>
      <Navbar />
        <Container fluid className='offer-container'>
          <Row>
            <Col>
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                useKeyboardArrows={true}
                autoPlay={true}
                interval={5000}
                transitionTime={500}
                showIndicators={true}
                emulateTouch={true}
                swipeable={true}
              >
                {items.map(item => (
                  <div key={item.id}>
                    <a href={item.href}>
                      <img src={item.src} alt={item.alt} />
                    </a>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
          
        </Container>
        <Container fluid className='offer-container offer-cards'>
        <Row>
            {offers.map((offer, index) => {
              const imageUrl = `http://localhost:9191/dashboard/images/${offer.offers}`;
              return (
                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                  <Card className="cards my-3">
                    <Card.Img className='offer-img' variant="top" src={imageUrl} alt={`Offer ${index}`} />
                    <Card.Body>
                      <Button variant="primary">View Offer</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="container-cards">
          <h1>Clothing Cards made with pure bootstrap and jquery</h1>
          <div id="filterButtons">
            <div className="json-search-container">
              <input type="text" id="searchInput" placeholder="Search..." />
              <button id="searchButton">Search</button>
              <button id="resetButton">Reset</button>
            </div>
            <div className="json-button-group">
              <button id="dropdownButton">Menu ▼</button>
              <ul id="json-button-group">
                <li className="filter-btn" data-category="all">Item One</li>
                <li className="filter-btn" data-category="rainbow">Item Two</li>
                <li className="filter-btn" data-category="ocean">Item Three</li>
                <li className="filter-btn" data-category="all">Item Four</li>
                <li className="filter-btn" data-category="rainbow">Item Five</li>
                <li className="filter-btn" data-category="ocean">Item Six</li>
              </ul>
            </div>
          </div>

          <br />
          <br />
          <div className="card-row">
            {dressCards.map((card, index) => (
              <div className="dress-card" key={index}>
                <div className="dress-card-head">
                  <img className="dress-card-img-top" src={card.img} alt={card.title} />
                  
                </div>
                <div className="dress-card-body">
                  <h4 className="dress-card-title">{card.title}</h4>
                  <p className="dress-card-para">{card.description}</p>
                  <p className="dress-card-para">
                    <span className="dress-card-price">{card.price} &ensp;</span>
                    <span className="dress-card-crossed">{card.crossedPrice}</span>
                    <span className="dress-card-off">&ensp;({card.discount})</span>
                  </p>
                  <div className="row">
                    <div className="col-md-6 card-button">
                      <a href=""><div className="card-button-inner bag-button">Add to Bag</div></a>
                    </div>
                    <div className="col-md-6 card-button">
                      <a href=""><div className="card-button-inner wish-button">Wishlist</div></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
