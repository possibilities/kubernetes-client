import { EventEmitter } from 'events'
import { AxiosRequestConfig } from 'axios'
import { IncomingMessage } from 'http'

export type ResourceWatcher = EventEmitter & {
  unwatch: () => void
  stream: IncomingMessage
}

export interface KubectlUser {
  readonly [key: string]: any
}

export interface KubectlCluster {
  readonly server: string
  readonly [key: string]: any
}

export interface KubectlConfig {
  readonly cluster: KubectlCluster
  readonly user: KubectlUser
}

export interface KubectlContext {
  readonly cluster: string
  readonly user: string
}

export interface Context {
  readonly name: string
  readonly context: KubectlContext
}

export interface User {
  readonly name: string
  readonly user: KubectlUser
}

export interface Cluster {
  readonly name: string
  readonly cluster: KubectlCluster
}

export interface Config {
  readonly 'current-context': string
  readonly users: User[]
  readonly clusters: Cluster[]
  readonly contexts: Context[]
}

export interface KubernetesClientInstance {
  get (url: string, config?: AxiosRequestConfig): Promise<any>
  watch (url: string, config?: AxiosRequestConfig): Promise<ResourceWatcher>
  stream (url: string, config?: AxiosRequestConfig): Promise<IncomingMessage>
  delete (url: string, config?: AxiosRequestConfig): Promise<any>
  head (url: string, config?: AxiosRequestConfig): Promise<any>
  post (url: string, data?: any, config?: AxiosRequestConfig): Promise<any>
  put (url: string, data?: any, config?: AxiosRequestConfig): Promise<any>
  patch (url: string, data?: any, config?: AxiosRequestConfig): Promise<any>
}
