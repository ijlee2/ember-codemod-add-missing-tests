import { module, test } from 'qunit';
import <% if (data.utilities.default.length > 0) {%><%= data.utilities.default[0] %><% if (data.utilities.named.length > 0) {%>, <% } %><% } %><% if (data.utilities.named.length > 0) {%>{ <% data.utilities.named.forEach((name, index) => {%><%= name %><% if (index < data.utilities.named.length - 1) {%>, <% } %><% }); %> }<% } %> from '<%= data.packageName %>/utils/<%= data.entity.name %>';
import { setupTest } from '<%= data.testAppName %>/tests/helpers';

module('Unit | Utility | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);
<% if (data.utilities.default.length > 0) {%>
  test('<%= data.utilities.default[0] %>', function (assert) {
    assert.ok(<%= data.utilities.default[0] %>);
  });<% if (data.utilities.named.length > 0) {%>
<% } %><% } %><% data.utilities.named.forEach((name, index) => {%>
  test('<%= name %>', function (assert) {
    assert.ok(<%= name %>);
  });<% if (index < data.utilities.named.length - 1) {%>
<% } %><% }); %>
});
