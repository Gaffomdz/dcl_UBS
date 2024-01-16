import { Disclaimer } from "./disclaimer.class"
import { Button } from "./ui.button.class"
import { __1a, __1b, __1c, __1d, __2a, __2b, __3a, __3b, __3c, __4a, __4b } from "src/data/ui.data"
export class UI {
    canvas: UICanvas
    disclaimer: Disclaimer
    buttons: any
    private script = 1
    uiPlaceholder: any

    constructor() {
        this.canvas = new UICanvas()
        this.disclaimer = new Disclaimer(this.canvas)

        this.uiPlaceholder = new UIImage(this.canvas, new Texture(''))
        this.uiPlaceholder.sourceHeight = 236
        this.uiPlaceholder.sourceWidth = 621
        this.uiPlaceholder.height = '30%'
        this.uiPlaceholder.width = '40%'
        this.uiPlaceholder.hAlign = 'center'
        this.uiPlaceholder.vAlign = 'center'
        this.uiPlaceholder.positionX = -45
        this.uiPlaceholder.positionY = -255
        this.uiPlaceholder.visible = false

        this.buttons = {
            __1Next: new Button(
                this.canvas,
                'images/npcs/next.png',
                '1%',
                '3%',
                24,
                14,
                '14%',
                '-52%',
                'center',
                'right',
                () => {
                    this.script++
                    this.update('__1')
                }
            ),
            __2Next: new Button(
                this.canvas,
                'images/npcs/next.png',
                '1%',
                '3%',
                24,
                14,
                '14%',
                '-52%',
                'center',
                'right',
                () => {
                    this.script++
                    this.update('__2')
                }
            ),
            __3Next: new Button(
                this.canvas,
                'images/npcs/next.png',
                '1%',
                '3%',
                24,
                14,
                '14%',
                '-52%',
                'center',
                'right',
                () => {
                    this.script++
                    this.update('__3')
                }
            ),
            __4Next: new Button(
                this.canvas,
                'images/npcs/next.png',
                '1%',
                '3%',
                24,
                14,
                '14%',
                '-52%',
                'center',
                'right',
                () => {
                    this.script++
                    this.update('__4')
                }
            ),
        }
    }
    public showUI(id: string) {
        this.uiPlaceholder.visible = true
        switch (id) {
            case '__1':
                this.buttons.__1Next.visible = true
                break
            case '__2':
                this.buttons.__2Next.visible = true
                break
            case '__3':
                this.buttons.__3Next.visible = true
                break
            case '__4':
                this.buttons.__4Next.visible = true
                break
        }
    }
    public update(id: string) {
        switch (id) {
            case '__1':
                if (this.script === 1) {
                    this.uiPlaceholder.source = __1a.uiSrc;
                } else if (this.script === 2) {
                    this.uiPlaceholder.source = __1b.uiSrc;
                } else if (this.script === 3) {
                    this.uiPlaceholder.source = __1c.uiSrc;
                } else if (this.script === 4) {
                    this.uiPlaceholder.source = __1d.uiSrc;
                } else {
                    this.uiPlaceholder.visible = false;
                    this.buttons.__1Next.visible = false;
                    this.script = 1;
                }
                break;
            case '__2':
                if (this.script === 1) {
                    this.uiPlaceholder.source = __2a.uiSrc;
                } else if (this.script === 2) {
                    this.uiPlaceholder.source = __2b.uiSrc;
                } else {
                    this.uiPlaceholder.visible = false;
                    this.buttons.__2Next.visible = false;
                    this.script = 1;
                }
                break;
            case '__3':
                if (this.script === 1) {
                    this.uiPlaceholder.source = __3a.uiSrc;
                } else if (this.script === 2) {
                    this.uiPlaceholder.source = __3b.uiSrc;
                } else if (this.script === 3) {
                    this.uiPlaceholder.source = __3c.uiSrc;
                } else {
                    this.uiPlaceholder.visible = false;
                    this.buttons.__3Next.visible = false;
                    this.script = 1;
                }
                break;
            case '__4':
                if (this.script === 1) {
                    this.uiPlaceholder.source = __4a.uiSrc;
                } else if (this.script === 2) {
                    this.uiPlaceholder.source = __4b.uiSrc;
                } else {
                    this.uiPlaceholder.visible = false;
                    this.buttons.__4Next.visible = false;
                    this.script = 1;
                }
                break;
                
        }
    }
}