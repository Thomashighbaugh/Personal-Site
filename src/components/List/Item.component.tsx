import Link from "next/link";
import { Icon } from "@iconify/react";

import { Action } from "./Action.component";
import { ListActionType } from "~/types";

import type { ReactNode } from "react";

import type { ListAction, WithChildren } from "~/types";

interface ItemProps extends WithChildren {
  actions?: Array<ListAction>;
  description?: string;
  icon?: string | ReactNode;
  iconColor?: string;
  title: string;
}

export function Item({
  actions,
  children,
  description,
  title,
}: ItemProps): JSX.Element {
  return (
    <li className="card glass h-full max-h-full min-h-full rounded-xl border border-primary-700 bg-white bg-opacity-10 backdrop-blur-sm backdrop-filter transition duration-300 ease-in-out dark:border-primary-300 dark:bg-primary-900 dark:bg-opacity-20">
      <div className="flex h-full flex-col px-4 py-4 sm:px-6">
        <h1 className="card-title w-full overflow-hidden text-center text-xl font-black uppercase text-primary-700 dark:text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-2 flex-1 items-center text-sm font-medium text-primary-500 dark:text-primary-100">
            {description}
          </p>
        )}

        {actions && (
          <div className="relative bottom-0 end-0 right-0 mt-1 inline-flex w-full place-content-end items-center justify-end align-middle sm:mt-1">
            {actions.map((action, index) => {
              switch (action.type) {
                case ListActionType.BUTTON:
                  return (
                    <Action
                      aria-label={action.label}
                      key={index}
                      onClick={action.onClick}
                    >
                      <span className="sr-only">{action.label}</span>
                      <Icon className="self-center" icon={action.icon} />
                    </Action>
                  );
                case ListActionType.LINK:
                  if (action.external ?? true)
                    return (
                      <Action
                        as="a"
                        aria-label={action.label}
                        href={action.href}
                        key={index}
                        onClick={action.onClick}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="sr-only">{action.label}</span>
                        <Icon className="self-center" icon={action.icon} />
                      </Action>
                    );

                  return (
                    <Link href={action.href} passHref>
                      <Action
                        as="a"
                        aria-label={action.label}
                        key={index}
                        onClick={action.onClick}
                      >
                        <span className="sr-only">{action.label}</span>
                        <Icon className="self-center" icon={action.icon} />
                      </Action>
                    </Link>
                  );
              }
            })}
          </div>
        )}
      </div>
      {children}
    </li>
  );
}
