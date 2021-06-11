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
const answerProfilePic = document.getElementById('answerProfilePic')

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

            setAnswerProfilePic(input)

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
    const tronaldEnding = [
        `awesome/${input}`,
        `cool/${input}`,
        `idea/${input}`,
        `legend/${tronald}/${input}`,
        `rockstar/${tronald}/${input}`,
        `dalton/${tronald}/${input}`,
        `yeah/${input}`
    ]

    let baseUrl = 'https://www.foaas.com/'
    let endUrl

    if (input == "Donald Trump") {
        endUrl = tronaldEnding[Math.floor(Math.random() * tronaldEnding.length)]
    } else {
        endUrl = urlEnding[Math.floor(Math.random() * urlEnding.length)]
    }
    return baseUrl + endUrl
}

function setAnswerProfilePic(input) {
    switch (input) {
        case "Barack Obama":
            answerProfilePic.src = 'assets/img/barack.jpeg'
            break;
        case "Women":
            answerProfilePic.src = 'assets/img/women.jpg'
            break;
        case "Marco Rubio":
            answerProfilePic.src = 'assets/img/marcorubio.jpeg'
            break;
        case "Muammar Gaddafi":
            answerProfilePic.src = 'assets/img/muammargaddafi.jpeg'
            break;
        case "Bobby Jindal":
            answerProfilePic.src = 'assets/img/bobbyjindal.jpg'
            break;
        case "Rick Perry":
            answerProfilePic.src = 'assets/img/rickperry.jpeg'
            break;
        case "President Obama":
            answerProfilePic.src = 'assets/img/barack.jpeg'
            break;
        case "Scott Walker":
            answerProfilePic.src = 'assets/img/scottwalker.jpeg'
            break;
        case "John McCain":
            answerProfilePic.src = 'assets/img/johnmccain.jpeg'
            break;
        case "Hillary Clinton":
            answerProfilePic.src = 'assets/img/hillaryclinton.jpeg'
            break;
        case "Arianna Huffington":
            answerProfilePic.src = 'assets/img/ariannahuffington.jpeg'
            break;
        case "Jeb Bush":
            answerProfilePic.src = 'assets/img/jebbushs.jpeg'
            break;
        case "Neil Young":
            answerProfilePic.src = 'assets/img/neil.jpeg'
            break;
        case "History":
            answerProfilePic.src = 'assets/img/history.jpg'
            break;
        case "Chris Christie":
            answerProfilePic.src = 'assets/img/chrischristie.jpeg'
            break;
        case "Muslims":
            answerProfilePic.src = 'assets/img/muslims.png'
            break;
        case "Apologies":
            answerProfilePic.src = 'assets/img/apologies.png'
            break;
        case "Ben Carson":
            answerProfilePic.src = 'assets/img/bencarson.jpg'
            break;
        case "Lindsey Graham":
            answerProfilePic.src = 'assets/img/linseygraham.jpeg'
            break;
        case "Ivanka Trump":
            answerProfilePic.src = 'assets/img/ivankatrump.jpeg'
            break;
        case "Megyn Kelly":
            answerProfilePic.src = 'assets/img/megynkelly.jpeg'
            break;
        case "Ted Cruz":
            answerProfilePic.src = 'assets/img/tedcruz.jpg'
            break;
        case "Donald Trump":
            answerProfilePic.src = 'assets/img/dumpy.png'
            break;
        case "Girlfriends":
            answerProfilePic.src = 'assets/img/girlfriends.jpg'
            break;
        case "John Kasich":
            answerProfilePic.src = 'assets/img/john.jpeg'
            break;
        case "Money":
            answerProfilePic.src = 'assets/img/money.jpeg'
            break;
        case "Bette Midler":
            answerProfilePic.src = 'assets/img/bettemidler.jpeg'
            break;
        case "Bernie Sanders":
            answerProfilePic.src = 'assets/img/berniesanders.jpeg'
            break;
        default:
            answerProfilePic.src = 'assets/img/dumpy.png'
            break;

    }
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