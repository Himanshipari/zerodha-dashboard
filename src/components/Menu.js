// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => setSelectedMenu(index);
//   const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   // Logout Function: Token delete karke seedha aapke localhost 3000 par redirect karega
//   const handleLogout = () => {
//     localStorage.removeItem("token");
    
//     // Chahe aap local machine par ho ya live Render par, yeh hamesha localhost 3000 par hi bhejega
//     window.location.href = "http://localhost:3000/signup"; 
//   };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected";

//   return (
//     <div className="menu-container">
//       <img src="logo.png" alt="menu item" style={{ width: "50px" }} />
//       <div className="menus">
//         <ul>
//           {["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"].map((item, index) => (
//             <li key={item}>
//               <Link style={{ textDecoration: "none" }} to={`/${item.toLowerCase()}`} onClick={() => handleMenuClick(index)}>
//                 <p className={selectedMenu === index ? activeMenuClass : menuClass}>{item}</p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
//           <div className="avatar"> ZU</div>
//           <p className="username">USERID</p>
//           {isProfileDropdownOpen && (
//             <div className="profile-dropdown">
//               <h4>Zerodha User</h4>
//               <p>My Profile</p>
//               <p>console</p>
//               <p>coin</p>
//               <p>support</p>
//               <p>Invite friend</p>
//               <p>tour kit</p>
//               <p>keyboard shortcuts</p>
//               <p>help</p>
//               <p onClick={handleLogout} style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}>
//                 Logout
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => setSelectedMenu(index);
  const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  // लॉगआउट फंक्शन - इसमें आपका लाइव फ्रंटेंड लिंक लगा दिया गया है
  const handleLogout = (e) => {
    e.stopPropagation(); 
    localStorage.removeItem("token");
    
    // यह आपको सीधे आपकी लाइव वेबसाइट के साइनअप पेज पर भेजेगा
    window.location.href = "https://onrender.com"; 
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="menu item" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          {["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"].map((item, index) => (
            <li key={item}>
              <Link style={{ textDecoration: "none" }} to={`/${item.toLowerCase()}`} onClick={() => handleMenuClick(index)}>
                <p className={selectedMenu === index ? activeMenuClass : menuClass}>{item}</p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
          <div className="avatar"> ZU</div>
          <p className="username">USERID</p>
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <h4>Zerodha User</h4>
              <p>My Profile</p>
              <p>console</p>
              <p>coin</p>
              <p>support</p>
              <p>Invite friend</p>
              <p>tour kit</p>
              <p>keyboard shortcuts</p>
              <p>help</p>
              <p onClick={handleLogout} style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
