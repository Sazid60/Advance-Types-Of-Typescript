{
  //
  // Generics With Interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  interface EmilabWatch {
    brand: string;
    model: string;
    display: string;
  }
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Sazid",
    computer: {
      brand: "Ryzen",
      model: "2xx-1x",
      releaseYear: 2025,
    },
    smartWatch: {
      brand: "HUAWEI",
      model: "A-007",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface YmamahBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<AppleWatch, YmamahBike> = {
    name: "Pazid",
    computer: {
      brand: "MAC",
      model: "2YY-1",
      releaseYear: 2026,
    },
    smartWatch: {
      brand: "Apple",
      model: "A-007",
      display: "AMOLED",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Ymamah",
      engineCapacity: "100cc",
    },
  };
  //
}
