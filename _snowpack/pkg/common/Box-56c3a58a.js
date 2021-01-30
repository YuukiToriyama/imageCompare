import { _ as _extends, s as spacing } from './useTheme-44d92618.js';
import { d as defaultTheme } from './defaultTheme-7753c4cc.js';
import { s as styled$1, c as css, a as compose, b as borders, d as display, f as flexbox, g as grid, p as positions, e as palette, h as boxShadow, i as sizing, t as typography } from './styled-e970527e.js';

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
//# sourceMappingURL=Box-56c3a58a.js.map
