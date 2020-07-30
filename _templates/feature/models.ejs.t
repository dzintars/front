---
to: src/store/features/<%= tag %>/models.ts
---
<%
  className = h.changeCase.pascal(tag) + 'State'
-%>
export interface <%= className %> {

}
