

const imgs = document.querySelectorAll('.img')

const img = document.querySelector('.img1')

anime({
    targets: '.img',
    translateY: -50,
    direction: 'alternate',
    loop: true,
    easing: 'cubicBezier(.1, .05, .1, .3)'
})

const ell = document.querySelector('#ell')
const wallet = document.querySelector('#input-wallet')
const points = document.querySelector('#points')

localStorage.setItem('wallet', JSON.stringify([{ address: '47QqZexAkqBY74qnHWYguGBXDE5GzcWWjmQdLxe8JreS', points: 1000 }]))

if (!localStorage.getItem('wallet')) {
    localStorage.setItem('wallet', JSON.stringify([{ address: '47QqZexAkqBY74qnHWYguGBXDE5GzcWWjmQdLxe8JreS', points: 1000 }]))
}


ell.onclick = () => {
    const walletValue = wallet.value.trim()
    let exist = false


    if (!localStorage.hasOwnProperty('wallet')) {
        if (walletValue === "") return
        localStorage.setItem('wallet', JSON.stringify([{ address: walletValue, points: 0 }]))

        points.innerHTML = 0
        return
    }

    const data = JSON.parse(localStorage.getItem('wallet'))


    data.forEach(item => {
        if (item.address === walletValue) {
            // item.points = item.points + 1;

            localStorage.setItem('wallet', JSON.stringify(data))
            points.innerHTML = item.points

            exist = true
            return
        }
    })

    if (exist) return

    data.push({ address: walletValue, points: 0 })
    points.innerHTML = 0
    localStorage.setItem('wallet', JSON.stringify(data))

}