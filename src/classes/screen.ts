//Type of screen that plays videos
import { setTimeout } from "@dcl/ecs-scene-utils";
import { Dash_TriggerZone } from "dcldash";
import { Button } from "./ui.button.class";

export class VideoScreen extends Entity {
  public myVideoClip: VideoClip
  public myVideoTexture: VideoTexture
  public myMaterial: Material
  constructor(url: string, position: Position__) {
    super();
    this.myVideoClip = new VideoClip(url)
    this.myVideoTexture = new VideoTexture(this.myVideoClip)
    this.myMaterial = new Material();
    this.myMaterial.albedoTexture = this.myVideoTexture
    this.addComponent(new PlaneShape())
    this.addComponent(new Transform())
    this.addComponent(this.myMaterial)
    this.addComponent(
      new OnPointerDown(() => {
        this.myVideoTexture.playing = !this.myVideoTexture.playing
      }, { distance: 10, hoverText: 'Click to Play/Pause'  })
    )
  }
}

//Type of screen that display an image
type Position__ = { x: number, y: number, z: number }
type Rotation__ = { Rx: number, Ry: number, Rz: number }
export class Banner extends Entity {
  //public p1 = new Texture('https://storage.googleapis.com/aopf-1/35de87f4-fedb-4d58-b864-e5001fb25418.jpeg')
  public p1: Texture
  public myMaterial = new Material()
  private canvas = new UICanvas
  private detail: UIImage
  // private closeButton: Button
  private exitButton: Button
  constructor(url: string, position: Position__, rotation: Rotation__, scale: number, ratio: number, flipGrowthAxis = false, height: number, width: number) {
    super()
    const { x, y, z } = position
    const { Rx, Ry, Rz } = rotation
    this.p1 = new Texture(url)
    this.myMaterial.albedoTexture = this.p1
    this.addComponent(new PlaneShape())
    this.detail = new UIImage(this.canvas, new Texture(url));
    this.exitButton = new Button(this.canvas,
      'images/exit_button.png',
      '8%',
      '8%',
      93,
      208,
      '0%',
      '-30%',
      'bottom',
      'center',
      () => {
      },
      false
    )
    let scale_ = new Vector3(scale * ratio, scale, 3)
    if (flipGrowthAxis) {
      scale_ = new Vector3(scale, scale * ratio, 3)
    }
    this.addComponent(new Transform({
      position: new Vector3(x, y - (scale / 2), z),
      scale: scale_,
      rotation: new Quaternion().setEuler(Rx, Ry, Rz),
    }))
    this.addComponent(this.myMaterial)
    this.myMaterial.roughness = 1
    this.myMaterial.specularIntensity = 2
    this.myMaterial.metallic = 0
    this.detail.visible = false
    this.addComponent(new OnPointerDown(() => {
      this.exitButton.visible = true
      this.detail.visible = true
      const originalAspectRatio = width / height;
      const uiWidthPercentage = 60;

      const uiWidth = uiWidthPercentage / 100 * 1000; // Assuming UI canvas width is 1000 units
      const uiHeight = uiWidth / originalAspectRatio;

      this.detail.sourceHeight = height;
      this.detail.sourceWidth = width;
      this.detail.height = uiHeight.toString() + 'px';
      this.detail.width = uiWidth.toString() + 'px';

      if (flipGrowthAxis) {

        const originalAspectRatio = width / height;
        const uiWidthPercentage = 32;

        const uiWidth = uiWidthPercentage / 100 * 1000; // Assuming UI canvas width is 1000 units
        const uiHeight = uiWidth / originalAspectRatio;

        this.detail.sourceHeight = height;
        this.detail.sourceWidth = width;
        this.detail.height = uiHeight.toString() + 'px';
        this.detail.width = uiWidth.toString() + 'px';

        this.exitButton.positionX = '1%'
        this.exitButton.positionY = '-52%'
      }

      // Set the position and scale of the UI image
      this.detail.positionX = '0px'// Adjust if necessary
      this.detail.positionY = '0px' // Adjust if necessary
      this.detail.visible = true
      // this.exitButton.visible = true
      this.exitButton.onClick = new OnPointerDown(() => {
        this.exitButton.visible = false
        this.detail.visible = false
      })
    }))
  }
}
