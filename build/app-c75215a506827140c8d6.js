(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  [
    ,
    function(t, e) {
      t.exports = function(t) {
        return t && t.__esModule ? t : { default: t };
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(80),
        o = {};
      (o[n(8)('toStringTag')] = 'z'),
        o + '' != '[object z]' &&
          n(23)(
            Object.prototype,
            'toString',
            function() {
              return '[object ' + r(this) + ']';
            },
            !0
          );
    },
    function(t, e, n) {
      var r = n(11),
        o = n(46),
        i = n(37),
        a = n(23),
        u = n(38),
        s = function(t, e, n) {
          var c,
            l,
            f,
            p,
            d = t & s.F,
            h = t & s.G,
            v = t & s.S,
            g = t & s.P,
            m = t & s.B,
            y = h ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
            _ = h ? o : o[e] || (o[e] = {}),
            w = _.prototype || (_.prototype = {});
          for (c in (h && (n = e), n))
            (f = ((l = !d && y && void 0 !== y[c]) ? y : n)[c]),
              (p =
                m && l
                  ? u(f, r)
                  : g && 'function' == typeof f
                  ? u(Function.call, f)
                  : f),
              y && a(y, c, f, t & s.U),
              _[c] != f && i(_, c, p),
              g && w[c] != f && (w[c] = f);
        };
      (r.core = o),
        (s.F = 1),
        (s.G = 2),
        (s.S = 4),
        (s.P = 8),
        (s.B = 16),
        (s.W = 32),
        (s.U = 64),
        (s.R = 128),
        (t.exports = s);
    },
    ,
    function(t, e, n) {
      for (
        var r = n(6),
          o = n(49),
          i = n(23),
          a = n(11),
          u = n(37),
          s = n(69),
          c = n(8),
          l = c('iterator'),
          f = c('toStringTag'),
          p = s.Array,
          d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1,
          },
          h = o(d),
          v = 0;
        v < h.length;
        v++
      ) {
        var g,
          m = h[v],
          y = d[m],
          _ = a[m],
          w = _ && _.prototype;
        if (w && (w[l] || u(w, l, p), w[f] || u(w, f, m), (s[m] = p), y))
          for (g in r) w[g] || i(w, g, r[g], !0);
      }
    },
    function(t, e, n) {
      'use strict';
      var r = n(145),
        o = n(146),
        i = n(69),
        a = n(50);
      (t.exports = n(108)(
        Array,
        'Array',
        function(t, e) {
          (this._t = a(t)), (this._i = 0), (this._k = e);
        },
        function() {
          var t = this._t,
            e = this._k,
            n = this._i++;
          return !t || n >= t.length
            ? ((this._t = void 0), o(1))
            : o(0, 'keys' == e ? n : 'values' == e ? t[n] : [n, t[n]]);
        },
        'values'
      )),
        (i.Arguments = i.Array),
        r('keys'),
        r('values'),
        r('entries');
    },
    function(t, e, n) {
      n(51), n(2);
      var r = n(192),
        o = n(16).publicLoader,
        i = o.getResourcesForPathname,
        a = o.getResourcesForPathnameSync,
        u = o.getResourceURLsForPathname,
        s = o.loadPage,
        c = o.loadPageSync;
      (e.apiRunner = function(t, e, n, o) {
        void 0 === e && (e = {});
        var l = r.map(function(n) {
          if (n.plugin[t]) {
            (e.getResourcesForPathnameSync = a),
              (e.getResourcesForPathname = i),
              (e.getResourceURLsForPathname = u),
              (e.loadPage = s),
              (e.loadPageSync = c);
            var r = n.plugin[t](e, n.options);
            return r && o && (e = o({ args: e, result: r, plugin: n })), r;
          }
        });
        return (l = l.filter(function(t) {
          return void 0 !== t;
        })).length > 0
          ? l
          : n
          ? [n]
          : [];
      }),
        (e.apiRunnerAsync = function(t, e, n) {
          return r.reduce(function(n, r) {
            return r.plugin[t]
              ? n.then(function() {
                  return r.plugin[t](e, r.options);
                })
              : n;
          }, Promise.resolve());
        });
    },
    function(t, e, n) {
      var r = n(81)('wks'),
        o = n(66),
        i = n(11).Symbol,
        a = 'function' == typeof i;
      (t.exports = function(t) {
        return r[t] || (r[t] = (a && i[t]) || (a ? i : o)('Symbol.' + t));
      }).store = r;
    },
    function(t, e, n) {
      var r = n(33),
        o = n(49);
      n(201)('keys', function() {
        return function(t) {
          return o(r(t));
        };
      });
    },
    ,
    function(t, e) {
      var n = (t.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')());
      'number' == typeof __g && (__g = n);
    },
    function(t, e, n) {
      var r = n(13);
      t.exports = function(t) {
        if (!r(t)) throw TypeError(t + ' is not an object!');
        return t;
      };
    },
    function(t, e) {
      t.exports = function(t) {
        return 'object' == typeof t ? null !== t : 'function' == typeof t;
      };
    },
    function(t, e, n) {
      t.exports = !n(15)(function() {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function() {
              return 7;
            },
          }).a
        );
      });
    },
    function(t, e) {
      t.exports = function(t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      n(152),
        n(63),
        n(56),
        n(40),
        n(113),
        n(5),
        n(6),
        n(115),
        n(116),
        n(117),
        n(118),
        n(17),
        n(51),
        n(2),
        n(217);
      var r = (function(t) {
          if ('undefined' == typeof document) return !1;
          var e = document.createElement('link');
          try {
            if (e.relList && 'function' == typeof e.relList.supports)
              return e.relList.supports(t);
          } catch (n) {
            return !1;
          }
          return !1;
        })('prefetch')
          ? function(t) {
              return new Promise(function(e, n) {
                if ('undefined' != typeof document) {
                  var r = document.createElement('link');
                  r.setAttribute('rel', 'prefetch'),
                    r.setAttribute('href', t),
                    (r.onload = e),
                    (r.onerror = n),
                    (
                      document.getElementsByTagName('head')[0] ||
                      document.getElementsByName('script')[0].parentNode
                    ).appendChild(r);
                } else n();
              });
            }
          : function(t) {
              return new Promise(function(e, n) {
                var r = new XMLHttpRequest();
                r.open('GET', t, !0),
                  (r.onload = function() {
                    200 === r.status ? e() : n();
                  }),
                  r.send(null);
              });
            },
        o = {},
        i = function(t) {
          return new Promise(function(e) {
            o[t]
              ? e()
              : r(t)
                  .then(function() {
                    e(), (o[t] = !0);
                  })
                  .catch(function() {});
          });
        },
        a = n(59),
        u = (n(41), n(25)),
        s = n(77),
        c = function(t) {
          return void 0 === t
            ? t
            : '/' === t
            ? '/'
            : '/' === t.charAt(t.length - 1)
            ? t.slice(0, -1)
            : t;
        },
        l = [],
        f = function(t) {
          l = t;
        },
        p = function(t) {
          var e = d(t),
            n = l,
            r = Array.isArray(n),
            o = 0;
          for (n = r ? n : n[Symbol.iterator](); ; ) {
            var i;
            if (r) {
              if (o >= n.length) break;
              i = n[o++];
            } else {
              if ((o = n.next()).done) break;
              i = o.value;
            }
            var a = i,
              s = a.matchPath,
              f = a.path;
            if (Object(u.b)(s, e)) return c(f);
          }
          return null;
        },
        d = function(t) {
          var e = (function(t) {
            var e = decodeURIComponent(t);
            return Object(s.a)(e, '')
              .split('#')[0]
              .split('?')[0];
          })(t);
          return '/index.html' === e && (e = '/'), (e = c(e));
        };
      function h(t) {
        return (
          (function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = new Array(t.length); e < t.length; e++)
                n[e] = t[e];
              return n;
            }
          })(t) ||
          (function(t) {
            if (
              Symbol.iterator in Object(t) ||
              '[object Arguments]' === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      n.d(e, 'BaseLoader', function() {
        return w;
      }),
        n.d(e, 'ProdLoader', function() {
          return x;
        }),
        n.d(e, 'setLoader', function() {
          return E;
        }),
        n.d(e, 'publicLoader', function() {
          return S;
        });
      var v,
        g = function(t) {
          return (t && t.default) || t;
        },
        m = function(t) {
          var e;
          return (
            '/page-data/' +
            ('/' === t
              ? 'index'
              : (e = (e = '/' === (e = t)[0] ? e.slice(1) : e).endsWith('/')
                  ? e.slice(0, -1)
                  : e)) +
            '/page-data.json'
          );
        },
        y = function(t) {
          var e = t.pagePath,
            n = t.retries,
            r = void 0 === n ? 0 : n;
          return (function(t, e) {
            return (
              void 0 === e && (e = 'GET'),
              new Promise(function(n, r) {
                var o = new XMLHttpRequest();
                o.open(e, t, !0),
                  (o.onreadystatechange = function() {
                    4 == o.readyState && n(o);
                  }),
                  o.send(null);
              })
            );
          })(m(e)).then(function(n) {
            var o = n.status,
              i = n.responseText;
            if (200 === o)
              try {
                var a = JSON.parse(i);
                if (void 0 === a.webpackCompilationHash)
                  throw new Error('not a valid pageData response');
                return Object.assign(t, { status: 'success', payload: a });
              } catch (u) {}
            return 404 === o || 200 === o
              ? '/404.html' === e
                ? Object.assign(t, { status: 'failure' })
                : y(Object.assign(t, { pagePath: '/404.html', notFound: !0 }))
              : 500 === o
              ? Object.assign(t, { status: 'error' })
              : r < 3
              ? y(Object.assign(t, { retries: r + 1 }))
              : Object.assign(t, { status: 'error' });
          });
        },
        _ = function(t, e) {
          void 0 === e && (e = null);
          var n = {
            componentChunkName: t.componentChunkName,
            path: t.path,
            webpackCompilationHash: t.webpackCompilationHash,
            matchPath: t.matchPath,
          };
          return { component: e, json: t.result, page: n };
        },
        w = (function() {
          function t(t, e) {
            (this.pageDb = new Map()),
              (this.inFlightDb = new Map()),
              (this.pageDataDb = new Map()),
              (this.prefetchTriggered = new Set()),
              (this.prefetchCompleted = new Set()),
              (this.loadComponent = t),
              f(e);
          }
          var e = t.prototype;
          return (
            (e.setApiRunner = function(t) {
              (this.apiRunner = t),
                (this.prefetchDisabled = t('disableCorePrefetching').some(
                  function(t) {
                    return t;
                  }
                ));
            }),
            (e.loadPageDataJson = function(t) {
              var e = this,
                n = d(t);
              return this.pageDataDb.has(n)
                ? Promise.resolve(this.pageDataDb.get(n))
                : y({ pagePath: n }).then(function(t) {
                    return e.pageDataDb.set(n, t), t;
                  });
            }),
            (e.findMatchPath = function(t) {
              return p(t);
            }),
            (e.loadPage = function(t) {
              var e = this,
                n = d(t);
              if (this.pageDb.has(n)) {
                var r = this.pageDb.get(n);
                return Promise.resolve(r.payload);
              }
              if (this.inFlightDb.has(n)) return this.inFlightDb.get(n);
              var o = this.loadPageDataJson(n)
                .then(function(t) {
                  if (t.notFound) {
                    var r = p(n);
                    if (r && r !== n)
                      return e.loadPage(r).then(function(t) {
                        return e.pageDb.set(n, e.pageDb.get(r)), t;
                      });
                  }
                  if ('error' === t.status) return { status: 'error' };
                  if ('failure' === t.status)
                    throw new Error(
                      '404 page could not be found. Checkout https://www.gatsbyjs.org/docs/add-404-page/'
                    );
                  var o = t.payload,
                    i = o.componentChunkName;
                  return e.loadComponent(i).then(function(r) {
                    var i,
                      u = { createdAt: new Date() };
                    return (
                      r
                        ? ((u.status = 'success'),
                          !0 === t.notFound && (u.notFound = !0),
                          (i = _(o, r)),
                          (u.payload = i),
                          a.a.emit('onPostLoadPageResources', {
                            page: i,
                            pageResources: i,
                          }))
                        : (u.status = 'error'),
                      e.pageDb.set(n, u),
                      i
                    );
                  });
                })
                .then(function(t) {
                  return e.inFlightDb.delete(n), t;
                })
                .catch(function(t) {
                  throw (e.inFlightDb.delete(n), t);
                });
              return this.inFlightDb.set(n, o), o;
            }),
            (e.loadPageSync = function(t) {
              var e = d(t);
              if (this.pageDb.has(e)) return this.pageDb.get(e).payload;
            }),
            (e.shouldPrefetch = function(t) {
              return (
                !!(function() {
                  if (
                    'connection' in navigator &&
                    void 0 !== navigator.connection
                  ) {
                    if (
                      (navigator.connection.effectiveType || '').includes('2g')
                    )
                      return !1;
                    if (navigator.connection.saveData) return !1;
                  }
                  return !0;
                })() && !this.pageDb.has(t)
              );
            }),
            (e.prefetch = function(t) {
              var e = this;
              if (!this.shouldPrefetch(t)) return !1;
              if (
                (this.prefetchTriggered.has(t) ||
                  (this.apiRunner('onPrefetchPathname', { pathname: t }),
                  this.prefetchTriggered.add(t)),
                this.prefetchDisabled)
              )
                return !1;
              var n = d(t);
              return (
                this.doPrefetch(n).then(function(r) {
                  if (!r) {
                    var o = p(n);
                    if (o && o !== n) return e.prefetch(o);
                  }
                  e.prefetchCompleted.has(t) ||
                    (e.apiRunner('onPostPrefetchPathname', { pathname: t }),
                    e.prefetchCompleted.add(t));
                }),
                !0
              );
            }),
            (e.doPrefetch = function(t) {
              throw new Error('doPrefetch not implemented');
            }),
            (e.hovering = function(t) {
              this.loadPage(t);
            }),
            (e.getResourceURLsForPathname = function(t) {
              var e = d(t),
                n = this.pageDataDb.get(e);
              if (n) {
                var r = _(n.payload);
                return [].concat(h(b(r.page.componentChunkName)), [m(e)]);
              }
              return null;
            }),
            (e.isPageNotFound = function(t) {
              var e = d(t),
                n = this.pageDb.get(e);
              return n && !0 === n.notFound;
            }),
            t
          );
        })(),
        b = function(t) {
          return window.___chunkMapping[t].map(function(t) {
            return '' + t;
          });
        },
        x = (function(t) {
          var e, n;
          function r(e, n) {
            return (
              t.call(
                this,
                function(t) {
                  return e.components[t]().then(g);
                },
                n
              ) || this
            );
          }
          return (
            (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n),
            (r.prototype.doPrefetch = function(t) {
              var e = this,
                n = m(t);
              return i(n)
                .then(function() {
                  return e.loadPageDataJson(t);
                })
                .then(function(t) {
                  if ('success' !== t.status) return Promise.resolve();
                  var e = t.payload,
                    n = e.componentChunkName,
                    r = b(n);
                  return Promise.all(r.map(i)).then(function() {
                    return e;
                  });
                });
            }),
            r
          );
        })(w),
        E = function(t) {
          v = t;
        },
        S = {
          getResourcesForPathname: function(t) {
            return (
              console.warn(
                'Warning: getResourcesForPathname is deprecated. Use loadPage instead'
              ),
              v.i.loadPage(t)
            );
          },
          getResourcesForPathnameSync: function(t) {
            return (
              console.warn(
                'Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead'
              ),
              v.i.loadPageSync(t)
            );
          },
          enqueue: function(t) {
            return v.prefetch(t);
          },
          getResourceURLsForPathname: function(t) {
            return v.getResourceURLsForPathname(t);
          },
          loadPage: function(t) {
            return v.loadPage(t);
          },
          loadPageSync: function(t) {
            return v.loadPageSync(t);
          },
          prefetch: function(t) {
            return v.prefetch(t);
          },
          isPageNotFound: function(t) {
            return v.isPageNotFound(t);
          },
          hovering: function(t) {
            return v.hovering(t);
          },
        };
      e.default = S;
    },
    function(t, e, n) {
      var r = n(3);
      r(r.S + r.F, 'Object', { assign: n(134) });
    },
    function(t, e, n) {
      'use strict';
      var r = n(12),
        o = n(33),
        i = n(32),
        a = n(85),
        u = n(101),
        s = n(79),
        c = Math.max,
        l = Math.min,
        f = Math.floor,
        p = /\$([$&`']|\d\d?|<[^>]*>)/g,
        d = /\$([$&`']|\d\d?)/g;
      n(82)('replace', 2, function(t, e, n, h) {
        return [
          function(r, o) {
            var i = t(this),
              a = null == r ? void 0 : r[e];
            return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o);
          },
          function(t, e) {
            var o = h(n, t, this, e);
            if (o.done) return o.value;
            var f = r(t),
              p = String(this),
              d = 'function' == typeof e;
            d || (e = String(e));
            var g = f.global;
            if (g) {
              var m = f.unicode;
              f.lastIndex = 0;
            }
            for (var y = []; ; ) {
              var _ = s(f, p);
              if (null === _) break;
              if ((y.push(_), !g)) break;
              '' === String(_[0]) && (f.lastIndex = u(p, i(f.lastIndex), m));
            }
            for (var w, b = '', x = 0, E = 0; E < y.length; E++) {
              _ = y[E];
              for (
                var S = String(_[0]),
                  P = c(l(a(_.index), p.length), 0),
                  O = [],
                  T = 1;
                T < _.length;
                T++
              )
                O.push(void 0 === (w = _[T]) ? w : String(w));
              var C = _.groups;
              if (d) {
                var R = [S].concat(O, P, p);
                void 0 !== C && R.push(C);
                var j = String(e.apply(void 0, R));
              } else j = v(S, p, P, O, C, e);
              P >= x && ((b += p.slice(x, P) + j), (x = P + S.length));
            }
            return b + p.slice(x);
          },
        ];
        function v(t, e, r, i, a, u) {
          var s = r + t.length,
            c = i.length,
            l = d;
          return (
            void 0 !== a && ((a = o(a)), (l = p)),
            n.call(u, l, function(n, o) {
              var u;
              switch (o.charAt(0)) {
                case '$':
                  return '$';
                case '&':
                  return t;
                case '`':
                  return e.slice(0, r);
                case "'":
                  return e.slice(s);
                case '<':
                  u = a[o.slice(1, -1)];
                  break;
                default:
                  var l = +o;
                  if (0 === l) return n;
                  if (l > c) {
                    var p = f(l / 10);
                    return 0 === p
                      ? n
                      : p <= c
                      ? void 0 === i[p - 1]
                        ? o.charAt(1)
                        : i[p - 1] + o.charAt(1)
                      : n;
                  }
                  u = i[l - 1];
              }
              return void 0 === u ? '' : u;
            })
          );
        }
      });
    },
    function(t, e, n) {
      'use strict';
      var r = n(3),
        o = n(102)(!1),
        i = [].indexOf,
        a = !!i && 1 / [1].indexOf(1, -0) < 0;
      r(r.P + r.F * (a || !n(52)(i)), 'Array', {
        indexOf: function(t) {
          return a ? i.apply(this, arguments) || 0 : o(this, t, arguments[1]);
        },
      });
    },
    function(t, e, n) {
      var r = n(21).f,
        o = Function.prototype,
        i = /^\s*function ([^ (]*)/;
      'name' in o ||
        (n(14) &&
          r(o, 'name', {
            configurable: !0,
            get: function() {
              try {
                return ('' + this).match(i)[1];
              } catch (t) {
                return '';
              }
            },
          }));
    },
    function(t, e, n) {
      var r = n(12),
        o = n(131),
        i = n(84),
        a = Object.defineProperty;
      e.f = n(14)
        ? Object.defineProperty
        : function(t, e, n) {
            if ((r(t), (e = i(e, !0)), r(n), o))
              try {
                return a(t, e, n);
              } catch (u) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported!');
            return 'value' in n && (t[e] = n.value), t;
          };
    },
    function(t, e, n) {
      'use strict';
      var r = n(3),
        o = n(57)(0),
        i = n(52)([].forEach, !0);
      r(r.P + r.F * !i, 'Array', {
        forEach: function(t) {
          return o(this, t, arguments[1]);
        },
      });
    },
    function(t, e, n) {
      var r = n(11),
        o = n(37),
        i = n(31),
        a = n(66)('src'),
        u = n(186),
        s = ('' + u).split('toString');
      (n(46).inspectSource = function(t) {
        return u.call(t);
      }),
        (t.exports = function(t, e, n, u) {
          var c = 'function' == typeof n;
          c && (i(n, 'name') || o(n, 'name', e)),
            t[e] !== n &&
              (c && (i(n, a) || o(n, a, t[e] ? '' + t[e] : s.join(String(e)))),
              t === r
                ? (t[e] = n)
                : u
                ? t[e]
                  ? (t[e] = n)
                  : o(t, e, n)
                : (delete t[e], o(t, e, n)));
        })(Function.prototype, 'toString', function() {
          return ('function' == typeof this && this[a]) || u.call(this);
        });
    },
    function(t, e, n) {
      'use strict';
      n(39), n(62), n(22), n(18);
      var r = n(1);
      (e.__esModule = !0),
        (e.withPrefix = d),
        (e.withAssetPrefix = function(t) {
          return [''].concat([t.replace(/^\//, '')]).join('/');
        }),
        (e.navigateTo = e.replace = e.push = e.navigate = e.default = void 0);
      var o = r(n(55)),
        i = r(n(28)),
        a = r(n(73)),
        u = r(n(43)),
        s = r(n(74)),
        c = r(n(206)),
        l = r(n(0)),
        f = n(34),
        p = n(214);
      function d(t) {
        return (function(t) {
          return t.replace(/\/+/g, '/');
        })(['', t].join('/'));
      }
      e.parsePath = p.parsePath;
      var h = {
          activeClassName: c.default.string,
          activeStyle: c.default.object,
          partiallyActive: c.default.bool,
        },
        v = (function(t) {
          function e(e) {
            var n;
            (n = t.call(this, e) || this),
              (0, s.default)((0, a.default)(n), 'defaultGetProps', function(t) {
                var e = t.isPartiallyCurrent,
                  r = t.isCurrent;
                return (n.props.partiallyActive
                ? e
                : r)
                  ? {
                      className: [n.props.className, n.props.activeClassName]
                        .filter(Boolean)
                        .join(' '),
                      style: (0, i.default)(
                        {},
                        n.props.style,
                        {},
                        n.props.activeStyle
                      ),
                    }
                  : null;
              });
            var r = !1;
            return (
              'undefined' != typeof window &&
                window.IntersectionObserver &&
                (r = !0),
              (n.state = { IOSupported: r }),
              (n.handleRef = n.handleRef.bind((0, a.default)(n))),
              n
            );
          }
          (0, u.default)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidUpdate = function(t, e) {
              this.props.to === t.to ||
                this.state.IOSupported ||
                ___loader.enqueue((0, p.parsePath)(this.props.to).pathname);
            }),
            (n.componentDidMount = function() {
              this.state.IOSupported ||
                ___loader.enqueue((0, p.parsePath)(this.props.to).pathname);
            }),
            (n.componentWillUnmount = function() {
              if (this.io) {
                var t = this.io,
                  e = t.instance,
                  n = t.el;
                e.unobserve(n), e.disconnect();
              }
            }),
            (n.handleRef = function(t) {
              var e,
                n,
                r,
                o = this;
              this.props.innerRef &&
              this.props.innerRef.hasOwnProperty('current')
                ? (this.props.innerRef.current = t)
                : this.props.innerRef && this.props.innerRef(t),
                this.state.IOSupported &&
                  t &&
                  (this.io =
                    ((e = t),
                    (n = function() {
                      ___loader.enqueue((0, p.parsePath)(o.props.to).pathname);
                    }),
                    (r = new window.IntersectionObserver(function(t) {
                      t.forEach(function(t) {
                        e === t.target &&
                          (t.isIntersecting || t.intersectionRatio > 0) &&
                          (r.unobserve(e), r.disconnect(), n());
                      });
                    })).observe(e),
                    { instance: r, el: e }));
            }),
            (n.render = function() {
              var t = this,
                e = this.props,
                n = e.to,
                r = e.getProps,
                a = void 0 === r ? this.defaultGetProps : r,
                u = e.onClick,
                s = e.onMouseEnter,
                c =
                  (e.activeClassName,
                  e.activeStyle,
                  e.innerRef,
                  e.partiallyActive,
                  e.state),
                h = e.replace,
                v = (0, o.default)(e, [
                  'to',
                  'getProps',
                  'onClick',
                  'onMouseEnter',
                  'activeClassName',
                  'activeStyle',
                  'innerRef',
                  'partiallyActive',
                  'state',
                  'replace',
                ]);
              var g = d(n);
              return l.default.createElement(
                f.Link,
                (0, i.default)(
                  {
                    to: g,
                    state: c,
                    getProps: a,
                    innerRef: this.handleRef,
                    onMouseEnter: function(t) {
                      s && s(t),
                        ___loader.hovering((0, p.parsePath)(n).pathname);
                    },
                    onClick: function(e) {
                      return (
                        u && u(e),
                        0 !== e.button ||
                          t.props.target ||
                          e.defaultPrevented ||
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          (e.preventDefault(), y(n, { state: c, replace: h })),
                        !0
                      );
                    },
                  },
                  v
                )
              );
            }),
            e
          );
        })(l.default.Component);
      v.propTypes = (0, i.default)({}, h, {
        onClick: c.default.func,
        to: c.default.string.isRequired,
        replace: c.default.bool,
      });
      var g = function(t, e, n) {
          return console.warn(
            'The "' +
              t +
              '" method is now deprecated and will be removed in Gatsby v' +
              n +
              '. Please use "' +
              e +
              '" instead.'
          );
        },
        m = l.default.forwardRef(function(t, e) {
          return l.default.createElement(v, (0, i.default)({ innerRef: e }, t));
        });
      e.default = m;
      var y = function(t, e) {
        window.___navigate(d(t), e);
      };
      e.navigate = y;
      var _ = function(t) {
        g('push', 'navigate', 3), window.___push(d(t));
      };
      e.push = _;
      e.replace = function(t) {
        g('replace', 'navigate', 3), window.___replace(d(t));
      };
      e.navigateTo = function(t) {
        return g('navigateTo', 'navigate', 3), _(t);
      };
    },
    function(t, e, n) {
      'use strict';
      n.d(e, 'e', function() {
        return i;
      }),
        n.d(e, 'c', function() {
          return a;
        }),
        n.d(e, 'b', function() {
          return u;
        }),
        n.d(e, 'd', function() {
          return s;
        }),
        n.d(e, 'a', function() {
          return c;
        }),
        n.d(e, 'f', function() {
          return l;
        });
      n(18), n(64), n(62), n(213), n(19), n(27), n(41);
      var r = n(30),
        o = n.n(r),
        i = function(t, e) {
          return t.substr(0, e.length) === e;
        },
        a = function(t, e) {
          for (
            var n = void 0,
              r = void 0,
              i = e.split('?')[0],
              a = v(i),
              u = '' === a[0],
              s = h(t),
              c = 0,
              l = s.length;
            c < l;
            c++
          ) {
            var p = !1,
              d = s[c].route;
            if (d.default) r = { route: d, params: {}, uri: e };
            else {
              for (
                var g = v(d.path),
                  y = {},
                  _ = Math.max(a.length, g.length),
                  w = 0;
                w < _;
                w++
              ) {
                var b = g[w],
                  x = a[w];
                if ('*' === b) {
                  y['*'] = a
                    .slice(w)
                    .map(decodeURIComponent)
                    .join('/');
                  break;
                }
                if (void 0 === x) {
                  p = !0;
                  break;
                }
                var E = f.exec(b);
                if (E && !u) {
                  -1 === m.indexOf(E[1]) || o()(!1);
                  var S = decodeURIComponent(x);
                  y[E[1]] = S;
                } else if (b !== x) {
                  p = !0;
                  break;
                }
              }
              if (!p) {
                n = { route: d, params: y, uri: '/' + a.slice(0, w).join('/') };
                break;
              }
            }
          }
          return n || r || null;
        },
        u = function(t, e) {
          return a([{ path: t }], e);
        },
        s = function(t, e) {
          if (i(t, '/')) return t;
          var n = t.split('?'),
            r = n[0],
            o = n[1],
            a = e.split('?')[0],
            u = v(r),
            s = v(a);
          if ('' === u[0]) return g(a, o);
          if (!i(u[0], '.')) {
            var c = s.concat(u).join('/');
            return g(('/' === a ? '' : '/') + c, o);
          }
          for (var l = s.concat(u), f = [], p = 0, d = l.length; p < d; p++) {
            var h = l[p];
            '..' === h ? f.pop() : '.' !== h && f.push(h);
          }
          return g('/' + f.join('/'), o);
        },
        c = function(t, e) {
          return (
            '/' +
            v(t)
              .map(function(t) {
                var n = f.exec(t);
                return n ? e[n[1]] : t;
              })
              .join('/')
          );
        },
        l = function(t, e) {
          var n = function(t) {
            return p(t);
          };
          return (
            v(t)
              .filter(n)
              .sort()
              .join('/') ===
            v(e)
              .filter(n)
              .sort()
              .join('/')
          );
        },
        f = /^:(.+)/,
        p = function(t) {
          return f.test(t);
        },
        d = function(t, e) {
          return {
            route: t,
            score: t.default
              ? 0
              : v(t.path).reduce(function(t, e) {
                  return (
                    (t += 4),
                    !(function(t) {
                      return '' === t;
                    })(e)
                      ? p(e)
                        ? (t += 2)
                        : !(function(t) {
                            return '*' === t;
                          })(e)
                        ? (t += 3)
                        : (t -= 5)
                      : (t += 1),
                    t
                  );
                }, 0),
            index: e,
          };
        },
        h = function(t) {
          return t.map(d).sort(function(t, e) {
            return t.score < e.score
              ? 1
              : t.score > e.score
              ? -1
              : t.index - e.index;
          });
        },
        v = function(t) {
          return t.replace(/(^\/+|\/+$)/g, '').split('/');
        },
        g = function(t, e) {
          return t + (e ? '?' + e : '');
        },
        m = ['uri', 'path'];
    },
    ,
    function(t, e, n) {
      'use strict';
      var r = n(3),
        o = n(57)(1);
      r(r.P + r.F * !n(52)([].map, !0), 'Array', {
        map: function(t) {
          return o(this, t, arguments[1]);
        },
      });
    },
    function(t, e) {
      function n() {
        return (
          (t.exports = n =
            Object.assign ||
            function(t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          n.apply(this, arguments)
        );
      }
      t.exports = n;
    },
    function(t, e, n) {
      var r = n(3);
      r(r.S, 'Object', { create: n(71) });
    },
    function(t, e, n) {
      'use strict';
      n(20), n(18);
      t.exports = function(t, e, n, r, o, i, a, u) {
        if (!t) {
          var s;
          if (void 0 === e)
            s = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var c = [n, r, o, i, a, u],
              l = 0;
            (s = new Error(
              e.replace(/%s/g, function() {
                return c[l++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((s.framesToPop = 1), s);
        }
      };
    },
    function(t, e) {
      var n = {}.hasOwnProperty;
      t.exports = function(t, e) {
        return n.call(t, e);
      };
    },
    function(t, e, n) {
      var r = n(85),
        o = Math.min;
      t.exports = function(t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    },
    function(t, e, n) {
      var r = n(48);
      t.exports = function(t) {
        return Object(r(t));
      };
    },
    function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'Link', function() {
          return k;
        }),
        n.d(e, 'Location', function() {
          return y;
        }),
        n.d(e, 'LocationProvider', function() {
          return _;
        }),
        n.d(e, 'Match', function() {
          return F;
        }),
        n.d(e, 'Redirect', function() {
          return D;
        }),
        n.d(e, 'Router', function() {
          return x;
        }),
        n.d(e, 'ServerLocation', function() {
          return w;
        }),
        n.d(e, 'isRedirect', function() {
          return M;
        }),
        n.d(e, 'redirectTo', function() {
          return A;
        }),
        n.d(e, 'BaseContext', function() {
          return b;
        });
      n(18), n(27), n(51), n(2), n(125), n(29), n(19), n(17);
      var r = n(0),
        o = n.n(r),
        i = (n(150), n(209), n(30)),
        a = n.n(i),
        u = n(166),
        s = n(93),
        c = n(25),
        l = n(54);
      n.d(e, 'createHistory', function() {
        return l.createHistory;
      }),
        n.d(e, 'createMemorySource', function() {
          return l.createMemorySource;
        }),
        n.d(e, 'navigate', function() {
          return l.navigate;
        }),
        n.d(e, 'globalHistory', function() {
          return l.globalHistory;
        });
      var f =
        Object.assign ||
        function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
      function p(t, e) {
        var n = {};
        for (var r in t)
          e.indexOf(r) >= 0 ||
            (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
        return n;
      }
      function d(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function h(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
      }
      function v(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      var g = function(t, e) {
          var n = Object(u.a)(e);
          return (
            (n.Consumer.displayName = t + '.Consumer'),
            (n.Provider.displayName = t + '.Provider'),
            n
          );
        },
        m = g('Location'),
        y = function(t) {
          var e = t.children;
          return o.a.createElement(m.Consumer, null, function(t) {
            return t ? e(t) : o.a.createElement(_, null, e);
          });
        },
        _ = (function(t) {
          function e() {
            var n, r;
            d(this, e);
            for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            return (
              (n = r = h(this, t.call.apply(t, [this].concat(i)))),
              (r.state = { context: r.getContext(), refs: { unlisten: null } }),
              h(r, n)
            );
          }
          return (
            v(e, t),
            (e.prototype.getContext = function() {
              var t = this.props.history;
              return { navigate: t.navigate, location: t.location };
            }),
            (e.prototype.componentDidCatch = function(t, e) {
              if (!M(t)) throw t;
              (0, this.props.history.navigate)(t.uri, { replace: !0 });
            }),
            (e.prototype.componentDidUpdate = function(t, e) {
              e.context.location !== this.state.context.location &&
                this.props.history._onTransitionComplete();
            }),
            (e.prototype.componentDidMount = function() {
              var t = this,
                e = this.state.refs,
                n = this.props.history;
              e.unlisten = n.listen(function() {
                Promise.resolve().then(function() {
                  requestAnimationFrame(function() {
                    t.unmounted ||
                      t.setState(function() {
                        return { context: t.getContext() };
                      });
                  });
                });
              });
            }),
            (e.prototype.componentWillUnmount = function() {
              var t = this.state.refs;
              (this.unmounted = !0), t.unlisten();
            }),
            (e.prototype.render = function() {
              var t = this.state.context,
                e = this.props.children;
              return o.a.createElement(
                m.Provider,
                { value: t },
                'function' == typeof e ? e(t) : e || null
              );
            }),
            e
          );
        })(o.a.Component);
      _.defaultProps = { history: l.globalHistory };
      var w = function(t) {
          var e = t.url,
            n = t.children;
          return o.a.createElement(
            m.Provider,
            {
              value: {
                location: { pathname: e, search: '', hash: '' },
                navigate: function() {
                  throw new Error("You can't call navigate on the server.");
                },
              },
            },
            n
          );
        },
        b = g('Base', { baseuri: '/', basepath: '/' }),
        x = function(t) {
          return o.a.createElement(b.Consumer, null, function(e) {
            return o.a.createElement(y, null, function(n) {
              return o.a.createElement(E, f({}, e, n, t));
            });
          });
        },
        E = (function(t) {
          function e() {
            return d(this, e), h(this, t.apply(this, arguments));
          }
          return (
            v(e, t),
            (e.prototype.render = function() {
              var t = this.props,
                e = t.location,
                n = t.navigate,
                r = t.basepath,
                i = t.primary,
                a = t.children,
                u = (t.baseuri, t.component),
                s = void 0 === u ? 'div' : u,
                l = p(t, [
                  'location',
                  'navigate',
                  'basepath',
                  'primary',
                  'children',
                  'baseuri',
                  'component',
                ]),
                d = o.a.Children.map(a, W(r)),
                h = e.pathname,
                v = Object(c.c)(d, h);
              if (v) {
                var g = v.params,
                  m = v.uri,
                  y = v.route,
                  _ = v.route.value;
                r = y.default ? r : y.path.replace(/\*$/, '');
                var w = f({}, g, {
                    uri: m,
                    location: e,
                    navigate: function(t, e) {
                      return n(Object(c.d)(t, m), e);
                    },
                  }),
                  E = o.a.cloneElement(
                    _,
                    w,
                    _.props.children
                      ? o.a.createElement(x, { primary: i }, _.props.children)
                      : void 0
                  ),
                  S = i ? P : s,
                  O = i ? f({ uri: m, location: e, component: s }, l) : l;
                return o.a.createElement(
                  b.Provider,
                  { value: { baseuri: m, basepath: r } },
                  o.a.createElement(S, O, E)
                );
              }
              return null;
            }),
            e
          );
        })(o.a.PureComponent);
      E.defaultProps = { primary: !0 };
      var S = g('Focus'),
        P = function(t) {
          var e = t.uri,
            n = t.location,
            r = t.component,
            i = p(t, ['uri', 'location', 'component']);
          return o.a.createElement(S.Consumer, null, function(t) {
            return o.a.createElement(
              C,
              f({}, i, { component: r, requestFocus: t, uri: e, location: n })
            );
          });
        },
        O = !0,
        T = 0,
        C = (function(t) {
          function e() {
            var n, r;
            d(this, e);
            for (var o = arguments.length, i = Array(o), a = 0; a < o; a++)
              i[a] = arguments[a];
            return (
              (n = r = h(this, t.call.apply(t, [this].concat(i)))),
              (r.state = {}),
              (r.requestFocus = function(t) {
                r.state.shouldFocus || t.focus();
              }),
              h(r, n)
            );
          }
          return (
            v(e, t),
            (e.getDerivedStateFromProps = function(t, e) {
              if (null == e.uri) return f({ shouldFocus: !0 }, t);
              var n = t.uri !== e.uri,
                r =
                  e.location.pathname !== t.location.pathname &&
                  t.location.pathname === t.uri;
              return f({ shouldFocus: n || r }, t);
            }),
            (e.prototype.componentDidMount = function() {
              T++, this.focus();
            }),
            (e.prototype.componentWillUnmount = function() {
              0 === --T && (O = !0);
            }),
            (e.prototype.componentDidUpdate = function(t, e) {
              t.location !== this.props.location &&
                this.state.shouldFocus &&
                this.focus();
            }),
            (e.prototype.focus = function() {
              var t = this.props.requestFocus;
              t
                ? t(this.node)
                : O
                ? (O = !1)
                : this.node.contains(document.activeElement) ||
                  this.node.focus();
            }),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                n = (e.children, e.style),
                r = (e.requestFocus, e.role),
                i = void 0 === r ? 'group' : r,
                a = e.component,
                u = void 0 === a ? 'div' : a,
                s =
                  (e.uri,
                  e.location,
                  p(e, [
                    'children',
                    'style',
                    'requestFocus',
                    'role',
                    'component',
                    'uri',
                    'location',
                  ]));
              return o.a.createElement(
                u,
                f(
                  {
                    style: f({ outline: 'none' }, n),
                    tabIndex: '-1',
                    role: i,
                    ref: function(e) {
                      return (t.node = e);
                    },
                  },
                  s
                ),
                o.a.createElement(
                  S.Provider,
                  { value: this.requestFocus },
                  this.props.children
                )
              );
            }),
            e
          );
        })(o.a.Component);
      Object(s.polyfill)(C);
      var R = function() {},
        j = o.a.forwardRef;
      void 0 === j &&
        (j = function(t) {
          return t;
        });
      var k = j(function(t, e) {
        var n = t.innerRef,
          r = p(t, ['innerRef']);
        return o.a.createElement(b.Consumer, null, function(t) {
          t.basepath;
          var i = t.baseuri;
          return o.a.createElement(y, null, function(t) {
            var a = t.location,
              u = t.navigate,
              s = r.to,
              l = r.state,
              d = r.replace,
              h = r.getProps,
              v = void 0 === h ? R : h,
              g = p(r, ['to', 'state', 'replace', 'getProps']),
              m = Object(c.d)(s, i),
              y = a.pathname === m,
              _ = Object(c.e)(a.pathname, m);
            return o.a.createElement(
              'a',
              f(
                { ref: e || n, 'aria-current': y ? 'page' : void 0 },
                g,
                v({
                  isCurrent: y,
                  isPartiallyCurrent: _,
                  href: m,
                  location: a,
                }),
                {
                  href: m,
                  onClick: function(t) {
                    g.onClick && g.onClick(t),
                      U(t) &&
                        (t.preventDefault(), u(m, { state: l, replace: d }));
                  },
                }
              )
            );
          });
        });
      });
      function N(t) {
        this.uri = t;
      }
      var M = function(t) {
          return t instanceof N;
        },
        A = function(t) {
          throw new N(t);
        },
        L = (function(t) {
          function e() {
            return d(this, e), h(this, t.apply(this, arguments));
          }
          return (
            v(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this.props,
                e = t.navigate,
                n = t.to,
                r = (t.from, t.replace),
                o = void 0 === r || r,
                i = t.state,
                a =
                  (t.noThrow,
                  p(t, [
                    'navigate',
                    'to',
                    'from',
                    'replace',
                    'state',
                    'noThrow',
                  ]));
              Promise.resolve().then(function() {
                e(Object(c.a)(n, a), { replace: o, state: i });
              });
            }),
            (e.prototype.render = function() {
              var t = this.props,
                e = (t.navigate, t.to),
                n = (t.from, t.replace, t.state, t.noThrow),
                r = p(t, [
                  'navigate',
                  'to',
                  'from',
                  'replace',
                  'state',
                  'noThrow',
                ]);
              return n || A(Object(c.a)(e, r)), null;
            }),
            e
          );
        })(o.a.Component),
        D = function(t) {
          return o.a.createElement(y, null, function(e) {
            return o.a.createElement(L, f({}, e, t));
          });
        },
        F = function(t) {
          var e = t.path,
            n = t.children;
          return o.a.createElement(b.Consumer, null, function(t) {
            var r = t.baseuri;
            return o.a.createElement(y, null, function(t) {
              var o = t.navigate,
                i = t.location,
                a = Object(c.d)(e, r),
                u = Object(c.b)(a, i.pathname);
              return n({
                navigate: o,
                location: i,
                match: u ? f({}, u.params, { uri: u.uri, path: e }) : null,
              });
            });
          });
        },
        I = function(t) {
          return t.replace(/(^\/+|\/+$)/g, '');
        },
        W = function(t) {
          return function(e) {
            if (!e) return null;
            if (
              (e.props.path || e.props.default || e.type === D || a()(!1),
              e.type !== D || (e.props.from && e.props.to) || a()(!1),
              e.type !== D || Object(c.f)(e.props.from, e.props.to) || a()(!1),
              e.props.default)
            )
              return { value: e, default: !0 };
            var n = e.type === D ? e.props.from : e.props.path,
              r = '/' === n ? t : I(t) + '/' + I(n);
            return {
              value: e,
              default: e.props.default,
              path: e.props.children ? I(r) + '/*' : r,
            };
          };
        },
        U = function(t) {
          return (
            !t.defaultPrevented &&
            0 === t.button &&
            !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
          );
        };
    },
    function(t, e, n) {
      var r = n(3);
      r(r.S + r.F * !n(14), 'Object', { defineProperty: n(21).f });
    },
    function(t, e, n) {
      var r = n(3);
      r(r.S, 'Array', { isArray: n(109) });
    },
    function(t, e, n) {
      var r = n(21),
        o = n(67);
      t.exports = n(14)
        ? function(t, e, n) {
            return r.f(t, e, o(1, n));
          }
        : function(t, e, n) {
            return (t[e] = n), t;
          };
    },
    function(t, e, n) {
      var r = n(47);
      t.exports = function(t, e, n) {
        if ((r(t), void 0 === e)) return t;
        switch (n) {
          case 1:
            return function(n) {
              return t.call(e, n);
            };
          case 2:
            return function(n, r) {
              return t.call(e, n, r);
            };
          case 3:
            return function(n, r, o) {
              return t.call(e, n, r, o);
            };
        }
        return function() {
          return t.apply(e, arguments);
        };
      };
    },
    function(t, e, n) {
      var r = n(3);
      r(r.P, 'Function', { bind: n(196) });
    },
    function(t, e, n) {
      'use strict';
      var r = n(11),
        o = n(31),
        i = n(14),
        a = n(3),
        u = n(23),
        s = n(72).KEY,
        c = n(15),
        l = n(81),
        f = n(70),
        p = n(66),
        d = n(8),
        h = n(148),
        v = n(147),
        g = n(202),
        m = n(109),
        y = n(12),
        _ = n(13),
        w = n(33),
        b = n(50),
        x = n(84),
        E = n(67),
        S = n(71),
        P = n(203),
        O = n(110),
        T = n(105),
        C = n(21),
        R = n(49),
        j = O.f,
        k = C.f,
        N = P.f,
        M = r.Symbol,
        A = r.JSON,
        L = A && A.stringify,
        D = d('_hidden'),
        F = d('toPrimitive'),
        I = {}.propertyIsEnumerable,
        W = l('symbol-registry'),
        U = l('symbols'),
        H = l('op-symbols'),
        G = Object.prototype,
        q = 'function' == typeof M && !!T.f,
        B = r.QObject,
        V = !B || !B.prototype || !B.prototype.findChild,
        K =
          i &&
          c(function() {
            return (
              7 !=
              S(
                k({}, 'a', {
                  get: function() {
                    return k(this, 'a', { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function(t, e, n) {
                var r = j(G, e);
                r && delete G[e], k(t, e, n), r && t !== G && k(G, e, r);
              }
            : k,
        Y = function(t) {
          var e = (U[t] = S(M.prototype));
          return (e._k = t), e;
        },
        J =
          q && 'symbol' == typeof M.iterator
            ? function(t) {
                return 'symbol' == typeof t;
              }
            : function(t) {
                return t instanceof M;
              },
        $ = function(t, e, n) {
          return (
            t === G && $(H, e, n),
            y(t),
            (e = x(e, !0)),
            y(n),
            o(U, e)
              ? (n.enumerable
                  ? (o(t, D) && t[D][e] && (t[D][e] = !1),
                    (n = S(n, { enumerable: E(0, !1) })))
                  : (o(t, D) || k(t, D, E(1, {})), (t[D][e] = !0)),
                K(t, e, n))
              : k(t, e, n)
          );
        },
        z = function(t, e) {
          y(t);
          for (var n, r = g((e = b(e))), o = 0, i = r.length; i > o; )
            $(t, (n = r[o++]), e[n]);
          return t;
        },
        X = function(t) {
          var e = I.call(this, (t = x(t, !0)));
          return (
            !(this === G && o(U, t) && !o(H, t)) &&
            (!(e || !o(this, t) || !o(U, t) || (o(this, D) && this[D][t])) || e)
          );
        },
        Q = function(t, e) {
          if (((t = b(t)), (e = x(e, !0)), t !== G || !o(U, e) || o(H, e))) {
            var n = j(t, e);
            return (
              !n || !o(U, e) || (o(t, D) && t[D][e]) || (n.enumerable = !0), n
            );
          }
        },
        Z = function(t) {
          for (var e, n = N(b(t)), r = [], i = 0; n.length > i; )
            o(U, (e = n[i++])) || e == D || e == s || r.push(e);
          return r;
        },
        tt = function(t) {
          for (
            var e, n = t === G, r = N(n ? H : b(t)), i = [], a = 0;
            r.length > a;

          )
            !o(U, (e = r[a++])) || (n && !o(G, e)) || i.push(U[e]);
          return i;
        };
      q ||
        (u(
          (M = function() {
            if (this instanceof M)
              throw TypeError('Symbol is not a constructor!');
            var t = p(arguments.length > 0 ? arguments[0] : void 0),
              e = function(n) {
                this === G && e.call(H, n),
                  o(this, D) && o(this[D], t) && (this[D][t] = !1),
                  K(this, t, E(1, n));
              };
            return i && V && K(G, t, { configurable: !0, set: e }), Y(t);
          }).prototype,
          'toString',
          function() {
            return this._k;
          }
        ),
        (O.f = Q),
        (C.f = $),
        (n(90).f = P.f = Z),
        (n(68).f = X),
        (T.f = tt),
        i && !n(65) && u(G, 'propertyIsEnumerable', X, !0),
        (h.f = function(t) {
          return Y(d(t));
        })),
        a(a.G + a.W + a.F * !q, { Symbol: M });
      for (
        var et = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
          nt = 0;
        et.length > nt;

      )
        d(et[nt++]);
      for (var rt = R(d.store), ot = 0; rt.length > ot; ) v(rt[ot++]);
      a(a.S + a.F * !q, 'Symbol', {
        for: function(t) {
          return o(W, (t += '')) ? W[t] : (W[t] = M(t));
        },
        keyFor: function(t) {
          if (!J(t)) throw TypeError(t + ' is not a symbol!');
          for (var e in W) if (W[e] === t) return e;
        },
        useSetter: function() {
          V = !0;
        },
        useSimple: function() {
          V = !1;
        },
      }),
        a(a.S + a.F * !q, 'Object', {
          create: function(t, e) {
            return void 0 === e ? S(t) : z(S(t), e);
          },
          defineProperty: $,
          defineProperties: z,
          getOwnPropertyDescriptor: Q,
          getOwnPropertyNames: Z,
          getOwnPropertySymbols: tt,
        });
      var it = c(function() {
        T.f(1);
      });
      a(a.S + a.F * it, 'Object', {
        getOwnPropertySymbols: function(t) {
          return T.f(w(t));
        },
      }),
        A &&
          a(
            a.S +
              a.F *
                (!q ||
                  c(function() {
                    var t = M();
                    return (
                      '[null]' != L([t]) ||
                      '{}' != L({ a: t }) ||
                      '{}' != L(Object(t))
                    );
                  })),
            'JSON',
            {
              stringify: function(t) {
                for (var e, n, r = [t], o = 1; arguments.length > o; )
                  r.push(arguments[o++]);
                if (((n = e = r[1]), (_(e) || void 0 !== t) && !J(t)))
                  return (
                    m(e) ||
                      (e = function(t, e) {
                        if (
                          ('function' == typeof n && (e = n.call(this, t, e)),
                          !J(e))
                        )
                          return e;
                      }),
                    (r[1] = e),
                    L.apply(A, r)
                  );
              },
            }
          ),
        M.prototype[F] || n(37)(M.prototype, F, M.prototype.valueOf),
        f(M, 'Symbol'),
        f(Math, 'Math', !0),
        f(r.JSON, 'JSON', !0);
    },
    function(t, e, n) {
      'use strict';
      var r = n(112),
        o = n(12),
        i = n(139),
        a = n(101),
        u = n(32),
        s = n(79),
        c = n(99),
        l = n(15),
        f = Math.min,
        p = [].push,
        d = !l(function() {
          RegExp(4294967295, 'y');
        });
      n(82)('split', 2, function(t, e, n, l) {
        var h;
        return (
          (h =
            'c' == 'abbc'.split(/(b)*/)[1] ||
            4 != 'test'.split(/(?:)/, -1).length ||
            2 != 'ab'.split(/(?:ab)*/).length ||
            4 != '.'.split(/(.?)(.?)/).length ||
            '.'.split(/()()/).length > 1 ||
            ''.split(/.?/).length
              ? function(t, e) {
                  var o = String(this);
                  if (void 0 === t && 0 === e) return [];
                  if (!r(t)) return n.call(o, t, e);
                  for (
                    var i,
                      a,
                      u,
                      s = [],
                      l =
                        (t.ignoreCase ? 'i' : '') +
                        (t.multiline ? 'm' : '') +
                        (t.unicode ? 'u' : '') +
                        (t.sticky ? 'y' : ''),
                      f = 0,
                      d = void 0 === e ? 4294967295 : e >>> 0,
                      h = new RegExp(t.source, l + 'g');
                    (i = c.call(h, o)) &&
                    !(
                      (a = h.lastIndex) > f &&
                      (s.push(o.slice(f, i.index)),
                      i.length > 1 &&
                        i.index < o.length &&
                        p.apply(s, i.slice(1)),
                      (u = i[0].length),
                      (f = a),
                      s.length >= d)
                    );

                  )
                    h.lastIndex === i.index && h.lastIndex++;
                  return (
                    f === o.length
                      ? (!u && h.test('')) || s.push('')
                      : s.push(o.slice(f)),
                    s.length > d ? s.slice(0, d) : s
                  );
                }
              : '0'.split(void 0, 0).length
              ? function(t, e) {
                  return void 0 === t && 0 === e ? [] : n.call(this, t, e);
                }
              : n),
          [
            function(n, r) {
              var o = t(this),
                i = null == n ? void 0 : n[e];
              return void 0 !== i ? i.call(n, o, r) : h.call(String(o), n, r);
            },
            function(t, e) {
              var r = l(h, t, this, e, h !== n);
              if (r.done) return r.value;
              var c = o(t),
                p = String(this),
                v = i(c, RegExp),
                g = c.unicode,
                m =
                  (c.ignoreCase ? 'i' : '') +
                  (c.multiline ? 'm' : '') +
                  (c.unicode ? 'u' : '') +
                  (d ? 'y' : 'g'),
                y = new v(d ? c : '^(?:' + c.source + ')', m),
                _ = void 0 === e ? 4294967295 : e >>> 0;
              if (0 === _) return [];
              if (0 === p.length) return null === s(y, p) ? [p] : [];
              for (var w = 0, b = 0, x = []; b < p.length; ) {
                y.lastIndex = d ? b : 0;
                var E,
                  S = s(y, d ? p : p.slice(b));
                if (
                  null === S ||
                  (E = f(u(y.lastIndex + (d ? 0 : b)), p.length)) === w
                )
                  b = a(p, b, g);
                else {
                  if ((x.push(p.slice(w, b)), x.length === _)) return x;
                  for (var P = 1; P <= S.length - 1; P++)
                    if ((x.push(S[P]), x.length === _)) return x;
                  b = w = E;
                }
              }
              return x.push(p.slice(w)), x;
            },
          ]
        );
      });
    },
    function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'graphql', function() {
          return h;
        }),
        n.d(e, 'StaticQueryContext', function() {
          return l;
        }),
        n.d(e, 'StaticQuery', function() {
          return p;
        }),
        n.d(e, 'useStaticQuery', function() {
          return d;
        }),
        n.d(e, 'prefetchPathname', function() {
          return c;
        });
      var r = n(0),
        o = n.n(r),
        i = n(24),
        a = n.n(i);
      n.d(e, 'Link', function() {
        return a.a;
      }),
        n.d(e, 'withAssetPrefix', function() {
          return i.withAssetPrefix;
        }),
        n.d(e, 'withPrefix', function() {
          return i.withPrefix;
        }),
        n.d(e, 'parsePath', function() {
          return i.parsePath;
        }),
        n.d(e, 'navigate', function() {
          return i.navigate;
        }),
        n.d(e, 'push', function() {
          return i.push;
        }),
        n.d(e, 'replace', function() {
          return i.replace;
        }),
        n.d(e, 'navigateTo', function() {
          return i.navigateTo;
        });
      var u = n(151),
        s = n.n(u);
      n.d(e, 'PageRenderer', function() {
        return s.a;
      });
      var c = n(16).default.enqueue,
        l = o.a.createContext({});
      function f(t) {
        var e = t.staticQueryData,
          n = t.data,
          r = t.query,
          i = t.render,
          a = n ? n.data : e[r] && e[r].data;
        return o.a.createElement(
          o.a.Fragment,
          null,
          a && i(a),
          !a && o.a.createElement('div', null, 'Loading (StaticQuery)')
        );
      }
      var p = function(t) {
          var e = t.data,
            n = t.query,
            r = t.render,
            i = t.children;
          return o.a.createElement(l.Consumer, null, function(t) {
            return o.a.createElement(f, {
              data: e,
              query: n,
              render: r || i,
              staticQueryData: t,
            });
          });
        },
        d = function(t) {
          o.a.useContext;
          var e = o.a.useContext(l);
          if (e[t] && e[t].data) return e[t].data;
          throw new Error(
            'The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues'
          );
        };
      function h() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        );
      }
    },
    function(t, e) {
      t.exports = function(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      };
    },
    ,
    function(t, e) {
      var n = {}.toString;
      t.exports = function(t) {
        return n.call(t).slice(8, -1);
      };
    },
    function(t, e) {
      var n = (t.exports = { version: '2.6.9' });
      'number' == typeof __e && (__e = n);
    },
    function(t, e) {
      t.exports = function(t) {
        if ('function' != typeof t) throw TypeError(t + ' is not a function!');
        return t;
      };
    },
    function(t, e) {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function(t, e, n) {
      var r = n(135),
        o = n(104);
      t.exports =
        Object.keys ||
        function(t) {
          return r(t, o);
        };
    },
    function(t, e, n) {
      var r = n(86),
        o = n(48);
      t.exports = function(t) {
        return r(o(t));
      };
    },
    function(t, e, n) {
      'use strict';
      var r,
        o,
        i,
        a,
        u = n(65),
        s = n(11),
        c = n(38),
        l = n(80),
        f = n(3),
        p = n(13),
        d = n(47),
        h = n(87),
        v = n(88),
        g = n(139),
        m = n(140).set,
        y = n(188)(),
        _ = n(143),
        w = n(189),
        b = n(190),
        x = n(191),
        E = s.TypeError,
        S = s.process,
        P = S && S.versions,
        O = (P && P.v8) || '',
        T = s.Promise,
        C = 'process' == l(S),
        R = function() {},
        j = (o = _.f),
        k = !!(function() {
          try {
            var t = T.resolve(1),
              e = ((t.constructor = {})[n(8)('species')] = function(t) {
                t(R, R);
              });
            return (
              (C || 'function' == typeof PromiseRejectionEvent) &&
              t.then(R) instanceof e &&
              0 !== O.indexOf('6.6') &&
              -1 === b.indexOf('Chrome/66')
            );
          } catch (r) {}
        })(),
        N = function(t) {
          var e;
          return !(!p(t) || 'function' != typeof (e = t.then)) && e;
        },
        M = function(t, e) {
          if (!t._n) {
            t._n = !0;
            var n = t._c;
            y(function() {
              for (
                var r = t._v,
                  o = 1 == t._s,
                  i = 0,
                  a = function(e) {
                    var n,
                      i,
                      a,
                      u = o ? e.ok : e.fail,
                      s = e.resolve,
                      c = e.reject,
                      l = e.domain;
                    try {
                      u
                        ? (o || (2 == t._h && D(t), (t._h = 1)),
                          !0 === u
                            ? (n = r)
                            : (l && l.enter(),
                              (n = u(r)),
                              l && (l.exit(), (a = !0))),
                          n === e.promise
                            ? c(E('Promise-chain cycle'))
                            : (i = N(n))
                            ? i.call(n, s, c)
                            : s(n))
                        : c(r);
                    } catch (f) {
                      l && !a && l.exit(), c(f);
                    }
                  };
                n.length > i;

              )
                a(n[i++]);
              (t._c = []), (t._n = !1), e && !t._h && A(t);
            });
          }
        },
        A = function(t) {
          m.call(s, function() {
            var e,
              n,
              r,
              o = t._v,
              i = L(t);
            if (
              (i &&
                ((e = w(function() {
                  C
                    ? S.emit('unhandledRejection', o, t)
                    : (n = s.onunhandledrejection)
                    ? n({ promise: t, reason: o })
                    : (r = s.console) &&
                      r.error &&
                      r.error('Unhandled promise rejection', o);
                })),
                (t._h = C || L(t) ? 2 : 1)),
              (t._a = void 0),
              i && e.e)
            )
              throw e.v;
          });
        },
        L = function(t) {
          return 1 !== t._h && 0 === (t._a || t._c).length;
        },
        D = function(t) {
          m.call(s, function() {
            var e;
            C
              ? S.emit('rejectionHandled', t)
              : (e = s.onrejectionhandled) && e({ promise: t, reason: t._v });
          });
        },
        F = function(t) {
          var e = this;
          e._d ||
            ((e._d = !0),
            ((e = e._w || e)._v = t),
            (e._s = 2),
            e._a || (e._a = e._c.slice()),
            M(e, !0));
        },
        I = function(t) {
          var e,
            n = this;
          if (!n._d) {
            (n._d = !0), (n = n._w || n);
            try {
              if (n === t) throw E("Promise can't be resolved itself");
              (e = N(t))
                ? y(function() {
                    var r = { _w: n, _d: !1 };
                    try {
                      e.call(t, c(I, r, 1), c(F, r, 1));
                    } catch (o) {
                      F.call(r, o);
                    }
                  })
                : ((n._v = t), (n._s = 1), M(n, !1));
            } catch (r) {
              F.call({ _w: n, _d: !1 }, r);
            }
          }
        };
      k ||
        ((T = function(t) {
          h(this, T, 'Promise', '_h'), d(t), r.call(this);
          try {
            t(c(I, this, 1), c(F, this, 1));
          } catch (e) {
            F.call(this, e);
          }
        }),
        ((r = function(t) {
          (this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1);
        }).prototype = n(89)(T.prototype, {
          then: function(t, e) {
            var n = j(g(this, T));
            return (
              (n.ok = 'function' != typeof t || t),
              (n.fail = 'function' == typeof e && e),
              (n.domain = C ? S.domain : void 0),
              this._c.push(n),
              this._a && this._a.push(n),
              this._s && M(this, !1),
              n.promise
            );
          },
          catch: function(t) {
            return this.then(void 0, t);
          },
        })),
        (i = function() {
          var t = new r();
          (this.promise = t),
            (this.resolve = c(I, t, 1)),
            (this.reject = c(F, t, 1));
        }),
        (_.f = j = function(t) {
          return t === T || t === a ? new i(t) : o(t);
        })),
        f(f.G + f.W + f.F * !k, { Promise: T }),
        n(70)(T, 'Promise'),
        n(106)('Promise'),
        (a = n(46).Promise),
        f(f.S + f.F * !k, 'Promise', {
          reject: function(t) {
            var e = j(this);
            return (0, e.reject)(t), e.promise;
          },
        }),
        f(f.S + f.F * (u || !k), 'Promise', {
          resolve: function(t) {
            return x(u && this === a ? T : this, t);
          },
        }),
        f(
          f.S +
            f.F *
              !(
                k &&
                n(107)(function(t) {
                  T.all(t).catch(R);
                })
              ),
          'Promise',
          {
            all: function(t) {
              var e = this,
                n = j(e),
                r = n.resolve,
                o = n.reject,
                i = w(function() {
                  var n = [],
                    i = 0,
                    a = 1;
                  v(t, !1, function(t) {
                    var u = i++,
                      s = !1;
                    n.push(void 0),
                      a++,
                      e.resolve(t).then(function(t) {
                        s || ((s = !0), (n[u] = t), --a || r(n));
                      }, o);
                  }),
                    --a || r(n);
                });
              return i.e && o(i.v), n.promise;
            },
            race: function(t) {
              var e = this,
                n = j(e),
                r = n.reject,
                o = w(function() {
                  v(t, !1, function(t) {
                    e.resolve(t).then(n.resolve, r);
                  });
                });
              return o.e && r(o.v), n.promise;
            },
          }
        );
    },
    function(t, e, n) {
      'use strict';
      var r = n(15);
      t.exports = function(t, e) {
        return (
          !!t &&
          r(function() {
            e ? t.call(null, function() {}, 1) : t.call(null);
          })
        );
      };
    },
    function(t, e, n) {
      var r = n(13);
      t.exports = function(t, e) {
        if (!r(t) || t._t !== e)
          throw TypeError('Incompatible receiver, ' + e + ' required!');
        return t;
      };
    },
    function(t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, 'globalHistory', function() {
          return s;
        }),
        n.d(e, 'navigate', function() {
          return c;
        }),
        n.d(e, 'createHistory', function() {
          return i;
        }),
        n.d(e, 'createMemorySource', function() {
          return a;
        });
      n(41), n(22), n(51), n(2), n(75), n(18), n(62), n(17);
      var r =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        o = function(t) {
          return r({}, t.location, {
            state: t.history.state,
            key: (t.history.state && t.history.state.key) || 'initial',
          });
        },
        i = function(t, e) {
          var n = [],
            i = o(t),
            a = !1,
            u = function() {};
          return {
            get location() {
              return i;
            },
            get transitioning() {
              return a;
            },
            _onTransitionComplete: function() {
              (a = !1), u();
            },
            listen: function(e) {
              n.push(e);
              var r = function() {
                (i = o(t)), e({ location: i, action: 'POP' });
              };
              return (
                t.addEventListener('popstate', r),
                function() {
                  t.removeEventListener('popstate', r),
                    (n = n.filter(function(t) {
                      return t !== e;
                    }));
                }
              );
            },
            navigate: function(e) {
              var s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                c = s.state,
                l = s.replace,
                f = void 0 !== l && l;
              c = r({}, c, { key: Date.now() + '' });
              try {
                a || f
                  ? t.history.replaceState(c, null, e)
                  : t.history.pushState(c, null, e);
              } catch (d) {
                t.location[f ? 'replace' : 'assign'](e);
              }
              (i = o(t)), (a = !0);
              var p = new Promise(function(t) {
                return (u = t);
              });
              return (
                n.forEach(function(t) {
                  return t({ location: i, action: 'PUSH' });
                }),
                p
              );
            },
          };
        },
        a = function() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '/',
            e = 0,
            n = [{ pathname: t, search: '' }],
            r = [];
          return {
            get location() {
              return n[e];
            },
            addEventListener: function(t, e) {},
            removeEventListener: function(t, e) {},
            history: {
              get entries() {
                return n;
              },
              get index() {
                return e;
              },
              get state() {
                return r[e];
              },
              pushState: function(t, o, i) {
                var a = i.split('?'),
                  u = a[0],
                  s = a[1],
                  c = void 0 === s ? '' : s;
                e++, n.push({ pathname: u, search: c }), r.push(t);
              },
              replaceState: function(t, o, i) {
                var a = i.split('?'),
                  u = a[0],
                  s = a[1],
                  c = void 0 === s ? '' : s;
                (n[e] = { pathname: u, search: c }), (r[e] = t);
              },
            },
          };
        },
        u = !(
          'undefined' == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        s = i(u ? window : a()),
        c = s.navigate;
    },
    function(t, e) {
      t.exports = function(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++)
          (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      };
    },
    function(t, e, n) {
      n(147)('asyncIterator');
    },
    function(t, e, n) {
      var r = n(38),
        o = n(86),
        i = n(33),
        a = n(32),
        u = n(204);
      t.exports = function(t, e) {
        var n = 1 == t,
          s = 2 == t,
          c = 3 == t,
          l = 4 == t,
          f = 6 == t,
          p = 5 == t || f,
          d = e || u;
        return function(e, u, h) {
          for (
            var v,
              g,
              m = i(e),
              y = o(m),
              _ = r(u, h, 3),
              w = a(y.length),
              b = 0,
              x = n ? d(e, w) : s ? d(e, 0) : void 0;
            w > b;
            b++
          )
            if ((p || b in y) && ((g = _((v = y[b]), b, m)), t))
              if (n) x[b] = g;
              else if (g)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return v;
                  case 6:
                    return b;
                  case 2:
                    x.push(v);
                }
              else if (l) return !1;
          return f ? -1 : c || l ? l : x;
        };
      };
    },
    ,
    function(t, e, n) {
      'use strict';
      n(27), n(19), n(29);
      var r = (function(t) {
        return (
          (t = t || Object.create(null)),
          {
            on: function(e, n) {
              (t[e] || (t[e] = [])).push(n);
            },
            off: function(e, n) {
              t[e] && t[e].splice(t[e].indexOf(n) >>> 0, 1);
            },
            emit: function(e, n) {
              (t[e] || []).slice().map(function(t) {
                t(n);
              }),
                (t['*'] || []).slice().map(function(t) {
                  t(e, n);
                });
            },
          }
        );
      })();
      e.a = r;
    },
    ,
    function(t, e) {
      function n() {
        if ('function' != typeof WeakMap) return null;
        var t = new WeakMap();
        return (
          (n = function() {
            return t;
          }),
          t
        );
      }
      t.exports = function(t) {
        if (t && t.__esModule) return t;
        var e = n();
        if (e && e.has(t)) return e.get(t);
        var r = {};
        if (null != t) {
          var o = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in t)
            if (Object.prototype.hasOwnProperty.call(t, i)) {
              var a = o ? Object.getOwnPropertyDescriptor(t, i) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(r, i, a)
                : (r[i] = t[i]);
            }
        }
        return (r.default = t), e && e.set(t, r), r;
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(3),
        o = n(57)(2);
      r(r.P + r.F * !n(52)([].filter, !0), 'Array', {
        filter: function(t) {
          return o(this, t, arguments[1]);
        },
      });
    },
    function(t, e, n) {
      'use strict';
      n(197);
      var r = n(12),
        o = n(83),
        i = n(14),
        a = /./.toString,
        u = function(t) {
          n(23)(RegExp.prototype, 'toString', t, !0);
        };
      n(15)(function() {
        return '/a/b' != a.call({ source: 'a', flags: 'b' });
      })
        ? u(function() {
            var t = r(this);
            return '/'.concat(
              t.source,
              '/',
              'flags' in t
                ? t.flags
                : !i && t instanceof RegExp
                ? o.call(t)
                : void 0
            );
          })
        : 'toString' != a.name &&
          u(function() {
            return a.call(this);
          });
    },
    function(t, e, n) {
      'use strict';
      var r = n(3),
        o = n(212);
      r(r.P + r.F * !n(52)([].reduce, !0), 'Array', {
        reduce: function(t) {
          return o(this, t, arguments.length, arguments[1], !1);
        },
      });
    },
    function(t, e) {
      t.exports = !1;
    },
    function(t, e) {
      var n = 0,
        r = Math.random();
      t.exports = function(t) {
        return 'Symbol('.concat(
          void 0 === t ? '' : t,
          ')_',
          (++n + r).toString(36)
        );
      };
    },
    function(t, e) {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    function(t, e) {
      e.f = {}.propertyIsEnumerable;
    },
    function(t, e) {
      t.exports = {};
    },
    function(t, e, n) {
      var r = n(21).f,
        o = n(31),
        i = n(8)('toStringTag');
      t.exports = function(t, e, n) {
        t &&
          !o((t = n ? t : t.prototype), i) &&
          r(t, i, { configurable: !0, value: e });
      };
    },
    function(t, e, n) {
      var r = n(12),
        o = n(199),
        i = n(104),
        a = n(103)('IE_PROTO'),
        u = function() {},
        s = function() {
          var t,
            e = n(100)('iframe'),
            r = i.length;
          for (
            e.style.display = 'none',
              n(142).appendChild(e),
              e.src = 'javascript:',
              (t = e.contentWindow.document).open(),
              t.write('<script>document.F=Object</script>'),
              t.close(),
              s = t.F;
            r--;

          )
            delete s.prototype[i[r]];
          return s();
        };
      t.exports =
        Object.create ||
        function(t, e) {
          var n;
          return (
            null !== t
              ? ((u.prototype = r(t)),
                (n = new u()),
                (u.prototype = null),
                (n[a] = t))
              : (n = s()),
            void 0 === e ? n : o(n, e)
          );
        };
    },
    function(t, e, n) {
      var r = n(66)('meta'),
        o = n(13),
        i = n(31),
        a = n(21).f,
        u = 0,
        s =
          Object.isExtensible ||
          function() {
            return !0;
          },
        c = !n(15)(function() {
          return s(Object.preventExtensions({}));
        }),
        l = function(t) {
          a(t, r, { value: { i: 'O' + ++u, w: {} } });
        },
        f = (t.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function(t, e) {
            if (!o(t))
              return 'symbol' == typeof t
                ? t
                : ('string' == typeof t ? 'S' : 'P') + t;
            if (!i(t, r)) {
              if (!s(t)) return 'F';
              if (!e) return 'E';
              l(t);
            }
            return t[r].i;
          },
          getWeak: function(t, e) {
            if (!i(t, r)) {
              if (!s(t)) return !0;
              if (!e) return !1;
              l(t);
            }
            return t[r].w;
          },
          onFreeze: function(t) {
            return c && f.NEED && s(t) && !i(t, r) && l(t), t;
          },
        });
    },
    function(t, e) {
      t.exports = function(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      };
    },
    function(t, e) {
      t.exports = function(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      };
    },
    function(t, e, n) {
      var r = n(3);
      r(r.S, 'Date', {
        now: function() {
          return new Date().getTime();
        },
      });
    },
    function(t, e, n) {
      t.exports = n(222)();
    },
    function(t, e, n) {
      'use strict';
      e.a = function(t, e) {
        return (
          void 0 === e && (e = ''),
          t.substr(0, e.length) === e ? t.slice(e.length) : t
        );
      };
    },
    function(t, e, n) {
      'use strict';
      (e.__esModule = !0), (e.default = void 0);
      var r = !(
        'undefined' == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      (e.default = r), (t.exports = e.default);
    },
    function(t, e, n) {
      'use strict';
      var r = n(80),
        o = RegExp.prototype.exec;
      t.exports = function(t, e) {
        var n = t.exec;
        if ('function' == typeof n) {
          var i = n.call(t, e);
          if ('object' != typeof i)
            throw new TypeError(
              'RegExp exec method returned something other than an Object or null'
            );
          return i;
        }
        if ('RegExp' !== r(t))
          throw new TypeError('RegExp#exec called on incompatible receiver');
        return o.call(t, e);
      };
    },
    function(t, e, n) {
      var r = n(45),
        o = n(8)('toStringTag'),
        i =
          'Arguments' ==
          r(
            (function() {
              return arguments;
            })()
          );
      t.exports = function(t) {
        var e, n, a;
        return void 0 === t
          ? 'Undefined'
          : null === t
          ? 'Null'
          : 'string' ==
            typeof (n = (function(t, e) {
              try {
                return t[e];
              } catch (n) {}
            })((e = Object(t)), o))
          ? n
          : i
          ? r(e)
          : 'Object' == (a = r(e)) && 'function' == typeof e.callee
          ? 'Arguments'
          : a;
      };
    },
    function(t, e, n) {
      var r = n(46),
        o = n(11),
        i = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
      (t.exports = function(t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {});
      })('versions', []).push({
        version: r.version,
        mode: n(65) ? 'pure' : 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
      });
    },
    function(t, e, n) {
      'use strict';
      n(185);
      var r = n(23),
        o = n(37),
        i = n(15),
        a = n(48),
        u = n(8),
        s = n(99),
        c = u('species'),
        l = !i(function() {
          var t = /./;
          return (
            (t.exec = function() {
              var t = [];
              return (t.groups = { a: '7' }), t;
            }),
            '7' !== ''.replace(t, '$<a>')
          );
        }),
        f = (function() {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function() {
            return e.apply(this, arguments);
          };
          var n = 'ab'.split(t);
          return 2 === n.length && 'a' === n[0] && 'b' === n[1];
        })();
      t.exports = function(t, e, n) {
        var p = u(t),
          d = !i(function() {
            var e = {};
            return (
              (e[p] = function() {
                return 7;
              }),
              7 != ''[t](e)
            );
          }),
          h = d
            ? !i(function() {
                var e = !1,
                  n = /a/;
                return (
                  (n.exec = function() {
                    return (e = !0), null;
                  }),
                  'split' === t &&
                    ((n.constructor = {}),
                    (n.constructor[c] = function() {
                      return n;
                    })),
                  n[p](''),
                  !e
                );
              })
            : void 0;
        if (!d || !h || ('replace' === t && !l) || ('split' === t && !f)) {
          var v = /./[p],
            g = n(a, p, ''[t], function(t, e, n, r, o) {
              return e.exec === s
                ? d && !o
                  ? { done: !0, value: v.call(e, n, r) }
                  : { done: !0, value: t.call(n, e, r) }
                : { done: !1 };
            }),
            m = g[0],
            y = g[1];
          r(String.prototype, t, m),
            o(
              RegExp.prototype,
              p,
              2 == e
                ? function(t, e) {
                    return y.call(t, this, e);
                  }
                : function(t) {
                    return y.call(t, this);
                  }
            );
        }
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(12);
      t.exports = function() {
        var t = r(this),
          e = '';
        return (
          t.global && (e += 'g'),
          t.ignoreCase && (e += 'i'),
          t.multiline && (e += 'm'),
          t.unicode && (e += 'u'),
          t.sticky && (e += 'y'),
          e
        );
      };
    },
    function(t, e, n) {
      var r = n(13);
      t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && 'function' == typeof (n = t.toString) && !r((o = n.call(t))))
          return o;
        if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t))))
          return o;
        if (!e && 'function' == typeof (n = t.toString) && !r((o = n.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(t, e) {
      var n = Math.ceil,
        r = Math.floor;
      t.exports = function(t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
      };
    },
    function(t, e, n) {
      var r = n(45);
      t.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(t) {
            return 'String' == r(t) ? t.split('') : Object(t);
          };
    },
    function(t, e) {
      t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || (void 0 !== r && r in t))
          throw TypeError(n + ': incorrect invocation!');
        return t;
      };
    },
    function(t, e, n) {
      var r = n(38),
        o = n(136),
        i = n(137),
        a = n(12),
        u = n(32),
        s = n(138),
        c = {},
        l = {};
      ((e = t.exports = function(t, e, n, f, p) {
        var d,
          h,
          v,
          g,
          m = p
            ? function() {
                return t;
              }
            : s(t),
          y = r(n, f, e ? 2 : 1),
          _ = 0;
        if ('function' != typeof m) throw TypeError(t + ' is not iterable!');
        if (i(m)) {
          for (d = u(t.length); d > _; _++)
            if ((g = e ? y(a((h = t[_]))[0], h[1]) : y(t[_])) === c || g === l)
              return g;
        } else
          for (v = m.call(t); !(h = v.next()).done; )
            if ((g = o(v, y, h.value, e)) === c || g === l) return g;
      }).BREAK = c),
        (e.RETURN = l);
    },
    function(t, e, n) {
      var r = n(23);
      t.exports = function(t, e, n) {
        for (var o in e) r(t, o, e[o], n);
        return t;
      };
    },
    function(t, e, n) {
      var r = n(135),
        o = n(104).concat('length', 'prototype');
      e.f =
        Object.getOwnPropertyNames ||
        function(t) {
          return r(t, o);
        };
    },
    function(t, e, n) {
      'use strict';
      var r = n(11),
        o = n(3),
        i = n(23),
        a = n(89),
        u = n(72),
        s = n(88),
        c = n(87),
        l = n(13),
        f = n(15),
        p = n(107),
        d = n(70),
        h = n(114);
      t.exports = function(t, e, n, v, g, m) {
        var y = r[t],
          _ = y,
          w = g ? 'set' : 'add',
          b = _ && _.prototype,
          x = {},
          E = function(t) {
            var e = b[t];
            i(
              b,
              t,
              'delete' == t
                ? function(t) {
                    return !(m && !l(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : 'has' == t
                ? function(t) {
                    return !(m && !l(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : 'get' == t
                ? function(t) {
                    return m && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                  }
                : 'add' == t
                ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this;
                  }
                : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this;
                  }
            );
          };
        if (
          'function' == typeof _ &&
          (m ||
            (b.forEach &&
              !f(function() {
                new _().entries().next();
              })))
        ) {
          var S = new _(),
            P = S[w](m ? {} : -0, 1) != S,
            O = f(function() {
              S.has(1);
            }),
            T = p(function(t) {
              new _(t);
            }),
            C =
              !m &&
              f(function() {
                for (var t = new _(), e = 5; e--; ) t[w](e, e);
                return !t.has(-0);
              });
          T ||
            (((_ = e(function(e, n) {
              c(e, _, t);
              var r = h(new y(), e, _);
              return null != n && s(n, g, r[w], r), r;
            })).prototype = b),
            (b.constructor = _)),
            (O || C) && (E('delete'), E('has'), g && E('get')),
            (C || P) && E(w),
            m && b.clear && delete b.clear;
        } else
          (_ = v.getConstructor(e, t, g, w)), a(_.prototype, n), (u.NEED = !0);
        return (
          d(_, t),
          (x[t] = _),
          o(o.G + o.W + o.F * (_ != y), x),
          m || v.setStrong(_, t, g),
          _
        );
      };
    },
    ,
    function(t, e) {
      e.polyfill = function(t) {
        return t;
      };
    },
    function(t, e, n) {
      'use strict';
      n(17);
      var r = n(0),
        o = n.n(r),
        i = n(16),
        a = n(7);
      var u = (function(t) {
        var e, n;
        function o() {
          return t.apply(this, arguments) || this;
        }
        return (
          (n = t),
          ((e = o).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n),
          (o.prototype.render = function() {
            var t = Object.assign({}, this.props, {
                pathContext: this.props.pageContext,
              }),
              e =
                Object(a.apiRunner)('replaceComponentRenderer', {
                  props: this.props,
                  loader: i.publicLoader,
                })[0] ||
                Object(r.createElement)(
                  this.props.pageResources.component,
                  Object.assign({}, t, {
                    key: this.props.path || this.props.pageResources.page.path,
                  })
                );
            return Object(a.apiRunner)(
              'wrapPageElement',
              { element: e, props: t },
              e,
              function(e) {
                return { element: e.result, props: t };
              }
            ).pop();
          }),
          o
        );
      })(o.a.Component);
      e.a = u;
    },
    ,
    function(t, e, n) {
      var r = Date.prototype,
        o = r.toString,
        i = r.getTime;
      new Date(NaN) + '' != 'Invalid Date' &&
        n(23)(r, 'toString', function() {
          var t = i.call(this);
          return t == t ? o.call(this) : 'Invalid Date';
        });
    },
    function(t, e, n) {
      'use strict';
      var r = n(3),
        o = n(57)(3);
      r(r.P + r.F * !n(52)([].some, !0), 'Array', {
        some: function(t) {
          return o(this, t, arguments[1]);
        },
      });
    },
    ,
    function(t, e, n) {
      'use strict';
      var r,
        o,
        i = n(83),
        a = RegExp.prototype.exec,
        u = String.prototype.replace,
        s = a,
        c =
          ((r = /a/),
          (o = /b*/g),
          a.call(r, 'a'),
          a.call(o, 'a'),
          0 !== r.lastIndex || 0 !== o.lastIndex),
        l = void 0 !== /()??/.exec('')[1];
      (c || l) &&
        (s = function(t) {
          var e,
            n,
            r,
            o,
            s = this;
          return (
            l && (n = new RegExp('^' + s.source + '$(?!\\s)', i.call(s))),
            c && (e = s.lastIndex),
            (r = a.call(s, t)),
            c && r && (s.lastIndex = s.global ? r.index + r[0].length : e),
            l &&
              r &&
              r.length > 1 &&
              u.call(r[0], n, function() {
                for (o = 1; o < arguments.length - 2; o++)
                  void 0 === arguments[o] && (r[o] = void 0);
              }),
            r
          );
        }),
        (t.exports = s);
    },
    function(t, e, n) {
      var r = n(13),
        o = n(11).document,
        i = r(o) && r(o.createElement);
      t.exports = function(t) {
        return i ? o.createElement(t) : {};
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(133)(!0);
      t.exports = function(t, e, n) {
        return e + (n ? r(t, e).length : 1);
      };
    },
    function(t, e, n) {
      var r = n(50),
        o = n(32),
        i = n(187);
      t.exports = function(t) {
        return function(e, n, a) {
          var u,
            s = r(e),
            c = o(s.length),
            l = i(a, c);
          if (t && n != n) {
            for (; c > l; ) if ((u = s[l++]) != u) return !0;
          } else
            for (; c > l; l++)
              if ((t || l in s) && s[l] === n) return t || l || 0;
          return !t && -1;
        };
      };
    },
    function(t, e, n) {
      var r = n(81)('keys'),
        o = n(66);
      t.exports = function(t) {
        return r[t] || (r[t] = o(t));
      };
    },
    function(t, e) {
      t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ','
      );
    },
    function(t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    function(t, e, n) {
      'use strict';
      var r = n(11),
        o = n(21),
        i = n(14),
        a = n(8)('species');
      t.exports = function(t) {
        var e = r[t];
        i &&
          e &&
          !e[a] &&
          o.f(e, a, {
            configurable: !0,
            get: function() {
              return this;
            },
          });
      };
    },
    function(t, e, n) {
      var r = n(8)('iterator'),
        o = !1;
      try {
        var i = [7][r]();
        (i.return = function() {
          o = !0;
        }),
          Array.from(i, function() {
            throw 2;
          });
      } catch (a) {}
      t.exports = function(t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
          var i = [7],
            u = i[r]();
          (u.next = function() {
            return { done: (n = !0) };
          }),
            (i[r] = function() {
              return u;
            }),
            t(i);
        } catch (a) {}
        return n;
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(65),
        o = n(3),
        i = n(23),
        a = n(37),
        u = n(69),
        s = n(198),
        c = n(70),
        l = n(200),
        f = n(8)('iterator'),
        p = !([].keys && 'next' in [].keys()),
        d = function() {
          return this;
        };
      t.exports = function(t, e, n, h, v, g, m) {
        s(n, e, h);
        var y,
          _,
          w,
          b = function(t) {
            if (!p && t in P) return P[t];
            switch (t) {
              case 'keys':
              case 'values':
                return function() {
                  return new n(this, t);
                };
            }
            return function() {
              return new n(this, t);
            };
          },
          x = e + ' Iterator',
          E = 'values' == v,
          S = !1,
          P = t.prototype,
          O = P[f] || P['@@iterator'] || (v && P[v]),
          T = O || b(v),
          C = v ? (E ? b('entries') : T) : void 0,
          R = ('Array' == e && P.entries) || O;
        if (
          (R &&
            (w = l(R.call(new t()))) !== Object.prototype &&
            w.next &&
            (c(w, x, !0), r || 'function' == typeof w[f] || a(w, f, d)),
          E &&
            O &&
            'values' !== O.name &&
            ((S = !0),
            (T = function() {
              return O.call(this);
            })),
          (r && !m) || (!p && !S && P[f]) || a(P, f, T),
          (u[e] = T),
          (u[x] = d),
          v)
        )
          if (
            ((y = {
              values: E ? T : b('values'),
              keys: g ? T : b('keys'),
              entries: C,
            }),
            m)
          )
            for (_ in y) _ in P || i(P, _, y[_]);
          else o(o.P + o.F * (p || S), e, y);
        return y;
      };
    },
    function(t, e, n) {
      var r = n(45);
      t.exports =
        Array.isArray ||
        function(t) {
          return 'Array' == r(t);
        };
    },
    function(t, e, n) {
      var r = n(68),
        o = n(67),
        i = n(50),
        a = n(84),
        u = n(31),
        s = n(131),
        c = Object.getOwnPropertyDescriptor;
      e.f = n(14)
        ? c
        : function(t, e) {
            if (((t = i(t)), (e = a(e, !0)), s))
              try {
                return c(t, e);
              } catch (n) {}
            if (u(t, e)) return o(!r.f.call(t, e), t[e]);
          };
    },
    function(t, e, n) {
      'use strict';
      n(5), n(6), n(2), n(9), n(41), n(22), n(27), n(17), n(40);
      var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
      function a(t) {
        if (null == t)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(t);
      }
      t.exports = (function() {
        try {
          if (!Object.assign) return !1;
          var t = new String('abc');
          if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0]))
            return !1;
          for (var e = {}, n = 0; n < 10; n++)
            e['_' + String.fromCharCode(n)] = n;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(e)
              .map(function(t) {
                return e[t];
              })
              .join('')
          )
            return !1;
          var r = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function(t) {
              r[t] = t;
            }),
            'abcdefghijklmnopqrst' ===
              Object.keys(Object.assign({}, r)).join('')
          );
        } catch (o) {
          return !1;
        }
      })()
        ? Object.assign
        : function(t, e) {
            for (var n, u, s = a(t), c = 1; c < arguments.length; c++) {
              for (var l in (n = Object(arguments[c])))
                o.call(n, l) && (s[l] = n[l]);
              if (r) {
                u = r(n);
                for (var f = 0; f < u.length; f++)
                  i.call(n, u[f]) && (s[u[f]] = n[u[f]]);
              }
            }
            return s;
          };
    },
    function(t, e, n) {
      var r = n(13),
        o = n(45),
        i = n(8)('match');
      t.exports = function(t) {
        var e;
        return r(t) && (void 0 !== (e = t[i]) ? !!e : 'RegExp' == o(t));
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(153),
        o = n(53);
      t.exports = n(91)(
        'Set',
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function(t) {
            return r.def(o(this, 'Set'), (t = 0 === t ? 0 : t), t);
          },
        },
        r
      );
    },
    function(t, e, n) {
      var r = n(13),
        o = n(149).set;
      t.exports = function(t, e, n) {
        var i,
          a = e.constructor;
        return (
          a !== n &&
            'function' == typeof a &&
            (i = a.prototype) !== n.prototype &&
            r(i) &&
            o &&
            o(t, i),
          t
        );
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(133)(!0);
      n(108)(
        String,
        'String',
        function(t) {
          (this._t = String(t)), (this._i = 0);
        },
        function() {
          var t,
            e = this._t,
            n = this._i;
          return n >= e.length
            ? { value: void 0, done: !0 }
            : ((t = r(e, n)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function(t, e, n) {
      'use strict';
      var r = n(153),
        o = n(53);
      t.exports = n(91)(
        'Map',
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function(t) {
            var e = r.getEntry(o(this, 'Map'), t);
            return e && e.v;
          },
          set: function(t, e) {
            return r.def(o(this, 'Map'), 0 === t ? 0 : t, e);
          },
        },
        r,
        !0
      );
    },
    function(t, e, n) {
      'use strict';
      var r = n(3),
        o = n(102)(!0);
      r(r.P, 'Array', {
        includes: function(t) {
          return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
        n(145)('includes');
    },
    function(t, e, n) {
      'use strict';
      var r = n(3),
        o = n(154);
      r(r.P + r.F * n(155)('includes'), 'String', {
        includes: function(t) {
          return !!~o(this, t, 'includes').indexOf(
            t,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      });
    },
    function(t, e, n) {
      'use strict';
      t.exports = n(235).default;
    },
    function(t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.publicContext = e.PublicConsumer = e.PublicProvider = e.Consumer = e.Provider = void 0);
      var r = n(0),
        o = (0, r.createContext)(),
        i = o.Provider,
        a = o.Consumer;
      (e.Consumer = a), (e.Provider = i);
      var u = (0, r.createContext)();
      e.publicContext = u;
      var s = u.Provider,
        c = u.Consumer;
      (e.PublicConsumer = c), (e.PublicProvider = s);
    },
    function(t, e, n) {
      t.exports = n(248)();
    },
    ,
    function(t, e, n) {
      e.components = {
        'component---node-modules-gatsby-plugin-offline-app-shell-js': function() {
          return n.e(3).then(n.t.bind(null, 283, 7));
        },
        'component---src-templates-blog-post-js': function() {
          return Promise.all([n.e(1), n.e(0), n.e(9)]).then(n.bind(null, 284));
        },
        'component---src-pages-404-jsx': function() {
          return Promise.all([n.e(1), n.e(0), n.e(4)]).then(n.bind(null, 285));
        },
        'component---src-pages-about-jsx': function() {
          return Promise.all([n.e(1), n.e(0), n.e(5)]).then(n.bind(null, 289));
        },
        'component---src-pages-index-jsx': function() {
          return Promise.all([n.e(1), n.e(0), n.e(6)]).then(n.bind(null, 286));
        },
        'component---src-pages-projects-jsx': function() {
          return Promise.all([n.e(1), n.e(0), n.e(7)]).then(n.bind(null, 287));
        },
        'component---src-pages-resume-jsx': function() {
          return Promise.all([n.e(1), n.e(0), n.e(8)]).then(n.bind(null, 288));
        },
      };
    },
    function(t, e) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function('return this')();
      } catch (r) {
        'object' == typeof window && (n = window);
      }
      t.exports = n;
    },
    function(t, e, n) {
      var r = n(3);
      r(r.S, 'Object', { setPrototypeOf: n(149).set });
    },
    function(t, e, n) {
      'use strict';
      n(29),
        n(19),
        n(5),
        n(6),
        n(2),
        n(9),
        n(35),
        (e.__esModule = !0),
        (e.default = e.EXITING = e.ENTERED = e.ENTERING = e.EXITED = e.UNMOUNTED = void 0);
      var r = (function(t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              if (Object.prototype.hasOwnProperty.call(t, n)) {
                var r =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(t, n)
                    : {};
                r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
              }
          return (e.default = t), e;
        })(n(76)),
        o = u(n(0)),
        i = u(n(44)),
        a = n(93);
      n(159);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var s = 'unmounted';
      e.UNMOUNTED = s;
      var c = 'exited';
      e.EXITED = c;
      var l = 'entering';
      e.ENTERING = l;
      var f = 'entered';
      e.ENTERED = f;
      e.EXITING = 'exiting';
      var p = (function(t) {
        var e, n;
        function r(e, n) {
          var r;
          r = t.call(this, e, n) || this;
          var o,
            i = n.transitionGroup,
            a = i && !i.isMounting ? e.enter : e.appear;
          return (
            (r.appearStatus = null),
            e.in
              ? a
                ? ((o = c), (r.appearStatus = l))
                : (o = f)
              : (o = e.unmountOnExit || e.mountOnEnter ? s : c),
            (r.state = { status: o }),
            (r.nextCallback = null),
            r
          );
        }
        (n = t),
          ((e = r).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
        var a = r.prototype;
        return (
          (a.getChildContext = function() {
            return { transitionGroup: null };
          }),
          (r.getDerivedStateFromProps = function(t, e) {
            return t.in && e.status === s ? { status: c } : null;
          }),
          (a.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus);
          }),
          (a.componentDidUpdate = function(t) {
            var e = null;
            if (t !== this.props) {
              var n = this.state.status;
              this.props.in
                ? n !== l && n !== f && (e = l)
                : (n !== l && n !== f) || (e = 'exiting');
            }
            this.updateStatus(!1, e);
          }),
          (a.componentWillUnmount = function() {
            this.cancelNextCallback();
          }),
          (a.getTimeouts = function() {
            var t,
              e,
              n,
              r = this.props.timeout;
            return (
              (t = e = n = r),
              null != r &&
                'number' != typeof r &&
                ((t = r.exit),
                (e = r.enter),
                (n = void 0 !== r.appear ? r.appear : e)),
              { exit: t, enter: e, appear: n }
            );
          }),
          (a.updateStatus = function(t, e) {
            if ((void 0 === t && (t = !1), null !== e)) {
              this.cancelNextCallback();
              var n = i.default.findDOMNode(this);
              e === l ? this.performEnter(n, t) : this.performExit(n);
            } else
              this.props.unmountOnExit &&
                this.state.status === c &&
                this.setState({ status: s });
          }),
          (a.performEnter = function(t, e) {
            var n = this,
              r = this.props.enter,
              o = this.context.transitionGroup
                ? this.context.transitionGroup.isMounting
                : e,
              i = this.getTimeouts(),
              a = o ? i.appear : i.enter;
            e || r
              ? (this.props.onEnter(t, o),
                this.safeSetState({ status: l }, function() {
                  n.props.onEntering(t, o),
                    n.onTransitionEnd(t, a, function() {
                      n.safeSetState({ status: f }, function() {
                        n.props.onEntered(t, o);
                      });
                    });
                }))
              : this.safeSetState({ status: f }, function() {
                  n.props.onEntered(t);
                });
          }),
          (a.performExit = function(t) {
            var e = this,
              n = this.props.exit,
              r = this.getTimeouts();
            n
              ? (this.props.onExit(t),
                this.safeSetState({ status: 'exiting' }, function() {
                  e.props.onExiting(t),
                    e.onTransitionEnd(t, r.exit, function() {
                      e.safeSetState({ status: c }, function() {
                        e.props.onExited(t);
                      });
                    });
                }))
              : this.safeSetState({ status: c }, function() {
                  e.props.onExited(t);
                });
          }),
          (a.cancelNextCallback = function() {
            null !== this.nextCallback &&
              (this.nextCallback.cancel(), (this.nextCallback = null));
          }),
          (a.safeSetState = function(t, e) {
            (e = this.setNextCallback(e)), this.setState(t, e);
          }),
          (a.setNextCallback = function(t) {
            var e = this,
              n = !0;
            return (
              (this.nextCallback = function(r) {
                n && ((n = !1), (e.nextCallback = null), t(r));
              }),
              (this.nextCallback.cancel = function() {
                n = !1;
              }),
              this.nextCallback
            );
          }),
          (a.onTransitionEnd = function(t, e, n) {
            this.setNextCallback(n);
            var r = null == e && !this.props.addEndListener;
            t && !r
              ? (this.props.addEndListener &&
                  this.props.addEndListener(t, this.nextCallback),
                null != e && setTimeout(this.nextCallback, e))
              : setTimeout(this.nextCallback, 0);
          }),
          (a.render = function() {
            var t = this.state.status;
            if (t === s) return null;
            var e = this.props,
              n = e.children,
              r = (function(t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(e, ['children']);
            if (
              (delete r.in,
              delete r.mountOnEnter,
              delete r.unmountOnExit,
              delete r.appear,
              delete r.enter,
              delete r.exit,
              delete r.timeout,
              delete r.addEndListener,
              delete r.onEnter,
              delete r.onEntering,
              delete r.onEntered,
              delete r.onExit,
              delete r.onExiting,
              delete r.onExited,
              'function' == typeof n)
            )
              return n(t, r);
            var i = o.default.Children.only(n);
            return o.default.cloneElement(i, r);
          }),
          r
        );
      })(o.default.Component);
      function d() {}
      (p.contextTypes = { transitionGroup: r.object }),
        (p.childContextTypes = { transitionGroup: function() {} }),
        (p.propTypes = {}),
        (p.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: d,
          onEntering: d,
          onEntered: d,
          onExit: d,
          onExiting: d,
          onExited: d,
        }),
        (p.UNMOUNTED = 0),
        (p.EXITED = 1),
        (p.ENTERING = 2),
        (p.ENTERED = 3),
        (p.EXITING = 4);
      var h = (0, a.polyfill)(p);
      e.default = h;
    },
    function(t, e, n) {
      'use strict';
      n(158)('trim', function(t) {
        return function() {
          return t(this, 3);
        };
      });
    },
    function(t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.default = function(t) {
          return t === t.window
            ? t
            : 9 === t.nodeType && (t.defaultView || t.parentWindow);
        }),
        (t.exports = e.default);
    },
    ,
    function(t, e, n) {
      'use strict';
      var r = n(12),
        o = n(184),
        i = n(79);
      n(82)('search', 1, function(t, e, n, a) {
        return [
          function(n) {
            var r = t(this),
              o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r));
          },
          function(t) {
            var e = a(n, t, this);
            if (e.done) return e.value;
            var u = r(t),
              s = String(this),
              c = u.lastIndex;
            o(c, 0) || (u.lastIndex = 0);
            var l = i(u, s);
            return (
              o(u.lastIndex, c) || (u.lastIndex = c), null === l ? -1 : l.index
            );
          },
        ];
      });
    },
    function(t, e, n) {
      t.exports =
        !n(14) &&
        !n(15)(function() {
          return (
            7 !=
            Object.defineProperty(n(100)('div'), 'a', {
              get: function() {
                return 7;
              },
            }).a
          );
        });
    },
    function(t, e, n) {
      'use strict';
      var r = n(12),
        o = n(32),
        i = n(101),
        a = n(79);
      n(82)('match', 1, function(t, e, n, u) {
        return [
          function(n) {
            var r = t(this),
              o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r));
          },
          function(t) {
            var e = u(n, t, this);
            if (e.done) return e.value;
            var s = r(t),
              c = String(this);
            if (!s.global) return a(s, c);
            var l = s.unicode;
            s.lastIndex = 0;
            for (var f, p = [], d = 0; null !== (f = a(s, c)); ) {
              var h = String(f[0]);
              (p[d] = h),
                '' === h && (s.lastIndex = i(c, o(s.lastIndex), l)),
                d++;
            }
            return 0 === d ? null : p;
          },
        ];
      });
    },
    function(t, e, n) {
      var r = n(85),
        o = n(48);
      t.exports = function(t) {
        return function(e, n) {
          var i,
            a,
            u = String(o(e)),
            s = r(n),
            c = u.length;
          return s < 0 || s >= c
            ? t
              ? ''
              : void 0
            : (i = u.charCodeAt(s)) < 55296 ||
              i > 56319 ||
              s + 1 === c ||
              (a = u.charCodeAt(s + 1)) < 56320 ||
              a > 57343
            ? t
              ? u.charAt(s)
              : i
            : t
            ? u.slice(s, s + 2)
            : a - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(14),
        o = n(49),
        i = n(105),
        a = n(68),
        u = n(33),
        s = n(86),
        c = Object.assign;
      t.exports =
        !c ||
        n(15)(function() {
          var t = {},
            e = {},
            n = Symbol(),
            r = 'abcdefghijklmnopqrst';
          return (
            (t[n] = 7),
            r.split('').forEach(function(t) {
              e[t] = t;
            }),
            7 != c({}, t)[n] || Object.keys(c({}, e)).join('') != r
          );
        })
          ? function(t, e) {
              for (
                var n = u(t), c = arguments.length, l = 1, f = i.f, p = a.f;
                c > l;

              )
                for (
                  var d,
                    h = s(arguments[l++]),
                    v = f ? o(h).concat(f(h)) : o(h),
                    g = v.length,
                    m = 0;
                  g > m;

                )
                  (d = v[m++]), (r && !p.call(h, d)) || (n[d] = h[d]);
              return n;
            }
          : c;
    },
    function(t, e, n) {
      var r = n(31),
        o = n(50),
        i = n(102)(!1),
        a = n(103)('IE_PROTO');
      t.exports = function(t, e) {
        var n,
          u = o(t),
          s = 0,
          c = [];
        for (n in u) n != a && r(u, n) && c.push(n);
        for (; e.length > s; ) r(u, (n = e[s++])) && (~i(c, n) || c.push(n));
        return c;
      };
    },
    function(t, e, n) {
      var r = n(12);
      t.exports = function(t, e, n, o) {
        try {
          return o ? e(r(n)[0], n[1]) : e(n);
        } catch (a) {
          var i = t.return;
          throw (void 0 !== i && r(i.call(t)), a);
        }
      };
    },
    function(t, e, n) {
      var r = n(69),
        o = n(8)('iterator'),
        i = Array.prototype;
      t.exports = function(t) {
        return void 0 !== t && (r.Array === t || i[o] === t);
      };
    },
    function(t, e, n) {
      var r = n(80),
        o = n(8)('iterator'),
        i = n(69);
      t.exports = n(46).getIteratorMethod = function(t) {
        if (null != t) return t[o] || t['@@iterator'] || i[r(t)];
      };
    },
    function(t, e, n) {
      var r = n(12),
        o = n(47),
        i = n(8)('species');
      t.exports = function(t, e) {
        var n,
          a = r(t).constructor;
        return void 0 === a || null == (n = r(a)[i]) ? e : o(n);
      };
    },
    function(t, e, n) {
      var r,
        o,
        i,
        a = n(38),
        u = n(141),
        s = n(142),
        c = n(100),
        l = n(11),
        f = l.process,
        p = l.setImmediate,
        d = l.clearImmediate,
        h = l.MessageChannel,
        v = l.Dispatch,
        g = 0,
        m = {},
        y = function() {
          var t = +this;
          if (m.hasOwnProperty(t)) {
            var e = m[t];
            delete m[t], e();
          }
        },
        _ = function(t) {
          y.call(t.data);
        };
      (p && d) ||
        ((p = function(t) {
          for (var e = [], n = 1; arguments.length > n; )
            e.push(arguments[n++]);
          return (
            (m[++g] = function() {
              u('function' == typeof t ? t : Function(t), e);
            }),
            r(g),
            g
          );
        }),
        (d = function(t) {
          delete m[t];
        }),
        'process' == n(45)(f)
          ? (r = function(t) {
              f.nextTick(a(y, t, 1));
            })
          : v && v.now
          ? (r = function(t) {
              v.now(a(y, t, 1));
            })
          : h
          ? ((i = (o = new h()).port2),
            (o.port1.onmessage = _),
            (r = a(i.postMessage, i, 1)))
          : l.addEventListener &&
            'function' == typeof postMessage &&
            !l.importScripts
          ? ((r = function(t) {
              l.postMessage(t + '', '*');
            }),
            l.addEventListener('message', _, !1))
          : (r =
              'onreadystatechange' in c('script')
                ? function(t) {
                    s.appendChild(c('script')).onreadystatechange = function() {
                      s.removeChild(this), y.call(t);
                    };
                  }
                : function(t) {
                    setTimeout(a(y, t, 1), 0);
                  })),
        (t.exports = { set: p, clear: d });
    },
    function(t, e) {
      t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
          case 0:
            return r ? t() : t.call(n);
          case 1:
            return r ? t(e[0]) : t.call(n, e[0]);
          case 2:
            return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
          case 3:
            return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
          case 4:
            return r
              ? t(e[0], e[1], e[2], e[3])
              : t.call(n, e[0], e[1], e[2], e[3]);
        }
        return t.apply(n, e);
      };
    },
    function(t, e, n) {
      var r = n(11).document;
      t.exports = r && r.documentElement;
    },
    function(t, e, n) {
      'use strict';
      var r = n(47);
      function o(t) {
        var e, n;
        (this.promise = new t(function(t, r) {
          if (void 0 !== e || void 0 !== n)
            throw TypeError('Bad Promise constructor');
          (e = t), (n = r);
        })),
          (this.resolve = r(e)),
          (this.reject = r(n));
      }
      t.exports.f = function(t) {
        return new o(t);
      };
    },
    function(t, e, n) {
      'use strict';
      n(17);
      var r = n(193),
        o = r.DEFAULT_OPTIONS,
        i = r.imageClass,
        a = r.imageBackgroundClass,
        u = r.imageWrapperClass;
      e.onRouteUpdate = function(t, e) {
        for (
          var n = Object.assign({}, o, e),
            r = document.querySelectorAll('.' + u),
            s = function(t) {
              var e = r[t],
                o = e.querySelector('.' + a),
                u = e.querySelector('.' + i),
                s = function() {
                  (o.style.transition = 'opacity 0.5s 0.5s'),
                    (u.style.transition = 'opacity 0.5s'),
                    c();
                },
                c = function t() {
                  (o.style.opacity = 0),
                    (u.style.opacity = 1),
                    (u.style.color = 'inherit'),
                    (u.style.boxShadow =
                      'inset 0px 0px 0px 400px ' + n.backgroundColor),
                    u.removeEventListener('load', s),
                    u.removeEventListener('error', t);
                };
              (u.style.opacity = 0),
                u.addEventListener('load', s),
                u.addEventListener('error', c),
                u.complete && c();
            },
            c = 0;
          c < r.length;
          c++
        )
          s(c);
      };
    },
    function(t, e, n) {
      var r = n(8)('unscopables'),
        o = Array.prototype;
      null == o[r] && n(37)(o, r, {}),
        (t.exports = function(t) {
          o[r][t] = !0;
        });
    },
    function(t, e) {
      t.exports = function(t, e) {
        return { value: e, done: !!t };
      };
    },
    function(t, e, n) {
      var r = n(11),
        o = n(46),
        i = n(65),
        a = n(148),
        u = n(21).f;
      t.exports = function(t) {
        var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        '_' == t.charAt(0) || t in e || u(e, t, { value: a.f(t) });
      };
    },
    function(t, e, n) {
      e.f = n(8);
    },
    function(t, e, n) {
      var r = n(13),
        o = n(12),
        i = function(t, e) {
          if ((o(t), !r(e) && null !== e))
            throw TypeError(e + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function(t, e, r) {
                try {
                  (r = n(38)(
                    Function.call,
                    n(110).f(Object.prototype, '__proto__').set,
                    2
                  ))(t, []),
                    (e = !(t instanceof Array));
                } catch (o) {
                  e = !0;
                }
                return function(t, n) {
                  return i(t, n), e ? (t.__proto__ = n) : r(t, n), t;
                };
              })({}, !1)
            : void 0),
        check: i,
      };
    },
    function(t, e, n) {
      'use strict';
      n(18);
      t.exports = function() {};
    },
    function(t, e, n) {
      var r;
      t.exports = ((r = n(215)) && r.default) || r;
    },
    function(t, e, n) {
      'use strict';
      var r = n(38),
        o = n(3),
        i = n(33),
        a = n(136),
        u = n(137),
        s = n(32),
        c = n(216),
        l = n(138);
      o(
        o.S +
          o.F *
            !n(107)(function(t) {
              Array.from(t);
            }),
        'Array',
        {
          from: function(t) {
            var e,
              n,
              o,
              f,
              p = i(t),
              d = 'function' == typeof this ? this : Array,
              h = arguments.length,
              v = h > 1 ? arguments[1] : void 0,
              g = void 0 !== v,
              m = 0,
              y = l(p);
            if (
              (g && (v = r(v, h > 2 ? arguments[2] : void 0, 2)),
              null == y || (d == Array && u(y)))
            )
              for (n = new d((e = s(p.length))); e > m; m++)
                c(n, m, g ? v(p[m], m) : p[m]);
            else
              for (f = y.call(p), n = new d(); !(o = f.next()).done; m++)
                c(n, m, g ? a(f, v, [o.value, m], !0) : o.value);
            return (n.length = m), n;
          },
        }
      );
    },
    function(t, e, n) {
      'use strict';
      var r = n(21).f,
        o = n(71),
        i = n(89),
        a = n(38),
        u = n(87),
        s = n(88),
        c = n(108),
        l = n(146),
        f = n(106),
        p = n(14),
        d = n(72).fastKey,
        h = n(53),
        v = p ? '_s' : 'size',
        g = function(t, e) {
          var n,
            r = d(e);
          if ('F' !== r) return t._i[r];
          for (n = t._f; n; n = n.n) if (n.k == e) return n;
        };
      t.exports = {
        getConstructor: function(t, e, n, c) {
          var l = t(function(t, r) {
            u(t, l, e, '_i'),
              (t._t = e),
              (t._i = o(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[v] = 0),
              null != r && s(r, n, t[c], t);
          });
          return (
            i(l.prototype, {
              clear: function() {
                for (var t = h(this, e), n = t._i, r = t._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
                (t._f = t._l = void 0), (t[v] = 0);
              },
              delete: function(t) {
                var n = h(this, e),
                  r = g(n, t);
                if (r) {
                  var o = r.n,
                    i = r.p;
                  delete n._i[r.i],
                    (r.r = !0),
                    i && (i.n = o),
                    o && (o.p = i),
                    n._f == r && (n._f = o),
                    n._l == r && (n._l = i),
                    n[v]--;
                }
                return !!r;
              },
              forEach: function(t) {
                h(this, e);
                for (
                  var n,
                    r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (n = n ? n.n : this._f);

                )
                  for (r(n.v, n.k, this); n && n.r; ) n = n.p;
              },
              has: function(t) {
                return !!g(h(this, e), t);
              },
            }),
            p &&
              r(l.prototype, 'size', {
                get: function() {
                  return h(this, e)[v];
                },
              }),
            l
          );
        },
        def: function(t, e, n) {
          var r,
            o,
            i = g(t, e);
          return (
            i
              ? (i.v = n)
              : ((t._l = i = {
                  i: (o = d(e, !0)),
                  k: e,
                  v: n,
                  p: (r = t._l),
                  n: void 0,
                  r: !1,
                }),
                t._f || (t._f = i),
                r && (r.n = i),
                t[v]++,
                'F' !== o && (t._i[o] = i)),
            t
          );
        },
        getEntry: g,
        setStrong: function(t, e, n) {
          c(
            t,
            e,
            function(t, n) {
              (this._t = h(t, e)), (this._k = n), (this._l = void 0);
            },
            function() {
              for (var t = this._k, e = this._l; e && e.r; ) e = e.p;
              return this._t && (this._l = e = e ? e.n : this._t._f)
                ? l(0, 'keys' == t ? e.k : 'values' == t ? e.v : [e.k, e.v])
                : ((this._t = void 0), l(1));
            },
            n ? 'entries' : 'values',
            !n,
            !0
          ),
            f(e);
        },
      };
    },
    function(t, e, n) {
      var r = n(112),
        o = n(48);
      t.exports = function(t, e, n) {
        if (r(e)) throw TypeError('String#' + n + " doesn't accept regex!");
        return String(o(t));
      };
    },
    function(t, e, n) {
      var r = n(8)('match');
      t.exports = function(t) {
        var e = /./;
        try {
          '/./'[t](e);
        } catch (n) {
          try {
            return (e[r] = !1), !'/./'[t](e);
          } catch (o) {}
        }
        return !0;
      };
    },
    function(t, e, n) {
      var r = n(11),
        o = n(114),
        i = n(21).f,
        a = n(90).f,
        u = n(112),
        s = n(83),
        c = r.RegExp,
        l = c,
        f = c.prototype,
        p = /a/g,
        d = /a/g,
        h = new c(p) !== p;
      if (
        n(14) &&
        (!h ||
          n(15)(function() {
            return (
              (d[n(8)('match')] = !1),
              c(p) != p || c(d) == d || '/a/i' != c(p, 'i')
            );
          }))
      ) {
        c = function(t, e) {
          var n = this instanceof c,
            r = u(t),
            i = void 0 === e;
          return !n && r && t.constructor === c && i
            ? t
            : o(
                h
                  ? new l(r && !i ? t.source : t, e)
                  : l(
                      (r = t instanceof c) ? t.source : t,
                      r && i ? s.call(t) : e
                    ),
                n ? this : f,
                c
              );
        };
        for (
          var v = function(t) {
              (t in c) ||
                i(c, t, {
                  configurable: !0,
                  get: function() {
                    return l[t];
                  },
                  set: function(e) {
                    l[t] = e;
                  },
                });
            },
            g = a(l),
            m = 0;
          g.length > m;

        )
          v(g[m++]);
        (f.constructor = c), (c.prototype = f), n(23)(r, 'RegExp', c);
      }
      n(106)('RegExp');
    },
    function(t, e, n) {
      'use strict';
      var r = n(89),
        o = n(72).getWeak,
        i = n(12),
        a = n(13),
        u = n(87),
        s = n(88),
        c = n(57),
        l = n(31),
        f = n(53),
        p = c(5),
        d = c(6),
        h = 0,
        v = function(t) {
          return t._l || (t._l = new g());
        },
        g = function() {
          this.a = [];
        },
        m = function(t, e) {
          return p(t.a, function(t) {
            return t[0] === e;
          });
        };
      (g.prototype = {
        get: function(t) {
          var e = m(this, t);
          if (e) return e[1];
        },
        has: function(t) {
          return !!m(this, t);
        },
        set: function(t, e) {
          var n = m(this, t);
          n ? (n[1] = e) : this.a.push([t, e]);
        },
        delete: function(t) {
          var e = d(this.a, function(e) {
            return e[0] === t;
          });
          return ~e && this.a.splice(e, 1), !!~e;
        },
      }),
        (t.exports = {
          getConstructor: function(t, e, n, i) {
            var c = t(function(t, r) {
              u(t, c, e, '_i'),
                (t._t = e),
                (t._i = h++),
                (t._l = void 0),
                null != r && s(r, n, t[i], t);
            });
            return (
              r(c.prototype, {
                delete: function(t) {
                  if (!a(t)) return !1;
                  var n = o(t);
                  return !0 === n
                    ? v(f(this, e)).delete(t)
                    : n && l(n, this._i) && delete n[this._i];
                },
                has: function(t) {
                  if (!a(t)) return !1;
                  var n = o(t);
                  return !0 === n ? v(f(this, e)).has(t) : n && l(n, this._i);
                },
              }),
              c
            );
          },
          def: function(t, e, n) {
            var r = o(i(e), !0);
            return !0 === r ? v(t).set(e, n) : (r[t._i] = n), t;
          },
          ufstore: v,
        });
    },
    function(t, e, n) {
      var r = n(3),
        o = n(48),
        i = n(15),
        a = n(226),
        u = '[' + a + ']',
        s = RegExp('^' + u + u + '*'),
        c = RegExp(u + u + '*$'),
        l = function(t, e, n) {
          var o = {},
            u = i(function() {
              return !!a[t]() || '​' != '​'[t]();
            }),
            s = (o[t] = u ? e(f) : a[t]);
          n && (o[n] = s), r(r.P + r.F * u, 'String', o);
        },
        f = (l.trim = function(t, e) {
          return (
            (t = String(o(t))),
            1 & e && (t = t.replace(s, '')),
            2 & e && (t = t.replace(c, '')),
            t
          );
        });
      t.exports = l;
    },
    function(t, e, n) {
      'use strict';
      (e.__esModule = !0), (e.classNamesShape = e.timeoutsShape = void 0);
      var r;
      (r = n(76)) && r.__esModule;
      e.timeoutsShape = null;
      e.classNamesShape = null;
    },
    function(t, e, n) {
      'use strict';
      n(39),
        n(27),
        n(231),
        n(29),
        n(17),
        n(19),
        n(5),
        n(6),
        n(2),
        n(9),
        (e.__esModule = !0),
        (e.default = void 0);
      var r = u(n(76)),
        o = u(n(0)),
        i = n(93),
        a = n(233);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function s() {
        return (s =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      var l =
          Object.values ||
          function(t) {
            return Object.keys(t).map(function(e) {
              return t[e];
            });
          },
        f = (function(t) {
          var e, n;
          function r(e, n) {
            var r,
              o = (r = t.call(this, e, n) || this).handleExited.bind(c(c(r)));
            return (r.state = { handleExited: o, firstRender: !0 }), r;
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n);
          var i = r.prototype;
          return (
            (i.getChildContext = function() {
              return { transitionGroup: { isMounting: !this.appeared } };
            }),
            (i.componentDidMount = function() {
              (this.appeared = !0), (this.mounted = !0);
            }),
            (i.componentWillUnmount = function() {
              this.mounted = !1;
            }),
            (r.getDerivedStateFromProps = function(t, e) {
              var n = e.children,
                r = e.handleExited;
              return {
                children: e.firstRender
                  ? (0, a.getInitialChildMapping)(t, r)
                  : (0, a.getNextChildMapping)(t, n, r),
                firstRender: !1,
              };
            }),
            (i.handleExited = function(t, e) {
              var n = (0, a.getChildMapping)(this.props.children);
              t.key in n ||
                (t.props.onExited && t.props.onExited(e),
                this.mounted &&
                  this.setState(function(e) {
                    var n = s({}, e.children);
                    return delete n[t.key], { children: n };
                  }));
            }),
            (i.render = function() {
              var t = this.props,
                e = t.component,
                n = t.childFactory,
                r = (function(t, e) {
                  if (null == t) return {};
                  var n,
                    r,
                    o = {},
                    i = Object.keys(t);
                  for (r = 0; r < i.length; r++)
                    (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                  return o;
                })(t, ['component', 'childFactory']),
                i = l(this.state.children).map(n);
              return (
                delete r.appear,
                delete r.enter,
                delete r.exit,
                null === e ? i : o.default.createElement(e, r, i)
              );
            }),
            r
          );
        })(o.default.Component);
      (f.childContextTypes = { transitionGroup: r.default.object.isRequired }),
        (f.propTypes = {}),
        (f.defaultProps = {
          component: 'div',
          childFactory: function(t) {
            return t;
          },
        });
      var p = (0, i.polyfill)(f);
      (e.default = p), (t.exports = e.default);
    },
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      'use strict';
      var r = n(0),
        o = n.n(r);
      e.a = o.a.createContext;
    },
    function(t, e, n) {
      'use strict';
      var r = n(1),
        o = r(n(254)),
        i = r(n(261));
      (e.ScrollContainer = i.default), (e.ScrollContext = o.default);
    },
    function(t, e, n) {
      n(19),
        (t.exports = (function() {
          var t = !1;
          -1 !== navigator.appVersion.indexOf('MSIE 10') && (t = !0);
          var e,
            n = [],
            r = 'object' == typeof document && document,
            o = t ? r.documentElement.doScroll() : r.documentElement.doScroll,
            i = r && (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);
          return (
            !i &&
              r &&
              r.addEventListener(
                'DOMContentLoaded',
                (e = function() {
                  for (
                    r.removeEventListener('DOMContentLoaded', e), i = 1;
                    (e = n.shift());

                  )
                    e();
                })
              ),
            function(t) {
              i ? setTimeout(t, 0) : n.push(t);
            }
          );
        })());
    },
    function(t) {
      t.exports = JSON.parse('[]');
    },
    function(t) {
      t.exports = JSON.parse('[]');
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      'use strict';
      var r = n(1);
      (e.__esModule = !0), (e.default = void 0);
      var o = function() {};
      r(n(78)).default &&
        (o = document.addEventListener
          ? function(t, e, n, r) {
              return t.removeEventListener(e, n, r || !1);
            }
          : document.attachEvent
          ? function(t, e, n) {
              return t.detachEvent('on' + e, n);
            }
          : void 0);
      var i = o;
      (e.default = i), (t.exports = e.default);
    },
    function(t, e, n) {
      'use strict';
      var r = n(1);
      (e.__esModule = !0), (e.default = void 0);
      var o = function() {};
      r(n(78)).default &&
        (o = document.addEventListener
          ? function(t, e, n, r) {
              return t.addEventListener(e, n, r || !1);
            }
          : document.attachEvent
          ? function(t, e, n) {
              return t.attachEvent('on' + e, function(e) {
                ((e = e || window.event).target = e.target || e.srcElement),
                  (e.currentTarget = t),
                  n.call(t, e);
              });
            }
          : void 0);
      var i = o;
      (e.default = i), (t.exports = e.default);
    },
    function(t, e, n) {
      'use strict';
      var r = n(1);
      (e.__esModule = !0),
        (e.default = function(t, e) {
          t.classList
            ? t.classList.add(e)
            : (0, o.default)(t, e) ||
              ('string' == typeof t.className
                ? (t.className = t.className + ' ' + e)
                : t.setAttribute(
                    'class',
                    ((t.className && t.className.baseVal) || '') + ' ' + e
                  ));
        });
      var o = r(n(180));
      t.exports = e.default;
    },
    function(t, e, n) {
      'use strict';
      n(19),
        (e.__esModule = !0),
        (e.default = function(t, e) {
          return t.classList
            ? !!e && t.classList.contains(e)
            : -1 !==
                (' ' + (t.className.baseVal || t.className) + ' ').indexOf(
                  ' ' + e + ' '
                );
        }),
        (t.exports = e.default);
    },
    function(t, e, n) {
      'use strict';
      function r(t, e) {
        return t
          .replace(new RegExp('(^|\\s)' + e + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '');
      }
      n(156),
        n(18),
        (t.exports = function(t, e) {
          t.classList
            ? t.classList.remove(e)
            : 'string' == typeof t.className
            ? (t.className = r(t.className, e))
            : t.setAttribute(
                'class',
                r((t.className && t.className.baseVal) || '', e)
              );
        });
    },
    ,
    ,
    function(t, e) {
      t.exports =
        Object.is ||
        function(t, e) {
          return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
        };
    },
    function(t, e, n) {
      'use strict';
      var r = n(99);
      n(3)(
        { target: 'RegExp', proto: !0, forced: r !== /./.exec },
        { exec: r }
      );
    },
    function(t, e, n) {
      t.exports = n(81)('native-function-to-string', Function.toString);
    },
    function(t, e, n) {
      var r = n(85),
        o = Math.max,
        i = Math.min;
      t.exports = function(t, e) {
        return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
      };
    },
    function(t, e, n) {
      var r = n(11),
        o = n(140).set,
        i = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        u = r.Promise,
        s = 'process' == n(45)(a);
      t.exports = function() {
        var t,
          e,
          n,
          c = function() {
            var r, o;
            for (s && (r = a.domain) && r.exit(); t; ) {
              (o = t.fn), (t = t.next);
              try {
                o();
              } catch (i) {
                throw (t ? n() : (e = void 0), i);
              }
            }
            (e = void 0), r && r.enter();
          };
        if (s)
          n = function() {
            a.nextTick(c);
          };
        else if (!i || (r.navigator && r.navigator.standalone))
          if (u && u.resolve) {
            var l = u.resolve(void 0);
            n = function() {
              l.then(c);
            };
          } else
            n = function() {
              o.call(r, c);
            };
        else {
          var f = !0,
            p = document.createTextNode('');
          new i(c).observe(p, { characterData: !0 }),
            (n = function() {
              p.data = f = !f;
            });
        }
        return function(r) {
          var o = { fn: r, next: void 0 };
          e && (e.next = o), t || ((t = o), n()), (e = o);
        };
      };
    },
    function(t, e) {
      t.exports = function(t) {
        try {
          return { e: !1, v: t() };
        } catch (e) {
          return { e: !0, v: e };
        }
      };
    },
    function(t, e, n) {
      var r = n(11).navigator;
      t.exports = (r && r.userAgent) || '';
    },
    function(t, e, n) {
      var r = n(12),
        o = n(13),
        i = n(143);
      t.exports = function(t, e) {
        if ((r(t), o(e) && e.constructor === t)) return e;
        var n = i.f(t);
        return (0, n.resolve)(e), n.promise;
      };
    },
    function(t, e, n) {
      t.exports = [
        { plugin: n(144), options: { plugins: [], maxWidth: 1200 } },
        { plugin: n(144), options: { plugins: [], maxWidth: 590 } },
        { plugin: n(194), options: { plugins: [] } },
        { plugin: n(251), options: { plugins: [] } },
        { plugin: n(252), options: { plugins: [] } },
        { plugin: n(253), options: { plugins: [] } },
      ];
    },
    function(t, e, n) {
      'use strict';
      (e.DEFAULT_OPTIONS = {
        maxWidth: 650,
        wrapperStyle: '',
        backgroundColor: 'white',
        linkImagesToOriginal: !0,
        showCaptions: !1,
        markdownCaptions: !1,
        withWebp: !1,
        tracedSVG: !1,
        loading: 'lazy',
      }),
        (e.imageClass = 'gatsby-resp-image-image'),
        (e.imageWrapperClass = 'gatsby-resp-image-wrapper'),
        (e.imageBackgroundClass = 'gatsby-resp-image-background-image');
    },
    function(t, e, n) {
      'use strict';
      var r = n(42).navigate;
      (e.wrapPageElement = n(218)),
        (e.shouldUpdateScroll = function() {
          return !window.__tl_inTransition;
        }),
        (e.onPreRouteUpdate = function(t) {
          var e = t.location;
          window.__tl_inTransition &&
            e.pathname !== window.__tl_desiredPathname &&
            ((window.__tl_back_button_pressed = !0),
            r(window.__tl_desiredPathname));
        });
    },
    ,
    function(t, e, n) {
      'use strict';
      var r = n(47),
        o = n(13),
        i = n(141),
        a = [].slice,
        u = {},
        s = function(t, e, n) {
          if (!(e in u)) {
            for (var r = [], o = 0; o < e; o++) r[o] = 'a[' + o + ']';
            u[e] = Function('F,a', 'return new F(' + r.join(',') + ')');
          }
          return u[e](t, n);
        };
      t.exports =
        Function.bind ||
        function(t) {
          var e = r(this),
            n = a.call(arguments, 1),
            u = function() {
              var r = n.concat(a.call(arguments));
              return this instanceof u ? s(e, r.length, r) : i(e, r, t);
            };
          return o(e.prototype) && (u.prototype = e.prototype), u;
        };
    },
    function(t, e, n) {
      n(14) &&
        'g' != /./g.flags &&
        n(21).f(RegExp.prototype, 'flags', { configurable: !0, get: n(83) });
    },
    function(t, e, n) {
      'use strict';
      var r = n(71),
        o = n(67),
        i = n(70),
        a = {};
      n(37)(a, n(8)('iterator'), function() {
        return this;
      }),
        (t.exports = function(t, e, n) {
          (t.prototype = r(a, { next: o(1, n) })), i(t, e + ' Iterator');
        });
    },
    function(t, e, n) {
      var r = n(21),
        o = n(12),
        i = n(49);
      t.exports = n(14)
        ? Object.defineProperties
        : function(t, e) {
            o(t);
            for (var n, a = i(e), u = a.length, s = 0; u > s; )
              r.f(t, (n = a[s++]), e[n]);
            return t;
          };
    },
    function(t, e, n) {
      var r = n(31),
        o = n(33),
        i = n(103)('IE_PROTO'),
        a = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function(t) {
          return (
            (t = o(t)),
            r(t, i)
              ? t[i]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? a
              : null
          );
        };
    },
    function(t, e, n) {
      var r = n(3),
        o = n(46),
        i = n(15);
      t.exports = function(t, e) {
        var n = (o.Object || {})[t] || Object[t],
          a = {};
        (a[t] = e(n)),
          r(
            r.S +
              r.F *
                i(function() {
                  n(1);
                }),
            'Object',
            a
          );
      };
    },
    function(t, e, n) {
      var r = n(49),
        o = n(105),
        i = n(68);
      t.exports = function(t) {
        var e = r(t),
          n = o.f;
        if (n)
          for (var a, u = n(t), s = i.f, c = 0; u.length > c; )
            s.call(t, (a = u[c++])) && e.push(a);
        return e;
      };
    },
    function(t, e, n) {
      var r = n(50),
        o = n(90).f,
        i = {}.toString,
        a =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [];
      t.exports.f = function(t) {
        return a && '[object Window]' == i.call(t)
          ? (function(t) {
              try {
                return o(t);
              } catch (e) {
                return a.slice();
              }
            })(t)
          : o(r(t));
      };
    },
    function(t, e, n) {
      var r = n(205);
      t.exports = function(t, e) {
        return new (r(t))(e);
      };
    },
    function(t, e, n) {
      var r = n(13),
        o = n(109),
        i = n(8)('species');
      t.exports = function(t) {
        var e;
        return (
          o(t) &&
            ('function' != typeof (e = t.constructor) ||
              (e !== Array && !o(e.prototype)) ||
              (e = void 0),
            r(e) && null === (e = e[i]) && (e = void 0)),
          void 0 === e ? Array : e
        );
      };
    },
    function(t, e, n) {
      t.exports = n(207)();
    },
    function(t, e, n) {
      'use strict';
      n(20);
      var r = n(208);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (t.exports = function() {
          function t(t, e, n, o, i, a) {
            if (a !== r) {
              var u = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((u.name = 'Invariant Violation'), u);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    function(t, e, n) {
      'use strict';
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function(t, e, n) {
      t.exports = n(210)();
    },
    function(t, e, n) {
      'use strict';
      n(20);
      var r = n(211);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (t.exports = function() {
          function t(t, e, n, o, i, a) {
            if (a !== r) {
              var u = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((u.name = 'Invariant Violation'), u);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    function(t, e, n) {
      'use strict';
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function(t, e, n) {
      var r = n(47),
        o = n(33),
        i = n(86),
        a = n(32);
      t.exports = function(t, e, n, u, s) {
        r(e);
        var c = o(t),
          l = i(c),
          f = a(c.length),
          p = s ? f - 1 : 0,
          d = s ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (p in l) {
              (u = l[p]), (p += d);
              break;
            }
            if (((p += d), s ? p < 0 : f <= p))
              throw TypeError('Reduce of empty array with no initial value');
          }
        for (; s ? p >= 0 : f > p; p += d) p in l && (u = e(u, l[p], p, c));
        return u;
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(3),
        o = n(47),
        i = n(33),
        a = n(15),
        u = [].sort,
        s = [1, 2, 3];
      r(
        r.P +
          r.F *
            (a(function() {
              s.sort(void 0);
            }) ||
              !a(function() {
                s.sort(null);
              }) ||
              !n(52)(u)),
        'Array',
        {
          sort: function(t) {
            return void 0 === t ? u.call(i(this)) : u.call(i(this), o(t));
          },
        }
      );
    },
    function(t, e, n) {
      'use strict';
      n(19),
        (e.__esModule = !0),
        (e.parsePath = function(t) {
          var e = t || '/',
            n = '',
            r = '',
            o = e.indexOf('#');
          -1 !== o && ((r = e.substr(o)), (e = e.substr(0, o)));
          var i = e.indexOf('?');
          -1 !== i && ((n = e.substr(i)), (e = e.substr(0, i)));
          return {
            pathname: e,
            search: '?' === n ? '' : n,
            hash: '#' === r ? '' : r,
          };
        });
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      n(17);
      var r = n(0),
        o = n.n(r),
        i = n(94);
      e.default = function(t) {
        var e = t.location,
          n = t.pageResources;
        return n
          ? o.a.createElement(
              i.a,
              Object.assign({ location: e, pageResources: n }, n.json)
            )
          : null;
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(21),
        o = n(67);
      t.exports = function(t, e, n) {
        e in t ? r.f(t, e, o(0, n)) : (t[e] = n);
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(3),
        o = n(32),
        i = n(154),
        a = ''.endsWith;
      r(r.P + r.F * n(155)('endsWith'), 'String', {
        endsWith: function(t) {
          var e = i(this, t, 'endsWith'),
            n = arguments.length > 1 ? arguments[1] : void 0,
            r = o(e.length),
            u = void 0 === n ? r : Math.min(o(n), r),
            s = String(t);
          return a ? a.call(e, s, u) : e.slice(u - s.length, u) === s;
        },
      });
    },
    function(t, e, n) {
      'use strict';
      var r = n(1)(n(28)),
        o =
          '/Users/tylerbarnes/Documents/GitHub/transitionlink-workspace/gatsby-plugin-transition-link/src/wrap-page.js',
        i = n(0),
        a = n(219).default,
        u = n(247).default;
      t.exports = function(t) {
        var e = t.element,
          n = t.props;
        return i.createElement(
          u,
          { __source: { fileName: o, lineNumber: 8 }, __self: this },
          i.createElement(
            a,
            (0, r.default)({}, n, {
              __source: { fileName: o, lineNumber: 9 },
              __self: this,
            }),
            e
          )
        );
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(1),
        o = n(61);
      (e.__esModule = !0), (e.default = void 0);
      var i = r(n(28)),
        a = r(n(43)),
        u = o(n(0)),
        s = n(220),
        c = n(34),
        l = r(n(234)),
        f = n(239),
        p = r(n(240)),
        d = n(120),
        h = n(241),
        v = n(243),
        g = n(244),
        m = n(245);
      n(246);
      var y =
          '/Users/tylerbarnes/Documents/GitHub/transitionlink-workspace/gatsby-plugin-transition-link/src/components/TransitionHandler.js',
        _ = (0, p.default)(s.Transition),
        w = (function(t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            (0, a.default)(e, t),
            (e.prototype.render = function() {
              var t = this.props,
                e = t.children;
              return u.default.createElement(
                d.Consumer,
                { __source: { fileName: y, lineNumber: 22 }, __self: this },
                function(n) {
                  var r = n.exitDelay,
                    o = n.exitLength,
                    a = n.exitState,
                    p = n.entryDelay,
                    d = n.entryLength,
                    w = n.entryState,
                    b = n.entryTrigger,
                    x = n.entryProps,
                    E = n.exitTrigger,
                    S = n.exitProps,
                    P = n.transitionIdHistory,
                    O = n.inTransition,
                    T = n.updateContext,
                    C = n.triggerResolve,
                    R = n.appearAfter,
                    j = n.e;
                  return u.default.createElement(
                    c.Location,
                    { __source: { fileName: y, lineNumber: 42 }, __self: this },
                    function(n) {
                      var c = n.location,
                        k = c.action,
                        N = c.pathname;
                      return u.default.createElement(
                        f.LayoutComponent,
                        (0, i.default)({}, t, {
                          __source: { fileName: y, lineNumber: 44 },
                          __self: this,
                        }),
                        u.default.createElement(
                          'div',
                          {
                            className: 'tl-edges',
                            __source: { fileName: y, lineNumber: 45 },
                            __self: this,
                          },
                          u.default.createElement(
                            s.TransitionGroup,
                            {
                              component: null,
                              __source: { fileName: y, lineNumber: 46 },
                              __self: this,
                            },
                            u.default.createElement(
                              _,
                              {
                                key: N,
                                delay: (0, m.getMs)(p),
                                timeout: {
                                  enter: (0, m.getMs)(d),
                                  exit: (0, m.getMs)(o),
                                },
                                onEnter: function(t) {
                                  return (
                                    !!t &&
                                    !window.__tl_back_button_pressed &&
                                    (0, v.onEnter)({
                                      node: t,
                                      action: k,
                                      inTransition: O,
                                      entryTrigger: b,
                                      entryProps: x,
                                      exitProps: S,
                                      pathname: N,
                                      updateContext: T,
                                      triggerResolve: C,
                                      appearAfter: (0, m.getMs)(R),
                                      e: j,
                                    })
                                  );
                                },
                                onExit: function(t) {
                                  return (
                                    !!t &&
                                    !window.__tl_back_button_pressed &&
                                    (0, g.onExit)({
                                      node: t,
                                      inTransition: O,
                                      exitTrigger: E,
                                      entryProps: x,
                                      exitProps: S,
                                      triggerResolve: C,
                                      e: j,
                                    })
                                  );
                                },
                                __source: { fileName: y, lineNumber: 47 },
                                __self: this,
                              },
                              function(n) {
                                var s = 'entering' === n || 'entered' === n,
                                  c = {
                                    entry: { state: w, delay: p, length: d },
                                    exit: { state: a, delay: r, length: o },
                                  },
                                  f = s ? c.entry : c.exit,
                                  v = (0, h.returnTransitionState)(
                                    (0, i.default)(
                                      {
                                        inTransition: O,
                                        location: t.location,
                                        transitionIdHistory: P,
                                        transitionStatus: n,
                                        current: f,
                                        mount: s,
                                      },
                                      c
                                    )
                                  ),
                                  g = S.zIndex || 0,
                                  _ = x.zIndex || 1;
                                return u.default.createElement(l.default, {
                                  mount: s,
                                  entryZindex: _,
                                  exitZindex: g,
                                  transitionStatus: n,
                                  transitionState: v,
                                  children: e,
                                  appearAfter: (0, m.getMs)(R),
                                  __source: { fileName: y, lineNumber: 119 },
                                  __self: this,
                                });
                              }
                            )
                          )
                        )
                      );
                    }
                  );
                }
              );
            }),
            e
          );
        })(u.Component);
      e.default = w;
    },
    function(t, e, n) {
      'use strict';
      var r = u(n(221)),
        o = u(n(230)),
        i = u(n(160)),
        a = u(n(126));
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      t.exports = {
        Transition: a.default,
        TransitionGroup: i.default,
        ReplaceTransition: o.default,
        CSSTransition: r.default,
      };
    },
    function(t, e, n) {
      'use strict';
      n(41),
        n(22),
        n(29),
        n(17),
        n(35),
        (e.__esModule = !0),
        (e.default = void 0);
      !(function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
              var r =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(t, n)
                  : {};
              r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
            }
        e.default = t;
      })(n(76));
      var r = u(n(179)),
        o = u(n(181)),
        i = u(n(0)),
        a = u(n(126));
      n(159);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function s() {
        return (s =
          Object.assign ||
          function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      var c = function(t, e) {
          return (
            t &&
            e &&
            e.split(' ').forEach(function(e) {
              return (0, r.default)(t, e);
            })
          );
        },
        l = function(t, e) {
          return (
            t &&
            e &&
            e.split(' ').forEach(function(e) {
              return (0, o.default)(t, e);
            })
          );
        },
        f = (function(t) {
          var e, n;
          function r() {
            for (
              var e, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((e =
                t.call.apply(t, [this].concat(r)) || this).onEnter = function(
                t,
                n
              ) {
                var r = e.getClassNames(n ? 'appear' : 'enter').className;
                e.removeClasses(t, 'exit'),
                  c(t, r),
                  e.props.onEnter && e.props.onEnter(t, n);
              }),
              (e.onEntering = function(t, n) {
                var r = e.getClassNames(n ? 'appear' : 'enter').activeClassName;
                e.reflowAndAddClass(t, r),
                  e.props.onEntering && e.props.onEntering(t, n);
              }),
              (e.onEntered = function(t, n) {
                var r = e.getClassNames('appear').doneClassName,
                  o = e.getClassNames('enter').doneClassName,
                  i = n ? r + ' ' + o : o;
                e.removeClasses(t, n ? 'appear' : 'enter'),
                  c(t, i),
                  e.props.onEntered && e.props.onEntered(t, n);
              }),
              (e.onExit = function(t) {
                var n = e.getClassNames('exit').className;
                e.removeClasses(t, 'appear'),
                  e.removeClasses(t, 'enter'),
                  c(t, n),
                  e.props.onExit && e.props.onExit(t);
              }),
              (e.onExiting = function(t) {
                var n = e.getClassNames('exit').activeClassName;
                e.reflowAndAddClass(t, n),
                  e.props.onExiting && e.props.onExiting(t);
              }),
              (e.onExited = function(t) {
                var n = e.getClassNames('exit').doneClassName;
                e.removeClasses(t, 'exit'),
                  c(t, n),
                  e.props.onExited && e.props.onExited(t);
              }),
              (e.getClassNames = function(t) {
                var n = e.props.classNames,
                  r = 'string' == typeof n,
                  o = r ? (r && n ? n + '-' : '') + t : n[t];
                return {
                  className: o,
                  activeClassName: r ? o + '-active' : n[t + 'Active'],
                  doneClassName: r ? o + '-done' : n[t + 'Done'],
                };
              }),
              e
            );
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n);
          var o = r.prototype;
          return (
            (o.removeClasses = function(t, e) {
              var n = this.getClassNames(e),
                r = n.className,
                o = n.activeClassName,
                i = n.doneClassName;
              r && l(t, r), o && l(t, o), i && l(t, i);
            }),
            (o.reflowAndAddClass = function(t, e) {
              e && (t && t.scrollTop, c(t, e));
            }),
            (o.render = function() {
              var t = s({}, this.props);
              return (
                delete t.classNames,
                i.default.createElement(
                  a.default,
                  s({}, t, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited,
                  })
                )
              );
            }),
            r
          );
        })(i.default.Component);
      (f.defaultProps = { classNames: '' }), (f.propTypes = {});
      var p = f;
      (e.default = p), (t.exports = e.default);
    },
    function(t, e, n) {
      'use strict';
      n(20);
      var r = n(223);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (t.exports = function() {
          function t(t, e, n, o, i, a) {
            if (a !== r) {
              var u = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((u.name = 'Invariant Violation'), u);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    function(t, e, n) {
      'use strict';
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    ,
    function(t, e, n) {
      'use strict';
      var r = n(157),
        o = n(53);
      n(91)(
        'WeakSet',
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function(t) {
            return r.def(o(this, 'WeakSet'), t, !0);
          },
        },
        r,
        !1,
        !0
      );
    },
    function(t, e) {
      t.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
    },
    function(t, e, n) {
      'use strict';
      var r,
        o = n(11),
        i = n(57)(0),
        a = n(23),
        u = n(72),
        s = n(134),
        c = n(157),
        l = n(13),
        f = n(53),
        p = n(53),
        d = !o.ActiveXObject && 'ActiveXObject' in o,
        h = u.getWeak,
        v = Object.isExtensible,
        g = c.ufstore,
        m = function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        y = {
          get: function(t) {
            if (l(t)) {
              var e = h(t);
              return !0 === e
                ? g(f(this, 'WeakMap')).get(t)
                : e
                ? e[this._i]
                : void 0;
            }
          },
          set: function(t, e) {
            return c.def(f(this, 'WeakMap'), t, e);
          },
        },
        _ = (t.exports = n(91)('WeakMap', m, y, c, !0, !0));
      p &&
        d &&
        (s((r = c.getConstructor(m, 'WeakMap')).prototype, y),
        (u.NEED = !0),
        i(['delete', 'has', 'get', 'set'], function(t) {
          var e = _.prototype,
            n = e[t];
          a(e, t, function(e, o) {
            if (l(e) && !v(e)) {
              this._f || (this._f = new r());
              var i = this._f[t](e, o);
              return 'set' == t ? this : i;
            }
            return n.call(this, e, o);
          });
        }));
    },
    ,
    ,
    function(t, e, n) {
      'use strict';
      n(29),
        n(19),
        n(5),
        n(6),
        n(2),
        n(9),
        (e.__esModule = !0),
        (e.default = void 0);
      a(n(76));
      var r = a(n(0)),
        o = n(44),
        i = a(n(160));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var u = (function(t) {
        var e, n;
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            ((e =
              t.call.apply(t, [this].concat(r)) ||
              this).handleEnter = function() {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle('onEnter', 0, n);
            }),
            (e.handleEntering = function() {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle('onEntering', 0, n);
            }),
            (e.handleEntered = function() {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle('onEntered', 0, n);
            }),
            (e.handleExit = function() {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle('onExit', 1, n);
            }),
            (e.handleExiting = function() {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle('onExiting', 1, n);
            }),
            (e.handleExited = function() {
              for (
                var t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              return e.handleLifecycle('onExited', 1, n);
            }),
            e
          );
        }
        (n = t),
          ((e = a).prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
        var u = a.prototype;
        return (
          (u.handleLifecycle = function(t, e, n) {
            var i,
              a = this.props.children,
              u = r.default.Children.toArray(a)[e];
            u.props[t] && (i = u.props)[t].apply(i, n),
              this.props[t] && this.props[t]((0, o.findDOMNode)(this));
          }),
          (u.render = function() {
            var t = this.props,
              e = t.children,
              n = t.in,
              o = (function(t, e) {
                if (null == t) return {};
                var n,
                  r,
                  o = {},
                  i = Object.keys(t);
                for (r = 0; r < i.length; r++)
                  (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o;
              })(t, ['children', 'in']),
              a = r.default.Children.toArray(e),
              u = a[0],
              s = a[1];
            return (
              delete o.onEnter,
              delete o.onEntering,
              delete o.onEntered,
              delete o.onExit,
              delete o.onExiting,
              delete o.onExited,
              r.default.createElement(
                i.default,
                o,
                n
                  ? r.default.cloneElement(u, {
                      key: 'first',
                      onEnter: this.handleEnter,
                      onEntering: this.handleEntering,
                      onEntered: this.handleEntered,
                    })
                  : r.default.cloneElement(s, {
                      key: 'second',
                      onEnter: this.handleExit,
                      onEntering: this.handleExiting,
                      onEntered: this.handleExited,
                    })
              )
            );
          }),
          a
        );
      })(r.default.Component);
      u.propTypes = {};
      var s = u;
      (e.default = s), (t.exports = e.default);
    },
    function(t, e, n) {
      var r = n(3),
        o = n(232)(!1);
      r(r.S, 'Object', {
        values: function(t) {
          return o(t);
        },
      });
    },
    function(t, e, n) {
      var r = n(14),
        o = n(49),
        i = n(50),
        a = n(68).f;
      t.exports = function(t) {
        return function(e) {
          for (var n, u = i(e), s = o(u), c = s.length, l = 0, f = []; c > l; )
            (n = s[l++]), (r && !a.call(u, n)) || f.push(t ? [n, u[n]] : u[n]);
          return f;
        };
      };
    },
    function(t, e, n) {
      'use strict';
      n(5),
        n(6),
        n(2),
        n(9),
        n(39),
        n(27),
        n(22),
        n(29),
        (e.__esModule = !0),
        (e.getChildMapping = o),
        (e.mergeChildMappings = i),
        (e.getInitialChildMapping = function(t, e) {
          return o(t.children, function(n) {
            return (0,
            r.cloneElement)(n, { onExited: e.bind(null, n), in: !0, appear: a(n, 'appear', t), enter: a(n, 'enter', t), exit: a(n, 'exit', t) });
          });
        }),
        (e.getNextChildMapping = function(t, e, n) {
          var u = o(t.children),
            s = i(e, u);
          return (
            Object.keys(s).forEach(function(o) {
              var i = s[o];
              if ((0, r.isValidElement)(i)) {
                var c = o in e,
                  l = o in u,
                  f = e[o],
                  p = (0, r.isValidElement)(f) && !f.props.in;
                !l || (c && !p)
                  ? l || !c || p
                    ? l &&
                      c &&
                      (0, r.isValidElement)(f) &&
                      (s[o] = (0, r.cloneElement)(i, {
                        onExited: n.bind(null, i),
                        in: f.props.in,
                        exit: a(i, 'exit', t),
                        enter: a(i, 'enter', t),
                      }))
                    : (s[o] = (0, r.cloneElement)(i, { in: !1 }))
                  : (s[o] = (0, r.cloneElement)(i, {
                      onExited: n.bind(null, i),
                      in: !0,
                      exit: a(i, 'exit', t),
                      enter: a(i, 'enter', t),
                    }));
              }
            }),
            s
          );
        });
      var r = n(0);
      function o(t, e) {
        var n = Object.create(null);
        return (
          t &&
            r.Children.map(t, function(t) {
              return t;
            }).forEach(function(t) {
              n[t.key] = (function(t) {
                return e && (0, r.isValidElement)(t) ? e(t) : t;
              })(t);
            }),
          n
        );
      }
      function i(t, e) {
        function n(n) {
          return n in e ? e[n] : t[n];
        }
        (t = t || {}), (e = e || {});
        var r,
          o = Object.create(null),
          i = [];
        for (var a in t)
          a in e ? i.length && ((o[a] = i), (i = [])) : i.push(a);
        var u = {};
        for (var s in e) {
          if (o[s])
            for (r = 0; r < o[s].length; r++) {
              var c = o[s][r];
              u[o[s][r]] = n(c);
            }
          u[s] = n(s);
        }
        for (r = 0; r < i.length; r++) u[i[r]] = n(i[r]);
        return u;
      }
      function a(t, e, n) {
        return null != n[e] ? n[e] : t.props[e];
      }
    },
    function(t, e, n) {
      'use strict';
      var r = n(1),
        o = n(61);
      (e.__esModule = !0), (e.default = void 0);
      var i = r(n(28)),
        a = r(n(43)),
        u = r(n(73)),
        s = r(n(74)),
        c = o(n(0)),
        l = n(119),
        f = n(120),
        p =
          '/Users/tylerbarnes/Documents/GitHub/transitionlink-workspace/gatsby-plugin-transition-link/src/components/TransitionRenderer.js',
        d = (function(t) {
          function e() {
            for (
              var e, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              (e = t.call.apply(t, [this].concat(r)) || this),
              (0, s.default)((0, u.default)((0, u.default)(e)), 'state', {
                shouldBeVisible: !e.props.appearAfter,
              }),
              (0, s.default)(
                (0, u.default)((0, u.default)(e)),
                'componentDidMount',
                function() {
                  var t =
                    ('number' == typeof e.props.delay ? e.props.delay : 0) +
                    ('number' == typeof e.props.appearAfter
                      ? e.props.appearAfter
                      : 0);
                  e.appearTimeout = (0, l.setTimeout)(function() {
                    return e.setState({ shouldBeVisible: !0 });
                  }, t);
                }
              ),
              (0, s.default)(
                (0, u.default)((0, u.default)(e)),
                'componentWillUnmount',
                function() {
                  (0, l.clearTimeout)(e.appearTimeout);
                }
              ),
              e
            );
          }
          (0, a.default)(e, t);
          var n = e.prototype;
          return (
            (n.shouldComponentUpdate = function(t, e) {
              return (
                this.props.transitionStatus !== t.transitionStatus ||
                this.state.shouldBeVisible !== e.shouldBeVisible
              );
            }),
            (n.render = function() {
              var t = this.props,
                e = t.mount,
                n = t.entryZindex,
                r = t.exitZindex,
                o = t.transitionStatus,
                a = t.transitionState,
                u = t.children;
              return c.default.createElement(
                'div',
                {
                  className:
                    'tl-wrapper ' +
                    (e ? 'tl-wrapper--mount' : 'tl-wrapper--unmount') +
                    ' tl-wrapper-status--' +
                    o,
                  style: {
                    zIndex: e ? n : r,
                    opacity: this.state.shouldBeVisible ? 1 : 0,
                  },
                  __source: { fileName: p, lineNumber: 45 },
                  __self: this,
                },
                c.default.createElement(
                  f.PublicProvider,
                  {
                    value: (0, i.default)({}, a),
                    __source: { fileName: p, lineNumber: 54 },
                    __self: this,
                  },
                  (0, c.cloneElement)(u, (0, i.default)({}, a))
                )
              );
            }),
            e
          );
        })(c.Component);
      e.default = d;
    },
    function(t, e, n) {
      'use strict';
      n(17),
        n(22),
        n(113),
        n(5),
        n(6),
        n(2),
        n(116),
        n(115),
        n(152),
        n(36),
        n(35),
        Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        o = n(236),
        i = (r = o) && r.__esModule ? r : { default: r };
      var a = new Map(),
        u = new Set(),
        s = !1,
        c = 0;
      function l() {
        return new Date().getTime();
      }
      function f(t) {
        var e = t.fn,
          n = t.args;
        e.apply(
          void 0,
          (function(t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = Array(t.length); e < t.length; e++)
                n[e] = t[e];
              return n;
            }
            return Array.from(t);
          })(n)
        );
      }
      var p = function(t) {
        return function(e, n) {
          var r = e.nextTick,
            o = e.ms,
            i = e.mode;
          t - r >= 0 &&
            (u.add(e),
            0 === i
              ? a.delete(n)
              : a.set(n, Object.assign({}, e, { nextTick: r + o })));
        };
      };
      function d() {
        var t = l();
        a.forEach(p(t)),
          0 !== u.size && (u.forEach(f), u.clear()),
          0 !== a.size ? (0, i.default)(d) : (s = !1);
      }
      function h(t) {
        var e = t.fn,
          n = t.ms,
          r = void 0 === n ? 0 : n,
          o = t.args,
          u = t.mode;
        if (!e) return null;
        var f = c;
        return (
          a.set(f, { fn: e, ms: r, nextTick: l() + r, args: o, mode: u }),
          s || ((s = !0), (0, i.default)(d)),
          (c += 1),
          f
        );
      }
      function v(t) {
        a.has(t) && a.delete(t), 0 === a.size && (s = !1);
      }
      e.default = {
        setTimeout: function(t) {
          for (
            var e = arguments.length, n = Array(e > 2 ? e - 2 : 0), r = 2;
            r < e;
            r++
          )
            n[r - 2] = arguments[r];
          var o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return h({ fn: t, ms: o, args: n, mode: 0 });
        },
        clearTimeout: v,
        setInterval: function(t) {
          for (
            var e = arguments.length, n = Array(e > 2 ? e - 2 : 0), r = 2;
            r < e;
            r++
          )
            n[r - 2] = arguments[r];
          var o =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return h({ fn: t, ms: o, args: n, mode: 1 });
        },
        clearInterval: v,
      };
    },
    function(t, e, n) {
      (function(e) {
        for (
          var r = n(237),
            o = 'undefined' == typeof window ? e : window,
            i = ['moz', 'webkit'],
            a = 'AnimationFrame',
            u = o['request' + a],
            s = o['cancel' + a] || o['cancelRequest' + a],
            c = 0;
          !u && c < i.length;
          c++
        )
          (u = o[i[c] + 'Request' + a]),
            (s = o[i[c] + 'Cancel' + a] || o[i[c] + 'CancelRequest' + a]);
        if (!u || !s) {
          var l = 0,
            f = 0,
            p = [];
          (u = function(t) {
            if (0 === p.length) {
              var e = r(),
                n = Math.max(0, 1e3 / 60 - (e - l));
              (l = n + e),
                setTimeout(function() {
                  var t = p.slice(0);
                  p.length = 0;
                  for (var e = 0; e < t.length; e++)
                    if (!t[e].cancelled)
                      try {
                        t[e].callback(l);
                      } catch (n) {
                        setTimeout(function() {
                          throw n;
                        }, 0);
                      }
                }, Math.round(n));
            }
            return p.push({ handle: ++f, callback: t, cancelled: !1 }), f;
          }),
            (s = function(t) {
              for (var e = 0; e < p.length; e++)
                p[e].handle === t && (p[e].cancelled = !0);
            });
        }
        (t.exports = function(t) {
          return u.call(o, t);
        }),
          (t.exports.cancel = function() {
            s.apply(o, arguments);
          }),
          (t.exports.polyfill = function(t) {
            t || (t = o),
              (t.requestAnimationFrame = u),
              (t.cancelAnimationFrame = s);
          });
      }.call(this, n(124)));
    },
    function(t, e, n) {
      (function(e) {
        n(75),
          function() {
            var n, r, o, i, a, u;
            'undefined' != typeof performance &&
            null !== performance &&
            performance.now
              ? (t.exports = function() {
                  return performance.now();
                })
              : null != e && e.hrtime
              ? ((t.exports = function() {
                  return (n() - a) / 1e6;
                }),
                (r = e.hrtime),
                (i = (n = function() {
                  var t;
                  return 1e9 * (t = r())[0] + t[1];
                })()),
                (u = 1e9 * e.uptime()),
                (a = i - u))
              : Date.now
              ? ((t.exports = function() {
                  return Date.now() - o;
                }),
                (o = Date.now()))
              : ((t.exports = function() {
                  return new Date().getTime() - o;
                }),
                (o = new Date().getTime()));
          }.call(this);
      }.call(this, n(238)));
    },
    function(t, e) {
      var n,
        r,
        o = (t.exports = {});
      function i() {
        throw new Error('setTimeout has not been defined');
      }
      function a() {
        throw new Error('clearTimeout has not been defined');
      }
      function u(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function() {
        try {
          n = 'function' == typeof setTimeout ? setTimeout : i;
        } catch (t) {
          n = i;
        }
        try {
          r = 'function' == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          r = a;
        }
      })();
      var s,
        c = [],
        l = !1,
        f = -1;
      function p() {
        l &&
          s &&
          ((l = !1), s.length ? (c = s.concat(c)) : (f = -1), c.length && d());
      }
      function d() {
        if (!l) {
          var t = u(p);
          l = !0;
          for (var e = c.length; e; ) {
            for (s = c, c = []; ++f < e; ) s && s[f].run();
            (f = -1), (e = c.length);
          }
          (s = null),
            (l = !1),
            (function(t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function h(t, e) {
        (this.fun = t), (this.array = e);
      }
      function v() {}
      (o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new h(t, e)), 1 !== c.length || l || u(d);
      }),
        (h.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (o.title = 'browser'),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ''),
        (o.versions = {}),
        (o.on = v),
        (o.addListener = v),
        (o.once = v),
        (o.off = v),
        (o.removeListener = v),
        (o.removeAllListeners = v),
        (o.emit = v),
        (o.prependListener = v),
        (o.prependOnceListener = v),
        (o.listeners = function(t) {
          return [];
        }),
        (o.binding = function(t) {
          throw new Error('process.binding is not supported');
        }),
        (o.cwd = function() {
          return '/';
        }),
        (o.chdir = function(t) {
          throw new Error('process.chdir is not supported');
        }),
        (o.umask = function() {
          return 0;
        });
    },
    function(t, e, n) {
      'use strict';
      n(63), n(2);
      var r = n(1);
      (e.__esModule = !0), (e.LayoutComponent = void 0);
      r(n(28));
      var o = r(n(55));
      n(0);
      e.LayoutComponent = function(t) {
        var e = t.children;
        (0, o.default)(t, ['children']);
        return e;
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(1),
        o = n(61);
      (e.__esModule = !0),
        (e.default = function(t) {
          return (function(e) {
            function n(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).state = {
                  shouldRender: !n.props.delay,
                }),
                n
              );
            }
            (0, a.default)(n, e);
            var r = n.prototype;
            return (
              (r.componentDidMount = function() {
                var t = this;
                this.renderTimeout = (0, s.setTimeout)(function() {
                  return t.setState({ shouldRender: !0 });
                }, this.props.delay);
              }),
              (r.componentWillUnmount = function() {
                (0, s.clearTimeout)(this.renderTimeout);
              }),
              (r.render = function() {
                return this.state.shouldRender || 'undefined' == typeof window
                  ? u.default.createElement(
                      t,
                      (0, i.default)({}, this.props, {
                        __source: { fileName: c, lineNumber: 30 },
                        __self: this,
                      })
                    )
                  : null;
              }),
              n
            );
          })(u.Component);
        });
      var i = r(n(28)),
        a = r(n(43)),
        u = o(n(0)),
        s = n(119),
        c =
          '/Users/tylerbarnes/Documents/GitHub/transitionlink-workspace/gatsby-plugin-transition-link/src/components/delayTransitionRender.js';
    },
    function(t, e, n) {
      'use strict';
      n(117), n(118);
      var r = n(1);
      (e.__esModule = !0), (e.returnTransitionState = void 0);
      var o = r(n(55));
      n(242);
      e.returnTransitionState = function(t) {
        var e = t.location,
          n = t.transitionIdHistory,
          r = t.inTransition,
          i = (0, o.default)(t, [
            'location',
            'transitionIdHistory',
            'inTransition',
          ]);
        if (r) return i;
        var a = !(!e.state || !e.state.transitionId) && e.state.transitionId,
          u = n.slice(0, -1);
        return a && u.includes(a)
          ? {
              transitionStatus: 'POP',
              entry: { state: {}, delay: 0, length: 0 },
              exit: { state: {}, delay: 0, length: 0 },
            }
          : i;
      };
    },
    function(t, e, n) {
      n(35),
        n(117),
        n(118),
        Array.prototype.includes ||
          Object.defineProperty(Array.prototype, 'includes', {
            value: function(t, e) {
              if (null == this)
                throw new TypeError('"this" is null or not defined');
              var n = Object(this),
                r = n.length >>> 0;
              if (0 === r) return !1;
              for (
                var o = 0 | e, i = Math.max(o >= 0 ? o : r - Math.abs(o), 0);
                i < r;

              ) {
                if (
                  (function(t, e) {
                    return (
                      t === e ||
                      ('number' == typeof t &&
                        'number' == typeof e &&
                        isNaN(t) &&
                        isNaN(e))
                    );
                  })(n[i], t)
                )
                  return !0;
                i++;
              }
              return !1;
            },
          });
    },
    function(t, e, n) {
      'use strict';
      n(51), n(2);
      var r = n(1);
      (e.__esModule = !0), (e.onEnter = void 0);
      var o = r(n(28)),
        i = r(n(55)),
        a = n(119);
      e.onEnter = function(t) {
        var e = t.node,
          n = t.inTransition,
          r = t.entryTrigger,
          u = t.entryProps,
          s = t.exitProps,
          c = t.triggerResolve,
          l = t.pathname,
          f = t.entryProps.delay,
          p = void 0 === f ? 0 : f,
          d = t.appearAfter,
          h = void 0 === d ? 0 : d,
          v = t.e;
        if (n)
          (0, a.setTimeout)(function() {
            window.scrollTo(0, 0);
          }, h);
        else {
          var g,
            m = '@@scroll|' + l,
            y = sessionStorage.getItem(m);
          (g = window).scrollTo.apply(g, JSON.parse(y));
        }
        if (n) {
          u.trigger;
          var _ = (0, i.default)(u, ['trigger']),
            w = h + p,
            b = new Promise(function(t) {
              (0, a.setTimeout)(function() {
                return t();
              }, w);
            });
          c.entry((0, o.default)({}, _, { visible: b, node: e })),
            r &&
              'function' == typeof r &&
              r({ entry: u, exit: s, node: e, e: v });
        }
      };
    },
    function(t, e, n) {
      'use strict';
      var r = n(1);
      (e.__esModule = !0), (e.onExit = void 0);
      var o = r(n(28)),
        i = r(n(55));
      e.onExit = function(t) {
        var e = t.node,
          n = t.inTransition,
          r = t.exitTrigger,
          a = t.entryProps,
          u = t.exitProps,
          s = t.triggerResolve,
          c = t.e;
        if (n) {
          u.trigger;
          var l = (0, i.default)(u, ['trigger']);
          return (
            s.exit((0, o.default)({}, l, { node: e })),
            r &&
              'function' == typeof r &&
              r({ entry: a, exit: u, node: e, e: c })
          );
        }
      };
    },
    function(t, e, n) {
      'use strict';
      (e.__esModule = !0), (e.getMs = void 0);
      e.getMs = function(t) {
        return 1e3 * t;
      };
    },
    ,
    function(t, e, n) {
      'use strict';
      var r = n(1),
        o = n(61);
      (e.__esModule = !0), (e.default = void 0);
      var i = r(n(43)),
        a = r(n(73)),
        u = r(n(74)),
        s = o(n(0)),
        c = r(n(121)),
        l = n(120),
        f = r(n(250)),
        p = (function(t) {
          function e() {
            for (
              var e, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              (e = t.call.apply(t, [this].concat(r)) || this),
              (0, u.default)((0, a.default)((0, a.default)(e)), 'state', {
                inTransition: !1,
                transitionIdHistory: [],
                e: !1,
                exitDelay: 0,
                exitLength: 0,
                exitState: {},
                exitProps: {},
                exitTrigger: !1,
                entryDelay: 0,
                entryLength: 0,
                entryState: {},
                entryProps: {},
                entryTrigger: !1,
                updateContext: function(t) {
                  return e.setState(t);
                },
              }),
              e
            );
          }
          (0, i.default)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function() {
              this.state.updateContext((0, f.default)());
            }),
            (n.render = function() {
              return s.default.createElement(
                l.Provider,
                {
                  value: this.state,
                  __source: {
                    fileName:
                      '/Users/tylerbarnes/Documents/GitHub/transitionlink-workspace/gatsby-plugin-transition-link/src/context/InternalProvider.js',
                    lineNumber: 33,
                  },
                  __self: this,
                },
                this.props.children
              );
            }),
            e
          );
        })(s.Component);
      p.propTypes = { children: c.default.node.isRequired };
      var d = p;
      e.default = d;
    },
    function(t, e, n) {
      'use strict';
      n(20);
      var r = n(249);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (t.exports = function() {
          function t(t, e, n, o, i, a) {
            if (a !== r) {
              var u = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((u.name = 'Invariant Violation'), u);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    function(t, e, n) {
      'use strict';
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function(t, e, n) {
      'use strict';
      n(51),
        n(2),
        (e.__esModule = !0),
        (e.default = function() {
          var t,
            e,
            n = new Promise(function(e) {
              t = e;
            }),
            r = new Promise(function(t) {
              e = t;
            });
          return {
            triggerResolve: { entry: e, exit: t },
            pages: { exit: n, entry: r },
          };
        });
    },
    function(t, e, n) {
      'use strict';
      n(130), (e.__esModule = !0), (e.onRouteUpdate = void 0);
      e.onRouteUpdate = function(t, e) {
        var n = t.location;
        if ((void 0 === e && (e = {}), 'function' != typeof ga)) return null;
        if (
          n &&
          void 0 !== window.excludeGAPaths &&
          window.excludeGAPaths.some(function(t) {
            return t.test(n.pathname);
          })
        )
          return null;
        var r = Math.max(32, e.pageTransitionDelay || 0);
        return (
          setTimeout(function() {
            var t = n ? n.pathname + n.search + n.hash : void 0;
            window.ga('set', 'page', t), window.ga('send', 'pageview');
          }, r),
          null
        );
      };
    },
    function(t, e, n) {
      'use strict';
      e.registerServiceWorker = function() {
        return !0;
      };
      var r = [];
      (e.onServiceWorkerActive = function(t) {
        var e = t.getResourceURLsForPathname,
          n = t.serviceWorker;
        if (window.___swUpdated)
          n.active.postMessage({ gatsbyApi: 'clearPathResources' });
        else {
          var o = document.querySelectorAll(
              '\n    head > script[src],\n    head > link[href],\n    head > style[data-href]\n  '
            ),
            i = [].slice.call(o).map(function(t) {
              return t.src || t.href || t.getAttribute('data-href');
            }),
            a = [];
          r.forEach(function(t) {
            var r = e(t);
            a.push.apply(a, r),
              n.active.postMessage({
                gatsbyApi: 'setPathResources',
                path: t,
                resources: r,
              });
          }),
            [].concat(i, a).forEach(function(t) {
              var e = document.createElement('link');
              (e.rel = 'prefetch'),
                (e.href = t),
                (e.onload = e.remove),
                (e.onerror = e.remove),
                document.head.appendChild(e);
            });
        }
      }),
        (e.onPostPrefetchPathname = function(t) {
          var e = t.pathname,
            n = t.getResourceURLsForPathname;
          if (!window.___swUpdated && 'serviceWorker' in navigator) {
            var o = navigator.serviceWorker;
            null === o.controller
              ? r.push(e)
              : o.controller.postMessage({
                  gatsbyApi: 'setPathResources',
                  path: e,
                  resources: n(e),
                });
          }
        });
    },
    function(t, e) {},
    function(t, e, n) {
      'use strict';
      var r = n(1);
      (e.__esModule = !0), (e.default = void 0);
      var o = r(n(73)),
        i = r(n(43)),
        a = r(n(74)),
        u = r(n(0)),
        s = r(n(255)),
        c = r(n(121)),
        l = n(54),
        f = r(n(260)),
        p = {
          shouldUpdateScroll: c.default.func,
          children: c.default.element.isRequired,
          location: c.default.object.isRequired,
        },
        d = { scrollBehavior: c.default.object.isRequired },
        h = (function(t) {
          function e(e, n) {
            var r;
            return (
              (r = t.call(this, e, n) || this),
              (0, a.default)((0, o.default)(r), 'shouldUpdateScroll', function(
                t,
                e
              ) {
                var n = r.props.shouldUpdateScroll;
                return !n || n.call(r.scrollBehavior, t, e);
              }),
              (0, a.default)((0, o.default)(r), 'registerElement', function(
                t,
                e,
                n
              ) {
                r.scrollBehavior.registerElement(t, e, n, r.getRouterProps());
              }),
              (0, a.default)((0, o.default)(r), 'unregisterElement', function(
                t
              ) {
                r.scrollBehavior.unregisterElement(t);
              }),
              (r.scrollBehavior = new s.default({
                addTransitionHook: l.globalHistory.listen,
                stateStorage: new f.default(),
                getCurrentLocation: function() {
                  return r.props.location;
                },
                shouldUpdateScroll: r.shouldUpdateScroll,
              })),
              r
            );
          }
          (0, i.default)(e, t);
          var n = e.prototype;
          return (
            (n.getChildContext = function() {
              return { scrollBehavior: this };
            }),
            (n.componentDidUpdate = function(t) {
              var e = this.props.location;
              if (e !== t.location) {
                var n = { location: t.location };
                window.__navigatingToLink
                  ? (e.action = 'PUSH')
                  : (e.action = 'POP'),
                  this.scrollBehavior.updateScroll(n, {
                    history: l.globalHistory,
                    location: e,
                  });
              }
            }),
            (n.componentWillUnmount = function() {
              this.scrollBehavior.stop();
            }),
            (n.getRouterProps = function() {
              return {
                location: this.props.location,
                history: l.globalHistory,
              };
            }),
            (n.render = function() {
              return u.default.Children.only(this.props.children);
            }),
            e
          );
        })(u.default.Component);
      (h.propTypes = p), (h.childContextTypes = d);
      var v = h;
      e.default = v;
    },
    function(t, e, n) {
      'use strict';
      n(36), n(5), n(6), n(2), n(9), n(22), (e.__esModule = !0);
      var r = l(n(177)),
        o = l(n(178)),
        i = l(n(256)),
        a = l(n(257)),
        u = l(n(258)),
        s = l(n(30)),
        c = n(259);
      function l(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var f = 2,
        p = (function() {
          function t(e) {
            var n = this,
              r = e.addTransitionHook,
              s = e.stateStorage,
              l = e.getCurrentLocation,
              p = e.shouldUpdateScroll;
            if (
              ((function(t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
              (this._restoreScrollRestoration = function() {
                if (n._oldScrollRestoration)
                  try {
                    window.history.scrollRestoration = n._oldScrollRestoration;
                  } catch (t) {}
              }),
              (this._onWindowScroll = function() {
                if (
                  (n._saveWindowPositionHandle ||
                    (n._saveWindowPositionHandle = (0, u.default)(
                      n._saveWindowPosition
                    )),
                  n._windowScrollTarget)
                ) {
                  var t = n._windowScrollTarget,
                    e = t[0],
                    r = t[1],
                    o = (0, i.default)(window),
                    s = (0, a.default)(window);
                  o === e &&
                    s === r &&
                    ((n._windowScrollTarget = null),
                    n._cancelCheckWindowScroll());
                }
              }),
              (this._saveWindowPosition = function() {
                (n._saveWindowPositionHandle = null),
                  n._savePosition(null, window);
              }),
              (this._checkWindowScrollPosition = function() {
                (n._checkWindowScrollHandle = null),
                  n._windowScrollTarget &&
                    (n.scrollToTarget(window, n._windowScrollTarget),
                    ++n._numWindowScrollAttempts,
                    n._numWindowScrollAttempts >= f
                      ? (n._windowScrollTarget = null)
                      : (n._checkWindowScrollHandle = (0, u.default)(
                          n._checkWindowScrollPosition
                        )));
              }),
              (this._stateStorage = s),
              (this._getCurrentLocation = l),
              (this._shouldUpdateScroll = p),
              'scrollRestoration' in window.history && !(0, c.isMobileSafari)())
            ) {
              this._oldScrollRestoration = window.history.scrollRestoration;
              try {
                (window.history.scrollRestoration = 'manual'),
                  (0, o.default)(
                    window,
                    'beforeunload',
                    this._restoreScrollRestoration
                  );
              } catch (d) {
                this._oldScrollRestoration = null;
              }
            } else this._oldScrollRestoration = null;
            (this._saveWindowPositionHandle = null),
              (this._checkWindowScrollHandle = null),
              (this._windowScrollTarget = null),
              (this._numWindowScrollAttempts = 0),
              (this._scrollElements = {}),
              (0, o.default)(window, 'scroll', this._onWindowScroll),
              (this._removeTransitionHook = r(function() {
                u.default.cancel(n._saveWindowPositionHandle),
                  (n._saveWindowPositionHandle = null),
                  Object.keys(n._scrollElements).forEach(function(t) {
                    var e = n._scrollElements[t];
                    u.default.cancel(e.savePositionHandle),
                      (e.savePositionHandle = null),
                      n._saveElementPosition(t);
                  });
              }));
          }
          return (
            (t.prototype.registerElement = function(t, e, n, r) {
              var i = this;
              this._scrollElements[t] && (0, s.default)(!1);
              var a = function() {
                  i._saveElementPosition(t);
                },
                c = {
                  element: e,
                  shouldUpdateScroll: n,
                  savePositionHandle: null,
                  onScroll: function() {
                    c.savePositionHandle ||
                      (c.savePositionHandle = (0, u.default)(a));
                  },
                };
              (this._scrollElements[t] = c),
                (0, o.default)(e, 'scroll', c.onScroll),
                this._updateElementScroll(t, null, r);
            }),
            (t.prototype.unregisterElement = function(t) {
              this._scrollElements[t] || (0, s.default)(!1);
              var e = this._scrollElements[t],
                n = e.element,
                o = e.onScroll,
                i = e.savePositionHandle;
              (0, r.default)(n, 'scroll', o),
                u.default.cancel(i),
                delete this._scrollElements[t];
            }),
            (t.prototype.updateScroll = function(t, e) {
              var n = this;
              this._updateWindowScroll(t, e),
                Object.keys(this._scrollElements).forEach(function(r) {
                  n._updateElementScroll(r, t, e);
                });
            }),
            (t.prototype.stop = function() {
              this._restoreScrollRestoration(),
                (0, r.default)(window, 'scroll', this._onWindowScroll),
                this._cancelCheckWindowScroll(),
                this._removeTransitionHook();
            }),
            (t.prototype._cancelCheckWindowScroll = function() {
              u.default.cancel(this._checkWindowScrollHandle),
                (this._checkWindowScrollHandle = null);
            }),
            (t.prototype._saveElementPosition = function(t) {
              var e = this._scrollElements[t];
              (e.savePositionHandle = null), this._savePosition(t, e.element);
            }),
            (t.prototype._savePosition = function(t, e) {
              this._stateStorage.save(this._getCurrentLocation(), t, [
                (0, i.default)(e),
                (0, a.default)(e),
              ]);
            }),
            (t.prototype._updateWindowScroll = function(t, e) {
              this._cancelCheckWindowScroll(),
                (this._windowScrollTarget = this._getScrollTarget(
                  null,
                  this._shouldUpdateScroll,
                  t,
                  e
                )),
                (this._numWindowScrollAttempts = 0),
                this._checkWindowScrollPosition();
            }),
            (t.prototype._updateElementScroll = function(t, e, n) {
              var r = this._scrollElements[t],
                o = r.element,
                i = r.shouldUpdateScroll,
                a = this._getScrollTarget(t, i, e, n);
              a && this.scrollToTarget(o, a);
            }),
            (t.prototype._getDefaultScrollTarget = function(t) {
              var e = t.hash;
              return e && '#' !== e
                ? '#' === e.charAt(0)
                  ? e.slice(1)
                  : e
                : [0, 0];
            }),
            (t.prototype._getScrollTarget = function(t, e, n, r) {
              var o = !e || e.call(this, n, r);
              if (!o || Array.isArray(o) || 'string' == typeof o) return o;
              var i = this._getCurrentLocation();
              return (
                this._getSavedScrollTarget(t, i) ||
                this._getDefaultScrollTarget(i)
              );
            }),
            (t.prototype._getSavedScrollTarget = function(t, e) {
              return 'PUSH' === e.action ? null : this._stateStorage.read(e, t);
            }),
            (t.prototype.scrollToTarget = function(t, e) {
              if ('string' == typeof e) {
                var n =
                  document.getElementById(e) ||
                  document.getElementsByName(e)[0];
                if (n) return void n.scrollIntoView();
                e = [0, 0];
              }
              var r = e,
                o = r[0],
                u = r[1];
              (0, i.default)(t, o), (0, a.default)(t, u);
            }),
            t
          );
        })();
      (e.default = p), (t.exports = e.default);
    },
    function(t, e, n) {
      'use strict';
      var r = n(1);
      (e.__esModule = !0),
        (e.default = function(t, e) {
          var n = (0, o.default)(t);
          if (void 0 === e)
            return n
              ? 'pageXOffset' in n
                ? n.pageXOffset
                : n.document.documentElement.scrollLeft
              : t.scrollLeft;
          n
            ? n.scrollTo(
                e,
                'pageYOffset' in n
                  ? n.pageYOffset
                  : n.document.documentElement.scrollTop
              )
            : (t.scrollLeft = e);
        });
      var o = r(n(128));
      t.exports = e.default;
    },
    function(t, e, n) {
      'use strict';
      var r = n(1);
      (e.__esModule = !0),
        (e.default = function(t, e) {
          var n = (0, o.default)(t);
          if (void 0 === e)
            return n
              ? 'pageYOffset' in n
                ? n.pageYOffset
                : n.document.documentElement.scrollTop
              : t.scrollTop;
          n
            ? n.scrollTo(
                'pageXOffset' in n
                  ? n.pageXOffset
                  : n.document.documentElement.scrollLeft,
                e
              )
            : (t.scrollTop = e);
        });
      var o = r(n(128));
      t.exports = e.default;
    },
    function(t, e, n) {
      'use strict';
      n(97);
      var r = n(1);
      (e.__esModule = !0), (e.default = void 0);
      var o,
        i = r(n(78)),
        a = 'clearTimeout',
        u = function(t) {
          var e = new Date().getTime(),
            n = Math.max(0, 16 - (e - c)),
            r = setTimeout(t, n);
          return (c = e), r;
        },
        s = function(t, e) {
          return (
            t + (t ? e[0].toUpperCase() + e.substr(1) : e) + 'AnimationFrame'
          );
        };
      i.default &&
        ['', 'webkit', 'moz', 'o', 'ms'].some(function(t) {
          var e = s(t, 'request');
          if (e in window)
            return (
              (a = s(t, 'cancel')),
              (u = function(t) {
                return window[e](t);
              })
            );
        });
      var c = new Date().getTime();
      (o = function(t) {
        return u(t);
      }).cancel = function(t) {
        window[a] && 'function' == typeof window[a] && window[a](t);
      };
      var l = o;
      (e.default = l), (t.exports = e.default);
    },
    function(t, e, n) {
      'use strict';
      (e.__esModule = !0),
        (e.isMobileSafari = function() {
          return (
            /iPad|iPhone|iPod/.test(window.navigator.platform) &&
            /^((?!CriOS).)*Safari/.test(window.navigator.userAgent)
          );
        });
    },
    function(t, e, n) {
      'use strict';
      (e.__esModule = !0), (e.default = void 0);
      var r = (function() {
        function t() {}
        var e = t.prototype;
        return (
          (e.read = function(t, e) {
            var n = this.getStateKey(t, e);
            try {
              var r = window.sessionStorage.getItem(n);
              return JSON.parse(r);
            } catch (o) {
              return window &&
                window.___GATSBY_REACT_ROUTER_SCROLL &&
                window.___GATSBY_REACT_ROUTER_SCROLL[n]
                ? window.___GATSBY_REACT_ROUTER_SCROLL[n]
                : {};
            }
          }),
          (e.save = function(t, e, n) {
            var r = this.getStateKey(t, e),
              o = JSON.stringify(n);
            try {
              window.sessionStorage.setItem(r, o);
            } catch (i) {
              window && window.___GATSBY_REACT_ROUTER_SCROLL
                ? (window.___GATSBY_REACT_ROUTER_SCROLL[r] = JSON.parse(o))
                : ((window.___GATSBY_REACT_ROUTER_SCROLL = {}),
                  (window.___GATSBY_REACT_ROUTER_SCROLL[r] = JSON.parse(o)));
            }
          }),
          (e.getStateKey = function(t, e) {
            var n = '@@scroll|' + (t.key || t.pathname);
            return null == e ? n : n + '|' + e;
          }),
          t
        );
      })();
      e.default = r;
    },
    function(t, e, n) {
      'use strict';
      var r = n(1);
      (e.__esModule = !0), (e.default = void 0);
      var o = r(n(73)),
        i = r(n(43)),
        a = r(n(74)),
        u = r(n(0)),
        s = r(n(44)),
        c = r(n(150)),
        l = r(n(121)),
        f = {
          scrollKey: l.default.string.isRequired,
          shouldUpdateScroll: l.default.func,
          children: l.default.element.isRequired,
        },
        p = { scrollBehavior: l.default.object },
        d = (function(t) {
          function e(e, n) {
            var r;
            return (
              (r = t.call(this, e, n) || this),
              (0, a.default)((0, o.default)(r), 'shouldUpdateScroll', function(
                t,
                e
              ) {
                var n = r.props.shouldUpdateScroll;
                return (
                  !n || n.call(r.context.scrollBehavior.scrollBehavior, t, e)
                );
              }),
              (r.scrollKey = e.scrollKey),
              r
            );
          }
          (0, i.default)(e, t);
          var n = e.prototype;
          return (
            (n.componentDidMount = function() {
              this.context.scrollBehavior.registerElement(
                this.props.scrollKey,
                s.default.findDOMNode(this),
                this.shouldUpdateScroll
              );
            }),
            (n.componentDidUpdate = function(t) {
              (0, c.default)(
                t.scrollKey === this.props.scrollKey,
                '<ScrollContainer> does not support changing scrollKey.'
              );
            }),
            (n.componentWillUnmount = function() {
              this.context.scrollBehavior.unregisterElement(this.scrollKey);
            }),
            (n.render = function() {
              return this.props.children;
            }),
            e
          );
        })(u.default.Component);
      (d.propTypes = f), (d.contextTypes = p);
      var h = d;
      e.default = h;
    },
    function(t, e, n) {
      'use strict';
      n.r(e);
      var r = n(7);
      'https:' !== window.location.protocol &&
      'localhost' !== window.location.hostname
        ? console.error(
            'Service workers can only be used over HTTPS, or on localhost for development'
          )
        : 'serviceWorker' in navigator &&
          navigator.serviceWorker
            .register('/sw.js')
            .then(function(t) {
              t.addEventListener('updatefound', function() {
                Object(
                  r.apiRunner
                )('onServiceWorkerUpdateFound', { serviceWorker: t });
                var e = t.installing;
                console.log('installingWorker', e),
                  e.addEventListener('statechange', function() {
                    switch (e.state) {
                      case 'installed':
                        navigator.serviceWorker.controller
                          ? ((window.___swUpdated = !0),
                            Object(r.apiRunner)('onServiceWorkerUpdateReady', {
                              serviceWorker: t,
                            }),
                            window.___failedResources &&
                              (console.log(
                                'resources failed, SW updated - reloading'
                              ),
                              window.location.reload()))
                          : (console.log('Content is now available offline!'),
                            Object(r.apiRunner)('onServiceWorkerInstalled', {
                              serviceWorker: t,
                            }));
                        break;
                      case 'redundant':
                        console.error(
                          'The installing service worker became redundant.'
                        ),
                          Object(r.apiRunner)('onServiceWorkerRedundant', {
                            serviceWorker: t,
                          });
                        break;
                      case 'activated':
                        Object(
                          r.apiRunner
                        )('onServiceWorkerActive', { serviceWorker: t });
                    }
                  });
              });
            })
            .catch(function(t) {
              console.error('Error during service worker registration:', t);
            });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(t, e, n) {
      'use strict';
      n.r(e);
      n(130), n(132), n(17);
      var r = n(7),
        o = n(0),
        i = n.n(o),
        a = n(44),
        u = n.n(a),
        s = n(34),
        c = n(167),
        l = n(168),
        f = n.n(l),
        p = (n(18), n(16)),
        d = n(169),
        h = n(59),
        v = n(24);
      var g = d.reduce(function(t, e) {
        return (t[e.fromPath] = e), t;
      }, {});
      function m(t) {
        var e = g[t];
        return null != e && (window.___replace(e.toPath), !0);
      }
      var y = function(t, e) {
          m(t.pathname) ||
            Object(r.apiRunner)('onPreRouteUpdate', {
              location: t,
              prevLocation: e,
            });
        },
        _ = function(t, e) {
          m(t.pathname) ||
            (Object(r.apiRunner)('onRouteUpdate', {
              location: t,
              prevLocation: e,
            }),
            (window.__navigatingToLink = !1));
        },
        w = function(t, e) {
          void 0 === e && (e = {}),
            e.replace || (window.__navigatingToLink = !0);
          var n = Object(v.parsePath)(t).pathname,
            o = g[n];
          if (
            (o && ((t = o.toPath), (n = Object(v.parsePath)(t).pathname)),
            window.___swUpdated)
          )
            window.location = n;
          else {
            var i = setTimeout(function() {
              h.a.emit('onDelayedLoadPageResources', { pathname: n }),
                Object(r.apiRunner)('onRouteUpdateDelayed', {
                  location: window.location,
                });
            }, 1e3);
            p.default.loadPage(n).then(function(r) {
              (r && 'error' !== r.status) ||
                (window.history.replaceState({}, '', location.href),
                (window.location = n)),
                r &&
                  r.page.webpackCompilationHash !==
                    window.___webpackCompilationHash &&
                  ('serviceWorker' in navigator &&
                    null !== navigator.serviceWorker.controller &&
                    'activated' === navigator.serviceWorker.controller.state &&
                    navigator.serviceWorker.controller.postMessage({
                      gatsbyApi: 'resetWhitelist',
                    }),
                  console.log('Site has changed on server. Reloading browser'),
                  (window.location = n)),
                Object(s.navigate)(t, e),
                clearTimeout(i);
            });
          }
        };
      function b(t, e) {
        var n = this,
          o = e.location,
          i = o.pathname,
          a = o.hash,
          u = Object(r.apiRunner)('shouldUpdateScroll', {
            prevRouterProps: t,
            pathname: i,
            routerProps: { location: o },
            getSavedScrollPosition: function(t) {
              return n._stateStorage.read(t);
            },
          });
        if (u.length > 0) return u[u.length - 1];
        if (t && t.location.pathname === i) return a ? a.slice(1) : [0, 0];
        return !0;
      }
      var x = (function(t) {
          var e, n;
          function r(e) {
            var n;
            return (n = t.call(this, e) || this), y(e.location, null), n;
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n);
          var o = r.prototype;
          return (
            (o.componentDidMount = function() {
              _(this.props.location, null);
            }),
            (o.componentDidUpdate = function(t, e, n) {
              n && _(this.props.location, t.location);
            }),
            (o.getSnapshotBeforeUpdate = function(t) {
              return (
                this.props.location.pathname !== t.location.pathname &&
                (y(this.props.location, t.location), !0)
              );
            }),
            (o.render = function() {
              return this.props.children;
            }),
            r
          );
        })(i.a.Component),
        E = n(94),
        S = n(123),
        P = n.n(S);
      function O(t, e) {
        for (var n in t) if (!(n in e)) return !0;
        for (var r in e) if (t[r] !== e[r]) return !0;
        return !1;
      }
      var T = (function(t) {
          var e, n;
          function r(e) {
            var n;
            n = t.call(this) || this;
            var r = e.location,
              o = e.pageResources;
            return (
              (n.state = {
                location: Object.assign({}, r),
                pageResources: o || p.default.loadPageSync(r.pathname),
              }),
              n
            );
          }
          (n = t),
            ((e = r).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = n),
            (r.getDerivedStateFromProps = function(t, e) {
              var n = t.location;
              return e.location.href !== n.href
                ? {
                    pageResources: p.default.loadPageSync(n.pathname),
                    location: Object.assign({}, n),
                  }
                : null;
            });
          var o = r.prototype;
          return (
            (o.loadResources = function(t) {
              var e = this;
              p.default.loadPage(t).then(function(n) {
                n && 'error' !== n.status
                  ? e.setState({
                      location: Object.assign({}, window.location),
                      pageResources: n,
                    })
                  : (window.history.replaceState({}, '', location.href),
                    (window.location = t));
              });
            }),
            (o.shouldComponentUpdate = function(t, e) {
              return e.pageResources
                ? this.state.pageResources !== e.pageResources ||
                    (this.state.pageResources.component !==
                      e.pageResources.component ||
                      (this.state.pageResources.json !== e.pageResources.json ||
                        (!(
                          this.state.location.key === e.location.key ||
                          !e.pageResources.page ||
                          (!e.pageResources.page.matchPath &&
                            !e.pageResources.page.path)
                        ) ||
                          (function(t, e, n) {
                            return O(t.props, e) || O(t.state, n);
                          })(this, t, e))))
                : (this.loadResources(t.location.pathname), !1);
            }),
            (o.render = function() {
              return this.props.children(this.state);
            }),
            r
          );
        })(i.a.Component),
        C = n(77),
        R = n(170);
      var j = new p.ProdLoader(P.a, R);
      Object(p.setLoader)(j),
        j.setApiRunner(r.apiRunner),
        (window.asyncRequires = P.a),
        (window.___emitter = h.a),
        (window.___loader = p.publicLoader),
        (window.___webpackCompilationHash = window.webpackCompilationHash),
        (window.__navigatingToLink = !1),
        (window.___push = function(t) {
          return w(t, { replace: !1 });
        }),
        (window.___replace = function(t) {
          return w(t, { replace: !0 });
        }),
        (window.___navigate = function(t, e) {
          return w(t, e);
        }),
        m(window.location.pathname),
        Object(r.apiRunnerAsync)('onClientEntry').then(function() {
          Object(r.apiRunner)('registerServiceWorker').length > 0 && n(262);
          var t = function(t) {
              return i.a.createElement(
                s.BaseContext.Provider,
                { value: { baseuri: '/', basepath: '/' } },
                i.a.createElement(E.a, t)
              );
            },
            e = (function(e) {
              var n, r;
              function o() {
                return e.apply(this, arguments) || this;
              }
              return (
                (r = e),
                ((n = o).prototype = Object.create(r.prototype)),
                (n.prototype.constructor = n),
                (n.__proto__ = r),
                (o.prototype.render = function() {
                  var e = this,
                    n = this.props.location;
                  return i.a.createElement(T, { location: n }, function(n) {
                    var r = n.pageResources,
                      o = n.location;
                    return i.a.createElement(
                      x,
                      { location: o },
                      i.a.createElement(
                        c.ScrollContext,
                        { location: o, shouldUpdateScroll: b },
                        i.a.createElement(
                          s.Router,
                          {
                            basepath: '',
                            location: o,
                            id: 'gatsby-focus-wrapper',
                          },
                          i.a.createElement(
                            t,
                            Object.assign(
                              {
                                path: encodeURI(
                                  '/404.html' === r.page.path
                                    ? Object(C.a)(o.pathname, '')
                                    : r.page.matchPath || r.page.path
                                ),
                              },
                              e.props,
                              { location: o, pageResources: r },
                              r.json
                            )
                          )
                        )
                      )
                    );
                  });
                }),
                o
              );
            })(i.a.Component),
            o = window,
            a = o.pagePath,
            l = o.location;
          a &&
            '' + a !== l.pathname &&
            !(
              j.findMatchPath(Object(C.a)(l.pathname, '')) ||
              '/404.html' === a ||
              a.match(/^\/404\/?$/) ||
              a.match(/^\/offline-plugin-app-shell-fallback\/?$/)
            ) &&
            Object(s.navigate)('' + a + l.search + l.hash, { replace: !0 }),
            p.publicLoader.loadPage(l.pathname).then(function(t) {
              if (!t || 'error' === t.status)
                throw new Error(
                  'page resources for ' +
                    l.pathname +
                    ' not found. Not rendering React'
                );
              var n = function() {
                  return i.a.createElement(s.Location, null, function(t) {
                    return i.a.createElement(e, t);
                  });
                },
                o = Object(r.apiRunner)(
                  'wrapRootElement',
                  { element: i.a.createElement(n, null) },
                  i.a.createElement(n, null),
                  function(t) {
                    return { element: t.result };
                  }
                ).pop(),
                a = function() {
                  return o;
                },
                c = Object(r.apiRunner)(
                  'replaceHydrateFunction',
                  void 0,
                  u.a.hydrate
                )[0];
              f()(function() {
                c(
                  i.a.createElement(a, null),
                  'undefined' != typeof window
                    ? document.getElementById('___gatsby')
                    : void 0,
                  function() {
                    Object(r.apiRunner)('onInitialClientRender');
                  }
                );
              });
            });
        });
    },
  ],
  [[280, 10, 1, 0]],
]);
//# sourceMappingURL=app-c75215a506827140c8d6.js.map
