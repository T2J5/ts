function addNumber<T, U> (a: T, b: U): T {
  return a
}

console.log(addNumber<number, string>(68, 'tj'));

// const a = addNumber(11, 12)

type NumGenerator = () => number

const arr: number[] = [1, 2, 3]
const [x, y, z] = arr

// 去掉所有可以改变数组的方法
let ro: ReadonlyArray<number> = arr
// ro[0] = 2 // error


// 泛型
interface GenericIdentityFn<T> {
  (arg: T): T;
}

class GenericNumber<T> {
  zeroValue!: T;
  add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
  return x + y
}

interface Todo {
  title: string;
  desc: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {...todo, ...fieldsToUpdate}
}

const todo1 = {
  title: 't1',
  desc: 'desc1'
}

const todo2 = updateTodo(todo1, {
  desc: 'desc2',
})

function Greeter (greeting: string) {
  return function (target: Function) {
    target.prototype.greet = function (): void {
        console.log(greeting)
      }
  }
  
}

@Greeter('hello---')
class Greeting {
  constructor() {
    // 
  }
}

let myGreeting = new Greeting();
(myGreeting as any).greet();