export interface Talk {
  speaker: string;
  name: string;
}


export const queryTalksFromDatabase = (): Talk[] => [
  {speaker: 'Minko Gechev', name: 'Opening Keynote: The State of Angular'},
  {speaker: 'Fabian Gosebrink', name: 'Angular Signals under the Hood'},
  {
    speaker: 'Robin Goetz',
    name: 'AnalogJS - The Vite powered Angular meta-framework',
  },
  {
    speaker: 'Manfred Steyer',
    name: 'Modern Angular Architectures with Nx and Lightweight Stores',
  },
  {
    speaker: 'Chau Tran',
    name: 'Nx: Your Blissful Path to OSS Angular Library Management',
  },
  {
    speaker: 'Santosh Yadav',
    name: 'Planning Migration to Strict Mode for Your Angular Apps',
  },
  {
    speaker: 'Igor Ćirić',
    name: 'Breaking Boundaries: Unleashing the Potential of Micro Frontends with Angular and iframes',
  },
  {speaker: 'Alex Okrushko', name: 'Custom Features of NgRx SignalStore'},
  {speaker: 'Rainer Hahnekamp', name: 'Testing in 2024'},
  {speaker: 'Soumaya Erradi', name: 'Solving Web3 Issues with Angular'},
  {
    speaker: 'Nenad Drobac',
    name: 'SEO for Two Websites on One Platform? Don’t Get Duped!',
  },
  {
    speaker: 'Michael Hladky',
    name: 'Angular Performance and Core Web Vitals in 2024',
  },
  {
    speaker: 'Michael Egger-Zikes',
    name: 'Mastering Angular’s Dependency Injection: Practical Insights to Level Up',
  },
  {
    speaker: 'Mike Ryan',
    name: 'Closing Keynote: Divining the Future of Angular State Management',
  },
];
