export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cyan-700 to-cyan-900 text-gray-50 text-center">
      <section className="flex items-center justify-evenly p-5 text-gray-100 text-lg font-medium hover:[&>span]:hover:scale-110 hover:[&>span]:duration-150">
        <span>
          <a
            className="p-2"
            href="https://www.linkedin.com/in/raul-navarro-uribe/"
            target="_blank"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a className="p-2" href="https://github.com/raulnu" target="_blank">
            Github
          </a>
        </span>
        <span>
          <a
            className="p-2"
            href="mailto:raul.navarro.uribe@gmail.com"
            target="_blank"
          >
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
