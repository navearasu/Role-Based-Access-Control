import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Crops.css';

// Modal Component
const Modal = ({ show, onClose, crop }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>{crop.name}</h2>
        <p>{crop.details}</p>
      </div>
    </div>
  );
};

const Crops = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const crops = [
    {
      name: 'Wheat',
      image: 'https://img.freepik.com/premium-photo/wheat-background-hd-wallpaper-photographic-image_993236-3015.jpg',
      description: 'Wheat is a staple crop grown worldwide. Discover tips on soil preparation, irrigation, and pest management for a bountiful harvest.',
      details: 'Detailed information about growing wheat...'
    },
    {
      name: 'Corn',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-yellow-corn-plant-with-dark-background-image_2518503.jpg',
      description: 'Maximize corn yields with insights into planting techniques, nutrient management, and disease prevention.',
      details: 'Detailed information about growing corn...'
    },
    {
      name: 'Rice',
      image: 'https://image.shutterstock.com/image-photo/rice-260nw-1956230053.jpg',  // Updated image link
      description: 'Rice is a key food crop globally. Explore effective strategies for water management, pest control, and variety selection.',
      details: 'Detailed information about growing rice...'
    },
    {
      name: 'Soybean',
      image: 'https://img.freepik.com/free-photo/soybean-sauce-soybean-wooden-floor-soy-sauce-food-nutrition-concept_1150-26321.jpg',
      description: 'Unlock the potential of soybeans with guidance on planting density, crop rotation, and harvest timing.',
      details: 'Detailed information about growing soybean...'
    },
    {
      name: 'Tomato',
      image: 'https://t4.ftcdn.net/jpg/03/54/24/17/360_F_354241708_IrEvwS6AeMei4ZZJHTSOC1xqtl79rS10.jpg',
      description: 'Learn how to grow juicy tomatoes with tips on pruning, pest control, and optimal sun exposure.',
      details: 'Detailed information about growing tomato...'
    },
    {
      name: 'Potato',
      image: 'https://static.vecteezy.com/system/resources/previews/036/491/729/non_2x/ai-generated-summer-harvest-potatoes-freshly-picked-arranged-in-a-farmers-field-for-social-media-post-size-free-photo.jpg',
      description: 'Potatoes are versatile crops. Discover strategies for planting, hilling, and disease management.',
      details: 'Detailed information about growing potato...'
    },
    {
      name: 'Carrot',
      image: 'https://c4.wallpaperflare.com/wallpaper/204/872/868/carrots-vegetables-harvest-wallpaper-preview.jpg',
      description: 'Enhance carrot growth with insights on soil health, spacing, and pest resistance.',
      details: 'Detailed information about growing carrot...'
    },
    {
      name: 'Lettuce',
      image: 'https://c1.wallpaperflare.com/preview/768/968/969/lettuce-green-vegetables-greens.jpg',
      description: 'Grow fresh lettuce with advice on watering techniques, spacing, and pest control.',
      details: 'Detailed information about growing lettuce...'
    },
    {
      name: 'Strawberry',
      image: 'https://static.vecteezy.com/system/resources/previews/027/006/834/large_2x/ripe-red-strawberries-on-a-branch-in-the-garden-at-sunset-a-branch-with-natural-strawberries-on-a-blurred-background-of-a-strawberry-field-at-golden-hour-ai-generated-free-photo.jpg',
      description: 'Strawberries are a favorite fruit. Learn about soil preparation, pest management, and harvesting techniques.',
      details: 'Detailed information about growing strawberry...'
    },
    {
      name: 'Banana',
      image: 'https://img.freepik.com/premium-photo/banana-background-fruit-background-hd-8k-wallpaper-stock-photographic-image_890746-50314.jpg',
      description: 'Bananas require specific conditions. Discover tips on soil, irrigation, and pest management for a fruitful yield.',
      details: 'Detailed information about growing banana...'
    }
  ];

  const handleLearnMore = (crop) => {
    setSelectedCrop(crop);
    setShowModal(true);
  };

  return (
    <div className="crops-page">
      <header className="crops-header">
        <h1>Crops Management</h1>
        <p>Discover insights and best practices for managing your crops effectively.</p>
      </header>

      <section className="crop-overview">
        <div className="overview-content">
          <h2>Crop Overview</h2>
          <p>
            Managing crops efficiently is vital for achieving high yields and sustainable farming practices. With AgriManage, you can monitor crop health, track growth stages, and receive tailored advice for each crop type. Our platform offers a comprehensive overview of your crops, helping you make informed decisions to optimize productivity.
          </p>
        </div>
        <img src="https://st3.depositphotos.com/1177973/16777/i/450/depositphotos_167778562-stock-photo-concept-of-smart-agriculture-and.jpg" alt="Crop Overview" className="overview-image" />
      </section>

      <section className="featured-crops">
        <h2>Featured Crops</h2>
        <div className="crop-grid">
          {crops.map((crop, index) => (
            <div className="crop-card" key={index}>
              <img src={crop.image} alt={crop.name} />
              <h3>{crop.name}</h3>
              <p>{crop.description}</p>
              <button className="learn-more-button" onClick={() => handleLearnMore(crop)}>Learn More</button>
            </div>
          ))}
        </div>
      </section>

      <section className="crop-management-tips">
        <h2>Crop Management Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>Soil Health</h4>
            <p>Maintain healthy soil with proper pH balance, organic matter, and nutrient availability for optimal crop growth.</p>
          </div>
          <div className="tip-card">
            <h4>Irrigation Techniques</h4>
            <p>Implement efficient irrigation methods to conserve water while ensuring adequate moisture for crops.</p>
          </div>
          <div className="tip-card">
            <h4>Pest Control</h4>
            <p>Utilize integrated pest management practices to reduce crop damage and increase resilience.</p>
          </div>
          <div className="tip-card">
            <h4>Harvest Timing</h4>
            <p>Determine the optimal time for harvesting to maximize yield and quality of produce.</p>
          </div>
          <div className="tip-card">
            <h4>Crop Rotation</h4>
            <p>Rotate crops to improve soil fertility, reduce pests, and enhance overall farm sustainability.</p>
          </div>
          <div className="tip-card">
            <h4>Nutrient Management</h4>
            <p>Apply fertilizers and organic amendments based on soil tests to provide essential nutrients to your crops.</p>
          </div>
          <div className="tip-card">
            <h4>Companion Planting</h4>
            <p>Use companion planting strategies to naturally deter pests and promote beneficial interactions among plants.</p>
          </div>
          <div className="tip-card">
            <h4>Weed Management</h4>
            <p>Implement effective weed management techniques to prevent competition for resources with your crops.</p>
          </div>
        </div>
      </section>

      <section className="crops-action">
        <h2>Enhance Your Crop Management Today!</h2>
        <p>Sign up for AgroMinds and start making data-driven decisions for better farming outcomes.</p>
        <Link to="/get-started">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>

      <Modal show={showModal} onClose={() => setShowModal(false)} crop={selectedCrop} />
    </div>
  );
};

export default Crops;
