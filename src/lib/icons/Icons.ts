type CategoryIcon = {
  id: string;
  name: string;
  src: string;
};

type CategoryIcons = CategoryIcon[];

type Icon = {
  name: string;
  src: string;
  theme?: string;
};

type Icons = { [key: string]: Icon };

const categoryIcons: CategoryIcons = [
  {
    id: "musik",
    name: "Musik",
    src: "/music.svg",
  },
  {
    id: "nöje",
    name: "Nöje",
    src: "/pleasure.svg",
  },
  {
    id: "livsstil",
    name: "Livsstil",
    src: "/lifestyle.svg",
  },
  {
    id: "böcker",
    name: "Böcker",
    src: "/books.svg",
  },
  {
    id: "spel",
    name: "Spel",
    src: "/games.svg",
  },
  {
    id: "träning",
    name: "Träning",
    src: "/fitness.svg",
  },
];

const icons: Icons = {
  notificationsDark: {
    name: "notifications",
    src: "/bellDark.svg",
    theme: "dark",
  },

  notificationsLight: {
    name: "notifications",
    src: "/bellLight.svg",
    theme: "light",
  },
  searchDark: {
    name: "search",
    src: "/searchDark.svg",
    theme: "dark",
  },
  searchLight: {
    name: "search",
    src: "/searchLight.svg",
    theme: "light",
  },
  showpasswordDark: {
    name: "show password",
    src: "eyeDark.svg",
    theme: "dark",
  },
  showpasswordLight: {
    name: "show password",
    src: "eyeLight.svg",
    theme: "light",
  },
  emailDark: {
    name: "email",
    src: "/mailDark.svg",
    theme: "dark",
  },
  emailLight: {
    name: "email",
    src: "/MailLight.svg",
    theme: "light",
  },
  lockDark: {
    name: "lock",
    src: "/lockDark.svg",
    theme: "dark",
  },
  lockLight: {
    name: "lock",
    src: "/lockLight.svg",
    theme: "light",
  },
  darkModeButton: {
    name: "moon",
    src: "/Moon.svg",
    theme: "dark",
  },
  lightModeButton: {
    name: "sun",
    src: "/Sun.svg",
    theme: "light",
  },
  backButtonDark: {
    name: "back button",
    src: "/backDark.svg",
    theme: "dark",
  },
  backButtonLight: {
    name: "back button",
    src: "/backLight.svg",
    theme: "light",
  },
  logoDark: {
    name: "logo",
    src: "/darkLogo.svg",
    theme: "dark",
  },
  logoLight: {
    name: "logo",
    src: "/lightLogo.svg",
    theme: "light",
  },
};

icons.notificationsDark.src;
export { icons, categoryIcons };
