import { NavLink } from "react-router-dom";


const Card = ({item, link}) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl mt-5 ml-5">
      <figure>
        <img src={item.image} alt={item.title} className="h-48 w-96 object-cover rounded-md" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {
            link ? 
              <NavLink to={link}>{item.title}</NavLink> :
              item.title
          }
        </h2>
        <p>{item.content}</p>
        
      </div>
    </div>
  );
};

export default Card;
