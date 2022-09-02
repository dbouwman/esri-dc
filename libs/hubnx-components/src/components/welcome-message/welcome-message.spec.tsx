import { newSpecPage } from '@stencil/core/testing';
import { WelcomeMessage } from './welcome-message';

describe('welcome-message', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [WelcomeMessage],
      html: '<welcome-message></welcome-message>',
    });
    expect(root).toEqualHtml(`
      <welcome-message>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </welcome-message>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [WelcomeMessage],
      html: `<welcome-message first="Stencil" last="'Don't call me a framework' JS"></welcome-message>`,
    });
    expect(root).toEqualHtml(`
      <welcome-message first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </welcome-message>
    `);
  });
});
