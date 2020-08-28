import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/44737988_2199882480269261_1117863692319326208_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=9VyHf-qDBpoAX-X39ju&_nc_ht=scontent.fktm8-1.fna&oh=47035f181c285cc3cfafdae3e2527582&oe=5F6C418C"
        title="Bhimraj Yadav"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={LocalHospitalIcon} title="Pages" />
      <SidebarRow Icon={LocalHospitalIcon} title="Friends" />
      <SidebarRow Icon={LocalHospitalIcon} title="Messenger" />
      <SidebarRow Icon={LocalHospitalIcon} title="Marketplace" />
      <SidebarRow Icon={LocalHospitalIcon} title="Videos" />
    </div>
  );
}

export default Sidebar;
