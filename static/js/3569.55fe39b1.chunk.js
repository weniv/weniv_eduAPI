"use strict";(self.webpackChunkweniv_eduapi=self.webpackChunkweniv_eduapi||[]).push([[3569,8055,9068,6687,4306],{3569:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var a=t(5972),i=t(8055),m=t(9068),s=t(4635);const o=Object.freeze({displayName:"HTTP",fileTypes:["http","rest"],name:"http",patterns:[{begin:"^\\s*(?=curl)",end:"^\\s*(\\#{3,}.*?)?\\s*$",endCaptures:{0:{name:"comment.line.sharp.http"}},name:"http.request.curl",patterns:[{include:"source.shell"}]},{begin:"\\s*(?=(\\[|{[^{]))",end:"^\\s*(\\#{3,}.*?)?\\s*$",endCaptures:{0:{name:"comment.line.sharp.http"}},name:"http.request.body.json",patterns:[{include:"source.json"}]},{begin:"^\\s*(?=<\\S)",end:"^\\s*(\\#{3,}.*?)?\\s*$",endCaptures:{0:{name:"comment.line.sharp.http"}},name:"http.request.body.xml",patterns:[{include:"text.xml"}]},{begin:"\\s*(?=(query|mutation))",end:"^\\s*(\\#{3,}.*?)?\\s*$",endCaptures:{0:{name:"comment.line.sharp.http"}},name:"http.request.body.graphql",patterns:[{include:"source.graphql"}]},{begin:"\\s*(?=(query|mutation))",end:"^\\{\\s*$",name:"http.request.body.graphql",patterns:[{include:"source.graphql"}]},{include:"#metadata"},{include:"#comments"},{captures:{1:{name:"keyword.other.http"},2:{name:"variable.other.http"},3:{name:"string.other.http"}},match:"^\\s*(@)([^\\s=]+)\\s*=\\s*(.*?)\\s*$",name:"http.filevariable"},{captures:{1:{name:"keyword.operator.http"},2:{name:"variable.other.http"},3:{name:"string.other.http"}},match:"^\\s*(\\?|&)([^=\\s]+)=(.*)$",name:"http.query"},{captures:{1:{name:"entity.name.tag.http"},2:{name:"keyword.other.http"},3:{name:"string.other.http"}},match:"^([\\w\\-]+)\\s*(\\:)\\s*([^/].*?)\\s*$",name:"http.headers"},{include:"#request-line"},{include:"#response-line"}],repository:{comments:{patterns:[{match:"^\\s*\\#{1,}.*$",name:"comment.line.sharp.http"},{match:"^\\s*\\/{2,}.*$",name:"comment.line.double-slash.http"}]},metadata:{patterns:[{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"},3:{name:"entity.name.type.http"}},match:"^\\s*\\#{1,}\\s+(?:((@)name)\\s+([^\\s\\.]+))$",name:"comment.line.sharp.http"},{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"},3:{name:"entity.name.type.http"}},match:"^\\s*\\/{2,}\\s+(?:((@)name)\\s+([^\\s\\.]+))$",name:"comment.line.double-slash.http"},{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"}},match:"^\\s*\\#{1,}\\s+((@)note)\\s*$",name:"comment.line.sharp.http"},{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"}},match:"^\\s*\\/{2,}\\s+((@)note)\\s*$",name:"comment.line.double-slash.http"},{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"},3:{name:"variable.other.http"},4:{name:"string.other.http"}},match:"^\\s*\\#{1,}\\s+(?:((@)prompt)\\s+([^\\s]+)(?:\\s+(.*))?\\s*)$",name:"comment.line.sharp.http"},{captures:{1:{name:"entity.other.attribute-name"},2:{name:"punctuation.definition.block.tag.metadata"},3:{name:"variable.other.http"},4:{name:"string.other.http"}},match:"^\\s*\\/{2,}\\s+(?:((@)prompt)\\s+([^\\s]+)(?:\\s+(.*))?\\s*)$",name:"comment.line.double-slash.http"}]},protocol:{patterns:[{captures:{1:{name:"keyword.other.http"},2:{name:"constant.numeric.http"}},match:"(HTTP)/(\\d+.\\d+)",name:"http.version"}]},"request-line":{captures:{1:{name:"keyword.control.http"},2:{name:"const.language.http"},3:{patterns:[{include:"#protocol"}]}},match:"(?i)^(?:(get|post|put|delete|patch|head|options|connect|trace|lock|unlock|propfind|proppatch|copy|move|mkcol|mkcalendar|acl|search)\\s+)?\\s*(.+?)(?:\\s+(HTTP\\/\\S+))?$",name:"http.requestline"},"response-line":{captures:{1:{patterns:[{include:"#protocol"}]},2:{name:"constant.numeric.http"},3:{name:"string.other.http"}},match:"(?i)^\\s*(HTTP\\/\\S+)\\s([1-5][0-9][0-9])\\s(.*)$",name:"http.responseLine"}},scopeName:"source.http",embeddedLangs:["shellscript","json","xml","graphql"]});var r=[...a.default,...i.default,...m.default,...s.default,o]},8055:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var a=[Object.freeze({displayName:"JSON",name:"json",patterns:[{include:"#value"}],repository:{array:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.array.begin.json"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.array.end.json"}},name:"meta.structure.array.json",patterns:[{include:"#value"},{match:",",name:"punctuation.separator.array.json"},{match:"[^\\s\\]]",name:"invalid.illegal.expected-array-separator.json"}]},comments:{patterns:[{begin:"/\\*\\*(?!/)",captures:{0:{name:"punctuation.definition.comment.json"}},end:"\\*/",name:"comment.block.documentation.json"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.json"}},end:"\\*/",name:"comment.block.json"},{captures:{1:{name:"punctuation.definition.comment.json"}},match:"(//).*$\\n?",name:"comment.line.double-slash.js"}]},constant:{match:"\\b(?:true|false|null)\\b",name:"constant.language.json"},number:{match:"(?x)\n-?\n(?:\n0\n|\n[1-9]\n\\d*\n)\n(?:\n(?:\n\\.\n\\d+\n)?\n(?:\n[eE]\n[+-]?\n\\d+\n)?\n)?",name:"constant.numeric.json"},object:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.dictionary.begin.json"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.dictionary.end.json"}},name:"meta.structure.dictionary.json",patterns:[{comment:"the JSON object key",include:"#objectkey"},{include:"#comments"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.dictionary.key-value.json"}},end:"(,)|(?=\\})",endCaptures:{1:{name:"punctuation.separator.dictionary.pair.json"}},name:"meta.structure.dictionary.value.json",patterns:[{comment:"the JSON object value",include:"#value"},{match:"[^\\s,]",name:"invalid.illegal.expected-dictionary-separator.json"}]},{match:"[^\\s\\}]",name:"invalid.illegal.expected-dictionary-separator.json"}]},objectkey:{begin:'"',beginCaptures:{0:{name:"punctuation.support.type.property-name.begin.json"}},end:'"',endCaptures:{0:{name:"punctuation.support.type.property-name.end.json"}},name:"string.json support.type.property-name.json",patterns:[{include:"#stringcontent"}]},string:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.json"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.json"}},name:"string.quoted.double.json",patterns:[{include:"#stringcontent"}]},stringcontent:{patterns:[{match:'(?x)\n\\\\\n(?:\n["\\\\/bfnrt]\n|\nu\n[0-9a-fA-F]{4})',name:"constant.character.escape.json"},{match:"\\\\.",name:"invalid.illegal.unrecognized-string-escape.json"}]},value:{patterns:[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"},{include:"#comments"}]}},scopeName:"source.json"})]},9068:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(1057);const i=Object.freeze({displayName:"XML",name:"xml",patterns:[{begin:"(<\\?)\\s*([-_a-zA-Z0-9]+)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.xml"}},end:"(\\?>)",name:"meta.tag.preprocessor.xml",patterns:[{match:" ([a-zA-Z-]+)",name:"entity.other.attribute-name.xml"},{include:"#doublequotedString"},{include:"#singlequotedString"}]},{begin:"(<!)(DOCTYPE)\\s+([:a-zA-Z_][:a-zA-Z0-9_.-]*)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"keyword.other.doctype.xml"},3:{name:"variable.language.documentroot.xml"}},end:"\\s*(>)",name:"meta.tag.sgml.doctype.xml",patterns:[{include:"#internalSubset"}]},{include:"#comments"},{begin:"(<)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(?=(\\s[^>]*)?></\\2>)",beginCaptures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.xml"},3:{name:"entity.name.tag.namespace.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(>)(</)((?:([-_a-zA-Z0-9]+)(:))?([-_a-zA-Z0-9:]+))(>)",endCaptures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"punctuation.definition.tag.xml"},3:{name:"entity.name.tag.xml"},4:{name:"entity.name.tag.namespace.xml"},5:{name:"punctuation.separator.namespace.xml"},6:{name:"entity.name.tag.localname.xml"},7:{name:"punctuation.definition.tag.xml"}},name:"meta.tag.no-content.xml",patterns:[{include:"#tagStuff"}]},{begin:"(</?)(?:([-\\w\\.]+)((:)))?([-\\w\\.:]+)",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"entity.name.tag.namespace.xml"},3:{name:"entity.name.tag.xml"},4:{name:"punctuation.separator.namespace.xml"},5:{name:"entity.name.tag.localname.xml"}},end:"(/?>)",name:"meta.tag.xml",patterns:[{include:"#tagStuff"}]},{include:"#entity"},{include:"#bare-ampersand"},{begin:"<%@",beginCaptures:{0:{name:"punctuation.section.embedded.begin.xml"}},end:"%>",endCaptures:{0:{name:"punctuation.section.embedded.end.xml"}},name:"source.java-props.embedded.xml",patterns:[{match:"page|include|taglib",name:"keyword.other.page-props.xml"}]},{begin:"<%[!=]?(?!--)",beginCaptures:{0:{name:"punctuation.section.embedded.begin.xml"}},end:"(?!--)%>",endCaptures:{0:{name:"punctuation.section.embedded.end.xml"}},name:"source.java.embedded.xml",patterns:[{include:"source.java"}]},{begin:"<!\\[CDATA\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"]]>",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.unquoted.cdata.xml"}],repository:{EntityDecl:{begin:"(<!)(ENTITY)\\s+(%\\s+)?([:a-zA-Z_][:a-zA-Z0-9_.-]*)(\\s+(?:SYSTEM|PUBLIC)\\s+)?",captures:{1:{name:"punctuation.definition.tag.xml"},2:{name:"keyword.other.entity.xml"},3:{name:"punctuation.definition.entity.xml"},4:{name:"variable.language.entity.xml"},5:{name:"keyword.other.entitytype.xml"}},end:"(>)",patterns:[{include:"#doublequotedString"},{include:"#singlequotedString"}]},"bare-ampersand":{match:"&",name:"invalid.illegal.bad-ampersand.xml"},comments:{patterns:[{begin:"<%--",captures:{0:{name:"punctuation.definition.comment.xml"},end:"--%>",name:"comment.block.xml"}},{begin:"\x3c!--",captures:{0:{name:"punctuation.definition.comment.xml"}},end:"--\x3e",name:"comment.block.xml",patterns:[{begin:"--(?!>)",captures:{0:{name:"invalid.illegal.bad-comments-or-CDATA.xml"}}}]}]},doublequotedString:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.double.xml",patterns:[{include:"#entity"},{include:"#bare-ampersand"}]},entity:{captures:{1:{name:"punctuation.definition.constant.xml"},3:{name:"punctuation.definition.constant.xml"}},match:"(&)([:a-zA-Z_][:a-zA-Z0-9_.-]*|#[0-9]+|#x[0-9a-fA-F]+)(;)",name:"constant.character.entity.xml"},internalSubset:{begin:"(\\[)",captures:{1:{name:"punctuation.definition.constant.xml"}},end:"(\\])",name:"meta.internalsubset.xml",patterns:[{include:"#EntityDecl"},{include:"#parameterEntity"},{include:"#comments"}]},parameterEntity:{captures:{1:{name:"punctuation.definition.constant.xml"},3:{name:"punctuation.definition.constant.xml"}},match:"(%)([:a-zA-Z_][:a-zA-Z0-9_.-]*)(;)",name:"constant.character.parameter-entity.xml"},singlequotedString:{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.xml"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.xml"}},name:"string.quoted.single.xml",patterns:[{include:"#entity"},{include:"#bare-ampersand"}]},tagStuff:{patterns:[{captures:{1:{name:"entity.other.attribute-name.namespace.xml"},2:{name:"entity.other.attribute-name.xml"},3:{name:"punctuation.separator.namespace.xml"},4:{name:"entity.other.attribute-name.localname.xml"}},match:"(?:^|\\s+)(?:([-\\w.]+)((:)))?([-\\w.:]+)\\s*="},{include:"#doublequotedString"},{include:"#singlequotedString"}]}},scopeName:"text.xml",embeddedLangs:["java"]});var m=[...a.default,i]}}]);
//# sourceMappingURL=3569.55fe39b1.chunk.js.map