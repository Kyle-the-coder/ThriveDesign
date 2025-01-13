import { Outlet, useLocation, useNavigation } from "react-router-dom";

export function NavLayout() {
  const { state } = useNavigation();

  return (
    <div className="main-container">
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
