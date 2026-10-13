import { ss } from '@/utils/storage'
import { PanelPanelConfigStyleEnum, PanelStateNetworkModeEnum } from '@/enums'
import defaultBackground from '@/assets/defaultBackground.webp'
const LOCAL_NAME = 'panelStorage'

const defaultFooterHtml = '<div class="text-slate-300" style="position:fixed;right:20px;bottom:10px">Powered By <span class="ml-[5px]">Sun-Panel</span></div>'

export function defaultStatePanelConfig(): Panel.panelConfig {
  return {
    backgroundImageSrc: defaultBackground,
    backgroundBlur: 0,
    backgroundMaskNumber: 0,
    iconStyle: PanelPanelConfigStyleEnum.icon,
    iconTextColor: '#ffffff',
    iconTextInfoHideDescription: false,
    iconTextIconHideTitle: false,
    logoText: '导航面板',
    logoImageSrc: '',
    clockShowSecond: false,
    searchBoxShow: false,
    searchBoxSearchIcon: false,
    marginBottom: 10,
    marginTop: 10,
    maxWidth: 1200,
    maxWidthUnit: 'px',
    marginX: 5,
    footerHtml: defaultFooterHtml,
    systemMonitorShow: false,
    systemMonitorShowTitle: true,
    systemMonitorPublicVisitModeShow: false,
    netModeChangeButtonShow: true,

  }
}

export function defaultState(): Panel.State {
  return {
    rightSiderCollapsed: false,
    leftSiderCollapsed: false,
    networkMode: PanelStateNetworkModeEnum.wan,
    panelConfig: { ...defaultStatePanelConfig() },
  }
}

export function getLocalState(): Panel.State {
  const localState = ss.get(LOCAL_NAME)
  return { ...defaultState(), ...localState }
}

export function setLocalState(state: Panel.State) {
  ss.set(LOCAL_NAME, state)
}

export function removeLocalState() {
  ss.remove(LOCAL_NAME)
}
