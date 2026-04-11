import { useState, useEffect } from 'react';
import { ChatCircle, X, PaperPlaneTilt, CaretUp, HeartIcon } from '@phosphor-icons/react';
import '../../styles/commentBTN.css';

function CommentSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, user: '1tzArad', text: 'I Have some niggers in my basement!', time: '2h age' },
    { id: 2, user: 'its_dino_', text: 'منم همینطور', time: '1h ago' },
  ]);
  const [newComment, setNewComment] = useState('');

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('comment-overlay')) {
      closeSidebar();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      user: 'You',
      text: newComment,
      time: 'now'
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <>
      <div className="comment-trigger" onClick={openSidebar}>
        <ChatCircle size={24} weight="regular" />
        <span className="comment-count">{comments.length}</span>
      </div>

      {isOpen && (
        <div className="comment-overlay" onClick={handleOverlayClick}>
          <div className="comment-sidebar">
            <div className="comment-header">
              <div className="header-drag-handle"></div>
              <div className="header-content">
                <h3>Comments</h3>
                <button className="btn-close" onClick={closeSidebar}>
                  <X size={24} weight="bold" />
                </button>
              </div>
            </div>
            <div className="comment-list">
              {comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-avatar">
                    {comment.user.charAt(0).toUpperCase()}
                  </div>
                  <div className="comment-content">
                    <div className="comment-meta">
                      <span className="comment-user">{comment.user}</span>
                      <span className="comment-time">{comment.time}</span>
                    </div>
                    <p className="comment-body">{comment.text}</p>
                    <div className="comment-actions">
                      <button className="reply-btn">Reply</button>
                      <button className="like-btn"><HeartIcon /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <form className="comment-form" onSubmit={handleSubmit}>
              {/* <div className="emoji-btn"></div> */}
              <input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit" disabled={!newComment.trim()}>
                <PaperPlaneTilt size={20} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default CommentSection;