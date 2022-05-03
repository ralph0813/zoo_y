import React, { Component } from 'react';
import Editor from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import { EditorState } from 'draft-js';

const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();

const plugins = [linkifyPlugin, hashtagPlugin];

export default class UnicornEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  // @ts-ignore
  onChange = editorState => {
    this.setState({
      editorState,
    });
  };

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        plugins={plugins}
      />
    );
  }
}
