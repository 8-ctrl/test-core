/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Zelthy Docs",
  "tagline": "Next-Gen HealthCare App Development Platform",
  "favicon": "img/favicon.ico",
  "url": "https://zelthystatichosting.s3.ap-south-1.amazonaws.com",
  "baseUrl": "/docs/",
  "organizationName": "zelthy",
  "projectName": "zelthy_docs",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "stylesheets": [
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
    "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Source+Code+Pro:wght@400;600;700&display=swap"
  ],
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/Users/neelpatel/Desktop/zelthy3/docs/sidebars.js",
          "editUrl": "https://github.com/Healthlane-Technologies/zelthy3/tree/documentation/docs"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/Healthlane-Technologies/zelthy3/tree/documentation/docs"
        },
        "theme": {
          "customCss": "/Users/neelpatel/Desktop/zelthy3/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "image": "img/zelthy-social-card.jpg",
    "navbar": {
      "title": "Zelthy Docs",
      "logo": {
        "alt": "Zelthy Logo",
        "src": "img/zelthy_logo.png",
        "href": "/docs/documentation/introduction"
      },
      "items": [
        {
          "type": "docSidebar",
          "sidebarId": "docsSidebar",
          "position": "left",
          "label": "Docs"
        },
        {
          "label": "Packages",
          "position": "left",
          "type": "dropdown",
          "items": [
            {
              "label": "Login",
              "to": "/login"
            },
            {
              "label": "Frame",
              "to": "/frame"
            },
            {
              "label": "Crud",
              "to": "/crud"
            }
          ]
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [],
      "copyright": "Copyright © 2024 Healthlane Technologies Pvt. Ltd."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "zoom": {
      "selector": ".markdown img",
      "background": {
        "light": "rgb(255, 255, 255)",
        "dark": "rgb(50, 50, 50)"
      },
      "config": {
        "margin": 36
      }
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "plugins": [
    "/Users/neelpatel/Desktop/zelthy3/docs/node_modules/@cmfcmf/docusaurus-search-local/lib/server/index.js",
    "docusaurus-plugin-image-zoom"
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "scripts": [],
  "headTags": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
