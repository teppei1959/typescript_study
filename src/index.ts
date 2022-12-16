// import World from './world'

// const root = document.getElementById('root')
// const worldTest = new World('Hello World!')
// worldTest.sayHello(root)

// 基本の型定義
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

// 関数の型定義
import { logMessage } from "./function/basic"
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice} from "./function/parameters"

logMessage("Hello Typescript!")
isUserSignedIn("ABC", "トラハック")
isUserSignedIn("DEF")
isUserSignedIn2("ABC")
const sum = sumProductsPrice(100,200,300,400,500)
console.log('Function parameters sample 5:', sum)
