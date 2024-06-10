export interface Duck {
  name : string,
  numLegs : number,
  makeSound: (sound : string) => void;
}

const duck1 : Duck = {
  name : 'huey',
  numLegs: 2,
  makeSound: (sound : string) => console.log(sound) 
}

const duck2 : Duck = {
  name : 'duey',
  numLegs: 2,
  makeSound: () => console.log('quick') 
}

duck1.makeSound('quck');
duck2.makeSound('quck2');

export const ducks = [duck1, duck2]