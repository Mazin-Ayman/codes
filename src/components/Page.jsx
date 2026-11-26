const Page = ({ title, className = "", children }) => (
  <main className={`page ${className}`.trim()}>
    {title && <h1 className="page__title">{title}</h1>}
    {children}
  </main>
);

export default Page;
