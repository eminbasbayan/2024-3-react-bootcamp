import { BsSearch, BsCart } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";

import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <header className="flex items-center justify-between p-4 bg-slate-300 sticky top-0">
      <div className="text-xl font-bold">Logo</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <BsSearch size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white relative">
          <BsCart size={24} />
          <b className="bg-red-700 w-5 h-5 flex items-center justify-center rounded-full text-center text-white absolute -top-4 -right-3 text-xs">
            {cartItems.length}
          </b>
        </a>
        {user && (
          <>
            <a href="#" className="text-gray-400 hover:text-white">
              <img
                src={user?.avatarUrl}
                className="w-10 h-10 rounded-full"
                alt="avatar"
              />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              onClick={handleLogout}
            >
              <LuLogOut size={24} />
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
