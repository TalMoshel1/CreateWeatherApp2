export function weatherCondition(sentence) {
  const lowerCaseSentence = sentence.toLowerCase();
  
  switch(true) {
    case lowerCaseSentence.includes("dreary"):
      return "dreary";
    case lowerCaseSentence.includes("sunny"):
      return "sunny.jpg";
    case lowerCaseSentence.includes("clouds"):
    case lowerCaseSentence.includes("cloudy"):
      return "clouds.jpg";
    case lowerCaseSentence.includes("showers"):
      return "showers.jpeg";
    case lowerCaseSentence.includes("thunderstorms"):
      return "thunderstorms.jpg";
    default:
      return "unknown";
  }
}