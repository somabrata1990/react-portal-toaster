declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }

  declare module "*.css" {
    const styles: any;
    export default styles;
  }

  declare module 'react-portal-toaster';