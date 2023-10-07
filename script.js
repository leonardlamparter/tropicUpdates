setTimeout(() => {
    document.body.hidden = false
    document.querySelector('html').style.backgroundImage = "none";
}, 0)


var threats = [
    [
        ["Bermuda", "East USA", "Canada"]
    ],
    {
        "Philippe" : ["Bermuda", "East USA", "Canada"]
    }
]

const username = location2.attributes["usrnm"]
const loc = location2.attributes["loc"]

if (username != undefined && loc != undefined) {
    var threatsToLoc = 0
    threats[0].forEach(stormthreats => {
        threatsToLoc += (stormthreats.includes(loc) ? 1 : 0) 
    })

    document.querySelectorAll("[usrloc]").forEach(elm => {
        elm.innerHTML = elm.innerHTML.toString()
            .replaceAll("--username--", username)
            .replaceAll("--threats--", threatsToLoc)
            .replaceAll("--location--", loc)
            .replaceAll("--phillipeIsThreat--", (threats[1].Philippe.includes(loc) ? `Threat to ${loc}` : `No Threat To ${loc}`))
    })
} else {
    document.body.innerHTML = "<div storm index last><h1>You are not signed in <h1><a href='./signin'><button>Sign In</button></a></div>"
}

// ?usrnm=Delvin&loc=The%20USVI