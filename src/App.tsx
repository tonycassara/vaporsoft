import {
  IconFileTypeDoc,
  IconBrush,
  IconDeviceLaptop,
  IconConfetti,
  IconCircle,
} from "@tabler/icons-react";
import "./App.css";
import { useLayoutEffect, useState } from "react";

const projectJson = {
  name: "my great project",
  description: "it is a great project",
  phaseProgress: 0.333,
  phases: [
    {
      name: "Product",
      locked: true,
      status: "complete",
      icon: <IconFileTypeDoc />,
    },
    {
      name: "Design",
      locked: false,
      status: "in_progress",
      icon: <IconBrush />,
    },
    {
      name: "Engineering",
      locked: false,
      status: "waiting",
      icon: <IconDeviceLaptop />,
    },
    {
      name: "Completion",
      locked: false,
      status: "waiting",
      icon: <IconConfetti />,
    },
  ],
};

const getIconColor = (status: string) => {
  switch (status) {
    case "complete":
      return "green";
    case "in_progress":
      return "yellow";
    case "waiting":
      return "gray";
    default:
      return "gray";
  }
};

function App() {
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [progressBarEndWidth, setProgressBarEndWidth] = useState(0);

  useLayoutEffect(() => {
    setTimeout(() => {
      setProgressBarWidth(projectJson.phaseProgress);
    }, 200);
  }, []);
  useLayoutEffect(() => {
    setTimeout(() => {
      setProgressBarEndWidth(1 - projectJson.phaseProgress);
    }, 800);
  }, []);
  return (
    <>
      <div>
        <h2>{projectJson.name}</h2>
        <div
          style={{
            width: "400px",
          }}
        >
          <div className="flex-row">
            {projectJson.phases.map((phase) => {
              return (
                <div key={phase.name} className="timeline-item">
                  <div className="flex-column">
                    <div>{phase?.icon ?? ""}</div>
                    <div>{phase.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex-row">
            {projectJson.phases.map((phase) => {
              return (
                <div className="timeline-item">
                  <IconCircle fill={getIconColor(phase.status)} />
                </div>
              );
            })}
          </div>
          <div style={{ position: "relative" }}>
            <div
              className="progress-bar-start"
              style={{ width: `${progressBarWidth * 100}%` }}
            ></div>
            <div
              className="progress-bar-end"
              style={{
                marginLeft: `${progressBarWidth * 100}%`,
                width: `${progressBarEndWidth * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
