import { content, element, subexpr, lookupHelper } from "bound-templates/runtime";
import LazyValue from "bound-templates/lazy-value";
import { ifHelper, unlessHelper } from "ember-htmlbars/helpers/if_unless";
import streamFor from "ember-htmlbars/hooks/streamFor";

export var defaultEnv = {
  hooks: {
    content: content,
    element: element,
    subexpr: subexpr,
    lookupHelper: lookupHelper,

    streamFor: streamFor
  },

  helpers: {
    if: ifHelper,
    unless: unlessHelper
  }
};