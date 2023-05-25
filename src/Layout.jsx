export default function Layout(props) {
  return (
    <main>
      <header>
        <h1>Simple Form</h1>
      </header>
      {props.children}
      <footer>
        <p>Footer</p>
      </footer>
    </main>
  );
}
