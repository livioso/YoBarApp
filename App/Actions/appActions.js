export const STARTUP = 'STARTUP';
export const STARTUP_DONE = 'STARTUP_DONE';

export const doStartup = () => ({
  type: STARTUP
});

export const startupDone = () => ({
  type: STARTUP_DONE
});
