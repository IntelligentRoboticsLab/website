import { useState } from "react";

interface IBibButtonProps {
  bibtex: string;
  text: string;
}

export default function BibButton(props: IBibButtonProps) {
  const [cooldown, setCooldown] = useState(false);

  return (
    <div className="flex w-auto">
      <button
        id="command"
        onClick={() => {
          navigator.clipboard.writeText(props.bibtex);
          if (cooldown === false) {
            setCooldown(true);

            setTimeout(() => {
              setCooldown(false);
            }, 1000);
          }
        }}
        className="flex w-auto flex-row gap-2 rounded-lg bg-dnt-orange-200 px-2 py-1 hover:cursor-pointer hover:bg-dnt-orange-200/50 dark:bg-dnt-orange-800/50 hover:dark:bg-dnt-orange-700/50 "
      >
        {props.text}
        <svg
          id={`copy-icon ${props.bibtex}`}
          className={cooldown ? "hidden" : ""}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <svg
          id={`check-icon ${props.bibtex}`}
          className={cooldown ? "" : "hidden"}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline
            points="20 6 9 17 4 12"
            className="animate-checkmark"
            strokeDasharray={450}
            strokeDashoffset={30}
          />
        </svg>
      </button>
    </div>
  );
}
