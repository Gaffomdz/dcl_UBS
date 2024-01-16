import { setTimeout } from "@dcl/ecs-scene-utils"
import { TransitorInstance } from "src/instances/transitor.instance"
import { ExteriorInstance } from "../instances/exterior.instance"


export class InstanceController {
    public exterior = new ExteriorInstance(this)
    public transitor = new TransitorInstance(this)
  
    constructor() {
      this.transitorPreload()
      engine.addEntity(this.exterior)
    }
    transitorPreload() {
      engine.addEntity(this.transitor)
      this.transitor.addComponent(
        new Transform({ scale: new Vector3(0.0001, 0.0001, 0.0001) })
      )
      setTimeout(1000, () => {
        engine.removeEntity(this.transitor)
        this.transitor.removeComponent(Transform)
        this.transitor.addComponent(
          new Transform({
            position: new Vector3(0, 0, 0),
            scale: new Vector3(1, 1, 1)
          })
        )
      })
    }
    loadTransitor() {
      if (this.exterior.isAddedToEngine()) {
        engine.removeEntity(this.exterior)
        engine.addEntity(this.transitor)
      }
    }
    loadExterior() {
      if (this.transitor.isAddedToEngine()) {
        engine.removeEntity(this.transitor)
        engine.addEntity(this.exterior)
      }
    }
  }