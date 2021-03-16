import { b as _extends, s as spacing } from './useTheme-01b231a7.js';
import { d as defaultTheme } from './defaultTheme-1f56af2d.js';
import { s as styled$1, c as css, a as compose, b as borders, d as display, f as flexbox, g as grid, p as positions, e as palette, h as boxShadow, i as sizing, t as typography } from './styled-3daa9c37.js';

var styled = function styled(Component) {
  var componentCreator = styled$1(Component);
  return function (style, options) {
    return componentCreator(style, _extends({
      defaultTheme: defaultTheme
    }, options));
  };
};

var styleFunction = css(compose(borders, display, flexbox, grid, positions, palette, boxShadow, sizing, spacing, typography));
/**
 * @ignore - do not document.
 */

var Box = styled('div')(styleFunction, {
  name: 'MuiBox'
});

export { Box as B };
//# sourceMappingURL=Box-419b1ee4.js.map
