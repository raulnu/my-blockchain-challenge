export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cyan-700 to-cyan-900 text-gray-50 text-center">
      <section className="flex items-center justify-evenly p-5 text-gray-100 text-lg font-medium">
        <span className="hover:scale-110 duration-150 ease-in">
          <a
            className="p-2"
            href="https://www.linkedin.com/in/raul-navarro-uribe/"
          >
            LinkedIn
          </a>
        </span>
        <span className="hover:scale-110 duration-150 ease-in">
          <a className="p-2" href="https://github.com/raulnu">
            Github
          </a>
        </span>
        <span className="hover:scale-110 duration-150 ease-in">
          <a className="p-2" href="mailto:raul.navarro.uribe@gmail.com">
            Email
          </a>
        </span>
      </section>
      <section className="bg-cyan-900 p-2">
        <span>© 2023 Raúl Navarro Uribe</span>
      </section>
    </footer>
  );
}
