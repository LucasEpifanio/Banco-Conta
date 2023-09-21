/*NavBar*/
class MobileNavbar {
    constructor(mobileMenu, cabecalholista, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.cabecalholista = document.querySelector(cabecalholista);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.cabecalholista.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".cabecalho-lista",
    ".cabecalho-lista li",
  );
  mobileNavbar.init();


  /*menu-scroll*/
window.addEventListener("scroll", function(){
  let nav = document.querySelector('#nav')
  nav.classList.toggle('rolagem',window.scrollY > 50)
})
