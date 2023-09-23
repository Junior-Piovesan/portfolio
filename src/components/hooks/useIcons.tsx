import React from 'react';
import { renderSimpleIcon, fetchSimpleIcons, SimpleIcon } from 'react-icon-cloud';

interface IconsData {
  simpleIcons: Record<string, SimpleIcon>;
  allIcon: Record<string, { title: string; hex: string; slug: string; }>;
}

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState<IconsData>();
  React.useEffect(() => {
    fetchSimpleIcons({ slugs }).then((data) => setIcons(data));
  }, [slugs]);

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 80,
      aProps: {
        onClick: (e:React.FormEvent) => e.preventDefault(),
      },
    }));
  }

  return <a href=" ">Loading</a>;
};

export default useIcons;
