export const CLASS_PREFIX = 'nplayer_';

export const CLASS_PLAYER = 'nplayer';

export const EVENT = {
  MOUNTED: 'mounted',
  REMOUNTED: 'remounted',
  RESIZE: 'resize',
  CONTROL_SHOW: 'controlShow',
  CONTROL_HIDE: 'controlHide',
  LOADING_SHOW: 'loadingShow',
  LOADING_HIDE: 'loadingHide',
  ENTER_FULLSCREEN: 'enterFullscreen',
  EXIT_FULLSCREEN: 'exitFullscreen',
  ENTER_WEB_FULLSCREEN: 'enterWebFullscreen',
  EXIT_WEB_FULLSCREEN: 'exitWebFullscreen',
  ENTER_PIP: 'enterPip',
  EXIT_PIP: 'exitPip',

  PREV: 'prev',
  NEXT: 'next',
  PREV_CLICK: 'prevClick',
  NEXT_CLICK: 'nextClick',

  QUALITY_CHANGE: 'qualityChange',

  CLICK_LIVE: 'clickLive',

  TO_LIVE: 'toLive',
  TO_VOD: 'toVod',

  MEDIA_CHANGED: 'mediaChanged',

  AUTOPLAY_MUTED: 'autoplayMuted',
  AUTOPLAY_FAILED: 'autoplayFailed',

  ABORT: 'abort',
  CANPLAY: 'canplay',
  CANPLAYTHROUGH: 'canplaythrough',
  DURATIONCHANGE: 'durationchange',
  EMPTIED: 'emptied',
  ENDED: 'ended',
  LOADSTART: 'loadstart',
  LOADEDDATA: 'loadeddata',
  LOADEDMETADATA: 'loadedmetadata',
  PAUSE: 'pause',
  PLAY: 'play',
  PLAYING: 'playing',
  PROGRESS: 'progress',
  RATECHANGE: 'ratechange',
  SEEKED: 'seeked',
  SEEKING: 'seeking',
  STALLED: 'stalled',
  SUSPEND: 'suspend',
  TIMEUPDATE: 'timeupdate',
  VOLUMECHANGE: 'volumechange',
  WAITING: 'waiting',
  ERROR: 'error',
} as const;

export const I18nKey = {
  FULLSCREEN: 'fullscreen',
  EXIT_FULLSCREEN: 'exit_fullscreen',
  ENTER_WEB_FULLSCREEN: 'enter_web_fullscreen',
  EXIT_WEB_FULLSCREEN: 'exit_web_fullscreen',
  SETTING: 'setting',
  PLAY: 'play',
  PAUSE: 'pause',
  REPLAY: 'replay',
  MUTE: 'mute',
  UNMUTE: 'unmute',
  NORMAL: 'normal',
  SPEED: 'speed',
  PIP: 'pip',
  LOOP: 'loop',
  VOLUME: 'volume',
  AIRPLAY: 'airplay',
  LIVE: 'live',
  BACK_TO_LIVE: 'back_to_live',
  PREV: 'prev',
  NEXT: 'next',
} as const;
