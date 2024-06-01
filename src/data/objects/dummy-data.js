export const dummyForecast = {
    Headline: {
      EffectiveDate: "2023-12-06T07:00:00+02:00",
      EffectiveEpochDate: 1701838800,
      Severity: 5,
      Text: "Expect showers Wednesday morning",
      Category: "rain",
      EndDate: "2023-12-06T13:00:00+02:00",
      EndEpochDate: 1701860400,
      MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
    },
    DailyForecasts : [
      {
        Date: "2023-12-06T07:00:00+02:00",
        EpochDate: 1701838800,
        Temperature: {
          Minimum: {
            Value: 62,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 71,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 14,
          IconPhrase: "Partly sunny w/ showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate",
        },
        Night: {
          Icon: 40,
          IconPhrase: "Mostly cloudy w/ showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Sources: ["AccuWeather"],
        MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      },
      {
        Date: "2023-12-07T07:00:00+02:00",
        EpochDate: 1701925200,
        Temperature: {
          Minimum: {
            Value: 61,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 72,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 6,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 36,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      },
      {
        Date: "2023-12-08T07:00:00+02:00",
        EpochDate: 1702011600,
        Temperature: {
          Minimum: {
            Value: 62,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 73,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Night: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Sources: ["AccuWeather"],
        MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      },
      {
        Date: "2023-12-09T07:00:00+02:00",
        EpochDate: 1702098000,
        Temperature: {
          Minimum: {
            Value: 55,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 70,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 12,
          IconPhrase: "Showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light",
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      },
      {
        Date: "2023-12-10T07:00:00+02:00",
        EpochDate: 1702184400,
        Temperature: {
          Minimum: {
            Value: 57,
            Unit: "F",
            UnitType: 18,
          },
          Maximum: {
            Value: 73,
            Unit: "F",
            UnitType: 18,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: "Partly sunny",
          HasPrecipitation: false,
        },
        Night: {
          Icon: 36,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false,
        },
        Sources: ["AccuWeather"],
        MobileLink: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
        Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
      },
    ],
  }

 export const dummyCurrent = {
    LocalObservationDateTime: "2023-12-06T10:47:00+02:00",
    EpochTime: 1701852420,
    WeatherText: "Clouds and sun",
    WeatherIcon: 4,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 19.3,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 67,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    Link:
      "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  }

  export const dummyLocation = [{
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  }]