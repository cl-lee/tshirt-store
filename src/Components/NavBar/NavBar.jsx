import logo from "../../Images/store-logo.jpeg";
import "./NavBar.css";

// for shopping cart icon from fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <nav className="h-20 fixed top-0 left-0 right-0 flex pl-4">
      {/* Shop logo */}
      <img className="w-20 h-20" src={logo} alt="T-shirt Emporium logo" />

      {/* Shop name (responsive, hidden in mobile screens) */}

      {/* flex grow? (Tailwind: grow)*/}
      {/* DONE horizontal align middle (CSS: justify-content: center)?? */}
      {/* DONE vertical align middle (CSS: text-align: center; tailwind: text-center)*/}
      {/* DONE change font size */}
      {/* DONE change font - serif*/}
      <h1 className="grow self-center text-center text-4xl font-serif font-medium">
        Shop Name
      </h1>

      {/* shop basket icon */}

      {/* from font awesome */}
      {/* DONE 1. install SVG core npm i --save @fortawesome/fontawesome-svg-core */}
      {/* DONE 2. Add Icon Packages 
      # Free icons styles
      npm i --save @fortawesome/free-solid-svg-icons
      npm i --save @fortawesome/free-regular-svg-icons
      */}
      {/* DONE 3. Add the React Component 
      npm i --save @fortawesome/react-fontawesome@latest */}
      <FontAwesomeIcon icon={faCartShopping} />
    </nav>
  );
}
