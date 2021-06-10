//sidebar
let sidebar = document.getElementById("mySidebar");
let wrapumalles = document.getElementById("wrapumalles");
let navButton = document.getElementById("navButton");
let openToggle = false;
//other stuff
const container = document.getElementById('container')

const twitterTronald = document.getElementById('twitterTronald')
const answerName = document.getElementById('answerName')
const answerTwitterName = document.getElementById('answerTwitterName')
const twitterAnswer = document.getElementById('twitterAnswer')

fetch('https://api.tronalddump.io/tag/')
    .then(response => response.json())
    .then(tags => {
        console.log(tags._embedded.tag)
        let tagArray = tags._embedded.tag
        console.log(tagArray)
        tagArray.forEach(element => {
            let link = document.createElement('a')
            link.innerHTML = element.value
            sidebar.appendChild(link)

            //value from click?!
            link.addEventListener('click', (event) => {
                let input = link.innerHTML
                console.log(input)
                fetchDonaldNote(input)
                fetchAnswer(input)
            })
        });
    })

function fetchDonaldNote(input) {
    fetch(`https://api.tronalddump.io/search/quote?tag=${input}`)
        .then(response => response.json())
        .then(quotes => {
            let twitterTronaldText = quotes._embedded.quotes[0].value
            console.log(twitterTronaldText)
            twitterTronald.innerHTML = twitterTronaldText
        })
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
        .then(text => {
            console.log(text)
            answerName.innerHTML = input
            answerTwitterName.innerHTML = `@real${input}`.replace(" ", "")
            twitterAnswer.innerHTML = "schreibt..."
            setTimeout(() => {
                twitterAnswer.innerHTML = text.message
            }, 2000)
        })
}

function giveAnswerUrl(input) {

    const tronald = 'Donald'

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

//sidebar
navButton.addEventListener('click', function () {
    if (openToggle) {
        closeNav();
    } else {
        openNav();
    }
});
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    sidebar.style.width = "100vw";
    wrapumalles.style.marginLeft = "0vw";
    openToggle = true;
}
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    sidebar.style.width = "0";
    wrapumalles.style.marginLeft = "0";
    openToggle = false;
}
window.addEventListener('click', function (event) {
    console.log("window clicked");
    if (openToggle) {
        console.log("open sidebar");
        if (event.target != sidebar && event.target != navButton) {
            console.log("outside sidebar");
            closeNav();
        }
    }
});