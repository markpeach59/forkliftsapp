export const forklifts = [
  {
    range: "1.0 - 2T THREE WHEEL (AC MOTOR)",
    models: [
      {
        _id: "1",

        modelName: "KBET15",
        capacity: 1500,
        engType: "Electric",
        basePrice: 11700
      },
      {
        _id: "2",

        modelName: "KBET20",
        capacity: 2000,
        engType: "Electric",
        basePrice: 13050
      }
    ]
  },

  {
    range: "Gas",
    models: [
      {
        _id: "3",

        modelName: "KBG15",
        capacity: 1500,
        engType: "Gas",
        basePrice: 13050
      },
      {
        _id: "4",

        modelName: "KBG18",
        capacity: 1800,
        engType: "Gas",
        basePrice: 13050
      },
      {
        _id: "5",

        modelName: "KBG20",
        capacity: 2000,
        engType: "Gas",
        basePrice: 13050
      },
      {
        _id: "6",

        modelName: "KBG25",
        capacity: 2500,
        engType: "Gas",
        basePrice: 13050
      },
      {
        _id: "7",

        modelName: "KBG30",
        capacity: 3000,
        engType: "Gas",
        basePrice: 13050
      },
      {
        _id: "8",

        modelName: "KBG35",
        capacity: 3500,
        engType: "Gas",
        basePrice: 13050
      },
      {
        _id: "9",

        modelName: "KBG40",
        capacity: 4000,
        engType: "Gas",
        basePrice: 13050
      },
      {
        _id: "10",

        modelName: "KBG50",
        capacity: 5000,
        engType: "Gas",
        basePrice: 13050
      },
      {
        _id: "11",

        modelName: "KBD15",
        capacity: 1500,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "12",

        modelName: "KBD18",
        capacity: 1800,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "13",

        modelName: "KBD20",
        capacity: 2000,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "14",

        modelName: "KBD25",
        capacity: 2500,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "15",

        modelName: "KBD30",
        capacity: 3000,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "16",

        modelName: "KBD35",
        capacity: 3500,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "17",

        modelName: "KBD40",
        capacity: 4000,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "18",

        modelName: "KBD25",
        capacity: 2500,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "19",

        modelName: "KBD50",
        capacity: 5000,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "20",

        modelName: "KBD50",
        capacity: 5000,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "21",

        modelName: "KBD60",
        capacity: 6000,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "22",

        modelName: "KBD70",
        capacity: 7000,
        engType: "Diesel",
        basePrice: 13050
      },
      {
        _id: "23",

        modelName: "KBD100",
        capacity: 10000,
        engType: "Diesel",
        basePrice: 13050
      }
    ]
  },
  {
    range: "Reach",
    models: [
      {
        _id: "24",

        modelName: "ER16",
        capacity: 1600,
        engType: "Reach",
        basePrice: 13050
      }
    ]
  },
  {
    range: "Warehouse",
    models: [
      {
        _id: "25",

        modelName: "EP12",
        capacity: 1200,
        engType: "Warehouse",
        basePrice: 13050
      }
    ]
  }
];

export function getForklifts() {
  return forklifts.filter(g => g);
}
