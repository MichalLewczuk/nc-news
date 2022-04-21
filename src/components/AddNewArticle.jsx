import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function AddNewArticle() {
  return (
    <Link className="add-new-article" to="/add-new-article">
      Add New Article
      <FontAwesomeIcon className="faCirclePlus" icon={faCirclePlus} />
    </Link>
  );
}

export default AddNewArticle;
