function setupData () {
    allcities = [
    "Abbeville",
    "Acworth",
    "Adairsville",
    "Adel",
    "Adrian",
    "Ailey",
    "Alamo",
    "Alapaha",
    "Albany",
    "Aldora",
    "Allenhurst",
    "Allentown",
    "Alma",
    "Alpharetta",
    "Alston",
    "Alto",
    "Ambrose",
    "Americus",
    "Andersonville",
    "Arabi",
    "Aragon",
    "Arcade",
    "Argyle",
    "Arlington",
    "Arnoldville",
    "Ashburn",
    "Athens",
    "Atlanta",
    "Attapulgus",
    "Auburn",
    "Augusta",
    "Austell",
    "Avalon",
    "Avera",
    "Avondale Estates",
    "Alachua",
    "Alford",
    "Altamonte Springs",
    "Altha",
    "Anna Maria",
    "Apalachicola",
    "Apopka",
    "Arcadia",
    "Archer",
    "Astatula",
    "Atlantic Beach",
    "Atlantis",
    "Auburndale",
    "Aventura",
    "Avon Park"
    ]
    florida = [
    "Alachua",
    "Alford",
    "Altamonte Springs",
    "Altha",
    "Anna Maria",
    "Apalachicola",
    "Apopka",
    "Arcadia",
    "Archer",
    "Astatula",
    "Atlantic Beach",
    "Atlantis",
    "Auburndale",
    "Aventura",
    "Avon Park"
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
game.splash("Welcome to", "Florida City Guesser!")
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
