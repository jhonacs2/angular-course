export const avengers: string[] = ['iron man', 'captain america', 'thor', 'hulk', 'black widow', 'Spider-Man (Peter Parker)'];

export function selectRandomAvenger(): string {
  return avengers[(Math.floor(Math.random() * avengers.length))];
}
