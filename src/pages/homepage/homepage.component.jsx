import Form from "../../components/form.component";
import './homepage.styles.css';
const HomePage = () => 
(
  <div className='homepage'>
      <a href="/cars"><div className="button">Car List</div></a>
      <a href="/cars/new"><div className="button">Add a New Car</div></a>
 </div>
)
  


export default HomePage;  