import { modules } from '_di/modules'
import { container } from '_di/container'
import { Module } from '_di/types'

export const registerModules = () => container.register({ ...modules })

export const registerTestModules = (testModules: Partial<Module>) => container.register({ ...testModules })

export const registerSingleModule = (module: Partial<Module>) => container.register({ ...module })
