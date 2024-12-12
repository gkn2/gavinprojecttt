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
function find (cities: string[], targetcity: string) {
    infl = "No"
    for (let value of cities) {
        if (targetcity.compare(value) == 0) {
            infl = "Yes"
            break;
        }
    }
    return infl
}
info.onScore(10, function () {
    game.gameOver(true)
})
function Check_Answer () {
    if (useranswer == infl) {
        game.splash("Correct")
        info.changeScoreBy(1)
    } else {
        game.splash("Incorrect")
        game.gameOver(false)
    }
}
function randomcity () {
    cityfound = allcities._pickRandom()
}
let infl = ""
let allcities: string[] = []
let florida: string[] = []
let useranswer = ""
let cityfound = ""
info.setScore(0)
setupData()
for (let index = 0; index < 10; index++) {
    randomcity()
    story.printDialog("Is " + cityfound + " in Florida?", 80, 30, 50, 150, 15, 1, story.TextSpeed.Slow)
    story.showPlayerChoices("Yes", "No")
    useranswer = story.getLastAnswer()
    find(florida, cityfound)
    Check_Answer()
}
