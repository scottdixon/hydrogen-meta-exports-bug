import {Link} from '@remix-run/react';

export const meta = () => {
  return [
    {title: 'Index'},
    {name: 'description', content: 'Welcome to Remix!'},
  ];
};

export default function Homepage() {
  return <Link to="/products/high-top-sneakers?Size=6">Sneakers</Link>;
}
