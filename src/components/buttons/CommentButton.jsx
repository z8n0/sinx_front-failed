import { useState, useEffect } from 'react';
import { ChatCircle, X, PaperPlaneTilt } from '@phosphor-icons/react';
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
      time: 'rn'
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
              <h3>کامنت‌ها</h3>
              <button className="btn-close" onClick={closeSidebar}>
                <X size={24} />
              </button>
            </div>

            <div className="comment-list">
              {comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-avatar">
                    {comment.user.charAt(0)}
                  </div>
                  <div className="comment-content">
                    <div className="comment-meta">
                      <span className="comment-user">{comment.user}</span>
                      <span className="comment-time">{comment.time}</span>
                    </div>
                    <p className="comment-body">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <form className="comment-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="MIG MIG"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit">
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