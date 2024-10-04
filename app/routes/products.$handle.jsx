import {Link} from '@remix-run/react';

export const meta = () => {
  return [
    {
      title: 'Product | Hydrogen',
    },
  ];
};

export default function Product() {
  return <Link to="/">Home</Link>;
}
