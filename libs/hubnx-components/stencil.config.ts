import { Config } from '@stencil/core';

import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'hubnx-components',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

    reactOutputTarget({
      componentCorePackage: '@esri-dc/hubnx-components',
      proxiesFile:
        '../../../libs/hubnx-components-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};
