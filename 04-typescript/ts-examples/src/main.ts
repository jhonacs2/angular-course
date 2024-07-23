import './style.css';
import typescriptLogo from './typescript.svg';
import { setupCounter } from './counter';
import { Animal, RaceAnimals } from './examples/animal';
import { RiderModel } from './interfaces/animal-model.interface';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

const normalNumber: number = 4;
const normalString: string = 'TS > JS';

console.log(normalNumber, normalString);

const dog: Animal = new Animal('Cacho');
dog.eat('Eggs');
dog.sleep(8);
RaceAnimals.addAnimal(dog);
console.log(RaceAnimals.raceStatus);

const rider: RiderModel = {
    name: 'Jhona',
    color: 'Negro',
    team: 'A'
};

const partialRider: Partial<RiderModel> = {
    name: 'Jhona',
};

const freezeRider: Readonly<RiderModel> = {
    name: 'Jhona',
    color: 'Negro',
    team: 'Z'
};

console.log(rider);
console.log(partialRider);
console.log(freezeRider);


/*Enums
Los enums son útiles para definir un conjunto de valores con nombre. Pueden ser de cadena o numéricos.

Ventajas:

Legibilidad y Mantenibilidad: Los enums proporcionan una forma clara de trabajar con conjuntos de valores relacionados.
Verificación en Tiempo de Compilación: Permiten la verificación en tiempo de compilación para garantizar que solo se utilicen valores válidos.
Valores por Defecto: Los enums numéricos generan valores automáticamente.
Compatibilidad con JavaScript: Los enums son compatibles con JavaScript a través de una transpilación sencilla.
Desventajas:

Inflado de Código: Los enums pueden generar más código JavaScript cuando se transpilan.
Limitaciones de Flexibilidad: No se pueden extender o combinar como los tipos.
Types
Los types son más flexibles y se usan para definir formas más complejas de datos, incluyendo objetos, uniones, intersecciones, etc.

Ventajas:

Flexibilidad: Se pueden definir tipos complejos, combinarlos y extenderlos.
Menor Inflado de Código: Los types no generan código adicional en JavaScript.
Compatibilidad con Interfaces: Se pueden usar en conjunto con interfaces para mejorar la reutilización y organización del código.
Uniones y Literales: Los types permiten definir tipos literales y uniones, lo que proporciona más flexibilidad en la definición de tipos de datos.
Desventajas:

Verificación en Tiempo de Compilación Menos Estricta: No son tan estrictos como los enums para conjuntos limitados de valores.
Legibilidad: Para conjuntos de valores simples, los enums pueden ser más legibles y fáciles de entender.
Ejemplos
Enum:

typescript
Copy code
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;
Type:

typescript
Copy code
type Color = 'Red' | 'Green' | 'Blue';

let c: Color = 'Green';
Cuándo Usar Cada Uno
Usar Enums: Cuando se necesita un conjunto fijo de valores con nombres que pueden ser numéricos o de cadena.
Usar Types: Cuando se requiere más flexibilidad, como definir estructuras de datos más complejas, o cuando se trabaja con literales y uniones de tipos.
En resumen, la elección entre types y enums depende del contexto y de las necesidades específicas de tu proyecto. Los enums son útiles para conjuntos claros y bien definidos de valores, mientras que los types ofrecen más flexibilidad para definiciones de datos más complejas.*/
