import "./Layout.scss";

export default function Layout({ children, title }) {
  return (
    <section className="layout">
      <h1>{title}</h1>
      <div>{children}</div>
    </section>
  );
}
