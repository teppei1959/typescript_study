export default function tupleSample() {
    // 一般的なタプルの型定義
    let response: [number, string] = [200, 'ok']
    // response = [400, 'Bad Request', 'Email parameter is missing']
    // response = ['400' ,'Bad Request', 'Email parameter is missing']
    console.log('Array tuple sample 1:', response)

    // 可変長引数を使ったタプル
    const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
    girlfriends.push('Misa')
    console.log('Array tuple sample 2:', girlfriends)
    // girlfriends.push(2)
}