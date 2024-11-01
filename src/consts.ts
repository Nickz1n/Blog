// Importar esses dados de qualquer lugar do site usando a palavra-chave `import`.

// Título e descrição do site
export const SITE_TAB = "NickZ'in | Blog";
export const SITE_TITLE = "Nickz'in 👑";
export const SITE_DESCRIPTION = "A blog to share everything about technology and innovations, sometimes about games too";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// Informações do perfil do usuário
export const USER_NAME = "NickZ'in";
export const USER_SITE = "https://nickzin.com/"
export const USER_AVATAR = "/avatar.gif";

// Configurações de servidor e transição
export const SERVER_URL = "https://demo.saroprock.com";

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Página Incial
  { id: "about", text: "About", href: "/about", svg: "about", target: "_self" }, // Sobre mim
  {
    id: "blog",
    text: "Blogs",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "All blogs",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // Todos os Posts
      {
        id: "tech",
        text: "Tech blogs",
        href: "/blog/categories/tech",
        svg: "cube",
        target: "_self",
      }, // Categoria de Technologia
      {
        id: "life",
        text: "Life blogs",
        href: "/blog/categories/life",
        svg: "heart",
        target: "_self",
      }, // Categoria sobre mim
    ],
  }, // Página do blog com subitens
  {
    id: "project",
    text: "Project",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projetos página
  {
    id: "friend",
    text: "Friends",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Amigos página
  {
    id: "contact",
    text: "Contact",
    href: "mailto:blog@nickzin.com", // contato e-mail
    target: "_blank", // abrir em nova guia
    svg: "contact",
  },
];

// Mídias sociais e ícones de contato
export const socialIcons = [
  {
    href: "https://hylex.gg/collections",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "support",
  },
  {
    href: "https://github.com/nickz1n",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://www.youtube.com/@nickzin",
    ariaLabel: "Youtube",
    title: "youtube",
    svg: "bilibili",
  },
  {
    href: "https://www.linkedin.com/in/nickzin/",
    ariaLabel: "Linkedin",
    title: "Linkedin",
    svg: "rss",
  },
];
