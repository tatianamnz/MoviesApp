import { vehicleModule } from 'core/Vehicle/_di/vehicleModule'
import { locationModule } from 'core/Location/_di/locationModule'
import { regionModule } from 'core/Region/_di/regionModule'
import { configModule } from 'core/Config/_di/configModule'
import { navigationModule } from 'ui/_navigation/_di/navigationModule'
import { translationModule } from 'ui/_translation/_di/translationModule'
import { directionsModule } from 'core/Directions/_di/directionsModule'
import { notificationModule } from 'core/Notification/_di/notificationModule'
import { serverModule } from 'core/Server/_di/serverModule'
import { storageModule } from 'core/Storage/_di/storageModule'
import { authModule } from 'core/Auth/_di/authModule'

export const modules = {
  ...vehicleModule,
  ...navigationModule,
  ...locationModule,
  ...regionModule,
  ...translationModule,
  ...configModule,
  ...directionsModule,
  ...notificationModule,
  ...authModule,
  ...serverModule,
  ...storageModule
}
