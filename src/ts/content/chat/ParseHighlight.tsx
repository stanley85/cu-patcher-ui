/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as React from 'react';
import * as events from '../../core/events';

function fromText(text: string, keygen: () => number) : JSX.Element[] {
  //events.fire('chat-play-sound-highlight');
  return [<span key={keygen()} className={'chat-room-highlight'}>{text}</span>];
}

function createRegExp(highlight: string[]) : RegExp {
  let regex: string;
  highlight.forEach((h: string) => {
    if (!regex) {
      regex = '\\b' + h + '\\b';
    } else {
      regex += '|\\b' + h + '\\b';
    }
  });
  return new RegExp(regex, 'g');
}

export default {
  fromText,
  createRegExp
}