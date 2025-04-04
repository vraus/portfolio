export default function Layout({children} : {children: React.ReactNode}) {
    return (
      <div>
          {/* TODO: Make this more interesting by adding a short description of my profile */}
        <h1>Hadrien Belleville</h1>
          {/* TODO: Replace this by Sound Programmer / Engine Programmer / Game Developer / Game Programmer and an animation  */}
          <p>Game Developer</p>
        {children}
      </div>
    );
  }
  