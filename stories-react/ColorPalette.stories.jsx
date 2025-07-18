import React from "react";

const COLOR_GROUPS = [
  {
    name: "Primary",
    prefix: "primary",
    grades: [50,100,200,300,400,500,600,700,800,900],
  },
  {
    name: "Secondary",
    prefix: "secondary",
    grades: [50,100,200,300,400,500,600,700,800,900],
  },
  {
    name: "Neutral",
    prefix: "neutral",
    grades: [0,50,100,200,300,400,500,600,700,800,900,950],
  },
  {
    name: "Success",
    prefix: "success",
    grades: [50,100,200,300,400,500,600,700,800,900],
  },
  {
    name: "Info",
    prefix: "info",
    grades: [50,100,200,300,400,500,600,700,800,900],
  },
  {
    name: "Warning",
    prefix: "warning",
    grades: [50,100,200,300,400,500,600,700,800,900],
  },
  {
    name: "Error",
    prefix: "error",
    grades: [50,100,200,300,400,500,600,700,800,900],
  },
  // 扩展色
  {
    name: "Purple",
    prefix: "purple",
    grades: [50,100,200,300,400,500,600,700,800,900],
  },
  {
    name: "Pink",
    prefix: "pink",
    grades: [50,100,200,300,400,500,600,700,800,900],
  },
  {
    name: "Teal",
    prefix: "teal",
    grades: [50,100,200,300,400,500,600,700,800,900],
  },
  {
    name: "Indigo",
    prefix: "indigo",
    grades: [50,100,200,300,400,500,600,700,800,900],
  },
];

function getCssVarValue(varName) {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

const ColorBlock = ({ varName }) => {
  const [color, setColor] = React.useState("");
  React.useEffect(() => {
    setColor(getCssVarValue(varName));
    const handler = () => setColor(getCssVarValue(varName));
    window.addEventListener("themechange", handler);
    return () => window.removeEventListener("themechange", handler);
  }, [varName]);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
      <div style={{ width: 48, height: 32, background: `var(${varName})`, borderRadius: 6, border: "1px solid #eee" }} />
      <code style={{ minWidth: 140 }}>{varName}</code>
      <span style={{ fontFamily: "monospace", color: "#888" }}>{color}</span>
    </div>
  );
};

export default {
  title: "Basic/Color Palette",
  component: null,
};

export const AllColorPalette = () => (
  <div style={{ padding: 24 }}>
    <h2 style={{ marginBottom: 24 }}>Watercolor UI color palette</h2>
    {COLOR_GROUPS.map(group => (
      <div key={group.prefix} style={{ marginBottom: 32 }}>
        <h3 style={{ marginBottom: 12 }}>{group.name}</h3>
        {group.grades.map(grade => {
          const varName = `--wc-${group.prefix}-${grade}`;
          return <ColorBlock key={varName} varName={varName} />;
        })}
      </div>
    ))}
  </div>
); 