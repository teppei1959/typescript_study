export default function primitiveSample() {
    let name: string = 'トラハック'
    // name = 123 // string型にint型を入れようとしてエラーになる。
    console.log('primitive sample 1:', typeof name, name)

    let age: number = 28
    // age = "28"
    console.log('primitive sample 1:', typeof age, age)

    let isSingle: boolean = true
    // isSingle = 'foo'
    console.log('primitive sample 1:', typeof isSingle, isSingle)

    const isOver20: boolean = age >= 20
    console.log('primitive sample 1:', typeof isOver20, isOver20)
}