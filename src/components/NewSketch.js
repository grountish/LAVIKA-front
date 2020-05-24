import React from 'react';
import p5 from 'p5';
import 'p5/lib/addons/p5.sound';
import 'p5/lib/addons/p5.dom';
import hhSound from '../samples/hh.wav'
import kSound from '../samples/k.wav'
import o1Sound from '../samples/o1.wav'
import o2Sound from '../samples/o2.wav'
import o3Sound from '../samples/o3.wav'
import o4Sound from '../samples/o4.wav'
import o5Sound from '../samples/o5.wav'
import o6Sound from '../samples/o6.wav'
import sSound from '../samples/s.wav'
import rita from 'rita';


class NewSketch extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current)
    }

    sketch = (p) => {
        const self = this;

        let cnv = null
        let nouns = ['actor', 'gold', 'Painting', 'advertisement', 'grass', 'Parrot', 'afternoon', 'greece', 'Pencil', 'airport', 'guitar', 'Piano', 'ambulance', 'Hair', 'Pillow', 'animal', 'Hamburger', 'Pizza', 'answer', 'Helicopter', 'Planet', 'apple', 'Helmet', 'Plastic', 'army', 'Holiday', 'Portugal', 'australia', 'Honey', 'Potato', 'Balloon', 'Horse', 'Queen', 'Banana', 'Hospital', 'Quill', 'Battery', 'House', 'Rain', 'Beach', 'Hydrogen', 'Rainbow', 'Beard', 'Ice', 'Raincoat', 'Bed', 'Insect', 'Refrigerator', 'Belgium', 'Insurance', 'Restaurant', 'Boy', 'Iron', 'River', 'Branch', 'Island', 'Rocket', 'Breakfast', 'Jackal', 'Room', 'Brother', 'Jelly', 'Rose', 'Camera', 'Jewellery', 'Russia', 'Candle', 'Jordan', 'Sandwich', 'Car', 'Juice', 'School', 'Caravan', 'Kangaroo', 'Scooter', 'Carpet', 'King', 'Shampoo', 'Cartoon', 'Kitchen', 'Shoe', 'China', 'Kite', 'Soccer', 'Church', 'Knife', 'Spoon', 'Crayon', 'Lamp', 'Stone', 'Crowd', 'Lawyer', 'Sugar', 'Daughter', 'Leather', 'Sweden', 'Death', 'Library', 'Teacher', 'Denmark', 'Lighter', 'Telephone', 'Diamond', 'Lion', 'Television', 'Dinner', 'Lizard', 'Tent', 'Disease', 'Lock', 'Thailand', 'Doctor', 'London', 'Tomato', 'Dog', 'Lunch', 'Toothbrush', 'Dream', 'Machine', 'Traffic', 'Dress', 'Magazine', 'Train', 'Easter', 'Magician', 'Truck', 'Egg', 'Manchester', 'Uganda', 'Eggplant', 'Market', 'Umbrella', 'Egypt', 'Match', 'Van', 'Elephant', 'Microphone', 'Vase', 'Energy', 'Monkey', 'Vegetable', 'Engine', 'Morning', 'Vulture', 'England', 'Motorcycle', 'Wall', 'Evening', 'Nail', 'Whale', 'Eye', 'Napkin', 'Window', 'Family', 'Needle', 'Wire', 'Finland', 'Nest', 'Xylophone', 'Fish', 'Nigeria', 'Yacht', 'Flag', 'Night', 'Yak', 'Flower', 'Notebook', 'Zebra', 'Football', 'Ocean', 'Zoo', 'Forest', 'Oil', 'garden', 'Fountain', 'Orange', 'gas', 'France', 'Oxygen', 'girl', 'Furniture', 'Oyster', 'glass', 'garage', 'ghost']
        let hh, k, s, hPhrase, hPat, drums, arrOfSin, mic, speakButton, recordButton;
        let recorder, soundFile, o1, o2, o3, o4, o5, o6, kPat, sPat, o1Pat, o2Pat, o3Pat, o4Pat, o5Pat, o6Pat;
        let kPhrase, sPhrase, o1Phrase, o2Phrase, o3Phrase, o4Phrase, o5Phrase, o6Phrase, bpmCtr, i, ki, sn;

        let state = 0;
        //deleted array of words to replace Chevrolet

        //perDist per instrument
        let perDist = [0, 0, 0, 0, 0, 1]
        let perDistKick = [0, 0, 0, 1, 1, 1]
        let perDistSnare = [0, 0, 0, 0, 0, 0, 0, 1]

        p.touchStarted = () => {
            p.userStartAudio()
        }

        p.setup = () => {

            p.getAudioContext().suspend()

            // CANVAS 
            cnv = p.createCanvas(700, 700)
            self.canvas = cnv
            cnv.mousePressed(p.addIns)
            cnv.parent('#ccc')
            // MIC SETUP
            mic = new p5.AudioIn();
            mic.start();

            ///  speach button
            speakButton = p.createButton('speak')
            speakButton.mousePressed(p.speakWords)
            speakButton.parent('#bcc')

            // get data buton
            let getArticleBtn = p.createButton('get data')
            getArticleBtn.mousePressed(getArticle)
            getArticleBtn.parent('#bcc')
            //record Setup

            recordButton = p.createButton('record')
            recordButton.mousePressed(p.recordSong)
            recorder = new p5.SoundRecorder();
            recorder.setInput(mic);
            soundFile = new p5.SoundFile();
            recordButton.parent('#bcc')
            // LOADINg SOUNDS

            hh = p.loadSound(hhSound, () => {
                drums.loop()
            })
            k = p.loadSound(kSound, () => {
                drums.loop()
            })
            s = p.loadSound(sSound, () => {
                drums.loop()
            })
            o1 = p.loadSound(o1Sound, () => {
                drums.loop()
            })
            o2 = p.loadSound(o2Sound, () => {
                drums.loop()
            })
            o3 = p.loadSound(o3Sound, () => {
                drums.loop()
            })
            o4 = p.loadSound(o4Sound, () => {
                drums.loop()
            })
            o5 = p.loadSound(o5Sound, () => {
                drums.loop()
            })
            o6 = p.loadSound(o6Sound, () => {
                drums.loop()
            })

            // PATTERNS

            hPat = [1, 0, 1, 0]
            kPat = [1, 0, 1, 0]
            sPat = [0, 0, 0, 1]
            o1Pat = [0, 0, 0, 0]
            o2Pat = [0, 0, 0, 0]
            o3Pat = [0, 0, 0, 0]
            o4Pat = [0, 0, 0, 0]
            o5Pat = [0, 0, 0, 0]
            o6Pat = [0, 0, 0, 0]

            arrOfSin = [o1Pat, o2Pat, o3Pat, o4Pat, o5Pat, o6Pat]

            // PHRASES
            hPhrase = new p5.Phrase('hh', (time) => {
                hh.play(time)
            }, hPat)
            kPhrase = new p5.Phrase('k', (time) => {
                k.play(time)
            }, kPat)
            sPhrase = new p5.Phrase('s', (time) => {
                s.play(time)
            }, sPat)
            o1Phrase = new p5.Phrase('o1', (time) => {
                o1.play(time)
            }, o1Pat)
            o2Phrase = new p5.Phrase('o2', (time) => {
                o2.play(time)
            }, o2Pat)
            o3Phrase = new p5.Phrase('o3', (time) => {
                o3.play(time)
            }, o3Pat)
            o4Phrase = new p5.Phrase('o4', (time) => {
                o4.play(time)
            }, o4Pat)
            o5Phrase = new p5.Phrase('o5', (time) => {
                o5.play(time)
            }, o5Pat)
            o6Phrase = new p5.Phrase('o6', (time) => {
                o6.play(time)
            }, o6Pat)

            // ADDINg PHRASES
            drums = new p5.Part()
            self.drums = drums
            drums.addPhrase(hPhrase)
            drums.addPhrase(sPhrase)
            drums.addPhrase(kPhrase)
            drums.addPhrase(o1Phrase)
            drums.addPhrase(o2Phrase)
            drums.addPhrase(o3Phrase)
            drums.addPhrase(o4Phrase)
            drums.addPhrase(o5Phrase)
            drums.addPhrase(o6Phrase)

            // SET BPM

            bpmCtr = p.createSlider(30, 140, 60, 1)
            bpmCtr.input(() => {
                drums.setBPM(bpmCtr.value())
            })
            drums.setBPM('60')

            bpmCtr.parent('#bcc')
            ////////////////////////
          
        }

        p.addIns = () => {
            let chosen = p.random(arrOfSin)
            i = p.floor(p.random(perDist))
            let ranC = p.random(255) // piks a random value between 0 and 255
            ki = p.floor(p.random(perDistKick))
            sn = p.floor(p.random(perDistSnare))
            if (p.mouseX < p.width / 2 && p.mouseY < p.height / 2) { // Left - Up -- Hh
                p.fill(123, 12, 234) // fills the color of the ellipse
                p.ellipse(p.mouseX, p.mouseY, ranC, ranC) // 
                hPat.push(i)
                console.log(`h added ${hPat}`);
            } else if (p.mouseX > p.width / 2 && p.mouseY < p.height / 2) { // Right - Up -- Kick
                p.fill(23, 212, 134)
                p.ellipse(p.mouseX, p.mouseY, ranC, ranC)
                kPat.push(ki)
                console.log(`k added ${kPat}`);
            } else if (p.mouseX < p.width / 2 && p.mouseY > p.height / 2) { // Left - Down - Snare
                p.fill(223, 12, 134)
                p.ellipse(p.mouseX, p.mouseY, ranC, ranC)
                sPat.push(sn)
                console.log(`s added ${sPat}`);
            } else if (p.mouseX > p.width / 2 && p.mouseY > p.height / 2) { // right - Down - synths
                p.fill(223, 222, 34)
                p.ellipse(p.mouseX, p.mouseY, ranC, ranC)
                chosen.push(i)
                console.log(`sint added ${chosen}`);
            }
        }

        p.keyPressed = () => {
            if (p.key === "º") {
                if (hh.isLoaded() && k.isLoaded() && s.isLoaded()) {
                    if (!drums.isPlaying) {
                        drums.loop()
                    } else {
                        drums.pause()
                    }
                }
            }
        }

        p.draw = () => {
            if(!self.state.isLoading){
                self.setState({
                    isLoading:false
                })
            } else {
            p.frameRate(17);
            // get the overall volume (between 0 and 1.0)
            let vol = mic.getLevel() * 25;
            p.fill(0);
            p.noStroke();
            p.smooth()
            // Draw an ellipse with height based on volume
            let h = p.map(vol, 0, 1, p.random(1233), 0);
            p.ellipse((p.width / 1.2) * vol, h - 25, vol * 400, vol * 400);
            drawPointy(100);
            drawPointy(10);
            drawArc();
            p.background(vol * 30, 7);

            function drawPointy(weigh) {
                p.stroke(vol * 200);
                p.smooth()
                p.strokeWeight(p.random(weigh));
                p.point(p.random(p.height * 1.6), p.random(p.width * 1.6));
            }

            function drawArc() {
                p.arc(p.random(2000), p.random(2000), vol * 200, vol * 444, vol * 444, p.HALF_PI);
                p.fill(p.random());
                p.noStroke();
                p.arc(p.random(vol * 2000), p.random(400), vol * 444, vol * 444, p.HALF_PI, p.PI);
                p.arc(vol * 4400, p.random(300), 700, 70, p.PI, p.PI + p.QUARTER_PI);
                p.arc(vol * 444, vol * 444, vol * 444, vol * 444, p.PI + p.QUARTER_PI, p.TWO_PI);
            }
        }
        }

        const getArticle = async () => {
            let poem = ''
            let articleRaw = `http://poetrydb.org//author/emerson`
            const response = await fetch(articleRaw);
            const article1 = await response.json();
            let lines = p.random(article1).lines
            lines.forEach(x => poem += x)
            let rs = new rita.RiString(poem)
            let words = rs.words()
            let pos = rs.pos()

            let result = ' '
            for (let i = 0; i < words.length; i++) {
                let word = words[i]
                if (/nn.*/.test(pos[i])) {
                    word = rita.lexicon.randomWord(pos[i])
                    if (word === 'chevrolet') {
                        word = p.random(nouns)
                    }
                }
                result += word
                result += '  '
            }
            let parr = p.createP(result)
            self.parr = parr
            parr.id('parr')
            // let wordsSeparated = []
            // wordsSeparated = rita.tokenize(result)

        };


        p.recordSong = () => {

            if (state === 0 && mic.enabled) {
                recorder.record(soundFile);
                p.background(190, 0, 40);
                p.text('Recording!', p.width / 2, p.height / 2);
                state++;
            } else if (state === 1) {
                p.background(30, 155, 0); // Change 4 better colors
                recorder.stop();
                state++;
            } else if (state === 2) {
                //soundFile.play(); // play the result! // TRY FETCH TO SERVER OR TO CLOUDINARY!
                p.save(soundFile, 'mySong.wav');
                state++;

            }
        }
    }

	componentWillUnmount() {
        this.canvas.remove();
        this.drums.pause();
        this.parr.remove()

	}

    render() {
        return (
        <>
        { this.state.isLoading 
         ? ''
         : <div id = "canvas" className= "canvas" ref = {this.myRef}/>
         }
         <div className="drum-container">
         <div className="canvasContainer" id="ccc"></div>
         <div className="buttonContainer" id="bcc"></div>
        </div>
        </>
        )
    }
}


export default NewSketch