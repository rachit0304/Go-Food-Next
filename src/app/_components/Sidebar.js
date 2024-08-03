import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";


const Sidebar = () => {
  return (
    <>
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '250px' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4">Admin Panel</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link href="/dashboard" className="nav-link link-dark">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/Restaurants" className="nav-link link-dark">
            Manage Restaurants
          </Link>
        </li>
        <li>
          <Link className="nav-link link-dark" href="/users">
            Manage Users
          </Link>
        </li>
        <li>
          <Link className="nav-link link-dark" href="/signup">
            Create Users
          </Link>
        </li>
        <li>
          <Link className="nav-link link-dark" href="/admin/auth">
            Create Admins
          </Link>
        </li>
        <li>
          <Link className="nav-link link-dark" href="/admin/addrestaurant">
            Add Restaurants
          </Link>
        </li>
      </ul> 
    </div>


    </>


  );
};

export default Sidebar;