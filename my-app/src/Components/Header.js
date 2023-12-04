import logo from "../assets/images/logo-light.svg";
export default function Header() {
  return (
    <header className="hero">
      <nav>
        <img src={logo} alt="Work it" />
        <a href="#">Apply for access</a>
      </nav>
      <section>
        <h1>
          Data <span>tailored</span> to <br /> your needs.
        </h1>
        <button>Learn more</button>
      </section>
    </header>
  );
}
