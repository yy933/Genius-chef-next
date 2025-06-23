export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
};

export type NavItemProps =
  | { title: string; links: NavLink[] } // 有 dropdown
  | { title: string; href: string }     // 單層連結

  export type FeatureCardProps = {
    title: string;
    description: string;
    imageUrl: string;
  };
