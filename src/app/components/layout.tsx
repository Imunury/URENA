import Link from "next/link";

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <section className='h-full w-full flex justify-center'>
        <div className="border-solid border-2 border-gray-300 w-2/3 flex flex-col">
            <Link className="text-emerald-400 text-4xl font-bold mt-5 mb-7 m-auto" href='/home'>
            <h1>URENA</h1>
            </Link>
            {children}
            <div className='mt-10'></div>
        </div>
        </section>
    );
};

export default RootLayout;
