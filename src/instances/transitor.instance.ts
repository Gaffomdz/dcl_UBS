import { InstanceController } from "src/classes/instance.controller"

export class TransitorInstance extends Entity {
    private mainGeo = new Entity()
    private button = new Entity()
    private click = new Entity()
    private backButton = new Entity()
    private clickBack = new Entity()
    private instanceController: InstanceController
    private aquarium = new Entity()
    //music
    private music = new Entity()
    private clip = new AudioClip('sounds/Tunnel Music.mp3')
    private source = new AudioSource(this.clip)



    private modArea = new Entity()

    constructor(instanceController: InstanceController) {
        super()
        this.instanceController = instanceController

        this.mainGeo.addComponent(new GLTFShape('models/ubs_inbetweenspace_geo.gltf'))
        this.button.addComponent(new GLTFShape('models/ubs_inbetweenspace_button_collider.gltf'))
        this.backButton.addComponent(new GLTFShape('models/ubs_inbetweenspace_back_button.gltf'))
        this.clickBack.addComponent(new BoxShape())
        this.click.addComponent(new BoxShape())
        this.aquarium.addComponent(new GLTFShape('models/ubs_inbetweenspace_aquarium.gltf'))

       
        this.music.addComponent(this.source)
        this.music.addComponent(new Transform({position: new Vector3(6.78,61.10,57.79)}))
        this.source.loop = true
        this.source.volume = 1
        this.source.playing = true

        this.mainGeo.setParent(this)
        this.button.setParent(this)
        this.click.setParent(this)
        this.backButton.setParent(this)
        this.clickBack.setParent(this)
        this.music.setParent(this)
        this.aquarium.setParent(this)

        this.method()
        this.setModArea()

    }
    method() {
        const material = new Material()
        material.albedoColor = Color4.FromInts(0, 0, 0, 0)
        this.click.addComponent(material)
        this.click.getComponent(BoxShape).withCollisions = false
        this.click.addComponent(new Transform({
            position: new Vector3(32.99,9.51,55.60),
            scale: new Vector3(1.400, 1.400, 1.400),
            rotation: new Quaternion().setEuler(0.000, 270.000, 0.000),
        })
        )
        this.click.addComponentOrReplace(new OnPointerDown(() => {
            openExternalURL('https://play.decentraland.org/?realm=worlds.dcl.guru%2Fworld%2FinternalTest.dcl.eth')
        }))

        this.clickBack.addComponent(material)
        this.clickBack.getComponent(BoxShape).withCollisions = false
        this.clickBack.addComponent(new Transform({
            position: new Vector3(36.17,9.32,10.44),
            scale: new Vector3(1.400, 1.400, 1.400),
            rotation: new Quaternion().setEuler(0.000, 270.000, 0.000),
        })
        )
        this.clickBack.addComponentOrReplace(new OnPointerDown(() => {
            this.instanceController.loadExterior()
        }, { hoverText: 'Go back to Campus' }))
    }
    setModArea() {
        this.modArea.addComponent(
            new CameraModeArea({
                area: { box: new Vector3(16, 1, 14) },
                cameraMode: CameraMode.FirstPerson,
            })
        )
        this.modArea.addComponent(
            new Transform({
                position: new Vector3(6.45, 61.00, 2.59),
            })
        )

        this.modArea.setParent(this)
    }

}
