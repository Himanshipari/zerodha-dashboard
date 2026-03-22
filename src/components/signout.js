import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const UserDropdown = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Backend api call for logout
      const { data } = await axios.get("https://zerodha-backend-nu2q.onrender.com/logout", {
        withCredentials: true,
      });

      if (data.success) {
        toast.success("Logged out successfully");
        // Redirect to signup or login page
        setTimeout(() => {
          window.location.href = "/signup"; 
        }, 1000);
      }
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="dropdown user-dropdown">
      <div 
        className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" 
        style={{ width: "35px", height: "35px", cursor: "pointer" }} 
        data-bs-toggle="dropdown"
      >
        ZU
      </div>
      <ul className="dropdown-menu dropdown-menu-end">
        <li className="dropdown-item-text fw-bold">USERID</li>
        <li><hr className="dropdown-divider" /></li>
        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
  );
};

export default UserDropdown;


// import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const UserDropdown = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:3000/logout", {
//         withCredentials: true,
//       });

//       if (data.success) {
//         toast.success("Logged out successfully");
//         setTimeout(() => {
//           navigate("/signup"); 
//         }, 1000);
//       }
//     } catch (error) {
//       console.error("Logout Error:", error);
//       toast.error("Logout failed");
//     }
//   };

//   return (
//     <div className="dropdown user-dropdown">
//       <div 
//         className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" 
//         style={{ width: "35px", height: "35px", cursor: "pointer" }} 
//         data-bs-toggle="dropdown"
//       >
//         ZU
//       </div>
//       <ul className="dropdown-menu dropdown-menu-end">
//         <li className="dropdown-item-text fw-bold">USERID</li>
//         <li><hr className="dropdown-divider" /></li>
//         <li>
//           <button className="dropdown-item" onClick={handleLogout}>
//             Logout
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default UserDropdown;

// import React from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// const Logout = () => {

//   const navigate = useNavigate();

//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-left",
//     });

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });

//   const handleLogout = async () => {
//     try {
//       // 🔥 Agar backend logout route hai
//       await axios.get("http://localhost:3002/logout", {
//         withCredentials: true,
//       });

//       // 🔥 Frontend cleanup
//       localStorage.removeItem("token");

//       handleSuccess("Logged out successfully");

//       setTimeout(() => {
//         navigate("/login");   // redirect after logout
//       }, 1000);

//     } catch (error) {
//       console.log(error);
//       handleError("Logout failed");
//     }
//   };

//   return (
//     <div className="container text-center p-5">

//       <h2>Are you sure you want to logout?</h2>

//       <button
//         className="btn btn-danger mt-3"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>

//       <ToastContainer />

//     </div>
//   );
// };

// export default Logout;

