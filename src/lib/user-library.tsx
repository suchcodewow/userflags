import { CA, DK, FR, GB, US } from "country-flag-icons/react/3x2";
import { genConfig } from "react-nice-avatar";

// so fun :)
// https://nice-avatar.wwayne.com/

export interface FlagAtar {
  country: string;
}

export function FlagAtar({ country }: FlagAtar) {
  switch (country) {
    case "US":
      return <US className="h-4  rounded-sm" />;
    case "GB":
      return <GB className="h-4  rounded-sm" />;
    case "CA":
      return <CA className="h-4  rounded-sm" />;
    case "DK":
      return <DK className="h-4  rounded-sm" />;
    case "FR":
      return <FR className="h-4  rounded-sm" />;
    default:
      return <p>!</p>;
  }
}

export const users = [
  {
    id: "ABurr",

    country: "US",
    preview: false,
    avatar: genConfig({
      sex: "woman",
      faceColor: "#AC6651",
      earSize: "small",
      eyeStyle: "circle",
      noseStyle: "round",
      mouthStyle: "laugh",
      shirtStyle: "hoody",
      glassesStyle: "round",
      hairColor: "#fff",
      hairStyle: "womanShort",
      hatStyle: "none",
      hatColor: "#F48150",
      eyeBrowStyle: "up",
      shirtColor: "#77311D",
      bgColor: "linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)",
    }),
  },
  {
    id: "RHart",
    country: "GB",
    preview: false,
    avatar: genConfig({
      sex: "woman",
      faceColor: "#AC6651",
      earSize: "small",
      eyeStyle: "smile",
      noseStyle: "short",
      mouthStyle: "peace",
      shirtStyle: "hoody",
      glassesStyle: "square",
      hairColor: "#506AF4",
      hairStyle: "womanLong",
      hatStyle: "none",
      hatColor: "#506AF4",
      eyeBrowStyle: "upWoman",
      shirtColor: "#9287FF",
      bgColor: "#FFEDEF",
    }),
  },
  {
    id: "WOz",
    country: "US",
    preview: true,
    avatar: genConfig({
      sex: "man",
      faceColor: "#AC6651",
      earSize: "big",
      eyeStyle: "circle",
      noseStyle: "long",
      mouthStyle: "laugh",
      shirtStyle: "polo",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "thick",
      hatStyle: "none",
      hatColor: "#F48150",
      eyeBrowStyle: "up",
      shirtColor: "#77311D",
      bgColor: "linear-gradient(45deg, #1729ff 0%, #ff56f7 100%)",
    }),
  },
  {
    id: "MPoppins",
    country: "DK",
    preview: false,
    avatar: genConfig({
      sex: "man",
      faceColor: "#F9C9B6",
      earSize: "big",
      eyeStyle: "oval",
      noseStyle: "round",
      mouthStyle: "peace",
      shirtStyle: "hoody",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "thick",
      hatStyle: "none",
      hatColor: "#000",
      eyeBrowStyle: "up",
      shirtColor: "#F4D150",
      bgColor: "linear-gradient(45deg, #ff1717 0%, #ffd368 100%)",
    }),
  },
  {
    id: "WWonka",
    country: "CA",
    preview: false,
    avatar: genConfig({
      sex: "man",
      faceColor: "#F9C9B6",
      earSize: "big",
      eyeStyle: "oval",
      noseStyle: "long",
      mouthStyle: "peace",
      shirtStyle: "polo",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "normal",
      hatStyle: "beanie",
      hatColor: "#77311D",
      eyeBrowStyle: "up",
      shirtColor: "#9287FF",
      bgColor: "#FFEBA4",
    }),
  },
  {
    id: "HHill",
    country: "GB",
    preview: false,
    avatar: genConfig({
      sex: "woman",
      faceColor: "#F9C9B6",
      earSize: "big",
      eyeStyle: "circle",
      noseStyle: "short",
      mouthStyle: "peace",
      shirtStyle: "hoody",
      glassesStyle: "round",
      hairColor: "#77311D",
      hairStyle: "womanShort",
      hatStyle: "none",
      hatColor: "#D2EFF3",
      eyeBrowStyle: "up",
      shirtColor: "#9287FF",
      bgColor: "#FFEBA4",
    }),
  },
  {
    id: "EDoolittle",
    country: "FR",
    preview: true,
    avatar: genConfig({
      sex: "woman",
      faceColor: "#F9C9B6",
      earSize: "small",
      eyeStyle: "oval",
      noseStyle: "long",
      mouthStyle: "laugh",
      shirtStyle: "polo",
      glassesStyle: "square",
      hairColor: "#fff",
      hairStyle: "normal",
      hatStyle: "none",
      hatColor: "#77311D",
      eyeBrowStyle: "up",
      shirtColor: "#6BD9E9",
      bgColor: "linear-gradient(45deg, #3e1ccd 0%, #ff6871 100%)",
    }),
  },
  {
    id: "OTwist",
    country: "GB",
    preview: false,
    avatar: genConfig({
      sex: "man",
      faceColor: "#AC6651",
      earSize: "big",
      eyeStyle: "circle",
      noseStyle: "long",
      mouthStyle: "laugh",
      shirtStyle: "polo",
      glassesStyle: "none",
      hairColor: "#77311D",
      hairStyle: "thick",
      hatStyle: "none",
      hatColor: "#77311D",
      eyeBrowStyle: "up",
      shirtColor: "#F4D150",
      bgColor: "linear-gradient( #ff1717 0%, #ffd368 100%)",
    }),
  },
  {
    id: "SKrelborn",
    country: "DK",
    preview: false,
    avatar: genConfig({
      sex: "woman",
      faceColor: "#AC6651",
      earSize: "big",
      eyeStyle: "oval",
      noseStyle: "short",
      mouthStyle: "smile",
      shirtStyle: "polo",
      glassesStyle: "none",
      hairColor: "#D2EFF3",
      hairStyle: "womanLong",
      hatStyle: "none",
      hatColor: "#D2EFF3",
      eyeBrowStyle: "upWoman",
      shirtColor: "#FC909F",
      bgColor: "linear-gradient(90deg, #36cd1c 0%, #68deff 100%)",
    }),
  },
  {
    id: "PKing",
    country: "GB",
    preview: false,
    avatar: genConfig({
      sex: "man",
      faceColor: "#AC6651",
      earSize: "small",
      eyeStyle: "smile",
      noseStyle: "long",
      mouthStyle: "smile",
      shirtStyle: "short",
      glassesStyle: "none",
      hairColor: "#77311D",
      hairStyle: "thick",
      hatStyle: "none",
      hatColor: "#000",
      eyeBrowStyle: "up",
      shirtColor: "#9287FF",
      bgColor: "linear-gradient(45deg, #1729ff 0%, #ff56f7 100%)",
    }),
  },
  {
    id: "SOlsson",
    country: "CA",
    preview: false,
    avatar: genConfig({
      sex: "woman",
      faceColor: "#F9C9B6",
      earSize: "small",
      eyeStyle: "circle",
      noseStyle: "short",
      mouthStyle: "peace",
      shirtStyle: "hoody",
      glassesStyle: "none",
      hairColor: "#77311D",
      hairStyle: "womanShort",
      hatStyle: "beanie",
      hatColor: "#fff",
      eyeBrowStyle: "upWoman",
      shirtColor: "#6BD9E9",
      bgColor: "linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)",
    }),
  },
  {
    id: "STodd",
    country: "FR",
    preview: true,
    avatar: genConfig({
      sex: "woman",
      faceColor: "#AC6651",
      earSize: "small",
      eyeStyle: "oval",
      noseStyle: "short",
      mouthStyle: "smile",
      shirtStyle: "hoody",
      glassesStyle: "none",
      hairColor: "#F48150",
      hairStyle: "womanShort",
      hatStyle: "none",
      hatColor: "#fff",
      eyeBrowStyle: "up",
      shirtColor: "#9287FF",
      bgColor: "#E0DDFF",
    }),
  },
  {
    id: "DWarbucks",
    country: "GB",
    preview: false,
    avatar: genConfig({
      sex: "man",
      faceColor: "#AC6651",
      earSize: "big",
      eyeStyle: "oval",
      noseStyle: "short",
      mouthStyle: "smile",
      shirtStyle: "polo",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "normal",
      hatStyle: "none",
      hatColor: "#506AF4",
      eyeBrowStyle: "up",
      shirtColor: "#6BD9E9",
      bgColor: "#F48150",
    }),
  },
  {
    id: "MRose",
    country: "US",
    preview: false,
    avatar: genConfig({
      sex: "man",
      faceColor: "#F9C9B6",
      earSize: "big",
      eyeStyle: "circle",
      noseStyle: "long",
      mouthStyle: "laugh",
      shirtStyle: "short",
      glassesStyle: "none",
      hairColor: "#506AF4",
      hairStyle: "thick",
      hatStyle: "none",
      hatColor: "#506AF4",
      eyeBrowStyle: "up",
      shirtColor: "#77311D",
      bgColor: "#F4D150",
    }),
  },
  {
    id: "EWoods",
    country: "CA",
    preview: false,
    avatar: genConfig({
      sex: "woman",
      faceColor: "#F9C9B6",
      earSize: "big",
      eyeStyle: "oval",
      noseStyle: "round",
      mouthStyle: "smile",
      shirtStyle: "hoody",
      glassesStyle: "none",
      hairColor: "#506AF4",
      hairStyle: "womanLong",
      hatStyle: "none",
      hatColor: "#F48150",
      eyeBrowStyle: "upWoman",
      shirtColor: "#9287FF",
      bgColor: "linear-gradient(45deg, #56b5f0 0%, #45ccb5 100%)",
    }),
  },
  {
    id: "EHansen",
    country: "CA",
    preview: false,
    avatar: genConfig({
      sex: "woman",
      faceColor: "#F9C9B6",
      earSize: "small",
      eyeStyle: "smile",
      noseStyle: "round",
      mouthStyle: "peace",
      shirtStyle: "polo",
      glassesStyle: "none",
      hairColor: "#506AF4",
      hairStyle: "normal",
      hatStyle: "none",
      hatColor: "#fff",
      eyeBrowStyle: "upWoman",
      shirtColor: "#77311D",
      bgColor: "#74D153",
    }),
  },
  {
    id: "AHamilton",
    country: "GB",
    preview: false,
    avatar: genConfig({
      sex: "man",
      faceColor: "#F9C9B6",
      earSize: "small",
      eyeStyle: "circle",
      noseStyle: "short",
      mouthStyle: "laugh",
      shirtStyle: "hoody",
      glassesStyle: "none",
      hairColor: "#000",
      hairStyle: "thick",
      hatStyle: "none",
      hatColor: "#77311D",
      eyeBrowStyle: "up",
      shirtColor: "#6BD9E9",
      bgColor: "#FFEBA4",
    }),
  },
];
