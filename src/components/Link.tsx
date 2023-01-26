import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

interface LinkProp {
    to: string;
    children: React.ReactNode;
    className: string;
    activeClassName: string;
}

const Link = ({
    to,
    children,
    className,
    activeClassName,
}: LinkProp): JSX.Element => {
    const { navigate, currentPath } = useNavigation() ?? {};

    const classes = classNames(
        'text-blue-500',
        className,
        currentPath === to && activeClassName
    );

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        if (navigate) {
            navigate(to);
        }
    };
    return (
        <a className={classes} onClick={handleClick} href={to}>
            {children}
        </a>
    );
};

export default Link;
