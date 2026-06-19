// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };

//   const handleProfileClick = (index) => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected"; //isse jo section active h o orange deikhega

//   return (
//     <div className="menu-container">
//       <img src="logo.png" alt="menu item" style={{ width: "50px" }} />
//       <div className="menus">
//         <ul>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/"
//               onClick={() => handleMenuClick(0)}
//             >
//               <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
//                 Dashboard
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/orders"
//               onClick={() => handleMenuClick(1)}
//             >
//               <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
//                 Orders
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/holdings"
//               onClick={() => handleMenuClick(2)}
//             >
//               <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
//                 Holdings
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/positions"
//               onClick={() => handleMenuClick(3)}
//             >
//               <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
//                 Positions
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="funds"
//               onClick={() => handleMenuClick(4)}
//             >
//               <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
//                 Funds
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/apps"
//               onClick={() => handleMenuClick(6)}
//             >
//               <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
//                 Apps
//               </p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick}>
//           <div className="avatar"> ZU</div>
//           <p className="username">USERID</p>

//                 {isProfileDropdownOpen && (
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
//               <p>Logout</p>
//             </div>
//           )}

//      </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => setSelectedMenu(index);
//   const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   // Logout function: Token remove karke login page pe redirect karega
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "https://onrender.com";
//   };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected"; 

//   return (
//     <div className="menu-container">
//       <img src="logo.png" alt="logo" style={{ width: "50px" }} />
//       <div className="menus">
//         <ul>
//           {["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"].map((item, index) => (
//             <li key={item}>
//               <Link to={item === "Dashboard" ? "/" : `/${item.toLowerCase()}`} onClick={() => handleMenuClick(index)} style={{ textDecoration: "none" }}>
//                 <p className={selectedMenu === index ? activeMenuClass : menuClass}>{item}</p>
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//           {isProfileDropdownOpen && (
//             <div className="profile-dropdown">
//               <h4>Zerodha User</h4>
//               <p>My Profile</p>
//               <p onClick={handleLogout} style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}>Logout</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => setSelectedMenu(index);
//   const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   // Logout functionality: Redirects to the login page on the live frontend
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "https://onrender.com";
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
//               {/* Functional logout button */}
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


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => setSelectedMenu(index);
//   const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   // ✨ Sahi Redirect Logic
//   const handleLogout = () => {
//     localStorage.removeItem("token");
    
//     // Agar laptop par hain toh local page, agar internet par hain toh live frontend link
//     window.location.href = window.location.hostname === "localhost"
//       ? "http://localhost:3000/login"
//       : "https://onrender.com"; 
//       // Note: Pichle screenshot ke mutabik aapka backend ya frontend isi pattern par hosted hai
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    
    // Laptop par local page aur internet par aapka sahi login frontend link
    window.location.href = window.location.hostname === "localhost"
      ? "http://localhost:3000/login"
      : "https://onrender.com"; 
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
