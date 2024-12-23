export type ThemeName = "light" | "dark";
export type ColorKey =
  | "primary"
  | "background"
  | "secondary"
  | "third"
  | "border"
  | "text";
export type HeadingSize = "large" | "medium" | "small";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonScheme = "primary" | "normal";
export type LayoutWidth = "small" | "medium" | "large";

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
    };
  };
  button: {
    [key in ButtonSize]: {
      fontSize: string;
      padding: string;
    };
  };
  buttonScheme: {
    [key in ButtonScheme]: {
      color: string;
      backgroundColor: string;
    };
  };
  borderRadius: {
    default: string;
  };
  layoutWidth: {
    [key in LayoutWidth]: string;
  };
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "#ff5800",
    secondary: "#5f5f5f",
    background: "lightgray",
    third: "green",
    border: "gray",
    text: "black",
  },
  heading: {
    large: {
      fontSize: "2rem",
    },
    medium: {
      fontSize: "1.5rem",
    },
    small: {
      fontSize: "1rem",
    },
  },
  button: {
    large: {
      fontSize: "2rem",
      padding: "1rem 2rem",
    },
    medium: {
      fontSize: "1.5rem",
      padding: "0.5rem 1rem",
    },
    small: {
      fontSize: "1rem",
      padding: "0.25rem 0.5rem",
    },
  },
  buttonScheme: {
    primary: {
      color: "white",
      backgroundColor: "midnightblue",
    },
    normal: {
      color: "black",
      backgroundColor: "lightgray",
    },
  },
  borderRadius: {
    default: "4px",
  },
  layoutWidth: {
    small: "320px",
    medium: "760px",
    large: "1020px",
  },
};

export const dark: Theme = {
  ...light,
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "darkblue",
    third: "darkgreen",
    border: "gray",
    text: "black",
  },
};

export const getTheme = (themeName: ThemeName) => {
  switch (themeName) {
    case "light":
      return light;
    case "dark":
      return dark;
  }
};
