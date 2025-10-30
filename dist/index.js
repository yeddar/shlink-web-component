import Es from "bottlejs";
import { connect as Ls, Provider as Is } from "react-redux";
import { jsxs as d, Fragment as E, jsx as a } from "react/jsx-runtime";
import { SimpleCard as q, CloseButton as Rr, Button as _, CardModal as Fe, LabelledInput as je, useToggle as ee, RowDropdown as X, useTooltip as Pe, Tooltip as Ae, Table as w, Message as $e, SearchInput as Yt, Result as ie, formatNumber as W, Card as Se, useParsedQuery as ft, stringToOrder as ks, orderToString as Fs, stringifyQueryParams as Fr, useGoBack as Ps, LinkButton as Pr, LabelledSelect as Ar, CopyToClipboardButton as da, isDarkThemeEnabled as Ke, Input as fe, isLightColor as ua, useTimeoutToggle as ga, Dropdown as I, Label as ha, Checkbox as ma, OrderingDropdown as Mr, Paginator as Jt, determineOrderDir as As, TagsAutocomplete as Ms, sortList as fa, determineOrder as pa, parseQueryString as Os, PRIMARY_DARK_COLOR as Bs, PRIMARY_LIGHT_COLOR as Gs, brandColor as Gt, HIGHLIGHTED_COLOR as wr, brandColorAlpha as Hs, HIGHLIGHTED_COLOR_ALPHA as js, roundTen as $s, NavPills as Dn } from "@shlinkio/shlink-frontend-kit";
import { ErrorType as va } from "./api-contract.js";
import { faChartLine as Zt, faChevronRight as zs, faClose as Ca, faInfoCircle as er, faChartPie as Or, faList as Br, faEdit as ya, faCircleNotch as Ks, faCheck as ct, faTimes as _s, faDotCircle as Ws, faArrowLeft as Xs, faPlus as Da, faXmark as Sa, faGripVertical as qs, faArrowUp as Qs, faArrowDown as Ys, faPencilAlt as xa, faTrashCan as Js, faFileCsv as Zs, faLinkSlash as ei, faCalendarXmark as Sn, faArrowsSplitUpAndLeft as Ra, faPalette as ti, faFileDownload as ri, faQrcode as ni, faMinusCircle as ai, faUndo as oi, faDesktop as si, faTags as wa, faTag as ii, faCaretUp as li, faCaretDown as ci, faTrash as di, faDownLeftAndUpRightToCenter as ui, faUpRightAndDownLeftFromCenter as gi, faMapMarkedAlt as Nr, faRobot as Na, faGears as hi, faCalendarAlt as mi, faWarning as fi, faHome as pi, faLink as vi, faGlobe as Ci, faBars as yi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as U } from "@fortawesome/react-fontawesome";
import { clsx as P } from "clsx";
import { createContext as pt, useContext as vt, useState as O, useMemo as L, useCallback as S, useEffect as j, useRef as ne, forwardRef as Gr, useImperativeHandle as Di, useId as Hr, Fragment as ba, useLayoutEffect as Si } from "react";
import { compare as xn } from "compare-versions";
import { n as dr, u as ve, p as ur, d as xi, Q as Ri, a as wi, M as Ni, h as Ge, b as Va, r as jr, L as bi, c as Rn, e as Vi, S as Ui } from "./index-Bm1r10oA.js";
import { ExternalLink as pe } from "react-external-link";
import { createAsyncThunk as Ti, createAction as we, createSlice as J, configureStore as Ei, combineReducers as Li } from "@reduxjs/toolkit";
import { useParams as Ct, Link as dt, useNavigate as $r, useLocation as tr, Routes as Ua, Route as H, Navigate as Ta, NavLink as Ii, useInRouterContext as ki, BrowserRouter as Fi } from "react-router";
import { EventSourcePolyfill as Pi } from "event-source-polyfill";
import { faArrowAltCircleRight as Ai, faImage as Mi, faClone as Oi } from "@fortawesome/free-regular-svg-icons";
import { parseISO as Ee, format as Ht, formatISO as Bi, isEqual as br, isBefore as jt, isWithinInterval as Gi, isAfter as Hi, formatDistance as ji, getUnixTime as $i, endOfDay as ut, differenceInDays as Ea, startOfDay as gt, subDays as $t, min as zi, max as La, differenceInCalendarMonths as Vr, differenceInCalendarWeeks as Ki, differenceInCalendarDays as Ia, differenceInHours as _i, add as Wi, startOfISOWeek as Xi, endOfISOWeek as qi, addDays as Qi } from "date-fns";
import Yi from "qr-code-styling";
import { faAndroid as Ji, faApple as Zi } from "@fortawesome/free-brands-svg-icons";
import { splitEvery as Qe, countBy as ka, sortBy as el, zipObj as wn, groupBy as tl, mergeDeepRight as Fa, range as rl } from "@shlinkio/data-manipulation";
import { useSwipeable as nl } from "react-swipeable";
import { Parser as al } from "@json2csv/plainjs";
import { ResponsiveContainer as ol, PieChart as sl, Tooltip as zr, Pie as Nn, Cell as Ot, LineChart as il, XAxis as Pa, YAxis as Aa, CartesianGrid as Ma, Line as ll, ReferenceArea as cl, ComposedChart as dl, Bar as gr } from "recharts";
import { MapContainer as ul, Marker as gl, Popup as hl, TileLayer as ml } from "react-leaflet";
import fl from "bowser";
import bn from "leaflet";
const pl = (e) => e?.type === va.INVALID_ARGUMENT, vl = (e) => e?.type === va.INVALID_SHORT_URL_DELETION, Cl = (e) => !!e && typeof e == "object" && ["type", "detail", "title", "status"].every((t) => t in e), ce = (e) => Cl(e) ? e : void 0, Kr = (e) => "error" in e, xe = ({ errorData: e, fallbackMessage: t }) => /* @__PURE__ */ d(E, { children: [
  e?.detail ?? t,
  pl(e) && /* @__PURE__ */ d("p", { children: [
    "Invalid elements: [",
    e.invalidElements.join(", "),
    "]"
  ] })
] }), Oa = pt(""), yl = Oa.Provider, Ne = () => vt(Oa), Ba = pt(void 0), { Provider: _r } = Ba, rr = () => vt(Ba), Dl = 5, Wr = () => {
  const [e, t] = O([]), r = L(() => e.length >= Dl, [e.length]), n = S(
    (c) => !r && t((l) => [...l, c]),
    [r]
  ), o = S(
    (c) => !r && e.every((l) => l.name !== c),
    [e, r]
  ), s = S(
    (c) => t((l) => l.filter((u) => u !== c)),
    []
  ), i = S(() => t([]), []);
  return { itemsToCompare: e, addItemToCompare: n, removeItemToCompare: s, clearItemsToCompare: i, canAddItemWithName: o };
}, Xr = ({ className: e, type: t }) => {
  const r = Ne(), n = rr(), o = L(
    () => n ? encodeURIComponent(n.itemsToCompare.map((l) => l.query).join(",")) : "",
    [n]
  );
  if (!n || n.itemsToCompare.length === 0)
    return null;
  const { itemsToCompare: s, clearItemsToCompare: i, removeItemToCompare: c } = n;
  return /* @__PURE__ */ a("div", { className: P("sticky top-(--header-height) z-10", e), children: /* @__PURE__ */ d(q, { bodyClassName: "flex flex-col lg:flex-row gap-4 items-center", children: [
    /* @__PURE__ */ a("ul", { className: "flex flex-wrap gap-1 grow items-center", children: s.map((l, u) => /* @__PURE__ */ d(
      "li",
      {
        className: P(
          "flex items-center gap-1 text-sm font-bold text-white py-0.5 px-1.5 rounded",
          { "bg-gray-500": !l.style?.backgroundColor }
        ),
        style: l.style,
        children: [
          l.name,
          /* @__PURE__ */ a(
            Rr,
            {
              label: `Remove ${l.name}`,
              className: "text-xs",
              onClick: () => c(l)
            }
          )
        ]
      },
      `${l.name}_${u}`
    )) }),
    /* @__PURE__ */ d("div", { className: "flex gap-2 max-lg:w-full", children: [
      /* @__PURE__ */ d(
        _,
        {
          className: "grow whitespace-nowrap",
          disabled: s.length < 2,
          to: s.length > 1 ? `${r}/${t}/compare-visits?${t}=${o}` : void 0,
          children: [
            /* @__PURE__ */ a(U, { icon: Zt }),
            "Compare (",
            s.length,
            "/5)",
            /* @__PURE__ */ a(U, { icon: zs })
          ]
        }
      ),
      /* @__PURE__ */ a(
        _,
        {
          "aria-label": "Close compare",
          variant: "secondary",
          onClick: i,
          children: /* @__PURE__ */ a(U, { icon: Ca })
        }
      )
    ] })
  ] }) });
}, Sl = (e, { maxVersion: t, minVersion: r }) => {
  const n = !r || xn(e, r, ">=");
  return (!t || xn(e, t, "<=")) && n;
}, Ga = {
  shortUrlVisitsDeletion: { minVersion: "3.6.0" },
  orphanVisitsDeletion: { minVersion: "3.7.0" },
  deviceLongUrls: { maxVersion: "3.*.*" },
  urlValidation: { maxVersion: "3.*.*" },
  shortUrlRedirectRules: { minVersion: "4.0.0" },
  ipRedirectCondition: { minVersion: "4.2.0" },
  geolocationRedirectCondition: { minVersion: "4.3.0" },
  filterShortUrlsByDomain: { minVersion: "4.3.0" },
  advancedQueryRedirectConditions: { minVersion: "4.5.0" },
  desktopDeviceTypes: { minVersion: "4.5.0" }
};
Object.freeze(Ga);
const De = (e, t) => (
  // When serverVersion is `latest`, fall back to a very big version number.
  // That will disable features with a maxVersion, and keep enabled those with only a minVersion
  Sl(t === "latest" ? "999.99.99" : t, Ga[e])
), Ha = (e) => ({
  deviceLongUrls: De("deviceLongUrls", e),
  shortUrlVisitsDeletion: De("shortUrlVisitsDeletion", e),
  orphanVisitsDeletion: De("orphanVisitsDeletion", e),
  shortUrlRedirectRules: De("shortUrlRedirectRules", e),
  urlValidation: De("urlValidation", e),
  ipRedirectCondition: De("ipRedirectCondition", e),
  geolocationRedirectCondition: De("geolocationRedirectCondition", e),
  filterShortUrlsByDomain: De("filterShortUrlsByDomain", e),
  advancedQueryRedirectConditions: De("advancedQueryRedirectConditions", e),
  desktopDeviceTypes: De("advancedQueryRedirectConditions", e)
}), ja = pt(Ha("0.0.0")), xl = ja.Provider, Rl = (e) => L(
  () => Ha(e),
  [e]
), ue = (e) => vt(ja)[e], Je = "DEFAULT", hr = ({ children: e, onChange: t, infoTitle: r, ...n }) => /* @__PURE__ */ a(
  je,
  {
    ...n,
    onChange: (o) => t(o.target.value),
    label: /* @__PURE__ */ d(E, { children: [
      /* @__PURE__ */ a(U, { className: "mr-1.5", icon: er, title: r }),
      e
    ] }),
    type: "url",
    placeholder: "No redirect"
  }
), wl = ({ isOpen: e, onClose: t, domain: r, editDomainRedirects: n }) => {
  const [o, s] = O(r.redirects?.baseUrlRedirect ?? ""), [i, c] = O(r.redirects?.regular404Redirect ?? ""), [l, u] = O(
    r.redirects?.invalidShortUrlRedirect ?? ""
  ), [g, h] = O(!1), m = S(
    async () => {
      h(!0);
      try {
        await n({
          domain: r.domain,
          redirects: {
            baseUrlRedirect: dr(o),
            regular404Redirect: dr(i),
            invalidShortUrlRedirect: dr(l)
          }
        }), t();
      } finally {
        h(!1);
      }
    },
    [n, r.domain, o, i, l, t]
  );
  return /* @__PURE__ */ a(
    Fe,
    {
      title: `Edit redirects for ${r.domain}`,
      open: e,
      onClose: t,
      onConfirm: m,
      confirmText: g ? "Saving..." : "Save",
      confirmDisabled: g,
      children: /* @__PURE__ */ d("div", { className: "flex flex-col gap-y-3", children: [
        /* @__PURE__ */ a(
          hr,
          {
            value: o,
            onChange: s,
            infoTitle: `Visitors accessing the base url, as in https://${r.domain}/, will be redirected to this URL.`,
            children: "Base URL"
          }
        ),
        /* @__PURE__ */ a(
          hr,
          {
            value: i,
            onChange: c,
            infoTitle: `Visitors accessing a url not matching a short URL pattern, as in https://${r.domain}/???/[...], will be redirected to this URL.`,
            children: "Regular 404"
          }
        ),
        /* @__PURE__ */ a(
          hr,
          {
            value: l,
            onChange: u,
            infoTitle: "Visitors accessing a url matching a short URL pattern, but not matching an existing short code, will be redirected to this URL.",
            children: "Invalid short URL"
          }
        )
      ] })
    }
  );
}, Nl = ({ domain: e, editDomainRedirects: t }) => {
  const { flag: r, setToTrue: n, setToFalse: o } = ee(), s = Ne(), i = rr(), c = ue("filterShortUrlsByDomain");
  return /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ d(X, { menuAlignment: "right", children: [
      /* @__PURE__ */ d(
        X.Item,
        {
          className: "gap-1.5",
          to: `${s}/domain/${e.domain}${e.isDefault ? `_${Je}` : ""}/visits`,
          children: [
            /* @__PURE__ */ a(U, { icon: Or }),
            " Visit stats"
          ]
        }
      ),
      /* @__PURE__ */ d(
        X.Item,
        {
          className: "gap-1.5",
          disabled: !i || !i.canAddItemWithName(e.domain),
          onClick: () => i?.addItemToCompare({
            name: e.domain,
            query: e.domain
          }),
          children: [
            /* @__PURE__ */ a(U, { icon: Zt }),
            " Compare visits"
          ]
        }
      ),
      c && /* @__PURE__ */ d(
        X.Item,
        {
          className: "gap-1.5",
          to: `${s}/list-short-urls/1?domain=${e.isDefault ? Je : e.domain}`,
          children: [
            /* @__PURE__ */ a(U, { icon: Br }),
            " Short URLs"
          ]
        }
      ),
      /* @__PURE__ */ a(X.Separator, {}),
      /* @__PURE__ */ d(X.Item, { onClick: n, className: "gap-1.5", children: [
        /* @__PURE__ */ a(U, { icon: ya }),
        " Edit redirects"
      ] })
    ] }),
    /* @__PURE__ */ a(
      wl,
      {
        domain: e,
        isOpen: r,
        onClose: o,
        editDomainRedirects: t
      }
    )
  ] });
}, bl = ({ status: e }) => {
  const { anchor: t, tooltip: r } = Pe();
  return e === "validating" ? /* @__PURE__ */ a(U, { icon: Ks, spin: !0 }) : /* @__PURE__ */ d("span", { ...t, children: [
    /* @__PURE__ */ a(
      U,
      {
        icon: e === "valid" ? ct : _s,
        className: P({ "text-danger": e !== "valid" })
      }
    ),
    /* @__PURE__ */ a(Ae, { ...r, children: e === "valid" ? /* @__PURE__ */ d(E, { children: [
      "Congratulations!",
      /* @__PURE__ */ a("br", {}),
      "This domain is properly configured."
    ] }) : /* @__PURE__ */ d("span", { children: [
      "Oops! There is some missing configuration, and short URLs shared with this domain will not work.",
      /* @__PURE__ */ a("br", {}),
      "Check the ",
      /* @__PURE__ */ a(pe, { href: "https://slnk.to/multi-domain-docs", children: "documentation" }),
      " in order to find out what is missing."
    ] }) })
  ] });
}, mr = ({ fallback: e }) => /* @__PURE__ */ d("span", { className: "text-gray-500 dark:text-gray-400", children: [
  !e && /* @__PURE__ */ a("small", { children: "No redirect" }),
  e && /* @__PURE__ */ d(E, { children: [
    e,
    " ",
    /* @__PURE__ */ a("small", { children: "(as fallback)" })
  ] })
] }), Vl = () => {
  const { anchor: e, tooltip: t } = Pe();
  return /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ a(
      U,
      {
        ...e,
        icon: Ws,
        className: "text-lm-brand dark:text-dm-brand",
        "data-testid": "default-domain-icon"
      }
    ),
    /* @__PURE__ */ a(Ae, { ...t, children: "Default domain foo" })
  ] });
}, Ul = ({ domain: e, editDomainRedirects: t, checkDomainHealth: r, defaultRedirects: n }) => {
  const { domain: o, isDefault: s, redirects: i, status: c } = e;
  return j(() => {
    r(e.domain);
  }, [r, e.domain]), /* @__PURE__ */ d(w.Row, { className: "relative", children: [
    /* @__PURE__ */ a(w.Cell, { columnName: "Is default domain:", children: s && /* @__PURE__ */ a(Vl, {}) }),
    /* @__PURE__ */ a(w.Cell, { columnName: "Domain:", children: /* @__PURE__ */ a("b", { children: o }) }),
    /* @__PURE__ */ a(w.Cell, { columnName: "Base path redirect:", children: i?.baseUrlRedirect ?? /* @__PURE__ */ a(mr, { fallback: n?.baseUrlRedirect }) }),
    /* @__PURE__ */ a(w.Cell, { columnName: "Regular 404 redirect:", children: i?.regular404Redirect ?? /* @__PURE__ */ a(mr, { fallback: n?.regular404Redirect }) }),
    /* @__PURE__ */ a(w.Cell, { columnName: "Invalid short URL redirect:", children: i?.invalidShortUrlRedirect ?? /* @__PURE__ */ a(mr, { fallback: n?.invalidShortUrlRedirect }) }),
    /* @__PURE__ */ a(w.Cell, { className: "lg:text-center max-lg:border-none", columnName: "Status:", children: /* @__PURE__ */ a(bl, { status: c }) }),
    /* @__PURE__ */ a(w.Cell, { className: "text-right max-lg:absolute max-lg:top-1 max-lg:right-1 max-lg:p-0", children: /* @__PURE__ */ a(Nl, { domain: e, editDomainRedirects: t }) })
  ] });
}, Vn = [
  {
    value: "Is default domain",
    isHidden: !0
  },
  {
    value: "Domain",
    isHidden: !1
  },
  {
    value: "Base path redirect",
    isHidden: !1
  },
  {
    value: "Regular 404 redirect",
    isHidden: !1
  },
  {
    value: "Invalid short URL redirect",
    isHidden: !1
  },
  {
    value: "Domain status",
    isHidden: !0
  },
  {
    value: "Options",
    isHidden: !0
  }
], Tl = ({ domainsList: e, filterDomains: t, editDomainRedirects: r, checkDomainHealth: n }) => {
  const { filteredDomains: o, defaultRedirects: s, loading: i, error: c, errorData: l } = e, u = s ?? o.find(({ isDefault: h }) => h)?.redirects, g = Wr();
  return i ? /* @__PURE__ */ a($e, { loading: !0 }) : /* @__PURE__ */ a(_r, { value: g, children: /* @__PURE__ */ d("div", { className: "flex flex-col gap-y-4", children: [
    /* @__PURE__ */ a(Yt, { onChange: t }),
    /* @__PURE__ */ a(Xr, { type: "domains" }),
    c && /* @__PURE__ */ a(ie, { variant: "error", children: /* @__PURE__ */ a(xe, { errorData: l, fallbackMessage: "Error loading domains :(" }) }),
    !c && /* @__PURE__ */ a(q, { className: "card", children: /* @__PURE__ */ d(w, { header: /* @__PURE__ */ a(w.Row, { children: Vn.map((h, m) => /* @__PURE__ */ a(w.Cell, { children: /* @__PURE__ */ a("span", { className: h.isHidden ? "sr-only" : void 0, children: h.value }) }, m)) }), children: [
      o.length < 1 && /* @__PURE__ */ a(w.Row, { children: /* @__PURE__ */ a(w.Cell, { colSpan: Vn.length, className: "text-center", children: "No results found" }) }),
      o.map((h) => /* @__PURE__ */ a(
        Ul,
        {
          domain: h,
          editDomainRedirects: r,
          checkDomainHealth: n,
          defaultRedirects: u
        },
        h.domain
      ))
    ] }) })
  ] }) });
}, Y = (e, t) => Ti(e, t, { serializeError: (r) => r }), El = "shlink/domainRedirects/EDIT_DOMAIN_REDIRECTS", Ll = (e) => Y(
  El,
  async ({ domain: t, redirects: r }) => {
    const o = await e().editDomainRedirects({ domain: t, ...r });
    return { domain: t, redirects: o };
  }
), Tt = "shlink/domainsList", Et = {
  domains: [],
  filteredDomains: [],
  loading: !1,
  error: !1
}, Un = ({ domain: e, redirects: t }) => (r) => r.domain !== e ? r : { ...r, redirects: t }, Tn = (e, t) => (r) => r.domain !== e ? r : { ...r, status: t }, Il = (e, t, r) => {
  const n = Y(`${Tt}/listDomains`, async () => {
    const { data: c, defaultRedirects: l } = await e().listDomains();
    return {
      domains: c.map((u) => ({ ...u, status: "validating" })),
      defaultRedirects: l
    };
  }), o = Y(
    `${Tt}/checkDomainHealth`,
    async (c) => {
      try {
        const { status: l } = await e().health({ domain: c });
        return { domain: c, status: l === "pass" ? "valid" : "invalid" };
      } catch {
        return { domain: c, status: "invalid" };
      }
    }
  ), s = we(`${Tt}/filterDomains`), { reducer: i } = J({
    name: Tt,
    initialState: Et,
    reducers: {},
    extraReducers: (c) => {
      c.addCase(n.pending, () => ({ ...Et, loading: !0 })), c.addCase(n.rejected, (l, { error: u }) => ({ ...Et, error: !0, errorData: ce(u) })), c.addCase(n.fulfilled, (l, { payload: u }) => ({ ...Et, ...u, filteredDomains: u.domains })), c.addCase(o.fulfilled, ({ domains: l, filteredDomains: u, ...g }, { payload: h }) => ({
        ...g,
        domains: l.map(Tn(h.domain, h.status)),
        filteredDomains: u.map(Tn(h.domain, h.status))
      })), c.addCase(s, (l, { payload: u }) => ({
        ...l,
        filteredDomains: l.domains.filter(({ domain: g }) => g.toLowerCase().match(u.toLowerCase()))
      })), c.addCase(t.fulfilled, (l, { payload: u }) => ({
        ...l,
        domains: l.domains.map(Un(u)),
        filteredDomains: l.filteredDomains.map(Un(u))
      })), c.addCase(r.fulfilled, (l, { payload: u }) => {
        u.domain === null || l.domains.some((g) => g.domain === u.domain) || l.domains.push({
          domain: u.domain,
          status: "validating",
          isDefault: !1,
          redirects: {
            baseUrlRedirect: null,
            regular404Redirect: null,
            invalidShortUrlRedirect: null
          }
        });
      });
    }
  });
  return {
    reducer: i,
    listDomains: n,
    checkDomainHealth: o,
    filterDomains: s
  };
}, kl = (e, t) => {
  e.serviceFactory("ManageDomains", () => Tl), e.decorator("ManageDomains", t(
    ["domainsList"],
    ["filterDomains", "editDomainRedirects", "checkDomainHealth"]
  )), e.serviceFactory(
    "domainsListReducerCreator",
    Il,
    "apiClientFactory",
    "editDomainRedirects",
    "createShortUrl"
  ), e.serviceFactory("domainsListReducer", (r) => r.reducer, "domainsListReducerCreator"), e.serviceFactory("listDomains", (r) => r.listDomains, "domainsListReducerCreator"), e.serviceFactory("filterDomains", (r) => r.filterDomains, "domainsListReducerCreator"), e.serviceFactory("editDomainRedirects", Ll, "apiClientFactory"), e.serviceFactory("checkDomainHealth", (r) => r.checkDomainHealth, "domainsListReducerCreator");
}, En = "shlink/mercure", Fl = {
  loading: !0,
  error: !1
}, Pl = (e) => {
  const t = Y(
    `${En}/loadMercureInfo`,
    (n) => {
      if (n && n.realTimeUpdates && !n.realTimeUpdates.enabled)
        throw new Error("Real time updates not enabled");
      return e().mercureInfo();
    }
  ), { reducer: r } = J({
    name: En,
    initialState: Fl,
    reducers: {},
    extraReducers: (n) => {
      n.addCase(t.pending, (o) => ({ ...o, loading: !0, error: !1 })), n.addCase(t.rejected, (o) => ({ ...o, loading: !1, error: !0 })), n.addCase(t.fulfilled, (o, { payload: s }) => ({ ...s, loading: !1, error: !1 }));
    }
  });
  return { loadMercureInfo: t, reducer: r };
}, Al = (e) => {
  e.serviceFactory("mercureInfoReducerCreator", Pl, "apiClientFactory"), e.serviceFactory("mercureInfoReducer", (t) => t.reducer, "mercureInfoReducerCreator"), e.serviceFactory("loadMercureInfo", (t) => t.loadMercureInfo, "mercureInfoReducerCreator");
};
function z(e) {
  return L(() => e, [e]);
}
function K(e, t) {
  return (r, n = globalThis.console) => (t.forEach((o) => {
    const s = r[o];
    !s && process.env.NODE_ENV !== "production" && n.error(`[Debug] Could not find "${o}" dependency in container`), e[o] = s;
  }), e);
}
const Ml = (e, t, r, n) => {
  const { mercureHubUrl: o, token: s, loading: i, error: c } = e;
  if (i || c || !o)
    return;
  const l = ({ data: h }) => r(JSON.parse(h)), u = ({ status: h }) => h === 401 && n(), g = t.map((h) => {
    const m = new URL(o);
    m.searchParams.append("topic", h);
    const f = new Pi(m, {
      headers: {
        Authorization: `Bearer ${s}`
      }
    });
    return f.onmessage = l, f.onerror = u, f;
  });
  return () => g.forEach((h) => h.close());
};
function Ce(e, t) {
  const r = /* @__PURE__ */ new Set();
  return (n) => {
    const { createNewVisits: o, loadMercureInfo: s, mercureInfo: i } = n, c = Ct();
    return j(() => {
      const { interval: l } = i, u = (f) => l ? r.add(f) : o([f]), g = t(c), h = Ml(i, g, u, s);
      if (!l)
        return h;
      const m = setInterval(() => {
        o([...r]), r.clear();
      }, l * 1e3 * 60);
      return () => {
        clearInterval(m), h?.();
      };
    }, [o, s, i, c]), /* @__PURE__ */ a(e, { ...n });
  };
}
class ge {
  static visits = "https://shlink.io/new-visit";
  static orphanVisits = "https://shlink.io/new-orphan-visit";
  static shortUrlVisits = (t) => `https://shlink.io/new-visit/${t}`;
}
const tt = we(
  "shlink/visitCreation/createNewVisits",
  (e) => ({ payload: { createdVisits: e } })
), it = (e, t, r) => r == null ? e.shortCode === t && !e.domain : e.shortCode === t && e.domain === r, Ol = (e, t) => !e.domain && t === Je ? !0 : e.domain === t, Bl = (e, t) => {
  const r = t?.validateUrls ?? !1;
  return e ? {
    longUrl: e.longUrl,
    tags: e.tags,
    title: e.title ?? void 0,
    domain: e.domain ?? void 0,
    validSince: e.meta.validSince ?? void 0,
    validUntil: e.meta.validUntil ?? void 0,
    maxVisits: e.meta.maxVisits ?? void 0,
    crawlable: e.crawlable,
    forwardQuery: e.forwardQuery,
    deviceLongUrls: e.deviceLongUrls && {
      android: e.deviceLongUrls.android ?? void 0,
      ios: e.deviceLongUrls.ios ?? void 0,
      desktop: e.deviceLongUrls.desktop ?? void 0
    },
    validateUrl: r
  } : { longUrl: "", validateUrl: r };
}, $a = (e) => e.replaceAll("/", "__"), qr = (e) => e.replaceAll("__", "/"), Qr = ({ domain: e, shortCode: t }) => `${e ?? Je}__${$a(t)}`, za = (e) => {
  const [t, r] = e.split(/__(.+)/);
  if (!r)
    throw new Error(`It was not possible to parse domain and short code from "${e}"`);
  return {
    domain: t === Je ? null : t,
    shortCode: qr(r)
  };
}, Yr = "shlink/shortUrlDeletion", Ln = {
  shortCode: "",
  loading: !1,
  deleted: !1,
  error: !1
}, Gl = (e) => Y(
  `${Yr}/deleteShortUrl`,
  async ({ shortCode: t, domain: r }) => (await e().deleteShortUrl({ shortCode: t, domain: r }), { shortCode: t, domain: r })
), Ka = we(`${Yr}/shortUrlDeleted`), Hl = (e) => {
  const { actions: t, reducer: r } = J({
    name: Yr,
    initialState: Ln,
    reducers: {
      resetDeleteShortUrl: () => Ln
    },
    extraReducers: (o) => {
      o.addCase(
        e.pending,
        (s) => ({ ...s, loading: !0, error: !1, deleted: !1 })
      ), o.addCase(e.rejected, (s, { error: i }) => ({ ...s, errorData: ce(i), loading: !1, error: !0, deleted: !1 })), o.addCase(e.fulfilled, (s, { payload: i }) => ({ ...s, shortCode: i.shortCode, loading: !1, error: !1, deleted: !0 }));
    }
  }), { resetDeleteShortUrl: n } = t;
  return { reducer: r, resetDeleteShortUrl: n };
}, _a = "shlink/shortUrlsList", Wa = 5, jl = {
  loading: !0,
  error: !1
}, $l = (e) => Y(
  `${_a}/listShortUrls`,
  (t) => e().listShortUrls(
    t ?? {}
  )
), zl = (e, t, r) => J({
  name: _a,
  initialState: jl,
  reducers: {},
  extraReducers: (n) => {
    n.addCase(e.pending, (o) => ({ ...o, loading: !0, error: !1 })), n.addCase(e.rejected, () => ({ loading: !1, error: !0 })), n.addCase(
      e.fulfilled,
      (o, { payload: s }) => ({ loading: !1, error: !1, shortUrls: s })
    ), n.addCase(
      r.fulfilled,
      (o, { payload: s }) => {
        o.shortUrls && (o.shortUrls.data = [s, ...o.shortUrls.data.slice(0, Wa - 1)], o.shortUrls.pagination.totalItems += 1);
      }
    ), n.addCase(
      t.fulfilled,
      (o, { payload: s }) => {
        o.shortUrls && (o.shortUrls.data = o.shortUrls.data.map((i) => {
          const { shortCode: c, domain: l } = s;
          return it(i, c, l) ? s : i;
        }));
      }
    ), n.addCase(
      Ka,
      (o, { payload: s }) => {
        o.shortUrls && (o.shortUrls.data = o.shortUrls.data.filter(
          (i) => !it(i, s.shortCode, s.domain)
        ), o.shortUrls.pagination.totalItems -= 1);
      }
    ), n.addCase(
      tt,
      (o, { payload: s }) => {
        o.shortUrls && (o.shortUrls.data = o.shortUrls.data.map(
          // Find the last of the new visit for this ShortUrl, and pick its short URL. It will have an up-to-date
          // amount of visits.
          (i) => s.createdVisits.findLast(
            ({ shortUrl: c }) => c && it(i, c.shortCode, c.domain)
          )?.shortUrl ?? i
        ));
      }
    );
  }
}), Ur = ({ children: e, title: t, link: r, tooltip: n }) => {
  const { anchor: o, tooltip: s } = Pe({ placement: "bottom" });
  return /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ a(dt, { to: r, className: "no-underline text-inherit", ...o, children: /* @__PURE__ */ d(
      q,
      {
        className: P(
          "text-center border-t-3 border-t-lm-main dark:border-t-dm-main relative"
        ),
        children: [
          /* @__PURE__ */ a(
            U,
            {
              icon: Ai,
              size: "3x",
              className: "absolute right-[5px] bottom-[5px] opacity-10 -rotate-45"
            }
          ),
          /* @__PURE__ */ a(
            "div",
            {
              role: "heading",
              "aria-level": 5,
              className: "text-xl uppercase text-placeholder font-bold mb-2",
              children: t
            }
          ),
          /* @__PURE__ */ a("div", { className: "text-4xl font-semibold", children: e })
        ]
      }
    ) }),
    n && /* @__PURE__ */ a(Ae, { ...s, children: n })
  ] });
}, In = ({ loading: e, excludeBots: t, visitsSummary: r, ...n }) => /* @__PURE__ */ a(
  Ur,
  {
    tooltip: r.bots !== void 0 ? /* @__PURE__ */ d(E, { children: [
      t ? "Plus" : "Including",
      " ",
      /* @__PURE__ */ a("b", { "data-testid": "tooltip-amount", children: W(r.bots) }),
      " potential bot visits"
    ] }) : void 0,
    ...n,
    children: e ? "Loading..." : W(
      t && r.nonBots !== void 0 ? r.nonBots : r.total
    )
  }
), kn = ({ children: e, titleLinkText: t, titleLink: r, title: n }) => /* @__PURE__ */ d(Se, { className: "card", children: [
  /* @__PURE__ */ d(Se.Header, { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ a("span", { className: "sm:hidden", children: n }),
    /* @__PURE__ */ a("h5", { className: "hidden sm:inline", children: n }),
    /* @__PURE__ */ d(dt, { to: r, children: [
      t,
      " »"
    ] })
  ] }),
  /* @__PURE__ */ a(Se.Body, { children: e })
] }), Xa = Ce(({
  shortUrlsList: e,
  listShortUrls: t,
  tagsList: r,
  loadVisitsOverview: n,
  visitsOverview: o
}) => {
  const { ShortUrlsTable: s, CreateShortUrl: i } = z(Xa), { loading: c, shortUrls: l } = e, { loading: u } = r, { loading: g, nonOrphanVisits: h, orphanVisits: m } = o, f = Ne(), v = $r(), p = ve("visits");
  return j(() => {
    t({
      itemsPerPage: Wa,
      orderBy: { field: "dateCreated", dir: "DESC" }
    }), n();
  }, [t, n]), /* @__PURE__ */ d("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d("div", { className: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4", children: [
      /* @__PURE__ */ a(
        In,
        {
          title: "Visits",
          link: `${f}/non-orphan-visits`,
          excludeBots: p?.excludeBots ?? !1,
          loading: g,
          visitsSummary: h
        }
      ),
      /* @__PURE__ */ a(
        In,
        {
          title: "Orphan visits",
          link: `${f}/orphan-visits`,
          excludeBots: p?.excludeBots ?? !1,
          loading: g,
          visitsSummary: m
        }
      ),
      /* @__PURE__ */ a(Ur, { title: "Short URLs", link: `${f}/list-short-urls/1`, children: c ? "Loading..." : W(l?.pagination.totalItems ?? 0) }),
      /* @__PURE__ */ a(Ur, { title: "Tags", link: `${f}/manage-tags`, children: u ? "Loading..." : W(r.tags.length) })
    ] }),
    /* @__PURE__ */ a(
      kn,
      {
        title: "Create a short URL",
        titleLinkText: "Advanced options",
        titleLink: `${f}/create-short-url`,
        children: /* @__PURE__ */ a(i, { basicMode: !0 })
      }
    ),
    /* @__PURE__ */ a(
      kn,
      {
        title: "Recently created URLs",
        titleLinkText: "See all",
        titleLink: `${f}/list-short-urls/1`,
        children: /* @__PURE__ */ a(
          s,
          {
            shortUrlsList: e,
            onTagClick: (y) => v(`${f}/list-short-urls/1?tags=${encodeURIComponent(y)}`)
          }
        )
      }
    )
  ] });
}, () => [ge.visits, ge.orphanVisits]), Kl = K(Xa, ["ShortUrlsTable", "CreateShortUrl"]);
function _l(e, t) {
  e.factory("Overview", Kl), e.decorator("Overview", t(
    ["shortUrlsList", "tagsList", "mercureInfo", "visitsOverview"],
    ["listShortUrls", "createNewVisits", "loadMercureInfo", "loadVisitsOverview"]
  ));
}
const qa = "shlink/setShortUrlRedirectRules", Fn = {
  saving: !1,
  saved: !1,
  error: !1
}, Wl = (e) => Y(
  `${qa}/setShortUrlRedirectRules`,
  ({ shortUrl: t, data: r }) => {
    const { shortCode: n, domain: o } = t;
    return e().setShortUrlRedirectRules({ shortCode: n, domain: o }, r);
  }
), Xl = (e) => {
  const { reducer: t, actions: r } = J({
    name: qa,
    initialState: Fn,
    reducers: {
      resetSetRules: () => Fn
    },
    extraReducers: (o) => {
      o.addCase(e.pending, () => ({ saving: !0, saved: !1, error: !1 })), o.addCase(e.rejected, (s, { error: i }) => ({ saving: !1, saved: !1, error: !0, errorData: ce(i) })), o.addCase(e.fulfilled, () => ({ saving: !1, error: !1, saved: !0 }));
    }
  }), { resetSetRules: n } = r;
  return { reducer: t, resetSetRules: n };
}, Qa = "shlink/getShortUrlRedirectRules", ql = {
  loading: !0,
  error: !1
}, Ql = (e) => Y(
  `${Qa}/getShortUrlRedirectRules`,
  ({ shortCode: t, domain: r }) => e().getShortUrlRedirectRules(
    { shortCode: t, domain: r }
  )
), Yl = (e) => J({
  name: Qa,
  initialState: ql,
  reducers: {},
  extraReducers: (t) => {
    t.addCase(e.pending, () => ({ loading: !0, error: !1 })), t.addCase(e.rejected, () => ({ loading: !1, error: !0 })), t.addCase(
      e.fulfilled,
      (r, { payload: n }) => ({ loading: !1, error: !1, ...n })
    );
  }
});
function te(e) {
  e.preventDefault();
}
function Me(e) {
  e.stopPropagation();
}
function Ya() {
  const e = /* @__PURE__ */ new Map();
  return [function(n, o) {
    e.get(n) && e.get(n).forEach((s) => {
      s(o);
    });
  }, function(n, o) {
    const s = e.get(n) ?? [];
    s.push(o), e.set(n, s);
  }];
}
var [Ja, Za] = Ya();
function Jl(e, t) {
  return e.source === t.source && e.flags.split("").sort().join("") === t.flags.split("").sort().join("");
}
function ht(e, t, r = !0, n = ["__key"]) {
  if (e === t) return !0;
  if (typeof t == "object" && typeof e == "object" && e !== null && t !== null) {
    if (e instanceof Map || e instanceof Set) return !1;
    if (e instanceof Date && t instanceof Date)
      return e.getTime() === t.getTime();
    if (e instanceof RegExp && t instanceof RegExp)
      return Jl(e, t);
    if (e === null || t === null) return !1;
    const o = e, s = t;
    if (Object.keys(o).length !== Object.keys(s).length) return !1;
    for (const i of n)
      if ((i in o || i in s) && o[i] !== s[i]) return !1;
    for (const i in o)
      if (!(i in s) || o[i] !== s[i] && !r || r && !ht(o[i], s[i], r, n)) return !1;
    return !0;
  }
  return !1;
}
function eo(e) {
  return e.split(" ").filter((t) => t);
}
function rt(e) {
  return { x: e.clientX, y: e.clientY };
}
Array();
var Jr = typeof window < "u", Z = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap();
function to() {
  if (!Jr) return !1;
  if ("userAgentData" in navigator)
    return navigator.userAgentData.mobile === !0;
  const e = navigator.userAgent, t = /android|iphone|ipod/i.test(e), r = /iPad/.test(e) || e.includes("Macintosh") && navigator.maxTouchPoints > 1;
  return t || r;
}
var Zl = {
  affectedNodes: [],
  coordinates: {
    x: 0,
    y: 0
  },
  currentTargetValue: void 0,
  on: Za,
  emit: Ja,
  originalZIndex: void 0,
  pointerSelection: !1,
  preventEnter: !1,
  rootUserSelect: void 0,
  nodePointerdown: void 0,
  longPress: !1,
  scrolling: !1,
  longPressTimeout: void 0,
  remapJustFinished: !1,
  selectedNodes: [],
  selectedParent: void 0,
  preventSynthDrag: !1,
  pointerDown: void 0,
  lastScrollContainerX: null,
  lastScrollContainerY: null,
  rootScrollWidth: void 0,
  rootScrollHeight: void 0,
  dragItemRect: void 0,
  windowScrollX: void 0,
  windowScrollY: void 0,
  lastScrollDirectionX: void 0,
  lastScrollDirectionY: void 0,
  scrollDebounceTimeout: void 0,
  frameIdX: void 0,
  frameIdY: void 0
}, C = Zl, Le = !1, Pn, fr;
function ec() {
  C.scrollDebounceTimeout && clearTimeout(C.scrollDebounceTimeout), C.longPressTimeout && clearTimeout(C.longPressTimeout), C.frameIdX !== void 0 && cancelAnimationFrame(C.frameIdX), C.frameIdY !== void 0 && cancelAnimationFrame(C.frameIdY), C = { ...{
    affectedNodes: [],
    coordinates: {
      x: 0,
      y: 0
    },
    on: Za,
    emit: Ja,
    currentTargetValue: void 0,
    originalZIndex: void 0,
    pointerId: void 0,
    preventEnter: !1,
    remapJustFinished: !1,
    selectedNodes: [],
    nodePointerdown: void 0,
    rootUserSelect: void 0,
    preventSynthDrag: !1,
    scrolling: !1,
    selectedParent: void 0,
    pointerSelection: !1,
    synthScrollDirection: void 0,
    draggedNodeDisplay: void 0,
    synthDragScrolling: !1,
    longPress: !1,
    pointerDown: void 0,
    longPressTimeout: void 0,
    lastScrollContainerX: null,
    lastScrollContainerY: null,
    rootScrollWidth: void 0,
    rootScrollHeight: void 0,
    dragItemRect: void 0,
    windowScrollX: void 0,
    windowScrollY: void 0,
    lastScrollDirectionX: void 0,
    lastScrollDirectionY: void 0,
    scrollDebounceTimeout: void 0,
    frameIdX: void 0,
    frameIdY: void 0
  } };
}
function ro(e) {
  return Object.assign(C, e), e.initialParent.data.emit("dragStarted", C), Le = !1, C.emit("dragStarted", C), C;
}
function tc() {
  C.activeState && ze(C.activeState.parent, void 0, C), C.selectedState && He(C.selectedState.nodes, C.selectedState.parent, C), C.selectedState = C.activeState = void 0;
}
function rc() {
  if (C.pointerDown && (C.pointerDown.node.el.draggable = !0), C.pointerDown = void 0, !le(C)) return;
  const e = C.currentParent.data.config;
  le(C) && e.handleEnd(C);
}
function nc(e) {
  e.key === "Escape" && (C.selectedState && He(C.selectedState.nodes, C.selectedState.parent, C), C.activeState && ze(C.activeState.parent, void 0, C), C.selectedState = C.activeState = void 0);
}
function ac(e) {
  if (!re(C)) return;
  Le = !0;
  const t = C.initialParent.data.config.handleEnd;
  t(C);
}
function oc(e) {
  if (!re(C)) return;
  te(e);
  const { x: t, y: r } = rt(e);
  re(C) && or({ x: t, y: r }, e, C);
}
function sc(e) {
  if (!C.pointerDown || !C.pointerDown.validated) return;
  const t = C.pointerDown.parent.data.config;
  if (!(e.pointerType === "mouse" && !to()))
    if (le(C))
      le(C) && An(e, C);
    else {
      if (te(e), t.longPress && !C.longPress) {
        clearTimeout(C.longPressTimeout), C.longPress = !1;
        return;
      }
      const r = t.draggedNodes(C.pointerDown);
      t.dragstartClasses(C.pointerDown.node, r, t, !0);
      const n = C.pointerDown.node.el.getBoundingClientRect(), o = Pc(
        C.pointerDown.node,
        C.pointerDown.parent,
        e,
        C,
        r,
        n
      );
      An(e, o, !0);
    }
}
function ic({
  parent: e,
  getValues: t,
  setValues: r,
  config: n = {}
}) {
  if (!Jr) return;
  Pn || (Pn = zt(document, {
    dragover: oc,
    pointerdown: tc,
    pointerup: rc,
    keydown: nc,
    drop: ac,
    pointermove: sc,
    pointercancel: oe(n.handlePointercancel),
    touchmove: (l) => {
      re(C) && l.cancelable && te(l);
    },
    contextmenu: (l) => {
      le(C) && te(l);
    }
  })), ao(e);
  const [o, s] = Ya(), i = {
    getValues: t,
    setValues: r,
    config: {
      dragDropEffect: n.dragDropEffect ?? "move",
      dragEffectAllowed: n.dragEffectAllowed ?? "move",
      draggedNodes: Dc,
      dragstartClasses: wc,
      handleNodeKeydown: bc,
      handleDragstart: xc,
      handleNodeDragover: Mc,
      handleParentDragover: Oc,
      handleNodeDrop: Uc,
      handleNodeFocus: Tc,
      handleNodeBlur: Ec,
      handlePointercancel: Ic,
      handleEnd: kc,
      handleDragend: Lc,
      handleParentFocus: cc,
      handleNodePointerup: Fc,
      handleNodePointerover: Vc,
      handleParentPointerover: Bc,
      handleParentScroll: Sc,
      handleNodePointerdown: Rc,
      handleNodeDragenter: Hc,
      handleNodeDragleave: jc,
      handleParentDrop: uc,
      multiDrag: n.multiDrag ?? !1,
      nativeDrag: n.nativeDrag ?? !0,
      performSort: lc,
      performTransfer: dc,
      root: n.root ?? document,
      setupNode: hc,
      setupNodeRemap: oo,
      reapplyDragClasses: mc,
      tearDownNode: pc,
      tearDownNodeRemap: fc,
      remapFinished: Cc,
      threshold: {
        horizontal: 0,
        vertical: 0
      },
      ...n
    },
    enabledNodes: [],
    abortControllers: {},
    privateClasses: [],
    on: s,
    emit: o
  };
  new MutationObserver(vc).observe(e, { childList: !0 }), Z.set(e, i), n.plugins?.forEach((l) => {
    l(e)?.tearDown?.();
  }), n.plugins?.forEach((l) => {
    l(e)?.tearDown?.();
  }), n.plugins?.forEach((l) => {
    l(e)?.setup?.();
  }), gc(e, i), nr(e, !0);
}
function no(e, t, r, n, o, s) {
  const { x: i, y: c } = rt(r), l = e.el.getBoundingClientRect();
  return {
    affectedNodes: [],
    ascendingDirection: !1,
    clonedDraggedEls: [],
    coordinates: {
      x: i,
      y: c
    },
    draggedNode: {
      el: e.el,
      data: e.data
    },
    draggedNodes: n,
    incomingDirection: void 0,
    initialIndex: e.data.index,
    initialParent: {
      el: t.el,
      data: t.data
    },
    currentParent: {
      el: t.el,
      data: t.data
    },
    longPress: t.data.config.longPress ?? !1,
    longPressTimeout: void 0,
    currentTargetValue: e.data.value,
    scrollEls: [],
    startLeft: o || i - (l?.left ?? 0),
    startTop: s || c - (l?.top ?? 0),
    targetIndex: e.data.index,
    transferred: !1
  };
}
function lc({
  parent: e,
  draggedNodes: t,
  targetNodes: r
}) {
  nr(e.el);
  const n = t.map((l) => l.data.value), o = Ze(e.el, e.data), s = t[0].data.index, i = [...e.data.enabledNodes], c = [
    ...o.filter((l) => !n.some((u) => ht(l, u)))
  ];
  c.splice(r[0].data.index, 0, ...n), "draggedNode" in C && (C.currentTargetValue = r[0].data.value), Tr(e.el, e.data, [...c]), e.data.config.onSort && e.data.config.onSort({
    parent: {
      el: e.el,
      data: e.data
    },
    previousValues: [...o],
    previousNodes: [...i],
    nodes: [...e.data.enabledNodes],
    values: [...c],
    draggedNodes: t,
    previousPosition: s,
    position: r[0].data.index,
    targetNodes: r,
    state: C
  });
}
function ze(e, t, r) {
  if (!t) {
    r.activeState = void 0;
    return;
  }
  r.activeState = {
    node: t,
    parent: e
  };
}
function He(e, t, r) {
  const n = t.data.config.selectedClass;
  if (!r.selectedState) return;
  const o = Array.from(e);
  Te(
    e.map((s) => s.el),
    n
  );
  for (const s of o) {
    s.el.setAttribute("aria-selected", "false");
    const i = r.selectedState.nodes.findIndex((c) => c.el === s.el);
    i !== -1 && r.selectedState.nodes.splice(i, 1);
  }
}
function Lt(e, t, r, n, o = !1) {
  n.pointerSelection = o;
  for (const s of t)
    s.el.setAttribute("aria-selected", "true"), Ye([s.el], e.data.config.selectedClass, !0);
  n.selectedState = {
    nodes: t,
    parent: e
  }, ze(e, r, n);
}
function cc(e, t) {
  const r = e.targetData.parent.data.enabledNodes[0];
  r && (t.selectedState && t.selectedState.parent.el !== e.targetData.parent.el ? ze(e.targetData.parent, r, t) : t.selectedState || ze(e.targetData.parent, r, t));
}
function dc({
  currentParent: e,
  targetParent: t,
  initialParent: r,
  draggedNodes: n,
  initialIndex: o,
  targetNodes: s,
  state: i
}) {
  nr(r.el);
  const c = n.map((m) => m.data.value), l = [
    ...Ze(e.el, e.data).filter(
      (m) => !c.some((f) => ht(m, f))
    )
  ], u = Ze(t.el, t.data), g = r.el === t.el && t.data.config.sortable === !1;
  let h;
  s.length ? (g ? h = o : t.data.config.sortable === !1 ? h = t.data.enabledNodes.length : h = s[0].data.index, u.splice(h, 0, ...c)) : (h = g ? o : t.data.enabledNodes.length, u.splice(h, 0, ...c)), Tr(e.el, e.data, l), Tr(t.el, t.data, u), t.data.config.onTransfer && t.data.config.onTransfer({
    sourceParent: e,
    targetParent: t,
    initialParent: r,
    draggedNodes: n,
    targetIndex: h,
    state: i,
    targetNodes: s
  }), e.data.config.onTransfer && e.data.config.onTransfer({
    sourceParent: e,
    targetParent: t,
    initialParent: r,
    draggedNodes: n,
    targetIndex: h,
    state: i,
    targetNodes: s || []
  });
}
function Ze(e, t) {
  return [...t.getValues(e)];
}
function Tr(e, t, r) {
  t.setValues(r, e);
}
function uc(e, t) {
  Me(e.e), Le = !0;
  const r = t.initialParent.data.config.handleEnd;
  r(t);
}
function ao(e) {
  const t = Z.get(e);
  t && t.abortControllers.mainParent && t.abortControllers.mainParent.abort();
}
function re(e) {
  return "draggedNode" in e && !!e.draggedNode;
}
function le(e) {
  return "synthDragging" in e && !!e.synthDragging;
}
function gc(e, t) {
  t.abortControllers.mainParent = zt(e, {
    dragover: It(t.config.handleParentDragover),
    handleParentPointerover: t.config.handleParentPointerover,
    scroll: It(t.config.handleParentScroll),
    drop: It(t.config.handleParentDrop),
    hasNestedParent: (r) => {
      const n = Z.get(r.target);
      n && (n.nestedParent = r.detail.parent);
    },
    focus: It(t.config.handleParentFocus)
  }), t.config.externalDragHandle && t.config.externalDragHandle.el && t.config.externalDragHandle.callback && (t.abortControllers.externalDragHandle = zt(
    t.config.externalDragHandle.el,
    {
      pointerdown: (r) => {
        if (!t.config.externalDragHandle || !t.config.externalDragHandle.callback)
          return;
        const n = t.config.externalDragHandle.callback();
        if (!sr(n)) {
          console.warn(
            "No draggable item found from external drag handle callback"
          );
          return;
        }
        const o = Re.get(n);
        if (!o) return;
        const s = n.parentNode;
        if (!(s instanceof HTMLElement)) return;
        const i = Z.get(s);
        i && (C.pointerDown = {
          parent: {
            el: s,
            data: i
          },
          node: {
            el: n,
            data: o
          },
          validated: !0
        }, n.draggable = !0);
      }
    }
  ));
}
function hc(e) {
  const t = e.parent.data.config;
  e.node.data.abortControllers.mainNode = zt(e.node.el, {
    keydown: oe(t.handleNodeKeydown),
    dragstart: oe(t.handleDragstart),
    dragover: oe(t.handleNodeDragover),
    dragenter: oe(t.handleNodeDragenter),
    dragleave: oe(t.handleNodeDragleave),
    dragend: oe(t.handleDragend),
    drop: oe(t.handleNodeDrop),
    focus: oe(t.handleNodeFocus),
    blur: oe(t.handleNodeBlur),
    pointerup: oe(t.handleNodePointerup),
    pointercancel: oe(t.handlePointercancel),
    pointerdown: oe(t.handleNodePointerdown),
    handleNodePointerover: t.handleNodePointerover,
    touchmove: (r) => {
      re(C) && r.cancelable && te(r);
    },
    contextmenu: (r) => {
      le(C) && te(r);
    }
  }), e.node.el.draggable = !0, t.reapplyDragClasses(e.node.el, e.parent.data), e.parent.data.config.plugins?.forEach((r) => {
    r(e.parent.el)?.setupNode?.(e);
  });
}
function oo(e) {
  Re.set(e.node.el, e.node.data), e.parent.data.config.plugins?.forEach((t) => {
    t(e.parent.el)?.setupNodeRemap?.(e);
  });
}
function mc(e, t) {
  if (!re(C)) return;
  const r = le(C) ? t.config.synthDropZoneClass : t.config.dropZoneClass;
  C.draggedNode.el === e && Ye([e], r, !0);
}
function fc(e) {
  e.parent.data.config.plugins?.forEach((t) => {
    t(e.parent.el)?.tearDownNodeRemap?.(e);
  });
}
function pc(e) {
  e.parent.data.config.plugins?.forEach((t) => {
    t(e.parent.el)?.tearDownNode?.(e);
  }), e.node.el.draggable = !1, e.node.data?.abortControllers?.mainNode && e.node.data?.abortControllers?.mainNode.abort();
}
function vc(e) {
  if (e.length === 1 && e[0].addedNodes.length === 1 && !(e[0].addedNodes[0] instanceof HTMLElement))
    return;
  const t = e[0].target;
  !(t instanceof HTMLElement) || !Z.get(t) || nr(t);
}
function nr(e, t) {
  const r = Z.get(e);
  if (!r) return;
  r.privateClasses = Array.from(e.classList);
  const n = [], o = r.config;
  for (let c = 0; c < e.children.length; c++) {
    const l = e.children[c];
    if (!sr(l) || l.id === "dnd-dragged-node-clone") continue;
    const u = Re.get(l);
    (t || !u) && o.tearDownNode({
      parent: {
        el: e,
        data: r
      },
      node: {
        el: l,
        data: u
      }
    }), !o.disabled && (!o.draggable || o.draggable && o.draggable(l)) && n.push(l);
  }
  if (n.length !== r.getValues(e).length && !o.disabled) {
    console.warn(
      "The number of draggable items defined in the parent element does not match the number of values. This may cause unexpected behavior."
    );
    return;
  }
  const s = r.getValues(e), i = [];
  for (let c = 0; c < n.length; c++) {
    const l = n[c], u = Re.get(l);
    if (o.draggableValue && !o.draggableValue(s[c])) continue;
    const g = Object.assign(
      u ?? {
        privateClasses: [],
        abortControllers: {}
      },
      {
        value: s[c],
        index: c
      }
    );
    if (!re(C) && C.activeState && ht(C.activeState.node.data.value, g.value) && ze(
      {
        data: r,
        el: e
      },
      {
        el: l,
        data: g
      },
      C
    ), re(C) && ht(C.draggedNode.data.value, g.value)) {
      C.draggedNode.data = g, C.draggedNode.el = l;
      const h = C.draggedNodes.find(
        (m) => m.data.value === g.value
      );
      h && (h.el = l);
    }
    i.push({
      el: l,
      data: g
    }), (t || !u) && o.setupNode({
      parent: {
        el: e,
        data: r
      },
      node: {
        el: l,
        data: g
      }
    }), oo({
      parent: {
        el: e,
        data: r
      },
      node: {
        el: l,
        data: g
      }
    });
  }
  Z.set(e, { ...r, enabledNodes: i }), o.remapFinished(r), r.config.plugins?.forEach((c) => {
    c(e)?.remapFinished?.();
  });
}
function Cc() {
  C.remapJustFinished = !0, "draggedNode" in C && (C.affectedNodes = []);
}
function yc(e) {
  return !!e.targetData.parent.data.config.nativeDrag;
}
function Dc(e) {
  if (e.parent.data.config.multiDrag) {
    if (C.selectedState)
      return [
        e.node,
        ...C.selectedState?.nodes.filter(
          (t) => t.el !== e.node.el
        )
      ];
  } else return [e.node];
  return [];
}
function Sc(e) {
  re(C) && (C.emit("scrollStarted", C), !le(C) && (C.preventEnter = !0, fr && clearTimeout(fr), fr = setTimeout(() => {
    C.preventEnter = !1, C.emit("scrollEnded", C);
  }, 100)));
}
function xc(e, t) {
  const r = e.targetData.parent.data.config;
  if (!r.nativeDrag || !yc(e) || !so({
    x: e.e.clientX,
    y: e.e.clientY,
    node: e.targetData.node,
    config: r
  })) {
    te(e.e);
    return;
  }
  let n = r.draggedNodes({
    parent: e.targetData.parent,
    node: e.targetData.node
  });
  n.length === 0 && (n = [e.targetData.node]), r.dragstartClasses(e.targetData.node, n, r);
  const o = Nc(e, n);
  if (r.onDragstart) {
    const s = {
      parent: e.targetData.parent,
      values: Ze(
        e.targetData.parent.el,
        e.targetData.parent.data
      ),
      draggedNode: o.draggedNode,
      draggedNodes: o.draggedNodes,
      position: o.initialIndex,
      state: o
    };
    r.onDragstart(s);
  }
}
function Rc(e, t) {
  if (Me(e.e), t.pointerDown = {
    parent: e.targetData.parent,
    node: e.targetData.node,
    validated: !1
  }, !so({
    x: e.e.clientX,
    y: e.e.clientY,
    node: e.targetData.node,
    config: e.targetData.parent.data.config
  }))
    return;
  t.pointerDown.validated = !0, Ac(e, t, e.targetData.node);
  const r = e.targetData.parent.data;
  let n = [e.targetData.node];
  const o = e.e.ctrlKey || e.e.metaKey, s = e.e.shiftKey, i = e.targetData.node;
  if (o && r.config.multiDrag) {
    t.selectedState ? t.selectedState.nodes.findIndex(
      (l) => l.el === i.el
    ) === -1 ? n = [...t.selectedState.nodes, i] : n = t.selectedState.nodes.filter(
      (l) => l.el !== i.el
    ) : n = [i], Lt(
      e.targetData.parent,
      n,
      e.targetData.node,
      t,
      !0
    );
    return;
  }
  if (s && r.config.multiDrag) {
    const c = e.targetData.parent.data.enabledNodes;
    if (t.selectedState && t.activeState)
      if (t.selectedState.parent.el !== e.targetData.parent.el) {
        He(t.selectedState.nodes, t.selectedState.parent, t), t.selectedState = void 0;
        for (let l = 0; l <= i.data.index; l++)
          n.push(c[l]);
      } else {
        const [l, u] = t.activeState.node.data.index < e.targetData.node.data.index ? [
          t.activeState.node.data.index,
          e.targetData.node.data.index
        ] : [
          e.targetData.node.data.index,
          t.activeState.node.data.index
        ];
        n = c.slice(l, u + 1);
      }
    else
      for (let l = 0; l <= i.data.index; l++)
        n.push(c[l]);
    Lt(
      e.targetData.parent,
      n,
      e.targetData.node,
      t,
      !0
    );
    return;
  }
  t.selectedState?.nodes?.length ? t.selectedState.nodes.findIndex(
    (l) => l.el === e.targetData.node.el
  ) === -1 && (t.selectedState.parent.el !== e.targetData.parent.el ? He(t.selectedState.nodes, e.targetData.parent, t) : r.config.multiDrag && to() ? n.push(...t.selectedState.nodes) : He(t.selectedState.nodes, e.targetData.parent, t), Lt(
    e.targetData.parent,
    n,
    e.targetData.node,
    t,
    !0
  )) : Lt(
    e.targetData.parent,
    [e.targetData.node],
    e.targetData.node,
    t,
    !0
  );
}
function wc(e, t, r, n = !1) {
  Ye(
    t.map((o) => o.el),
    n ? r.synthDraggingClass : r.draggingClass
  ), setTimeout(() => {
    Te(
      t.map((o) => o.el),
      n ? r.synthDraggingClass : r.draggingClass
    ), Ye(
      t.map((o) => o.el),
      n ? r.synthDragPlaceholderClass : r.dragPlaceholderClass
    ), Ye(
      t.map((o) => o.el),
      n ? r.synthDropZoneClass : r.dropZoneClass
    ), Te(
      t.map((o) => o.el),
      r.selectedClass
    );
  });
}
function Nc(e, t) {
  Me(e.e);
  const r = ro(
    no(
      e.targetData.node,
      e.targetData.parent,
      e.e,
      t
    )
  );
  if (e.e.dataTransfer) {
    const n = e.targetData.parent.data.config;
    e.e.dataTransfer.dropEffect = n.dragDropEffect, e.e.dataTransfer.effectAllowed = n.dragEffectAllowed;
    let o;
    if (e.e.dataTransfer.setData("text/plain", ""), n.dragImage)
      o = n.dragImage(e, t);
    else {
      if (!n.multiDrag || t.length === 1)
        return e.targetData.node.el.style.zIndex = "9999", e.targetData.node.el.style.boxSizing = "border-box", e.e.dataTransfer.setDragImage(
          e.targetData.node.el,
          e.e.offsetX,
          e.e.offsetY
        ), r.originalZIndex = e.targetData.node.el.style.zIndex, r;
      {
        const s = document.createElement("div");
        s.setAttribute("id", "dnd-dragged-node-clone"), s.setAttribute("popover", "manual");
        for (const c of t) {
          const l = c.el.cloneNode(!0);
          l.id = c.el.id + "-clone", l.style.pointerEvents = "none", s.appendChild(l);
        }
        const { width: i } = t[0].el.getBoundingClientRect();
        Object.assign(s.style, {
          display: "flex",
          flexDirection: "column",
          width: `${i}px`,
          position: "absolute",
          pointerEvents: "none",
          zIndex: "9999",
          left: "-9999px",
          boxSizing: "border-box",
          background: "transparent",
          overflow: "hidden"
        }), e.targetData.parent.el.appendChild(s), s.showPopover(), s.getBoundingClientRect(), o = s, e.e.dataTransfer.setDragImage(
          o,
          e.e.offsetX,
          e.e.offsetY
        );
      }
    }
    setTimeout(() => {
      o?.remove();
    });
  }
  return r;
}
function so({
  x: e,
  y: t,
  node: r,
  config: n
}) {
  if (n.externalDragHandle) return !1;
  if (!n.dragHandle) return !0;
  const o = r.el.querySelectorAll(n.dragHandle);
  if (!o) return !1;
  const s = n.root.elementFromPoint(e, t);
  if (!s) return !1;
  for (const i of Array.from(o))
    if (s === i || i.contains(s)) return !0;
  return !1;
}
function bc(e) {
}
function Vc(e) {
  e.detail.targetData.parent.el === e.detail.state.currentParent.el ? lo(e.detail, e.detail.state) : ar(e.detail, e.detail.state);
}
function Uc(e, t) {
  const r = e.targetData.parent.data.config;
  r.nativeDrag && (Me(e.e), Le = !0, r.handleEnd(t));
}
function Tc(e) {
  e.e.target !== e.e.currentTarget && C.pointerDown && (C.pointerDown.node.el.draggable = !1);
}
function Ec(e) {
  e.e.target !== e.e.currentTarget && C.pointerDown && (C.pointerDown.node.el.draggable = !0);
}
function Lc(e, t) {
  const r = e.targetData.parent.data.config;
  if (r.nativeDrag) {
    if (te(e.e), Me(e.e), Le) {
      Le = !1;
      return;
    }
    r.handleEnd(t);
  }
}
function Ic(e, t) {
  if (!le(t)) return;
  if (te(e.e), Le) {
    Le = !1;
    return;
  }
  const r = Z.get(t.initialParent.el)?.config;
  r?.onDragend && r.onDragend({
    parent: t.currentParent,
    values: Ze(t.currentParent.el, t.currentParent.data),
    draggedNode: t.draggedNode,
    draggedNodes: t.draggedNodes,
    state: t
  }), r?.handleEnd(t);
}
function kc(e) {
  e.draggedNode && (e.draggedNode.el.draggable = !0);
  const t = e.draggedNodes.map((g) => g.el), r = e.initialParent.data, n = le(e), o = Z.get(e.initialParent.el)?.config, s = n ? o?.synthDropZoneClass : o?.dropZoneClass, i = r?.config?.longPressClass, c = n ? r?.config?.synthDragPlaceholderClass : r?.config?.dragPlaceholderClass, l = e.originalZIndex;
  le(e) && (e.clonedDraggedNode && e.clonedDraggedNode.remove(), e.longPressTimeout && clearTimeout(e.longPressTimeout)), Er(e), e.lastScrollDirectionX = void 0, e.lastScrollDirectionY = void 0, e.preventEnter = !1, e.scrollDebounceTimeout && (clearTimeout(e.scrollDebounceTimeout), e.scrollDebounceTimeout = void 0), l !== void 0 && e.draggedNode && (e.draggedNode.el.style.zIndex = l), requestAnimationFrame(() => {
    Te(t, s), Te(t, i), Te(t, c);
  }), He(e.draggedNodes, e.currentParent, e), ze(e.currentParent, void 0, e);
  const u = { ...e };
  o?.onDragend?.({
    parent: u.currentParent,
    values: Ze(
      u.currentParent.el,
      u.currentParent.data
    ),
    draggedNode: u.draggedNode,
    draggedNodes: u.draggedNodes,
    state: u
  }), e.emit("dragEnded", u), ec();
}
function Fc(e, t) {
  Me(e.e), !t.pointerSelection && t.selectedState && He(t.selectedState.nodes, e.targetData.parent, t);
  const r = e.targetData.parent.data.config;
  t.pointerSelection = !1, "longPressTimeout" in t && t.longPressTimeout && clearTimeout(t.longPressTimeout), t.longPress = !1, Te(
    e.targetData.parent.data.enabledNodes.map((n) => n.el),
    r.longPressClass
  ), re(t) && r.handleEnd(t);
}
function Pc(e, t, r, n, o, s) {
  const i = t.data.config;
  let c, l;
  const u = [
    "display",
    "flexDirection",
    "alignItems",
    "justifyContent",
    "padding",
    "paddingTop",
    "margin",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "border",
    "borderRadius",
    "background",
    "backgroundColor",
    "boxShadow",
    "font",
    "color",
    "lineHeight",
    "gap",
    "width",
    "height",
    "boxSizing",
    "overflow"
  ], g = (v, p) => {
    const y = window.getComputedStyle(v);
    u.forEach((R) => {
      p.style[R] = y[R];
    });
  }, h = (v, p = {}) => {
    Object.assign(v.style, {
      position: "absolute",
      zIndex: "9999",
      pointerEvents: "none",
      willChange: "transform",
      boxSizing: "border-box",
      opacity: "0",
      overflow: "hidden",
      width: `${s.width}px`,
      height: `${s.height}px`,
      ...p
    });
  };
  if (i.synthDragImage)
    l = i.synthDragImage(e, t, r, o), c = l.dragImage, c.setAttribute("popover", "manual"), h(c);
  else if (!i.multiDrag || o.length === 1)
    c = e.el.cloneNode(!0), g(e.el, c), c.setAttribute("popover", "manual"), h(c);
  else {
    const v = document.createElement("div");
    v.setAttribute("popover", "manual"), o.forEach((p) => {
      const y = p.el.cloneNode(!0);
      g(p.el, y), y.style.pointerEvents = "none", y.style.margin = "0", v.append(y);
    }), v.style.display = "flex", v.style.flexDirection = "column", v.style.padding = "0", v.style.margin = "0", v.style.position = "absolute", v.style.zIndex = "9999", v.style.pointerEvents = "none", c = v;
  }
  c.id = "dnd-dragged-node-clone", t.el.appendChild(c), c.showPopover();
  const m = {
    clonedDraggedEls: [],
    clonedDraggedNode: c,
    synthDragScrolling: !1,
    synthDragging: !0,
    rootScrollWidth: document.scrollingElement?.scrollWidth,
    rootScrollHeight: document.scrollingElement?.scrollHeight
  };
  return ro({
    ...no(
      e,
      t,
      r,
      o,
      l?.offsetX,
      l?.offsetY
    ),
    ...m
  });
}
function Ac(e, t, r) {
  const n = e.targetData.parent.data.config;
  t.longPressTimeout = setTimeout(() => {
    t && (t.longPress = !0, n.longPressClass && e.e.cancelable && Ye([r.el], n.longPressClass), te(e.e));
  }, n.longPressDuration || 1e3);
}
function Er(e, t = !0, r = !0) {
  t && (e.frameIdX !== void 0 && (cancelAnimationFrame(e.frameIdX), e.frameIdX = void 0), e.lastScrollDirectionX = void 0), r && (e.frameIdY !== void 0 && (cancelAnimationFrame(e.frameIdY), e.frameIdY = void 0), e.lastScrollDirectionY = void 0), !e.frameIdX && !e.frameIdY && (e.preventEnter = !1);
}
function io(e, t = !1) {
  const { x: r, y: n } = e.coordinates, o = e.startLeft ?? 0, s = e.startTop ?? 0, i = window.scrollX ?? 0, c = window.scrollY ?? 0, l = r - o + i, u = n - s + c;
  e.clonedDraggedNode.style.transform = `translate3d(${l}px, ${u}px, 0px)`, t && (e.clonedDraggedNode.style.opacity = "1", Te(
    e.draggedNodes.map((g) => g.el),
    e.initialParent.data.config?.longPressClass
  ));
}
function An(e, t, r = !1) {
  const n = rt(e);
  t.coordinates.x = n.x, t.coordinates.y = n.y, io(t, r), t.scrollDebounceTimeout && (clearTimeout(t.scrollDebounceTimeout), t.scrollDebounceTimeout = void 0), t.scrollDebounceTimeout = setTimeout(() => {
    le(t) && or(t.coordinates, e, t);
  }, 16);
  const o = _c(n);
  if (!o) {
    document.dispatchEvent(
      new CustomEvent("handleRootPointerover", {
        detail: {
          e,
          state: t
        }
      })
    );
    return;
  }
  const s = {
    e,
    targetData: o,
    state: t
  };
  "node" in o ? o.node.el.dispatchEvent(
    new CustomEvent("handleNodePointerover", {
      detail: s
    })
  ) : o.parent.el.dispatchEvent(
    new CustomEvent("handleParentPointerover", {
      detail: s
    })
  );
}
function Mc(e, t) {
  if (!e.targetData.parent.data.config.nativeDrag) return;
  const { x: n, y: o } = rt(e.e);
  t.coordinates.y = o, t.coordinates.x = n, te(e.e), Me(e.e), re(t) && or({ x: n, y: o }, e.e, t), e.targetData.parent.el === t.currentParent?.el ? lo(e, t) : ar(e, t);
}
function Oc(e, t) {
  if (!e.targetData.parent.data.config.nativeDrag) return;
  te(e.e), Me(e.e);
  const { x: n, y: o } = rt(e.e);
  re(t) && or({ x: n, y: o }, e.e, t), ar(e, t);
}
function Bc(e) {
  e.detail.targetData.parent.el !== e.detail.state.currentParent.el && ar(e.detail, e.detail.state);
}
function Gc({
  currentParent: e,
  targetParent: t,
  initialParent: r,
  draggedNodes: n,
  state: o
}) {
  if (t.el === e.el) return !1;
  const s = t.data.config;
  if (n[0].el.contains(t.el) || s.dropZone === !1) return !1;
  const i = r.data.config;
  return s.accepts ? s.accepts(
    t,
    r,
    e,
    o
  ) : !(!s.group || s.group !== i.group);
}
function Hc(e, t) {
  te(e.e);
}
function jc(e, t) {
  te(e.e);
}
function $c(e, t, r, n) {
  if (t.affectedNodes.map((g) => g.data.value).includes(e.targetData.node.data.value))
    return !1;
  if (t.remapJustFinished)
    return t.remapJustFinished = !1, (e.targetData.node.data.value === t.currentTargetValue || t.draggedNodes.map((g) => g.el).includes(e.targetData.node.el)) && (t.currentTargetValue = e.targetData.node.data.value), !1;
  if (t.preventEnter) return !1;
  if (t.draggedNodes.map((g) => g.el).includes(e.targetData.node.el))
    return t.currentTargetValue = void 0, !1;
  if (e.targetData.node.data.value === t.currentTargetValue || e.targetData.parent.el !== t.currentParent?.el || e.targetData.parent.data.config.sortable === !1 || e.targetData.node.el.contains(t.draggedNodes[0].el)) return !1;
  const o = e.targetData.node.el.getBoundingClientRect(), s = t.draggedNode.el.getBoundingClientRect(), i = o.y - s.y, c = o.x - s.x;
  let l;
  Math.abs(i) > Math.abs(c) ? l = i > 0 ? "above" : "below" : l = c > 0 ? "left" : "right";
  const u = t.currentParent.data.config.threshold;
  switch (l) {
    case "left":
      if (r > o.x + o.width * u.horizontal)
        return t.incomingDirection = "left", !0;
      break;
    case "right":
      if (r < o.x + o.width * (1 - u.horizontal))
        return t.incomingDirection = "right", !0;
      break;
    case "above":
      if (n > o.y + o.height * u.vertical)
        return t.incomingDirection = "above", !0;
      break;
    case "below":
      if (n < o.y + o.height * (1 - u.vertical))
        return t.incomingDirection = "below", !0;
      break;
  }
  return !1;
}
function lo(e, t) {
  const { x: r, y: n } = rt(e.e);
  if (!$c(e, t, r, n))
    return;
  const o = t.draggedNode.data.index > e.targetData.node.data.index ? [e.targetData.node.data.index, t.draggedNode.data.index] : [t.draggedNode.data.index, e.targetData.node.data.index];
  t.targetIndex = e.targetData.node.data.index, t.affectedNodes = e.targetData.parent.data.enabledNodes.filter(
    (s) => o[0] <= s.data.index && s.data.index <= o[1] && s.el !== t.draggedNode.el
  ), e.targetData.parent.data.config.performSort({
    parent: e.targetData.parent,
    draggedNodes: t.draggedNodes,
    targetNodes: [e.targetData.node]
  });
}
function oe(e) {
  function t(r) {
    const n = Re.get(r);
    if (!n) return;
    const o = Z.get(r.parentNode);
    if (o)
      return {
        node: {
          el: r,
          data: n
        },
        parent: {
          el: r.parentNode,
          data: o
        }
      };
  }
  return (r) => {
    const n = t(r.currentTarget);
    if (n)
      return e(
        {
          e: r,
          targetData: n
        },
        C
      );
  };
}
function ar(e, t) {
  te(e.e), Gc({
    currentParent: t.currentParent,
    targetParent: e.targetData.parent,
    initialParent: t.initialParent,
    draggedNodes: t.draggedNodes,
    state: t
  }) && (e.targetData.parent.data.config.performTransfer({
    currentParent: t.currentParent,
    targetParent: e.targetData.parent,
    initialParent: t.initialParent,
    draggedNodes: t.draggedNodes,
    initialIndex: t.initialIndex,
    state: t,
    targetNodes: "node" in e.targetData ? [e.targetData.node] : []
  }), t.currentParent = e.targetData.parent, t.transferred = !0);
}
function It(e) {
  function t(r) {
    const n = Z.get(r);
    if (n)
      return {
        parent: {
          el: r,
          data: n
        }
      };
  }
  return (r) => {
    const n = t(r.currentTarget);
    if (n)
      return e(
        {
          e: r,
          targetData: n
        },
        C
      );
  };
}
function Ye(e, t, r = !1) {
  function n(o, s) {
    Re.set(o, s);
  }
  for (const o of e) {
    const s = Re.get(o), i = zc(o, t, s, r);
    i && n(o, i);
  }
}
function zc(e, t, r, n = !1) {
  if (!t) return;
  const o = eo(t);
  if (!o.length) return;
  if (!r) {
    e.classList.add(...o);
    return;
  }
  const s = [];
  for (const i of o)
    e.classList.contains(i) ? (
      // Only add to privateClasses if the element already had the class
      // AND omitAppendPrivateClass is specifically false for THIS call.
      e.classList.contains(i) && n === !1 && s.push(i)
    ) : e.classList.add(i);
  return r.privateClasses = s, r;
}
function Te(e, t) {
  if (!t) return;
  const r = eo(t);
  if (r.length)
    for (const n of e) {
      if (!sr(n)) {
        n.classList.remove(...r);
        continue;
      }
      const o = Re.get(n) || Z.get(n);
      if (o)
        for (const s of r)
          o.privateClasses.includes(s) || n.classList.remove(s);
    }
}
function Mn(e, t, r, n, o) {
  const i = o.axis === "x", c = e === document.scrollingElement, l = i ? "scrollLeft" : "scrollTop", u = i ? "clientWidth" : "clientHeight", g = i ? "offsetWidth" : "offsetHeight", h = i ? "scrollWidth" : "scrollHeight", m = i ? t.clientX : t.clientY, f = i ? n.left : n.top, v = i ? r.overflowX : r.overflowY;
  if (c) {
    const p = e[l], y = e[u], R = p > 0, N = p + y < (i ? o.state.rootScrollWidth || 0 : e[h]);
    return i ? {
      left: R && m < y * 0.075,
      right: N && m > y * (1 - 0.075)
    } : {
      up: R && m < y * 0.075,
      down: N && m > y * (1 - 0.075)
    };
  }
  if ((v === "auto" || v === "scroll") && e !== document.body && e !== document.documentElement) {
    const p = e[h], y = e[g], R = e[l], N = R > 0, D = R < p - y;
    return i ? {
      left: N && m < f + y * 0.075,
      right: D && m > f + y * (1 - 0.075)
    } : {
      up: N && m < f + y * 0.075,
      down: D && m > f + y * (1 - 0.075)
    };
  }
  return i ? { left: !1, right: !1 } : { up: !1, down: !1 };
}
function Kc(e, t, r, n) {
  if (!re(r) || !r.draggedNode)
    return;
  r.preventEnter = !0;
  const o = n.axis === "x", s = n.direction === "positive" ? 1 : -1, i = 20, c = o ? "lastScrollDirectionX" : "lastScrollDirectionY", l = o ? "frameIdX" : "frameIdY";
  r[l] !== void 0 && (cancelAnimationFrame(r[l]), r[l] = void 0), r[c] = n.direction;
  const u = () => {
    if (!re(r) || !r.draggedNode) {
      r[l] !== void 0 && (cancelAnimationFrame(r[l]), r[l] = void 0);
      return;
    }
    const g = o ? "scrollLeft" : "scrollTop", h = o ? "clientWidth" : "clientHeight", m = o ? "scrollWidth" : "scrollHeight", f = e[g], v = e[h], p = e[m];
    if (!(s > 0 ? f + v < p : f > 0)) {
      r[l] = void 0, r[c] = void 0;
      return;
    }
    e[g] += i * s, le(r) && io(r), r[l] = requestAnimationFrame(u);
  };
  r[l] = requestAnimationFrame(u);
}
function On(e, t, r) {
  const n = e.getBoundingClientRect();
  return t >= n.left && t <= n.right && r >= n.top && r <= n.bottom;
}
function or(e, t, r) {
  if (!re(r) || !r.draggedNode)
    return;
  Er(r);
  const { x: n, y: o } = e;
  let s = !1;
  const i = (l, u, g) => {
    Kc(g, t, r, { axis: l, direction: u }), s = !0;
  }, c = (l) => {
    const u = window.getComputedStyle(l), g = l.getBoundingClientRect(), h = Mn(l, t, u, g, {
      axis: "x",
      state: r
    }), m = Mn(l, t, u, g, { axis: "y" });
    (h.left || h.right) && (r.lastScrollContainerX = l, i("x", h.right ? "positive" : "negative", l)), (m.up || m.down) && (r.lastScrollContainerY = l, i("y", m.down ? "positive" : "negative", l));
  };
  if (r.lastScrollContainerX && On(r.lastScrollContainerX, n, o) && c(r.lastScrollContainerX), !s && r.lastScrollContainerY && On(r.lastScrollContainerY, n, o) && c(r.lastScrollContainerY), !s) {
    let l = document.elementFromPoint(n, o);
    for (; l && !(s && r.lastScrollContainerX && r.lastScrollContainerY); )
      l instanceof HTMLElement && c(l), l = l.parentElement;
  }
  if (!s) {
    const l = document.scrollingElement;
    l instanceof HTMLElement && c(l);
  }
  s || Er(r);
}
function _c(e) {
  let t = document.elementFromPoint(e.x, e.y);
  if (!sr(t)) return;
  let r, n = !0;
  for (; t && n; ) {
    if (Re.has(t) || Z.has(t)) {
      n = !1, r = Z.has(t);
      break;
    }
    t = t.parentNode;
  }
  if (r) {
    const o = Z.get(t);
    return o ? {
      parent: {
        el: t,
        data: o
      }
    } : void 0;
  } else {
    const o = Re.get(t);
    if (!o) return;
    const s = Z.get(t.parentNode);
    return s ? {
      node: {
        el: t,
        data: o
      },
      parent: {
        el: t.parentNode,
        data: s
      }
    } : void 0;
  }
}
function sr(e) {
  return e instanceof HTMLElement && e.parentNode instanceof HTMLElement;
}
function zt(e, t) {
  const r = new AbortController();
  for (const n in t) {
    const o = t[n];
    e.addEventListener(n, o, {
      signal: r.signal,
      passive: !1,
      capture: n === "focus" || n === "blur"
    });
  }
  return r;
}
function Wc(e) {
  if (e instanceof HTMLElement) return e;
  if ("current" in e && e.current instanceof HTMLElement)
    return e.current;
  console.warn("Invalid parent element", e);
}
function Xc(e, t) {
  const r = Wc(e);
  r && t(r);
}
var Kt = /* @__PURE__ */ new WeakMap();
function qc(e) {
  const t = Kt.get(e);
  return t ? t[0] : (console.warn("No values found for parent element"), []);
}
function Qc(e, t) {
  const r = Kt.get(t);
  r && r[1](e), Kt.set(t, [e, r[1]]);
}
function Yc(e, t) {
  return (r) => {
    Kt.set(r, t), ic({ parent: r, getValues: qc, setValues: Qc, config: e });
  };
}
function Bn(e) {
  Jr && (Array.isArray(e) || (e = [e]), e.forEach((t) => {
    const { parent: r, state: n, ...o } = t;
    Xc(r, Yc(o, n));
  }));
}
function Jc(e, t = {}) {
  const r = ne(null), [n, o] = O(e);
  function s(i = {}) {
    Bn({ parent: r, state: [n, o], ...i });
  }
  return j(() => {
    Bn({ parent: r, state: [n, o], ...t });
  }, [n]), j(() => () => {
    r.current && ao(r.current);
  }, []), [r, n, o, s];
}
const ir = () => {
  const e = $r(), t = Ne(), r = ft(), n = L(
    () => {
      const { orderBy: s, tags: i, excludeBots: c, excludeMaxVisitsReached: l, excludePastValidUntil: u, ...g } = r, h = s ? ks(s) : void 0, m = i?.split(",") ?? [];
      return {
        ...g,
        orderBy: h,
        tags: m,
        excludeBots: c !== void 0 ? c === "true" : void 0,
        excludeMaxVisitsReached: l !== void 0 ? l === "true" : void 0,
        excludePastValidUntil: u !== void 0 ? u === "true" : void 0
      };
    },
    [r]
  ), o = S((s) => {
    const i = { ...n, ...s }, { orderBy: c, tags: l, excludeBots: u, excludeMaxVisitsReached: g, excludePastValidUntil: h, ...m } = i, f = {
      ...m,
      orderBy: c && Fs(c),
      tags: l.length > 0 ? l.join(",") : void 0,
      excludeBots: ur(u),
      excludeMaxVisitsReached: ur(g),
      excludePastValidUntil: ur(h)
    }, v = Fr(f), p = v ? `?${v}` : "";
    e(`${t}/list-short-urls/1${p}`);
  }, [n, e, t]);
  return [n, o];
}, Zr = () => {
  const { domain: e } = ft(), { shortCode: t = "" } = Ct();
  return L(() => ({ shortCode: qr(t), domain: e }), [e, t]);
}, lr = () => {
  const e = Ps();
  return /* @__PURE__ */ a(Pr, { size: "lg", className: "[&]:p-1 mr-4", onClick: e, "aria-label": "Go back", children: /* @__PURE__ */ a(U, { icon: Xs }) });
}, Zc = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  VG: "British Virgin Islands",
  BN: "Brunei",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos Islands",
  CO: "Colombia",
  KM: "Comoros",
  CK: "Cook Islands",
  CR: "Costa Rica",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curacao",
  CY: "Cyprus",
  CZ: "Czech Republic",
  CD: "Democratic Republic of the Congo",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  TL: "East Timor",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  PF: "French Polynesia",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  CI: "Ivory Coast",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  XK: "Kosovo",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Laos",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  KP: "North Korea",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  CG: "Republic of the Congo",
  RE: "Reunion",
  RO: "Romania",
  RU: "Russia",
  RW: "Rwanda",
  BL: "Saint Barthelemy",
  SH: "Saint Helena",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  KR: "South Korea",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syria",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  VI: "U.S. Virgin Islands",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VA: "Vatican",
  VE: "Venezuela",
  VN: "Vietnam",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe"
}, ed = ({ deviceType: e, onDeviceTypeChange: t }) => {
  const r = ue("desktopDeviceTypes"), n = L(() => {
    const o = {
      android: "Android",
      ios: "iOS"
    };
    return r && (o.mobile = "Any mobile device", o.windows = "Windows", o.macos = "MacOS", o.linux = "Linux", o.chromeos = "ChromeOS"), o.desktop = "Any desktop device", o;
  }, [r]);
  return /* @__PURE__ */ d(
    Ar,
    {
      label: "Device type:",
      value: e ?? void 0,
      onChange: (o) => t(o.target.value),
      hiddenRequired: !0,
      children: [
        !e && /* @__PURE__ */ a("option", { value: "", children: "- Select type -" }),
        Object.entries(n).map(([o, s]) => /* @__PURE__ */ a("option", { value: o, children: s }, o))
      ]
    }
  );
}, en = ({
  value: e,
  onValueChange: t,
  label: r,
  placeholder: n
}) => /* @__PURE__ */ a(
  je,
  {
    label: `${r}:`,
    value: e ?? "",
    onChange: (o) => t(o.target.value),
    placeholder: n,
    hiddenRequired: !0
  }
), td = ({
  language: e,
  onLanguageChange: t
}) => /* @__PURE__ */ a(en, { value: e, onValueChange: t, label: "Language", placeholder: "en-US / en" }), pr = ({
  name: e,
  value: t,
  onNameChange: r,
  onValueChange: n
}) => /* @__PURE__ */ d(E, { children: [
  /* @__PURE__ */ a(
    je,
    {
      label: "Param name:",
      value: e ?? "",
      onChange: (o) => r(o.target.value),
      placeholder: "hello",
      hiddenRequired: !0
    }
  ),
  typeof t == "string" && /* @__PURE__ */ a(
    je,
    {
      label: "Param value:",
      value: t,
      onChange: (o) => n(o.target.value),
      placeholder: "world",
      hiddenRequired: !0
    }
  )
] }), rd = ({ ipAddress: e, onIpAddressChange: t }) => /* @__PURE__ */ a(en, { value: e, onValueChange: t, label: "IP address", placeholder: "192.168.1.10" }), nd = ({
  countryCode: e,
  onCountryCodeChange: t
}) => /* @__PURE__ */ d(
  Ar,
  {
    label: "Country:",
    value: e ?? void 0,
    onChange: (r) => t(r.target.value),
    hiddenRequired: !0,
    children: [
      !e && /* @__PURE__ */ a("option", { value: "", children: "- Select country -" }),
      Object.entries(Zc).map(([r, n]) => /* @__PURE__ */ a("option", { value: r, children: n }, r))
    ]
  }
), ad = ({ cityName: e, onCityNameChange: t }) => /* @__PURE__ */ a(en, { value: e, onValueChange: t, label: "City name", placeholder: "New York" }), od = ({ condition: e, onConditionChange: t, onDelete: r }) => {
  const n = S((g) => t({
    type: g,
    matchValue: null,
    matchKey: null
  }), [t]), o = S(
    (g) => t({ ...e, matchValue: g }),
    [e, t]
  ), s = S(
    (g) => t({ ...e, matchKey: g }),
    [e, t]
  ), i = ue("ipRedirectCondition"), c = ue("geolocationRedirectCondition"), l = ue("advancedQueryRedirectConditions"), u = L(() => {
    const g = {
      device: "Device type",
      language: "Language",
      "query-param": "Query param"
    };
    return l && (g["any-value-query-param"] = "Any value query param", g["valueless-query-param"] = "Valueless query param"), i && (g["ip-address"] = "IP address"), c && (g["geolocation-country-code"] = "Country (geolocation)", g["geolocation-city-name"] = "City name (geolocation)"), g;
  }, [l, c, i]);
  return /* @__PURE__ */ d("div", { className: P(
    "flex flex-col gap-2",
    "border border-lm-border dark:border-dm-border",
    "rounded-md relative p-4 h-full"
  ), children: [
    /* @__PURE__ */ d("div", { children: [
      /* @__PURE__ */ a(
        _,
        {
          variant: "secondary",
          "aria-label": "Remove condition",
          onClick: r,
          className: P(
            "absolute -top-3.5 -right-3.5 [&]:px-2",
            "[&]:rounded-full bg-lm-primary dark:bg-dm-primary"
          ),
          children: /* @__PURE__ */ a(U, { icon: Sa, widthAuto: !0 })
        }
      ),
      /* @__PURE__ */ a(
        Ar,
        {
          label: "Type:",
          value: e.type,
          onChange: (g) => n(g.target.value),
          hiddenRequired: !0,
          children: Object.entries(u).map(([g, h]) => /* @__PURE__ */ a("option", { value: g, children: h }, g))
        }
      )
    ] }),
    e.type === "device" && /* @__PURE__ */ a(ed, { deviceType: e.matchValue, onDeviceTypeChange: o }),
    e.type === "language" && /* @__PURE__ */ a(td, { language: e.matchValue, onLanguageChange: o }),
    e.type === "query-param" && /* @__PURE__ */ a(
      pr,
      {
        name: e.matchKey,
        value: e.matchValue ?? "",
        onNameChange: s,
        onValueChange: o
      }
    ),
    e.type === "any-value-query-param" && /* @__PURE__ */ a(
      pr,
      {
        name: e.matchKey,
        onNameChange: s,
        onValueChange: o
      }
    ),
    e.type === "valueless-query-param" && /* @__PURE__ */ a(
      pr,
      {
        name: e.matchKey,
        onNameChange: s,
        onValueChange: o
      }
    ),
    e.type === "ip-address" && /* @__PURE__ */ a(rd, { ipAddress: e.matchValue, onIpAddressChange: o }),
    e.type === "geolocation-country-code" && /* @__PURE__ */ a(nd, { countryCode: e.matchValue, onCountryCodeChange: o }),
    e.type === "geolocation-city-name" && /* @__PURE__ */ a(ad, { cityName: e.matchValue, onCityNameChange: o })
  ] });
}, co = ({ isOpen: e, onClose: t, onSave: r, initialData: n }) => {
  const [o, s] = O(n ?? { longUrl: "", conditions: [] }), i = S(() => {
    o && r(o), t();
  }, [r, o, t]), c = S(() => s(
    ({ longUrl: m, conditions: f }) => ({
      longUrl: m,
      conditions: [...f, { type: "device", matchValue: null, matchKey: null }]
    })
  ), []), l = S((m, f) => s(
    ({ longUrl: v, conditions: p }) => {
      const y = [...p];
      return y[m] = f, { longUrl: v, conditions: y };
    }
  ), []), u = S((m) => s(
    ({ longUrl: f, conditions: v }) => {
      const p = [...v];
      return p.splice(m, 1), { longUrl: f, conditions: p };
    }
  ), []), g = ne(null), h = S(() => s(n ?? { longUrl: "", conditions: [] }), [n]);
  return j(() => {
    const m = new MutationObserver(() => {
      g.current && e && (g.current.focus(), m.disconnect());
    });
    return m.observe(document.body, { childList: !0, subtree: !0 }), () => m.disconnect();
  }, [e]), /* @__PURE__ */ d(
    Fe,
    {
      size: "xl",
      title: "Redirect rule",
      open: e,
      onClose: t,
      onClosed: h,
      onConfirm: i,
      confirmDisabled: o.conditions.length === 0,
      confirmText: "Confirm",
      children: [
        /* @__PURE__ */ a(
          je,
          {
            label: "Long URL:",
            type: "url",
            placeholder: "https://www.example.com",
            value: o.longUrl,
            onChange: (m) => s((f) => ({ ...f, longUrl: m.target.value })),
            hiddenRequired: !0,
            ref: g
          }
        ),
        /* @__PURE__ */ a("hr", {}),
        /* @__PURE__ */ d("div", { className: "flex justify-between", children: [
          /* @__PURE__ */ a("b", { children: "Conditions:" }),
          /* @__PURE__ */ a(_, { className: "[&]:px-1.5", variant: "secondary", "aria-label": "Add condition", onClick: c, children: /* @__PURE__ */ a(U, { icon: Da }) })
        ] }),
        o.conditions.length === 0 && /* @__PURE__ */ a("div", { className: "text-center", children: /* @__PURE__ */ a("i", { children: "Add conditions..." }) }),
        o.conditions.length > 0 && /* @__PURE__ */ a("div", { className: "pr-3 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: o.conditions.map((m, f) => /* @__PURE__ */ a(
          od,
          {
            condition: m,
            onConditionChange: (v) => l(f, v),
            onDelete: () => u(f)
          },
          `${f}_${m.type}`
        )) })
      ]
    }
  );
}, sd = ({ priority: e, isLast: t, redirectRule: r, onDelete: n, onMoveUp: o, onMoveDown: s, onUpdate: i }) => {
  const { flag: c, setToTrue: l, setToFalse: u } = ee();
  return /* @__PURE__ */ d(q, { children: [
    /* @__PURE__ */ d("div", { className: "flex align-center gap-4", children: [
      /* @__PURE__ */ a("div", { className: "flex flex-col my-auto hidden md:block cursor-grab drag-n-drop-handler", children: /* @__PURE__ */ a(U, { icon: qs }) }),
      /* @__PURE__ */ d("div", { className: "flex flex-col my-auto", children: [
        /* @__PURE__ */ a(
          _,
          {
            variant: "secondary",
            "aria-label": `Move rule with priority ${e} up`,
            disabled: e === 1,
            onClick: o,
            className: "[&]:px-2 rounded-b-none mb-[-1px]",
            children: /* @__PURE__ */ a(U, { icon: Qs })
          }
        ),
        /* @__PURE__ */ a(
          _,
          {
            variant: "secondary",
            "aria-label": `Move rule with priority ${e} down`,
            disabled: t,
            onClick: s,
            className: "[&]:px-2 rounded-t-none",
            children: /* @__PURE__ */ a(U, { icon: Ys })
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { className: "grow", children: [
        /* @__PURE__ */ d("div", { className: "mb-2", children: [
          /* @__PURE__ */ a("b", { children: "Long URL:" }),
          " ",
          /* @__PURE__ */ a(pe, { href: r.longUrl, "data-testid": "rule-long-url" })
        ] }),
        /* @__PURE__ */ d("div", { className: "flex flex-col lg:flex-row gap-2", children: [
          /* @__PURE__ */ a("b", { children: "Conditions:" }),
          r.conditions.map((g, h) => /* @__PURE__ */ d(
            "div",
            {
              className: "rounded-sm bg-gray-600 px-1 text-white",
              children: [
                g.type === "device" && /* @__PURE__ */ d(E, { children: [
                  "Device is ",
                  g.matchValue
                ] }),
                g.type === "language" && /* @__PURE__ */ d(E, { children: [
                  g.matchValue,
                  " language is accepted"
                ] }),
                g.type === "query-param" && /* @__PURE__ */ d(E, { children: [
                  "Query string contains ",
                  g.matchKey,
                  "=",
                  g.matchValue
                ] }),
                g.type === "ip-address" && /* @__PURE__ */ d(E, { children: [
                  "IP address matches ",
                  g.matchValue
                ] }),
                g.type === "geolocation-country-code" && /* @__PURE__ */ d(E, { children: [
                  "Country code is ",
                  g.matchValue
                ] }),
                g.type === "geolocation-city-name" && /* @__PURE__ */ d(E, { children: [
                  "City name is ",
                  g.matchValue
                ] })
              ]
            },
            `${g.type}_${h}`
          ))
        ] })
      ] }),
      /* @__PURE__ */ d("div", { className: "flex flex-col sm:flex-row gap-1 my-auto", children: [
        /* @__PURE__ */ a(
          _,
          {
            className: "[&]:px-1.5",
            variant: "secondary",
            "aria-label": `Edit rule with priority ${e}`,
            onClick: l,
            children: /* @__PURE__ */ a(U, { icon: xa })
          }
        ),
        /* @__PURE__ */ a(
          _,
          {
            className: "[&]:px-2",
            variant: "danger",
            "aria-label": `Delete rule with priority ${e}`,
            onClick: n,
            children: /* @__PURE__ */ a(U, { icon: Js })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a(co, { onSave: i, isOpen: c, onClose: u, initialData: r })
  ] });
}, id = ({
  shortUrlRedirectRules: e,
  getShortUrlRedirectRules: t,
  getShortUrlsDetails: r,
  shortUrlsDetails: n,
  setShortUrlRedirectRules: o,
  shortUrlRedirectRulesSaving: s,
  resetSetRules: i
}) => {
  const c = Zr(), { shortUrls: l } = n, u = c && l?.get(c), [g, h, m] = Jc([], {
    dragHandle: ".drag-n-drop-handler",
    dropZoneClass: "opacity-25"
  }), { saving: f, saved: v, errorData: p } = s, { flag: y, setToFalse: R, setToTrue: N } = ee(), D = S((k) => m((b = []) => [...b, k]), [m]), x = S((k) => m((b = []) => {
    const T = [...b];
    return T.splice(k, 1), T;
  }), [m]), F = S((k, b) => m((T = []) => {
    const M = [...T];
    return M[k] = b, M;
  }), [m]), G = S((k, b) => m((T = []) => {
    if (!T[b])
      return T;
    const M = [...T], Q = M[b];
    return M[b] = M[k], M[k] = Q, M;
  }), [m]), A = S((k) => G(k, k - 1), [G]), V = S((k) => G(k, k + 1), [G]), B = S((k) => {
    k.preventDefault(), h && o({
      shortUrl: c,
      data: { redirectRules: h }
    });
  }, [c, h, o]);
  return j(() => (t(c), r([c]), i), [t, r, c, i]), j(() => {
    e.redirectRules && m(e.redirectRules);
  }, [m, e.redirectRules]), /* @__PURE__ */ d("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ a("header", { children: /* @__PURE__ */ d(q, { children: [
      /* @__PURE__ */ d("h2", { className: "sm:flex justify-between items-center", children: [
        /* @__PURE__ */ a(lr, {}),
        /* @__PURE__ */ d("div", { className: "text-center grow", children: [
          n.loading && /* @__PURE__ */ a(E, { children: "Loading..." }),
          !n.loading && /* @__PURE__ */ d("small", { children: [
            "Redirect rules for ",
            /* @__PURE__ */ a(pe, { href: u?.shortUrl ?? "" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a("hr", {}),
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ a("p", { children: "Configure dynamic conditions that will be checked at runtime." }),
        /* @__PURE__ */ d("p", { children: [
          "If no conditions match, visitors will be redirected to: ",
          /* @__PURE__ */ a(pe, { href: e.defaultLongUrl ?? "" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ a("div", { children: /* @__PURE__ */ d(_, { onClick: N, children: [
      /* @__PURE__ */ a(U, { icon: Da }),
      " Add rule"
    ] }) }),
    /* @__PURE__ */ d("form", { onSubmit: B, children: [
      e.loading && /* @__PURE__ */ a($e, { loading: !0 }),
      h.length === 0 && !e.loading && /* @__PURE__ */ a(q, { className: "text-center", children: /* @__PURE__ */ a("i", { children: "This short URL has no dynamic redirect rules" }) }),
      /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", ref: g, children: h.map((k, b) => /* @__PURE__ */ a(
        sd,
        {
          redirectRule: k,
          priority: b + 1,
          isLast: b === h.length - 1,
          onDelete: () => x(b),
          onMoveUp: () => A(b),
          onMoveDown: () => V(b),
          onUpdate: (T) => F(b, T)
        },
        `${k.longUrl}_${b}`
      )) }),
      /* @__PURE__ */ a("div", { className: "text-center mt-4", children: /* @__PURE__ */ a(_, { type: "submit", inline: !0, className: "max-md:w-full", disabled: f, "data-testid": "save-button", children: f ? "Saving..." : "Save rules" }) })
    ] }),
    p && /* @__PURE__ */ a(ie, { variant: "error", children: /* @__PURE__ */ a(
      xe,
      {
        errorData: p,
        fallbackMessage: "An error occurred while saving short URL redirect rules :("
      }
    ) }),
    v && /* @__PURE__ */ a(ie, { variant: "success", children: "Redirect rules properly saved." }),
    /* @__PURE__ */ a(co, { isOpen: y, onClose: R, onSave: D })
  ] });
}, ld = (e, t) => {
  e.serviceFactory("ShortUrlRedirectRules", () => id), e.decorator("ShortUrlRedirectRules", t(
    ["shortUrlRedirectRules", "shortUrlsDetails", "shortUrlRedirectRulesSaving"],
    ["getShortUrlRedirectRules", "getShortUrlsDetails", "setShortUrlRedirectRules", "resetSetRules"]
  )), e.serviceFactory("getShortUrlRedirectRules", Ql, "apiClientFactory"), e.serviceFactory("setShortUrlRedirectRules", Wl, "apiClientFactory"), e.serviceFactory("resetSetRules", (r) => r.resetSetRules, "setShortUrlRedirectRulesReducerCreator"), e.serviceFactory(
    "shortUrlRedirectRulesReducerCreator",
    Yl,
    "getShortUrlRedirectRules"
  ), e.serviceFactory("shortUrlRedirectRulesReducer", (r) => r.reducer, "shortUrlRedirectRulesReducerCreator"), e.serviceFactory(
    "setShortUrlRedirectRulesReducerCreator",
    Xl,
    "setShortUrlRedirectRules"
  ), e.serviceFactory(
    "setShortUrlRedirectRulesReducer",
    (r) => r.reducer,
    "setShortUrlRedirectRulesReducerCreator"
  );
}, cd = ({ creation: e, resetCreateShortUrl: t, canBeClosed: r = !1 }) => {
  const { error: n, saved: o } = e;
  if (j(() => {
    t();
  }, [t]), n)
    return /* @__PURE__ */ d(ie, { variant: "error", className: "mt-4 relative", children: [
      r && /* @__PURE__ */ a("div", { className: "absolute right-1.5 top-1.5", "data-testid": "error-close-button", children: /* @__PURE__ */ a(Rr, { onClick: t }) }),
      /* @__PURE__ */ a(xe, { errorData: e.errorData, fallbackMessage: "An error occurred while creating the URL :(" })
    ] });
  if (!o)
    return null;
  const { shortUrl: s } = e.result;
  return /* @__PURE__ */ d(ie, { variant: "success", className: "mt-4 relative", children: [
    r && /* @__PURE__ */ a("div", { className: "absolute right-1.5 top-1.5", "data-testid": "success-close-button", children: /* @__PURE__ */ a(Rr, { onClick: t }) }),
    /* @__PURE__ */ d("div", { className: "flex items-center justify-center gap-1", children: [
      /* @__PURE__ */ d("span", { children: [
        /* @__PURE__ */ a("b", { children: "Great!" }),
        " The short URL is ",
        /* @__PURE__ */ a("b", { children: s })
      ] }),
      /* @__PURE__ */ a(da, { text: s })
    ] })
  ] });
}, dd = (e) => ({
  longUrl: "",
  tags: [],
  customSlug: "",
  title: void 0,
  shortCodeLength: void 0,
  domain: "",
  validSince: void 0,
  validUntil: void 0,
  maxVisits: void 0,
  findIfExists: !1,
  validateUrl: e?.validateUrls ?? !1,
  forwardQuery: e?.forwardQuery ?? !0
}), uo = ({
  createShortUrl: e,
  shortUrlCreation: t,
  resetCreateShortUrl: r,
  basicMode: n = !1
}) => {
  const { ShortUrlForm: o } = z(uo), s = ve("shortUrlCreation"), i = L(() => dd(s), [s]);
  return /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ a(
      o,
      {
        initialState: i,
        saving: t.saving,
        basicMode: n,
        onSave: async (c) => (r(), e(c))
      }
    ),
    /* @__PURE__ */ a(
      cd,
      {
        creation: t,
        resetCreateShortUrl: r,
        canBeClosed: n
      }
    )
  ] });
}, ud = K(uo, ["ShortUrlForm"]), go = ({ shortUrlsDetails: e, getShortUrlsDetails: t, shortUrlEdition: r, editShortUrl: n }) => {
  const { ShortUrlForm: o } = z(go), s = Zr(), { loading: i, error: c, errorData: l, shortUrls: u } = e, g = s && u?.get(s), { saving: h, saved: m, error: f, errorData: v } = r, p = ve("shortUrlCreation"), y = L(
    () => Bl(g, p),
    [g, p]
  );
  return j(() => {
    s && t([s]);
  }, [t, s]), i ? /* @__PURE__ */ a($e, { loading: !0 }) : c ? /* @__PURE__ */ a(ie, { variant: "error", children: /* @__PURE__ */ a(xe, { errorData: l, fallbackMessage: "An error occurred while loading short URL detail :(" }) }) : /* @__PURE__ */ d("div", { className: "flex flex-col gap-y-4", children: [
    /* @__PURE__ */ a("header", { children: /* @__PURE__ */ a(q, { children: /* @__PURE__ */ d("h2", { className: "sm:flex items-center", children: [
      /* @__PURE__ */ a(lr, {}),
      /* @__PURE__ */ a("div", { className: "text-center grow", children: /* @__PURE__ */ d("small", { children: [
        "Edit ",
        /* @__PURE__ */ a(pe, { href: g?.shortUrl ?? "" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ a(
      o,
      {
        initialState: y,
        saving: h,
        onSave: async (R) => {
          g && n({ ...g, data: R });
        }
      }
    ),
    m && f && /* @__PURE__ */ a(ie, { variant: "error", children: /* @__PURE__ */ a(xe, { errorData: v, fallbackMessage: "An error occurred while updating short URL :(" }) }),
    m && !f && /* @__PURE__ */ a(ie, { variant: "success", children: "Short URL properly edited." })
  ] });
}, gd = K(go, ["ShortUrlForm"]), vr = "delete", hd = ({
  shortUrl: e,
  onClose: t,
  isOpen: r,
  shortUrlDeletion: n,
  resetDeleteShortUrl: o,
  deleteShortUrl: s,
  shortUrlDeleted: i
}) => {
  const [c, l] = O("");
  j(() => o, [o]);
  const { loading: u, error: g, deleted: h, errorData: m } = n, f = S(() => {
    o(), t();
  }, [o, t]), v = S(
    () => s(e).then((p) => !Kr(p) && t()),
    [s, e, t]
  );
  return /* @__PURE__ */ a(
    Fe,
    {
      open: r,
      title: "Delete short URL",
      variant: "danger",
      confirmText: u ? "Deleting..." : "Delete",
      confirmDisabled: c !== vr || u,
      onConfirm: v,
      onClose: f,
      onClosed: () => h && i(e),
      children: /* @__PURE__ */ d("div", { className: "flex flex-col gap-y-2", children: [
        /* @__PURE__ */ d("p", { children: [
          /* @__PURE__ */ a("b", { className: "text-danger", children: "Caution!" }),
          " You are about to delete a short URL."
        ] }),
        /* @__PURE__ */ a("p", { children: "This action cannot be undone. Once you have deleted it, all the visits stats will be lost." }),
        /* @__PURE__ */ a(
          je,
          {
            label: /* @__PURE__ */ d(E, { children: [
              "Type ",
              /* @__PURE__ */ a("b", { children: vr }),
              " to confirm deletion."
            ] }),
            type: "text",
            placeholder: vr,
            value: c,
            onChange: (p) => l(p.target.value),
            onKeyDown: (p) => p.key === "Enter" && v()
          }
        ),
        g && /* @__PURE__ */ a(ie, { variant: vl(m) ? "warning" : "error", size: "sm", className: "mt-2", children: /* @__PURE__ */ a(xe, { errorData: m, fallbackMessage: "Something went wrong while deleting the URL :(" }) })
      ] })
    }
  );
}, ho = ({ amount: e = 0, loading: t = !1, ...r }) => (
  // @ts-expect-error We are explicitly excluding "to" prop
  /* @__PURE__ */ d(_, { ...r, disabled: t, solid: !Ke(), children: [
    /* @__PURE__ */ a(U, { icon: Zs }),
    " ",
    t ? "Exporting..." : /* @__PURE__ */ d(E, { children: [
      "Export (",
      W(e),
      ")"
    ] })
  ] })
), Gn = 20, mo = ({ amount: e = 0 }) => {
  const { apiClientFactory: t, ReportExporter: r } = z(mo), [{ tags: n, search: o, startDate: s, endDate: i, orderBy: c, tagsMode: l }] = ir(), { flag: u, setToTrue: g, setToFalse: h } = ee(), m = S(async () => {
    const f = e / Gn, v = async (y = 1) => {
      const { data: R } = await t().listShortUrls(
        { page: `${y}`, tags: n, searchTerm: o, startDate: s, endDate: i, orderBy: c, tagsMode: l, itemsPerPage: Gn }
      );
      return y >= f ? R : R.concat(await v(y + 1));
    };
    g();
    const p = await v();
    r.exportShortUrls(p.map((y) => {
      const { hostname: R, pathname: N } = new URL(y.shortUrl), D = N.substring(1);
      return {
        createdAt: y.dateCreated,
        domain: R,
        shortCode: D,
        shortUrl: y.shortUrl,
        longUrl: y.longUrl,
        title: y.title ?? "",
        tags: y.tags.join("|"),
        visits: y?.visitsSummary?.total ?? y.visitsCount ?? 0
      };
    })), h();
  }, [
    e,
    t,
    i,
    c,
    r,
    o,
    s,
    g,
    h,
    n,
    l
  ]);
  return /* @__PURE__ */ a(ho, { loading: u, className: "max-lg:w-full", amount: e, onClick: m });
}, md = K(mo, ["apiClientFactory", "ReportExporter"]), fd = "yyyy-MM-dd", fo = "yyyy-MM-dd HH:mm", Ie = () => /* @__PURE__ */ new Date(), tn = (e) => typeof e != "string", rn = (e, t) => !e || !tn(e) ? e : t ? Ht(e, t) : Bi(e), ke = (e) => rn(e, void 0), Ue = (e) => rn(e, fd), mt = (e) => rn(e, fo), se = (e) => tn(e) ? e : Ee(e), yt = (e, t, r) => {
  const n = se(e), o = t && se(t), s = r && se(r);
  if (o && s)
    try {
      return Gi(n, { start: o, end: s });
    } catch {
      return !1;
    }
  return o ? br(n, o) || Hi(n, o) : s ? br(n, s) || jt(n, s) : !0;
}, Be = (e, t) => br(e, t) || jt(e, t), _t = ({ date: e, format: t = fo, relative: r = !1 }) => {
  const n = tn(e) ? e : Ee(e);
  return /* @__PURE__ */ a("time", { dateTime: `${$i(n)}000`, children: r ? `${ji(Ie(), n)} ago` : Ht(n, t) });
}, po = (e, { shortCode: t, domain: r }, n) => {
  const o = r ? `?domain=${r}` : "";
  return `${e}/short-code/${$a(t)}/${n}${o}`;
}, vo = ({ shortUrl: e, suffix: t, asLink: r, children: n, ...o }) => {
  const s = Ne();
  return !r || !e ? /* @__PURE__ */ a("span", { ...o, children: n }) : /* @__PURE__ */ a(dt, { to: po(s, e, t), ...o, children: n });
}, pd = (e) => {
  const { meta: t, visitsCount: r, visitsSummary: n } = e, { maxVisits: o, validSince: s, validUntil: i } = t, c = n?.total ?? r ?? 0;
  return o && c >= o ? {
    icon: ei,
    className: "text-danger",
    description: `This short URL cannot be currently visited because it has reached the maximum amount of ${o} visit${o > 1 ? "s" : ""}`
  } : i && jt(se(i), Ie()) ? {
    icon: Sn,
    className: "text-danger",
    description: `This short URL cannot be visited since ${mt(se(i))}`
  } : s && jt(Ie(), se(s)) ? {
    icon: Sn,
    className: "text-warning",
    description: `This short URL will start working on ${mt(se(s))}`
  } : {
    icon: ct,
    className: "text-lm-brand dark:text-dm-brand",
    description: "This short URL can be visited normally"
  };
}, vd = ({ shortUrl: e }) => {
  const { icon: t, className: r, description: n } = L(() => pd(e), [e]);
  return /* @__PURE__ */ a("span", { className: "cursor-help", title: n, children: /* @__PURE__ */ a(U, { icon: t, className: r }) });
}, Co = ({ visitsCount: e, shortUrl: t, active: r = !1, asLink: n = !1 }) => {
  const { anchor: o, tooltip: s } = Pe(), { maxVisits: i, validSince: c, validUntil: l } = t?.meta ?? {}, u = !!i || !!c || !!l, g = /* @__PURE__ */ a(vo, { shortUrl: t, suffix: "visits", asLink: n, children: /* @__PURE__ */ a("strong", { className: P("inline-block transition-all duration-300", { "scale-150": r }), children: W(e) }) });
  return u ? /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ d("span", { className: "whitespace-nowrap", children: [
      g,
      /* @__PURE__ */ d("small", { className: "cursor-help", ...o, children: [
        i && /* @__PURE__ */ d(E, { children: [
          " / ",
          W(i)
        ] }),
        /* @__PURE__ */ a("sup", { className: "ml-1", children: /* @__PURE__ */ a(U, { icon: er }) })
      ] })
    ] }),
    /* @__PURE__ */ a(Ae, { ...s, children: /* @__PURE__ */ d("ul", { className: "flex flex-col gap-y-2", children: [
      i && /* @__PURE__ */ d("li", { children: [
        "This short URL will not accept more than ",
        /* @__PURE__ */ a("b", { children: W(i) }),
        " visit",
        i === 1 ? "" : "s",
        "."
      ] }),
      c && /* @__PURE__ */ d("li", { children: [
        "This short URL will not accept visits before ",
        /* @__PURE__ */ a("b", { className: "whitespace-nowrap", children: mt(se(c)) }),
        "."
      ] }),
      l && /* @__PURE__ */ d("li", { children: [
        "This short URL will not accept visits after ",
        /* @__PURE__ */ a("b", { className: "whitespace-nowrap", children: mt(se(l)) }),
        "."
      ] })
    ] }) })
  ] }) : g;
}, et = ({ className: e, ...t }) => /* @__PURE__ */ a(
  "button",
  {
    type: "button",
    className: P("rounded-sm focus-ring cursor-pointer", e),
    ...t
  }
), Cd = (e) => !!e.onClose, yd = (e) => !!e.onClick, nn = (e) => {
  const { text: t, children: r, className: n, colorGenerator: o } = e, s = yd(e), i = Cd(e), c = s ? et : "span", l = L(() => o.stylesForKey(t), [t, o]);
  return /* @__PURE__ */ d(
    c,
    {
      className: P(
        "inline-flex items-center gap-1",
        "font-bold [&]:rounded-md",
        {
          "text-sm px-1.5 py-0.5": !i,
          "py-1 px-2": i,
          "cursor-pointer": s
        },
        n
      ),
      style: l,
      onClick: s ? e.onClick : void 0,
      "data-testid": "tag",
      children: [
        r ?? t,
        i && /* @__PURE__ */ a(
          et,
          {
            "aria-label": `Remove ${t}`,
            className: "p-0 text-lg leading-5.5",
            onClick: e.onClose,
            children: /* @__PURE__ */ a(U, { icon: Ca, size: "sm" })
          }
        )
      ]
    }
  );
}, Dd = ({ tags: e, onTagClick: t, colorGenerator: r }) => e.length === 0 ? /* @__PURE__ */ a("i", { className: "whitespace-nowrap", children: /* @__PURE__ */ a("small", { children: "No tags" }) }) : /* @__PURE__ */ a("div", { className: "inline-flex flex-wrap gap-1 items-center", children: e.map((n) => /* @__PURE__ */ a(
  nn,
  {
    text: n,
    colorGenerator: r,
    onClick: () => t?.(n)
  },
  n
)) }), yo = ({ shortUrl: e, onTagClick: t }) => {
  const { ShortUrlsRowMenu: r, ColorGenerator: n, useTimeoutToggle: o } = z(yo), [s, i] = o({ initialValue: !1, delay: 500 }), c = ne(!0), [{ excludeBots: l }] = ir(), u = ve("visits"), g = l ?? u?.excludeBots;
  return j(() => {
    c.current || i(), c.current = !1;
  }, [e.visitsSummary?.total, e.visitsSummary?.nonBots, e.visitsCount, i]), /* @__PURE__ */ d(w.Row, { className: "relative", children: [
    /* @__PURE__ */ a(w.Cell, { className: "whitespace-nowrap", columnName: "Created at:", children: /* @__PURE__ */ a(_t, { date: e.dateCreated }) }),
    /* @__PURE__ */ a(w.Cell, { columnName: "Short URL:", children: /* @__PURE__ */ d("span", { className: "lg:whitespace-nowrap inline-flex items-center gap-x-2", children: [
      /* @__PURE__ */ a(pe, { href: e.shortUrl, className: "max-md:break-all lg:truncate max-w-72" }),
      /* @__PURE__ */ a(da, { text: e.shortUrl })
    ] }) }),
    /* @__PURE__ */ a(w.Cell, { className: "break-all", columnName: `${e.title ? "Title" : "Long URL"}:`, children: /* @__PURE__ */ a(pe, { href: e.longUrl, children: e.title ?? e.longUrl }) }),
    e.title && /* @__PURE__ */ a(w.Cell, { className: "break-all [&]:lg:hidden", columnName: "Long URL:", children: /* @__PURE__ */ a(pe, { href: e.longUrl }) }),
    /* @__PURE__ */ a(w.Cell, { columnName: "Tags:", children: /* @__PURE__ */ a(Dd, { tags: e.tags, colorGenerator: n, onTagClick: t }) }),
    /* @__PURE__ */ a(w.Cell, { className: "lg:text-right", columnName: "Visits:", children: /* @__PURE__ */ a(
      Co,
      {
        visitsCount: (g ? e.visitsSummary?.nonBots : e.visitsSummary?.total) ?? e.visitsCount ?? 0,
        shortUrl: e,
        active: s,
        asLink: !0
      }
    ) }),
    /* @__PURE__ */ a(w.Cell, { columnName: "Status:", className: "max-lg:border-none", children: /* @__PURE__ */ d("div", { className: "inline-flex gap-2", children: [
      /* @__PURE__ */ a(vd, { shortUrl: e }),
      e.hasRedirectRules && /* @__PURE__ */ a(
        vo,
        {
          asLink: !0,
          shortUrl: e,
          suffix: "redirect-rules",
          title: "This short URL has dynamic redirect rules",
          children: /* @__PURE__ */ a(U, { icon: Ra })
        }
      )
    ] }) }),
    /* @__PURE__ */ a(w.Cell, { className: "text-right max-lg:absolute max-lg:top-1 max-lg:right-1 max-lg:p-0", children: /* @__PURE__ */ a(r, { shortUrl: e }) })
  ] });
}, Sd = K(
  yo,
  ["ShortUrlsRowMenu", "ColorGenerator", "useTimeoutToggle"]
), Do = Gr(
  ({ name: e, color: t, onChange: r, className: n }, o) => /* @__PURE__ */ d(
    "div",
    {
      className: P("relative rounded w-12", n),
      style: { backgroundColor: t, borderColor: t },
      children: [
        /* @__PURE__ */ a(
          fe,
          {
            className: "w-full h-full cursor-pointer relative z-1 opacity-0",
            type: "color",
            value: t,
            onChange: (s) => r(s.target.value),
            ref: o,
            name: e,
            "aria-label": e.replace("-", " ")
          }
        ),
        /* @__PURE__ */ a(
          U,
          {
            icon: ti,
            className: "absolute top-1/2 left-1/2 -translate-1/2",
            style: { color: ua(t.substring(1)) ? "#000" : "#fff" }
          }
        )
      ]
    }
  )
), Hn = ({ color: e, onChange: t, name: r }) => {
  const n = ne(null);
  return /* @__PURE__ */ d("div", { className: "flex", children: [
    /* @__PURE__ */ a(
      Do,
      {
        name: `${r}-picker`,
        color: e,
        onChange: t,
        className: "rounded-r-none",
        ref: n
      }
    ),
    /* @__PURE__ */ a(
      fe,
      {
        readOnly: !0,
        value: e,
        onClick: () => n.current?.click(),
        "aria-label": r,
        "data-testid": "text-input",
        className: "grow rounded-l-none"
      }
    )
  ] });
};
function xd(e) {
  switch (e) {
    case "L":
      return 1;
    case "M":
      return 0.5;
    default:
      return 0.3;
  }
}
const Rd = Gr(({
  data: e,
  color: t = "#000000",
  bgColor: r = "#ffffff",
  margin: n = 0,
  errorCorrection: o = "L",
  size: s = 300,
  drawType: i = "canvas",
  logo: c
}, l) => {
  const u = ne(null), g = ne(new Yi()), h = S(
    (f, v) => g.current.download({ name: f, extension: v }),
    []
  ), m = S((f) => new Promise((v, p) => {
    const y = g.current.getRawData(f), R = new FileReader();
    R.onload = () => {
      const { result: N } = R;
      N && v(N.toString());
    }, R.onerror = p, y.then((N) => {
      N instanceof Blob ? R.readAsDataURL(N) : p(new Error("QR code image blob not available"));
    });
  }), []);
  return Di(l, () => ({ download: h, getDataUri: m }), [h, m]), j(() => {
    const f = u.current;
    g.current.append(f);
  }, []), j(() => {
    g.current.update({
      type: i,
      data: e,
      width: s + n,
      height: s + n,
      margin: n,
      dotsOptions: { color: t },
      backgroundOptions: { color: r },
      qrOptions: { errorCorrectionLevel: o },
      imageOptions: {
        margin: 5,
        imageSize: xd(o)
      },
      image: c
    });
  }, [r, t, e, i, o, c, n, s]), /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ a(
      "style",
      {
        dangerouslySetInnerHTML: { __html: "#qr-code-canvas-container canvas { max-width: 100% }" }
      }
    ),
    /* @__PURE__ */ a("div", { ref: u, id: "qr-code-canvas-container" })
  ] });
}), wd = async ({ text: e, onCopy: t }, r = navigator) => {
  const n = typeof e == "string" ? e : await e;
  return r.clipboard?.writeText(n).then(() => t?.({ text: n, copied: !0 })).catch(() => t?.({ text: n, copied: !1 }));
}, jn = ({ name: e, value: t, step: r, min: n, max: o, onChange: s }) => {
  const i = Hr();
  return /* @__PURE__ */ d("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ d("label", { htmlFor: i, className: "capitalize", children: [
      e,
      ": ",
      t,
      "px"
    ] }),
    /* @__PURE__ */ a(
      "input",
      {
        id: i,
        type: "range",
        value: t,
        step: r,
        min: n,
        max: o,
        onChange: (c) => s(Number(c.target.value))
      }
    )
  ] });
}, Nd = ({ shortUrl: { shortUrl: e, shortCode: t }, onClose: r, isOpen: n, qrDrawType: o }) => {
  const s = ve("qrCodes", xi), [{ size: i, margin: c, color: l, bgColor: u, errorCorrection: g, format: h }, m] = O(s), f = S(
    (V) => m((B) => ({ ...B, ...V })),
    []
  ), v = ne(null), [p, y] = O(), R = S((V) => {
    const B = V.target.files?.[0];
    B && y({
      url: URL.createObjectURL(new Blob([B], { type: B.type })),
      name: B.name
    });
  }, []), N = ne(null), D = S(
    () => N.current?.download(`${t}-qr-code`, h),
    [h, t]
  ), [x, F] = ga({}), G = S(() => {
    const V = N.current?.getDataUri(h) ?? "";
    return wd({ text: V, onCopy: F });
  }, [h, F]), A = S(() => {
    m(s), y(void 0);
  }, [s]);
  return /* @__PURE__ */ a(
    Fe,
    {
      size: "lg",
      open: n,
      onClose: r,
      title: /* @__PURE__ */ d(E, { children: [
        "QR code for ",
        /* @__PURE__ */ a(pe, { href: e })
      ] }),
      onClosed: A,
      children: /* @__PURE__ */ d("div", { className: "flex flex-col-reverse lg:flex-row gap-4", children: [
        /* @__PURE__ */ a("div", { className: "grow flex items-center justify-around", children: /* @__PURE__ */ d("div", { className: "flex flex-col gap-1 items-center", "data-testid": "qr-code-container", children: [
          /* @__PURE__ */ a(
            Rd,
            {
              ref: N,
              data: e,
              size: i,
              margin: c,
              errorCorrection: g,
              color: l,
              bgColor: u,
              logo: p?.url,
              drawType: o
            }
          ),
          /* @__PURE__ */ d("div", { className: "italic", children: [
            "Preview (",
            i + c,
            "x",
            i + c,
            ")"
          ] })
        ] }) }),
        /* @__PURE__ */ d("div", { className: "flex flex-col gap-2 lg:w-64", children: [
          /* @__PURE__ */ a(
            jn,
            {
              name: "size",
              value: i,
              onChange: (V) => f({ size: V }),
              step: 10,
              min: 50,
              max: 1e3
            }
          ),
          /* @__PURE__ */ a(
            jn,
            {
              name: "margin",
              value: c,
              onChange: (V) => f({ margin: V }),
              step: 1,
              min: 0,
              max: 100
            }
          ),
          /* @__PURE__ */ a(
            Ri,
            {
              errorCorrection: g,
              onChange: (V) => f({ errorCorrection: V })
            }
          ),
          /* @__PURE__ */ a(Hn, { name: "color", color: l, onChange: (V) => f({ color: V }) }),
          /* @__PURE__ */ a(Hn, { name: "background", color: u, onChange: (V) => f({ bgColor: V }) }),
          !p && /* @__PURE__ */ d(E, { children: [
            /* @__PURE__ */ d(_, { variant: "secondary", onClick: () => v.current?.click(), children: [
              /* @__PURE__ */ a(U, { icon: Mi }),
              "Select logo"
            ] }),
            /* @__PURE__ */ a(
              "input",
              {
                ref: v,
                type: "file",
                accept: "image/*",
                "aria-hidden": !0,
                tabIndex: -1,
                className: "hidden",
                onChange: R,
                "data-testid": "logo-input"
              }
            )
          ] }),
          p && /* @__PURE__ */ d(_, { variant: "secondary", onClick: () => y(void 0), children: [
            /* @__PURE__ */ a(U, { icon: Sa }),
            /* @__PURE__ */ d("div", { className: "truncate", children: [
              "Clear logo (",
              p.name,
              ")"
            ] })
          ] }),
          /* @__PURE__ */ a("div", { className: "my-auto", children: /* @__PURE__ */ a("hr", { className: "my-2" }) }),
          /* @__PURE__ */ d("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ a(wi, { format: h, onChange: (V) => f({ format: V }) }),
            /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ a(_, { onClick: G, "aria-label": "Copy data URI", title: "Copy data URI", className: "h-full", children: /* @__PURE__ */ a(U, { icon: x ? ct : Oi }) }),
              /* @__PURE__ */ d(_, { solid: !0, onClick: D, className: "grow", children: [
                "Download ",
                /* @__PURE__ */ a(U, { icon: ri })
              ] })
            ] })
          ] })
        ] })
      ] })
    }
  );
}, So = ({ shortUrl: e, deleteShortUrl: t, shortUrlDeleted: r }) => {
  const { DeleteShortUrlModal: n } = z(So), { flag: o, setToTrue: s, setToFalse: i } = ee(), { flag: c, setToTrue: l, setToFalse: u } = ee(), g = rr(), h = ue("shortUrlRedirectRules"), { confirmDeletions: m = !0 } = ve("shortUrlsList", {}), f = S(async () => {
    const y = await t(e);
    Kr(y) || r(e);
  }, [t, e, r]), v = Ne(), p = S(
    (y) => po(v, e, y),
    [v, e]
  );
  return /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ d(X, { menuAlignment: "right", children: [
      /* @__PURE__ */ d(X.Item, { to: p("visits"), className: "gap-1.5", children: [
        /* @__PURE__ */ a(U, { icon: Or }),
        " Visit stats"
      ] }),
      g && /* @__PURE__ */ d(E, { children: [
        /* @__PURE__ */ d(
          X.Item,
          {
            className: "gap-1.5",
            disabled: !g.canAddItemWithName(e.shortUrl),
            onClick: () => g.addItemToCompare({
              name: e.shortUrl,
              query: Qr(e)
            }),
            children: [
              /* @__PURE__ */ a(U, { icon: Zt }),
              " Compare visits"
            ]
          }
        ),
        /* @__PURE__ */ a(X.Separator, {})
      ] }),
      /* @__PURE__ */ d(X.Item, { to: p("edit"), className: "gap-1.5", children: [
        /* @__PURE__ */ a(U, { icon: ya }),
        " Edit short URL"
      ] }),
      h && /* @__PURE__ */ d(X.Item, { to: p("redirect-rules"), className: "gap-1.5", children: [
        /* @__PURE__ */ a(U, { icon: Ra }),
        " Manage redirect rules"
      ] }),
      /* @__PURE__ */ d(X.Item, { onClick: s, className: "gap-1.5", children: [
        /* @__PURE__ */ a(U, { icon: ni }),
        " QR code"
      ] }),
      /* @__PURE__ */ a(X.Separator, {}),
      /* @__PURE__ */ d(
        X.Item,
        {
          className: "[&]:text-danger gap-1.5",
          onClick: m ? l : f,
          children: [
            /* @__PURE__ */ a(U, { icon: ai }),
            " Delete short URL"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ a(Nd, { shortUrl: e, isOpen: o, onClose: i }),
    /* @__PURE__ */ a(
      n,
      {
        shortUrl: e,
        deleteShortUrl: t,
        shortUrlDeleted: r,
        isOpen: c,
        onClose: u
      }
    )
  ] });
}, bd = K(So, ["DeleteShortUrlModal"]), xo = "shlink/shortUrlCreation", $n = {
  saving: !1,
  saved: !1,
  error: !1
}, Vd = (e) => Y(
  `${xo}/createShortUrl`,
  (t) => e().createShortUrl(t)
), Ud = (e) => {
  const { reducer: t, actions: r } = J({
    name: xo,
    initialState: $n,
    // Without this casting it infers type ShortUrlCreationWaiting
    reducers: {
      resetCreateShortUrl: () => $n
    },
    extraReducers: (o) => {
      o.addCase(e.pending, () => ({ saving: !0, saved: !1, error: !1 })), o.addCase(
        e.rejected,
        (s, { error: i }) => ({ saving: !1, saved: !1, error: !0, errorData: ce(i) })
      ), o.addCase(
        e.fulfilled,
        (s, { payload: i }) => ({ result: i, saving: !1, saved: !0, error: !1 })
      );
    }
  }), { resetCreateShortUrl: n } = r;
  return {
    reducer: t,
    resetCreateShortUrl: n
  };
}, Ro = "shlink/shortUrlEdition", Td = {
  saving: !1,
  saved: !1,
  error: !1
}, Ed = (e) => Y(
  `${Ro}/editShortUrl`,
  ({ shortCode: t, domain: r, data: n }) => e().updateShortUrl({ shortCode: t, domain: r }, n)
), Ld = (e) => J({
  name: Ro,
  initialState: Td,
  reducers: {},
  extraReducers: (t) => {
    t.addCase(e.pending, (r) => ({ ...r, saving: !0, error: !1, saved: !1 })), t.addCase(
      e.rejected,
      (r, { error: n }) => ({ ...r, saving: !1, error: !0, saved: !1, errorData: ce(n) })
    ), t.addCase(
      e.fulfilled,
      (r, { payload: n }) => ({ shortUrl: n, saving: !1, error: !1, saved: !0 })
    );
  }
}), zn = "shlink/shortUrlsDetails", Kn = {
  loading: !1,
  error: !1
}, Id = (e) => {
  const t = Y(
    `${zn}/getShortUrlsDetails`,
    async (n, { getState: o }) => {
      const { shortUrlsList: s } = o(), i = await Promise.all(n.map(
        async (c) => {
          const { shortCode: l, domain: u } = c, g = s?.shortUrls?.data.find((h) => it(h, l, u));
          return [c, g ?? await e().getShortUrl({ shortCode: l, domain: u })];
        }
      ));
      return new Map(i);
    }
  ), { reducer: r } = J({
    name: zn,
    initialState: Kn,
    reducers: {},
    extraReducers: (n) => {
      n.addCase(t.pending, () => ({ loading: !0, error: !1 })), n.addCase(t.rejected, (o, { error: s }) => ({ loading: !1, error: !0, errorData: ce(s) })), n.addCase(t.fulfilled, (o, { payload: s }) => ({ ...Kn, shortUrls: s }));
    }
  });
  return { reducer: r, getShortUrlsDetails: t };
}, kd = ({ domains: e, value: t, onChange: r }) => {
  const { flag: n, setToTrue: o, setToFalse: s } = ee(), i = !t, c = S(() => {
    r(""), s();
  }, [r, s]), l = S(() => {
    r(""), o();
  }, [r, o]);
  return n ? /* @__PURE__ */ d("div", { className: "flex", children: [
    /* @__PURE__ */ a(
      fe,
      {
        value: t ?? "",
        placeholder: "Domain",
        onChange: (u) => r(u.target.value),
        className: "flex-grow rounded-r-none [&]:border-r-0"
      }
    ),
    /* @__PURE__ */ a(
      _,
      {
        variant: "secondary",
        type: "button",
        className: "rounded-l-none",
        "aria-label": "Back to domains list",
        title: "Existing domains",
        onClick: c,
        children: /* @__PURE__ */ a(U, { icon: oi })
      }
    )
  ] }) : /* @__PURE__ */ d(
    I,
    {
      buttonContent: i ? "Domain" : `Domain: ${t}`,
      buttonClassName: P("w-full", { "text-placeholder": i }),
      children: [
        e.map(({ domain: u, isDefault: g }) => /* @__PURE__ */ d(
          I.Item,
          {
            selected: (t === u || g) && i,
            onClick: () => r(u),
            className: "flex justify-between items-center",
            children: [
              u,
              g && /* @__PURE__ */ a(Ni, { children: "default" })
            ]
          },
          u
        )),
        /* @__PURE__ */ a(I.Separator, {}),
        /* @__PURE__ */ a(I.Item, { onClick: l, children: /* @__PURE__ */ a("i", { children: "New domain" }) })
      ]
    }
  );
}, Cr = ({ icon: e, className: t, ...r }) => {
  const n = ne(null);
  return /* @__PURE__ */ d("div", { className: "relative", children: [
    /* @__PURE__ */ a(fe, { className: P("pr-11", t), ref: n, ...r }),
    /* @__PURE__ */ a(
      U,
      {
        icon: e,
        className: "absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer",
        onClick: () => n.current?.focus()
      }
    )
  ] });
}, Fd = ({ minDate: e, maxDate: t, value: r, onChange: n, withTime: o = !1, ...s }) => {
  const i = S(
    ({ target: l }) => {
      if (!l.value) {
        n?.(null);
        return;
      }
      n?.(se(l.value));
    },
    [n]
  ), c = L(() => o ? mt : Ue, [o]);
  return /* @__PURE__ */ a(
    fe,
    {
      ...s,
      type: o ? "datetime-local" : "date",
      value: c(r) ?? "",
      max: c(t) ?? void 0,
      min: c(e) ?? void 0,
      onChange: i
    }
  );
}, Wt = ({ label: e, id: t, ...r }) => {
  const n = Hr();
  return /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ d("label", { htmlFor: t ?? n, className: "mb-1", children: [
      e,
      ":"
    ] }),
    /* @__PURE__ */ a(Fd, { id: t ?? n, ...r })
  ] });
}, Pd = ({ className: e, placement: t, children: r }) => {
  const { anchor: n, tooltip: o } = Pe({ placement: t });
  return /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ a("span", { className: e, ...n, "data-placement": t, "data-testid": "tooltip-anchor", children: /* @__PURE__ */ a(U, { icon: er }) }),
    /* @__PURE__ */ a(Ae, { ...o, children: r })
  ] });
}, yr = ({ children: e, infoTooltip: t, checked: r, onChange: n }) => /* @__PURE__ */ d("div", { className: "flex items-center gap-x-2", children: [
  /* @__PURE__ */ d(ha, { className: "inline-flex items-center gap-x-1.5", children: [
    /* @__PURE__ */ a(ma, { checked: r, onChange: n }),
    e
  ] }),
  /* @__PURE__ */ a(Pd, { placement: "right", children: t })
] }), Ad = (e) => /* @__PURE__ */ a(Fe, { ...e, title: "Info", size: "lg", children: /* @__PURE__ */ d("div", { className: "flex flex-col gap-y-2", children: [
  /* @__PURE__ */ d("p", { children: [
    "When the ",
    /* @__PURE__ */ a("b", { children: /* @__PURE__ */ a("i", { children: '"Use existing URL if found"' }) }),
    " checkbox is checked, the server will return an existing short URL if it matches provided params."
  ] }),
  /* @__PURE__ */ a("p", { children: "These are the checks performed by Shlink in order to determine if an existing short URL should be returned:" }),
  /* @__PURE__ */ d("ul", { className: "list-disc pl-5", children: [
    /* @__PURE__ */ a("li", { children: "When only the long URL is provided: The most recent match will be returned, or a new short URL will be created if none is found." }),
    /* @__PURE__ */ d("li", { children: [
      "When long URL and custom slug and/or domain are provided: Same as in previous case, but it will try to match the short URL using both the long URL and the slug, the long URL and the domain, or the three of them.",
      /* @__PURE__ */ a("br", {}),
      "If the slug is being used by another long URL, an error will be returned."
    ] }),
    /* @__PURE__ */ a("li", { children: "When other params are provided: Same as in previous cases, but it will try to match existing short URLs with all provided data. If any of them does not match, a new short URL will be created" })
  ] })
] }) }), Md = () => {
  const { flag: e, setToFalse: t, setToTrue: r } = ee();
  return /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ a(et, { title: "What does this mean?", onClick: r, children: /* @__PURE__ */ a(U, { icon: er }) }),
    /* @__PURE__ */ a(Ad, { open: e, onClose: t })
  ] });
}, kt = (e) => typeof e == "string" ? Ee(e) : e, Od = (e) => "shortCodeLength" in e && "customSlug" in e && "domain" in e, wo = ({ basicMode: e = !1, saving: t, onSave: r, initialState: n, tagsList: o, domainsList: s }) => {
  const { TagsSelector: i } = z(wo), [c, l] = O(n), u = Od(c), g = ue("deviceLongUrls"), h = ue("urlValidation"), m = h || u, f = S(() => l(n), [n]), v = S((D, x) => Ge(D) ? D : Ge(x) ? null : void 0, []), p = S(
    (D, x) => l(({ deviceLongUrls: F = {}, ...G }) => ({
      ...G,
      deviceLongUrls: {
        ...F,
        [D]: v(x, n.deviceLongUrls?.[D])
      }
    })),
    [n.deviceLongUrls, v]
  ), y = S((D) => l((x) => ({ ...x, tags: D })), []), R = S(async (D) => (D.preventDefault(), r(c).then((x) => u && !Kr(x) && f()).catch(() => {
  })), [u, r, f, c]), N = L(() => /* @__PURE__ */ d("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ a(
      fe,
      {
        size: "lg",
        type: "url",
        placeholder: "URL to be shortened",
        required: !0,
        value: c.longUrl,
        onChange: (D) => l((x) => ({ ...x, longUrl: D.target.value }))
      }
    ),
    /* @__PURE__ */ d("div", { className: "flex flex-col lg:flex-row gap-4", children: [
      e && u && /* @__PURE__ */ a("div", { className: "w-full lg:w-1/2", children: /* @__PURE__ */ a(
        fe,
        {
          size: "lg",
          placeholder: "Custom slug",
          value: c.customSlug ?? "",
          onChange: (D) => l((x) => ({ ...x, customSlug: D.target.value }))
        }
      ) }),
      /* @__PURE__ */ a("div", { className: P("w-full", { "lg:w-1/2": e }), children: /* @__PURE__ */ a(i, { tags: o.tags, selectedTags: c.tags ?? [], onChange: y }) })
    ] })
  ] }), [i, e, y, u, c, o.tags]);
  return /* @__PURE__ */ d("form", { name: "shortUrlForm", onSubmit: R, className: "flex flex-col gap-4", children: [
    e && N,
    !e && /* @__PURE__ */ d(E, { children: [
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ a("div", { className: P({ "sm:w-1/2": g, "w-full": !g }), children: /* @__PURE__ */ a(q, { title: "Main options", className: "card", children: N }) }),
        g && /* @__PURE__ */ a("div", { className: "w-full sm:w-1/2", children: /* @__PURE__ */ d(
          q,
          {
            title: "Device-specific long URLs",
            bodyClassName: "flex flex-col gap-y-4",
            className: "card",
            children: [
              /* @__PURE__ */ a(
                Cr,
                {
                  type: "url",
                  icon: Ji,
                  placeholder: "Android-specific redirection",
                  value: c.deviceLongUrls?.android ?? "",
                  onChange: ({ target: D }) => p("android", D.value)
                }
              ),
              /* @__PURE__ */ a(
                Cr,
                {
                  type: "url",
                  icon: Zi,
                  placeholder: "iOS-specific redirection",
                  value: c.deviceLongUrls?.ios ?? "",
                  onChange: ({ target: D }) => p("ios", D.value)
                }
              ),
              /* @__PURE__ */ a(
                Cr,
                {
                  type: "url",
                  icon: si,
                  placeholder: "Desktop-specific redirection",
                  value: c.deviceLongUrls?.desktop ?? "",
                  onChange: ({ target: D }) => p("desktop", D.value)
                }
              )
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ d("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ a("div", { className: "w-full sm:w-1/2", children: /* @__PURE__ */ d(
          q,
          {
            title: "Customize the short URL",
            bodyClassName: "flex flex-col gap-4",
            className: "card h-full",
            children: [
              /* @__PURE__ */ a(
                fe,
                {
                  placeholder: "Title",
                  value: c.title ?? "",
                  onChange: ({ target: D }) => l((x) => ({
                    ...x,
                    title: v(D.value, n.title)
                  }))
                }
              ),
              u && /* @__PURE__ */ d(E, { children: [
                /* @__PURE__ */ d("div", { className: "flex flex-col lg:flex-row gap-4", children: [
                  /* @__PURE__ */ a("div", { className: "lg:w-1/2", children: /* @__PURE__ */ a(
                    fe,
                    {
                      placeholder: "Slug personalitzat",
                      value: c.customSlug ?? "",
                      onChange: (D) => l((x) => ({ ...x, customSlug: D.target.value })),
                      disabled: Ge(c.shortCodeLength)
                    }
                  ) }),
                  /* @__PURE__ */ a("div", { className: "lg:w-1/2", children: /* @__PURE__ */ a(
                    fe,
                    {
                      type: "number",
                      placeholder: "Short code length",
                      value: c.shortCodeLength ?? "",
                      onChange: (D) => l((x) => ({ ...x, shortCodeLength: D.target.value })),
                      min: 4,
                      disabled: Ge(c.customSlug)
                    }
                  ) })
                ] }),
                /* @__PURE__ */ a(
                  kd,
                  {
                    value: c.domain,
                    onChange: (D) => l((x) => ({ ...x, domain: D })),
                    domains: s.domains
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ a("div", { className: "w-full sm:w-1/2", children: /* @__PURE__ */ d(
          q,
          {
            title: "Limit access to the short URL",
            className: "card h-full",
            bodyClassName: "flex flex-col gap-y-4",
            children: [
              /* @__PURE__ */ d("div", { className: "flex flex-col lg:flex-row gap-4", children: [
                /* @__PURE__ */ a("div", { className: "lg:w-1/2", children: /* @__PURE__ */ a(
                  Wt,
                  {
                    label: "Enabled since",
                    withTime: !0,
                    maxDate: c.validUntil ? kt(c.validUntil) : void 0,
                    value: c.validSince ? kt(c.validSince) : null,
                    onChange: (D) => l((x) => ({ ...x, validSince: ke(D) }))
                  }
                ) }),
                /* @__PURE__ */ a("div", { className: "lg:w-1/2", children: /* @__PURE__ */ a(
                  Wt,
                  {
                    label: "Enabled until",
                    withTime: !0,
                    minDate: c.validSince ? kt(c.validSince) : void 0,
                    value: c.validUntil ? kt(c.validUntil) : null,
                    onChange: (D) => l((x) => ({ ...x, validUntil: ke(D) }))
                  }
                ) })
              ] }),
              /* @__PURE__ */ a(
                je,
                {
                  label: "Maximum visits allowed:",
                  type: "number",
                  min: 1,
                  placeholder: "25...",
                  value: c.maxVisits ?? "",
                  onChange: (D) => l((x) => ({
                    ...x,
                    maxVisits: Ge(D.target.value) ? Number(D.target.value) : null
                  }))
                }
              )
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ d("div", { className: "flex flex-col sm:flex-row gap-4", children: [
        m && /* @__PURE__ */ a("div", { className: "w-full sm:w-1/2", children: /* @__PURE__ */ d(q, { title: "Extra checks", className: "h-full", children: [
          h && /* @__PURE__ */ a(
            yr,
            {
              infoTooltip: "If checked, Shlink will try to reach the long URL, failing in case it's not publicly accessible.",
              checked: c.validateUrl,
              onChange: (D) => l((x) => ({ ...x, validateUrl: D })),
              children: "Validate URL"
            }
          ),
          u && /* @__PURE__ */ d("p", { className: "inline-flex items-center gap-x-2", children: [
            /* @__PURE__ */ d(ha, { className: "inline-flex items-center gap-x-1.5", children: [
              /* @__PURE__ */ a(
                ma,
                {
                  checked: c.findIfExists,
                  onChange: (D) => l((x) => ({ ...x, findIfExists: D }))
                }
              ),
              "Use existing URL if found"
            ] }),
            /* @__PURE__ */ a(Md, {})
          ] })
        ] }) }),
        /* @__PURE__ */ a("div", { className: P("w-full", { "sm:w-1/2": m }), children: /* @__PURE__ */ d(q, { title: "Configure behavior", children: [
          /* @__PURE__ */ a(
            yr,
            {
              infoTooltip: "This short URL will be included in the robots.txt for your Shlink instance, allowing web crawlers (like Google) to index it.",
              checked: c.crawlable,
              onChange: (D) => l((x) => ({ ...x, crawlable: D })),
              children: "Make it crawlable"
            }
          ),
          /* @__PURE__ */ a(
            yr,
            {
              infoTooltip: "When this short URL is visited, any query params appended to it will be forwarded to the long URL.",
              checked: c.forwardQuery,
              onChange: (D) => l((x) => ({ ...x, forwardQuery: D })),
              children: "Forward query params on redirect"
            }
          )
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "text-center", children: /* @__PURE__ */ a(_, { type: "submit", inline: !0, solid: !0, disabled: t || !c.longUrl, className: "max-md:w-full", children: t ? "Saving..." : "Save" }) })
  ] });
}, Bd = K(wo, ["TagsSelector"]), Gd = ({ startDate: e, endDate: t, disabled: r = !1, onStartDateChange: n, onEndDateChange: o }) => /* @__PURE__ */ d("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4", children: [
  /* @__PURE__ */ a("div", { className: "flex flex-col", children: /* @__PURE__ */ a(
    Wt,
    {
      label: "Since",
      value: e,
      maxDate: t ?? void 0,
      disabled: r,
      onChange: n
    }
  ) }),
  /* @__PURE__ */ a("div", { className: "flex flex-col", children: /* @__PURE__ */ a(
    Wt,
    {
      label: "Until",
      value: t,
      minDate: e ?? void 0,
      disabled: r,
      onChange: (s) => o(s && ut(s))
    }
  ) })
] }), cr = "all", No = {
  today: "Today",
  yesterday: "Yesterday",
  last7Days: "Last 7 days",
  last30Days: "Last 30 days",
  last90Days: "Last 90 days",
  last180Days: "Last 180 days",
  last365Days: "Last 365 days",
  [cr]: void 0
}, bo = Object.keys(No), Hd = (e) => !e || !e.startDate && !e.endDate, Xt = (e) => typeof e == "string" && bo.includes(e), jd = bo.filter((e) => e !== cr), _n = (e) => e ? se(e) : null, Vo = (e, t) => ({
  startDate: _n(e),
  endDate: _n(t)
}), $d = (e) => {
  if (!(!e || Hd(e)))
    return e.startDate && !e.endDate ? `Since ${Ue(e.startDate)}` : !e.startDate && e.endDate ? `Until ${Ue(e.endDate)}` : `${Ue(e.startDate)} - ${Ue(e.endDate)}`;
}, Wn = (e) => {
  if (!(!e || e === cr))
    return Xt(e) ? No[e] : $d(e);
}, de = (e) => gt($t(Ie(), e)), qe = (e) => ({ startDate: e, endDate: ut(Ie()) }), Uo = (e) => [
  [() => e === "today", () => qe(gt(Ie()))],
  [() => e === "yesterday", () => ({ startDate: de(1), endDate: ut($t(Ie(), 1)) })],
  [() => e === "last7Days", () => qe(de(7))],
  [() => e === "last30Days", () => qe(de(30))],
  [() => e === "last90Days", () => qe(de(90))],
  [() => e === "last180Days", () => qe(de(180))],
  [() => e === "last365Days", () => qe(de(365))]
].find(([r]) => r())?.[1]() ?? {}, zd = (e) => {
  const t = se(e);
  return [
    [() => Be(gt(Ie()), t), "today"],
    [() => Be(de(1), t), "yesterday"],
    [() => Be(de(7), t), "last7Days"],
    [() => Be(de(30), t), "last30Days"],
    [() => Be(de(90), t), "last90Days"],
    [() => Be(de(180), t), "last180Days"],
    [() => Be(de(365), t), "last365Days"]
  ].find(([n]) => n())?.[1] ?? cr;
}, To = (e) => Xt(e) ? Uo(e) : e, Eo = (e) => !!(e && e.startDate), Kd = ({ startDate: e, endDate: t }) => {
  const n = Ea(ut(t ?? /* @__PURE__ */ new Date()), gt(e)) + 1, o = $t(gt(e), n), s = $t(ut(e), 1);
  return { startDate: o, endDate: s };
}, _d = (e) => {
  if (Eo(e))
    return Ea(e.endDate ?? /* @__PURE__ */ new Date(), e.startDate);
}, an = ({ onDatesChange: e, dateRangeOrInterval: t, defaultText: r, disabled: n }) => {
  const o = L(
    () => Wn(t) ?? r,
    [t, r]
  ), [s, i] = L(() => Xt(t) ? [void 0, t] : [t, void 0], [t]), c = S((l) => {
    Xt(l) ? e(Uo(l), l) : e(l);
  }, [e]);
  return /* @__PURE__ */ d(
    I,
    {
      buttonDisabled: n,
      buttonContent: o,
      containerClassName: "[&]:block",
      buttonClassName: "w-full",
      children: [
        /* @__PURE__ */ a(I.Item, { selected: i === "all", onClick: () => c("all"), children: r }),
        /* @__PURE__ */ a(I.Separator, {}),
        jd.map(
          (l) => /* @__PURE__ */ a(
            I.Item,
            {
              selected: i === l,
              onClick: () => c(l),
              children: Wn(l)
            },
            l
          )
        ),
        /* @__PURE__ */ a(I.Separator, {}),
        /* @__PURE__ */ a(I.Misc, { children: /* @__PURE__ */ a(
          Gd,
          {
            ...s,
            onStartDateChange: (l) => c({ ...s, startDate: l }),
            onEndDateChange: (l) => c({ ...s, endDate: l })
          }
        ) })
      ]
    }
  );
}, Wd = {
  dateCreated: "Created at",
  shortCode: "Short URL",
  longUrl: "Long URL",
  title: "Title",
  visits: "Visits"
}, Xd = ({ onChange: e, selected: t = {}, domains: r }) => {
  const n = ue("filterShortUrlsByDomain"), { excludeBots: o = !1, excludeMaxVisitsReached: s = !1, excludePastValidUntil: i = !1, domain: c } = t, l = S(
    (g) => e({ ...t, ...g }),
    [e, t]
  ), u = S(
    (g) => l({ [g]: !t?.[g] }),
    [l, t]
  );
  return /* @__PURE__ */ d(I, { buttonContent: "Filters", buttonClassName: "w-full", menuAlignment: "right", children: [
    /* @__PURE__ */ a(I.Title, { children: "Visits:" }),
    /* @__PURE__ */ a(I.Item, { selected: o, onClick: () => u("excludeBots"), children: "Ignore visits from bots" }),
    /* @__PURE__ */ a(I.Separator, {}),
    /* @__PURE__ */ a(I.Title, { children: "Short URLs:" }),
    /* @__PURE__ */ a(I.Item, { selected: s, onClick: () => u("excludeMaxVisitsReached"), children: "Exclude with visits reached" }),
    /* @__PURE__ */ a(I.Item, { selected: i, onClick: () => u("excludePastValidUntil"), children: "Exclude enabled in the past" }),
    n && /* @__PURE__ */ d(E, { children: [
      /* @__PURE__ */ a(I.Separator, {}),
      /* @__PURE__ */ d(I.Title, { children: [
        "Domain: ",
        !r && /* @__PURE__ */ a("i", { children: "loading..." })
      ] }),
      r?.map((g) => {
        const h = g.isDefault ? Je : g.domain, m = c === h;
        return /* @__PURE__ */ a(
          I.Item,
          {
            selected: m,
            onClick: () => l({ domain: m ? void 0 : h }),
            children: g.domain
          },
          g.domain
        );
      })
    ] }),
    /* @__PURE__ */ a(I.Separator, {}),
    /* @__PURE__ */ a(
      I.Item,
      {
        disabled: t.excludeBots === void 0 && t.excludeMaxVisitsReached === void 0 && t.excludePastValidUntil === void 0 && t.domain === void 0,
        onClick: () => e({
          excludeBots: void 0,
          excludeMaxVisitsReached: void 0,
          excludePastValidUntil: void 0,
          domain: void 0
        }),
        className: "italic",
        children: "Reset to defaults"
      }
    )
  ] });
}, Lo = ({ className: e, shortUrlsAmount: t, order: r, handleOrderBy: n, tagsList: o, domainsList: s }) => {
  const { ExportShortUrlsBtn: i, TagsSelector: c } = z(Lo), [{
    search: l,
    tags: u,
    startDate: g,
    endDate: h,
    excludeBots: m,
    excludeMaxVisitsReached: f,
    excludePastValidUntil: v,
    domain: p,
    tagsMode: y = "any"
  }, R] = ir(), N = ve("visits"), [D, x] = O(), F = S(
    ({ startDate: b, endDate: T }, M) => {
      R({
        startDate: ke(b) ?? void 0,
        endDate: ke(T) ?? void 0
      }), x(M);
    },
    [R]
  ), G = S(
    (b) => R({ search: b || void 0 }),
    [R]
  ), A = S((b) => R({ tags: b }), [R]), V = S(
    () => R({ tagsMode: y === "any" ? "all" : "any" }),
    [y, R]
  ), { anchor: B, tooltip: k } = Pe({ placement: "left" });
  return /* @__PURE__ */ d("div", { className: P("flex flex-col gap-y-4", e), children: [
    /* @__PURE__ */ a(Yt, { defaultValue: l, onChange: G }),
    /* @__PURE__ */ d("div", { className: "flex w-full", children: [
      /* @__PURE__ */ a("div", { className: "flex-grow", children: /* @__PURE__ */ a(
        c,
        {
          immutable: !0,
          placeholder: "With tags...",
          tags: o.tags,
          selectedTags: u,
          onChange: A,
          containerClassName: P(u.length > 1 && "[&]:rounded-r-none")
        }
      ) }),
      u.length > 1 && /* @__PURE__ */ d(E, { children: [
        /* @__PURE__ */ a(
          _,
          {
            variant: "secondary",
            onClick: V,
            "aria-label": "Change tags mode",
            className: "[&]:border-l-none [&]:rounded-l-none",
            ...B,
            children: /* @__PURE__ */ a(U, { className: "text-2xl", icon: y === "all" ? wa : ii })
          }
        ),
        /* @__PURE__ */ a(Ae, { ...k, children: y === "all" ? /* @__PURE__ */ d(E, { children: [
          "With ",
          /* @__PURE__ */ a("b", { children: "all" }),
          " the tags"
        ] }) : /* @__PURE__ */ d(E, { children: [
          "With ",
          /* @__PURE__ */ a("b", { children: "any" }),
          " of the tags"
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ d("div", { className: "flex flex-col lg:flex-row-reverse gap-y-4", children: [
      /* @__PURE__ */ d("div", { className: "lg:w-2/3 xl:w-1/2 inline-flex flex-col md:flex-row gap-4", children: [
        /* @__PURE__ */ a("div", { className: "grow", children: /* @__PURE__ */ a(
          an,
          {
            defaultText: "All short URLs",
            dateRangeOrInterval: D ?? Vo(g, h),
            onDatesChange: F
          }
        ) }),
        /* @__PURE__ */ a(
          Xd,
          {
            selected: {
              excludeBots: m ?? N?.excludeBots,
              excludeMaxVisitsReached: f,
              excludePastValidUntil: v,
              domain: p
            },
            onChange: R,
            domains: s.loading ? void 0 : s.domains
          }
        )
      ] }),
      /* @__PURE__ */ d("div", { className: "lg:w-1/3 xl:w-1/2 inline-flex gap-3", children: [
        /* @__PURE__ */ a("div", { className: "max-lg:w-1/2 lg:hidden", children: /* @__PURE__ */ a(
          Mr,
          {
            containerClassName: "[&]:block",
            buttonClassName: "w-full",
            prefixed: !1,
            items: Wd,
            order: r,
            onChange: ({ field: b, dir: T }) => n(b, T)
          }
        ) }),
        /* @__PURE__ */ a("div", { className: "max-lg:w-1/2", children: /* @__PURE__ */ a(i, { amount: t }) })
      ] })
    ] })
  ] });
}, qd = K(
  Lo,
  ["ExportShortUrlsBtn", "TagsSelector"]
);
function lt({ currentOrder: e, field: t, className: r = "ml-1" }) {
  return !e.dir || e.field !== t ? null : /* @__PURE__ */ a(U, { icon: e.dir === "ASC" ? li : ci, className: r });
}
const Qd = ({ paginator: e, currentQueryString: t = "" }) => {
  const { currentPage: r = 0, pagesCount: n = 0 } = e ?? {}, o = Ne(), s = S(
    (i) => `${o}/list-short-urls/${i}${t}`,
    [t, o]
  );
  return n <= 1 ? /* @__PURE__ */ a("div", { "data-testid": "empty-gap", className: "pb-4" }) : /* @__PURE__ */ a(
    "div",
    {
      "data-testid": "short-urls-paginator",
      className: P(
        "sticky bottom-0 py-4 -mx-0.5",
        "flex justify-around",
        "bg-lm-primary dark:bg-dm-primary",
        "border-t border-lm-border dark:border-dm-border"
      ),
      children: /* @__PURE__ */ a(Jt, { urlForPage: s, currentPage: r, pagesCount: n })
    }
  );
}, Yd = {
  field: "dateCreated",
  dir: "DESC"
}, Io = Ce(({ listShortUrls: e, shortUrlsList: t }) => {
  const { ShortUrlsTable: r, ShortUrlsFilteringBar: n } = z(Io), { page: o } = Ct(), s = tr(), [{
    tags: i,
    search: c,
    startDate: l,
    endDate: u,
    orderBy: g,
    tagsMode: h,
    excludeBots: m,
    excludePastValidUntil: f,
    excludeMaxVisitsReached: v,
    domain: p
  }, y] = ir(), R = Va(), [N, D] = O(
    // This separated state handling is needed to be able to fall back to settings value, but only once when loaded
    g ?? R.shortUrlsList?.defaultOrdering ?? Yd
  ), { pagination: x } = t?.shortUrls ?? {}, F = L(
    () => m ?? R.visits?.excludeBots,
    [m, R.visits?.excludeBots]
  ), G = S((T, M) => {
    y({ orderBy: { field: T, dir: M } }), D({ field: T, dir: M });
  }, [y]), A = (T) => () => G(
    T,
    As({ currentOrderDir: N.dir, currentField: N.field, newField: T })
  ), V = (T) => /* @__PURE__ */ a(lt, { currentOrder: N, field: T }), B = S(
    (T) => y({ tags: [.../* @__PURE__ */ new Set([...i, T])] }),
    [i, y]
  ), k = S(({ field: T, dir: M }) => F && T === "visits" ? { field: "nonBotVisits", dir: M } : { field: T, dir: M }, [F]), b = Wr();
  return j(() => {
    e({
      page: o,
      searchTerm: c,
      tags: i,
      startDate: l,
      endDate: u,
      orderBy: k(N),
      tagsMode: h,
      excludePastValidUntil: f,
      excludeMaxVisitsReached: v,
      domain: p
    });
  }, [
    e,
    k,
    o,
    c,
    i,
    l,
    u,
    N,
    h,
    f,
    v,
    p
  ]), /* @__PURE__ */ d(_r, { value: b, children: [
    /* @__PURE__ */ a(
      n,
      {
        shortUrlsAmount: t.shortUrls?.pagination.totalItems,
        order: N,
        handleOrderBy: G,
        className: "mb-4"
      }
    ),
    /* @__PURE__ */ a(Xr, { type: "short-urls", className: "mb-4" }),
    /* @__PURE__ */ d(q, { bodyClassName: P({ "pb-0": !t.loading }), children: [
      /* @__PURE__ */ a(
        r,
        {
          shortUrlsList: t,
          orderByColumn: A,
          renderOrderIcon: V,
          onTagClick: B
        }
      ),
      !t.loading && /* @__PURE__ */ a(Qd, { paginator: x, currentQueryString: s.search })
    ] })
  ] });
}, () => [ge.visits]), Jd = K(Io, ["ShortUrlsTable", "ShortUrlsFilteringBar"]), Dr = ({ children: e, danger: t }) => /* @__PURE__ */ a(w.Row, { children: /* @__PURE__ */ a(w.Cell, { colSpan: 6, className: P("text-center", { "text-danger font-bold": t }), children: e }) }), Zd = ({ shortUrlsList: e, onTagClick: t, ShortUrlsRow: r }) => {
  const { error: n, loading: o, shortUrls: s } = e;
  return n ? /* @__PURE__ */ a(Dr, { danger: !0, children: "Something went wrong while loading short URLs :(" }) : o ? /* @__PURE__ */ a(Dr, { children: "Loading..." }) : !s || s.data.length === 0 ? /* @__PURE__ */ a(Dr, { children: "No results found" }) : s?.data.map((i) => /* @__PURE__ */ a(
    r,
    {
      shortUrl: i,
      onTagClick: t
    },
    i.shortUrl
  ));
}, ko = ({
  orderByColumn: e,
  renderOrderIcon: t,
  shortUrlsList: r,
  onTagClick: n
}) => {
  const { ShortUrlsRow: o } = z(ko), s = P({ "cursor-pointer": !!e });
  return /* @__PURE__ */ a(
    w,
    {
      className: "mb-[-1px] w-full",
      header: /* @__PURE__ */ d(w.Row, { children: [
        /* @__PURE__ */ d(w.Cell, { className: s, onClick: e?.("dateCreated"), children: [
          "Created at ",
          t?.("dateCreated")
        ] }),
        /* @__PURE__ */ d(w.Cell, { className: s, onClick: e?.("shortCode"), children: [
          "Short URL ",
          t?.("shortCode")
        ] }),
        /* @__PURE__ */ d(w.Cell, { children: [
          /* @__PURE__ */ d(et, { className: P("p-0", s), onClick: e?.("title"), children: [
            "Title ",
            t?.("title")
          ] }),
          "  /  ",
          /* @__PURE__ */ d(et, { className: P("p-0", s), onClick: e?.("longUrl"), children: [
            /* @__PURE__ */ a("span", { className: "whitespace-nowrap", children: "Long URL" }),
            " ",
            t?.("longUrl")
          ] })
        ] }),
        /* @__PURE__ */ a(w.Cell, { children: "Tags" }),
        /* @__PURE__ */ a(w.Cell, { className: s, onClick: e?.("visits"), children: /* @__PURE__ */ d("span", { className: "whitespace-nowrap", children: [
          "Visits ",
          t?.("visits")
        ] }) }),
        /* @__PURE__ */ a(w.Cell, { colSpan: 2, "aria-hidden": !0 })
      ] }),
      children: /* @__PURE__ */ a(Zd, { ShortUrlsRow: o, shortUrlsList: r, onTagClick: n })
    }
  );
}, eu = K(ko, ["ShortUrlsRow"]), tu = (e, t) => {
  e.factory("ShortUrlsList", Jd), e.decorator("ShortUrlsList", t(
    ["mercureInfo", "shortUrlsList"],
    ["listShortUrls", "createNewVisits", "loadMercureInfo"]
  )), e.factory("ShortUrlsTable", eu), e.factory("ShortUrlsRow", Sd), e.factory("ShortUrlsRowMenu", bd), e.decorator("ShortUrlsRowMenu", t(null, ["shortUrlDeleted", "deleteShortUrl"])), e.factory("ShortUrlForm", Bd), e.decorator("ShortUrlForm", t(["tagsList", "domainsList"])), e.factory("CreateShortUrl", ud), e.decorator(
    "CreateShortUrl",
    t(["shortUrlCreation"], ["createShortUrl", "resetCreateShortUrl"])
  ), e.factory("EditShortUrl", gd), e.decorator("EditShortUrl", t(
    ["shortUrlsDetails", "shortUrlEdition"],
    ["getShortUrlsDetails", "editShortUrl"]
  )), e.serviceFactory("DeleteShortUrlModal", () => hd), e.decorator("DeleteShortUrlModal", t(["shortUrlDeletion"], ["resetDeleteShortUrl"])), e.factory("ExportShortUrlsBtn", md), e.factory("ShortUrlsFilteringBar", qd), e.decorator("ShortUrlsFilteringBar", t(["tagsList", "domainsList"])), e.serviceFactory(
    "shortUrlsListReducerCreator",
    zl,
    "listShortUrls",
    "editShortUrl",
    "createShortUrl"
  ), e.serviceFactory("shortUrlsListReducer", (r) => r.reducer, "shortUrlsListReducerCreator"), e.serviceFactory("shortUrlCreationReducerCreator", Ud, "createShortUrl"), e.serviceFactory("shortUrlCreationReducer", (r) => r.reducer, "shortUrlCreationReducerCreator"), e.serviceFactory("shortUrlEditionReducerCreator", Ld, "editShortUrl"), e.serviceFactory("shortUrlEditionReducer", (r) => r.reducer, "shortUrlEditionReducerCreator"), e.serviceFactory("shortUrlDeletionReducerCreator", Hl, "deleteShortUrl"), e.serviceFactory("shortUrlDeletionReducer", (r) => r.reducer, "shortUrlDeletionReducerCreator"), e.serviceFactory("shortUrlsDetailsReducerCreator", Id, "apiClientFactory"), e.serviceFactory("shortUrlsDetailsReducer", (r) => r.reducer, "shortUrlsDetailsReducerCreator"), e.serviceFactory("listShortUrls", $l, "apiClientFactory"), e.serviceFactory("createShortUrl", Vd, "apiClientFactory"), e.serviceFactory("resetCreateShortUrl", (r) => r.resetCreateShortUrl, "shortUrlCreationReducerCreator"), e.serviceFactory("deleteShortUrl", Gl, "apiClientFactory"), e.serviceFactory("resetDeleteShortUrl", (r) => r.resetDeleteShortUrl, "shortUrlDeletionReducerCreator"), e.serviceFactory("shortUrlDeleted", () => Ka), e.serviceFactory("getShortUrlsDetails", (r) => r.getShortUrlsDetails, "shortUrlsDetailsReducerCreator"), e.serviceFactory("editShortUrl", Ed, "apiClientFactory");
}, ru = ({ tag: e, onClose: t, isOpen: r, deleteTag: n, tagDelete: o, tagDeleted: s }) => {
  const { deleting: i, error: c, deleted: l, errorData: u } = o;
  return /* @__PURE__ */ d(
    Fe,
    {
      title: "Delete tag",
      variant: "danger",
      open: r,
      onClose: t,
      onClosed: () => l && s(e),
      onConfirm: async () => {
        await n(e), t();
      },
      confirmText: i ? "Deleting tag..." : "Delete tag",
      confirmDisabled: i,
      children: [
        "Are you sure you want to delete tag ",
        /* @__PURE__ */ a("b", { children: e }),
        "?",
        c && /* @__PURE__ */ a(ie, { variant: "error", size: "sm", className: "mt-2", children: /* @__PURE__ */ a(xe, { errorData: u, fallbackMessage: "Something went wrong while deleting the tag :(" }) })
      ]
    }
  );
}, Fo = ({ tag: e, editTag: t, onClose: r, tagEdited: n, isOpen: o, tagEdit: s }) => {
  const { ColorGenerator: i } = z(Fo), [c, l] = O(e), [u, g] = O(i.getColorForKey(e)), { editing: h, error: m, edited: f, errorData: v } = s, p = S(async () => {
    await t({ oldName: e, newName: c, color: u }), r();
  }, [u, t, c, r, e]), y = S(
    () => f && n({ oldName: e, newName: c, color: u }),
    [u, f, c, e, n]
  );
  return /* @__PURE__ */ d(
    Fe,
    {
      title: "Edit tag",
      open: o,
      onClose: r,
      onClosed: y,
      onConfirm: p,
      confirmText: h ? "Saving..." : "Save",
      confirmDisabled: h,
      children: [
        /* @__PURE__ */ d("div", { className: "flex", children: [
          /* @__PURE__ */ a(Do, { color: u, onChange: g, className: "rounded-r-none", name: "tag-color" }),
          /* @__PURE__ */ a(
            fe,
            {
              className: "grow [&]:rounded-l-none",
              value: c,
              placeholder: "Tag",
              required: !0,
              onChange: ({ target: R }) => l(R.value)
            }
          )
        ] }),
        m && /* @__PURE__ */ a(ie, { variant: "error", size: "sm", className: "mt-2", children: /* @__PURE__ */ a(xe, { errorData: v, fallbackMessage: "Something went wrong while editing the tag :(" }) })
      ]
    }
  );
}, nu = K(Fo, ["ColorGenerator"]), Po = ({ onChange: e, placeholder: t, ...r }) => {
  const { ColorGenerator: n } = z(Po), s = ve("shortUrlCreation")?.tagFilteringMode ?? "startsWith";
  return /* @__PURE__ */ a(
    Ms,
    {
      ...r,
      onTagsChange: e,
      getColorForTag: (i) => n.getColorForKey(i),
      size: "lg",
      placeholder: t ?? "Add tags to the URL",
      searchMode: s
    }
  );
}, au = K(Po, ["ColorGenerator"]), Lr = "shlink/tagDelete", ou = {
  deleting: !1,
  deleted: !1,
  error: !1
}, Ao = we(`${Lr}/tagDeleted`), su = (e) => {
  const t = Y(`${Lr}/deleteTag`, async (n) => {
    await e().deleteTags([n]);
  }), { reducer: r } = J({
    name: Lr,
    initialState: ou,
    reducers: {},
    extraReducers: (n) => {
      n.addCase(t.pending, () => ({ deleting: !0, deleted: !1, error: !1 })), n.addCase(
        t.rejected,
        (o, { error: s }) => ({ deleting: !1, deleted: !1, error: !0, errorData: ce(s) })
      ), n.addCase(t.fulfilled, () => ({ deleting: !1, deleted: !0, error: !1 }));
    }
  });
  return { reducer: r, deleteTag: t };
}, on = "shlink/tagEdit", iu = {
  editing: !1,
  edited: !1,
  error: !1
}, Mo = we(`${on}/tagEdited`), lu = (e, t) => Y(
  `${on}/editTag`,
  async ({ oldName: r, newName: n, color: o }) => (await e().editTag({ oldName: r, newName: n }), t.setColorForKey(n, o), { oldName: r, newName: n, color: o })
), cu = (e) => J({
  name: on,
  initialState: iu,
  reducers: {},
  extraReducers: (t) => {
    t.addCase(e.pending, () => ({ editing: !0, edited: !1, error: !1 })), t.addCase(
      e.rejected,
      (r, { error: n }) => ({ editing: !1, edited: !1, error: !0, errorData: ce(n) })
    ), t.addCase(e.fulfilled, (r, { payload: n }) => {
      const { oldName: o, newName: s } = n;
      return {
        oldName: o,
        newName: s,
        editing: !1,
        edited: !0,
        error: !1
      };
    });
  }
}), sn = "shlink/tagsList", Sr = {
  tags: [],
  filteredTags: [],
  stats: {},
  loading: !1,
  error: !1
}, Xn = (e, t) => (r) => r === e ? t : r, qn = (e, t) => e.filter((r) => r !== t), du = (e, t) => e.reduce((r, [n, o]) => {
  if (!r[n])
    return r;
  const { bots: s, nonBots: i } = o, c = r[n];
  return {
    ...r,
    [n]: {
      ...c,
      visitsSummary: c.visitsSummary && {
        total: c.visitsSummary.total + s + i,
        bots: c.visitsSummary.bots + s,
        nonBots: c.visitsSummary.nonBots + i
      },
      visitsCount: (c.visitsCount ?? 0) + s + i
    }
  };
}, { ...t }), uu = (e) => Object.entries(
  e.reduce((t, { shortUrl: r, visit: n }) => (r?.tags.forEach((o) => {
    t[o] || (t[o] = { bots: 0, nonBots: 0 }), n.potentialBot ? t[o].bots += 1 : t[o].nonBots += 1;
  }), t), {})
), gu = (e) => Y(
  `${sn}/listTags`,
  async () => {
    const { data: t } = await e().tagsStats(), r = t.reduce((o, { tag: s, ...i }) => (o[s] = i, o), {});
    return { tags: Object.keys(r), stats: r };
  }
), Oo = we(`${sn}/filterTags`), hu = (e, t) => J({
  name: sn,
  initialState: Sr,
  reducers: {},
  extraReducers: (r) => {
    r.addCase(Oo, (n, { payload: o }) => ({
      ...n,
      filteredTags: n.tags.filter((s) => s.toLowerCase().match(o.toLowerCase()))
    })), r.addCase(e.pending, (n) => ({ ...n, loading: !0, error: !1 })), r.addCase(e.rejected, (n, { error: o }) => ({ ...Sr, error: !0, errorData: ce(o) })), r.addCase(e.fulfilled, (n, { payload: o }) => ({ ...Sr, stats: o.stats, tags: o.tags, filteredTags: o.tags })), r.addCase(Ao, ({ tags: n, filteredTags: o, ...s }, { payload: i }) => ({
      ...s,
      tags: qn(n, i),
      filteredTags: qn(o, i)
    })), r.addCase(Mo, ({ tags: n, filteredTags: o, stats: s, ...i }, { payload: c }) => ({
      ...i,
      stats: {
        ...s,
        [c.newName]: s[c.oldName]
      },
      tags: n.map(Xn(c.oldName, c.newName)).sort(),
      filteredTags: o.map(Xn(c.oldName, c.newName)).sort()
    })), r.addCase(tt, (n, { payload: o }) => ({
      ...n,
      stats: du(uu(o.createdVisits), n.stats)
    })), r.addCase(t.fulfilled, ({ tags: n, ...o }, { payload: s }) => ({
      ...o,
      tags: n.concat(s.tags.filter((i) => !n.includes(i)))
      // More performant than [ ...new Set(...) ]
    }));
  }
}), mu = {
  tag: "Tag",
  shortUrls: "Short URLs",
  visits: "Visits"
}, Bo = Ce(({ filterTags: e, tagsList: t }) => {
  const { TagsTable: r } = z(Bo), n = Va(), [o, s] = O(n.tags?.defaultOrdering ?? {}), i = L(() => {
    const u = t.filteredTags.map((g) => {
      const h = t.stats[g], m = (n.visits?.excludeBots ? h?.visitsSummary?.nonBots : h?.visitsSummary?.total) ?? h?.visitsCount ?? 0;
      return {
        tag: g,
        visits: m,
        shortUrls: h?.shortUrlsCount ?? 0
      };
    });
    return fa(u, o);
  }, [o, n.visits?.excludeBots, t.filteredTags, t.stats]), c = Wr();
  return t.loading ? /* @__PURE__ */ a($e, { loading: !0 }) : t.error ? /* @__PURE__ */ a(ie, { variant: "error", children: /* @__PURE__ */ a(xe, { errorData: t.errorData, fallbackMessage: "Error loading tags :(" }) }) : /* @__PURE__ */ a(_r, { value: c, children: /* @__PURE__ */ d("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ a(Yt, { onChange: e }),
    /* @__PURE__ */ a("div", { className: "flex flex-col lg:flex-row lg:justify-end", children: /* @__PURE__ */ a("div", { className: "lg:w-1/2", children: /* @__PURE__ */ a(
      Mr,
      {
        containerClassName: "[&]:block",
        buttonClassName: "w-full",
        items: mu,
        order: o,
        onChange: s
      }
    ) }) }),
    /* @__PURE__ */ a(Xr, { type: "tags" }),
    /* @__PURE__ */ a(
      r,
      {
        sortedTags: i,
        currentOrder: o,
        orderByColumn: (u) => () => s(pa({ currentField: o.field, currentOrderDir: o.dir, newField: u }))
      }
    )
  ] }) });
}, () => [ge.visits]), fu = K(Bo, ["TagsTable"]), pu = (e, t) => {
  const r = (n) => (o) => {
    o.event.composedPath().some(
      ({ classList: i }) => i?.contains("visits-table")
    ) || document.querySelector(".modal") || n();
  };
  return nl({
    delta: 40,
    onSwipedLeft: r(t),
    onSwipedRight: r(e)
  });
}, vu = (e, t) => {
  const [r, n] = O(t), o = S((s) => {
    const { location: i, history: c } = window, l = Os(i.search);
    l[e] = s, c.pushState(null, "", `${i.pathname}?${Fr(l)}`), n(s);
  }, [e]);
  return [r, o];
}, ln = (e) => {
  const t = ft();
  return L(() => t[e]?.split(",").filter(Boolean) ?? [], [e, t]);
}, Cu = (e, t) => {
  const r = S(
    () => t(`(max-width: ${e}px)`).matches,
    [t, e]
  ), [n, o] = O(r());
  return j(() => {
    const s = () => o(r());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, [r]), n;
}, yu = (e, t, r) => {
  j(() => {
    if (!r)
      return () => {
      };
    const n = new AbortController();
    return document.addEventListener("keydown", (o) => o.key === e && t(), { signal: n.signal }), () => n.abort();
  }, [r, t, e]);
}, Du = 20, Go = ({ sortedTags: e, orderByColumn: t, currentOrder: r }) => {
  const { TagsTableRow: n } = z(Go), o = ne(!0), { page: s = 1 } = ft(), [i, c] = vu("page", Number(s)), l = S((f) => {
    c(f), scrollTo(0, 0);
  }, [c]), u = Qe(e, Du), g = u.length > 1, h = u[i - 1] ?? [];
  j(() => {
    o.current || l(1), o.current = !1;
  }, [l, e]);
  const m = "cursor-pointer top-(--header-height) sticky-cell";
  return /* @__PURE__ */ d(q, { bodyClassName: g ? "pb-1" : "", children: [
    /* @__PURE__ */ d(
      w,
      {
        header: /* @__PURE__ */ d(w.Row, { children: [
          /* @__PURE__ */ d(w.Cell, { onClick: t("tag"), className: m, children: [
            "Tag ",
            /* @__PURE__ */ a(lt, { currentOrder: r, field: "tag" })
          ] }),
          /* @__PURE__ */ d(w.Cell, { onClick: t("shortUrls"), className: `lg:text-right ${m}`, children: [
            "Short URLs ",
            /* @__PURE__ */ a(lt, { currentOrder: r, field: "shortUrls" })
          ] }),
          /* @__PURE__ */ d(w.Cell, { onClick: t("visits"), className: `lg:text-right ${m}`, children: [
            "Visits ",
            /* @__PURE__ */ a(lt, { currentOrder: r, field: "visits" })
          ] }),
          /* @__PURE__ */ a(w.Cell, { className: m, children: /* @__PURE__ */ a("span", { className: "sr-only", children: "Options" }) })
        ] }),
        children: [
          h.length === 0 && /* @__PURE__ */ a(w.Row, { children: /* @__PURE__ */ a(w.Cell, { colSpan: 4, className: "text-center", children: "No tags found" }) }),
          h.map((f) => /* @__PURE__ */ a(n, { tag: f }, f.tag))
        ]
      }
    ),
    g && /* @__PURE__ */ a(
      "div",
      {
        className: P(
          "sticky bottom-0 py-4 -mx-0.5",
          "flex justify-around",
          "bg-lm-primary dark:bg-dm-primary",
          "border-t border-lm-border dark:border-dm-border"
        ),
        "data-testid": "tags-paginator",
        children: /* @__PURE__ */ a(Jt, { pagesCount: u.length, currentPage: i, onPageChange: l })
      }
    )
  ] }, i);
}, Su = K(Go, ["TagsTableRow"]), cn = ({ color: e, testId: t }) => /* @__PURE__ */ a(
  "div",
  {
    "data-testid": t,
    style: { backgroundColor: e },
    className: P(
      "inline-block w-[20px] h-[20px] rounded-full",
      "align-[-4px] mr-1.5"
    )
  }
), xu = ({ tag: e, colorGenerator: t }) => /* @__PURE__ */ a(cn, { color: t.getColorForKey(e) }), Ho = ({ tag: e }) => {
  const { DeleteTagConfirmModal: t, EditTagModal: r, ColorGenerator: n } = z(Ho), { flag: o, setToFalse: s, setToTrue: i } = ee(), { flag: c, setToFalse: l, setToTrue: u } = ee(), g = Ne(), h = rr();
  return /* @__PURE__ */ d(w.Row, { className: "max-lg:relative", children: [
    /* @__PURE__ */ d(w.Cell, { columnName: "Tag", children: [
      /* @__PURE__ */ a(xu, { tag: e.tag, colorGenerator: n }),
      " ",
      e.tag
    ] }),
    /* @__PURE__ */ a(w.Cell, { className: "lg:text-right", columnName: "Short URLs", children: /* @__PURE__ */ a(dt, { to: `${g}/list-short-urls/1?tags=${encodeURIComponent(e.tag)}`, children: W(e.shortUrls) }) }),
    /* @__PURE__ */ a(w.Cell, { className: "lg:text-right", columnName: "Visits", children: /* @__PURE__ */ a(dt, { to: `${g}/tag/${e.tag}/visits`, children: W(e.visits) }) }),
    /* @__PURE__ */ a(w.Cell, { className: "lg:text-right max-lg:absolute max-lg:top-1.25 max-lg:right-0 max-lg:p-0", children: /* @__PURE__ */ d(X, { menuAlignment: "right", children: [
      /* @__PURE__ */ d(X.Item, { onClick: u, className: "gap-1.5", children: [
        /* @__PURE__ */ a(U, { icon: xa }),
        " Edit"
      ] }),
      /* @__PURE__ */ d(
        X.Item,
        {
          className: "gap-1.5",
          disabled: !h || !h.canAddItemWithName(e.tag),
          onClick: () => h?.addItemToCompare({
            name: e.tag,
            query: e.tag,
            style: n.stylesForKey(e.tag)
          }),
          children: [
            /* @__PURE__ */ a(U, { icon: Zt }),
            " Compare visits"
          ]
        }
      ),
      /* @__PURE__ */ a(X.Separator, {}),
      /* @__PURE__ */ d(X.Item, { className: "[&]:text-danger gap-1.5", onClick: i, children: [
        /* @__PURE__ */ a(U, { icon: di }),
        " Delete tag"
      ] })
    ] }) }),
    /* @__PURE__ */ a(r, { tag: e.tag, onClose: l, isOpen: c }),
    /* @__PURE__ */ a(t, { tag: e.tag, onClose: s, isOpen: o })
  ] });
}, Ru = K(
  Ho,
  ["DeleteTagConfirmModal", "EditTagModal", "ColorGenerator"]
), wu = (e, t) => {
  e.factory("TagsSelector", au), e.serviceFactory("DeleteTagConfirmModal", () => ru), e.decorator("DeleteTagConfirmModal", t(["tagDelete"], ["deleteTag", "tagDeleted"])), e.factory("EditTagModal", nu), e.decorator("EditTagModal", t(["tagEdit"], ["editTag", "tagEdited"])), e.factory("TagsTableRow", Ru), e.factory("TagsTable", Su), e.factory("TagsList", fu), e.decorator("TagsList", t(
    ["tagsList", "mercureInfo"],
    ["filterTags", "createNewVisits", "loadMercureInfo"]
  )), e.serviceFactory("tagEditReducerCreator", cu, "editTag"), e.serviceFactory("tagEditReducer", (r) => r.reducer, "tagEditReducerCreator"), e.serviceFactory("tagDeleteReducerCreator", su, "apiClientFactory"), e.serviceFactory("tagDeleteReducer", (r) => r.reducer, "tagDeleteReducerCreator"), e.serviceFactory("tagsListReducerCreator", hu, "listTags", "createShortUrl"), e.serviceFactory("tagsListReducer", (r) => r.reducer, "tagsListReducerCreator"), e.serviceFactory("listTags", gu, "apiClientFactory"), e.serviceFactory("filterTags", () => Oo), e.serviceFactory("deleteTag", (r) => r.deleteTag, "tagDeleteReducerCreator"), e.serviceFactory("tagDeleted", () => Ao), e.serviceFactory("editTag", lu, "apiClientFactory", "ColorGenerator"), e.serviceFactory("tagEdited", () => Mo);
}, Nu = new al(), bu = (e) => Nu.parse(e), Vu = 6, Qn = "0123456789ABCDEF";
function Uu() {
  return `#${jr(Vu, () => Qn[Math.floor(Math.random() * Qn.length)]).join("")}`;
}
const Yn = (e) => e.toLowerCase().trim();
class Tu {
  constructor(t) {
    this.storage = t, this.colors = this.storage?.getTagColors() ?? {}, this.lights = {};
  }
  colors;
  lights;
  getColorForKey(t) {
    const r = Yn(t), n = this.colors[r];
    return n || this.setColorForKey(r, Uu());
  }
  setColorForKey(t, r) {
    const n = Yn(t);
    return this.colors[n] = r, this.storage?.storeTagColors(this.colors), r;
  }
  stylesForKey(t) {
    const r = this.getColorForKey(t);
    return {
      backgroundColor: r,
      color: this.isLightColor(r) ? "#222" : "#fff"
    };
  }
  isLightColor(t) {
    const r = t.substring(1);
    return this.lights[r] === void 0 && (this.lights[r] = ua(r)), this.lights[r];
  }
}
const jo = ({ document: e }, t, r) => {
  const n = e.createElement("a");
  n.setAttribute("href", t), n.setAttribute("download", r), n.style.visibility = "hidden", e.body.appendChild(n), n.click(), e.body.removeChild(n);
}, Eu = (e, t, r) => {
  const n = new Blob([t], { type: "text/csv;charset=utf-8;" }), o = URL.createObjectURL(n);
  jo(e, o, r);
};
class Lu {
  constructor(t, r) {
    this.fetch = t, this.window = r;
  }
  async saveImage(t, r) {
    const n = await this.fetch(t).then((s) => s.blob()), o = URL.createObjectURL(n);
    jo(this.window, o, r);
  }
}
class Iu {
  constructor(t, r) {
    this.window = t, this.jsonToCsv = r;
  }
  exportVisits = (t, r) => {
    r.length && this.exportCsv(t, r);
  };
  exportShortUrls = (t) => {
    t.length && this.exportCsv("short_urls.csv", t);
  };
  exportCsv = (t, r) => {
    const n = this.jsonToCsv(r);
    Eu(this.window, n, t);
  };
}
function ku(e) {
  e.constant("window", window), e.constant("fetch", window.fetch.bind(window)), e.service("ImageDownloader", Lu, "fetch", "window"), e.service("ColorGenerator", Tu, "TagColorsStorage"), e.constant("jsonToCsv", bu), e.service("ReportExporter", Iu, "window", "jsonToCsv"), e.serviceFactory("useTimeoutToggle", () => ga);
}
const Dt = ({ visits: e, shortUrl: t, children: r, title: n }) => /* @__PURE__ */ a("header", { children: /* @__PURE__ */ d(q, { children: [
  /* @__PURE__ */ d("h2", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ a(lr, {}),
    /* @__PURE__ */ a("span", { className: "text-center hidden sm:block", children: /* @__PURE__ */ a("small", { children: n }) }),
    /* @__PURE__ */ d(
      "span",
      {
        className: P(
          "px-3 py-1.5 rounded-md ml-3",
          "font-bold text-white text-2xl",
          "bg-lm-main dark:bg-dm-main"
        ),
        "data-testid": "badge",
        children: [
          "Visits:",
          " ",
          /* @__PURE__ */ a(Co, { visitsCount: e.length, shortUrl: t })
        ]
      }
    )
  ] }),
  /* @__PURE__ */ a("h3", { className: "text-center block sm:hidden mt-3", children: /* @__PURE__ */ a("small", { children: n }) }),
  r && /* @__PURE__ */ a("div", { className: "md:mt-3", children: r })
] }) }), dn = ({ children: e, className: t }) => /* @__PURE__ */ a("div", { className: P("flex justify-between items-center", t), children: e }), $o = ({ title: e, footer: t, children: r }) => /* @__PURE__ */ d(Se, { role: "document", children: [
  /* @__PURE__ */ a(Se.Header, { children: e }),
  /* @__PURE__ */ a(Se.Body, { children: r }),
  t && /* @__PURE__ */ a(Se.Footer, { className: "sticky bottom-0", children: t })
] }), zo = pt(null), { Provider: lm } = zo, un = (e) => {
  const t = vt(zo) ?? void 0, r = L(() => t ? {} : {
    width: "100%",
    height: e
  }, [e, t]);
  return { ChartWrapper: t ? ba : ol, dimensions: t, wrapperDimensions: r };
}, Ko = {
  color: "white",
  background: "rgb(0 0 0 / .9)",
  border: "none",
  borderRadius: "5px"
}, Fu = {
  marginBottom: "5px",
  fontWeight: "bold"
}, _o = {
  contentStyle: Ko,
  labelStyle: Fu,
  itemStyle: { padding: 0 }
}, Jn = [
  "#97BBCD",
  "#F7464A",
  "#46BFBD",
  "#FDB45C",
  "#949FB1",
  "#57A773",
  "#414066",
  "#08B2E3",
  "#B6C454",
  "#DCDCDC",
  "#463730"
], Wo = (e) => Jn[e % Jn.length], qt = () => Ke() ? "#46e587" : "#1DAA58", Pu = () => Ke() ? "rgba(70, 229, 135, 0.4)" : "rgba(29, 170, 88, 0.4)", Au = ({ chartData: e, showNumbers: t }) => /* @__PURE__ */ a("ul", { className: "space-y-1", children: e.map(({ name: r, color: n, value: o }, s) => /* @__PURE__ */ d("li", { className: "flex items-center", children: [
  /* @__PURE__ */ a(cn, { color: n, testId: `color-bullet-${s}` }),
  /* @__PURE__ */ d("small", { className: "truncate grow", "data-testid": `name-${s}`, children: [
    r,
    t && /* @__PURE__ */ d("b", { children: [
      " (",
      W(o),
      ")"
    ] })
  ] })
] }, r)) }), Zn = (e) => L(
  () => Object.entries(e).map(([t, r], n) => ({ name: t, value: r, color: Wo(n) })),
  [e]
), Mu = ({ stats: e, prevStats: t, showNumbersInLegend: r }) => {
  const n = Zn(e), o = Zn(t), s = o.length > 0, i = Ke() ? Bs : Gs, { ChartWrapper: c, dimensions: l, wrapperDimensions: u } = un(300);
  return /* @__PURE__ */ d("div", { className: "flex flex-col md:flex-row md:items-center gap-y-4", children: [
    /* @__PURE__ */ a("div", { className: "md:flex-7", children: /* @__PURE__ */ a("div", { style: u, children: /* @__PURE__ */ a(c, { children: /* @__PURE__ */ d(sl, { ...l, children: [
      /* @__PURE__ */ a(zr, { formatter: W, contentStyle: Ko, itemStyle: { color: "white" } }),
      /* @__PURE__ */ a(
        Nn,
        {
          data: n,
          dataKey: "value",
          nameKey: "name",
          startAngle: 360,
          endAngle: 0,
          outerRadius: "100%",
          innerRadius: s ? "65%" : "50%",
          animationBegin: 0,
          children: n.map((g, h) => /* @__PURE__ */ a(Ot, { fill: g.color, stroke: i }, `${g.name}-${h}`))
        }
      ),
      s && /* @__PURE__ */ a(
        Nn,
        {
          data: o,
          dataKey: "value",
          nameKey: "name",
          startAngle: 360,
          endAngle: 0,
          outerRadius: "55%",
          innerRadius: "20%",
          animationBegin: 0,
          stroke: i,
          fill: qt()
        }
      )
    ] }) }) }) }),
    /* @__PURE__ */ a("div", { className: "md:flex-5", children: /* @__PURE__ */ a(Au, { chartData: n, showNumbers: r }) })
  ] });
}, ea = ({ title: e, ...t }) => {
  const { flag: r, toggle: n } = ee();
  return /* @__PURE__ */ a(
    $o,
    {
      title: /* @__PURE__ */ d(dn, { children: [
        e,
        /* @__PURE__ */ a(bi, { checked: r, onChange: n, children: "Show numbers" })
      ] }),
      children: /* @__PURE__ */ a(Mu, { ...t, showNumbersInLegend: r })
    }
  );
}, Ou = Gr(({ visitsGroups: e }, t) => {
  const r = L(() => Object.entries(e), [e]);
  return r.length === 0 ? null : /* @__PURE__ */ a("ul", { className: "mt-2 flex flex-wrap justify-center gap-4", ref: t, children: r.map(([n, o], s) => /* @__PURE__ */ d("li", { className: "inline", children: [
    /* @__PURE__ */ a(cn, { color: Xo(o) }),
    /* @__PURE__ */ d("strong", { children: [
      n,
      " (",
      W(o.length),
      ")"
    ] })
  ] }, `${n}${s}`)) });
}), Bu = {
  monthly: "Month",
  weekly: "Week",
  daily: "Day",
  hourly: "Hour"
}, Gu = {
  hourly: (e) => ({ hours: e }),
  daily: (e) => ({ days: e }),
  weekly: (e) => ({ weeks: e }),
  monthly: (e) => ({ months: e })
}, Hu = {
  hourly: _i,
  daily: Ia,
  weekly: Ki,
  monthly: Vr
}, gn = {
  hourly: (e) => Ht(e, "yyyy-MM-dd HH:00"),
  daily: (e) => Ue(e),
  weekly(e) {
    const t = Ue(Xi(e)), r = Ue(qi(e));
    return `${t} - ${r}`;
  },
  monthly: (e) => Ht(e, "yyyy-MM")
}, ju = (e) => {
  const t = Object.values(e).filter((i) => i.length > 0);
  if (t.length === 0)
    return "monthly";
  const r = /* @__PURE__ */ new Date(), n = t.map((i) => Ee(i[i.length - 1].date)), o = La(n);
  return [
    [() => Ia(r, o) <= 2, "hourly"],
    // Less than 2 days
    [() => Vr(r, o) <= 1, "daily"],
    // Between 2 days and 1 month
    [() => Vr(r, o) <= 6, "weekly"]
    // Between 1 and 6 months
  ].find(([i]) => i())?.[1] ?? "monthly";
}, $u = (e, t) => Object.keys(t).reduce((r, n) => (r[n] = ka(
  t[n],
  (o) => gn[e](Ee(o.date))
), r), {}), zu = (e, t) => t.reduce(
  (r, n) => {
    const o = gn[e](Ee(n.date));
    return r[o] = r[o] ?? [], r[o].push(n), r;
  },
  {}
), Ku = (e, t) => {
  const r = Object.values(t).filter((g) => g.length > 0).map((g) => [...g].reverse());
  if (r.length === 0)
    return [];
  const n = Hu[e], o = gn[e], s = Gu[e], i = r.flat(), c = Ee(i[0].date), l = Ee(i[i.length - 1].date), u = n(l, c) || 1;
  return [
    { formattedDate: o(c), date: c },
    ...jr(u, (g) => {
      const h = Wi(c, s(g));
      return {
        formattedDate: o(h),
        date: h
      };
    })
  ];
}, Xo = (e) => {
  if (e.color)
    return e.color;
  const t = {
    main: Gt(),
    highlighted: wr,
    previous: qt()
  };
  return e.type ? t[e.type] : Gt();
}, ta = (e, t) => L(
  () => Object.values(e).find((r) => r.type === t) ?? [],
  [e, t]
), _u = (e, t, r) => {
  const n = ta(e, "main"), o = ta(e, "highlighted"), s = L(
    () => r ? zu(t, n) : {},
    [r, t, n]
  ), i = S((c, { payload: l }) => {
    const u = s[l.formattedDate] ?? [];
    r?.(u === o ? [] : u);
  }, [s, o, r]);
  return r && {
    cursor: "pointer",
    onClick: i
  };
}, qo = ({ visitsGroups: e, setSelectedVisits: t, matchMedia: r, onDateRangeChange: n }) => {
  const [o, s] = O(ju(e)), i = Cu(767, r ?? window.matchMedia), c = L(() => {
    const b = $u(o, e), T = Object.keys(b);
    return Ku(o, e).map(({ formattedDate: M, date: Q }) => ({
      date: Q,
      formattedDate: M,
      ...T.reduce((ae, Oe) => (ae[Oe] = b[Oe][M] ?? 0, ae), {})
    }));
  }, [o, e]), l = _u(e, o, t), { flag: u, toggle: g, setToFalse: h } = ee(), m = Hr(), f = ne(null), [v, p] = O(i ? 300 : 400);
  Si(() => {
    if (!u)
      return p(i ? 300 : 400), () => {
      };
    const b = new ResizeObserver(() => {
      const T = window.innerHeight, { height: M } = f.current.getBoundingClientRect();
      p(T - M - 98);
    });
    return b.observe(f.current), () => b.disconnect();
  }, [u, i, f]), yu("Escape", h, u);
  const { ChartWrapper: y, dimensions: R, wrapperDimensions: N } = un(v), [D, x] = O(), [F, G] = O(), A = S(() => {
    x(void 0), G(void 0);
  }, []), V = S((b, T) => {
    const M = b.activeIndex && c[b.activeIndex];
    T.button === 0 && M && x(M);
  }, [c]), B = S((b) => {
    const T = b.activeIndex && c[b.activeIndex];
    D && T && G(T);
  }, [c, D]), k = S(() => {
    if (!D || !F) {
      A();
      return;
    }
    const b = [D.date, F.date], T = zi(b), M = La(b);
    A(), n({ startDate: T, endDate: M });
  }, [n, A, F, D]);
  return /* @__PURE__ */ d(
    Se,
    {
      className: P({ "fixed top-0 bottom-0 left-0 right-0 z-1030": u }),
      "data-testid": "line-chart-card",
      children: [
        /* @__PURE__ */ d(Se.Header, { role: "heading", "aria-level": 4, className: "flex justify-between items-center", children: [
          "Visits over time",
          /* @__PURE__ */ d("div", { className: "flex content-center gap-1", children: [
            /* @__PURE__ */ a(
              Pr,
              {
                "aria-label": u ? "Collapse" : "Expand",
                "aria-expanded": u,
                "aria-controls": m,
                size: "sm",
                onClick: g,
                children: /* @__PURE__ */ a(U, { icon: u ? ui : gi })
              }
            ),
            /* @__PURE__ */ a(
              I,
              {
                buttonContent: "Group by",
                buttonSize: "sm",
                buttonVariant: "link",
                buttonClassName: "[&]:p-0",
                menuAlignment: "right",
                menuClassName: "w-40",
                children: Object.entries(Bu).map(([b, T]) => /* @__PURE__ */ a(I.Item, { selected: o === b, onClick: () => s(b), children: T }, b))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ d(Se.Body, { id: m, children: [
          /* @__PURE__ */ a(y, { ...N, children: /* @__PURE__ */ d(
            il,
            {
              className: "select-none",
              data: c,
              ...R,
              onMouseDown: V,
              onMouseMove: B,
              onMouseUp: k,
              children: [
                /* @__PURE__ */ a(Pa, { dataKey: "formattedDate" }),
                /* @__PURE__ */ a(Aa, { tickFormatter: W, yAxisId: "1" }),
                /* @__PURE__ */ a(zr, { formatter: W, ..._o }),
                /* @__PURE__ */ a(Ma, { strokeOpacity: Ke() ? 0.1 : 0.9 }),
                Object.entries(e).map(([b, T]) => T.length > 0 && /* @__PURE__ */ a(
                  ll,
                  {
                    yAxisId: "1",
                    dataKey: b,
                    type: "monotone",
                    stroke: Xo(T),
                    strokeWidth: 2,
                    activeDot: T.type === "previous" ? void 0 : l,
                    strokeDasharray: T.type === "previous" ? "8 3" : void 0
                  },
                  b
                )),
                D && F && /* @__PURE__ */ a(cl, { yAxisId: "1", x1: D.formattedDate, x2: F.formattedDate })
              ]
            }
          ) }),
          /* @__PURE__ */ a(Ou, { visitsGroups: e, ref: f })
        ] })
      ]
    }
  );
}, Wu = ({ ranges: e, value: t, setValue: r }) => /* @__PURE__ */ d(
  I,
  {
    buttonContent: "Paginate",
    buttonVariant: "link",
    buttonClassName: "[&]:p-0",
    buttonSize: "sm",
    menuAlignment: "right",
    children: [
      e.map((n) => /* @__PURE__ */ d(I.Item, { selected: n === t, onClick: () => r(n), children: [
        /* @__PURE__ */ a("b", { children: n }),
        " items per page"
      ] }, n)),
      /* @__PURE__ */ a(I.Separator, {}),
      /* @__PURE__ */ a(I.Item, { disabled: t === 1 / 0, onClick: () => r(1 / 0), children: /* @__PURE__ */ a("i", { children: "Clear pagination" }) })
    ]
  }
), ra = (e) => typeof e != "string" || e.startsWith("hidden_"), Xu = ({ stats: e, prevStats: t, highlightedStats: r, highlightedLabel: n, max: o, onClick: s }) => {
  const i = L(() => Object.entries(e).map(([h, m]) => {
    const f = r?.[h] ?? 0, v = t?.[h] ?? 0, p = ra(h);
    return {
      name: h,
      amount: Math.max(m, v),
      // Setting value `null` on "hidden" elements allows for them to be excluded from tooltips
      nonHighlightedAmount: p ? null : m - f,
      highlightedAmount: p ? null : f,
      prevAmount: p ? null : v
    };
  }), [e, t, r]), c = L(() => {
    const h = i.reduce((m, { name: f }) => m > f.length ? m : f.length, 0);
    return Math.min(150, h * 7);
  }, [i]), { ChartWrapper: l, dimensions: u, wrapperDimensions: g } = un(
    Math.max(300, i.length * (t ? 44 : 22))
  );
  return /* @__PURE__ */ a(l, { ...g, children: /* @__PURE__ */ d(dl, { layout: "vertical", data: i, barCategoryGap: 3, ...u, children: [
    /* @__PURE__ */ a(
      Pa,
      {
        type: "number",
        dataKey: "amount",
        tickFormatter: W,
        domain: o ? [0, o] : void 0
      }
    ),
    /* @__PURE__ */ a(
      Aa,
      {
        type: "category",
        dataKey: "name",
        width: c,
        interval: 0,
        style: {
          fontSize: ".8rem"
          /* TODO: Should show text overflow ellipsis */
        },
        tickFormatter: (h) => ra(h) ? "" : h
      }
    ),
    /* @__PURE__ */ a(Ma, { strokeOpacity: Ke() ? 0.05 : 0.9 }),
    /* @__PURE__ */ a(
      zr,
      {
        filterNull: !0,
        ..._o,
        formatter: (h, m) => [W(h), m === "highlightedAmount" ? n : m === "prevAmount" ? "Previous period" : r ? "Non-selected" : "Visits"]
      }
    ),
    /* @__PURE__ */ a(
      gr,
      {
        dataKey: "nonHighlightedAmount",
        stackId: "main",
        cursor: "pointer",
        fill: Gt(),
        onClick: ({ name: h }) => h && s?.(h),
        children: i.map((h) => (
          // Using a Cell, to define a different fill color, without affecting the one used for the tooltip
          /* @__PURE__ */ a(Ot, { fill: Hs(), stroke: Gt(), strokeWidth: 2 }, h.name)
        ))
      }
    ),
    r && /* @__PURE__ */ a(
      gr,
      {
        dataKey: "highlightedAmount",
        stackId: "main",
        cursor: "pointer",
        fill: wr,
        onClick: ({ name: h }) => h && s?.(h),
        children: i.map((h) => /* @__PURE__ */ a(Ot, { fill: js, stroke: wr, strokeWidth: 2 }, h.name))
      }
    ),
    t && /* @__PURE__ */ a(gr, { dataKey: "prevAmount", fill: qt(), children: i.map((h) => /* @__PURE__ */ a(Ot, { fill: Pu(), stroke: qt(), strokeWidth: 2 }, h.name)) })
  ] }) });
}, qu = (e) => typeof e == "string" ? e.toLowerCase() : e, Qu = ([e]) => e, Yu = ([, e]) => e, Ft = ({
  stats: e,
  prevStats: t,
  highlightedStats: r,
  title: n,
  sortingItems: o,
  extraHeaderContent: s,
  withPagination: i = !0,
  ...c
}) => {
  const [l, u] = O({}), [g, h] = O(1), [m, f] = O(50), v = S((V, B) => {
    const k = Object.entries(V), b = l.field ? el(
      k,
      ([T, M]) => qu(l.field === Object.keys(B)[0] ? T : M)
    ) : k;
    return !l.dir || l.dir === "ASC" ? b : [...b].reverse();
  }, [l.dir, l.field]), p = S((V) => {
    const B = V[g - 1];
    if (g < V.length)
      return B;
    const k = V[0].length;
    return [...B, ...jr(k - B.length, (b) => [`hidden_${b}`, 0])];
  }, [g]), y = S(
    (V) => /* @__PURE__ */ a(Jt, { currentPage: g, pagesCount: V, onPageChange: h }),
    [g]
  ), R = S(
    (V, B, k, b) => {
      const T = v(V, B), M = T.map(Qu), Q = k && Object.entries(
        { ...wn(M, M.map(() => 0)), ...k }
      ), ae = b && Object.entries(
        { ...wn(M, M.map(() => 0)), ...b }
      );
      if (T.length <= m)
        return {
          currentPageStats: Object.fromEntries(T),
          currentPageHighlightedStats: Q && Object.fromEntries(Q),
          currentPagePrevStats: ae && Object.fromEntries(ae)
        };
      const Oe = Qe(T, m), Nt = Q && Qe(Q, m), bt = ae && Qe(ae, m);
      return {
        currentPageStats: Object.fromEntries(p(Oe)),
        currentPageHighlightedStats: Nt && Object.fromEntries(
          p(Nt)
        ),
        currentPagePrevStats: bt && Object.fromEntries(p(bt)),
        pagination: y(Oe.length),
        max: $s(Math.max(...T.map(Yu)))
      };
    },
    [p, v, m, y]
  ), { currentPageStats: N, currentPagePrevStats: D, currentPageHighlightedStats: x, pagination: F, max: G } = L(
    () => R(
      e,
      o,
      r && Object.keys(r).length > 0 ? r : void 0,
      t && Object.keys(t).length > 0 ? t : void 0
    ),
    [R, r, t, o, e]
  ), A = L(() => Object.keys(N), [N]);
  return /* @__PURE__ */ a(
    $o,
    {
      title: /* @__PURE__ */ d(dn, { children: [
        n,
        /* @__PURE__ */ d("div", { className: "flex items-center gap-3", children: [
          s?.(F ? A : void 0),
          i && Object.keys(e).length > 50 && /* @__PURE__ */ a(
            Wu,
            {
              ranges: [50, 100, 200, 500],
              value: m,
              setValue: (V) => {
                f(V), h(1);
              }
            }
          ),
          /* @__PURE__ */ a(
            Mr,
            {
              buttonVariant: "link",
              menuAlignment: "right",
              buttonSize: "sm",
              buttonClassName: "[&]:p-0",
              items: o,
              order: l,
              onChange: (V) => {
                u(V), h(1);
              }
            }
          )
        ] })
      ] }),
      footer: F && /* @__PURE__ */ a("div", { className: "flex justify-around items-center", "data-testid": "chart-paginator", children: F }),
      children: /* @__PURE__ */ a(
        Xu,
        {
          stats: N,
          prevStats: D,
          highlightedStats: x,
          max: G,
          ...c
        }
      )
    }
  );
}, hn = (e) => e.type !== void 0, Ju = (e) => e.type !== void 0, Zu = (e) => {
  const t = tl(
    e,
    (r) => hn(r.visit) ? "orphanVisits" : "nonOrphanVisits"
  );
  return { orphanVisits: [], nonOrphanVisits: [], ...t };
}, Qo = (e, { shortCode: t, domain: r }, { endDate: n, startDate: o } = {}) => e.filter(
  ({ shortUrl: s, visit: i }) => s && it(s, t, r) && yt(i.date, o, n)
), Yo = (e, t, { endDate: r, startDate: n } = {}) => e.filter(
  ({ shortUrl: o, visit: s }) => o && Ol(o, t) && yt(s.date, n, r)
), Jo = (e, t, { endDate: r, startDate: n } = {}) => e.filter(
  ({ shortUrl: o, visit: s }) => o?.tags.includes(t) && yt(s.date, n, r)
), Pt = (e, t) => ka(e, (r) => r[t]), eg = (e) => {
  const t = (e?.startDate && ke(e?.startDate)) ?? void 0, r = (e?.endDate && ke(e?.endDate)) ?? void 0;
  return { startDate: t, endDate: r };
}, Ir = ({ filter: e, dateRange: t }) => {
  const { startDate: r, endDate: n } = eg(t), o = e?.excludeBots || void 0;
  return { startDate: r, endDate: n, excludeBots: o };
}, tg = (e) => Eo(e.dateRange), rg = ({ dateRange: e, ...t }) => ({
  ...t,
  dateRange: Kd(e)
}), na = (e, t) => {
  if (!(!t || !(e in t)))
    return t[e] && ke(t[e]) || "";
}, Zo = () => {
  const e = $r(), t = ft(), { startDate: r, endDate: n, orphanVisitsType: o, excludeBots: s, loadPrevInterval: i, ...c } = t, l = L(
    () => ({
      dateRange: r != null || n != null ? Vo(r, n) : void 0,
      visitsFilter: {
        orphanVisitsType: o,
        excludeBots: s !== void 0 ? s === "true" : void 0
      },
      loadPrevInterval: i !== void 0 ? i === "true" : void 0
    }),
    [n, s, i, o, r]
  ), u = S((g) => {
    const { dateRange: h, visitsFilter: m = {}, loadPrevInterval: f } = Fa(l, g), { excludeBots: v, orphanVisitsType: p } = m, y = {
      ...c,
      // Merge with rest of existing query so that unknown params are preserved
      startDate: na("startDate", h),
      endDate: na("endDate", h),
      excludeBots: v === void 0 ? void 0 : Rn(v),
      orphanVisitsType: p,
      loadPrevInterval: f === void 0 ? void 0 : Rn(f)
    }, R = Fr(y), N = R ? `?${R}` : "";
    e(N, { replace: !0, relative: "route" });
  }, [l, e, c]);
  return [l, u];
}, ng = () => /* @__PURE__ */ a(
  ml,
  {
    attribution: '&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }
), ag = (e) => {
  if (e.length === 0)
    return {};
  if (e.length > 1)
    return { bounds: e.map(({ latLong: r }) => r) };
  const [{ latLong: t }] = e;
  return { zoom: 10, center: t };
}, es = ({ toggle: e, isOpen: t, title: r, locations: n = [] }) => /* @__PURE__ */ a(Fe, { open: t, onClose: e, title: r, variant: "cover", children: /* @__PURE__ */ d(ul, { ...ag(n), className: "h-full w-full", children: [
  /* @__PURE__ */ a(ng, {}),
  n.map(({ cityName: o, latLong: s, count: i }, c) => /* @__PURE__ */ a(gl, { position: s, children: /* @__PURE__ */ d(hl, { children: [
    /* @__PURE__ */ a("b", { children: i }),
    " visit",
    i > 1 ? "s" : "",
    " from ",
    /* @__PURE__ */ a("b", { children: o })
  ] }) }, c))
] }) }), og = ({ modalTitle: e, activeCities: t, locations: r = [] }) => {
  const { flag: n, setToTrue: o, setToFalse: s } = ee(), [i, c] = O([]), l = S((u) => {
    c(u ? r.filter(u) : r), o();
  }, [r, o]);
  return /* @__PURE__ */ d(E, { children: [
    !t && /* @__PURE__ */ a(
      Pr,
      {
        onClick: () => l(),
        "aria-label": "Show in map",
        title: "Show in map",
        className: "[&]:p-0",
        children: /* @__PURE__ */ a(U, { icon: Nr })
      }
    ),
    t && /* @__PURE__ */ d(
      I,
      {
        buttonContent: /* @__PURE__ */ a(U, { icon: Nr, title: "Show in map" }),
        buttonLabel: "Show in map",
        buttonVariant: "link",
        buttonClassName: "[&]:p-0",
        menuAlignment: "right",
        caretless: !0,
        children: [
          /* @__PURE__ */ a(I.Item, { onClick: () => l(), children: "Show all locations" }),
          /* @__PURE__ */ a(I.Item, { onClick: () => l(({ cityName: u }) => t.includes(u)), children: "Show locations in current page" })
        ]
      }
    ),
    /* @__PURE__ */ a(es, { toggle: s, isOpen: n, title: e, locations: i })
  ] });
}, ts = ({
  onChange: e,
  selected: t = {},
  isOrphanVisits: r = !1,
  withPrevInterval: n = !1,
  disabled: o
}) => {
  const { orphanVisitsType: s, excludeBots: i = !1, loadPrevInterval: c = !1 } = t, l = (h) => ({
    selected: s === h,
    onClick: () => e({ ...t, orphanVisitsType: h === s ? void 0 : h })
  }), u = S(
    () => e({ ...t, excludeBots: !i }),
    [i, e, t]
  ), g = S(
    () => e({ ...t, loadPrevInterval: !c }),
    [c, e, t]
  );
  return /* @__PURE__ */ d(I, { buttonDisabled: o, buttonContent: "More", buttonClassName: "w-full", menuAlignment: "right", children: [
    n && /* @__PURE__ */ d(E, { children: [
      /* @__PURE__ */ a(I.Item, { selected: c, onClick: g, children: "Compare with previous period" }),
      /* @__PURE__ */ a(I.Separator, {})
    ] }),
    /* @__PURE__ */ a(I.Title, { children: "Bots:" }),
    /* @__PURE__ */ a(I.Item, { selected: i, onClick: u, children: "Exclude potential bots" }),
    r && /* @__PURE__ */ d(E, { children: [
      /* @__PURE__ */ a(I.Separator, {}),
      /* @__PURE__ */ a(I.Title, { children: "Orphan visits type:" }),
      /* @__PURE__ */ a(I.Item, { ...l("base_url"), children: "Base URL" }),
      /* @__PURE__ */ a(I.Item, { ...l("invalid_short_url"), children: "Invalid short URL" }),
      /* @__PURE__ */ a(I.Item, { ...l("regular_404"), children: "Regular 404" })
    ] }),
    /* @__PURE__ */ a(I.Separator, {}),
    /* @__PURE__ */ a(
      I.Item,
      {
        disabled: t.excludeBots === void 0 && t.loadPrevInterval === void 0 && t.orphanVisitsType === void 0,
        onClick: () => e({ excludeBots: void 0, loadPrevInterval: void 0, orphanVisitsType: void 0 }),
        children: /* @__PURE__ */ a("i", { children: "Reset to defaults" })
      }
    )
  ] });
}, sg = ({ className: e, value: t, ...r }) => {
  const n = Math.min(100, Math.max(0, t));
  return /* @__PURE__ */ a("div", { className: P("flex h-4 bg-gray-100 overflow-hidden rounded-md", e), ...r, children: /* @__PURE__ */ a(
    "div",
    {
      role: "progressbar",
      "aria-valuemax": 100,
      "aria-valuemin": 0,
      "aria-valuenow": n,
      className: "bg-lm-brand dark:bg-dm-brand transition-[width]",
      style: { width: `${n}%` }
    }
  ) });
}, rs = ({ info: e }) => {
  const { loading: t, errorData: r, progress: n } = e;
  return /* @__PURE__ */ d(E, { children: [
    t && n === null && /* @__PURE__ */ a($e, { loading: !0 }),
    t && n !== null && /* @__PURE__ */ d($e, { loading: !0, children: [
      "This is going to take a while... :S",
      /* @__PURE__ */ a(sg, { value: n, className: "mt-4" })
    ] }),
    r && /* @__PURE__ */ a(ie, { variant: "error", children: /* @__PURE__ */ a(xe, { errorData: r, fallbackMessage: "An error occurred while loading visits :(" }) })
  ] });
}, Bt = ({ children: e, showFallback: t }) => /* @__PURE__ */ d(E, { children: [
  t && /* @__PURE__ */ a($e, { children: "There are no visits matching current filter" }),
  !t && /* @__PURE__ */ a(E, { children: e })
] }), ig = ({ visitsDeletion: e, deleteVisits: t }) => {
  const { deleting: r } = e, { flag: n, setToTrue: o } = ee();
  return /* @__PURE__ */ a(q, { title: /* @__PURE__ */ a("span", { className: "text-danger font-bold text-base", children: "Danger zone" }), children: /* @__PURE__ */ d(dn, { children: [
    /* @__PURE__ */ d("dl", { className: "m-0 mr-3", children: [
      /* @__PURE__ */ a("dt", { children: "Delete visits." }),
      /* @__PURE__ */ d("dd", { className: "m-0", children: [
        "This will delete ",
        /* @__PURE__ */ a("b", { children: "all" }),
        " visits, not only the ones matching current filter."
      ] })
    ] }),
    !n && /* @__PURE__ */ a(_, { variant: "danger", solid: !0, className: "whitespace-nowrap", onClick: o, children: "Delete visits" }),
    n && /* @__PURE__ */ d(
      _,
      {
        solid: !0,
        variant: "danger",
        disabled: r,
        className: "whitespace-nowrap",
        onClick: t,
        autoFocus: !0,
        children: [
          !r && /* @__PURE__ */ a(E, { children: "Click again to confirm" }),
          r && /* @__PURE__ */ a(E, { children: "Deleting..." })
        ]
      }
    )
  ] }) });
}, At = "Others", lg = [
  "Android Browser",
  "Chrome",
  "Chromium",
  "Firefox",
  "Internet Explorer",
  "Microsoft Edge",
  "Opera",
  "Safari",
  "Samsung Internet for Android",
  "Vivaldi",
  "WeChat"
], cg = (e) => {
  if (!Ge(e))
    return { browser: At, os: At };
  const { browser: { name: t }, os: { name: r } } = fl.parse(e);
  return { os: r ?? At, browser: t && lg.includes(t) ? t : At };
}, dg = (e) => Ge(e) ? e.split("/")[e.includes("://") ? 2 : 0]?.split(":")[0] ?? "" : "Direct", ns = (e, t) => e[t] !== void 0, aa = (e) => typeof e == "number" ? e : e ? parseFloat(e) : 0, ug = (e, { os: t }) => {
  e[t] = (e[t] || 0) + 1;
}, gg = (e, { browser: t }) => {
  e[t] = (e[t] || 0) + 1;
}, hg = (e, { referer: t }) => {
  e[t] = (e[t] || 0) + 1;
}, as = (e) => (t, r) => {
  const o = ns(r, e) ? r[e] : "Unknown";
  t[o] = (t[o] || 0) + 1;
}, mg = as("country"), fg = as("city"), pg = (e, t) => {
  if (!ns(t, "city") || t.city === "Unknown")
    return;
  const { city: r, latitude: n, longitude: o } = t, s = e[r] || {
    cityName: r,
    count: 0,
    latLong: [aa(n), aa(o)]
  };
  s.count += 1, e[r] = s;
}, vg = (e, t) => {
  if (!Ju(t))
    return;
  const { visitedUrl: r } = t;
  e[r] = (e[r] || 0) + 1;
}, kr = (e) => e.reduce(
  (t, r) => (ug(t.os, r), gg(t.browsers, r), hg(t.referrers, r), mg(t.countries, r), fg(t.cities, r), pg(t.citiesForMap, r), vg(t.visitedUrls, r), t),
  { os: {}, browsers: {}, referrers: {}, countries: {}, cities: {}, citiesForMap: {}, visitedUrls: {} }
), Qt = (e) => e.map((t) => {
  const { userAgent: r, date: n, referer: o, visitLocation: s, potentialBot: i } = t;
  return {
    date: n,
    potentialBot: i,
    userAgent: r,
    ...cg(r),
    referer: dg(o),
    country: s?.countryName || "Unknown",
    region: s?.regionName || "Unknown",
    city: s?.cityName || "Unknown",
    latitude: s?.latitude,
    longitude: s?.longitude,
    visitedUrl: t.visitedUrl,
    type: hn(t) ? t.type : void 0
  };
}), Cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  normalizeVisits: Qt,
  processStatsFromVisits: kr
}, Symbol.toStringTag, { value: "Module" })), st = 20, yg = ({ browser: e, os: t, referer: r, country: n, city: o, userAgent: s, ...i }, c, l) => {
  const u = l ? s : `${n} ${o}`;
  return `${e} ${t} ${r} ${u} ${i.visitedUrl}`.toLowerCase().includes(c.toLowerCase());
}, Dg = (e, t, r) => t.filter((n) => yg(n, e, r)), Sg = (e, t) => fa(t, e), xg = ({ visits: e, searchTerm: t, order: r, searchInRawUserAgent: n }) => {
  const o = t ? Dg(t, e, n) : [...e], s = Sg(r, o), i = s.length;
  return { visitsGroups: Qe(s, st), total: i };
}, me = "cursor-pointer md:sticky-cell-separated md:top-[calc(var(--header-height)+41px)]", Rg = () => {
  const { anchor: e, tooltip: t } = Pe({ placement: "right" });
  return /* @__PURE__ */ d(E, { children: [
    /* @__PURE__ */ a(U, { icon: Na, ...e }),
    /* @__PURE__ */ a(Ae, { ...t, children: "Potentially a visit from a bot or crawler" })
  ] });
}, wg = ({ visits: e, selectedVisits: t = [], setSelectedVisits: r }) => {
  const [n, o] = O(), s = S((x) => {
    o(x), m(1), r([]);
  }, [r]), [i, c] = O({}), l = ve("visitsList"), u = L(
    () => Fa(
      Vi,
      l?.columns ?? {}
    ),
    [l?.columns]
  ), g = L(
    () => xg({ visits: e, searchTerm: n, order: i, searchInRawUserAgent: u.userAgent }),
    [e, n, i, u.userAgent]
  ), [h, m] = O(1), f = h * st, v = f - st, p = L(
    () => u.visitedUrl ? g.visitsGroups.length === 0 || !!g.visitsGroups[h - 1]?.[0]?.visitedUrl : !1,
    [u.visitedUrl, h, g.visitsGroups]
  ), y = 6 + Number(p) + (u.userAgent ? 1 : 2), R = g.total > 0, N = (x) => c(
    pa({ currentField: i.field, currentOrderDir: i.dir, newField: x })
  ), D = (x) => /* @__PURE__ */ a(lt, { currentOrder: i, field: x, className: "float-right mt-[5px] ml-[5px]" });
  return /* @__PURE__ */ a(
    q,
    {
      bodyClassName: "[&]:p-0 [&]:pb-1",
      title: "Visits list",
      children: /* @__PURE__ */ d(
        w,
        {
          responsive: !1,
          size: "sm",
          className: "w-full relative overflow-y-hidden bg-lm-primary dark:bg-dm-primary",
          header: /* @__PURE__ */ d(E, { children: [
            /* @__PURE__ */ d(w.Row, { children: [
              /* @__PURE__ */ d(
                w.Cell,
                {
                  className: P(me, "[&]:text-center"),
                  onClick: () => r(
                    t.length < g.total ? g.visitsGroups.flat() : []
                  ),
                  children: [
                    /* @__PURE__ */ a("span", { className: "sr-only", children: "Is selected" }),
                    /* @__PURE__ */ a(
                      U,
                      {
                        icon: ct,
                        className: P({ "text-lm-brand dark:text-dm-brand": t.length > 0 })
                      }
                    )
                  ]
                }
              ),
              u.potentialBot && /* @__PURE__ */ d(
                w.Cell,
                {
                  className: P(me, "[&]:text-center"),
                  onClick: () => N("potentialBot"),
                  children: [
                    /* @__PURE__ */ a("span", { className: "sr-only", children: "Is bot" }),
                    /* @__PURE__ */ a(U, { icon: Na }),
                    D("potentialBot")
                  ]
                }
              ),
              u.date && /* @__PURE__ */ d(w.Cell, { className: me, onClick: () => N("date"), children: [
                "Date",
                D("date")
              ] }),
              u.country && /* @__PURE__ */ d(w.Cell, { className: me, onClick: () => N("country"), children: [
                "Country",
                D("country")
              ] }),
              u.region && /* @__PURE__ */ d(w.Cell, { className: me, onClick: () => N("region"), children: [
                "Region",
                D("region")
              ] }),
              u.city && /* @__PURE__ */ d(w.Cell, { className: me, onClick: () => N("city"), children: [
                "City",
                D("city")
              ] }),
              u.userAgent && /* @__PURE__ */ d(w.Cell, { className: me, onClick: () => N("userAgent"), children: [
                "User agent",
                D("userAgent")
              ] }),
              u.browser && /* @__PURE__ */ d(w.Cell, { className: me, onClick: () => N("browser"), children: [
                "Browser",
                D("browser")
              ] }),
              u.browser && /* @__PURE__ */ d(w.Cell, { className: me, onClick: () => N("os"), children: [
                "OS",
                D("os")
              ] }),
              u.referer && /* @__PURE__ */ d(w.Cell, { className: me, onClick: () => N("referer"), children: [
                "Referrer",
                D("referer")
              ] }),
              p && /* @__PURE__ */ d(w.Cell, { className: me, onClick: () => N("visitedUrl"), children: [
                "Visited URL",
                D("visitedUrl")
              ] })
            ] }),
            /* @__PURE__ */ a(w.Row, { children: /* @__PURE__ */ a(w.Cell, { colSpan: y, className: "[&]:p-0", children: /* @__PURE__ */ a(Yt, { size: "md", borderless: !0, onChange: s }) }) })
          ] }),
          footer: g.total > st ? /* @__PURE__ */ a(w.Row, { children: /* @__PURE__ */ a(w.Cell, { type: "td", colSpan: y, className: "md:sticky-cell-separated bottom-0", children: /* @__PURE__ */ d("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4 p-1", children: [
            /* @__PURE__ */ a(
              Jt,
              {
                pagesCount: Math.ceil(g.total / st),
                currentPage: h,
                onPageChange: m
              }
            ),
            /* @__PURE__ */ d("div", { children: [
              "Visits ",
              /* @__PURE__ */ a("b", { children: W(v + 1) }),
              " to",
              " ",
              /* @__PURE__ */ a("b", { children: W(Math.min(f, g.total)) }),
              " of",
              " ",
              /* @__PURE__ */ a("b", { children: W(g.total) })
            ] })
          ] }) }) }) : void 0,
          children: [
            !R && /* @__PURE__ */ a(w.Row, { children: /* @__PURE__ */ a(w.Cell, { colSpan: y, className: "text-center", children: "There are no visits matching current filter" }) }),
            g.visitsGroups[h - 1]?.map((x, F) => {
              const G = t.includes(x);
              return /* @__PURE__ */ d(
                w.Row,
                {
                  className: P("cursor-pointer", G && [
                    "bg-lm-table-highlight hover:[&]:bg-lm-table-highlight",
                    "dark:bg-dm-table-highlight dark:hover:[&]:bg-dm-table-highlight"
                  ]),
                  onClick: () => r(
                    G ? t.filter((A) => A !== x) : [...t, x]
                  ),
                  children: [
                    /* @__PURE__ */ a(w.Cell, { className: "text-center", children: G && /* @__PURE__ */ a(U, { icon: ct, className: "text-lm-brand dark:text-dm-brand" }) }),
                    u.potentialBot && /* @__PURE__ */ a(w.Cell, { className: "text-center", children: x.potentialBot && /* @__PURE__ */ a(Rg, {}) }),
                    u.date && /* @__PURE__ */ a(w.Cell, { children: /* @__PURE__ */ a(_t, { date: x.date }) }),
                    u.country && /* @__PURE__ */ a(w.Cell, { children: x.country }),
                    u.region && /* @__PURE__ */ a(w.Cell, { children: x.region }),
                    u.city && /* @__PURE__ */ a(w.Cell, { children: x.city }),
                    u.userAgent && /* @__PURE__ */ a(w.Cell, { children: x.userAgent }),
                    u.browser && /* @__PURE__ */ a(w.Cell, { children: x.browser }),
                    u.os && /* @__PURE__ */ a(w.Cell, { children: x.os }),
                    u.referer && /* @__PURE__ */ a(w.Cell, { children: x.referer }),
                    p && /* @__PURE__ */ a(w.Cell, { children: x.visitedUrl ?? "" })
                  ]
                },
                F
              );
            })
          ]
        }
      )
    }
  );
}, Ve = {
  byTime: { title: "By time", subPath: "by-time", icon: mi },
  byContext: { title: "By context", subPath: "by-context", icon: Or },
  byLocation: { title: "By location", subPath: "by-location", icon: Nr },
  list: { title: "List", subPath: "list", icon: Br },
  options: { title: "Options", subPath: "options", icon: hi, shouldRender: ({ deletion: e }) => !!e }
};
Object.freeze(Ve);
const xr = ({ display: e }) => e && /* @__PURE__ */ a("div", { className: "mx-auto w-3/4", children: /* @__PURE__ */ a(q, { children: /* @__PURE__ */ d("div", { className: "flex gap-2", children: [
  /* @__PURE__ */ a(U, { icon: fi, className: "mt-1" }),
  /* @__PURE__ */ a("i", { children: "Could not calculate previous period because selected one does not have a strictly defined start date." })
] }) }) }), St = (e) => {
  const {
    children: t,
    visitsInfo: r,
    getVisits: n,
    cancelGetVisits: o,
    deletion: s,
    exportCsv: i,
    isOrphanVisits: c = !1
  } = e, { visits: l, prevVisits: u, loading: g, errorData: h, fallbackInterval: m } = r, [{ dateRange: f, visitsFilter: v, loadPrevInterval: p }, y] = Zo(), R = ve("visits"), [N, D] = O(), x = S(
    ({ startDate: $, endDate: he }, be) => {
      y({
        dateRange: {
          startDate: $ ?? void 0,
          endDate: he ?? void 0
        }
      }), D(be);
    },
    [y]
  ), [F, G] = O(
    m ?? R?.defaultInterval ?? "last30Days"
  ), [A, V] = O([]), [B, k] = O(), b = ne(!0), { search: T } = tr(), M = S(($) => $ ? `../${$}${T}` : T, [T]), Q = L(() => Qt(l), [l]), ae = L(() => u && Qt(u), [u]), { os: Oe, browsers: Nt, referrers: bt, countries: Ns, cities: bs, citiesForMap: Cn, visitedUrls: Vs } = L(
    () => kr(Q),
    [Q]
  ), _e = L(() => kr(ae ?? []), [ae]), Us = L(
    () => Object.fromEntries([
      ["Visits", Object.assign(Q, { type: "main" })],
      ae && ["Previous period", Object.assign(ae, { type: "previous" })],
      A.length > 0 && [
        B ?? "Selected",
        Object.assign(A, { type: "highlighted" })
      ]
    ].filter(Boolean)),
    [B, A, ae, Q]
  ), We = L(() => ({
    ...v,
    excludeBots: v.excludeBots ?? R?.excludeBots,
    loadPrevInterval: p ?? R?.loadPrevInterval
  }), [p, v, R?.excludeBots, R?.loadPrevInterval]), yn = L(() => Object.values(Cn), [Cn]), Vt = ne(void 0), at = S(($) => {
    Vt.current = void 0, V($);
  }, []), Ut = S(($, he) => {
    const be = `${$}_${he}`;
    Vt.current === be ? (V([]), k(void 0), Vt.current = void 0) : (V(Q.filter((Xe) => Xe[$] === he)), k(he), Vt.current = be);
  }, [Q]);
  return j(() => o, [o]), j(() => {
    const $ = f ?? To(F), { loadPrevInterval: he, ...be } = We, Xe = {
      doIntervalFallback: b.current,
      loadPrevInterval: he
    };
    n({ dateRange: $, filter: be }, Xe), at([]), b.current = !1;
  }, [F, f, n, We, at]), j(() => {
    m && F === (R?.defaultInterval ?? "last30Days") && G(m);
  }, [F, m, R?.defaultInterval]), /* @__PURE__ */ d("div", { className: "flex flex-col gap-y-4", children: [
    t,
    /* @__PURE__ */ d("section", { className: "flex flex-col lg:flex-row-reverse gap-4", children: [
      /* @__PURE__ */ d("div", { className: "lg:flex-3 flex flex-col md:flex-row gap-x-2 gap-y-4", children: [
        /* @__PURE__ */ a("div", { className: "grow", children: /* @__PURE__ */ a(
          an,
          {
            disabled: g,
            dateRangeOrInterval: N ?? f ?? F,
            defaultText: "All visits",
            onDatesChange: x
          }
        ) }),
        /* @__PURE__ */ a(
          ts,
          {
            disabled: g,
            isOrphanVisits: c,
            withPrevInterval: !0,
            selected: We,
            onChange: ({ loadPrevInterval: $, ...he }) => y({
              visitsFilter: he,
              loadPrevInterval: $
            })
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { className: "lg:flex-2 xl:flex-3 flex gap-2", children: l.length > 0 && /* @__PURE__ */ d(E, { children: [
        /* @__PURE__ */ a(
          ho,
          {
            className: "max-lg:w-full",
            amount: Q.length,
            onClick: () => i(Q)
          }
        ),
        /* @__PURE__ */ d(
          _,
          {
            variant: "secondary",
            solid: A.length > 0 && !Ke(),
            disabled: A.length === 0,
            className: "max-lg:w-full",
            onClick: () => at([]),
            children: [
              "Clear selection ",
              A.length > 0 && /* @__PURE__ */ d(E, { children: [
                "(",
                W(A.length),
                ")"
              ] })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ d("section", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ a(rs, { info: r }),
      !g && !h && /* @__PURE__ */ d(E, { children: [
        /* @__PURE__ */ a(Dn, { fill: !0, className: "sticky top-(--header-height) z-2", children: Object.values(Ve).map(({ title: $, icon: he, subPath: be, shouldRender: Xe }, Ts) => !Xe || Xe(e) ? /* @__PURE__ */ d(Dn.Pill, { to: M(be), replace: !0, children: [
          /* @__PURE__ */ a(U, { icon: he }),
          /* @__PURE__ */ a("span", { className: "ml-2 max-lg:sr-only", children: $ })
        ] }, Ts) : void 0).filter(Boolean) }),
        /* @__PURE__ */ d(Ua, { children: [
          /* @__PURE__ */ a(
            H,
            {
              path: Ve.byTime.subPath,
              element: /* @__PURE__ */ d(Bt, { showFallback: l.length === 0, children: [
                /* @__PURE__ */ a("div", { "data-testid": "line-chart-container", children: /* @__PURE__ */ a(
                  qo,
                  {
                    visitsGroups: Us,
                    setSelectedVisits: at,
                    onDateRangeChange: x
                  }
                ) }),
                /* @__PURE__ */ a(xr, { display: !!We.loadPrevInterval && !u })
              ] })
            }
          ),
          /* @__PURE__ */ a(
            H,
            {
              path: Ve.byContext.subPath,
              element: /* @__PURE__ */ d(Bt, { showFallback: l.length === 0, children: [
                /* @__PURE__ */ d(
                  "div",
                  {
                    className: P(
                      "grid grid-cols-1 gap-4",
                      {
                        "lg:grid-cols-2": c,
                        "xl:grid-cols-3": !c
                      }
                    ),
                    children: [
                      /* @__PURE__ */ a(ea, { title: "Operating systems", stats: Oe, prevStats: _e.os }),
                      /* @__PURE__ */ a(ea, { title: "Browsers", stats: Nt, prevStats: _e.browsers }),
                      /* @__PURE__ */ a(
                        Ft,
                        {
                          title: "Referrers",
                          withPagination: !1,
                          stats: bt,
                          prevStats: _e.referrers,
                          highlightedStats: Pt(A, "referer"),
                          highlightedLabel: B,
                          sortingItems: {
                            name: "Referrer name",
                            amount: "Visits amount"
                          },
                          onClick: ($) => Ut("referer", $)
                        }
                      ),
                      c && /* @__PURE__ */ a(
                        Ft,
                        {
                          title: "Visited URLs",
                          stats: Vs,
                          prevStats: _e.visitedUrls,
                          highlightedStats: Pt(A, "visitedUrl"),
                          highlightedLabel: B,
                          sortingItems: {
                            visitedUrl: "Visited URL",
                            amount: "Visits amount"
                          },
                          onClick: ($) => Ut("visitedUrl", $)
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ a(xr, { display: !!We.loadPrevInterval && !u })
              ] })
            }
          ),
          /* @__PURE__ */ a(
            H,
            {
              path: Ve.byLocation.subPath,
              element: /* @__PURE__ */ d(Bt, { showFallback: l.length === 0, children: [
                /* @__PURE__ */ d("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ a(
                    Ft,
                    {
                      title: "Countries",
                      stats: Ns,
                      prevStats: _e.countries,
                      highlightedStats: Pt(A, "country"),
                      highlightedLabel: B,
                      sortingItems: {
                        name: "Country name",
                        amount: "Visits amount"
                      },
                      onClick: ($) => Ut("country", $)
                    }
                  ),
                  /* @__PURE__ */ a(
                    Ft,
                    {
                      title: "Cities",
                      stats: bs,
                      prevStats: _e.cities,
                      highlightedStats: Pt(A, "city"),
                      highlightedLabel: B,
                      extraHeaderContent: ($) => yn.length > 0 && /* @__PURE__ */ a(og, { modalTitle: "Cities", locations: yn, activeCities: $ }),
                      sortingItems: {
                        name: "City name",
                        amount: "Visits amount"
                      },
                      onClick: ($) => Ut("city", $)
                    }
                  )
                ] }),
                /* @__PURE__ */ a(xr, { display: !!We.loadPrevInterval && !u })
              ] })
            }
          ),
          /* @__PURE__ */ a(
            H,
            {
              path: Ve.list.subPath,
              element: /* @__PURE__ */ a(
                wg,
                {
                  visits: Q,
                  selectedVisits: A,
                  setSelectedVisits: at
                }
              )
            }
          ),
          s && /* @__PURE__ */ a(
            H,
            {
              path: Ve.options.subPath,
              element: /* @__PURE__ */ a(ig, { ...s })
            }
          ),
          /* @__PURE__ */ a(H, { path: "*", element: /* @__PURE__ */ a(Ta, { replace: !0, to: M(Ve.byTime.subPath) }) })
        ] })
      ] })
    ] })
  ] });
}, os = Ce(({ getDomainVisits: e, domainVisits: t, cancelGetDomainVisits: r }) => {
  const { ReportExporter: n } = z(os), { domain: o = "" } = Ct(), [s, i = s] = o.split("_"), c = S(
    (u, g) => e({
      domain: i,
      options: g,
      params: u
    }),
    [i, e]
  ), l = S(
    (u) => n.exportVisits(`domain_${s}_visits.csv`, u),
    [s, n]
  );
  return /* @__PURE__ */ a(
    St,
    {
      getVisits: c,
      cancelGetVisits: r,
      visitsInfo: t,
      exportCsv: l,
      children: /* @__PURE__ */ a(Dt, { visits: t.visits, title: `"${s}" visits` })
    }
  );
}, () => [ge.visits]), Ng = K(os, ["ReportExporter"]), ss = Ce(({ getNonOrphanVisits: e, nonOrphanVisits: t, cancelGetNonOrphanVisits: r }) => {
  const { ReportExporter: n } = z(ss), o = S(
    (i) => n.exportVisits("non_orphan_visits.csv", i),
    [n]
  ), s = S(
    (i, c) => e({ options: c, params: i }),
    [e]
  );
  return /* @__PURE__ */ a(
    St,
    {
      getVisits: s,
      cancelGetVisits: r,
      visitsInfo: t,
      exportCsv: o,
      children: /* @__PURE__ */ a(Dt, { title: "Non-orphan visits", visits: t.visits })
    }
  );
}, () => [ge.visits]), bg = K(ss, ["ReportExporter"]), is = Ce(({ getOrphanVisits: e, orphanVisits: t, cancelGetOrphanVisits: r, deleteOrphanVisits: n, orphanVisitsDeletion: o }) => {
  const s = ue("orphanVisitsDeletion"), { ReportExporter: i } = z(is), c = S(
    (g) => i.exportVisits("orphan_visits.csv", g),
    [i]
  ), l = S(
    (g, h) => e({
      options: h,
      params: g,
      orphanVisitsType: g.filter?.orphanVisitsType
    }),
    [e]
  ), u = L(() => s ? { deleteVisits: n, visitsDeletion: o } : void 0, [n, o, s]);
  return /* @__PURE__ */ a(
    St,
    {
      getVisits: l,
      cancelGetVisits: r,
      visitsInfo: t,
      exportCsv: c,
      deletion: u,
      isOrphanVisits: !0,
      children: /* @__PURE__ */ a(Dt, { title: "Orphan visits", visits: t.visits })
    }
  );
}, () => [ge.orphanVisits]), Vg = K(is, ["ReportExporter"]), oa = 5e3, Ug = 2, Tg = 4, Eg = ({ currentPage: e, pagesCount: t }) => e >= t, Lg = (e, t) => t * 100 / e, ls = ({
  visitsLoader: e,
  shouldCancel: t,
  progressChanged: r,
  batchSize: n
}) => {
  const o = async (i, c) => Promise.all(
    c.map(async (l) => e({ ...i, page: l, itemsPerPage: oa }).then(({ data: u }) => u))
  ).then((l) => l.flat()), s = async (i, c, l = 0) => {
    if (t())
      return [];
    const u = await o(i, c[l]);
    return r(Lg(c.length, l + 1)), l < c.length - 1 ? u.concat(await s(i, c, l + 1)) : u;
  };
  return async (i) => {
    const { pagination: c, data: l } = await e({ ...i, page: 1, itemsPerPage: oa });
    if (Eg(c))
      return l;
    const u = rl(Ug, c.pagesCount + 1), g = Qe(u, n);
    return c.pagesCount - 1 > n && r(0), l.concat(await s(i, g));
  };
}, xt = (e, t) => async (r) => e ? t({ page: 1, itemsPerPage: 1, excludeBots: r }).then(({ data: n }) => n[0]) : Promise.resolve(void 0), Rt = ({ typePrefix: e, createLoaders: t, shouldCancel: r }) => {
  const n = we(`${e}/progressChanged`), o = we(`${e}/fallbackToInterval`), s = Y(e, async (i, { getState: c, dispatch: l }) => {
    const { params: u, options: g } = i, { visitsLoader: h, lastVisitLoader: m } = t(i), f = _d(u.dateRange), v = Ir(u), p = g.loadPrevInterval && tg(u) ? Ir(rg(u)) : void 0, y = Tg / (p ? 2 : 1), R = p ? { main: 0, prev: 0 } : { main: 0 }, N = (A, V) => {
      R[A] = V;
      const B = Object.values(R), k = B.reduce((b, T) => b + T, 0);
      l(n(k / B.length));
    }, D = ls({
      visitsLoader: h,
      shouldCancel: () => r(c),
      progressChanged: (A) => N("main", A),
      batchSize: y
    }), [x, F, G] = await Promise.all([
      D(v),
      m(u.filter?.excludeBots),
      p ? D(p).then((A) => A.map((V) => {
        if (f === void 0)
          return V;
        const { date: B, ...k } = V, b = Qi(se(B), f);
        return { ...k, date: ke(b) };
      })) : Promise.resolve(void 0)
    ]);
    return !x.length && F && l(o(zd(F.date))), { ...i, visits: x, prevVisits: G };
  });
  return Object.assign(s, { progressChanged: n, fallbackToInterval: o });
}, wt = ({ name: e, asyncThunkCreator: t, initialState: r, filterCreatedVisits: n, extraReducers: o }) => {
  const { pending: s, rejected: i, fulfilled: c, progressChanged: l, fallbackToInterval: u } = t, { reducer: g, actions: h } = J({
    name: e,
    initialState: r,
    reducers: {
      cancelGetVisits: (f) => ({ ...f, cancelLoad: !0 })
    },
    extraReducers: (f) => {
      f.addCase(s, () => ({ ...r, loading: !0 })), f.addCase(i, (v, { error: p }) => ({ ...r, errorData: ce(p) ?? null })), f.addCase(c, (v, { payload: p }) => (
        // Unpack the whole payload, as it could have different props depending on the concrete reducer
        { ...v, ...p, loading: !1, progress: null, errorData: null }
      )), f.addCase(l, (v, { payload: p }) => ({ ...v, progress: p })), f.addCase(u, (v, { payload: p }) => ({ ...v, fallbackInterval: p })), f.addCase(tt, (v, { payload: p }) => {
        const { visits: y } = v, R = n(v, p.createdVisits).map(({ visit: N }) => N);
        return R.length ? { ...v, visits: [...R, ...y] } : v;
      }), o?.(f);
    }
  }), { cancelGetVisits: m } = h;
  return { reducer: g, cancelGetVisits: m };
}, cs = "shlink/domainVisits", Ig = {
  visits: [],
  domain: "",
  loading: !1,
  cancelLoad: !1,
  errorData: null,
  progress: null
}, kg = (e) => Rt({
  typePrefix: `${cs}/getDomainVisits`,
  createLoaders: ({ domain: t, options: r }) => {
    const n = e(), { doIntervalFallback: o = !1 } = r, s = (c) => n.getDomainVisits(t, c), i = xt(o, (c) => n.getDomainVisits(t, c));
    return { visitsLoader: s, lastVisitLoader: i };
  },
  shouldCancel: (t) => t().domainVisits.cancelLoad
}), Fg = (e) => wt({
  name: cs,
  initialState: Ig,
  // @ts-expect-error TODO Fix type inference
  asyncThunkCreator: e,
  filterCreatedVisits: ({ domain: t, params: r }, n) => Yo(
    n,
    t,
    r?.dateRange
  )
}), ds = "shlink/orphanVisits", Pg = {
  visits: [],
  loading: !1,
  cancelLoad: !1,
  errorData: null,
  progress: null
}, Ag = (e) => Rt({
  typePrefix: `${ds}/getNonOrphanVisits`,
  createLoaders: ({ options: t }) => {
    const r = e(), { doIntervalFallback: n = !1 } = t, o = async (i) => r.getNonOrphanVisits(i), s = xt(n, (i) => r.getNonOrphanVisits(i));
    return { visitsLoader: o, lastVisitLoader: s };
  },
  shouldCancel: (t) => t().orphanVisits.cancelLoad
}), Mg = (e) => wt({
  name: ds,
  initialState: Pg,
  asyncThunkCreator: e,
  filterCreatedVisits: ({ params: t }, r) => {
    const { startDate: n, endDate: o } = t?.dateRange ?? {};
    return r.filter(({ visit: s }) => yt(s.date, n, o));
  }
}), us = "shlink/orphanVisits", Og = {
  visits: [],
  loading: !1,
  cancelLoad: !1,
  errorData: null,
  progress: null
}, Bg = (e, t) => !t || t === e.type, Gg = ({ data: e, ...t }, r) => {
  const n = e.filter((o) => hn(o) && Bg(o, r));
  return { ...t, data: n };
}, Hg = (e) => Rt({
  typePrefix: `${us}/getOrphanVisits`,
  createLoaders: ({ orphanVisitsType: t, options: r }) => {
    const n = e(), { doIntervalFallback: o = !1 } = r, s = async (c) => n.getOrphanVisits({
      ...c,
      type: t
      // Send type to the server, in case it supports filtering by type
    }).then(
      // We still try to filter locally, for Shlink older than 4.0.0
      (l) => Gg(l, t)
    ), i = xt(o, (c) => n.getOrphanVisits(c));
    return { visitsLoader: s, lastVisitLoader: i };
  },
  shouldCancel: (t) => t().orphanVisits.cancelLoad
}), jg = (e, t) => wt({
  name: us,
  initialState: Og,
  asyncThunkCreator: e,
  extraReducers: (r) => {
    r.addCase(t.fulfilled, (n) => ({ ...n, visits: [] }));
  },
  filterCreatedVisits: ({ params: r }, n) => {
    const { startDate: o, endDate: s } = r?.dateRange ?? {};
    return n.filter(({ visit: i, shortUrl: c }) => !c && yt(i.date, o, s));
  }
}), gs = "shlink/orphanVisitsDeletion", sa = {
  deletedVisits: 0,
  deleting: !1,
  error: !1
}, $g = (e) => Y(
  `${gs}/deleteOrphanVisits`,
  () => e().deleteOrphanVisits()
), zg = (e) => J({
  name: gs,
  initialState: sa,
  reducers: {},
  extraReducers: (t) => {
    t.addCase(e.pending, (r) => ({ ...r, deleting: !0, error: !1 })), t.addCase(e.rejected, (r, { error: n }) => ({ ...r, deleting: !1, error: !0, errorData: ce(n) })), t.addCase(e.fulfilled, (r, { payload: n }) => {
      const { deletedVisits: o } = n;
      return { ...sa, deletedVisits: o };
    });
  }
}), hs = "shlink/shortUrlVisits", Kg = {
  visits: [],
  shortCode: "",
  loading: !1,
  errorData: null,
  cancelLoad: !1,
  progress: null
}, _g = (e) => Rt({
  typePrefix: `${hs}/getShortUrlVisits`,
  createLoaders: ({ shortCode: t, domain: r, options: n }) => {
    const o = e(), { doIntervalFallback: s = !1 } = n, i = (l) => o.getShortUrlVisits({ shortCode: t, domain: r }, l), c = xt(
      s,
      (l) => o.getShortUrlVisits({ shortCode: t, domain: r }, l)
    );
    return { visitsLoader: i, lastVisitLoader: c };
  },
  shouldCancel: (t) => t().shortUrlVisits.cancelLoad
}), Wg = (e, t) => wt({
  name: hs,
  initialState: Kg,
  // @ts-expect-error TODO Fix type inference
  asyncThunkCreator: e,
  extraReducers: (r) => {
    r.addCase(t.fulfilled, (n, { payload: o }) => n.shortCode === o.shortCode && n.domain === o.domain ? { ...n, visits: [] } : n);
  },
  filterCreatedVisits: ({ shortCode: r, domain: n, params: o }, s) => Qo(
    s,
    { shortCode: r, domain: n },
    o?.dateRange
  )
}), ms = "shlink/shortUrlVisitsDeletion", ia = {
  shortCode: "",
  deletedVisits: 0,
  deleting: !1,
  error: !1
}, Xg = (e) => Y(
  `${ms}/deleteShortUrlVisits`,
  async ({ shortCode: t, domain: r }) => ({ ...await e().deleteShortUrlVisits({ shortCode: t, domain: r }), shortCode: t, domain: r })
), qg = (e) => J({
  name: ms,
  initialState: ia,
  reducers: {},
  extraReducers: (t) => {
    t.addCase(e.pending, (r) => ({ ...r, deleting: !0, error: !1 })), t.addCase(e.rejected, (r, { error: n }) => ({ ...r, deleting: !1, error: !0, errorData: ce(n) })), t.addCase(e.fulfilled, (r, { payload: n }) => {
      const { shortCode: o, domain: s, deletedVisits: i } = n;
      return { ...ia, shortCode: o, domain: s, deletedVisits: i };
    });
  }
}), fs = "shlink/tagVisits", Qg = {
  visits: [],
  tag: "",
  loading: !1,
  cancelLoad: !1,
  errorData: null,
  progress: null
}, Yg = (e) => Rt({
  typePrefix: `${fs}/getTagVisits`,
  createLoaders: ({ tag: t, options: r }) => {
    const n = e(), { doIntervalFallback: o = !1 } = r, s = (c) => n.getTagVisits(t, c), i = xt(o, async (c) => n.getTagVisits(t, c));
    return { visitsLoader: s, lastVisitLoader: i };
  },
  shouldCancel: (t) => t().tagVisits.cancelLoad
}), Jg = (e) => wt({
  name: fs,
  initialState: Qg,
  // @ts-expect-error TODO Fix type inference
  asyncThunkCreator: e,
  filterCreatedVisits: ({ tag: t, params: r }, n) => Jo(
    n,
    t,
    r?.dateRange
  )
}), ps = "shlink/visitsOverview", Mt = {
  nonOrphanVisits: {
    total: 0
  },
  orphanVisits: {
    total: 0
  },
  loading: !1,
  error: !1
}, la = (e) => e.filter(({ visit: t }) => t.potentialBot).length, Zg = (e) => Y(
  `${ps}/loadVisitsOverview`,
  () => e().getVisitsOverview().then(
    ({ nonOrphanVisits: t, visitsCount: r = 0, orphanVisits: n, orphanVisitsCount: o = 0 }) => ({
      nonOrphanVisits: {
        total: t?.total ?? r,
        nonBots: t?.nonBots,
        bots: t?.bots
      },
      orphanVisits: {
        total: n?.total ?? o,
        nonBots: n?.nonBots,
        bots: n?.bots
      }
    })
  )
), eh = (e) => J({
  name: ps,
  initialState: Mt,
  reducers: {},
  extraReducers: (t) => {
    t.addCase(e.pending, () => ({ ...Mt, loading: !0 })), t.addCase(e.rejected, () => ({ ...Mt, error: !0 })), t.addCase(e.fulfilled, (r, { payload: n }) => ({ ...Mt, ...n })), t.addCase(tt, ({ nonOrphanVisits: r, orphanVisits: n, ...o }, { payload: s }) => {
      const { nonOrphanVisits: i, orphanVisits: c } = Zu(
        s.createdVisits
      ), l = i.length, u = la(i), g = l - u, h = c.length, m = la(c), f = h - m;
      return {
        ...o,
        nonOrphanVisits: {
          total: r.total + l,
          bots: r.bots && r.bots + u,
          nonBots: r.nonBots && r.nonBots + g
        },
        orphanVisits: {
          total: n.total + h,
          bots: n.bots && n.bots + m,
          nonBots: n.nonBots && n.nonBots + f
        }
      };
    });
  }
}), th = ({ shortUrl: e }) => {
  const { anchor: t, tooltip: r } = Pe({ placement: "bottom" });
  return e ? /* @__PURE__ */ d("span", { children: [
    /* @__PURE__ */ a("b", { className: "cursor-default", ...t, children: /* @__PURE__ */ a(_t, { date: e.dateCreated, relative: !0 }) }),
    /* @__PURE__ */ a(Ae, { ...r, children: /* @__PURE__ */ a(_t, { date: e.dateCreated }) })
  ] }) : /* @__PURE__ */ a("small", { children: "Loading..." });
}, rh = ({ shortUrl: e, loading: t, shortUrlVisits: r }) => {
  const { visits: n } = r, o = e?.shortUrl ?? "", s = e?.longUrl ?? "", i = e?.title;
  return /* @__PURE__ */ d(Dt, { title: /* @__PURE__ */ d(E, { children: [
    "Visits for ",
    /* @__PURE__ */ a(pe, { href: o })
  ] }), visits: n, shortUrl: e, children: [
    /* @__PURE__ */ a("hr", {}),
    /* @__PURE__ */ d("div", { children: [
      "Created: ",
      /* @__PURE__ */ a(th, { shortUrl: e })
    ] }),
    /* @__PURE__ */ d("div", { "data-testid": "long-url-container", children: [
      `${i ? "Title" : "Long URL"}: `,
      t && /* @__PURE__ */ a("small", { children: "Loading..." }),
      !t && /* @__PURE__ */ a(pe, { href: s, children: i ?? s })
    ] })
  ] });
}, vs = Ce(({
  shortUrlVisits: e,
  shortUrlVisitsDeletion: t,
  shortUrlsDetails: r,
  getShortUrlVisits: n,
  getShortUrlsDetails: o,
  deleteShortUrlVisits: s,
  cancelGetShortUrlVisits: i
}) => {
  const c = ue("shortUrlVisitsDeletion"), { ReportExporter: l } = z(vs), u = Zr(), g = L(() => r.shortUrls?.get(u), [u, r.shortUrls]), h = S(
    (v, p) => n({
      ...u,
      options: p,
      params: v
    }),
    [n, u]
  ), m = S((v) => l.exportVisits(
    `short-url_${g?.shortUrl.replace(/https?:\/\//g, "")}_visits.csv`,
    v
  ), [l, g?.shortUrl]), f = L(() => c ? { deleteVisits: () => s(u), visitsDeletion: t } : void 0, [s, u, t, c]);
  return j(() => {
    o([u]);
  }, [u, o]), /* @__PURE__ */ a(
    St,
    {
      getVisits: h,
      cancelGetVisits: i,
      visitsInfo: e,
      exportCsv: m,
      deletion: f,
      children: /* @__PURE__ */ a(rh, { shortUrl: g, loading: r.loading, shortUrlVisits: e })
    }
  );
}, (e) => e.shortCode ? [ge.shortUrlVisits(qr(e.shortCode))] : []), nh = K(vs, ["ReportExporter"]), ah = ({ tagVisits: e, colorGenerator: t }) => {
  const { visits: r, tag: n } = e;
  return /* @__PURE__ */ a(Dt, { title: /* @__PURE__ */ d("span", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ a("span", { className: "mr-2", children: "Visits for" }),
    /* @__PURE__ */ a(nn, { text: n, colorGenerator: t })
  ] }), visits: r });
}, Cs = Ce(({ getTagVisits: e, tagVisits: t, cancelGetTagVisits: r }) => {
  const { ColorGenerator: n, ReportExporter: o } = z(Cs), { tag: s = "" } = Ct(), i = S(
    (l, u) => e({ tag: s, params: l, options: u }),
    [e, s]
  ), c = S(
    (l) => o.exportVisits(`tag_${s}_visits.csv`, l),
    [o, s]
  );
  return /* @__PURE__ */ a(
    St,
    {
      getVisits: i,
      cancelGetVisits: r,
      visitsInfo: t,
      exportCsv: c,
      children: /* @__PURE__ */ a(ah, { tagVisits: t, colorGenerator: n })
    }
  );
}, () => [ge.visits]), oh = K(Cs, ["ColorGenerator", "ReportExporter"]), mn = ({
  title: e,
  colors: t,
  getVisitsForComparison: r,
  visitsComparisonInfo: n,
  cancelGetVisitsComparison: o
}) => {
  const { loading: s, visitsGroups: i } = n, c = ve("visits"), l = L(
    () => Object.keys(i).reduce((N, D, x) => (N[D] = Object.assign(Qt(i[D]), {
      color: t?.[D] ?? Wo(x)
    }), N), {}),
    [t, i]
  ), u = L(() => Object.values(i).every((N) => N.length === 0), [i]), [{ dateRange: g, visitsFilter: h }, m] = Zo(), [f, v] = O(), p = S(
    ({ startDate: N, endDate: D }, x) => {
      m({
        dateRange: {
          startDate: N ?? void 0,
          endDate: D ?? void 0
        }
      }), v(x);
    },
    [m]
  ), [y] = O(() => g ?? c?.defaultInterval ?? "last30Days"), R = L(() => ({
    ...h,
    excludeBots: h.excludeBots ?? c?.excludeBots
  }), [h, c?.excludeBots]);
  return j(() => {
    const N = g ?? To(y);
    return r({
      params: { dateRange: N, filter: R }
    }), o;
  }, [o, g, r, y, R]), /* @__PURE__ */ d("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d(q, { bodyClassName: "flex items-center", children: [
      /* @__PURE__ */ a(lr, {}),
      /* @__PURE__ */ a("h3", { className: "grow text-center", children: e })
    ] }),
    /* @__PURE__ */ d("div", { className: "flex flex-col lg:flex-row-reverse gap-4", children: [
      /* @__PURE__ */ d("div", { className: "lg:flex-3 flex flex-col md:flex-row gap-x-2 gap-y-4", children: [
        /* @__PURE__ */ a("div", { className: "grow", children: /* @__PURE__ */ a(
          an,
          {
            disabled: s,
            defaultText: "All visits",
            dateRangeOrInterval: f ?? g ?? y,
            onDatesChange: p
          }
        ) }),
        /* @__PURE__ */ a(
          ts,
          {
            disabled: s,
            selected: R,
            onChange: ({ orphanVisitsType: N, excludeBots: D }) => m({
              visitsFilter: { orphanVisitsType: N, excludeBots: D }
            })
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { className: "hidden lg:block lg:flex-2 xl:flex-3" })
    ] }),
    /* @__PURE__ */ a(rs, { info: n }),
    !s && /* @__PURE__ */ a(Bt, { showFallback: u, children: /* @__PURE__ */ a(qo, { visitsGroups: l, onDateRangeChange: p }) })
  ] });
}, sh = Ce(({ getDomainVisitsForComparison: e, domainVisitsComparison: t, cancelGetDomainVisitsComparison: r }) => {
  const n = ln("domains"), o = S(
    (s) => e({ ...s, domains: n }),
    [n, e]
  );
  return /* @__PURE__ */ a(
    mn,
    {
      title: `Comparing "${n.join('", "')}"`,
      getVisitsForComparison: o,
      visitsComparisonInfo: t,
      cancelGetVisitsComparison: r
    }
  );
}, () => [ge.visits]), ih = ({
  visitsLoaders: e,
  shouldCancel: t,
  progressChanged: r
}) => {
  const n = Object.keys(e), o = Math.max(1, Math.round(4 / n.length)), s = Object.fromEntries(n.map((l) => [l, 0])), i = (l, u) => {
    s[l] = u;
    const g = Object.values(s), h = g.reduce((m, f) => m + f, 0);
    r(h / g.length);
  }, c = Object.entries(e).map(
    ([l, u]) => [
      l,
      ls({
        visitsLoader: u,
        batchSize: o,
        shouldCancel: t,
        progressChanged: (g) => i(l, g)
      })
    ]
  );
  return async (l) => {
    const u = await Promise.all(c.map(async ([g, h]) => {
      const m = await h(l);
      return [g, m];
    }));
    return Object.fromEntries(u);
  };
}, fn = ({ typePrefix: e, createLoaders: t, shouldCancel: r }) => {
  const n = we(`${e}/progressChanged`), o = Y(
    e,
    async (s, { getState: i, dispatch: c }) => {
      const l = t(s), g = await ih({
        visitsLoaders: l,
        shouldCancel: () => r(i),
        progressChanged: (h) => c(n(h))
      })(Ir(s.params));
      return { ...s, visitsGroups: g };
    }
  );
  return Object.assign(o, { progressChanged: n });
}, pn = ({ name: e, asyncThunkCreator: t, initialState: r, filterCreatedVisitsForGroup: n }) => {
  const { pending: o, rejected: s, fulfilled: i, progressChanged: c } = t, { reducer: l, actions: u } = J({
    name: e,
    initialState: r,
    reducers: {
      cancelGetVisits: (h) => ({ ...h, cancelLoad: !0 })
    },
    extraReducers: (h) => {
      h.addCase(o, () => ({ ...r, loading: !0 })), h.addCase(s, (m, { error: f }) => ({ ...r, errorData: ce(f) ?? null })), h.addCase(i, (m, { payload: f }) => ({ ...m, ...f, loading: !1, progress: null, errorData: null })), h.addCase(c, (m, { payload: f }) => ({ ...m, progress: f })), h.addCase(tt, (m, { payload: f }) => {
        const { visitsGroups: v, ...p } = m, y = Object.keys(v).map((N) => {
          const D = n(
            { ...p, groupKey: N },
            f.createdVisits
          ).map(({ visit: x }) => x);
          return [N, [...D, ...v[N]]];
        }), R = Object.fromEntries(y);
        return { ...p, visitsGroups: R };
      });
    }
  }), { cancelGetVisits: g } = u;
  return { reducer: l, cancelGetVisits: g };
}, ys = "shlink/domainVisitsComparison", lh = {
  visitsGroups: {},
  loading: !1,
  cancelLoad: !1,
  errorData: null,
  progress: null
}, ch = (e) => fn({
  typePrefix: `${ys}/getDomainVisitsForComparison`,
  createLoaders: ({ domains: t }) => {
    const r = e(), n = t.map((o) => [
      o,
      (s) => r.getDomainVisits(o, s)
    ]);
    return Object.fromEntries(n);
  },
  shouldCancel: (t) => t().domainVisitsComparison.cancelLoad
}), dh = (e) => pn({
  name: ys,
  initialState: lh,
  // @ts-expect-error TODO Fix type inference
  asyncThunkCreator: e,
  filterCreatedVisitsForGroup: ({ groupKey: t, params: r }, n) => Yo(
    n,
    t,
    r?.dateRange
  )
}), Ds = "shlink/shortUrlVisitsComparison", uh = {
  visitsGroups: {},
  loading: !1,
  cancelLoad: !1,
  errorData: null,
  progress: null
}, gh = (e) => fn({
  typePrefix: `${Ds}/getShortUrlVisitsForComparison`,
  createLoaders: ({ shortUrls: t }) => {
    const r = e(), n = t.map((o) => [
      Qr(o),
      (s) => r.getShortUrlVisits(o, s)
    ]);
    return Object.fromEntries(n);
  },
  shouldCancel: (t) => t().shortUrlVisitsComparison.cancelLoad
}), hh = (e) => pn({
  name: Ds,
  initialState: uh,
  // @ts-expect-error TODO Fix type inference
  asyncThunkCreator: e,
  filterCreatedVisitsForGroup: ({ groupKey: t, params: r }, n) => Qo(
    n,
    za(t),
    r?.dateRange
  )
}), Ss = "shlink/tagVisitsComparison", mh = {
  visitsGroups: {},
  loading: !1,
  cancelLoad: !1,
  errorData: null,
  progress: null
}, fh = (e) => fn({
  typePrefix: `${Ss}/getTagVisitsForComparison`,
  createLoaders: ({ tags: t }) => {
    const r = e(), n = t.map((o) => [
      o,
      (s) => r.getTagVisits(o, s)
    ]);
    return Object.fromEntries(n);
  },
  shouldCancel: (t) => t().tagVisitsComparison.cancelLoad
}), ph = (e) => pn({
  name: Ss,
  initialState: mh,
  // @ts-expect-error TODO Fix type inference
  asyncThunkCreator: e,
  filterCreatedVisitsForGroup: ({ groupKey: t, params: r }, n) => Jo(
    n,
    t,
    r?.dateRange
  )
}), vh = Ce(({
  getShortUrlVisitsForComparison: e,
  shortUrlVisitsComparison: t,
  cancelGetShortUrlVisitsComparison: r,
  shortUrlsDetails: n,
  getShortUrlsDetails: o
}) => {
  const s = ln("short-urls"), i = L(() => s.map(za), [s]), c = S(
    (g) => e({ ...g, shortUrls: i }),
    [e, i]
  ), l = L(() => [...n.shortUrls?.values() ?? []], [n.shortUrls]), u = L(() => {
    const { visitsGroups: g, loading: h, ...m } = t, f = l.reduce(
      (v, p) => (v[p.shortUrl] = g[Qr(p)] ?? [], v),
      {}
    );
    return { ...m, visitsGroups: f, loading: h || n.loading };
  }, [t, n.loading, l]);
  return j(() => {
    i.length > 0 && o(i);
  }, [o, i]), /* @__PURE__ */ a(
    mn,
    {
      title: /* @__PURE__ */ a("span", { "data-testid": "title", children: n.loading ? "Loading..." : `Comparing ${l.length} short URLs` }),
      getVisitsForComparison: c,
      visitsComparisonInfo: u,
      cancelGetVisitsComparison: r
    }
  );
}, () => [ge.visits]), xs = Ce(({ getTagVisitsForComparison: e, tagVisitsComparison: t, cancelGetTagVisitsComparison: r }) => {
  const { ColorGenerator: n } = z(xs), o = ln("tags"), s = S(
    (l) => e({ ...l, tags: o }),
    [e, o]
  ), { visitsGroups: i } = t, c = L(
    () => Object.keys(i).reduce((l, u) => (l[u] = n.getColorForKey(u), l), {}),
    [n, i]
  );
  return /* @__PURE__ */ a(
    mn,
    {
      title: /* @__PURE__ */ d(E, { children: [
        "Comparing ",
        o.map((l) => /* @__PURE__ */ a(nn, { colorGenerator: n, text: l }, l))
      ] }),
      getVisitsForComparison: s,
      visitsComparisonInfo: t,
      cancelGetVisitsComparison: r,
      colors: c
    }
  );
}, () => [ge.visits]), Ch = K(xs, ["ColorGenerator"]), yh = (e, t) => {
  const r = (n, o) => t(
    [...n, "mercureInfo"],
    [...o, "createNewVisits", "loadMercureInfo"]
  );
  e.serviceFactory("MapModal", () => es), e.factory("ShortUrlVisits", nh), e.decorator("ShortUrlVisits", t([
    "shortUrlVisits",
    "shortUrlVisitsDeletion",
    "shortUrlsDetails",
    "mercureInfo"
  ], [
    "getShortUrlVisits",
    "deleteShortUrlVisits",
    "getShortUrlsDetails",
    "cancelGetShortUrlVisits",
    "createNewVisits",
    "loadMercureInfo"
  ])), e.factory("TagVisits", oh), e.decorator("TagVisits", r(["tagVisits"], ["getTagVisits", "cancelGetTagVisits"])), e.factory("TagVisitsComparison", Ch), e.decorator("TagVisitsComparison", r(
    ["tagVisitsComparison"],
    ["getTagVisitsForComparison", "cancelGetTagVisitsForComparison"]
  )), e.serviceFactory("DomainVisitsComparison", () => sh), e.decorator("DomainVisitsComparison", r(
    ["domainVisitsComparison"],
    ["getDomainVisitsForComparison", "cancelGetDomainVisitsForComparison"]
  )), e.serviceFactory("ShortUrlVisitsComparison", () => vh), e.decorator("ShortUrlVisitsComparison", r(
    ["shortUrlVisitsComparison", "shortUrlsDetails"],
    [
      "getShortUrlVisitsForComparison",
      "cancelGetShortUrlVisitsForComparison",
      "getShortUrlsDetails"
    ]
  )), e.factory("DomainVisits", Ng), e.decorator("DomainVisits", r(["domainVisits"], ["getDomainVisits", "cancelGetDomainVisits"])), e.factory("OrphanVisits", Vg), e.decorator("OrphanVisits", r(
    ["orphanVisits", "orphanVisitsDeletion"],
    ["getOrphanVisits", "cancelGetOrphanVisits", "deleteOrphanVisits"]
  )), e.factory("NonOrphanVisits", bg), e.decorator("NonOrphanVisits", r(
    ["nonOrphanVisits"],
    ["getNonOrphanVisits", "cancelGetNonOrphanVisits"]
  )), e.serviceFactory("VisitsParser", () => Cg), e.serviceFactory("getShortUrlVisits", _g, "apiClientFactory"), e.serviceFactory("cancelGetShortUrlVisits", (n) => n.cancelGetVisits, "shortUrlVisitsReducerCreator"), e.serviceFactory("getShortUrlVisitsForComparison", gh, "apiClientFactory"), e.serviceFactory(
    "cancelGetShortUrlVisitsForComparison",
    (n) => n.cancelGetVisits,
    "shortUrlVisitsComparisonReducerCreator"
  ), e.serviceFactory("deleteShortUrlVisits", Xg, "apiClientFactory"), e.serviceFactory("getTagVisits", Yg, "apiClientFactory"), e.serviceFactory("cancelGetTagVisits", (n) => n.cancelGetVisits, "tagVisitsReducerCreator"), e.serviceFactory("getTagVisitsForComparison", fh, "apiClientFactory"), e.serviceFactory(
    "cancelGetTagVisitsForComparison",
    (n) => n.cancelGetVisits,
    "tagVisitsComparisonReducerCreator"
  ), e.serviceFactory("getDomainVisits", kg, "apiClientFactory"), e.serviceFactory("cancelGetDomainVisits", (n) => n.cancelGetVisits, "domainVisitsReducerCreator"), e.serviceFactory("getDomainVisitsForComparison", ch, "apiClientFactory"), e.serviceFactory(
    "cancelGetDomainVisitsForComparison",
    (n) => n.cancelGetVisits,
    "domainVisitsComparisonReducerCreator"
  ), e.serviceFactory("getOrphanVisits", Hg, "apiClientFactory"), e.serviceFactory("cancelGetOrphanVisits", (n) => n.cancelGetVisits, "orphanVisitsReducerCreator"), e.serviceFactory("deleteOrphanVisits", $g, "apiClientFactory"), e.serviceFactory("getNonOrphanVisits", Ag, "apiClientFactory"), e.serviceFactory("cancelGetNonOrphanVisits", (n) => n.cancelGetVisits, "nonOrphanVisitsReducerCreator"), e.serviceFactory("createNewVisits", () => tt), e.serviceFactory("loadVisitsOverview", Zg, "apiClientFactory"), e.serviceFactory("visitsOverviewReducerCreator", eh, "loadVisitsOverview"), e.serviceFactory("visitsOverviewReducer", (n) => n.reducer, "visitsOverviewReducerCreator"), e.serviceFactory("domainVisitsReducerCreator", Fg, "getDomainVisits"), e.serviceFactory("domainVisitsReducer", (n) => n.reducer, "domainVisitsReducerCreator"), e.serviceFactory("nonOrphanVisitsReducerCreator", Mg, "getNonOrphanVisits"), e.serviceFactory("nonOrphanVisitsReducer", (n) => n.reducer, "nonOrphanVisitsReducerCreator"), e.serviceFactory(
    "orphanVisitsReducerCreator",
    jg,
    "getOrphanVisits",
    "deleteOrphanVisits"
  ), e.serviceFactory("orphanVisitsReducer", (n) => n.reducer, "orphanVisitsReducerCreator"), e.serviceFactory(
    "orphanVisitsDeletionReducerCreator",
    zg,
    "deleteOrphanVisits"
  ), e.serviceFactory("orphanVisitsDeletionReducer", (n) => n.reducer, "orphanVisitsDeletionReducerCreator"), e.serviceFactory(
    "shortUrlVisitsReducerCreator",
    Wg,
    "getShortUrlVisits",
    "deleteShortUrlVisits"
  ), e.serviceFactory("shortUrlVisitsReducer", (n) => n.reducer, "shortUrlVisitsReducerCreator"), e.serviceFactory(
    "shortUrlVisitsDeletionReducerCreator",
    qg,
    "deleteShortUrlVisits"
  ), e.serviceFactory("shortUrlVisitsDeletionReducer", (n) => n.reducer, "shortUrlVisitsDeletionReducerCreator"), e.serviceFactory("tagVisitsReducerCreator", Jg, "getTagVisits"), e.serviceFactory("tagVisitsReducer", (n) => n.reducer, "tagVisitsReducerCreator"), e.serviceFactory(
    "tagVisitsComparisonReducerCreator",
    ph,
    "getTagVisitsForComparison"
  ), e.serviceFactory("tagVisitsComparisonReducer", (n) => n.reducer, "tagVisitsComparisonReducerCreator"), e.serviceFactory(
    "domainVisitsComparisonReducerCreator",
    dh,
    "getDomainVisitsForComparison"
  ), e.serviceFactory("domainVisitsComparisonReducer", (n) => n.reducer, "domainVisitsComparisonReducerCreator"), e.serviceFactory(
    "shortUrlVisitsComparisonReducerCreator",
    hh,
    "getShortUrlVisitsForComparison"
  ), e.serviceFactory(
    "shortUrlVisitsComparisonReducer",
    (n) => n.reducer,
    "shortUrlVisitsComparisonReducerCreator"
  );
}, ot = ({ children: e, to: t, active: r, ...n }) => /* @__PURE__ */ a(
  Ii,
  {
    ...n,
    className: ({ isActive: o }) => P(
      "flex items-center gap-2",
      "no-underline rounded-none px-5 py-2.5",
      {
        "text-white bg-lm-main dark:bg-dm-main": o || r,
        "highlight:bg-lm-secondary highlight:dark:bg-dm-secondary": !o && !r
      }
    ),
    to: t,
    children: e
  }
), Dh = ({ routePrefix: e, showOnMobile: t = !1 }) => {
  const { pathname: r } = tr(), n = (o) => `${e}${o}`;
  return /* @__PURE__ */ a(
    "aside",
    {
      className: P(
        "w-(--aside-menu-width) bg-lm-primary dark:bg-dm-primary",
        "pt-[15px] md:pt-[30px] pb-[10px]",
        "fixed! bottom-0 top-(--header-height) z-890 transition-[left] duration-300",
        "shadow-aside-menu-mobile md:shadow-aside-menu",
        {
          "left-0": t,
          "max-md:left-[calc(-1*(var(--aside-menu-width)+35px))]": !t
        }
      ),
      children: /* @__PURE__ */ d("nav", { className: "flex flex-col h-full", children: [
        /* @__PURE__ */ d(ot, { to: n("/overview"), children: [
          /* @__PURE__ */ a(U, { icon: pi }),
          "Overview"
        ] }),
        /* @__PURE__ */ d(ot, { to: n("/list-short-urls/1"), active: r.match("/list-short-urls") !== null, children: [
          /* @__PURE__ */ a(U, { icon: Br }),
          "List short URLs"
        ] }),
        /* @__PURE__ */ d(ot, { to: n("/create-short-url"), children: [
          /* @__PURE__ */ a(U, { icon: vi, flip: "horizontal" }),
          "Create short URL"
        ] }),
        /* @__PURE__ */ d(ot, { to: n("/manage-tags"), children: [
          /* @__PURE__ */ a(U, { icon: wa }),
          "Manage tags"
        ] }),
        /* @__PURE__ */ d(ot, { to: n("/manage-domains"), children: [
          /* @__PURE__ */ a(U, { icon: Ci }),
          "Manage domains"
        ] })
      ] })
    }
  );
}, Rs = pt(void 0), vn = () => vt(Rs), Sh = ({ children: e }) => {
  const t = vn(), { flag: r, toggle: n, setToTrue: o, setToFalse: s } = ee(), i = t ?? { sidebarVisible: r, toggleSidebar: n, showSidebar: o, hideSidebar: s };
  return /* @__PURE__ */ a(Rs.Provider, { value: i, children: e });
}, xh = ({ className: e, ...t }) => {
  const r = vn();
  if (!r)
    throw new Error("ShlinkSidebarToggleButton has to be used inside a ShlinkSidebarVisibilityProvider");
  const { sidebarVisible: n, toggleSidebar: o } = r;
  return /* @__PURE__ */ a(
    et,
    {
      "aria-label": "Toggle sidebar",
      className: P(
        "md:hidden transition-colors",
        {
          "text-white/50": !n,
          "text-white": n
        },
        e
      ),
      onClick: o,
      ...t,
      children: /* @__PURE__ */ a(U, { icon: yi, size: "xl" })
    }
  );
}, ws = ({ createNotFound: e, autoToggleButton: t }) => {
  const {
    TagsList: r,
    ShortUrlsList: n,
    CreateShortUrl: o,
    ShortUrlVisits: s,
    TagVisits: i,
    DomainVisits: c,
    OrphanVisits: l,
    NonOrphanVisits: u,
    Overview: g,
    EditShortUrl: h,
    ManageDomains: m,
    TagVisitsComparison: f,
    DomainVisitsComparison: v,
    ShortUrlVisitsComparison: p,
    ShortUrlRedirectRules: y
  } = z(ws), R = tr(), N = Ne(), { sidebarVisible: D, showSidebar: x, hideSidebar: F } = vn();
  j(() => F(), [R, F]);
  const G = pu(x, F), A = ue("shortUrlRedirectRules");
  return /* @__PURE__ */ d(E, { children: [
    t && /* @__PURE__ */ a(xh, { className: "fixed top-4 left-3 z-1035" }),
    /* @__PURE__ */ a("div", { ...G, className: "h-full", children: /* @__PURE__ */ d("div", { className: "h-full", children: [
      /* @__PURE__ */ a(Dh, { routePrefix: N, showOnMobile: D }),
      /* @__PURE__ */ a(
        "div",
        {
          className: "min-h-full pt-[20px] md:pt-[30px] md:pl-(--aside-menu-width)",
          onPointerDown: F,
          children: /* @__PURE__ */ a("div", { className: "container mx-auto px-3", children: /* @__PURE__ */ d(Ua, { children: [
            /* @__PURE__ */ a(H, { index: !0, element: /* @__PURE__ */ a(Ta, { replace: !0, to: "overview" }) }),
            /* @__PURE__ */ a(H, { path: "/overview", element: /* @__PURE__ */ a(g, {}) }),
            /* @__PURE__ */ a(H, { path: "/list-short-urls/:page", element: /* @__PURE__ */ a(n, {}) }),
            /* @__PURE__ */ a(H, { path: "/create-short-url", element: /* @__PURE__ */ a(o, {}) }),
            /* @__PURE__ */ a(H, { path: "/short-code/:shortCode/visits", children: ["", "*"].map((V) => /* @__PURE__ */ a(H, { path: V, element: /* @__PURE__ */ a(s, {}) }, V)) }),
            /* @__PURE__ */ a(H, { path: "/short-code/:shortCode/edit", element: /* @__PURE__ */ a(h, {}) }),
            A && /* @__PURE__ */ a(H, { path: "/short-code/:shortCode/redirect-rules", element: /* @__PURE__ */ a(y, {}) }),
            /* @__PURE__ */ a(H, { path: "/short-urls/compare-visits", element: /* @__PURE__ */ a(p, {}) }),
            /* @__PURE__ */ a(H, { path: "/tag/:tag/visits", children: ["", "*"].map((V) => /* @__PURE__ */ a(H, { path: V, element: /* @__PURE__ */ a(i, {}) }, V)) }),
            /* @__PURE__ */ a(H, { path: "/tags/compare-visits", element: /* @__PURE__ */ a(f, {}) }),
            /* @__PURE__ */ a(H, { path: "/domain/:domain/visits", children: ["", "*"].map((V) => /* @__PURE__ */ a(H, { path: V, element: /* @__PURE__ */ a(c, {}) }, V)) }),
            /* @__PURE__ */ a(H, { path: "/orphan-visits", children: ["", "*"].map((V) => /* @__PURE__ */ a(H, { path: V, element: /* @__PURE__ */ a(l, {}) }, V)) }),
            /* @__PURE__ */ a(H, { path: "/non-orphan-visits", children: ["", "*"].map((V) => /* @__PURE__ */ a(H, { path: V, element: /* @__PURE__ */ a(u, {}) }, V)) }),
            /* @__PURE__ */ a(H, { path: "/manage-tags", element: /* @__PURE__ */ a(r, {}) }),
            /* @__PURE__ */ a(H, { path: "/manage-domains", element: /* @__PURE__ */ a(m, {}) }),
            /* @__PURE__ */ a(H, { path: "/domains/compare-visits", element: /* @__PURE__ */ a(v, {}) }),
            e && /* @__PURE__ */ a(H, { path: "*", element: e("/list-short-urls/1") })
          ] }) })
        }
      )
    ] }) })
  ] });
}, Rh = K(ws, [
  "TagsList",
  "ShortUrlsList",
  "CreateShortUrl",
  "ShortUrlVisits",
  "TagVisits",
  "DomainVisits",
  "OrphanVisits",
  "NonOrphanVisits",
  "Overview",
  "EditShortUrl",
  "ManageDomains",
  "TagVisitsComparison",
  "DomainVisitsComparison",
  "ShortUrlVisitsComparison",
  "ShortUrlRedirectRules"
]), wh = process.env.NODE_ENV === "production", Nh = (e) => Ei({
  devTools: !wh,
  reducer: Li({
    mercureInfo: e.mercureInfoReducer,
    shortUrlsList: e.shortUrlsListReducer,
    shortUrlCreation: e.shortUrlCreationReducer,
    shortUrlDeletion: e.shortUrlDeletionReducer,
    shortUrlEdition: e.shortUrlEditionReducer,
    shortUrlsDetails: e.shortUrlsDetailsReducer,
    shortUrlVisits: e.shortUrlVisitsReducer,
    shortUrlVisitsDeletion: e.shortUrlVisitsDeletionReducer,
    shortUrlVisitsComparison: e.shortUrlVisitsComparisonReducer,
    tagVisits: e.tagVisitsReducer,
    tagVisitsComparison: e.tagVisitsComparisonReducer,
    domainVisits: e.domainVisitsReducer,
    domainVisitsComparison: e.domainVisitsComparisonReducer,
    orphanVisits: e.orphanVisitsReducer,
    orphanVisitsDeletion: e.orphanVisitsDeletionReducer,
    nonOrphanVisits: e.nonOrphanVisitsReducer,
    tagsList: e.tagsListReducer,
    tagDelete: e.tagDeleteReducer,
    tagEdit: e.tagEditReducer,
    domainsList: e.domainsListReducer,
    visitsOverview: e.visitsOverviewReducer,
    shortUrlRedirectRules: e.shortUrlRedirectRulesReducer,
    shortUrlRedirectRulesSaving: e.setShortUrlRedirectRulesReducer
  }),
  middleware: (t) => t({
    // State is too big for these
    immutableCheck: !1,
    serializableCheck: !1
  })
}), bh = (e) => {
  e.factory("Main", Rh), e.factory("store", Nh);
}, ye = new Es(), { container: Vh } = ye, Uh = (e) => (t) => Object.fromEntries(
  e.map((r) => [r, t[r]])
), Th = (e, t) => (...r) => e[t](...r), Eh = (e, t) => ({
  ...e,
  // Wrap actual action service in a function so that it is lazily created the first time it is called
  [t]: Th(Vh, t)
}), nt = (e, t = []) => Ls(
  e ? Uh(e) : null,
  t.reduce(Eh, {})
);
bh(ye);
tu(ye, nt);
wu(ye, nt);
yh(ye, nt);
Al(ye);
kl(ye, nt);
_l(ye, nt);
ku(ye);
ld(ye, nt);
let ca;
const Lh = (e) => ({ serverVersion: t, apiClient: r, settings: n, routesPrefix: o = "", createNotFound: s, tagColorsStorage: i, autoSidebarToggle: c = !0 }) => {
  const l = Rl(t), u = ne(void 0), [g, h] = O(), m = ki(), f = L(() => m ? ba : Fi, [m]);
  return j(() => {
    ca = r, e.value("apiClientFactory", () => ca), i && e.value("TagColorsStorage", i);
    const { Main: v, store: p, loadMercureInfo: y, listTags: R, listDomains: N } = e.container;
    u.current = /* @__PURE__ */ a(v, { createNotFound: s, autoToggleButton: c }), h(p), p.dispatch(y(n)), p.dispatch(R()), p.dispatch(N());
  }, [r, c, s, n, i]), g ? /* @__PURE__ */ a(Is, { store: g, children: /* @__PURE__ */ a(Ui, { value: n ?? {}, children: /* @__PURE__ */ a(xl, { value: l, children: /* @__PURE__ */ a(Sh, { children: /* @__PURE__ */ a(yl, { value: o, children: /* @__PURE__ */ a(f, { children: u.current }) }) }) }) }) }) : /* @__PURE__ */ a(E, {});
}, Ih = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=", kh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAMAAAAhFXfZAAAC91BMVEVMaXEzeak2f7I4g7g3g7cua5gzeKg8hJo3grY4g7c3grU0gLI2frE0daAubJc2gbQwd6QzeKk2gLMtd5sxdKIua5g1frA2f7IydaM0e6w2fq41fK01eqo3grgubJgta5cxdKI1f7AydaQydaMxc6EubJgvbJkwcZ4ubZkwcJwubZgubJcydqUydKIxapgubJctbJcubZcubJcvbJYubJcvbZkubJctbJctbZcubJg2f7AubJcrbZcubJcubJcua5g3grY0fq8ubJcubJdEkdEwhsw6i88vhswuhcsuhMtBjMgthMsrg8srgss6is8qgcs8i9A9iMYtg8spgcoogMo7hcMngMonf8olfso4gr8kfck5iM8jfMk4iM8he8k1fro7itAgesk2hs8eecgzfLcofssdeMg0hc4cd8g2hcsxeLQbdsgZdcgxeLImfcszhM0vda4xgckzhM4xg84wf8Yxgs4udKsvfcQucqhUndROmdM1fK0wcZ8vb5w0eqpQm9MzeKhXoNVcpdYydKNWn9VZotVKltJFjsIwcJ1Rms9OlslLmtH///8+kc9epdYzd6dbo9VHkMM2f7FHmNBClM8ydqVcpNY9hro3gLM9hLczealQmcw3fa46f7A8gLMxc6I3eagyc6FIldJMl9JSnNRSntNNl9JPnNJFi75UnM9ZodVKksg8kM45jc09e6ZHltFBk883gbRBh7pDk9EwcaBzn784g7dKkcY2i81Om9M7j85Llc81is09g7Q4grY/j9A0eqxKmdFFltBEjcXf6fFImdBCiLxJl9FGlNFBi78yiMxVndEvbpo6js74+vx+psPP3+o/ks5HkcpGmNCjwdZCkNDM3ehYoNJEls+lxNkxh8xHks0+jdC1zd5Lg6r+/v/H2ufz9/o3jM3t8/edvdM/k89Th61OiLBSjbZklbaTt9BfptdjmL1AicBHj8hGk9FAgK1dkLNTjLRekrdClc/k7fM0icy0y9tgp9c4jc2NtM9Dlc8zicxeXZn3AAAAQ3RSTlMAHDdTb4yPA+LtnEQmC4L2EmHqB7XA0d0sr478x4/Yd5i1zOfyPkf1sLVq4Nh3FvjxopQ2/STNuFzUwFIwxKaejILpIBEV9wAABhVJREFUeF6s1NdyFEcYBeBeoQIhRAkLlRDGrhIgY3BJL8CVeKzuyXFzzjkn5ZxzzuScg3PO8cKzu70JkO0LfxdTU//pM9vTu7Xgf6KqOVTb9X7toRrVEfBf1HTVjZccrT/2by1VV928Yty9ZbVuucdz90frG8DBjl9pVApbOstvmMuvVgaNXSfAAd6pGxpy6yxf5ph43pS/4f3uoaGm2rdu72S9xzOvMymkZFq/ptDrk90mhW7e4zl7HLzhxGWPR20xmSxJ/VqldG5m9XhaVOA1DadsNh3Pu5L2N6QtPO/32JpqQBVVk20oy/Pi2s23WEvyfHbe1thadVQttvm7Llf65gGmXK67XtupyoM7HQhmXdLS8oGWJNeOJ3C5fG5XCEJnkez3/oFdsvgJ4l2ANZwhrJKk/7OSXa+3Vw2WJMlKnGkobouYk6T0TyX30klOUnTD9HJ5qpckL3EW/w4XF3Xd0FGywXUrstrclVsqz5Pd/sXFYyDnPdrLcQODmGOK47IZb4CmibmMn+MYRzFZ5jg33ZL/EJrWcszHmANy3ARBK/IXtciJy8VsitPSdE3uuHxzougojcUdr8/32atnz/ev3f/K5wtpxUTpcaI45zusVDpYtZi+jg0oU9b3x74h7+n9ABvYEZeKaVq0sh0AtLKsFtqNBdeT0MrSzwwlq9+x6xAO4tgOtSzbCjrNQQiNvQUbUEubvzBUeGw26yDCsRHCoLkTHDa7IdOLIThs/gHvChszh2CimE8peRs47cxANI0lYNB5y1DljpOF0IhzBDPOZnDOqYYbeGKECbPzWnXludPphw5c2YBq5zlwXphIbO4VDCZ0gnPfUO1TwZoYwAs2ExPCedAu9DAjfQUjzITQb3jNj0KG2Sgt6BHaQUdYzWz+XmBktOHwanXjaSTcwwziBcuMOtwBmqPrTOxFQR/DRKKPqyur0aiW6cULYsx6tBm0jXpR/AUWR6HRq9WVW6MRhIq5jLyjbaCTDCijyYJNpCajdyobP/eTw0iexBAKkJ3gA5KcQb2zBXsIBckn+xVv8jkZSaEFHE+jFEleAEfayRU0MouNoBmB/L50Ai/HSLIHxcrpCvnhSQAuakKp2C/YbCylJjXRVy/z3+Kv/RrNcCo+WUzlVEhzKffnTQnxeN9fWF88fiNCUdSTsaufaChKWInHeysygfpIqagoakW+vV20J8uyl6TyNKEZWV4oRSPyCkWpgOLSbkCObT8o2r6tlG58HQquf6O0v50tB7JM7F4EORd2dx/K0w/KHsVkLPaoYrwgP/y7krr3SSMA4zj+OBgmjYkxcdIJQyQRKgg2viX9Hddi9UBb29LrKR7CVVEEEXWojUkXNyfTNDE14W9gbHJNuhjDettN3ZvbOvdOqCD3Jp/9l+/wJE+9PkYGjx/fqkys3S2rMozM/o2106rfMUINo6hVqz+eu/hd1c4xTg0TAfy5kV+4UG6+IthHTU9woWmxuKNbTfuCSfovBCxq7EtHqvYL4Sm6F8GVxsSXHMQ07TOi1DKtZxjWaaIyi4CXWjxPccUw8WVbMYY5wxC1mzEyXMJWkllpRloi+Kkoq69sxBTlElF6aAxYUbjXNlhlDZilDnM4U5SlN5biRsRHnbx3mbeWjEh4mEyiuJDl5XcWVmX5GvNkFgLWZM5qwsop4/AWfLhU1cR7k1VVvcYCWRkOI6Xy5gmnphCYIkvzuNYzHzosq2oNk2RtSs8khfUOfHIDgR6ysYBaMpl4uEgk2U/oJTs9AaTSwma7dT69geAE2ZpEjUsn2ieJNHeKfrI3EcAGJ2ZaNgVuC8EBctCLc57P5u5led6IOBkIYkuQMrmmjChs4VkfOerHqSBkPzZlhe06RslZ3zMjk2sscqKwY0RcjKK+LWbzd7KiHhkncs/siFJ+V5eXxD34B8nVuJEpGJNmxN2gH3vSvp7J70tF+D1Ej8qUJD1TkErAND2GZwTFg/LubvmgiBG3SOvdlsqFQrkEzJCL1rstlnVFROixZoDDSuXQFHESwVGlcuQcMb/b42NgjLowh5MTDFE3vNB5qStRIErdCQEh6pLPR92anSUb/wAIhldAaDMpGgAAAABJRU5ErkJggg==", Fh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC", Ph = () => {
  delete bn.Icon.Default.prototype._getIconUrl, bn.Icon.Default.mergeOptions({
    iconRetinaUrl: kh,
    iconUrl: Ih,
    shadowUrl: Fh
  });
};
Ph();
const cm = Lh(ye);
export {
  xh as ShlinkSidebarToggleButton,
  Sh as ShlinkSidebarVisibilityProvider,
  cm as ShlinkWebComponent
};
