import { UI } from './ui.class'

export class NPC extends Entity {
  private ui: UI
  private id: string
  constructor(ui: UI, model: string, position: Vector3, rotation: Quaternion, id: string) {
    super()
    
    this.ui = ui
    this.id = id
    this.addComponent(new GLTFShape(model))
    this.addComponent(new Animator())
    this.addComponent(new Billboard(false,true,false))
    this.getComponent(Animator).addClip(new AnimationState("idle"))
    this.getComponent(Animator).getClip('idle').play(true)
    this.getComponent(Animator).getClip('idle').looping = true
    this.addComponent(
      new Transform({
        position: position,
        rotation: rotation,
        scale: new Vector3(1, 1, 1)
      })
    )
    this.addComponentOrReplace(new OnPointerDown(()=>{
        this.onClick()
    }))
  }
  onClick() {
    this.ui.update(this.id)
    this.ui.showUI(this.id)
    this.getComponent(Animator).addClip(new AnimationState("talking"))
    this.getComponent(Animator).getClip('talking').play(true)
    this.getComponent(Animator).getClip('talking').looping = true
  }
}
