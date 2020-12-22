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
    music.playTone(523, music.beat(BeatFraction.Quarter))
    lang += 1
    if (lang > 6) {
        lang = 0
    }
    basic.showString("" + (langs[lang]))
    if (lang == 6) {
        MakeX()
    }
})
function Krule () {
    return Krules[randint(0, Krules.length - 1)]
}
function vrule () {
    return vulr[randint(0, vulr.length - 1)]
}
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(131, music.beat(BeatFraction.Whole))
    basic.showString("" + (NewWord))
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Half))
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
    if (6 == lang) {
        basic.showString("" + (Make_Word(Xrule(), Xcon, Xvow)))
    }
})
function Thinking () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onGesture(Gesture.Shake, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    basic.showString("" + (SNT))
})
function nextword () {
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
    if (6 == lang) {
        basic.showString("" + (Make_Word(Xrule(), Xcon, Xvow)))
    }
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("C D E F G F E C ", 120)
    SNT = ""
    for (let index = 0; index < randint(2, 5); index++) {
        nextword()
        SNT = "" + SNT + " " + NewWord
    }
    SNT = "" + SNT + Punct.substr(randint(0, Punct.length - 1), 1)
    basic.showString("" + (SNT))
})
function erule () {
    return engr[randint(0, engr.length - 1)]
}
function MakeX () {
    Xvlist = ["eeeeeeeaaaaaaaaa", "aaaaeeeeiiiooooouuuyy", "oooooaaaaaaaa"]
    XClist = ["grgggrrrqqqkkkpppxxx", "llllssrrrmmmnnnzzzz", "bptbbbtttpkkjjj"]
    Xvow = Xvlist[randint(0, 2)]
    Xcon = XClist[randint(0, 2)]
    Thinking()
    Xrules = []
    for (let index = 0; index <= randint(3, 5); index++) {
        xrx = ""
        for (let index2 = 0; index2 <= randint(3, 5); index2++) {
            if (randint(0, 4) > 2) {
                xrx = "" + xrx + "C"
            } else {
                xrx = "" + xrx + "V"
            }
            Xrules.push(xrx)
        }
    }
    Thinking()
}
function mrule () {
    return mandor[randint(0, mandor.length - 1)]
}
function Xrule () {
    return Xrules[randint(0, Xrules.length - 1)]
}
let xrx = ""
let XClist: string[] = []
let Xvlist: string[] = []
let SNT = ""
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
let Punct = ""
let romv = ""
let mandor: string[] = []
let mandoc = ""
let mandov = ""
let Krules: string[] = []
let Kvowel = ""
let Kconst = ""
let lang = 0
let Xrules: string[] = []
let Xvow = ""
let Xcon = ""
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
langs = ["K", "E", "R", "V", "W", "M", "X"]
Xcon = ""
Xvow = ""
Xrules = [" "]
lang = 0
Kconst = "bcDgHjlmnpqQStvwy'''"
Kvowel = "aeouyI"
Krules = ["CVVC", "CVC", "CCVVC", "CVVC", "CV"]
mandov = "ouaaoaaaaeaeeeauiueaaeaeeaeoaeeaoaeooeaeaaeaeeeaeueeaieaaaoeeieiioaiaiaiae"
mandoc = "slstryshlntryshlntddthnhntcrcrtryshshtryshlnsh'''''''rslrl't'tdtd'tsh'hnshhn'tsh'cshk'tlsr'chkrvrrsrmsrmrdsnrrnrnrmjycrmjyc"
mandor = ["CVVC", "CVCVC", "VCCVC", "CVVVVCV", "CVCCV"]
romv = "'eiueeeiia'''"
Punct = "!!?.."
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
