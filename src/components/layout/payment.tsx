import React from "react";
import { useLocation } from "react-router-dom";
import { NavBar, Header, Divider, NavBack } from "components/ui";

export const Payment: React.FC = () => {
  const search = useLocation().search;
  const get_id = new URLSearchParams(search).get(`id`);
  const id = get_id ? get_id : ``;
  const get_parameter_index  = window.location.pathname.lastIndexOf(`payment`);
  const pathname = window.location.pathname.substring(0, (get_parameter_index - 1));
  const url = `${pathname}?id=${id}`

  return (
    <>
      <NavBack nav={url} />
      <Header header="Payment" />
      <Divider />
      <NavBar />
    </>
  )
}