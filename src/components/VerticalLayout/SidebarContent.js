import React, { useEffect } from "react";
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser, FaBuilding } from "react-icons/fa";

const SidebarContent = (props) => {
  useEffect(() => {
    const pathName = props.location.pathname;

    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [props.location.pathname]);

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;

    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      return false;
    }
    return false;
  }

  return (
    <React.Fragment>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li>
            <Link to="/dashboard" className="waves-effect">
              <i className="bx bx-home-circle"></i>
              <span>الصفحة الرئيسية</span>
            </Link>
          </li>
          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="bx bxs-user-detail"></i>
              <span>العملاء</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/my-clients">جميع العملاء</Link>
              </li>
              <li>
                <Link to="/add-client">إضافة عميل</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="bx bxs-user-detail"></i>
              <span>المحفظة</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/add-transactions">السندات المضافة</Link>
              </li>
              <li>
                <Link to="/new-transaction">إضافة سند</Link>
              </li>
            </ul>
          </li>
          <li></li>
          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="bx bxs-user-detail"></i>
              <span>الوظائف</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/all-jobs">جميع الوظائف</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="bx bxs-user-detail"></i>
              <span>التأشيرات</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/add-visa">إضافة تأشيرة</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="bx bxs-user-detail"></i>
              <span>المراجع</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/references">جميع المراجع</Link>
              </li>
              <li>
                <Link to="/add-reference">إضافة مرجع</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="bx bxs-user-detail"></i>
              <span>الوكلاء</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/deputies">جميع الوكلاء</Link>
              </li>
              <li>
                <Link to="/add-deputy">إضافة وكيل</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="bx bxs-user-detail"></i>
              <span>المناديب</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/delegates">جميع المناديب</Link>
              </li>
              <li>
                <Link to="/add-delegate">إضافة مندوب</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#" className="has-arrow waves-effect">
              <i className="bx bxs-user-detail"></i>
              <span>المستخدمين</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
              <li>
                <Link to="/agency-users">جميع المستخدمين</Link>
              </li>
              <li>
                <Link to="/add-agency-user">إضافة مستخدم</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default withRouter(SidebarContent);
