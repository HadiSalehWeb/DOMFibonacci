const fib = n => n <= 0 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2)

const calc = function () {
    const n = Number.parseInt(document.getElementById('zahl').value)
    const list = document.getElementById('ausgabe')
    list.innerHTML = ''
    for (let i = 0; i <= n; i++) {
        let ele = document.createElement('li')
        ele.innerHTML = `fib(${i}) = ${fib(i)}`
        list.append(ele)
    }
}

document.getElementById('zahl').addEventListener('keydown', e => { if (e.keyCode === 13) calc(); })