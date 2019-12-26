import React from "react";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDiretorySections } from "../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => {
      return <MenuItem key={id} {...otherSectionProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDiretorySections
});
export default connect(mapStateToProps)(Directory);
