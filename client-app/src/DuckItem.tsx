import { Duck } from "./doem"

interface Prop {
  duck : Duck
}

export default function DuckItem({duck} : Prop) {
  return (
    <div key = {duck.name}>
      <span>{duck.name}</span>
      <button onClick={() => duck.makeSound(duck.name + ' :sound')}>make sound</button>
    </div>
  )
}