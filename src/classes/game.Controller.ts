import { InstanceController } from "./instance.controller"

export class GameController {
    private instanceController: InstanceController
    constructor() {
        this.instanceController = new InstanceController()
    }
}