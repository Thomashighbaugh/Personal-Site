(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    280: function(t, e, a) {
      'use strict';
      a.r(e),
        a.d(e, 'pageQuery', function() {
          return s;
        });
      var r = a(0),
        n = a.n(r),
        l = a(47),
        o = a(277),
        i = a(278);
      var c = (function(t) {
        var e, a;
        function r() {
          return t.apply(this, arguments) || this;
        }
        return (
          (a = t),
          ((e = r).prototype = Object.create(a.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = a),
          (r.prototype.render = function() {
            var t = this.props.data.markdownRemark,
              e = this.props.data.site.siteMetadata.title,
              a = this.props.pageContext,
              r = a.previous,
              c = a.next;
            return n.a.createElement(
              o.a,
              { location: this.props.location, title: e },
              n.a.createElement(
                'div',
                { className: 'layout-card' },
                n.a.createElement(i.a, {
                  title: t.frontmatter.title,
                  description: t.frontmatter.description || t.excerpt,
                }),
                n.a.createElement(
                  'div',
                  { className: 'blog-post' },
                  n.a.createElement('p', { id: 'date' }, t.frontmatter.date),
                  n.a.createElement('h1', null, t.frontmatter.title),
                  n.a.createElement('hr', null),
                  n.a.createElement('div', {
                    dangerouslySetInnerHTML: { __html: t.html },
                  }),
                  n.a.createElement('hr', null),
                  n.a.createElement(
                    'ul',
                    { className: 'nav' },
                    n.a.createElement(
                      'li',
                      { className: 'nav-btn' },
                      r &&
                        n.a.createElement(
                          l.Link,
                          { to: r.fields.slug, rel: 'prev' },
                          '← ',
                          r.frontmatter.title
                        )
                    ),
                    n.a.createElement(
                      'li',
                      { className: 'nav-btn' },
                      c &&
                        n.a.createElement(
                          l.Link,
                          { to: c.fields.slug, rel: 'next' },
                          c.frontmatter.title,
                          ' →'
                        )
                    )
                  )
                )
              )
            );
          }),
          r
        );
      })(n.a.Component);
      e.default = c;
      var s = '3654438753';
    },
  },
]);
//# sourceMappingURL=component---src-templates-blog-post-js-10b6005a00e5aee1b97d.js.map
