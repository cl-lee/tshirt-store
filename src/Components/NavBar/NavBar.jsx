import logo from "../../Images/store-logo.jpeg";
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="h-20 fixed top-0 left-0 right-0 flex pl-4">

      {/* Shop logo */}
      <img className="w-20 h-20" src={logo} alt="T-shirt Emporium logo"/>

      {/* Shop name (responsive, hidden in mobile screens) */}
      <h1>Shop Name</h1>



    </nav>
  );
}
