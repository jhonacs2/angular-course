import { RaceStatus } from '../enums/race-status.enum';
import { AnimalActions } from '../interfaces/animal-actions.interface';

export class Animal implements AnimalActions {
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

    eat(food: string): void {
        console.log('Eats', food);
    }

    move(distance: number): void {
        console.log('move', distance);
    }

    sleep(hours: number): void {
        console.log('hours', hours);
    }
}

export abstract class RaceAnimals {
    private static _animals: Animal[] = [];
    private static _raceStatus: RaceStatus = RaceStatus.READY;

    static get animals(): Animal[] {
        return this._animals;
    }

    static get raceStatus(): RaceStatus {
        return this._raceStatus;
    }

    public static addAnimal(animal: Animal) {
        this._animals.push(animal);
    }
}


/*function sum(a, b) {
    return a + b;
}

function concatenate(str1, str2) {
    return str1 + str2;
}

function concatenate(str1: string, str2: string): string {
    return str1 + str2;
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMax(arr: number[]): number {
    return Math.max(...arr);
}

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function greet(name) {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello!";
    }
}*/

/*
function findMax(arr: number[]): number {
    return Math.max(...arr);
}*/

/*function filterEvenNumbers(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}*/

/*function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello!";
    }
}*/
