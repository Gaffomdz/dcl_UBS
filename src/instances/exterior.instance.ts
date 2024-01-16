import { movePlayerTo } from "@decentraland/RestrictedActions"
import { ExitPlane } from "../utils/exitplane"
import { TriggerZone } from "src/utils/ontriggerzone"
import { Banner, VideoScreen } from "src/classes/screen"
import { Database_handler, ScreenDetails } from "src/classes/db.handler"
import { InstanceController } from "src/classes/instance.controller"
import { GameController } from "src/classes/game.Controller"
import { getEntityWorldPosition } from "@dcl/ecs-scene-utils"
import { Dash_Tweaker } from "dcldash"
import { NPC } from "src/classes/npc.class"
import { UI } from "src/classes/ui.class"
import { LinkButton } from "src/classes/external.links.class"

type Position__ = { x: number, y: number, z: number }
type Rotation__ = { Rx: number, Ry: number, Rz: number }

export class ExteriorInstance extends Entity {
    //Enviroment
    private mainGeo = new Entity()
    private branding = new Entity()
    private bushes = new Entity()

    private detailing = new Entity()
    private waterfall = new Entity()
    private collider = new Entity()
    private interiorGeo = new Entity()
    private whirlpool = new Entity()
    private buttonGorundFloor = new Entity()
    private buttonGalleryFloor = new Entity()
    private buttonMeetingFloor = new Entity()
    private buttonRooftopFloor = new Entity()
    private click = new LinkButton('https://www.ubs.com/global/en/our-firm/our-culture.html')
    private click1 = new LinkButton('https://www.ubs.com/microsites/young/en/2022/digital-assets-explained.html')
    private click2 = new LinkButton('https://www.ubs.com/microsites/young/en/2022/artificial-intelligence.html')
    private click3 = new LinkButton('https://www.ubs.com/global/en/sustainability-impact/globalvisionaries/gv/2022/imagine-worldwide.html?caasID=CAAS-ActivityStream')
    private click4 = new LinkButton('https://www.ubs.com/global/en/sustainability-impact/globalvisionaries/gv/2022/earth-security.html')
    private click5 = new LinkButton(' https://www.ubs.com/global/en/our-firm/art/art-collection/online-exhibition.html')
    private click6 = new LinkButton(' https://www.ubs.com/microsites/nobel-perspectives/en/latest-economic-questions/technology-and-economy/articles/ai-fourth-industrial-revolution.html?caasID=CAAS-ActivityStream')
    private click7 = new LinkButton('https://www.ubs.com/global/en/our-firm/our-history/virtual-museum.html')
    private click8 = new LinkButton('https://www.ubs.com/global/en/ubs-society/philanthropy/optimus-foundation.html')
    private click9 = new LinkButton('https://www.ubs.com/microsites/nobel-perspectives/en/home.html')
    private mintingStation = new Entity()
    //BackTeleports
    private teleport1 = new TriggerZone()
    private teleport2 = new TriggerZone()
    private teleport3 = new TriggerZone()
    private teleport4 = new TriggerZone()

    //Tunnel
    tunnelTeleport = new TriggerZone()

    //music
    private music = new Entity()
    private artGalleryClip = new AudioClip('sounds/Art Gallery.mp3')
    private lobbyClip = new AudioClip('sounds/UBS Lobby Jazz Instrumental 1.mp3')
    private artMusicSource = new AudioSource(this.artGalleryClip)
    private lobbyMusicSource = new AudioSource(this.lobbyClip)


    private sign = new Entity
    private text = new TextShape('Step to go to Rooftop')
    private instanceController: InstanceController

    //NPCs
    private __1: NPC
    private __2: NPC
    private __3: NPC
    private __4: NPC
    private ui = new UI()
    database_handler: Database_handler

