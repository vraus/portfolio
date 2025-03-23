export default function Layout({children} : {children: React.ReactNode}) {
    return (
      <div className="p-6">
        <h1>Hadrien Belleville</h1>
          <p>Game Developper</p>
        {children}
      </div>
    );
  }
  