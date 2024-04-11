import React, { useContext, useState, useEffect } from 'react';



function UserProfile() {
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const{userInfo, isLoggedIn} = useContext(UserContext)
 
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setUser(userInfo);
        console.log(userInfo)
      } catch (error) {
        console.error('Errore durante il recupero dei dati utente:', error);
      }
    };


    const fetchUserArticles = async () => { // per ottenere gli articoli letti dall'utente ho creato questa funzione ma
    // Domande teamLead:
      // Come si effettua la richiesta API per ottenere gli articoli letti dall'utente?
      setArticles() // ricordarmi di aggiornare lo stato degli articoli con i dati ottenuti dall'API
    };

    const fetchUserComments = async () => {
      // come in fetchUserArticles
      setComments()
    };
  

    fetchUserData();
    fetchUserArticles();
    fetchUserComments();
  }, []); 

  return (
    <div className="user-profile">
      {user && isLoggedIn && (
        <div>
          <div className="profile-header">
            <div className="avatar-container">
              <img 
              src="/src/assets/userImage.png" 
              alt={'Photo of ' + user.username} 
              style={{width:"90px"}}
              />
            </div>
            <h1>{`👾Ciao ${user.username}, Bentornato!👾`}</h1> 
          </div>
          <div className="user-content">
            {/* <h2>Articoli Letti</h2>
            <ul>
              {articles.map((article) => (
                <li key={article.id}>{article.title}</li>
              ))}
            </ul> */}
             {/* <h2>Commenti</h2>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>{comment.text}</li>
              ))}
            </ul> */}
          </div>
        </div>
      )}
    </div>
  );
}
import { UserContext } from '../../context/UserContext';

export default UserProfile;
