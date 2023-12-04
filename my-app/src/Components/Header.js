import logo from "../../public/assets/images/logo-light.svg";
export default function Header() {
  return (
    <header className="hero">
      <nav>
        <img src={logo} alt="Work it" />
        <a href="#">Apply for access</a>
      </nav>
      <h1>Data tailored to your needs.</h1>
      <button>Learn more</button>
    </header>
  );
}
