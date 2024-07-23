export class Animal {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

export abstract class RaceAnimals {
    private static _animals: Animal[] = [];

    static get animals(): Animal[] {
        return this._animals;
    }

    public static addAnimal(animal: Animal) {
        this._animals.push(animal);
    }
}
