import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { HomeIcon } from "@heroicons/react/24/solid";

type BreadcrumbParam = {
  href?: string;
  text: string;
};

type Props = {
  breadcrumbs: BreadcrumbParam[];
};

export default function BoardBreadcrumb({ breadcrumbs }: Props) {
  return (
    <Breadcrumb className="mt-4">
      <BreadcrumbList className="!gap-1">
        {breadcrumbs.map((bread, index) => (
          <Fragment key={bread.text}>
            <BreadcrumbItem className="font-semibold text-sm lg:text-base text-[#555555]">
              {bread.href ? (
                <BreadcrumbLink href={bread.href}>
                  {bread.text === "홈" ? (
                    <HomeIcon className="size-5" />
                  ) : (
                    bread.text
                  )}
                </BreadcrumbLink>
              ) : bread.text === "홈" ? (
                <HomeIcon className="size-5" />
              ) : (
                bread.text
              )}
            </BreadcrumbItem>
            {index !== breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
