export default function Layout({children} : {children: React.ReactNode}) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
        {children}
      </div>
    );
  }
  