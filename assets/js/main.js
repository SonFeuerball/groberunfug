
const container = document.getElementById('container')

fetch('https://api.tronalddump.io/tag/')
    .then(response => response.json())
    .then(tags => {
        console.log(tags._embedded.tag)
        let tagArray = tags._embedded.tag
        console.log(tagArray)
        tagArray.forEach(element => {
            let button = document.createElement('button')
            button.innerHTML = element.value
            container.appendChild(button)

            //value from click?!
            button.addEventListener('click', (event) => {
                let input = button.innerHTML
                console.log(input)
                fetchDonaldNote(input)
                fetchAnswer(input)
            })
        });
    })

function fetchDonaldNote(input) {
    fetch(`https://api.tronalddump.io/search/quote?tag=${input}`)
        .then(response => response.json())
        .then(quotes => console.log(quotes._embedded.quotes[0].value))
}

function fetchAnswer(input) {

    fetch(giveAnswerUrl(input), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => {
            return response.json()
        })
        .then(text => console.log(text))
}

function giveAnswerUrl(input) {

    const tronald = 'Donald'
    // let input = input

    const urlEnding = [
        `asshole/${input}`,
        `back/${tronald}/${input}`,
        `bag/${input}`,
        `bucket/${input}`,
        `blackadder/${tronald}/${input}`,
        `cocksplat/${tronald}/${input}`,
        `cup/${input}`,
        `dense/${input}`,
        `deraadt/${tronald}/${input}`,
        `family/${input}`,
        `fascinating/${input}`,
        `ftfy/${input}`,
        `fyyff/${input}`,
        `holygrail/${input}`,
        `horse/${input}`,
        `immensity/${input}`,
        `ing/${tronald}/${input}`,
        `keep/${tronald}/${input}`,
        `look/${tronald}/${input}`,
        `lowpoly/${input}`,
        `madison/${tronald}/${input}`,
        `maybe/${input}`,
        `no/${input}`,
        `nugget/${tronald}/${input}`,
        `outside/${tronald}/${input}`,
        `ratsarse/${input}`,
        `retard/${input}`,
        `shutup/${tronald}/${input}`,
        `thanks/${input}`,
        `think/${tronald}/${input}`,
        `waste/${tronald}/${input}`,
        `yoda/${tronald}/${input}`,
        `zero/${input}`,
        `ballmer/${tronald}/${tronald}/${input}`,
        `caniuse/twitter/${input}`
    ]

    let baseUrl = 'https://www.foaas.com/'
    let endUrl = urlEnding[Math.floor(Math.random() * urlEnding.length)]
    return baseUrl + endUrl
}