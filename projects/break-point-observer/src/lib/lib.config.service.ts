import { InjectionToken } from '@angular/core';
import { LibConfig } from './lib.config';

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');
