const tronald = 'Donald'
let input = 'test'

const urlEnding = [
    `back/`,
    `blackadder/`
]

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
    let baseUrl = 'https://www.foaas.com/'
    let endUrl = urlEnding[Math.floor(Math.random() * urlEnding.length)] + tronald + "/" + input

    fetch(baseUrl + endUrl, {
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