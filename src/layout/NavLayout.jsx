import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";

export function NavLayout() {
  const { state } = useNavigation();

  return (
    <div className="main-container">
      <Nav />
      {state === "loading" ? (
        "loading..."
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
}
