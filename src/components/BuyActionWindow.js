import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // फंक्शन को async बनाया ताकि डेटा बैकेंड तक सुरक्षित पहुंचे
  const handleBuyClick = async (e) => {
    e.preventDefault(); // पेज को फालतू रीलोड होने से रोकता है

    try {
      await axios.post("https://zerodha-backend-nu2q.onrender.com/newOrder", {
        name: uid,
        qty: Number(stockQuantity), // संख्या को नंबर में बदला
        price: Number(stockPrice),   // संख्या को नंबर में बदला
        mode: "BUY",
      });
      
      // ऑर्डर सफल होने के बाद ही विंडो बंद होगी
      GeneralContext.closeBuyWindow();
    } catch (error) {
      console.error("Order failed:", error);
      alert("Order failed! Please try again.");
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          {/* बटन को सही किया ताकि कोई रूट एरर न आए */}
          <button className="btn btn-blue" onClick={handleBuyClick} style={{ border: "none", cursor: "pointer" }}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick} style={{ border: "none", cursor: "pointer" }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
