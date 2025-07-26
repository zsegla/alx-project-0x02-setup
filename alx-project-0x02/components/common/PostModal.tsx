import React, { useState } from 'react';

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (content.trim()) {
            onSubmit(content);
            setContent('');
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="post-modal-overlay">
            <div className="post-modal">
                <button className="post-modal-close-button" onClick={onClose}>
                    &times;
                </button>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="post-modal-textarea"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        placeholder="Write your post..."
                        rows={5}
                    />
                    <button type="submit" className="post-modal-submit-button">
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
};

// import the CSS file at the top of your file
import './PostModal.css';

export default PostModal;