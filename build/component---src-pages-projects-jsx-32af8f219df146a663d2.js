(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    283: function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'pageQuery', function() {
          return c;
        });
      var r = a(0),
        n = a.n(r),
        l = a(47),
        o = a(277),
        s = a(278);
      var i = (function(e) {
        var t, a;
        function r() {
          return e.apply(this, arguments) || this;
        }
        return (
          (a = e),
          ((t = r).prototype = Object.create(a.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = a),
          (r.prototype.render = function() {
            var e = this.props.data,
              t = (e.site.siteMetadata.title, e.allMarkdownRemark.edges);
            return n.a.createElement(
              o.a,
              null,
              n.a.createElement(s.a, {
                title: 'Projects',
                description:
                  'Projects by TLH with links to additional descriptions written in Markdown then rendered into pages by Gatsby',
              }),
              n.a.createElement(
                'div',
                { id: 'projects' },
                n.a.createElement(
                  'div',
                  { className: 'projects-page' },
                  n.a.createElement('h1', null, 'Projects'),
                  n.a.createElement(
                    'aside',
                    null,
                    n.a.createElement('h4', null, '[ description ]'),
                    n.a.createElement(
                      'p',
                      null,
                      'Listed here are some of the projects that demonstrate my capacity and flare as a developer.'
                    ),
                    n.a.createElement(
                      'p',
                      null,
                      'The projects listed here range from BASH scripts for Linux-based OSes to my Web Development efforts.'
                    )
                  )
                ),
                n.a.createElement(
                  'main',
                  null,
                  n.a.createElement(
                    'section',
                    null,
                    t.map(function(e) {
                      var t = e.node,
                        a = t.frontmatter.title || t.fields.slug;
                      return n.a.createElement(
                        'div',
                        { className: 'post', key: t.fields.slug },
                        n.a.createElement(
                          'h3',
                          null,
                          n.a.createElement(
                            l.Link,
                            { style: { boxShadow: 'none' }, to: t.fields.slug },
                            a
                          )
                        ),
                        n.a.createElement('small', null, t.frontmatter.date),
                        n.a.createElement('p', {
                          dangerouslySetInnerHTML: {
                            __html: t.frontmatter.description || t.excerpt,
                          },
                        })
                      );
                    })
                  )
                )
              )
            );
          }),
          r
        );
      })(n.a.Component);
      t.default = i;
      var c = '2785444898';
    },
  },
]);
//# sourceMappingURL=component---src-pages-projects-jsx-32af8f219df146a663d2.js.map
