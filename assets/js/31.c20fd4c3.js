(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{245:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"documents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#documents"}},[t._v("#")]),t._v(" Documents")]),t._v(" "),s("h2",{attrs:{id:"get-one-document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-one-document"}},[t._v("#")]),t._v(" Get one document")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:uid/documents/:identifier"}}),t._v(" "),s("p",[t._v("Get one document using its unique identifier.")]),t._v(" "),s("h4",{attrs:{id:"path-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("uid")])]),t._v(" "),s("td",[t._v("The index UID")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("identifier")])]),t._v(" "),s("td",[s("router-link",{attrs:{to:"/guides/main_concepts/indexes.html#identifier"}},[t._v("The unique identifier of the document")])],1)])])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/12345678/documents/25684'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-200-ok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25684")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"American Ninja 5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1993-01-01"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"get-documents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-documents"}},[t._v("#")]),t._v(" Get documents")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:uid/documents"}}),t._v(" "),s("p",[t._v("Get documents by batch."),s("br"),t._v("\nUsing the query parameters "),s("code",[t._v("offset")]),t._v(" and "),s("code",[t._v("limit")]),t._v(", you can browse through all your documents.")]),t._v(" "),s("p",[t._v("Documents are ordered in a specific way by MeiliSearch (the hash of the identifier).")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("This route is a non-optimized route, it can be a little bit slow to answer.")])]),t._v(" "),s("h4",{attrs:{id:"path-variables-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h4",{attrs:{id:"query-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[t._v("#")]),t._v(" Query Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Query Parameter")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("offset")])]),t._v(" "),s("td",[t._v("number of documents to skip")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("limit")])]),t._v(" "),s("td",[t._v("number of documents to take")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("attributesToRetrieve")])]),t._v(" "),s("td",[t._v("document attributes to show")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("*")])])])]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/12345678/documents?limit=2'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-200-ok-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok-2"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25684")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1993-01-01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"American Ninja 5"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("468219")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dead in a Week (Or Your Money Back)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-09-12"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/f4ANVEuEaGy2oP5M0Y2P1dwxUNn.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"William has failed to kill himself so many times that he outsources his suicide to aging assassin Leslie. But with the contract signed and death assured within a week (or his money back), William suddenly discovers reasons to live... However Leslie is under pressure from his boss to make sure the contract is completed."')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"add-or-replace-documents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-or-replace-documents"}},[t._v("#")]),t._v(" Add or replace documents")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:uid/documents"}}),t._v(" "),s("p",[t._v("Insert a list of documents or replace them if they already exist based on "),s("router-link",{attrs:{to:"/guides/main_concepts/indexes.html#schema-definition"}},[t._v("their unique identifiers")]),t._v(".")],1),t._v(" "),s("p",[t._v("In case of a replacement, the old document will be completely erased and replaced by the new one."),s("br"),t._v("\nFor a partial update, check out the "),s("router-link",{attrs:{to:"/references/documents.html#add-or-update-documents"}},[t._v("add or update documents route")]),t._v(".")],1),t._v(" "),s("p",[t._v("The "),s("code",[t._v("updateId")]),t._v(" returned by this route can be sent to the "),s("router-link",{attrs:{to:"/references/updates.html#get-an-update-status"}},[t._v("update status route")]),t._v(" to retrieve information about its progress.")],1),t._v(" "),s("h4",{attrs:{id:"path-variables-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h4",{attrs:{id:"body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),s("p",[t._v("The body is composed of a "),s("strong",[t._v("JSON array")]),t._v(" of documents. The fields of each document correspond to those in the index schema.\nYou can "),s("router-link",{attrs:{to:"/guides/main_concepts/indexes.html#schema-definition"}},[t._v("read more about fields and schemas")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Documents fields which are not known to the index schema will be ignored.")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("287947")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shazam"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"poster"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overview"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A boy is given the ability to become an adult superhero in times of need with a single magic word."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"release_date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-03-23"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"example-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/12345678/documents'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{\n      "id": 287947,\n      "title": "Shazam",\n      "poster": "https://image.tmdb.org/t/p/w1280/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",\n      "overview": "A boy is given the ability to become an adult superhero in times of need with a single magic word.",\n      "release_date": "2019-03-23"\n    }]\'')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-202-accepted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("202 Accepted")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This "),s("code",[t._v("updateId")]),t._v(" allows you to "),s("router-link",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"add-or-update-documents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-or-update-documents"}},[t._v("#")]),t._v(" Add or update documents")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"PUT",route:"/indexes/:uid/documents"}}),t._v(" "),s("p",[t._v("Insert a list of documents or update them if they already exist based on "),s("router-link",{attrs:{to:"/guides/main_concepts/indexes.html#schema-definition"}},[t._v("their unique identifiers")]),t._v(".")],1),t._v(" "),s("p",[t._v("In case of an update, the old document will be only partially updated according to the fields in the request body. It will not be overwritten entirely."),s("br"),t._v("\nTo completely overwrite a document, check out the "),s("router-link",{attrs:{to:"/references/documents.html#add-or-replace-documents"}},[t._v("add and replace documents route")]),t._v(".")],1),t._v(" "),s("p",[t._v("The "),s("code",[t._v("updateId")]),t._v(" returned by this route can be sent to the "),s("router-link",{attrs:{to:"/references/updates.html#get-an-update-status"}},[t._v("update status route")]),t._v(" to retrieve information about its progress.")],1),t._v(" "),s("h4",{attrs:{id:"path-variables-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-4"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h4",{attrs:{id:"body-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body-2"}},[t._v("#")]),t._v(" Body")]),t._v(" "),s("p",[t._v("The body is composed of a "),s("strong",[t._v("JSON array")]),t._v(" of documents. The fields of each document correspond to those in the index schema.\nYou can "),s("router-link",{attrs:{to:"/guides/main_concepts/indexes.html#schema-definition"}},[t._v("read more about fields and schemas")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Documents fields which are not known to the index schema will be ignored.")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("287947")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shazam ⚡️"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"example-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/12345678/documents'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{\n      "id": 287947,\n      "title": "Shazam ⚡️"\n    }]\'')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-202-accepted-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-2"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("202 Accepted")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This "),s("code",[t._v("updateId")]),t._v(" allows you to "),s("router-link",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"delete-all-documents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-all-documents"}},[t._v("#")]),t._v(" Delete all documents")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:uid/documents"}}),t._v(" "),s("p",[t._v("Delete all documents in the specified index.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("updateId")]),t._v(" returned by this route can be sent to the "),s("router-link",{attrs:{to:"/references/updates.html#get-an-update-status"}},[t._v("update status route")]),t._v(" to retrieve information about its progress.")],1),t._v(" "),s("h4",{attrs:{id:"path-variables-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-5"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h3",{attrs:{id:"example-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X DELETE "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/12345678/documents'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-202-accepted-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-3"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("202 Accepted")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This "),s("code",[t._v("updateId")]),t._v(" allows you to "),s("router-link",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"delete-one-document"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-one-document"}},[t._v("#")]),t._v(" Delete one document")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:uid/documents/:identifier"}}),t._v(" "),s("p",[t._v("Delete one document based on its unique identifier."),s("br"),t._v("\nYou can read more about "),s("router-link",{attrs:{to:"/guides/main_concepts/indexes.html#schema-definition"}},[t._v("identifiers and schemas")]),t._v(".")],1),t._v(" "),s("p",[t._v("The "),s("code",[t._v("updateId")]),t._v(" returned by this route can be sent to the "),s("router-link",{attrs:{to:"/references/updates.html#get-an-update-status"}},[t._v("update status route")]),t._v(" to retrieve information about its progress.")],1),t._v(" "),s("h4",{attrs:{id:"path-variables-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-6"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h3",{attrs:{id:"example-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-6"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X DELETE "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/12345678/documents/25684'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-202-accepted-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-4"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("202 Accepted")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This "),s("code",[t._v("updateId")]),t._v(" allows you to "),s("router-link",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"delete-documents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-documents"}},[t._v("#")]),t._v(" Delete documents")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"POST",route:"/indexes/:uid/documents/delete"}}),t._v(" "),s("p",[t._v("Delete a selection of documents based on array of identifiers."),s("br"),t._v("\nYou can read more about "),s("router-link",{attrs:{to:"/guides/main_concepts/indexes.html#schema-definition"}},[t._v("identifiers and schemas")]),t._v(".")],1),t._v(" "),s("p",[t._v("The "),s("code",[t._v("updateId")]),t._v(" returned by this route can be sent to the "),s("router-link",{attrs:{to:"/references/updates.html#get-an-update-status"}},[t._v("update status route")]),t._v(" to retrieve information about its progress.")],1),t._v(" "),s("h4",{attrs:{id:"path-variables-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-7"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h4",{attrs:{id:"body-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body-3"}},[t._v("#")]),t._v(" Body")]),t._v(" "),s("p",[t._v("The body must be a "),s("strong",[t._v("Json Array")]),t._v(" with the unique identifiers of the documents to delete.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23488")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("153738")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("437035")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("363869")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"example-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-7"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/12345678'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[\n      23488,\n      153738,\n      437035,\n      363869\n    ]'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-202-accepted-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-202-accepted-5"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("202 Accepted")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updateId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This "),s("code",[t._v("updateId")]),t._v(" allows you to "),s("router-link",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);