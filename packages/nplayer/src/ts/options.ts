import { PlayerOptions } from './types';

const defaultOptions = (): Partial<PlayerOptions> => ({
  shortcut: true,
  seekStep: 10,
  volumeStep: 0.1,
  volumeBarWidth: 100,
  settings: ['speed'],
  contextMenus: ['loop', 'pip', 'version'],
  contextMenuToggle: true,
  openEdgeInIE: true,
  posterEnable: true,
  videoAttrs: {
    crossorigin: 'anonymous',
    preload: 'auto',
    playsinline: 'true',
  },
  mobileBreakPoint: 600,
});

function processControls(origin: Required<PlayerOptions>['controls'], def: Required<PlayerOptions>['controls']) {
  return [origin[0] || def[0], origin[1] || def[1], origin[2] || def[2]];
}

export function processOptions(opts?: PlayerOptions): Required<PlayerOptions> {
  const dOpts = defaultOptions();
  const res = {
    ...dOpts,
    ...opts,
    videoAttrs: {
      ...dOpts.videoAttrs,
      ...opts?.videoAttrs,
    },
    isTouch: (('ontouchstart' in window)
    || (navigator.maxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0)),
  } as Required<PlayerOptions>;

  res.controls = processControls(res.controls || [], [
    ['play', 'volume', 'time', 'spacer', 'airplay', 'settings', 'web-fullscreen', 'fullscreen'],
    (res.live ? undefined : ['progress']) as any,
  ]);

  const mobileControl = ['play', 'time', 'web-fullscreen', 'fullscreen'];
  if (!res.live) mobileControl.splice(1, 0, 'progress');
  res.mobileControls = processControls(res.mobileControls || [], [
    mobileControl,
    [],
    ['spacer', 'airplay', 'settings'],
  ]);

  return res;
}
