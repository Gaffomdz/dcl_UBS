import { Banner, VideoScreen } from "./screen"

// This is the handler that should be a npm package to interact with db 
export interface ScreenDetails {
  url: string
  uploadType: string
}

type Position__ = { x: number, y: number, z: number }
type Rotation__ = { Rx: number, Ry: number, Rz: number }
type screenDetails__ = {
  dclObject: Banner | VideoScreen,
  position: Position__,
  scale: number,
  ratio: number
}
class Database_handler {
  url = false ? 'http://localhost:8000' : 'https://api.dclworlds.com'
  private_key: string

  constructor(private_key: string) {
    this.private_key = private_key
  }
  async getallusers(dbname: string = this.private_key) {
    try {
      const url = this.url + `/all-users?dbName=${dbname}`
      const response = await fetch(url);
      log('making a call to', url)
      const json = await response.json();
      return;
    } catch (e) {
      log('error fetching scores from server ', e);
    }
  }
  async getScreen(
    screenName: string,
    position: Position__,
    rotation: Rotation__,
    overRideScale: boolean | number = false,
    flipGrowthAxis: boolean = false
  ): Promise<screenDetails__> {
    const url = this.url + `/api/media/scene/${this.private_key}/${screenName}`
    const response = await fetch(url)
    const screenDetails = await response.json()
    const { height, width } = screenDetails

    if (screenDetails.url.match('storage.googleapis.com/aopf-1/') !== null) {
      screenDetails.url = screenDetails.url.replace('storage.googleapis.com/aopf-1/', 'cdn.dclworlds.com/')
    }
    if (screenDetails.uploadType === 'image') {
      if (overRideScale) screenDetails.scale = overRideScale;

      const scale = Number(screenDetails.scale) || 1
      let ratio = screenDetails.width / screenDetails.height
      if (flipGrowthAxis) {
        ratio = screenDetails.height / screenDetails.width
      }
      const dclObject = new Banner(screenDetails.url, position, rotation, scale, ratio, flipGrowthAxis, height, width)
      return { dclObject, position, scale, ratio }
    } else if (screenDetails.uploadType === 'video') {
      
      let position = screenDetails.position
      let scale = screenDetails.scale
      let ratio = 1
      const dclObject = new VideoScreen(screenDetails.url, position)
      return { dclObject, position, scale, ratio }
    } else {
      throw new Error('format not supported yet')
    }
  }
}
export { Database_handler }