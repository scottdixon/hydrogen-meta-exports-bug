import {useNonce} from '@shopify/hydrogen';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react';
import tailwindCss from './styles/tailwind.css?url';

export function links() {
  return [{rel: 'stylesheet', href: tailwindCss}];
}

export const meta = () => {
  return [{title: 'Root'}, {name: 'description', content: 'Welcome to root!'}];
};

export function Layout({children}) {
  const nonce = useNonce();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  let errorMessage = 'Unknown error';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error?.data?.message ?? error.data;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="route-error">
      <h1>Oops</h1>
      <h2>{errorStatus}</h2>
      {errorMessage && (
        <fieldset>
          <pre>{errorMessage}</pre>
        </fieldset>
      )}
    </div>
  );
}
