// any型は絶対に使わない

export default function anySample() {
    let name: any  = 'トラハック' // string型を代入したよ
    console.log('any sample 1:', typeof name, name)

    name = 28 // anyはどんな型でも許容してしまう
    console.log('any sample 2:', typeof name, name)
}