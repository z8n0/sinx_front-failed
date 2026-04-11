import { useState } from 'react';
import { Heart } from '@phosphor-icons/react';
import '../../styles/likeBTN.css';


function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div 
      className={`like-trigger ${liked ? 'active' : ''}`} 
      onClick={handleLike}
    >
      <Heart 
        size={24} 
        weight={liked ? "fill" : "regular"}
        color={liked ? "#ef4444" : "var(--text2)"}
      />
      <span className="like-count">0</span>
    </div>
  );
}

export default LikeButton;