import { Link } from "react-router-dom";
import { useState } from "react";
import LogOutModal from "../components/LogOutModal/LogOutModal";


const HomePage = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <p>HomePage</p>
      <Link to="/signin">Go to SignIn Page</Link>
                  <Link to="/signup">Go to SignUp Page</Link>
                
                  <button type="button" onClick={() => setIsModalOpen(true)}>+Add Water</button>
                  <LogOutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                          <h2>Log Out</h2>
                          <p>Are you sure you want to log out?</p> for visual
                  </LogOutModal> 
                  
    </div>
  );
};

export default HomePage;
