import { useMemo as I, useCallback as f, createContext as P, useContext as z } from "react";
import { jsxs as i, jsx as t, Fragment as h } from "react/jsx-runtime";
import { range as A, mergeDeepRight as Q } from "@shlinkio/data-manipulation";
import { SimpleCard as g, LabelledInput as y, Dropdown as c, Label as S, ToggleSwitch as j, OrderingDropdown as F, getSystemPreferredTheme as V, NavPills as p } from "@shlinkio/shlink-frontend-kit";
import { clsx as L } from "clsx";
import { Routes as B, Route as b, Navigate as W } from "react-router";
import { faMoon as _, faSun as $ } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as H } from "@fortawesome/react-fontawesome";
const Ue = (e, s, l = 1) => A(l, e + 1).map(s), G = (e) => Array.isArray(e) && e.length === 0 || typeof e == "string" && e === "" || typeof e == "object" && Object.keys(e).length === 0, Le = (e) => e != null && !G(e), Re = (e) => e || null, J = (e) => e ? "true" : "false", Te = (e) => e === void 0 ? void 0 : J(e), Y = (e) => {
  if (e.length < 2)
    return e[0] ?? "";
  const [s, ...l] = e.reverse();
  return `${l.reverse().join(", ")} and ${s}`;
}, T = "[&]:p-0 [&]:md:w-1/4 [&]:rounded-none", K = ({ onChange: e, className: s }) => {
  const l = u("qrCodes", w), { color: r, bgColor: n } = l;
  return /* @__PURE__ */ i(g, { title: "Colors", className: s, bodyClassName: "flex flex-col gap-4", children: [
    /* @__PURE__ */ t(
      y,
      {
        label: "Default color:",
        helpText: /* @__PURE__ */ i(h, { children: [
          "QR codes will initially use ",
          /* @__PURE__ */ t("b", { "data-testid": "color", children: r }),
          " color."
        ] }),
        type: "color",
        value: r,
        onChange: (d) => e({ ...l, color: d.target.value }),
        inputClassName: T
      }
    ),
    /* @__PURE__ */ t(
      y,
      {
        label: "Default background color:",
        helpText: /* @__PURE__ */ i(h, { children: [
          "QR codes will initially use ",
          /* @__PURE__ */ t("b", { "data-testid": "bg-color", children: n }),
          " background color."
        ] }),
        type: "color",
        value: n,
        onChange: (d) => e({ ...l, bgColor: d.target.value }),
        inputClassName: T
      }
    )
  ] });
}, X = ({ errorCorrection: e, onChange: s }) => /* @__PURE__ */ i(
  c,
  {
    buttonContent: e ? `Error correction (${e})` : /* @__PURE__ */ t("i", { children: "Default error correction" }),
    buttonClassName: "w-full",
    children: [
      /* @__PURE__ */ i(c.Item, { selected: e === "L", onClick: () => s("L"), children: [
        /* @__PURE__ */ t("b", { children: "L" }),
        "ow"
      ] }),
      /* @__PURE__ */ i(c.Item, { selected: e === "M", onClick: () => s("M"), children: [
        /* @__PURE__ */ t("b", { children: "M" }),
        "edium"
      ] }),
      /* @__PURE__ */ i(c.Item, { selected: e === "Q", onClick: () => s("Q"), children: [
        /* @__PURE__ */ t("b", { children: "Q" }),
        "uartile"
      ] }),
      /* @__PURE__ */ i(c.Item, { selected: e === "H", onClick: () => s("H"), children: [
        /* @__PURE__ */ t("b", { children: "H" }),
        "igh"
      ] })
    ]
  }
), Z = ["png", "svg", "webp", "jpeg"], ee = ({ format: e, onChange: s }) => /* @__PURE__ */ t(c, { buttonContent: `Format (${e})`, buttonClassName: "w-full", children: Z.map((l) => /* @__PURE__ */ t(c.Item, { selected: e === l, onClick: () => s(l), children: l }, l)) }), C = ({ className: e, size: s, ...l }) => /* @__PURE__ */ t(
  "span",
  {
    className: L(
      "text-gray-500 dark:text-gray-400",
      {
        "text-sm": s === "sm",
        "text-lg": s === "lg"
      },
      e
    ),
    ...l
  }
), te = ({ onChange: e }) => {
  const s = u("qrCodes", w), { format: l, errorCorrection: r } = s;
  return /* @__PURE__ */ i(g, { title: "Format", className: "card", bodyClassName: "flex flex-col gap-4", children: [
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ t(
        ee,
        {
          format: l,
          onChange: (n) => e({ ...s, format: n })
        }
      ),
      /* @__PURE__ */ i(C, { size: "sm", children: [
        "When downloading a QR code, it will use ",
        /* @__PURE__ */ t("b", { "data-testid": "format", children: l }),
        " format by default."
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ t(
        X,
        {
          errorCorrection: r,
          onChange: (n) => e({ ...s, errorCorrection: n })
        }
      ),
      /* @__PURE__ */ i(C, { size: "sm", children: [
        "QR codes will initially have a ",
        /* @__PURE__ */ t("b", { "data-testid": "error-correction", children: r }),
        " error correction."
      ] })
    ] })
  ] });
}, se = ({ onChange: e, className: s }) => {
  const l = u("qrCodes", w), { size: r, margin: n } = l;
  return /* @__PURE__ */ i(g, { title: "Size", className: s, bodyClassName: "flex flex-col gap-4", children: [
    /* @__PURE__ */ t(
      y,
      {
        label: "Default dimensions:",
        helpText: /* @__PURE__ */ i(h, { children: [
          "QR codes will be initially generated with ",
          /* @__PURE__ */ i("b", { "data-testid": "size", children: [
            r,
            "x",
            r,
            "px"
          ] }),
          "."
        ] }),
        type: "range",
        value: r,
        step: 10,
        min: 50,
        max: 1e3,
        onChange: (d) => e({ ...l, size: Number(d.target.value) }),
        inputClassName: "[&]:p-0"
      }
    ),
    /* @__PURE__ */ t(
      y,
      {
        label: "Default margin:",
        helpText: /* @__PURE__ */ i(h, { children: [
          "QR codes will be initially generated with a ",
          /* @__PURE__ */ i("b", { "data-testid": "margin", children: [
            n,
            "px"
          ] }),
          " margin."
        ] }),
        type: "range",
        value: n,
        step: 1,
        min: 0,
        max: 100,
        onChange: (d) => e({ ...l, margin: Number(d.target.value) }),
        inputClassName: "[&]:p-0"
      }
    )
  ] });
}, m = ({ children: e, helpText: s, "data-testid": l, ...r }) => /* @__PURE__ */ i("div", { "data-testid": l, children: [
  /* @__PURE__ */ i(S, { className: "flex items-center gap-x-2", children: [
    /* @__PURE__ */ t(j, { ...r }),
    e
  ] }),
  s && /* @__PURE__ */ t(C, { size: "sm", "data-testid": l ? `${l}-help-text` : "help-text", className: "pl-10", children: s })
] }), le = ({ toggleRealTimeUpdates: e, onIntervalChange: s }) => {
  const { enabled: l, interval: r } = u("realTimeUpdates", { enabled: !0 });
  return /* @__PURE__ */ i(g, { title: "Real-time updates", className: "h-full", bodyClassName: "flex flex-col gap-y-4", children: [
    /* @__PURE__ */ t(
      m,
      {
        checked: l,
        onChange: e,
        helpText: /* @__PURE__ */ i(h, { children: [
          "Real-time updates are currently being ",
          /* @__PURE__ */ t("b", { children: l ? "processed" : "ignored" }),
          "."
        ] }),
        children: "Enable or disable real-time updates."
      }
    ),
    /* @__PURE__ */ i("div", { children: [
      /* @__PURE__ */ t(
        y,
        {
          label: /* @__PURE__ */ t("span", { className: L({ "dark:text-gray-400": !l }), children: "Real-time updates frequency (in minutes):" }),
          type: "number",
          min: 0,
          placeholder: "Immediate",
          disabled: !l,
          value: `${r ?? ""}`,
          onChange: ({ target: n }) => s(Number(n.value))
        }
      ),
      l && /* @__PURE__ */ t(C, { size: "sm", children: r ? /* @__PURE__ */ i("span", { children: [
        "Updates will be reflected in the UI every ",
        /* @__PURE__ */ t("b", { children: r }),
        " minute",
        r > 1 && "s",
        "."
      ] }) : "Updates will be reflected in the UI as soon as they happen." })
    ] })
  ] });
}, U = (e) => e === "includes" ? "Suggest tags including input" : "Suggest tags starting with input", ie = (e) => e === "includes" ? /* @__PURE__ */ i(h, { children: [
  "The list of suggested tags will contain those ",
  /* @__PURE__ */ t("b", { children: "including" }),
  " provided input."
] }) : /* @__PURE__ */ i(h, { children: [
  "The list of suggested tags will contain those ",
  /* @__PURE__ */ t("b", { children: "starting with" }),
  " provided input."
] }), re = ({ onChange: e }) => {
  const s = u("shortUrlCreation", { validateUrls: !1 }), l = (r) => () => e(
    { ...s ?? { validateUrls: !1 }, tagFilteringMode: r }
  );
  return /* @__PURE__ */ i(g, { title: "Short URLs form", className: "card", bodyClassName: "flex flex-col gap-4", children: [
    /* @__PURE__ */ i(
      m,
      {
        "data-testid": "validate-url",
        checked: s.validateUrls ?? !1,
        onChange: (r) => e({ ...s, validateUrls: r }),
        helpText: /* @__PURE__ */ i(h, { children: [
          "The initial state of the ",
          /* @__PURE__ */ t("b", { children: "Validate URL" }),
          " checkbox will be ",
          /* @__PURE__ */ t("b", { children: s.validateUrls ? "checked" : "unchecked" }),
          "."
        ] }),
        children: [
          "Request validation on long URLs when creating new short URLs.",
          " ",
          /* @__PURE__ */ i("b", { children: [
            "This option is ignored by Shlink ",
            ">=",
            "4.0.0"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ t(
      m,
      {
        "data-testid": "forward-query",
        checked: s.forwardQuery ?? !0,
        onChange: (r) => e({ ...s, forwardQuery: r }),
        helpText: /* @__PURE__ */ i(h, { children: [
          "The initial state of the ",
          /* @__PURE__ */ t("b", { children: "Forward query params on redirect" }),
          " checkbox will be ",
          /* @__PURE__ */ t("b", { children: s.forwardQuery ?? !0 ? "checked" : "unchecked" }),
          "."
        ] }),
        children: "Make all new short URLs forward their query params to the long URL."
      }
    ),
    /* @__PURE__ */ i("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t(S, { className: "mb-1.5", children: "Tag suggestions search mode:" }),
      /* @__PURE__ */ i(
        c,
        {
          buttonContent: U(s.tagFilteringMode),
          buttonClassName: "w-full",
          children: [
            /* @__PURE__ */ t(
              c.Item,
              {
                selected: !s.tagFilteringMode || s.tagFilteringMode === "startsWith",
                onClick: l("startsWith"),
                children: U("startsWith")
              }
            ),
            /* @__PURE__ */ t(
              c.Item,
              {
                selected: s.tagFilteringMode === "includes",
                onClick: l("includes"),
                children: U("includes")
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ t(C, { size: "sm", className: "mt-0.5", children: ie(s.tagFilteringMode) })
    ] })
  ] });
}, ne = {
  dateCreated: "Created at",
  shortCode: "Short URL",
  longUrl: "Long URL",
  title: "Title",
  visits: "Visits"
}, ae = ({ onChange: e, defaultOrdering: s }) => {
  const l = u("shortUrlsList"), r = l?.confirmDeletions ?? !0;
  return /* @__PURE__ */ i(g, { title: "Short URLs list", className: "card", bodyClassName: "flex flex-col gap-4", children: [
    /* @__PURE__ */ t(
      m,
      {
        checked: r,
        onChange: (n) => e({ ...l, confirmDeletions: n }),
        helpText: /* @__PURE__ */ i(h, { children: [
          "When deleting a short URL, confirmation ",
          /* @__PURE__ */ t("b", { children: r ? "will" : "won't" }),
          " be required."
        ] }),
        children: "Request confirmation before deleting a short URL."
      }
    ),
    /* @__PURE__ */ i("div", { className: "flex flex-col gap-1.5", children: [
      /* @__PURE__ */ t(S, { children: "Default ordering for short URLs list:" }),
      /* @__PURE__ */ t(
        F,
        {
          buttonClassName: "w-full",
          items: ne,
          order: l?.defaultOrdering ?? s,
          onChange: (n) => e(
            { defaultOrdering: !n.dir && !n.field ? void 0 : n }
          )
        }
      )
    ] })
  ] });
}, oe = {
  tag: "Tag",
  shortUrls: "Short URLs",
  visits: "Visits"
}, de = ({ onChange: e }) => {
  const s = u("tags", {});
  return /* @__PURE__ */ t(g, { title: "Tags", className: "card", children: /* @__PURE__ */ i("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ t(S, { children: "Default ordering for tags list:" }),
    /* @__PURE__ */ t(
      F,
      {
        buttonClassName: "w-full",
        items: oe,
        order: s.defaultOrdering ?? {},
        onChange: (l) => e({ ...s, defaultOrdering: !l.field && !l.dir ? void 0 : l })
      }
    )
  ] }) });
}, ce = ({ onChange: e, _matchMedia: s }) => {
  const l = u("ui"), r = I(() => l?.theme ?? V(s), [l?.theme, s]);
  return /* @__PURE__ */ i(g, { title: "User interface", bodyClassName: "flex justify-between items-center", children: [
    /* @__PURE__ */ t(
      m,
      {
        checked: r === "dark",
        onChange: (n) => e({ ...l, theme: n ? "dark" : "light" }),
        children: "Use dark theme."
      }
    ),
    /* @__PURE__ */ t(H, { icon: r === "dark" ? _ : $ })
  ] });
}, k = {
  potentialBot: "Potential bot",
  date: "Date",
  country: "Country",
  region: "Region",
  city: "City",
  browser: "Browser",
  os: "OS",
  userAgent: "User agent",
  referer: "Referrer",
  visitedUrl: "Visited URL"
}, N = {
  browser: ["userAgent"],
  os: ["userAgent"],
  userAgent: ["browser", "os"]
};
Object.freeze(N);
const he = ({ onChange: e }) => {
  const s = u("visitsList"), l = I(
    () => Q(
      R,
      s?.columns ?? {}
    ),
    [s?.columns]
  ), r = f((n, d) => {
    const o = {
      ...l,
      [n]: d
    };
    d && N[n]?.forEach((x) => {
      o[x] = !1;
    }), e({ columns: o });
  }, [l, e]);
  return /* @__PURE__ */ i(g, { title: "Visits list", children: [
    /* @__PURE__ */ t("p", { className: "mb-2", children: "Columns to show in visits table:" }),
    /* @__PURE__ */ t("ul", { className: "flex flex-col gap-y-1", children: Object.entries(k).map(([n, d]) => /* @__PURE__ */ t("li", { children: /* @__PURE__ */ t(m, { checked: l[n], onChange: (o) => r(n, o), children: /* @__PURE__ */ i("span", { className: "inline-flex gap-2", children: [
      d,
      N[n] && /* @__PURE__ */ i(C, { children: [
        "(excludes ",
        Y(N[n].map((o) => k[o])),
        ")"
      ] })
    ] }) }) }, n)) })
  ] });
}, O = {
  today: "Today",
  yesterday: "Yesterday",
  last7Days: "Last 7 days",
  last30Days: "Last 30 days",
  last90Days: "Last 90 days",
  last180Days: "Last 180 days",
  last365Days: "Last 365 days"
}, ge = (e, s) => !e || e === "all" ? s : O[e], ue = ({ onChange: e, active: s, allText: l }) => /* @__PURE__ */ i(c, { buttonContent: ge(s, l), buttonClassName: "w-full", children: [
  /* @__PURE__ */ t(c.Item, { selected: s === "all", onClick: () => e("all"), children: l }),
  /* @__PURE__ */ t(c.Separator, {}),
  Object.entries(O).map(
    ([r, n]) => /* @__PURE__ */ t(c.Item, { selected: s === r, onClick: () => e(r), children: n }, r)
  )
] }), D = (e) => e?.defaultInterval ?? "last30Days", me = ({ onChange: e }) => {
  const s = u("visits"), l = f(
    ({ defaultInterval: r, ...n }) => e(
      { defaultInterval: r ?? D(s), ...n }
    ),
    [e, s]
  );
  return /* @__PURE__ */ i(g, { title: "Visits", className: "card", bodyClassName: "flex flex-col gap-4", children: [
    /* @__PURE__ */ t(
      m,
      {
        "data-testid": "exclude-bots",
        checked: !!s?.excludeBots,
        onChange: (r) => l({ excludeBots: r }),
        helpText: /* @__PURE__ */ i(h, { children: [
          "The visits coming from potential bots will be ",
          /* @__PURE__ */ t("b", { children: s?.excludeBots ? "excluded" : "included" }),
          "."
        ] }),
        children: "Exclude bots wherever possible (this option‘s effect might depend on Shlink server‘s version)."
      }
    ),
    /* @__PURE__ */ t(
      m,
      {
        "data-testid": "compare-visits",
        checked: !!s?.loadPrevInterval,
        onChange: (r) => l({ loadPrevInterval: r }),
        helpText: /* @__PURE__ */ i(h, { children: [
          "When loading visits, previous period ",
          /* @__PURE__ */ t("b", { children: s?.loadPrevInterval ? "will" : "won't" }),
          " be loaded by default."
        ] }),
        children: "Compare visits with previous period."
      }
    ),
    /* @__PURE__ */ i("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ t(S, { className: "mb-1.5", children: "Default interval to load on visits sections:" }),
      /* @__PURE__ */ t(
        ue,
        {
          allText: "All visits",
          active: D(s),
          onChange: (r) => l({ defaultInterval: r })
        }
      )
    ] })
  ] });
}, v = ({ children: e, className: s }) => /* @__PURE__ */ t("div", { className: L("flex flex-col gap-4", s), children: e }), ke = ({
  settings: e,
  onUpdateSettings: s,
  defaultShortUrlsListOrdering: l
}) => {
  const r = f(
    (a) => s?.(Q(e, a)),
    [e, s]
  ), n = f(
    (a) => r({ realTimeUpdates: { enabled: a } }),
    [r]
  ), d = f(
    (a) => r({ realTimeUpdates: { interval: a } }),
    [r]
  ), o = f(
    (a, M) => r({ [a]: M }),
    [r]
  ), x = f(
    (a) => o("qrCodes", a),
    [o]
  );
  return /* @__PURE__ */ i(fe, { value: e, children: [
    /* @__PURE__ */ i(p, { className: "mb-4 sticky top-(--header-height) z-2", children: [
      /* @__PURE__ */ t(p.Pill, { to: "../general", children: "General" }),
      /* @__PURE__ */ t(p.Pill, { to: "../short-urls", children: "Short URLs" }),
      /* @__PURE__ */ t(p.Pill, { to: "../visits", children: "Visits" }),
      /* @__PURE__ */ t(p.Pill, { to: "../tags", children: "Tags" }),
      /* @__PURE__ */ t(p.Pill, { to: "../qr-codes", children: "QR codes" })
    ] }),
    /* @__PURE__ */ i(B, { children: [
      /* @__PURE__ */ t(
        b,
        {
          path: "general",
          element: /* @__PURE__ */ i(v, { children: [
            /* @__PURE__ */ t(ce, { onChange: (a) => o("ui", a) }),
            /* @__PURE__ */ t(
              le,
              {
                toggleRealTimeUpdates: n,
                onIntervalChange: d
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ t(
        b,
        {
          path: "short-urls",
          element: /* @__PURE__ */ i(v, { children: [
            /* @__PURE__ */ t(re, { onChange: (a) => o("shortUrlCreation", a) }),
            /* @__PURE__ */ t(
              ae,
              {
                defaultOrdering: l,
                onChange: (a) => o("shortUrlsList", a)
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ t(
        b,
        {
          path: "visits",
          element: /* @__PURE__ */ i(v, { children: [
            /* @__PURE__ */ t(me, { onChange: (a) => o("visits", a) }),
            /* @__PURE__ */ t(he, { onChange: (a) => o("visitsList", a) })
          ] })
        }
      ),
      /* @__PURE__ */ t(
        b,
        {
          path: "tags",
          element: /* @__PURE__ */ t(v, { children: /* @__PURE__ */ t(de, { onChange: (a) => o("tags", a) }) })
        }
      ),
      /* @__PURE__ */ t(
        b,
        {
          path: "qr-codes",
          element: /* @__PURE__ */ i(v, { children: [
            /* @__PURE__ */ i("div", { className: "flex flex-col lg:flex-row gap-4", children: [
              /* @__PURE__ */ t(se, { onChange: x, className: "w-full" }),
              /* @__PURE__ */ t(K, { onChange: x, className: "w-full" })
            ] }),
            /* @__PURE__ */ t(te, { onChange: x })
          ] })
        }
      ),
      /* @__PURE__ */ t(b, { path: "*", element: /* @__PURE__ */ t(W, { replace: !0, to: "../general" }) })
    ] })
  ] });
}, w = {
  size: 300,
  margin: 0,
  color: "#000000",
  bgColor: "#ffffff",
  errorCorrection: "L",
  format: "png"
};
Object.freeze(w);
const R = {
  potentialBot: !0,
  date: !0,
  country: !0,
  region: !1,
  city: !0,
  browser: !0,
  os: !0,
  userAgent: !1,
  referer: !0,
  visitedUrl: !0
};
Object.freeze(R);
const q = {
  realTimeUpdates: {
    enabled: !0
  },
  shortUrlCreation: {
    validateUrls: !1
  },
  visits: {
    defaultInterval: "last30Days"
  },
  visitsList: {
    columns: R
  },
  shortUrlsList: {
    defaultOrdering: {
      field: "dateCreated",
      dir: "DESC"
    }
  },
  qrCodes: w
}, E = P(q), { Provider: fe } = E, pe = () => z(E) ?? q;
function u(e, s) {
  return pe()[e] ?? s;
}
export {
  m as L,
  C as M,
  X as Q,
  fe as S,
  ee as a,
  pe as b,
  J as c,
  w as d,
  R as e,
  ke as f,
  Le as h,
  Re as n,
  Te as p,
  Ue as r,
  u
};
