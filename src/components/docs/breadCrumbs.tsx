import clsx from "clsx";
import { SIDEBAR_HEADER_MAP, type OuterHeaders } from "../../config";
import { getIsRtlFromLangCode, getLanguageFromURL } from "../../languages";

export default function BreadCrumbs() {
  const lang = getLanguageFromURL(window.location.href);
  const isRtl = getIsRtlFromLangCode(lang ?? "en");

  const getHeaderName = (header: OuterHeaders) => {
    if (lang === "en") return header;
    return SIDEBAR_HEADER_MAP[lang][header];
  };

  const breadcrumbs = window.location.pathname
    .split("/")
    .slice(window.location.pathname.split("/").length > 3 ? -2 : -1)
    .map((crumb) => {
      const path = window.location.pathname
        .split("/")
        .slice(0, window.location.pathname.split("/").indexOf(crumb) + 1)
        .join("/");
      return {
        href: `${window.location.protocol}//${window.location.host}${path}`,
        key: crumb,
        text: getHeaderName(
          (crumb[0]?.toUpperCase() + crumb.slice(1)) as OuterHeaders
        ),
      };
    });

  return (
    <div className="mb-4 flex items-center gap-2 px-4 text-sm">
      <a
        href="/"
        className="rounded-full border bg-dnt-orange-200/50 p-2 hover:bg-dnt-orange-200/75 hover:no-underline dark:border-dnt-orange-200/20 dark:bg-dnt-orange-200/10 dark:hover:border-dnt-orange-200/50"
      >
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m12 5.561l-7 5.6V19h5v-4h4v4h5v-7.358a1 1 0 0 0-.375-.781L12 5.561ZM12 3l7.874 6.3A3 3 0 0 1 21 11.641V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.839A2 2 0 0 1 3.75 9.6L12 3Z"
          />
        </svg>
      </a>
      <BreadCrumbsArrow isRtl={isRtl} />
      {breadcrumbs.map((crumb, index) => (
        <div className="flex items-center gap-2" key={crumb.key}>
          <a
            href={crumb.href}
            className="rounded-full border bg-dnt-orange-200/50 p-2 hover:bg-dnt-orange-200/75 hover:no-underline dark:border-dnt-orange-200/20 dark:bg-dnt-orange-200/10 dark:hover:border-dnt-orange-200/50"
          >
            {crumb.text}
          </a>
          {index < breadcrumbs.length - 1 && <BreadCrumbsArrow isRtl={isRtl} />}
        </div>
      ))}
    </div>
  );
}

function BreadCrumbsArrow(props: { isRtl: boolean }) {
  return (
    <svg
      className={clsx(props.isRtl && "rotate-180")}
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
      />
    </svg>
  );
}
