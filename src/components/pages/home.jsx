import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

// CSS
import '../../App.css';
import './page.styles.scss';

function Home() {
  const Linkstyle = {
    color: 'white',
    background: 'rgb(40,40,40)',
    borderRadius: '4px',
    padding: '0.8rem 1.4rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '12px',
    letterSpacing: '1px'
  };
  return (
    <div>
      <section>
        <div className="background" />
        <div className="contain">
          <div>
            <p className="medium-two">
              3 organic hillside vineyards on clay limestone soils in North
              Canterbury.
            </p>
          </div>
          <div>
            <p className="medium">
              Black Estate is a remarkable place for wine.
            </p>
            <p className="secondary">
              Visit our winery or order from our online store
            </p>
            <div className="links">
              <Link style={Linkstyle} to="/restaurant">
                RESTAURANT
              </Link>
              <Link style={Linkstyle} to="/shop">
                SHOP WINE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;