    constructor(instanceController: InstanceController) {
        super()
        this.database_handler = new Database_handler('3a6fe5c4-baac-4d9b-91c6-d8c2ad6130ea')

        this.instanceController = instanceController
        this.mainGeo.addComponent(new GLTFShape('models/ubs_ext_main_geo.gltf'))
        this.branding.addComponent(new GLTFShape('models/ubs_ext_branding.gltf'))
        this.bushes.addComponent(new GLTFShape('models/ubs_ext_bushes.gltf'))
        this.detailing.addComponent(new GLTFShape('models/ubs_ext_detailing.gltf'))
        this.waterfall.addComponent(new GLTFShape('models/ubs_ext_waterfall_2.gltf'))
        this.collider.addComponent(new GLTFShape('models/ubs_ext_collider.gltf'))
        this.interiorGeo.addComponent(new GLTFShape('models/ubs_int_main_geo.gltf'))
        this.whirlpool.addComponent(new GLTFShape('models/ubs_ext_whirlpool.gltf'))
        this.buttonGorundFloor.addComponent(new GLTFShape('models/ubs_elevator_button_ground_floor.gltf'))
        this.buttonGalleryFloor.addComponent(new GLTFShape('models/ubs_elevator_button_gallery_floor.gltf'))
        this.buttonMeetingFloor.addComponent(new GLTFShape('models/ubs_elevator_button_meeting_floor.gltf'))
        this.buttonRooftopFloor.addComponent(new GLTFShape('models/ubs_elevator_button_rooftop_floor.gltf'))
        this.mintingStation.addComponent(new GLTFShape('models/ubs_int_minting_station.gltf'))
        this.__1 = new NPC(this.ui, 'models/ubs_npc_isabella5.gltf', new Vector3(54.20, 1.190, 19.50), new Quaternion().setEuler(0.000, 45.000, 0.000), '__1')
        this.__2 = new NPC(this.ui, 'models/ubs_npc_peter3.gltf', new Vector3(41.340, 11.700, 8.090), new Quaternion().setEuler(0.000, 45.000, 0.000), '__2')
        this.__3 = new NPC(this.ui, 'models/ubs_npc_cameron3.gltf', new Vector3(48.200, 33.230, 19.190), new Quaternion().setEuler(0.000, 229.000, 0.000), '__3')
        this.__4 = new NPC(this.ui, 'models/ubs_npc_rina3.gltf', new Vector3(47.32, 0.18, 55.85), new Quaternion().setEuler(0.000, 45.000, 0.000), '__4')
        this.mainGeo.setParent(this)
        this.branding.setParent(this)
        this.bushes.setParent(this)
        this.detailing.setParent(this)
        this.waterfall.setParent(this)
        this.collider.setParent(this)
        this.interiorGeo.setParent(this)
        this.whirlpool.setParent(this)
        this.buttonGalleryFloor.setParent(this)
        this.buttonGorundFloor.setParent(this)
        this.buttonMeetingFloor.setParent(this)
        this.buttonRooftopFloor.setParent(this)

        this.music.setParent(this)
        this.__1.setParent(this)
        this.__2.setParent(this)
        this.__3.setParent(this)
        this.__4.setParent(this)
        this.music.addComponent(this.lobbyMusicSource)
        this.music.addComponent(new Transform({ position: new Vector3(34.75, 1.99, 15.49) }))
        this.lobbyMusicSource.loop = true
        this.lobbyMusicSource.volume = 0.2
        this.lobbyMusicSource.playing = true
        this.click.setParent(this)
        this.click1.setParent(this)
        this.click2.setParent(this)
        this.click3.setParent(this)
        this.click4.setParent(this)
        this.click5.setParent(this)
        this.click6.setParent(this)
        this.click7.setParent(this)
        this.click8.setParent(this)
        this.click9.setParent(this)
        this.click.addComponentOrReplace(new Transform({ position: new Vector3(44.01, 1.12, 5.90) }))
        this.click1.addComponentOrReplace(new Transform({ position: new Vector3(38.72, 1.12, 5.94) }))
        this.click2.addComponentOrReplace(new Transform({ position: new Vector3(34.20, 1.12, 5.93) }))
        this.click3.addComponentOrReplace(new Transform({ position: new Vector3(39.54, 1.12, 22.98), rotation: new Quaternion().setEuler(0.000, 180.000, 0.000) }))
        this.click4.addComponentOrReplace(new Transform({ position: new Vector3(30.330, 1.12, 22.980), rotation: new Quaternion().setEuler(0.000, 180.000, 0.000) }))
        this.click5.addComponentOrReplace(new Transform({ position: new Vector3(45.020, 11.500, 5.960), rotation: new Quaternion().setEuler(0.000, 360.000, 0.000) }))
        this.click6.addComponentOrReplace(new Transform({ position: new Vector3(37.930, 22.200, 5.940), rotation: new Quaternion().setEuler(0.000, 360.000, 0.000) }))
        this.click7.addComponentOrReplace(new Transform({ position: new Vector3(40.580, 0.050, 23.950)}))
        this.click8.addComponentOrReplace(new Transform({ position: new Vector3(5.41,18,29.15), rotation: new Quaternion().setEuler(0.000, 90.000, 0.000) }))
        this.click9.addComponentOrReplace(new Transform({ position: new Vector3(43.22, 22.200, 5.940), rotation: new Quaternion().setEuler(0.000, 360.000, 0.000) }))
       
        this.mintingStation.setParent(this)
        this.setTeleport()
        this.teleportsGroundFloor()
        this.teleportsGalleryFloor()
        this.teleportsMeetingFloor()
        this.teleportsRooftopFloor()


        this.setTunnel()
        this.setGallery()
        this.setInfoSpace()
        this.setRooftopScreens()
        this.setMeetingRoomScreens()
        this.setExtraScreens()

    }
    setTunnel() {
        this.tunnelTeleport.setParent(this)
        this.tunnelTeleport.addComponentOrReplace(new Transform({
            position: new Vector3(43.610, 1.880, 47.510),
            scale: new Vector3(12.000, 1.000, 12.000),
            rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
        }))

        this.tunnelTeleport.onCameraEnter = () => {
            this.instanceController.loadTransitor()
            movePlayerTo(new Vector3(32.90, 9.30, 9.82), new Vector3(33.84, 9.30, 17.44))
        }

    }
    setTeleport() {
        //       TODO clear up code
        this.teleport1.addComponentOrReplace(new Transform({ position: new Vector3(45.76, 1.10, 62.56) }))
        this.teleport1.onCameraEnter = () => { movePlayerTo(new Vector3(44.18, 1.99, 14.35), new Vector3(47.14, 1.99, 14.72)) }
        this.teleport1.setParent(this)
        this.teleport2.addComponentOrReplace(new Transform({ position: new Vector3(39.47, 1.10, 62.38) }))
        this.teleport2.onCameraEnter = () => { movePlayerTo(new Vector3(44.25, 12.39, 14.51), new Vector3(46.44, 12.39, 14.17)) }
        this.teleport2.setParent(this)
        this.teleport3.addComponentOrReplace(new Transform({ position: new Vector3(33.47, 1.10, 62.96) }))
        this.teleport3.onCameraEnter = () => { movePlayerTo(new Vector3(44.49, 22.85, 14.73), new Vector3(46.41, 22.85, 14.70)) }
        this.teleport3.setParent(this)
        this.teleport4.addComponentOrReplace(new Transform({ position: new Vector3(27.53, 1.10, 62.79) }))
        this.teleport4.setParent(this)
        this.teleport4.onCameraEnter = () => {
            movePlayerTo(new Vector3(48.91, 34.18, 14.46), new Vector3(52.42, 34.05, 15.15))
        }
    }
    setSign() {
        this.sign.addComponent(this.text)
        this.sign.addComponent(new Transform({ position: new Vector3(27.45, 1.40, 63.2), scale: new Vector3(0.14, 0.14, 0.14) }))
        this.sign.setParent(this)

    }
    teleportsGroundFloor() {
        const elevatorTriggerToGallery = new ExitPlane();
        elevatorTriggerToGallery.addComponentOrReplace(new Transform({
            position: new Vector3(42.150, 2.090, 13.660),
            scale: new Vector3(1.600, 1.100, 0.100),
        }))

        elevatorTriggerToGallery.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(44.25, 12.39, 14.51), new Vector3(46.44, 12.39, 14.17))
            this.music.addComponentOrReplace(this.artMusicSource)
            this.artMusicSource.loop = true
            this.artMusicSource.volume = 0.2
            this.artMusicSource.playing = true
        }, { hoverText: 'Art Gallery' }));
        elevatorTriggerToGallery.setParent(this);

        const elevatorTriggerToMeeting = new ExitPlane();
        elevatorTriggerToMeeting.addComponentOrReplace(new Transform({
            position: new Vector3(41.950, 3.270, 15.760),
            scale: new Vector3(1.600, 1.100, 0.100),
        }));
        elevatorTriggerToMeeting.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(44.49, 22.85, 14.73), new Vector3(46.41, 22.85, 14.70))
        }, { hoverText: 'Meeting Space' }));
        elevatorTriggerToMeeting.setParent(this);

        const elevatorTriggerToRooftop = new ExitPlane();
        elevatorTriggerToRooftop.addComponentOrReplace(new Transform({
            position: new Vector3(41.950, 2.050, 15.760),
            scale: new Vector3(1.600, 1.100, 0.100),
        }));
        elevatorTriggerToRooftop.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(48.91, 34.18, 14.46), new Vector3(52.42, 34.05, 15.15))
        }, { hoverText: 'Rooftop' }));
        elevatorTriggerToRooftop.setParent(this);

    }
    teleportsGalleryFloor() {
        const elevatorTriggerToGround = new ExitPlane();
        elevatorTriggerToGround.addComponentOrReplace(new Transform({
            position: new Vector3(42.150, 13.690, 13.660),
            scale: new Vector3(1.600, 1.100, 0.100),
        }))
        elevatorTriggerToGround.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(44.18, 1.99, 14.35), new Vector3(47.14, 1.99, 14.72))
            this.music.addComponentOrReplace(this.lobbyMusicSource)
            this.lobbyMusicSource.loop = true
            this.lobbyMusicSource.volume = 0.2
            this.lobbyMusicSource.playing = true
        }, { hoverText: 'Ground Floor' }));
        elevatorTriggerToGround.setParent(this);

        const elevatorTriggerToMeeting = new ExitPlane();
        elevatorTriggerToMeeting.addComponentOrReplace(new Transform({
            position: new Vector3(41.950, 13.770, 15.760),
            scale: new Vector3(1.600, 1.100, 0.100),
        }));
        elevatorTriggerToMeeting.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(44.49, 22.85, 14.73), new Vector3(46.41, 22.85, 14.70))
            this.music.addComponentOrReplace(this.lobbyMusicSource)
            this.lobbyMusicSource.loop = true
            this.lobbyMusicSource.volume = 0.2
            this.lobbyMusicSource.playing = true
        }, { hoverText: 'Meeting Space' }));
        elevatorTriggerToMeeting.setParent(this);

        const elevatorTriggerToRooftop = new ExitPlane();
        elevatorTriggerToRooftop.addComponentOrReplace(new Transform({
            position: new Vector3(41.950, 12.550, 15.760),
            scale: new Vector3(1.600, 1.100, 0.100),
        }));
        elevatorTriggerToRooftop.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(48.91, 34.18, 14.46), new Vector3(52.42, 34.05, 15.15))
            this.music.addComponentOrReplace(this.lobbyMusicSource)
            this.lobbyMusicSource.loop = true
            this.lobbyMusicSource.volume = 0.2
            this.lobbyMusicSource.playing = true
        }, { hoverText: 'Rooftop' }));
        elevatorTriggerToRooftop.setParent(this);

    }

    teleportsMeetingFloor() {
        const elevatorTriggerToGround = new ExitPlane();
        elevatorTriggerToGround.addComponentOrReplace(new Transform({
            position: new Vector3(42.150, 24.190, 13.660),
            scale: new Vector3(1.600, 1.100, 0.100)
        }));
        elevatorTriggerToGround.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(44.18, 1.99, 14.35), new Vector3(47.14, 1.99, 14.72))
        }, { hoverText: 'Ground Floor' }));
        elevatorTriggerToGround.setParent(this);

        const elevatorTriggerToGallery = new ExitPlane();
        elevatorTriggerToGallery.addComponentOrReplace(new Transform({ position: new Vector3(42.150, 22.950, 13.660), scale: new Vector3(1.600, 1.100, 0.100) }));
        elevatorTriggerToGallery.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(44.25, 12.39, 14.51), new Vector3(46.44, 12.39, 14.17))
            this.music.addComponentOrReplace(this.artMusicSource)
            this.artMusicSource.loop = true
            this.artMusicSource.volume = 0.2
            this.artMusicSource.playing = true
        }, { hoverText: 'Art Gallery' }));
        elevatorTriggerToGallery.setParent(this);

        const elevatorTriggerToRooftop = new ExitPlane();
        elevatorTriggerToRooftop.addComponentOrReplace(new Transform({
            position: new Vector3(41.950, 23.05, 15.760),
            scale: new Vector3(1.600, 1.100, 0.100),
        }));
        elevatorTriggerToRooftop.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(48.91, 34.18, 14.46), new Vector3(52.42, 34.05, 15.15))
        }, { hoverText: 'Rooftop' }));
        elevatorTriggerToRooftop.setParent(this);

    }

    teleportsRooftopFloor() {
        const elevatorTriggerToGround = new ExitPlane();
        elevatorTriggerToGround.addComponentOrReplace(new Transform({
            position: new Vector3(48.150, 35.230, 13.520),
            scale: new Vector3(1.600, 0.700, 0.100),
        }))
        elevatorTriggerToGround.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(44.18, 1.99, 14.35), new Vector3(47.14, 1.99, 14.72))
        }, { hoverText: 'Ground Floor' }));
        elevatorTriggerToGround.setParent(this);

        const elevatorTriggerToGallery = new ExitPlane();
        elevatorTriggerToGallery.addComponentOrReplace(new Transform({
            position: new Vector3(48.150, 34.430, 13.520),
            scale: new Vector3(1.600, 0.600, 0.100),
        }));
        elevatorTriggerToGallery.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(44.25, 12.39, 14.51), new Vector3(46.44, 12.39, 14.17))
            this.music.addComponentOrReplace(this.artMusicSource)
            this.artMusicSource.loop = true
            this.artMusicSource.volume = 0.2
            this.artMusicSource.playing = true
        }, { hoverText: 'Art Gallery' }));
        elevatorTriggerToGallery.setParent(this);

        const elevatorTriggerToMeeting = new ExitPlane();
        elevatorTriggerToMeeting.addComponentOrReplace(new Transform({
            position: new Vector3(48.150, 35.130, 15.820),
            scale: new Vector3(1.600, 0.800, 0.100),
        }));
        elevatorTriggerToMeeting.addComponentOrReplace(new OnPointerDown(() => {
            movePlayerTo(new Vector3(44.49, 22.85, 14.73), new Vector3(46.41, 22.85, 14.70))
        }, { hoverText: 'Meeting Space' }));
        elevatorTriggerToMeeting.setParent(this);

    }

    async setGalleryItem(position: Position__, rotation: Rotation__, artBoardName: string, artBoardDescriptionName: string) {
        const galleryPairEntity = new Entity()
        galleryPairEntity.addComponent(new Transform({
            position: new Vector3(position.x, position.y, position.z),
            rotation: new Quaternion().setEuler(rotation.Rx, rotation.Ry, rotation.Rz),
        }))
        const defaultPosition: Position__ = { x: 0, y: 0, z: 0 }
        const defaultRotation: Rotation__ = { Rx: 0, Ry: 0, Rz: 0 }
        const artBoardDetails = await this.database_handler.getScreen(
            artBoardName,
            defaultPosition,
            defaultRotation
        )
        const artBoard = artBoardDetails.dclObject
        const artBoardPosition = artBoardDetails.position
        const descriptionPosition = { x: 0, y: artBoardPosition.y, z: 0 }
        const artBoardDescriptionDetails = await this.database_handler.getScreen(
            artBoardDescriptionName,
            descriptionPosition,
            defaultRotation
        )
        const artBoardDescription = artBoardDescriptionDetails.dclObject
        const artBoardDescriptionScale = artBoardDescriptionDetails.scale
        const artBoardDescriptionRatio = artBoardDescriptionDetails.ratio
        artBoardDescription.addComponentOrReplace(new Transform({
            position: new Vector3(0, artBoardPosition.y + artBoardDescriptionScale, 0),
            scale: new Vector3(artBoardDescriptionScale * artBoardDescriptionRatio, artBoardDescriptionScale, 3),
        }))
        artBoard.setParent(galleryPairEntity)
        artBoardDescription.setParent(galleryPairEntity)
        galleryPairEntity.setParent(this)
        engine.addEntity(galleryPairEntity)
    }

    setGallery() {
        const yConstant = 13
        // TODO replace any with an appropriate type
        const allGalleryItems: Array<any> = [
            {
                position: { x: 56.630, y: yConstant, z: 15.660 },
                rotation: { Rx: 0.000, Ry: 225.000 - 180, Rz: 180.00 },
                artBoardName: 'Art%20Board%201',
                artBoardDescriptionName: 'Art%20Board%201%20Description'
            },
            {
                position: { x: 50.030, y: yConstant, z: 9.890 },
                rotation: { Rx: 0.000, Ry: 270.000 - 180, Rz: 180.000 },
                artBoardName: 'Art%20Board%202',
                artBoardDescriptionName: 'Art%20Board%202%20Description'
            },
            {
                position: { x: 36.40, y: yConstant, z: 19.300 },
                rotation: { Rx: 360.000, Ry: 270.000 - 180, Rz: 180.000 },
                artBoardName: 'Art%20Board%203',
                artBoardDescriptionName: 'Art%20Board%203%20Description'
            },
            //Art board 6
            {
                position: { x: 38.40, y: yConstant, z: 20.300 },
                rotation: { Rx: 360.000, Ry: 0, Rz: 180.000 },
                artBoardName: 'Art%20Board%206',
                artBoardDescriptionName: 'Art%20Board%206%20Description'
            },
            {
                position: { x: 20.80, y: yConstant, z: 18.620 },
                rotation: { Rx: 360.000, Ry: 270.000, Rz: 180.000 },
                artBoardName: 'Art%20Board%204',
                artBoardDescriptionName: 'Art%20Board%204%20Description'
            },
            {
                position: { x: 29.430, y: yConstant, z: 9.610 },
                rotation: { Rx: 360.000, Ry: 180.000, Rz: 180.000 },
                artBoardName: 'Art%20Board%205',
                artBoardDescriptionName: 'Art%20Board%205%20Description'
            },
            //Artboard 7
            {
                position: { x: 29.430, y: yConstant, z: 9.33 },
                rotation: { Rx: 360.000, Ry: 0.000, Rz: 180.000 },
                artBoardName: 'Art%20Board%207',
                artBoardDescriptionName: 'Art%20Board%207%20Description'
            }
        ]
        const allGalleryPromises = allGalleryItems.map((galleryItem) => {
            let { position, rotation, artBoardName, artBoardDescriptionName } = galleryItem
            return this.setGalleryItem(position, rotation, artBoardName, artBoardDescriptionName)
        })
        Promise.all(allGalleryPromises).then(() => { })
    }

    setInfoSpace() {
        const yConstantMiddle = 6.4
        const yConstant = 5
        const scaleOverrideMiddle = 4.240
        const scaleOverrideSides = 2.4
       
        const allInfoSpaceItems: Array<any> = [
            {
                position: { x: 28.630, y: yConstant, z: 23.280 },
                rotation: { Rx: 360.000, Ry: 360.000, Rz: 180.000 },
                infoSpaceName: '9',
                scaleOverride: scaleOverrideSides,
                flipGrowthAxis: true,
            },
            {
                position: { x: 28.180, y: yConstantMiddle, z: 14.770 },
                rotation: { Rx: 0.000, Ry: 0.000, Rz: 180.000 },
                infoSpaceName: '6',
                scaleOverride: scaleOverrideMiddle,
                flipGrowthAxis: false,
            },
            {
                position: { x: 28.180, y: yConstantMiddle, z: 15.010 },
                rotation: { Rx: 360.000, Ry: 180.000, Rz: 180.000 },
                infoSpaceName: '6',
                scaleOverride: scaleOverrideMiddle,
                flipGrowthAxis: false,
            },
            // {
            //     position: { x: 33.230, y: yConstant, z: 23.280 },
            //     rotation: { Rx: 360.000, Ry: 360.000, Rz: 180.000 },
            //     infoSpaceName: '8',
            //     scaleOverride: scaleOverrideSides,
            //     flipGrowthAxis: true,
            // },
            {
                position: { x: 46.240, y: yConstant, z: 5.690 },
                rotation: { Rx: 360.000, Ry: 180.000, Rz: 180.000 },
                infoSpaceName: '3',
                scaleOverride: scaleOverrideSides,
                flipGrowthAxis: true,
            },

            {
                position: { x: 41.140, y: yConstant, z: 5.690 },
                rotation: { Rx: 360.000, Ry: 180.000, Rz: 180.000 },
                infoSpaceName: '4',
                scaleOverride: scaleOverrideSides,
                flipGrowthAxis: true,
            },
            // {
            //     position: { x: 24.030, y: yConstant, z: 23.280 },
            //     rotation: { Rx: 360.000, Ry: 360.000, Rz: 180.000 },
            //     infoSpaceName: '10',
            //     scaleOverride: scaleOverrideSides,
            //     flipGrowthAxis: true,
            // },

            {
                position: { x: 37.830, y: yConstant, z: 23.280 },
                rotation: { Rx: 360.000, Ry: 360.000, Rz: 180.000 },
                infoSpaceName: '7',
                scaleOverride: scaleOverrideSides,
                flipGrowthAxis: true,
            },
            {
                position: { x: 36.00, y: yConstant, z: 5.710 },
                rotation: { Rx: 360.000, Ry: 180.000, Rz: 180.000 },
                infoSpaceName: '5',
                scaleOverride: scaleOverrideSides,
                flipGrowthAxis: true,
            },

        ]
        const allInfoSpacePromises = allInfoSpaceItems.map(async (infoSpaceItem) => {
            let { position, rotation, infoSpaceName, scaleOverride, flipGrowthAxis } = infoSpaceItem
            const screenDetails = await this.database_handler.getScreen(infoSpaceName, position, rotation, scaleOverride, flipGrowthAxis)
            const screen = screenDetails.dclObject
            screen.setParent(this)
        })
        Promise.all(allInfoSpacePromises).then(() => { })
    }
    async setRooftopScreens() {
        const position = { x: 56.210, y: 37.450, z: 14.650 }
        const rotation = { Rx: 360.000, Ry: 268.000, Rz: 359.4 }
        const screen18Detail = await this.database_handler.getScreen('18', position, rotation, false, false)
        const screen18 = screen18Detail.dclObject
        screen18.addComponentOrReplace(new Transform({
            position: new Vector3(56.210, 37.450, 14.650),
            scale: new Vector3(9.420, 5.850, 3.000),
            rotation: new Quaternion().setEuler(360.000, 268.000, 359.400),
        }))
        screen18.setParent(this)

        const screen17Detail = await this.database_handler.getScreen('17', position, rotation, false, false)
        const screen17 = screen17Detail.dclObject
        screen17.addComponentOrReplace(new Transform({
            position: new Vector3(5.120, 21.450, 23.750),
            scale: new Vector3(8.420, 4.850, 3.000),
            rotation: new Quaternion().setEuler(183.000, 90.900, 359.400),
        }))
        screen17.setParent(this)
        const screen16Detail = await this.database_handler.getScreen('16', position, rotation, false, false)
        const screen16 = screen16Detail.dclObject
        screen16.addComponentOrReplace(new Transform({
            position: new Vector3(32.940, 24.940, 14.300),
            scale: new Vector3(7.920, 4.010, 3.000),
            rotation: new Quaternion().setEuler(360.000, 90.000, 360.000),
        }))
        screen16.setParent(this)
    }
    async setMeetingRoomScreens() {
        const position = { x: 56.210, y: 37.450, z: 14.650 }
        const rotation = { Rx: 360.000, Ry: 268.000, Rz: 359.4 }
        const screen13Detail = await this.database_handler.getScreen('13', position, rotation, false, true)
        const screen13 = screen13Detail.dclObject
        screen13.addComponentOrReplace(new Transform({
            position: new Vector3(45.080, 24.700, 5.710),
            scale: new Vector3(2.400, 4.400, 1.000),
            rotation: new Quaternion().setEuler(180.000, 0.000, 0.000),
        }))
        screen13.setParent(this)

        const screen14Detail = await this.database_handler.getScreen('14', position, rotation, false, false)
        const screen14 = screen14Detail.dclObject
        screen14.addComponentOrReplace(new Transform({
            position: new Vector3(39.980, 24.700, 5.710),
            scale: new Vector3(2.400, 4.400, 1.000),
            rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
        }))
        screen14.setParent(this)
        const screen15Detail = await this.database_handler.getScreen('15', position, rotation, false, false)
        const screen15 = screen15Detail.dclObject
        screen15.addComponentOrReplace(new Transform({
            position: new Vector3(34.870, 24.700, 5.710),
            scale: new Vector3(2.400, 4.400, 1.000),
            rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
        }))
        screen15.setParent(this)
    }
    async setExtraScreens() {
        const position = { x: 56.210, y: 37.450, z: 14.650 }
        const rotation = { Rx: 360.000, Ry: 268.000, Rz: 359.4 }
        const screen1Detail = await this.database_handler.getScreen('1', position, rotation, false, false)
        const screen1 = screen1Detail.dclObject
        screen1.addComponentOrReplace(new Transform({
            position: new Vector3(77.860, 4.440, 14.530),
            scale: new Vector3(8.400, 5.250, 5.000),
            rotation: new Quaternion().setEuler(180.000, 270.000, 0.000),
        }))
        screen1.setParent(this)

        const screen11Detail = await this.database_handler.getScreen('11', position, rotation, false, false)
        const screen11 = screen11Detail.dclObject
        screen11.addComponentOrReplace(
            new Transform({
                position: new Vector3(11.140, 5.700, 30.400),
                scale: new Vector3(12.060, 6.250, 2.000),
                rotation: new Quaternion().setEuler(0.000, 268.000 - 180, 0.600),
            })
        )
        screen11.setParent(this);

        const entranceDetail = await this.database_handler.getScreen('2', position, rotation, false, false)
        const screen = entranceDetail.dclObject
        screen.addComponentOrReplace(
            new Transform({
                position: new Vector3(67.3, 5.410, 9.080),
                scale: new Vector3(5.170, 6.450, 2.000),
                rotation: new Quaternion().setEuler(360.000, 180.000, 180.600),
            })
        )
        screen.setParent(this)

        const artDetail = await this.database_handler.getScreen('12', position, rotation, false, true)
        const artScreen = artDetail.dclObject
        artScreen.addComponentOrReplace(
            new Transform({
                position: new Vector3(43.120, 14.100, 5.680),
                scale: new Vector3(2.390, 4.350, 2.000),
                rotation: new Quaternion().setEuler(360.000, 180.000, 179.600),
             })
        )
        artScreen.setParent(this)
       
        // provisory screen 8 and 10 in the ground floor

        const eightDetail = await this.database_handler.getScreen('8', position, rotation, false, false)
        const eightScreen = eightDetail.dclObject
        eightScreen.addComponentOrReplace(
            new Transform({
                position: new Vector3(33.230, 3.800, 23.280),
                scale: new Vector3(2.470, 4.450, 2.000),
                rotation: new Quaternion().setEuler(360.000, 180.000, 0.600),
            })
        )
        eightScreen.setParent(this)
        const nineDetail = await this.database_handler.getScreen('10', position, rotation, false, false)
        const nineScreen = nineDetail.dclObject
        nineScreen.addComponentOrReplace(
            new Transform({
                position: new Vector3(24.030, 3.800, 23.280),
                scale: new Vector3(2.470, 4.450, 2.000),
                rotation: new Quaternion().setEuler(360.000, 180.000, 0.600),
            })
        )
        nineScreen.setParent(this)
      

    }
}