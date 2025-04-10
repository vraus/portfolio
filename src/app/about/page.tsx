import Educations from "@/components/Educations"
import Activities from "@/components/Activities";

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
      </div>
    );
  }
  