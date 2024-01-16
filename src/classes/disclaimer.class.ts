import { Button } from "./ui.button.class"

export class Disclaimer {
    disclaimer: UIImage
    canvas: UIShape
    buttons: any
    constructor(canvas: UIShape) {
        log('Disclaimer class');
        this.canvas = canvas
        this.disclaimer = new UIImage(this.canvas, new Texture('images/ubs_disclaimer_ui.png'))
        this.disclaimer.sourceHeight = 720
        this.disclaimer.sourceWidth = 1024
        this.disclaimer.height = '80%'
        this.disclaimer.width = '55%'
        this.disclaimer.visible = true
        this.disclaimer.hAlign = 'center'
        this.disclaimer.vAlign = 'center'
        this.disclaimer.positionX = -45
        this.disclaimer.positionY = 25
        this.disclaimer.visible = true
        this.setButtons()
    }
    private setButtons() {
        this.buttons = {
            continue: new Button(
                this.canvas,
                'images/ubs_disclaimer_continue_button.png',
                '15%',
                '20%',
                154,
                266,
                '15%',
                '-26.5%',
                'center',
                'center',
                () => {
                    this.buttons.continue.visible = false
                    this.disclaimer.visible = false
                },
                true
            ),
        }
    }
}