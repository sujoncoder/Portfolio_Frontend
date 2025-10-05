interface ContainerProps {
    children: React.ReactNode;
    className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={`max-w-6xl mx-auto py-10 sm:px-20 px-2 ${className}`}>
            {children}
        </div>
    );
};
export default Container;