import "../styles/Header.module.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>Todoish</h1>

        <ul role="list">
          <li>
            <button>+</button>
          </li>
          <li>
            <button>Toggle</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
