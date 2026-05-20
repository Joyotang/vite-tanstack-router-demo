import {
  Outlet,
  createRootRoute,
  Link,
} from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div>
      <nav
        style={{
          display: 'flex',
          gap: 12,
          marginBottom: 20,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}