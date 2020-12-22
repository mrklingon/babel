function rrule () {
    return romr[randint(0, romr.length - 1)]
}
function Make_Word (Rule: string, Cons: string, Vows: string) {
    NewWord = ""
    for (let index = 0; index <= Rule.length - 1; index++) {
        if ("C" == Rule.charAt(index)) {
            NewWord = "" + NewWord + consonant(Cons)
        } else {
            NewWord = "" + NewWord + vowel(Vows)
        }
    }
    return NewWord
}
function wrule () {
    return wookr[randint(0, wookr.length - 1)]
}
function vowel (text: string) {
    return text.charAt(randint(0, text.length - 1))
}
function consonant (text: string) {
    return text.charAt(randint(0, text.length - 1))
}
input.onButtonPressed(Button.A, function () {
    lang += 1
    if (lang > 5) {
        lang = 0
    }
    basic.showString("" + (langs[lang]))
})
function Krule () {
    return Krules[randint(0, Krules.length - 1)]
}
function vrule () {
    return vulr[randint(0, vulr.length - 1)]
}
input.onButtonPressed(Button.AB, function () {
    basic.showString(NewWord)
})
input.onButtonPressed(Button.B, function () {
    if (0 == lang) {
        basic.showString("" + (Make_Word(Krule(), Kconst, Kvowel)))
    }
    if (1 == lang) {
        basic.showString("" + (Make_Word(erule(), engc, engv)))
    }
    if (2 == lang) {
        basic.showString("" + (Make_Word(rrule(), romc, romv)))
    }
    if (4 == lang) {
        basic.showString("" + (Make_Word(wrule(), wookc, wookv)))
    }
    if (5 == lang) {
        basic.showString("" + (Make_Word(mrule(), mandoc, mandov)))
    }
    if (3 == lang) {
        basic.showString("" + (Make_Word(vrule(), vulc, vulv)))
    }
})
function erule () {
    return engr[randint(0, engr.length - 1)]
}
function mrule () {
    return mandor[randint(0, mandor.length - 1)]
}
let NewWord = ""
let wookr: string[] = []
let wookc = ""
let wookv = ""
let vulr: string[] = []
let vulc = ""
let vulv = ""
let engr: string[] = []
let engc = ""
let engv = ""
let romr: string[] = []
let romc = ""
let romv = ""
let mandor: string[] = []
let mandoc = ""
let mandov = ""
let Krules: string[] = []
let Kvowel = ""
let Kconst = ""
let lang = 0
let langs: string[] = []
images.createBigImage(`
    # . # . . . . # . .
    . # . . . # . . # .
    . # . # . . . . . #
    . . . . # . . . # .
    . . . . # . . # . .
    `).scrollImage(1, 200)
images.createBigImage(`
    # . # . . . . . . .
    . # . . . . . . . .
    . # . # . . . . . .
    . . . . # . . . . .
    . . . . # . . . . .
    `).scrollImage(1, 200)
langs = ["K", "E", "R", "V", "W", "M"]
lang = 0
Kconst = "bcDgHjlmnpqQStvwy'''"
Kvowel = "aeouyI"
Krules = ["CVVC", "CVC", "CCVVC", "CVVC", "CV"]
mandov = "ouaaoaaaaeaeeeauiueaaeaeeaeoaeeaoaeooeaeaaeaeeeaeueeaieaaaoeeieiioaiaiaiae"
mandoc = "slstryshlntryshlntddthnhntcrcrtryshshtryshlnsh'''''''rslrl't'tdtd'tsh'hnshhn'tsh'cshk'tlsr'chkrvrrsrmsrmrdsnrrnrnrmjycrmjyc"
mandor = ["CVVC", "CVCVC", "VCCVC", "CVVVVCV", "CVCCV"]
romv = "'eiueeeiia'''"
romc = "skfhvhlnvhdhmnhl'rh"
romr = ["CVCCV", "CVVCV", "CVVVCCC", "CVVCV", "CVVCCV"]
engv = "aeiouy"
engc = "bcdfghjklmnpqrstvwxz"
engr = ["CVVC", "CVC", "VCV", "VC", "VCVVC"]
vulv = "'iaei'uaiyaoia"
vulc = "whltrkltkt'khthtrvttsnzh"
vulr = ["CVCVCV", "CVCV", "CCV", "CVVCV", "CVVCCVCV"]
wookv = "OUA"
wookc = "WWRRRHHHWWWRR"
wookr = ["CVVVVC", "CVC", "VVCV", "VCVVVVC", "VCVVC"]
basic.forever(function () {
	
})
