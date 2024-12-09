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
    if (true) {
        correctState = 0
    }
    return correctState
}
function randomcity () {
    cityfound = allcities._pickRandom()
}
let correctState = 0
let florida: string[] = []
let allcities: string[] = []
let alabama: number[] = []
let cityfound = ""
setupData()
randomcity()
let statetofind = game.askForString("Is" + cityfound + "in Florida?")
find(alabama, statetofind)
