interface IProjectLSItem {
  name: string;
  description: string;
  url: string;
  image: string;
  type: "img" | "video";
}

interface NavItemProps {
  label: string;
  href: string;
  subLabel?: string;
  children?: NavItemProps[];
}
