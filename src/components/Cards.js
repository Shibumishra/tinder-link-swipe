import React,{useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card'

const Data = "https://api.unsplash.com/photos/?client_id=cz3bK1TvB5DRNSs7vKNMl7zMvvniAxVsQ0QHJLYfm1E" 

function Cards() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(Data)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
    return (
        <div>
            <div className="tinder_cards">
                {items.map(list => (
                    <TinderCard
                        className="swipe"
                        key={list.id}
                        preventSwipe={['up', 'down']}

                    >
                        <div
                            style={{ backgroundImage: `url(${list.urls.regular})` }}
                            className="card"
                        >
                            <h3>{list.alt_description}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
export default Cards;
