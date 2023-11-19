class HeaderTemplate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="primary-header">
        <div class="header-sticky">
          <p>All ESR PCs are assembled in the UK.</p>
        </div>
        <nav class="primary-nav">
          <ul class="nav-links">
            <li><a class="brand-logo" href="/">ESR</a></li>
            <li><a href="gaming-pcs.html">Gaming PCs</a></li>
            <li><a href="/">Peripherals</a></li>
            <li><a href="/">Components</a></li>
            <li><a href="/">Support</a></li>
          </ul>
          <ul class="nav-icons">
            <li>
              <a href="/">
                <i class="fa fa-magnifying-glass"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa fa-user"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa fa-cart-shopping"></i>
              </a>
            </li>
          </ul>
        </nav>
        </div>
      </header>`;
  }
}

class FooterTemplate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-container">
          <section>
            <ul class="social-links">
              <li><a href="/"><i class="fa-brands fa-facebook fa-xl"></i></a></li>
              <li><a href="/"><i class="fa-brands fa-square-x-twitter fa-xl"></i></a></li>
              <li><a href="/"><i class="fa-brands fa-instagram fa-xl"></i></a></li>
              <li><a href="/"><i class="fa-brands fa-youtube fa-xl"></i></a></li>
              <li><a href="/"><i class="fa-brands fa-github fa-xl"></i></a></li>
              <li><a href="/"><i class="fa-brands fa-discord fa-xl"></i></a></li>
            </ul>
          </section>
          <section class="contact">
            <div>
              <h3>CONTACT</h3>
              <a href=""><p>Company</p></a>
              <a href=""><p>Customer Support</p></a>
            </div>
            <div>
              <h3>ABOUT ESR</h3>
              <a href=""><p>Careers</p></a>
              <a href=""><p>Customer Reviews</p></a>
            </div>
            <div>
              <h3>COMMUNITY</h3>
              <a href=""><p>Our Discord</p></a>
              <a href=""><p>Newsroom & Blog</p></a>
            </div>
          </section>

          <section class="cpy-policies">
            <div class="copyright">
              <small>ESR</small>
              <small>©ESR Inc. 2023 All Rights Reserved</small>
            </div>
            <div class="policies">
              <a href=""><small>Legal</small></a>
              <a href=""><small>Private Policy</small></a>
              <a href=""><small>Manage Preferences</small></a>
            </div>
          </section>
        </div>
      </footer>`;
  }
}

class HeadLinkTemplate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />`;
  }
}

customElements.define("header-template", HeaderTemplate);
customElements.define("footer-template", FooterTemplate);
customElements.define("head-link-template", HeadLinkTemplate);
