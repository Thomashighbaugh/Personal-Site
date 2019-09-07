(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    286: function(e, t, a) {
      'use strict';
      a.r(t);
      var r = a(0),
        n = a.n(r),
        o = (a(42), a(281)),
        c = a(282),
        u = a(309),
        s = a(313),
        l = a(310),
        i = a(301),
        d = a.n(i);
      t.default = function() {
        return n.a.createElement(
          o.a,
          { id: 'home' },
          n.a.createElement(
            'div',
            { id: 'home' },
            n.a.createElement(c.a, { title: '[welcome]' }),
            n.a.createElement(
              d.a,
              null,
              n.a.createElement(
                s.a,
                null,
                n.a.createElement(u.a, null, '[welcome]')
              ),
              n.a.createElement(
                l.a,
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
    295: function(e, t, a) {
      e.exports = a(306)();
    },
    296: function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return c;
      }),
        a.d(t, 'b', function() {
          return s;
        });
      a(36), a(19), a(5), a(6), a(2), a(9), a(22), a(41), a(27), a(308);
      var r,
        n = a(295),
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
      var u = ('object' == typeof window && window.Element) || function() {};
      o.a.oneOfType([
        o.a.string,
        o.a.func,
        function(e, t, a) {
          if (!(e[t] instanceof u))
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
      var s = o.a.oneOfType([
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
    297: function(e, t, a) {
      'use strict';
      var r = a(1);
      (t.__esModule = !0),
        (t.default = function(e, t) {
          var a = void 0 === t ? {} : t,
            r = a.displayName,
            s = void 0 === r ? i(e) : r,
            d = a.Component,
            f = void 0 === d ? 'div' : d,
            p = a.defaultProps,
            m = u.default.forwardRef(function(t, a) {
              var r = t.className,
                s = t.bsPrefix,
                i = t.as,
                d = void 0 === i ? f : i,
                p = (0, o.default)(t, ['className', 'bsPrefix', 'as']),
                m = (0, l.useBootstrapPrefix)(s, e);
              return u.default.createElement(
                d,
                (0, n.default)({ ref: a, className: (0, c.default)(r, m) }, p)
              );
            });
          return (m.defaultProps = p), (m.displayName = s), m;
        });
      var n = r(a(28)),
        o = r(a(55)),
        c = r(a(26)),
        u = r(a(0)),
        s = r(a(98)),
        l = a(175),
        i = function(e) {
          return e[0].toUpperCase() + (0, s.default)(e).slice(1);
        };
      e.exports = t.default;
    },
    298: function(e, t, a) {
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
    301: function(e, t, a) {
      'use strict';
      var r = a(61),
        n = a(1);
      (t.__esModule = !0), (t.default = void 0);
      var o = n(a(28)),
        c = n(a(55)),
        u = n(a(26)),
        s = r(a(0)),
        l = a(175),
        i = n(a(297)),
        d = n(a(298)),
        f = n(a(302)),
        p = n(a(303)),
        m = (0, d.default)('h5'),
        v = (0, d.default)('h6'),
        b = (0, i.default)('card-body'),
        y = s.default.forwardRef(function(e, t) {
          var a = e.bsPrefix,
            r = e.className,
            n = e.bg,
            i = e.text,
            d = e.border,
            p = e.body,
            m = e.children,
            v = e.as,
            y = void 0 === v ? 'div' : v,
            g = (0, c.default)(e, [
              'bsPrefix',
              'className',
              'bg',
              'text',
              'border',
              'body',
              'children',
              'as',
            ]),
            h = (0, l.useBootstrapPrefix)(a, 'card'),
            j = (0, s.useMemo)(
              function() {
                return { cardHeaderBsPrefix: h + '-header' };
              },
              [h]
            );
          return s.default.createElement(
            f.default.Provider,
            { value: j },
            s.default.createElement(
              y,
              (0, o.default)({ ref: t }, g, {
                className: (0, u.default)(
                  r,
                  h,
                  n && 'bg-' + n,
                  i && 'text-' + i,
                  d && 'border-' + d
                ),
              }),
              p ? s.default.createElement(b, null, m) : m
            )
          );
        });
      (y.displayName = 'Card'),
        (y.defaultProps = { body: !1 }),
        (y.Img = p.default),
        (y.Title = (0, i.default)('card-title', { Component: m })),
        (y.Subtitle = (0, i.default)('card-subtitle', { Component: v })),
        (y.Body = b),
        (y.Link = (0, i.default)('card-link', { Component: 'a' })),
        (y.Text = (0, i.default)('card-text', { Component: 'p' })),
        (y.Header = (0, i.default)('card-header')),
        (y.Footer = (0, i.default)('card-footer')),
        (y.ImgOverlay = (0, i.default)('card-img-overlay'));
      var g = y;
      (t.default = g), (e.exports = t.default);
    },
    302: function(e, t, a) {
      'use strict';
      var r = a(1);
      (t.__esModule = !0), (t.default = void 0);
      var n = r(a(0)).default.createContext(null);
      (t.default = n), (e.exports = t.default);
    },
    303: function(e, t, a) {
      'use strict';
      var r = a(1);
      (t.__esModule = !0), (t.default = void 0);
      var n = r(a(28)),
        o = r(a(55)),
        c = r(a(26)),
        u = r(a(0)),
        s = a(175),
        l = u.default.forwardRef(function(e, t) {
          var a = e.bsPrefix,
            r = e.className,
            l = e.variant,
            i = e.as,
            d = void 0 === i ? 'img' : i,
            f = (0, o.default)(e, ['bsPrefix', 'className', 'variant', 'as']),
            p = (0, s.useBootstrapPrefix)(a, 'card-img');
          return u.default.createElement(
            d,
            (0, n.default)(
              { ref: t, className: (0, c.default)(l ? p + '-' + l : p, r) },
              f
            )
          );
        });
      (l.displayName = 'CardImg'), (l.defaultProps = { variant: null });
      var i = l;
      (t.default = i), (e.exports = t.default);
    },
    306: function(e, t, a) {
      'use strict';
      a(20);
      var r = a(307);
      function n() {}
      function o() {}
      (o.resetWarningCache = n),
        (e.exports = function() {
          function e(e, t, a, n, o, c) {
            if (c !== r) {
              var u = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((u.name = 'Invariant Violation'), u);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var a = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: n,
          };
          return (a.PropTypes = a), a;
        });
    },
    307: function(e, t, a) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    308: function(e, t, a) {
      (function(t) {
        a(63), a(96), a(2);
        var r = '[object AsyncFunction]',
          n = '[object Function]',
          o = '[object GeneratorFunction]',
          c = '[object Null]',
          u = '[object Proxy]',
          s = '[object Undefined]',
          l = 'object' == typeof t && t && t.Object === Object && t,
          i = 'object' == typeof self && self && self.Object === Object && self,
          d = l || i || Function('return this')(),
          f = Object.prototype,
          p = f.hasOwnProperty,
          m = f.toString,
          v = d.Symbol,
          b = v ? v.toStringTag : void 0;
        function y(e) {
          return null == e
            ? void 0 === e
              ? s
              : c
            : b && b in Object(e)
            ? (function(e) {
                var t = p.call(e, b),
                  a = e[b];
                try {
                  e[b] = void 0;
                  var r = !0;
                } catch (o) {}
                var n = m.call(e);
                r && (t ? (e[b] = a) : delete e[b]);
                return n;
              })(e)
            : (function(e) {
                return m.call(e);
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
          var t = y(e);
          return t == n || t == o || t == r || t == u;
        };
      }.call(this, a(124)));
    },
    309: function(e, t, a) {
      'use strict';
      var r = a(4),
        n = a(10),
        o = a(0),
        c = a.n(o),
        u = a(295),
        s = a.n(u),
        l = a(26),
        i = a.n(l),
        d = a(296),
        f = { tag: d.b, className: s.a.string, cssModule: s.a.object },
        p = function(e) {
          var t = e.className,
            a = e.cssModule,
            o = e.tag,
            u = Object(n.a)(e, ['className', 'cssModule', 'tag']),
            s = Object(d.a)(i()(t, 'card-title'), a);
          return c.a.createElement(o, Object(r.a)({}, u, { className: s }));
        };
      (p.propTypes = f), (p.defaultProps = { tag: 'div' }), (t.a = p);
    },
    310: function(e, t, a) {
      'use strict';
      var r = a(4),
        n = a(10),
        o = a(0),
        c = a.n(o),
        u = a(295),
        s = a.n(u),
        l = a(26),
        i = a.n(l),
        d = a(296),
        f = {
          tag: d.b,
          className: s.a.string,
          cssModule: s.a.object,
          innerRef: s.a.oneOfType([s.a.object, s.a.string, s.a.func]),
        },
        p = function(e) {
          var t = e.className,
            a = e.cssModule,
            o = e.innerRef,
            u = e.tag,
            s = Object(n.a)(e, ['className', 'cssModule', 'innerRef', 'tag']),
            l = Object(d.a)(i()(t, 'card-body'), a);
          return c.a.createElement(
            u,
            Object(r.a)({}, s, { className: l, ref: o })
          );
        };
      (p.propTypes = f), (p.defaultProps = { tag: 'div' }), (t.a = p);
    },
    313: function(e, t, a) {
      'use strict';
      var r = a(4),
        n = a(10),
        o = a(0),
        c = a.n(o),
        u = a(295),
        s = a.n(u),
        l = a(26),
        i = a.n(l),
        d = a(296),
        f = { tag: d.b, className: s.a.string, cssModule: s.a.object },
        p = function(e) {
          var t = e.className,
            a = e.cssModule,
            o = e.tag,
            u = Object(n.a)(e, ['className', 'cssModule', 'tag']),
            s = Object(d.a)(i()(t, 'card-header'), a);
          return c.a.createElement(o, Object(r.a)({}, u, { className: s }));
        };
      (p.propTypes = f), (p.defaultProps = { tag: 'div' }), (t.a = p);
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-jsx-12a8f15579bc482a6591.js.map
