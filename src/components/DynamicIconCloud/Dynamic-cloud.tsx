import 'regenerator-runtime/runtime';
import React from 'react';
import {
  fetchSimpleIcons,
  Cloud,
  renderSimpleIcon,
  ICloud, SimpleIcon,
} from 'react-icon-cloud';
import { useTheme, invertBg, lightTheme } from './use-theme';

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  // https://www.goat1000.com/tagcanvas-options.php
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: '#0000',
    reverse: true,
    tooltip: 'native',
    tooltipDelay: 0,
    wheelZoom: false,
  },
};

const renderCustomIcon = (icon: SimpleIcon, bg: string) => {
  return renderSimpleIcon({
    icon,
    minContrastRatio: bg === lightTheme.color ? 1.2 : 2,
    bgHex: bg,
    size: 42,
    fallbackHex: invertBg(bg),
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: React.FormEvent) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export function DynamicCloud({ iconSlugs }:any) {
  const { color } = useTheme();
  const [data, setData] = React.useState<IconData>();
  React.useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = React.useMemo(() => {
    if (!data) {
      return null;
    }

    const icons = Object.values(data.simpleIcons);

    return icons.map((i) => renderCustomIcon(i, color));
  }, [data, color]);

  return (
    <Cloud { ...cloudProps }>
      {renderedIcons}
      <p> </p>
    </Cloud>
  );
}
