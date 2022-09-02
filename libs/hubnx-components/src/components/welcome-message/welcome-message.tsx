import { Component, h, Prop } from '@stencil/core';
import { dasherize } from "@esri-dc/hubnx-js"

@Component({
  tag: 'welcome-message',
  styleUrl: 'welcome-message.css',
  shadow: true,
})
export class WelcomeMessage {
  /**
   * The app name
   */
  @Prop() app: string;

  /**
   * some text to dasherize
   */
  @Prop() text: string;


  private getText(): string {
    return (
     dasherize(this.text)
    );
  }

  render() {
    return <div>Welcome to {this.app} - {this.text} :: {this.getText()}</div>;
  }
}
