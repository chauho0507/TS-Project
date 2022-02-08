import { FC, useState } from "react";

import { Link } from "react-router-dom";
import IRouteItem from "../interfaces/routeItem";

const SidebarItem: FC<any> = (props: any) => {
  const [toggleItem, setToggleItem] = useState(false);

  return (
    <li className="mb-1">
      <button
        className={`btn ${
          !!props.items.length ? "btn-toggle" : "btn-empty"
        } align-items-center rounded ${!toggleItem ? "collapsed" : ""}`}
        aria-expanded={toggleItem}
        onClick={() => setToggleItem(!toggleItem)}
      >
        {props.name}
      </button>
      {!!props.items.length && (
        <div className={!toggleItem ? "collapse" : "collapse show"}>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            {props.items.map((item: IRouteItem) => {
              return (
                <li>
                  <Link to={item.path} className="link-dark rounded">
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
