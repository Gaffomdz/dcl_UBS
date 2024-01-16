export class LinkButton extends Entity {
    private shape: BoxShape = new BoxShape()
    private material = new Material()
    link: string
    private click = new Entity()
    constructor(link: string) {
      super()
      this.link = link
      this.addComponent(new GLTFShape('models/button.glb'))
      this.addComponent(new Transform())
      this.click.addComponent(this.shape)
      this.shape.withCollisions = false
      this.material.albedoColor = Color4.FromInts(0, 0, 0, 0)
      this.click.addComponentOrReplace(this.material)
      this.click.setParent(this)
      this.addComponentOrReplace(new OnPointerDown(() => {
        openExternalURL(this.link)
      }))
    }
   
  }