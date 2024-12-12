function setupData () {
    allcities = [
    "abbeville",
    "acworth",
    "adairsville",
    "adel",
    "adrian",
    "ailey",
    "alamo",
    "alapaha",
    "albany",
    "aldora",
    "allenhurst",
    "allentown",
    "alma",
    "alpharetta",
    "alston",
    "alto",
    "ambrose",
    "americus",
    "andersonville",
    "arabi",
    "aragon",
    "arcade",
    "argyle",
    "arlington",
    "arnoldville",
    "ashburn",
    "athens",
    "atlanta",
    "attapulgus",
    "auburn",
    "augusta",
    "austell",
    "avalon",
    "avera",
    "avondale estates",
    "alachua",
    "alford",
    "altamonte springs",
    "altha",
    "anna maria",
    "apalachicola",
    "apopka",
    "arcadia",
    "archer",
    "astatula",
    "atlantic beach",
    "atlantis",
    "auburndale",
    "aventura",
    "avon park"
    ]
    florida = [
    "alachua",
    "alford",
    "altamonte springs",
    "altha",
    "anna maria",
    "apalachicola",
    "apopka",
    "arcadia",
    "archer",
    "astatula",
    "atlantic beach",
    "atlantis",
    "auburndale",
    "aventura",
    "avon park"
    ]
}
function find (cities: any[], city: string) {
    for (let value of florida) {
        if (cityfound.compare(value) == 0 && controller.A.isPressed()) {
            message = "Correct"
            break;
        } else if (cityfound.compare(value) == 1 && controller.B.isPressed()) {
            message = "Incorrect"
            break;
        }
    }
    game.splash(message)
}
function randomcity () {
    cityfound = allcities._pickRandom()
}
let message = ""
let florida: string[] = []
let allcities: string[] = []
let cityfound = ""
setupData()
randomcity()
game.splash("For Your Response: \"A\" button = YES  and  \"B\" button = NO ")
pause(150)
let statetofind = game.askForString("Is " + cityfound + " in Florida?")
