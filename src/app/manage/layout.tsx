export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <section className='h-full w-full flex justify-center'>
        <div className="border-solid border-2 border-gray-300 w-2/3 flex flex-col">
          <h1 className="text-emerald-400 text-4xl font-bold mt-5 mb-7 m-auto">
            URENA
          </h1>
          {children}
          <div className='mt-10'></div>
        </div>
        
      </section>
    )
  }
  