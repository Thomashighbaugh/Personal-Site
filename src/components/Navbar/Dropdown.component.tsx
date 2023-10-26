import clsx from "clsx";
import Link from "next/link";
import { forwardRef, Fragment } from "react";
import { Icon } from "@iconify/react";
import { Menu, Transition } from "@headlessui/react";

import { NavigationItemType, WithChildren, WithClassName } from "~/types";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import type { NavigationItems } from "~/types";

type Position = "top-left" | "top-right";

interface StandardProps extends WithChildren {
  items: NavigationItems;
  position: Position;
}

interface MenuLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active: boolean;
}

interface MenuButtonIconProps extends WithClassName {
  icon: string | ReactNode;
  direction?: "left" | "right";
}

const StyledMenuItem = forwardRef<HTMLAnchorElement, MenuLinkProps>(
  function StyledMenuItem({ active, children, className, ...rest }, ref) {
    return (
      <div
        className={clsx(
          "default-transition flex cursor-pointer items-center px-4 py-3 text-sm font-medium tracking-wide",
          active
            ? "bg-primary-100/50 text-primary-900 dark:bg-primary-600/50 dark:text-primary-200"
            : "text-primary-300 hover:text-primary-700 dark:text-white dark:hover:text-primary-200",
          className,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

function MenuButtonIcon({
  className,
  icon,
  direction: type = "left",
}: MenuButtonIconProps): JSX.Element {
  if (typeof icon !== "string") return <>{icon}</>;

  if (type === "right")
    return (
      <Icon
        aria-hidden="true"
        className={clsx("ml-3 h-4 w-4", className)}
        icon={icon}
      />
    );

  return (
    <Icon
      aria-hidden="true"
      className={clsx("mr-3 h-5 w-5", className)}
      icon={icon}
    />
  );
}

/**
 * Menu Link
 *
 * @see https://headlessui.dev/react/menu#integrating-with-next-js
 */
function MenuLink({
  children,
  href,
  onClick,
  ...rest
}: MenuLinkProps): JSX.Element {
  return (
    <Link href={href}>
      <StyledMenuItem onClick={(...args): void => onClick(...args)} {...rest}>
        {children}
      </StyledMenuItem>
    </Link>
  );
}

export function Dropdown({
  children,
  items,
  position = "top-left",
}: StandardProps): JSX.Element {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }): JSX.Element => (
        <>
          <Menu.Button as={Fragment}>{children}</Menu.Button>

          <Transition
            appear={true}
            enter="transition ease-in-out"
            enterFrom="transform scale-50 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition ease-in-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-50 opacity-0"
            show={open}
          >
            <Menu.Items
              className={clsx(
                "menu-items",
                position === "top-left" && "left-0 origin-top-left",
                position === "top-right" && "right-0 origin-top-right",
              )}
            >
              {items.map((section, index) => (
                <div className="py-2" key={index}>
                  {section.map((item, j) => (
                    <Menu.Item key={j}>
                      {({ active }): JSX.Element => {
                        switch (item.type) {
                          case NavigationItemType.ACTION:
                            return (
                              <StyledMenuItem
                                active={active}
                                className="group focus:outline-1"
                                onClick={(): void => item.onClick()}
                              >
                                <MenuButtonIcon icon={item.icon} />
                                {item.text}
                                {item.endIcon && (
                                  <>
                                    <span className="flex-1" />
                                    <MenuButtonIcon
                                      direction="right"
                                      icon={item.endIcon}
                                    />
                                  </>
                                )}
                              </StyledMenuItem>
                            );
                          case NavigationItemType.DIVIDER:
                            return <hr className="nav-divider" />;
                          case NavigationItemType.LINK:
                            const external = item.external ?? false;
                            if (external)
                              return (
                                <StyledMenuItem
                                  className="group"
                                  active={active}
                                  href={item.href}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <MenuButtonIcon icon={item.icon} />
                                  {item.text}
                                  <span className="flex-1" />
                                  <MenuButtonIcon
                                    direction="right"
                                    icon="feather:external-link"
                                  />
                                </StyledMenuItem>
                              );

                            return (
                              <MenuLink active={active} href={item.href}>
                                <MenuButtonIcon icon={item.icon} />
                                {item.text}
                              </MenuLink>
                            );
                        }
                      }}
                    </Menu.Item>
                  ))}
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
