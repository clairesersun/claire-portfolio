import type { ComponentType } from 'react';
import { S1SettingsHero } from './S1SettingsHero';
import { S2SettingsPainMap } from './S2SettingsPainMap';
import { S3SettingsIA } from './S3SettingsIA';
import { S4Whiteboard } from './S4Whiteboard';
import { S5SettingsWorkflow } from './S5SettingsWorkflow';
import { S6SettingsStates } from './S6SettingsStates';
import { M1MessagingHero } from './M1MessagingHero';
import { M2FrictionMap } from './M2FrictionMap';
import { M3PatternMatrix } from './M3PatternMatrix';
import { M4Principles } from './M4Principles';
import { M5MessagingWorkflow } from './M5MessagingWorkflow';
import { M6Anatomy } from './M6Anatomy';
import { M7States } from './M7States';

export const figureRegistry: Record<string, ComponentType> = {
  'settings-hero': S1SettingsHero,
  'settings-pain-map': S2SettingsPainMap,
  'settings-ia-diagram': S3SettingsIA,
  'settings-whiteboard': S4Whiteboard,
  'settings-workflow': S5SettingsWorkflow,
  'settings-states': S6SettingsStates,
  'messaging-hero': M1MessagingHero,
  'messaging-friction-map': M2FrictionMap,
  'messaging-pattern-matrix': M3PatternMatrix,
  'messaging-principles': M4Principles,
  'messaging-workflow': M5MessagingWorkflow,
  'messaging-anatomy': M6Anatomy,
  'messaging-states': M7States,
};
