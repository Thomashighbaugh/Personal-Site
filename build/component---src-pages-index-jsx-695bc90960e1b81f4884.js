(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    271: function(e, t, a) {
      'use strict';
      a.r(t);
      var r = a(0),
        n = a.n(r),
        o = (a(43), a(266)),
        c = a(267),
        l = a(291),
        u = a(295),
        s = a(292),
        d = a(285),
        i = a.n(d);
      t.default = function() {
        return n.a.createElement(
          o.a,
          { id: 'home' },
          n.a.createElement(
            'div',
            { id: 'home' },
            n.a.createElement(c.a, { title: '[welcome]' }),
            n.a.createElement(
              i.a,
              null,
              n.a.createElement(
                u.a,
                null,
                n.a.createElement(l.a, null, '[welcome]')
              ),
              n.a.createElement(
                s.a,
                null,
                n.a.createElement(
                  'section',
                  null,
                  n.a.createElement(
                    'div',
                    { className: 'media' },
                    n.a.createElement('img', {
                      src:
                        'https://raw.githubusercontent.com/Thomashighbaugh/resurgens-iv/master/dogpatchcircuit.png',
                      alt: 'dogpatch',
                    })
                  )
                )
              )
            )
          )
        );
      };
    },
    280: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return c;
      }),
        a.d(t, 'b', function() {
          return u;
        });
      a(37), a(19), a(5), a(6), a(2), a(9), a(21), a(42), a(27), a(290);
      var r,
        n = a(23),
        o = a.n(n);
      function c(e, t) {
        return (
          void 0 === e && (e = ''),
          void 0 === t && (t = r),
          t
            ? e
                .split(' ')
                .map(function(e) {
                  return t[e] || e;
                })
                .join(' ')
            : e
        );
      }
      var l = ('object' == typeof window && window.Element) || function() {};
      o.a.oneOfType([
        o.a.string,
        o.a.func,
        function(e, t, a) {
          if (!(e[t] instanceof l))
            return new Error(
              'Invalid prop `' +
                t +
                '` supplied to `' +
                a +
                '`. Expected prop to be an instance of Element. Validation failed.'
            );
        },
        o.a.shape({ current: o.a.any }),
      ]);
      var u = o.a.oneOfType([
        o.a.func,
        o.a.string,
        o.a.shape({ $$typeof: o.a.symbol, render: o.a.func }),
        o.a.arrayOf(
          o.a.oneOfType([
            o.a.func,
            o.a.string,
            o.a.shape({ $$typeof: o.a.symbol, render: o.a.func }),
          ])
        ),
      ]);
      'undefined' == typeof window ||
        !window.document ||
        window.document.createElement;
    },
    281: function(e, t, a) {
      'use strict';
      var r = a(1);
      (t.__esModule = !0),
        (t.default = function(e, t) {
          var a = void 0 === t ? {} : t,
            r = a.displayName,
            u = void 0 === r ? d(e) : r,
            i = a.Component,
            f = void 0 === i ? 'div' : i,
            m = a.defaultProps,
            p = l.default.forwardRef(function(t, a) {
              var r = t.className,
                u = t.bsPrefix,
                d = t.as,
                i = void 0 === d ? f : d,
                m = (0, o.default)(t, ['className', 'bsPrefix', 'as']),
                p = (0, s.useBootstrapPrefix)(u, e);
              return l.default.createElement(
                i,
                (0, n.default)({ ref: a, className: (0, c.default)(r, p) }, m)
              );
            });
          return (p.defaultProps = m), (p.displayName = u), p;
        });
      var n = r(a(28)),
        o = r(a(56)),
        c = r(a(26)),
        l = r(a(0)),
        u = r(a(98)),
        s = a(174),
        d = function(e) {
          return e[0].toUpperCase() + (0, u.default)(e).slice(1);
        };
      e.exports = t.default;
    },
    282: function(e, t, a) {
      'use strict';
      var r = a(1);
      (t.__esModule = !0), (t.default = void 0);
      var n = r(a(28)),
        o = r(a(0)),
        c = r(a(26));
      (t.default = function(e) {
        return o.default.forwardRef(function(t, a) {
          return o.default.createElement(
            'div',
            (0, n.default)({}, t, {
              ref: a,
              className: (0, c.default)(t.className, e),
            })
          );
        });
      }),
        (e.exports = t.default);
    },
    285: function(e, t, a) {
      'use strict';
      var r = a(62),
        n = a(1);
      (t.__esModule = !0), (t.default = void 0);
      var o = n(a(28)),
        c = n(a(56)),
        l = n(a(26)),
        u = r(a(0)),
        s = a(174),
        d = n(a(281)),
        i = n(a(282)),
        f = n(a(286)),
        m = n(a(287)),
        p = (0, i.default)('h5'),
        v = (0, i.default)('h6'),
        b = (0, d.default)('card-body'),
        g = u.default.forwardRef(function(e, t) {
          var a = e.bsPrefix,
            r = e.className,
            n = e.bg,
            d = e.text,
            i = e.border,
            m = e.body,
            p = e.children,
            v = e.as,
            g = void 0 === v ? 'div' : v,
            y = (0, c.default)(e, [
              'bsPrefix',
              'className',
              'bg',
              'text',
              'border',
              'body',
              'children',
              'as',
            ]),
            j = (0, s.useBootstrapPrefix)(a, 'card'),
            N = (0, u.useMemo)(
              function() {
                return { cardHeaderBsPrefix: j + '-header' };
              },
              [j]
            );
          return u.default.createElement(
            f.default.Provider,
            { value: N },
            u.default.createElement(
              g,
              (0, o.default)({ ref: t }, y, {
                className: (0, l.default)(
                  r,
                  j,
                  n && 'bg-' + n,
                  d && 'text-' + d,
                  i && 'border-' + i
                ),
              }),
              m ? u.default.createElement(b, null, p) : p
            )
          );
        });
      (g.displayName = 'Card'),
        (g.defaultProps = { body: !1 }),
        (g.Img = m.default),
        (g.Title = (0, d.default)('card-title', { Component: p })),
        (g.Subtitle = (0, d.default)('card-subtitle', { Component: v })),
        (g.Body = b),
        (g.Link = (0, d.default)('card-link', { Component: 'a' })),
        (g.Text = (0, d.default)('card-text', { Component: 'p' })),
        (g.Header = (0, d.default)('card-header')),
        (g.Footer = (0, d.default)('card-footer')),
        (g.ImgOverlay = (0, d.default)('card-img-overlay'));
      var y = g;
      (t.default = y), (e.exports = t.default);
    },
    286: function(e, t, a) {
      'use strict';
      var r = a(1);
      (t.__esModule = !0), (t.default = void 0);
      var n = r(a(0)).default.createContext(null);
      (t.default = n), (e.exports = t.default);
    },
    287: function(e, t, a) {
      'use strict';
      var r = a(1);
      (t.__esModule = !0), (t.default = void 0);
      var n = r(a(28)),
        o = r(a(56)),
        c = r(a(26)),
        l = r(a(0)),
        u = a(174),
        s = l.default.forwardRef(function(e, t) {
          var a = e.bsPrefix,
            r = e.className,
            s = e.variant,
            d = e.as,
            i = void 0 === d ? 'img' : d,
            f = (0, o.default)(e, ['bsPrefix', 'className', 'variant', 'as']),
            m = (0, u.useBootstrapPrefix)(a, 'card-img');
          return l.default.createElement(
            i,
            (0, n.default)(
              { ref: t, className: (0, c.default)(s ? m + '-' + s : m, r) },
              f
            )
          );
        });
      (s.displayName = 'CardImg'), (s.defaultProps = { variant: null });
      var d = s;
      (t.default = d), (e.exports = t.default);
    },
    290: function(e, t, a) {
      (function(t) {
        a(64), a(96), a(2);
        var r = '[object AsyncFunction]',
          n = '[object Function]',
          o = '[object GeneratorFunction]',
          c = '[object Null]',
          l = '[object Proxy]',
          u = '[object Undefined]',
          s = 'object' == typeof t && t && t.Object === Object && t,
          d = 'object' == typeof self && self && self.Object === Object && self,
          i = s || d || Function('return this')(),
          f = Object.prototype,
          m = f.hasOwnProperty,
          p = f.toString,
          v = i.Symbol,
          b = v ? v.toStringTag : void 0;
        function g(e) {
          return null == e
            ? void 0 === e
              ? u
              : c
            : b && b in Object(e)
            ? (function(e) {
                var t = m.call(e, b),
                  a = e[b];
                try {
                  e[b] = void 0;
                  var r = !0;
                } catch (o) {}
                var n = p.call(e);
                r && (t ? (e[b] = a) : delete e[b]);
                return n;
              })(e)
            : (function(e) {
                return p.call(e);
              })(e);
        }
        e.exports = function(e) {
          if (
            !(function(e) {
              var t = typeof e;
              return null != e && ('object' == t || 'function' == t);
            })(e)
          )
            return !1;
          var t = g(e);
          return t == n || t == o || t == r || t == l;
        };
      }.call(this, a(123)));
    },
    291: function(e, t, a) {
      'use strict';
      var r = a(4),
        n = a(10),
        o = a(0),
        c = a.n(o),
        l = a(23),
        u = a.n(l),
        s = a(26),
        d = a.n(s),
        i = a(280),
        f = { tag: i.b, className: u.a.string, cssModule: u.a.object },
        m = function(e) {
          var t = e.className,
            a = e.cssModule,
            o = e.tag,
            l = Object(n.a)(e, ['className', 'cssModule', 'tag']),
            u = Object(i.a)(d()(t, 'card-title'), a);
          return c.a.createElement(o, Object(r.a)({}, l, { className: u }));
        };
      (m.propTypes = f), (m.defaultProps = { tag: 'div' }), (t.a = m);
    },
    292: function(e, t, a) {
      'use strict';
      var r = a(4),
        n = a(10),
        o = a(0),
        c = a.n(o),
        l = a(23),
        u = a.n(l),
        s = a(26),
        d = a.n(s),
        i = a(280),
        f = {
          tag: i.b,
          className: u.a.string,
          cssModule: u.a.object,
          innerRef: u.a.oneOfType([u.a.object, u.a.string, u.a.func]),
        },
        m = function(e) {
          var t = e.className,
            a = e.cssModule,
            o = e.innerRef,
            l = e.tag,
            u = Object(n.a)(e, ['className', 'cssModule', 'innerRef', 'tag']),
            s = Object(i.a)(d()(t, 'card-body'), a);
          return c.a.createElement(
            l,
            Object(r.a)({}, u, { className: s, ref: o })
          );
        };
      (m.propTypes = f), (m.defaultProps = { tag: 'div' }), (t.a = m);
    },
    295: function(e, t, a) {
      'use strict';
      var r = a(4),
        n = a(10),
        o = a(0),
        c = a.n(o),
        l = a(23),
        u = a.n(l),
        s = a(26),
        d = a.n(s),
        i = a(280),
        f = { tag: i.b, className: u.a.string, cssModule: u.a.object },
        m = function(e) {
          var t = e.className,
            a = e.cssModule,
            o = e.tag,
            l = Object(n.a)(e, ['className', 'cssModule', 'tag']),
            u = Object(i.a)(d()(t, 'card-header'), a);
          return c.a.createElement(o, Object(r.a)({}, l, { className: u }));
        };
      (m.propTypes = f), (m.defaultProps = { tag: 'div' }), (t.a = m);
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-jsx-695bc90960e1b81f4884.js.map
