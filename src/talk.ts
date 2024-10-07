export interface Talk {
  speaker: string;
  name: string;
}


export const queryTalksFromDatabase = (): Talk[] => [
  {speaker: 'Emma Twersky', name: 'Angular\'s Momentum'},
  {speaker: 'Christian Liebel', name: 'AI in the browser: Smarter Angular apps with WebGPU and WebNN'},
  {
    speaker: 'Alisa Duncan',
    name: 'Step Up Your Authentication Security',
  },
  {
    speaker: 'Younes Jaaidi',
    name: 'Fake it till you Mock it',
  },
  {
    speaker: 'Manfred Steyer',
    name: 'Modern Angular Architectures with Lightweight Stores: New Rules and Options',
  },
  {
    speaker: 'Eliran Eliassy',
    name: 'DIY: Let\'s build a signal from scratch!',
  },
  {
    speaker: 'Cathrin Möller',
    name: 'The hidden challenges of run-time integrated microfrontends',
  },
  {speaker: 'Enea Jahollari', name: 'Going deep into Signals Change Detection'},
  {speaker: 'Vitalii Bobrov', name: 'Make your app loud: Web Audio in UI'},
  {speaker: 'Soumaya Erradi', name: 'Solving Web3 Issues with Angular'},
  {
    speaker: 'Matthieu Riegler',
    name: 'Partial Hydration, the art of sending the bare minimum over the wire\n',
  },
  {
    speaker: 'Robin Goetz',
    name: 'AnalogJs: The Vite powered Angular meta-framework',
  },
  {
    speaker: 'Jan-Niklas Wortmann',
    name: 'The Angular Language Server Inside Out',
  },
  {
    speaker: 'Ankita Sood',
    name: 'From Buttons to Breakpoints: A Deep Dive into Angular Material\'s Latest',
  },
  {
    speaker: 'Benjamin Legrand',
    name: 'Horror stories from running angular universal in production.',
  },
  {
    speaker: 'Devlin Duldulao',
    name: 'TanStack Angular Query: Building Efficient, Scalable Angular Applications',
  },
  {
    speaker: 'Stephen Cooper',
    name: 'Perfecting your Profiling Skills',
  },
  {
    speaker: 'Julian Jandl',
    name: 'Cut My Task Into Pieces - This is Concurrent Mode',
  },
  {
    speaker: 'Gregor Woiwode',
    name: 'Pride and Prejudice - Template Driven Forms',
  },
];
