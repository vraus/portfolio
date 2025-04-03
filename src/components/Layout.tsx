export default function Layout({children} : {children: React.ReactNode}) {
    return (
      <div>
        <h1>Hadrien Belleville</h1>
          <p>Game Developper</p>
        {children}
      </div>
    );
  }
  