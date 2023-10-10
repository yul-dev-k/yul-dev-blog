export default function Layout({ children, title }) {
  return (
    <>
      <h1>{title}</h1>
      <div>{children}</div>
    </>
  );
}
