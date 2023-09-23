import React from 'react';
import { Cloud } from 'react-icon-cloud';
import useIcons from '../hooks/useIcons';

const slugs = [
  'react',
  'typescript',
  'javascript',
  'redux',
  'jest',
  'html5',
  'css3',
  'styledcomponents',
  'testinglibrary',
  'visualstudiocode',
];

function DynamicIconCloud() {
  const icons = useIcons(slugs);

  return (
    <Cloud>
      {React.Children
        .toArray(Array.isArray(icons) ? icons : [icons])
        .map((icon: React.ReactNode, index: number) => (
          <React.Fragment key={ index }>
            {icon}
          </React.Fragment>
        ))}
    </Cloud>
  );
}
export default DynamicIconCloud;
