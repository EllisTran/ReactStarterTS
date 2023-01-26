import useNavigation from "../hooks/use-navigation";

interface RouteProps {
  path: string;
  children: React.ReactNode;
}
const Route = ({ path, children }: RouteProps): JSX.Element => {
  const { currentPath } = useNavigation() ?? {};

  if (currentPath && path === currentPath) {
    return <div>{children}</div>;
  }
  return <></>;
};
export default Route;
