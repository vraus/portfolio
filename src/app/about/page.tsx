import Educations from "@/components/Educations"
import Activities from "@/components/Activities";
import GamesThatMadeMe from "@/components/GameThatMadeMe";

import "../../styles/globals.css"

export default function AboutPage() {
    return (
      <div className="container">
          <div>
              <Educations />
          </div>

          <div>
              <Activities />
          </div>

          <div>
              <GamesThatMadeMe />
          </div>
      </div>
    );
  }
  