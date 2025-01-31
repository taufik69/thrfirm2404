import Logo from "../assets/logo.png";
import Button from "./CommonComponent/Button";
function Header() {
  const navItems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Solutions",
    },
    {
      id: 3,
      name: "Cases",
    },
    {
      id: 4,
      name: "About Us",
    },
    {
      id: 5,
      name: "Blog",
    },
    {
      id: 6,
      name: "Contact Us",
    },
  ];

  return (
    <div className="container">
      <div className="flex items-center justify-between py-5">
        {/* logo */}
        <picture>
          <img src={Logo} alt={Logo} />
        </picture>
        {/* logo */}
        <div className="flex gap-x-4 items-center">
          {/* navitem */}
          <ul className="flex items-center gap-x-[44px] mr-[50px]">
            {navItems?.map((item) => (
              <li
                key={item.id}
                className="font-nunito text-[18px]  font-bold text-black_color navitemstyle"
              >
                <a href="#">{item.name}</a>
              </li>
            ))}
          </ul>
          {/* navitem */}
          <Button content={"Get in Touch"} style={" bg-yellow_color"} />
        </div>
      </div>
    </div>
  );
}

export default Header;
